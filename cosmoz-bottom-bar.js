/* eslint-disable max-lines */
import '@webcomponents/shadycss/entrypoints/apply-shim';

import '@polymer/iron-icons';
import '@polymer/paper-icon-button';
import '@polymer/paper-menu-button';
import '@polymer/paper-listbox';
import '@polymer/iron-selector/iron-selector';

import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import { html } from '@polymer/polymer/lib/utils/html-tag';
import { FlattenedNodesObserver } from '@polymer/polymer/lib/utils/flattened-nodes-observer';
import { Debouncer } from '@polymer/polymer/lib/utils/debounce.js';
import { timeOut } from '@polymer/polymer/lib/utils/async';
import { enqueueDebouncer } from '@polymer/polymer/lib/utils/flush';
import { mixinBehaviors } from '@polymer/polymer/lib/legacy/class.js';
import { IronResizableBehavior } from '@polymer/iron-resizable-behavior';

const
	BOTTOM_BAR_TOOLBAR_SLOT = 'bottom-bar-toolbar',
	BOTTOM_BAR_MENU_SLOT = 'bottom-bar-menu';

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
class CosmozBottomBar extends mixinBehaviors([IronResizableBehavior], PolymerElement) {
	static get template() { // eslint-disable-line max-lines-per-function
		return html`
		<style>
			:host {
				display: block;
				position: absolute;
				bottom: 0;
				left: 0;
				width: 100%;
				max-width: 100%; /* Firefox fix */
				background-color: inherit;
				transition: transform 0.5s ease;
				z-index: 10;
			}

			[hidden] {
				display: none !important;
			}

			#bar {
				@apply --layout-horizontal;
				@apply --layout-center;
				padding: 0 3%;
			}

			#info {
				@apply --layout-center;
				@apply --layout-horizontal;
				min-width: 5px;
				padding-right: 3%;
			}

			#dropdownButton {
				color: var(--cosmoz-bottom-bar-menubutton-color, var(--light-primary-color));
				background-color: var(--cosmoz-bottom-bar-menubutton-background-color, var(--dark-primary-color));
				@apply --cosmoz-bottom-bar-menubutton;
			}

			#extraToolbarSlot ::slotted(:not(slot)) {
				@apply --cosmoz-bottom-bar-extra-toolbar-item;
			}

			#flex {
				@apply --layout-flex;
			}

			#toolbar, #extraToolbarSlot {
				@apply --layout-center;
				@apply --layout-horizontal;
				overflow: hidden;
			}

			#menu {
				@apply --layout-center;
				@apply --layout-horizontal;
			}

			#info,
			#menu > div {
				white-space: nowrap;
			}

			#toolbar ::slotted(*) {
				margin: 0 0.29em;
				min-width: 40px;
				min-height: 40px;
				text-overflow: ellipsis;
				white-space: nowrap;
				@apply --cosmoz-bottom-bar-toolbar-item;
			}

			#toolbar ::slotted([disabled]) {
				@apply --cosmoz-bottom-bar-toolbar-item-disabled;
			}

			#toolbar ::slotted([hidden]) {
				display: none !important;
			}

			#dropdown {
				padding: 0;
			}

			/** Seems like a shady dom scoping/slotting issue */
			#listboxSizer {
				max-height: 0;
				padding: 0 !important;
			}

			#dropdown ::slotted(*) {
				display: flex;
				@apply --layout-center;
				@apply --layout-horizontal;
				position: relative;
				@apply --cosmoz-bottom-bar-menu-item;
			}
		</style>

		<div id="bar" style$="[[ _getHeightStyle(computedBarHeight) ]]">
			<div id="info">
				<slot name="info"></slot>
			</div>
			<div id="flex"></div>
			<iron-selector id="toolbar" selected-class="[[ selectedClass ]]" on-iron-select="_onActionSelected">
				<slot id="bottomBarToolbar" name="bottom-bar-toolbar"></slot>
			</iron-selector>
			<paper-menu-button id="menu" hidden$="[[ !hasMenuItems ]]" no-animations
				vertical-offset="[[ barHeight ]]" vertical-align="bottom" horizontal-align="right">

				<paper-icon-button id="dropdownButton" class="dropdown-trigger" slot="dropdown-trigger" icon="menu" toggles raised>
				</paper-icon-button>
				<paper-listbox id="dropdown" class="dropdown-content" slot="dropdown-content" selected-class="[[ selectedClass ]]" on-iron-select="_onActionSelected">
						<span id="listboxSizer"></span>
						<slot id="bottomBarMenu" name="bottom-bar-menu"></slot>
				</paper-listbox>
			</paper-menu-button>
			<iron-selector id="extraToolbarSlot" on-iron-select="_onActionSelected">
				<slot name="extra" id="extraSlot"></slot>
			</iron-selector>
		</div>

		<div hidden style="display:none">
			<slot id="content"></slot>
		</div>
`;
	}

