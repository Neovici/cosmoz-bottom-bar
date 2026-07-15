import { toggleSize } from '@neovici/cosmoz-collapse/toggle';
import '@neovici/cosmoz-dropdown';
import { dotsVerticalIcon } from '@neovici/cosmoz-icons/untitled';
import { useActivity } from '@neovici/cosmoz-utils/keybindings/use-activity';
import {
	component,
	css,
	useCallback,
	useEffect,
	useLayoutEffect,
	useMemo,
	useRef,
} from '@pionjs/pion';
import { html as polymerHtml } from '@polymer/polymer/polymer-element.js';
import { html } from 'lit-html';

const BOTTOM_BAR_TOOLBAR_SLOT = 'bottom-bar-toolbar',
	BOTTOM_BAR_MENU_SLOT = 'bottom-bar-menu';

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
			var(--cz-color-bg-secondary)
		);
		border-top: 1px solid var(--cz-color-border-secondary);
		box-shadow: var(--cosmoz-bottom-bar-shadow, none);
		z-index: 1;

		--cosmoz-dropdown-anchor-spacing: 12px 6px;
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
		text-overflow: ellipsis;
		white-space: nowrap;
		flex: 0 0 auto;
		cursor: pointer;
		font-weight: var(--cz-font-weight-semibold);
		text-decoration: none;
		transition: background-color 0.15s ease, box-shadow 0.15s ease;
		white-space: nowrap;
		border: none;

		text-align: center;
		height: 40px;
		padding: calc(var(--cz-spacing) * 2.5) calc(var(--cz-spacing) * 4);
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		border-radius: var(--cz-radius-md);

		background-color: var(--cz-color-bg-brand-solid);
		color: var(--cz-color-text-on-brand);
		box-shadow: var(--cz-shadow-xs-skeumorphic);
	}

	#bottomBarToolbar::slotted(:not(slot)[disabled]) {
		opacity: var(--cosmoz-button-disabled-opacity, 0.15);
		pointer-events: none;
	}

	#bottomBarToolbar::slotted(:not(slot):hover) {
		background-color: var(--cz-color-bg-brand-solid-hover);
	}

	#dropdown::part(content) {
		max-width: 300px;
	}

	#dropdown::part(button) {
		cursor: pointer;
		transition: background-color 0.15s ease, box-shadow 0.15s ease;
		border: none;
		width: 40px;
		height: 40px;
		border-radius: var(--cz-radius-md);
		background-color: var(--cz-color-bg-brand-solid);
		color: var(--cz-color-text-on-brand);
		box-shadow: var(--cz-shadow-xs-skeumorphic);
	}

	#dropdown::part(button):hover {
		background-color: var(--cz-color-bg-brand-solid-hover);
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

export const openMenu = Symbol('openMenu');

const openActionsMenu = (host: HTMLElement) => {
	const dropdown = host.shadowRoot?.querySelector('#dropdown');

	if (!dropdown || dropdown.hasAttribute('hidden')) return;

	//TODO: Clean up when open function is implemented for cosmoz-dropdown-menu
	const cosmozDropdown =
			dropdown.shadowRoot?.querySelector<HTMLElement>('cosmoz-dropdown'),
		button =
			cosmozDropdown?.shadowRoot?.querySelector<HTMLButtonElement>(
				'#dropdownButton'
			);

	button?.click();
};

const isActionNode = (node: Node): node is HTMLElement =>
	node.nodeType === Node.ELEMENT_NODE &&
	(node as HTMLElement).getAttribute('slot') !== 'info' &&
	(node as HTMLElement).tagName !== 'TEMPLATE' &&
	(node as HTMLElement).tagName !== 'STYLE' &&
	(node as HTMLElement).tagName !== 'DOM-REPEAT' &&
	(node as HTMLElement).tagName !== 'DOM-IF' &&
	(node as HTMLElement).getAttribute('slot') !== 'extra';

const getFlattenedNodes = (element: HTMLElement): Node[] => {
	const childNodes = [...element.childNodes];
	const result: Node[] = [];

	for (const node of childNodes) {
		if ((node as HTMLElement).tagName === 'SLOT') {
			const slotElements = (node as HTMLSlotElement).assignedElements({
				flatten: true,
			});
			result.push(...slotElements);
		} else {
			result.push(node);
		}
	}

	return result;
};

const getElements = (host: HTMLElement): HTMLElement[] => {
	const elements = getFlattenedNodes(host)
		.filter(isActionNode)
		.filter((element) => !(element as HTMLElement).hidden)
		.sort(
			(a, b) =>
				(Number((a as HTMLElement).dataset.index) || 0) -
				(Number((b as HTMLElement).dataset.index) || 0)
		) as HTMLElement[];

	if (elements.length === 0) {
		return elements;
	}

	const topPriorityAction = elements.reduce(
		(top, element) =>
			parseInt(top.dataset.priority ?? '0', 10) >=
			parseInt(element.dataset.priority ?? '0', 10)
				? top
				: element,
		{ dataset: { priority: '-1000' } } as unknown as HTMLElement
	);

	return [
		topPriorityAction,
		...elements.filter((e) => e !== topPriorityAction),
	];
};

const moveElement = (
	element: HTMLElement,
	toToolbar: boolean,
	toolbarClass: string,
	menuClass: string
) => {
	const slot = toToolbar ? BOTTOM_BAR_TOOLBAR_SLOT : BOTTOM_BAR_MENU_SLOT;
	element.setAttribute('slot', slot);
	element.setAttribute('tabindex', '0');
	element.classList.toggle(menuClass, !toToolbar);
	element.classList.toggle(toolbarClass, toToolbar);
};

