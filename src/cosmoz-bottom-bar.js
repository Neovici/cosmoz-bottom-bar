/* eslint-disable max-lines */
import { FlattenedNodesObserver } from '@polymer/polymer/lib/utils/flattened-nodes-observer';
import { Debouncer } from '@polymer/polymer/lib/utils/debounce.js';
import { timeOut } from '@polymer/polymer/lib/utils/async';
import { defaultPlacement } from '@neovici/cosmoz-dropdown';

import { component, useEffect } from '@pionjs/pion';
import { useHost } from '@neovici/cosmoz-utils/hooks/use-host';
import { notifyProperty } from '@neovici/cosmoz-utils/hooks/use-notify-property';
import template from './cosmoz-bottom-bar.html.js';

const BOTTOM_BAR_TOOLBAR_SLOT = 'bottom-bar-toolbar';
const BOTTOM_BAR_MENU_SLOT = 'bottom-bar-menu';
const rendered = Symbol('rendered');

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
 * @demo demo/bottom-bar.html Basic Demo
 * @demo demo/bottom-bar-match-parent.html match parent Demo
 */
// eslint-disable-next-line max-statements
const CosmozBottomBar = ({
	active = false,
	hideActions = false,
	hasMenuItems = false,
}) => {
	let _layoutDebouncer;
	const host = useHost();

	useEffect(() => {
		notifyProperty(host, 'active', active);
	}, [active]);

	useEffect(() => {
		notifyProperty(host, 'hideActions', hideActions);
	}, [hideActions]);

	useEffect(() => {
		notifyProperty(host, 'hasMenuItems', hasMenuItems);
	}, [hasMenuItems]);

	useEffect(() => {
		const layoutOnRemove = (info) =>
			info.removedNodes.filter(this._isActionNode) &&
			this._debounceLayoutActions();
		this._nodeObservers = [
			new FlattenedNodesObserver(this.$.content, this._boundChildrenUpdated),
			new FlattenedNodesObserver(this.$.extraSlot, (info) =>
				this.set('hasExtraItems', info.addedNodes.length > 0),
			),
			new FlattenedNodesObserver(this.$.bottomBarToolbar, layoutOnRemove),
			new FlattenedNodesObserver(this.$.bottomBarMenu, layoutOnRemove),
		];
		this._hiddenMutationObserver = new MutationObserver(() =>
			this._debounceLayoutActions(),
		);
		this._resizeObserver.observe(this);
		computedBarHeight = _computeComputedBarHeight(
			_matchHeightElement,
			barHeight,
		);

		return () => {
			this[rendered] = false;

			[...this._nodeObservers, this._hiddenMutationObserver].forEach((e) =>
				e.disconnect(e),
			);
			this._layoutDebouncer?.cancel(); /* eslint-disable-line no-unused-expressions */
			this._resizeObserver.unobserve(this);
		};
	}, []);

	const _moveElement = (element, toToolbar) => {
		const slot = toToolbar ? BOTTOM_BAR_TOOLBAR_SLOT : BOTTOM_BAR_MENU_SLOT,
			tabindex = '0';
		element.setAttribute('slot', slot);
		element.setAttribute('tabindex', tabindex);
		element.classList.toggle(menuClass, !toToolbar);
		element.classList.toggle(toolbarClass, toToolbar);
		//this.updateStyles(); // TODO: Check if we need this function call
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

	const _getElements = () => {
		const elements = FlattenedNodesObserver.getFlattenedNodes(this) // TODO: Ask about this line here
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
	 * @returns {void}
	 */
	const _layoutActions = () => {
		// eslint-disable-line max-statements
		const elements = _getElements();
		const hasActions = elements.length > 0 || hasExtraItems;
		this._setHasActions(hasActions); // TODO: Ask about this line

		if (!hasActions) {
			// No need to render if we don't have any actions
			return this._setHasMenuItems(false); // TODO: Ask about this line
		}

		const toolbarElements = elements.slice(0, this.maxToolbarItems);
		const menuElements = elements.slice(toolbarElements.length);

		toolbarElements.forEach((el) => _moveElement(el, true));
		menuElements.forEach((el) => _moveElement(el));
		this._setHasMenuItems(menuElements.length > 0); // TODO: Ask about this line
	};

	const _debounceLayoutActions = () => {
		_layoutDebouncer = Debouncer.debounce(
			_layoutDebouncer,
			timeOut.after(30),
			_layoutActions,
		);
	};

	const _computeComputedBarHeight = (matchElementHeight, barHeight) => {
		if (matchElementHeight) {
			return matchElementHeight.offsetHeight;
		}
		return barHeight;
	};

	return template;
};

customElements.define('cosmoz-bottom-bar-new', component(CosmozBottomBar));
