/* eslint-disable max-lines */
import {
	PolymerElement, html as polymerHtml
} from '@polymer/polymer/polymer-element.js';
import { FlattenedNodesObserver } from '@polymer/polymer/lib/utils/flattened-nodes-observer';
import { Debouncer } from '@polymer/polymer/lib/utils/debounce.js';
import { timeOut } from '@polymer/polymer/lib/utils/async';
import template from './cosmoz-bottom-bar.html.js';
import { html } from 'haunted';

const
	BOTTOM_BAR_TOOLBAR_SLOT = 'bottom-bar-toolbar',
	BOTTOM_BAR_MENU_SLOT = 'bottom-bar-menu',

	slotEq = slot => element => element.getAttribute('slot') === slot;

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
class CosmozBottomBar extends PolymerElement {
	static get template() { // eslint-disable-line max-lines-per-function
		return template;
	}

	// eslint-disable-next-line max-lines-per-function
	static get properties() {
		return {
			/**
			 * Whether the bar is active (shown)
			 */
			active: {
				type: Boolean,
				value: false,
				notify: true,
				reflectToAttribute: true
			},

			/**
			 * Bar height (not used when `matchParent` or `matchElementHeight` is set)
			 */
			barHeight: {
				type: Number,
				value: 64
			},

			/**
			 * Whether to match the height of parent
			 */
			matchParent: {
				type: Boolean,
				value: false
			},

			/**
			 * Whether this bottom bar has items distributed to the menu
			 */
			hasMenuItems: {
				type: Boolean,
				value: false,
				readOnly: true,
				notify: true
			},

			hasExtraItems: {
				type: Boolean,
				value: false
			},

			/**
			 * Class applied the the selected item
			 */
			selectedClass: {
				type: String,
				value: 'cosmoz-bottom-bar-selected-item'
			},

			/**
			 * Class applied to items distributed to the toolbar
			 */
			toolbarClass: {
				type: String,
				value: 'cosmoz-bottom-bar-toolbar'
			},

			/**
			 * Class applied to items distributed to the menu
			 */
			menuClass: {
				type: String,
				value: 'cosmoz-bottom-bar-menu'
			},

			/**
			 * Maximum number of items in toolbar, regardless of space
			 */
			maxToolbarItems: {
				type: Number,
				value: 1
			},

			/**
			 * The actual bar height, depending on if we `matchParent` or set `barHeight`
			 */
			computedBarHeight: {
				type: Number,
				computed: '_computeComputedBarHeight(_matchHeightElement, barHeight, _computedBarHeightKicker)',
				notify: true
			},

			/**
			 * Kicker to make `computedBarHeight` recalculate
			 */
			_computedBarHeightKicker: {
				type: Number
			},

			/**
			 * Whether the bar is visible (has actions and is `active`)
			 */
			visible: {
				type: Boolean,
				notify: true,
				readOnly: true,
				computed: '_computeVisible(hasActions, active, hasExtraItems)'
			},

			/**
			 * Whether we have any visible actions
			 */
			hasActions: {
				type: Boolean,
				value: false,
				readOnly: true,
				notify: true
			},

			/**
			 * Reference element from which to inherit height
			 */
			_matchHeightElement: {
				type: Object,
				computed: '_getHeightMatchingElement(matchParent)'
			}
		};
	}

	static get observers() {
		return [
			'_showHideBottomBar(visible)'
		];
	}

	constructor() {
		super();
		this._boundDropdownClosed = this._dropdownClosed.bind(this);
		this._boundChildrenUpdated = this._childrenUpdated.bind(this);
		this._boundLayoutActions = this._layoutActions.bind(this);
		this._resizeObserver = new ResizeObserver((...args) => {
			cancelAnimationFrame(this._resizeId);
			this._resizeId = requestAnimationFrame(() => this._onResize(...args));
		});
	}

	connectedCallback() {
		super.connectedCallback();

		this.addEventListener('iron-closed-overlay', this._boundDropdownClosed);

		this._hiddenMutationObserver = new MutationObserver(() => {
			this._overflowWidth = undefined;
			this._debounceLayoutActions();
		});
		this._nodeObserver = new FlattenedNodesObserver(this.$.content, this._boundChildrenUpdated);
		this._nodeObserverExtra = new FlattenedNodesObserver(this.$.extraSlot, info =>
			this.set('hasExtraItems', info.addedNodes.length > 0)
		);
		this._resizeObserver.observe(this);
		this._computedBarHeightKicker = 0;
	}

	disconnectedCallback() {
		super.disconnectedCallback();

		this.removeEventListener('iron-closed-overlay', this._boundDropdownClosed);

		this._nodeObserver.disconnect();
		this._nodeObserverExtra.disconnect();
		this._hiddenMutationObserver.disconnect();
		this._layoutDebouncer?.cancel(); /* eslint-disable-line no-unused-expressions */
		this._resizeObserver.unobserve(this);
	}

	_canAddMoreButtonToBar(width, bottomBarElements, menuElements) {
		const hasSpace = width > this._overflowWidth || this._overflowWidth === undefined,
			hasPlace = bottomBarElements.length < this.maxToolbarItems,
			hasCandidates = menuElements.length > 0;

		return hasSpace && hasPlace && hasCandidates;
	}

