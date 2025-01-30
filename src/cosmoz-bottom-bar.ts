/* eslint-disable max-len */
/* eslint-disable max-lines */
import { html } from 'lit-html';
import { component, css, useLayoutEffect } from '@pionjs/pion';
import { useHost } from '@neovici/cosmoz-utils/hooks/use-host';
import { toggleSize } from '@neovici/cosmoz-collapse/toggle';
import { useActivity } from '@neovici/cosmoz-utils/keybindings/use-activity';
import '@neovici/cosmoz-dropdown';

const style = css`
	:host {
		display: block;
		overflow: hidden;
		bottom: 0;
		left: 0;
		width: 100%;
		max-width: 100%; /* Firefox fix */
		background-color: inherit;
		transition: max-height 0.3s ease;
		flex: none;
		background-color: var(
			--cosmoz-bottom-bar-bg-color,
			rgba(230, 230, 230, 0.8)
		);
		box-shadow: var(--cosmoz-bottom-bar-shadow, none);
		z-index: 1;

		--cosmoz-dropdown-anchor-spacing: 12px 6px;
		--paper-button: {
			background-color: inherit;
			text-transform: none;
			border: 0;
			border-radius: 0;
			font-size: inherit;
			color: inherit;
			font-weight: inherit;
			margin: 0;
			padding: 0;
		};
	}
	:host([force-open]) {
		transition: none;
	}
	[hidden],
	::slotted([hidden]) {
		display: none !important;
	}
	#bar {
		height: 64px;
		padding: 0 3%;
		display: flex;
		align-items: center;
	}
	#info {
		min-width: 5px;
		padding-right: 3%;
		margin-right: auto;
		white-space: nowrap;
	}
	#bottomBarToolbar::slotted(:not(slot):not([unstyled])) {
		margin: 0 0.29em;
		min-width: 40px;
		min-height: 40px;
		text-overflow: ellipsis;
		white-space: nowrap;
		background: var(
			--cosmoz-bottom-bar-button-bg-color,
			var(--cosmoz-button-bg-color, #101010)
		);
		color: var(
			--cosmoz-bottom-bar-button-color,
			var(--cosmoz-button-color, #fff)
		);
		border-radius: 6px;
		padding: 0 18px;
		font-size: 14px;
		font-weight: 500;
		line-height: 40px;
	}

	#bottomBarToolbar::slotted(:not(slot)[disabled]) {
		opacity: var(--cosmoz-button-disabled-opacity, 0.15);
		pointer-events: none;
	}
	#bottomBarToolbar::slotted(:not(slot):hover) {
		background: var(
			--cosmoz-bottom-bar-button-hover-bg-color,
			var(--cosmoz-button-hover-bg-color, #3a3f44)
		);
	}
	#dropdown::part(content) {
		max-width: 300px;
	}

	:host([hide-actions]) #bottomBarToolbar,
	:host([hide-actions]) #bottomBarMenu,
	:host([hide-actions]) #dropdown {
		display: none;
	}

	:host(:not([has-menu-items])) cosmoz-dropdown-menu {
		display: none;
	}
`;

const BOTTOM_BAR_TOOLBAR_SLOT = 'bottom-bar-toolbar';
const BOTTOM_BAR_MENU_SLOT = 'bottom-bar-menu';

const _moveElement = (element: HTMLElement, toToolbar: boolean) => {
	const slot = toToolbar ? BOTTOM_BAR_TOOLBAR_SLOT : BOTTOM_BAR_MENU_SLOT;
	const tabindex = '0';

	element.setAttribute('slot', slot);
	element.setAttribute('tabindex', tabindex);
};

const _isActionNode = (node: Node): node is HTMLElement => {
	if (node.nodeType !== Node.ELEMENT_NODE) {
		return false;
	}

	const element = node as HTMLElement;

	return (
		!['extra', 'info'].includes(element.getAttribute('slot') ?? '') &&
		!['TEMPLATE', 'STYLE', 'DOM-REPEAT', 'DOM-IF'].includes(element.tagName)
	);
};

const getFlattenedNodes = (element: HTMLElement): Node[] => {
	const childNodes = Array.from(element.childNodes);

	for (let i = 0; i < element.childNodes.length; i++) {
		const node = childNodes[i];
		if (!(node instanceof HTMLSlotElement)) continue;

		// replace the slot node with its assigned elements
		const slottedElements = node.assignedElements({ flatten: true });
		childNodes.splice(i, 1, ...slottedElements);
		i += slottedElements.length - 1;
	}

	return childNodes;
};

const _getElements = (host: HTMLElement): HTMLElement[] => {
	const elements = getFlattenedNodes(host)
		.filter(_isActionNode)
		.filter((element) => !element.hidden)
		.sort(
			(a, b) => Number(a.dataset.index ?? 0) - Number(b.dataset.index ?? 0),
		);

	if (elements.length === 0) {
		return elements;
	}

	const initial: { dataset: { priority?: string } } = {
		dataset: { priority: '-1000' },
	};
	const topPriorityAction = elements.reduce((top, element) => {
		return Number(top.dataset.priority ?? 0) >=
			Number(element.dataset.priority ?? 0)
			? top
			: element;
	}, initial);

	return [
		topPriorityAction as HTMLElement,
		...elements.filter((e): e is HTMLElement => e !== topPriorityAction),
	];
};