	static get is() {
		return 'cosmoz-bottom-bar';
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
			'_showHideBottomBar(visible, computedBarHeight)'
		];
	}

	constructor() {
		super();
		this._boundOnResize = this._onResize.bind(this);
		this._boundDropdownClosed = this._dropdownClosed.bind(this);
		this._boundChildrenUpdated = this._childrenUpdated.bind(this);
		this._boundLayoutActions = this._layoutActions.bind(this);
	}

	connectedCallback() {
		super.connectedCallback();

		this.addEventListener('iron-resize', this._boundOnResize);
		this.addEventListener('iron-closed-overlay', this._boundDropdownClosed);

		this._hiddenMutationObserver = new MutationObserver(() => {
			this._overflowWidth = undefined;
			this._debounceLayoutActions();
		});
		this._nodeObserver = new FlattenedNodesObserver(this.$.content, this._boundChildrenUpdated);
		this._nodeObserverExtra = new FlattenedNodesObserver(this.$.extraSlot, info =>
			this.set('hasExtraItems', info.addedNodes.length > 0)
		);
		this._computedBarHeightKicker = 0;
	}

	disconnectedCallback() {
		super.disconnectedCallback();

		this.removeEventListener('iron-resize', this._boundOnResize);
		this.removeEventListener('iron-closed-overlay', this._boundDropdownClosed);

		this._nodeObserver.disconnect();
		this._nodeObserverExtra.disconnect();
		this._hiddenMutationObserver.disconnect();
		this._layoutDebouncer.cancel();
	}

	_canAddMoreButtonToBar(width, bottomBarElements, menuElements) {
		const hasSpace = width > this._overflowWidth || this._overflowWidth === undefined,
			hasPlace = bottomBarElements.length < this.maxToolbarItems,
			hasCandidates = menuElements.length > 0;

		return hasSpace && hasPlace && hasCandidates;
	}

	_childrenUpdated(info) {
		const addedNodes = info.addedNodes.filter(this._isActionNode),
			removedNodes = info.removedNodes.filter(this._isActionNode);

		if (addedNodes.length === 0 && removedNodes.length === 0) {
			return;
		}

		addedNodes
		// ignore nodes that are moved between slots
			.filter(node => removedNodes.indexOf(node) === -1)
			.forEach(function (node) {
				this._hiddenMutationObserver.observe(node, {
					attributes: true,
					attributeFilter: [
						'hidden'
					]
				});
				if (node.parentNode !== this) {
					this.appendChild(node);
				}
				this._moveElement(node, true);
			//this._toolbarMoveToStart(node);
			}, this);

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
		enqueueDebouncer(this._layoutDebouncer);
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
			node.tagName !== 'DOM-REPEAT' &&
			node.tagName !== 'DOM-IF' &&
			node.getAttribute('slot') !== 'extra';
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
		const elements = FlattenedNodesObserver.getFlattenedNodes(this).filter(n => n.nodeType === Node.ELEMENT_NODE)
				.filter(this._isActionNode)
				.filter(element => !element.hidden),
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

		const toolbarElements = elements.filter(element => {
				if (element.getAttribute('slot') === BOTTOM_BAR_TOOLBAR_SLOT) {
					// make sure we only read scrollWidth and clientWidth until
					// know that we don't fit
					fits = fits && element.scrollWidth <= element.clientWidth;
					return true;
				}
				return false;
			}),

			menuElements = elements.filter(element => element.getAttribute('slot') === BOTTOM_BAR_MENU_SLOT);

		this._setHasMenuItems(menuElements.length > 0);

		fits = fits && toolbarElements.length <= this.maxToolbarItems;

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
		this.toggleClass(this.menuClass, !toToolbar, element);
		this.toggleClass(this.toolbarClass, toToolbar, element);
		this.updateStyles();
	}

	_onActionSelected(event, detail) {
		this._fireAction(detail.item);
		event.currentTarget.selected = undefined;
	}

	_onResize() {
		this._computedBarHeightKicker += 1;
		this._debounceLayoutActions();
	}

	_showHideBottomBar(visible, barHeight) {
		this.style.display = '';
		const translateY = visible ? 0 : barHeight,
			onEnd = () => {
				clearTimeout(this._hideTimeout);
				this._hideTimeout = null;
				this.style.display = this.visible ? '' : 'none';
			};
		clearTimeout(this._hideTimeout);
		requestAnimationFrame(() => {
			this.translate3d('0px', translateY + 'px', '0px');
			this._hideTimeout = setTimeout(onEnd, 510);
		});
	}

	_toolbarMoveToStart(node) {
		const toolbar = this.$.toolbar;
		if (toolbar.children.length === 0) {
			toolbar.appendChild(node);
			return;
		}
		toolbar.insertBefore(node, toolbar.children[0]);
	}
}

customElements.define(CosmozBottomBar.is, CosmozBottomBar);