	_childrenUpdated(info) {
		const addedNodes = info.addedNodes.filter(this._isActionNode),
			removedNodes = info.removedNodes.filter(this._isActionNode),
			newNodes = addedNodes.filter(node => !removedNodes.includes(node));

		if (addedNodes.length === 0 && removedNodes.length === 0) {
			return;
		}
		if (newNodes.length === 0) {
			return;
		}

		newNodes.forEach(node => {
			this._hiddenMutationObserver.observe(node, {
				attributes: true,
				attributeFilter: ['hidden']
			});
			this._moveElement(node, false);
		});

		const toolbarElements = this._getElements().filter(slotEq(BOTTOM_BAR_TOOLBAR_SLOT)),
			toolbarCount = this.maxToolbarItems - toolbarElements.length;

		if (toolbarCount > 0) {
			newNodes
				.filter(node => !node.hidden).slice(0, toolbarCount)
				.forEach(node => this._moveElement(node, true));
		}

		this._debounceLayoutActions();
	}

	// eslint-disable-next-line no-unused-vars
	_computeComputedBarHeight(matchElementHeight, barHeight, kicker) {
		if (matchElementHeight) {
			return matchElementHeight.offsetHeight;
		}
		return barHeight;
	}

	_computeVisible(hasActions, active, hasExtraItems) {
		return (hasActions || hasExtraItems) && active;
	}

	_debounceLayoutActions() {
		this._layoutDebouncer = Debouncer.debounce(
			this._layoutDebouncer,
			timeOut.after(30),
			this._boundLayoutActions
		);
	}

	_dropdownClosed() {
		this.$.dropdownButton.active = false;
	}

	_fireAction(item) {

		if (!item || !item.dispatchEvent) {
			return;
		}

		item.dispatchEvent(new window.CustomEvent('action', {
			bubbles: true,
			cancelable: true,
			detail: {
				item
			}
		}));
	}

	_getHeightMatchingElement(matchParent) {
		if (matchParent) {
			return this.parentElement;
		}

		return null;
	}

	_getHeightStyle(height) {
		return 'height: ' + height + 'px;';
	}

	_isActionNode(node) {
		return node.nodeType === Node.ELEMENT_NODE &&
			node.getAttribute('slot') !== 'info' &&
			node.tagName !== 'TEMPLATE' &&
			node.tagName !== 'STYLE' &&
			node.tagName !== 'DOM-REPEAT' &&
			node.tagName !== 'DOM-IF' &&
			node.getAttribute('slot') !== 'extra';
	}

	_getElements() {
		return FlattenedNodesObserver.getFlattenedNodes(this)
			.filter(this._isActionNode)
			.filter(element => !element.hidden);
	}
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
	_layoutActions() { // eslint-disable-line max-statements
		const elements = this._getElements(),
			toolbar = this.$.toolbar;

		let fits,
			newToolbarElement;

		this._setHasActions(elements.length > 0 || this.hasExtraItems);
		if (!this.hasActions) {
			// No need to render if we don't have any actions
			return;
		}

		const currentWidth = toolbar.clientWidth;
		fits = toolbar.scrollWidth <= currentWidth + 1;

		const toolbarElements = elements.filter(slotEq(BOTTOM_BAR_TOOLBAR_SLOT)),
			menuElements = elements.filter(slotEq(BOTTOM_BAR_MENU_SLOT));

		this._setHasMenuItems(menuElements.length > 0);

		fits = fits && toolbarElements.length <= this.maxToolbarItems;
		fits = fits && toolbarElements.every(element => element.scrollWidth <= element.clientWidth);


		if (fits) {
			if (this._canAddMoreButtonToBar(currentWidth, toolbarElements, menuElements)) {
				newToolbarElement = menuElements[0];
				this._moveElement(newToolbarElement, true);
				// (pasleq) If we are moving the focused element from the menu to the toolbar
				// while the toolbar is open, this will cause an error in iron-control-state
				// that tries to handle lost of focus on an element that has been removed.
				if (toolbarElements.length > 0) {
					toolbarElements[0].focus();
				} else {
					newToolbarElement.focus();
				}
				this.$.menu.close();
				this._debounceLayoutActions();
			}
			return;
		}

		this._overflowWidth = currentWidth;

		if (toolbarElements.length < 1) {
			return;
		}

		const newMenuElement = toolbarElements[toolbarElements.length - 1];
		this._moveElement(newMenuElement, false);
		this._debounceLayoutActions();
	}

	_moveElement(element, toToolbar) {
		const slot = toToolbar ? BOTTOM_BAR_TOOLBAR_SLOT : BOTTOM_BAR_MENU_SLOT,
			tabindex = toToolbar ? '0' : '-1';
		element.setAttribute('slot', slot);
		element.setAttribute('tabindex', tabindex);
		element.classList.toggle(this.menuClass, !toToolbar);
		element.classList.toggle(this.toolbarClass, toToolbar);
		this.updateStyles();
	}

	_onActionSelected(event, detail) {
		this._fireAction(detail.item);
		event.currentTarget.selected = undefined;
	}

	_onResize([entry]) {
		const hidden = entry.borderBoxSize?.[0]?.inlineSize === 0 || entry.contentRect?.width === 0;
		if (hidden) {
			return;
		}
		this._computedBarHeightKicker += 1;
		this._debounceLayoutActions();
	}

	_showHideBottomBar(visible) {
		this.style.transitionDuration = 0;
		this.style.display = '';
		this.style.maxHeight = '';

		const height = this.computedBarHeight,
			from = visible ? '0px' : height + 'px',
			to = !visible ? '0px' : height + 'px';

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
	}
}

customElements.define('cosmoz-bottom-bar', CosmozBottomBar);

const tmplt = `
	<slot name="extra" slot="extra"></slot>
	<slot name="bottom-bar-toolbar" slot="bottom-bar-toolbar"></slot>
	<slot name="bottom-bar-menu" slot="bottom-bar-menu"></slot>
`;

export const
	bottomBarSlots = html([tmplt]),
	bottomBarSlotsPolymer = polymerHtml([tmplt]);