/**
 * Layout the actions available as buttons or menu items
 *
 * If the window is resizing down, just make sure that all buttons fits, and if not,
 * move one to menu and call itself async (to allow re-rendering) and see if we fit.
 * Repeat until the button fits or no buttons are left.
 *
 * If the window is sizing up, try to place a menu item out as a button, call itself
 * async (to allow re-rendering) and see if we fit - if we don't, remove the button again.
 *
 * We also need to keep track of `_scalingUp` between calls since the resize might fire
 * a lot of events, and we don't want to be starting multiple "calculation processes"
 * since this will result in an infinite loop.
 *
 * The actual layouting of actions will be performed by adding or removing the 'button'
 * attribute from the action, which will cause it to match different content insertion
 * points.
 *
 * @param {*} host The current element
 * @param {*} maxToolbarItems Maximum items for the toolbar
 * @returns {void}
 */
const _layoutActions = (host: HTMLElement, maxToolbarItems: number) => {
	// eslint-disable-line max-statements
	const elements = _getElements(host);
	const hasActions = elements.length > 0;

	if (!hasActions) {
		// No need to render if we don't have any actions
		return host.toggleAttribute('has-menu-items', false);
	}

	const toolbarElements = elements.slice(0, maxToolbarItems);
	const menuElements = elements.slice(toolbarElements.length);

	toolbarElements.forEach((el) => _moveElement(el, true));
	menuElements.forEach((el) => _moveElement(el, false));
	host.toggleAttribute('has-menu-items', menuElements.length > 0);
};

export const openMenu = Symbol('openMenu');

const openActionsMenu = (host: HTMLElement) => {
	const dropdown = host.shadowRoot?.querySelector('#dropdown');

	if (!dropdown || dropdown.hasAttribute('hidden')) return;

	//TODO: Clean up when open function is implemented for cosmoz-dropdown-menu
	const cosmozDropdown =
			dropdown.shadowRoot?.querySelector<HTMLElement>('cosmoz-dropdown'),
		button =
			cosmozDropdown?.shadowRoot?.querySelector<HTMLButtonElement>(
				'dropdownButton',
			);

	button?.click();
};

/**
 * `<cosmoz-bottom-bar>` is a horizontal responsive bottom toolbar containing items that
 * can be used for actions.
 *
 * The items placed inside the `cosmoz-bottom-bar` are distributed into the toolbar in a horizontal container.
 * If the items do not fit the available width, those that do not fit are placed in a dropdown
 * menu triggered by a button in the toolbar.
 * The class specified by the property `toolbarClass` (default `cosmoz-bottom-bar-toolbar`)
 * is applied to items distributed to the toolbar.
 * The class specified in the property `menuClass` (default `cosmoz-bottom-bar-menu`)
 * is applied to items distributed to the menu.
 *
 * ### Usage
 *
 * See demo for example usage
 *
 * @element cosmoz-bottom-bar
 * @demo demo/bottom-bar-next.html Basic Demo
 */

type Props = HTMLElement & {
	active?: boolean;
	maxToolbarItems?: number;
};

const CosmozBottomBar = ({ active = false, maxToolbarItems = 1 }: Props) => {
	const host = useHost();

	useActivity(
		{
			activity: openMenu,
			callback: () => openActionsMenu(host),
			check: () => active && !host.hasAttribute('hide-actions'),
			element: () => host.shadowRoot?.querySelector('#dropdown'),
		},
		[active],
	);

	const toggle = toggleSize('height');

	useLayoutEffect(() => {
		toggle(host, active);
	}, [active]);

	const slotChangeHandler = () => {
		_layoutActions(host, maxToolbarItems);
	};

	return html`<div id="bar" part="bar">
			<div id="info" part="info"><slot name="info"></slot></div>
			<slot
				id="bottomBarToolbar"
				name="bottom-bar-toolbar"
				@slotchange=${slotChangeHandler}
			></slot>
			<cosmoz-dropdown-menu id="dropdown">
				<svg
					slot="button"
					width="4"
					height="16"
					viewBox="0 0 4 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M1.50996e-07 2C1.02714e-07 3.10457 0.89543 4 2 4C3.10457 4 4 3.10457 4 2C4 0.89543 3.10457 -3.91405e-08 2 -8.74228e-08C0.895431 -1.35705e-07 1.99278e-07 0.89543 1.50996e-07 2Z"
						fill="white"
					/>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M1.50996e-07 8C1.02714e-07 9.10457 0.89543 10 2 10C3.10457 10 4 9.10457 4 8C4 6.89543 3.10457 6 2 6C0.895431 6 1.99278e-07 6.89543 1.50996e-07 8Z"
						fill="white"
					/>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M1.50996e-07 14C1.02714e-07 15.1046 0.89543 16 2 16C3.10457 16 4 15.1046 4 14C4 12.8954 3.10457 12 2 12C0.895431 12 1.99278e-07 12.8954 1.50996e-07 14Z"
						fill="white"
					/>
				</svg>
				<slot id="bottomBarMenu" name="bottom-bar-menu"></slot>
			</cosmoz-dropdown-menu>
			<slot name="extra" id="extraSlot"></slot>
		</div>
		<div hidden style="display:none">
			<slot id="content" @slotchange=${slotChangeHandler}></slot>
		</div>`;
};

export default CosmozBottomBar;

customElements.define(
	'cosmoz-bottom-bar',
	component(CosmozBottomBar, {
		observedAttributes: ['active'],
		styleSheets: [style],
	}),
);
