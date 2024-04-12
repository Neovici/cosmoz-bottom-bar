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
const CosmozBottomBar = ({
	active = false,
	hideActions = false,
	barHeight = 64,
	matchParent = false,
	hasMenuItems = false,
	hasExtraItems = false,
	selectedClass = 'cosmoz-bottom-bar-selected-item',
	toolbarClass = 'cosmoz-bottom-bar-toolbar',
	menuClass = 'cosmoz-bottom-bar-menu',
	maxToolbarItems = 1,
	computedBarHeight,
	forceOpen = false,
	visible,
	hasActions = false,
	_matchHeightElement,
	topPlacement = ['top-right', ...defaultPlacement],
}) => {
	const host = useHost();

	useEffect(() => {
		notifyProperty(host, 'active', active);
	}, [active]);

	useEffect(() => {
		notifyProperty(host, 'hideActions', hideActions);
	}, [hideActions]);

	this._boundChildrenUpdated = this._childrenUpdated.bind(this);
	this._boundLayoutActions = this._layoutActions.bind(this);
	this._resizeObserver = new ResizeObserver((...args) => {
		cancelAnimationFrame(this._resizeId);
		this._resizeId = requestAnimationFrame(() => this._onResize(...args));
	});

	const connectedCallback = () => {
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
		this.computedBarHeight = this._computeComputedBarHeight(
			this._matchHeightElement,
			this.barHeight,
		);
	};

	const disconnectedCallback = () => {
		super.disconnectedCallback();
		this[rendered] = false;

		[...this._nodeObservers, this._hiddenMutationObserver].forEach((e) =>
			e.disconnect(e),
		);
		this._layoutDebouncer?.cancel(); /* eslint-disable-line no-unused-expressions */
		this._resizeObserver.unobserve(this);
	};

	const _childrenUpdated = (info) => {
		const addedNodes = info.addedNodes.filter(this._isActionNode),
			removedNodes = info.removedNodes.filter(this._isActionNode),
			newNodes = addedNodes.filter((node) => !removedNodes.includes(node));

		if (
			(addedNodes.length === 0 && removedNodes.length === 0) ||
			newNodes.length === 0
		) {
			return;
		}
		newNodes.forEach((node) => {
			this._hiddenMutationObserver.observe(node, {
				attributes: true,
				attributeFilter: ['hidden'],
			});
			this._moveElement(node, false);
		});

		this._debounceLayoutActions();
	};

	const _computeComputedBarHeight = (matchElementHeight, barHeight) => {
		if (matchElementHeight) {
			return matchElementHeight.offsetHeight;
		}
		return barHeight;
	};

	const _computeVisible = (hasActions, active, hasExtraItems, forceOpen) => {
		return forceOpen || ((hasActions || hasExtraItems) && active);
	};

	const _debounceLayoutActions = () => {
		this._layoutDebouncer = Debouncer.debounce(
			this._layoutDebouncer,
			timeOut.after(30),
			this._boundLayoutActions,
		);
	};

	const _getHeightMatchingElement = (matchParent) => {
		if (matchParent) {
			return this.parentElement;
		}

		return null;
	};

	const _getHeightStyle = (height) => {
		return 'height: ' + height + 'px;';
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
		const elements = FlattenedNodesObserver.getFlattenedNodes(this)
			.filter(this._isActionNode)
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
		const elements = this._getElements(),
			hasActions = elements.length > 0 || this.hasExtraItems;
		this._setHasActions(hasActions);

		if (!hasActions) {
			// No need to render if we don't have any actions
			return this._setHasMenuItems(false);
		}

		const toolbarElements = elements.slice(0, this.maxToolbarItems),
			menuElements = elements.slice(toolbarElements.length);
		toolbarElements.forEach((el) => this._moveElement(el, true));
		menuElements.forEach((el) => this._moveElement(el));
		this._setHasMenuItems(menuElements.length > 0);
	};

	const _moveElement = (element, toToolbar) => {
		const slot = toToolbar ? BOTTOM_BAR_TOOLBAR_SLOT : BOTTOM_BAR_MENU_SLOT,
			tabindex = '0';
		element.setAttribute('slot', slot);
		element.setAttribute('tabindex', tabindex);
		element.classList.toggle(this.menuClass, !toToolbar);
		element.classList.toggle(this.toolbarClass, toToolbar);
		this.updateStyles();
	};

	const _onResize = ([entry]) => {
		const hidden =
			entry.borderBoxSize?.[0]?.inlineSize === 0 ||
			entry.contentRect?.width === 0;
		if (hidden) {
			return;
		}
		this.computedBarHeight = this._computeComputedBarHeight(
			this._matchHeightElement,
			this.barHeight,
		);
	};

	const _showHideBottomBar = (visible) => {
		this.style.transitionDuration = 0;
		this.style.display = '';
		this.style.maxHeight = '';

		const height = this.computedBarHeight,
			to = !visible ? '0px' : height + 'px';

		let from = visible ? '0px' : height + 'px';

		if (!this[rendered]) {
			from = to;
			this[rendered] = true;
		}

		this.style.maxHeight = from;

		const onEnd = () => {
			this.removeEventListener('transitionend', onEnd);
			this.style.maxHeight = '';
			this.style.display = this.visible ? '' : 'none';
		};
		requestAnimationFrame(() => {
			this.addEventListener('transitionend', onEnd);
			this.style.transitionDuration = '';
			this.style.maxHeight = to;
		});
	};

	return template;
};

customElements.define('cosmoz-dropdown-list', component(CosmozBottomBar));
