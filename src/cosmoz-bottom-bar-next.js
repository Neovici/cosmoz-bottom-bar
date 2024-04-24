/* eslint-disable max-len */
/* eslint-disable max-lines */
import { html } from 'lit-html';
import { component, useLayoutEffect } from '@pionjs/pion';
import { useHost } from '@neovici/cosmoz-utils/hooks/use-host';
import { style } from './cosmoz-bottom-bar-next.style.js';
import { toggleSize } from '@neovici/cosmoz-collapse/toggle';
import { sheet } from '@neovici/cosmoz-utils';
import '@neovici/cosmoz-dropdown';

const BOTTOM_BAR_TOOLBAR_SLOT = 'bottom-bar-toolbar';
const BOTTOM_BAR_MENU_SLOT = 'bottom-bar-menu';

const _moveElement = (element, toToolbar) => {
	const slot = toToolbar ? BOTTOM_BAR_TOOLBAR_SLOT : BOTTOM_BAR_MENU_SLOT;
	const tabindex = '0';

	element.setAttribute('slot', slot);
	element.setAttribute('tabindex', tabindex);
};

const _isActionNode = (node) => {
	return (
		node.nodeType === Node.ELEMENT_NODE &&
		node.getAttribute('slot') !== 'info' &&
		node.tagName !== 'TEMPLATE' &&
		node.tagName !== 'STYLE' &&
		node.tagName !== 'DOM-REPEAT' &&
		node.tagName !== 'DOM-IF' &&
		node.getAttribute('slot') !== 'extra'
	);
};

const getFlattenedNodes = (element) => {
	const childNodes = [...element.childNodes];

	for (let i = 0; i < element.childNodes.length; i++) {
		const node = element.childNodes[i];
		if (node.tagName === 'SLOT') {
			// remove current slot element
			childNodes.splice(i, 1);

			// append slot elements to the current index
			const slotElements = node.assignedElements({ flatten: true });
			for (let j = 0; j < slotElements.length; j++) {
				const slotElement = slotElements[j];

				childNodes.splice(i + j, 0, slotElement);
			}
		}
	}

	return childNodes;
};

const _getElements = (host) => {
	const elements = getFlattenedNodes(host)
		.filter(_isActionNode)
		.filter((element) => !element.hidden)
		.sort((a, b) => (a.dataset.index ?? 0) - (b.dataset.index ?? 0));

	if (elements.length === 0) {
		return elements;
	}

	const topPriorityAction = elements.reduce(
		(top, element) => {
			return parseInt(top.dataset.priority ?? 0, 10) >=
				parseInt(element.dataset.priority ?? 0, 10)
				? top
				: element;
		},
		{ dataset: { priority: '-1000' } },
		[],
	);

	return [
		topPriorityAction,
		...elements.filter((e) => e !== topPriorityAction),
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
const _layoutActions = (host, maxToolbarItems) => {
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
	menuElements.forEach((el) => _moveElement(el));
	host.toggleAttribute('has-menu-items', menuElements.length > 0);
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
// eslint-disable-next-line max-statements
const CosmozBottomBar = ({ active = false, maxToolbarItems = 1 }) => {
	const host = useHost();

	const toggle = toggleSize('height');

	useLayoutEffect(() => {
		toggle(host, active);
	}, [active]);

	const slotChangeHandler = () => {
		_layoutActions(host, maxToolbarItems);
	};

	return html`<div id="bar" part="bar">
			<div id="info"><slot name="info"></slot></div>
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
	'cosmoz-bottom-bar-next',
	component(CosmozBottomBar, {
		observedAttributes: ['active'],
		styleSheets: [sheet(style)],
	}),
);