const layoutActions = (
	host: HTMLElement & { maxToolbarItems?: number },
	toolbarClass: string,
	menuClass: string
) => {
	const elements = getElements(host),
		{ maxToolbarItems = 1 } = host,
		hasActions = elements.length > 0;

	if (!hasActions) {
		host.toggleAttribute('has-menu-items', false);
		return;
	}

	const toolbarElements = elements.slice(0, maxToolbarItems),
		menuElements = elements.slice(toolbarElements.length);

	toolbarElements.forEach((el) =>
		moveElement(el, true, toolbarClass, menuClass)
	);
	menuElements.forEach((el) => moveElement(el, false, toolbarClass, menuClass));
	host.toggleAttribute('has-menu-items', menuElements.length > 0);
};

/**
 * `<cosmoz-bottom-bar>` is a horizontal responsive bottom toolbar containing items that
 * can be used for actions.
 *
 * The items placed inside the `cosmoz-bottom-bar` are distributed into the toolbar in a horizontal container.
 * If the items do not fit the available width, those that do not fit are placed in a dropdown
 * menu triggered by a button in the toolbar.
 *
 * Children are collected from a hidden staging slot, then distributed to named slots:
 * - `bottom-bar-toolbar` for items shown as buttons
 * - `bottom-bar-menu` for items shown in the overflow dropdown
 *
 * The top `maxToolbarItems` (sorted by `data-priority`) are placed in the toolbar,
 * the rest go to the menu.
 *
 * @element cosmoz-bottom-bar
 */

type Host = HTMLElement & {
	active?: boolean;
	maxToolbarItems?: number;
};

const CosmozBottomBar = (host: Host) => {
	const { active = false, maxToolbarItems = 1 } = host;
	const mounted = useRef(false);
	const toolbarClass = 'cosmoz-bottom-bar-toolbar';
	const menuClass = 'cosmoz-bottom-bar-menu';

	useActivity(
		{
			activity: openMenu,
			callback: () => openActionsMenu(host),
			check: () => active && !host.hasAttribute('hide-actions'),
			element: () => host.shadowRoot?.querySelector('#dropdown'),
		},
		[active]
	);

	const toggle = useMemo(() => toggleSize('height'), []);

	useLayoutEffect(() => {
		if (!mounted.current) {
			toggle(host, active, { duration: 0 });
		} else {
			toggle(host, active);
		}

		mounted.current = true;
	}, [active]);

	const doLayout = useCallback(
		() => layoutActions(host, toolbarClass, menuClass),
		[maxToolbarItems]
	);

	// Store the hidden attribute observer so onSlotChange can re-observe
	const hiddenObserver = useRef<MutationObserver | null>(null);

	const observeActionNodes = useCallback(() => {
		const observer = hiddenObserver.current;
		if (!observer) return;
		observer.disconnect();
		// Get the actual action nodes (including through nested slots).
		// This is critical for the bottomBarSlots pattern where host.children
		// are <slot> elements and real action nodes are projected through them.
		const actionNodes = getFlattenedNodes(host).filter(isActionNode);
		actionNodes.forEach((node) => {
			observer.observe(node as HTMLElement, {
				attributes: true,
				attributeFilter: ['hidden'],
			});
		});
	}, []);

	// Observe hidden attribute changes on children to trigger relayout.
	useEffect(() => {
		hiddenObserver.current = new MutationObserver(() => {
			observeActionNodes();
			doLayout();
		});

		observeActionNodes();

		// Re-observe when direct children change (handles dynamically added elements)
		const childObserver = new MutationObserver(() => {
			observeActionNodes();
			doLayout();
		});
		childObserver.observe(host, { childList: true });

		return () => {
			hiddenObserver.current?.disconnect();
			hiddenObserver.current = null;
			childObserver.disconnect();
		};
	}, [doLayout]);

	const onSlotChange = useCallback(() => {
		// Re-observe after slot changes, since new elements
		// may have appeared through nested slots
		observeActionNodes();
		doLayout();
	}, [doLayout]);

	return html` <div id="bar" part="bar">
			<div id="info" part="info"><slot name="info"></slot></div>
			<slot
				id="bottomBarToolbar"
				name="bottom-bar-toolbar"
				@slotchange=${onSlotChange}
			></slot>
			<cosmoz-dropdown-menu id="dropdown" part="dropdown">
				${dotsVerticalIcon({ slot: 'button' })}
				<slot id="bottomBarMenu" name="bottom-bar-menu"></slot>
			</cosmoz-dropdown-menu>
			<slot name="extra" id="extraSlot"></slot>
		</div>
		<div hidden style="display:none">
			<slot id="content" @slotchange=${onSlotChange}></slot>
		</div>`;
};

export default CosmozBottomBar;

customElements.define(
	'cosmoz-bottom-bar',
	component(CosmozBottomBar, {
		observedAttributes: ['active', 'max-toolbar-items'],
		styleSheets: [style],
	})
);

const tmplt = `
	<slot name="extra" slot="extra"></slot>
	<slot name="bottom-bar-toolbar" slot="bottom-bar-toolbar"></slot>
	<slot name="bottom-bar-menu" slot="bottom-bar-menu"></slot>
`;

export const bottomBarSlots = html(Object.assign([tmplt], { raw: [tmplt] })),
	bottomBarSlotsPolymer = polymerHtml(Object.assign([tmplt], { raw: [tmplt] }));
