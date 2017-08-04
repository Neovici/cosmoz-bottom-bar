/*global document, Polymer, window*/

(function () {

	'use strict';

	var
		BOTTOM_BAR_TOOLBAR_SLOT = 'bottom-bar-toolbar',
		BOTTOM_BAR_MENU_SLOT = 'bottom-bar-menu';

	Polymer({

		is: 'cosmoz-bottom-bar',

		behaviors: [
			Polymer.IronResizableBehavior
		],

		listeners: {
			'iron-resize': '_onResize',
			'iron-overlay-closed': '_dropdownClosed',
			'transitionend': '_onTransitionEnd'
		},

		properties: {

			/**
			 * Whether the bar is active (shown)
			 * NOTE: This has no effect when `fixed` is `true`
			 */
			active: {
				type: Boolean,
				value: false,
				notify: true,
				reflectToAttribute: true
			},

			/**
			 * Whether the bar is fixed (and take up space) or shows/hides from the bottom when needed
			 * (Usually fixed on desktop and not mobile.)
			 */
			fixed: {
				type: Boolean,
				value: false,
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
			 * Scroller element to listen to when deciding whether or not to show the bar.
			 * Bar will be shown while scrolling up or when reaching bottom
			 */
			scroller: {
				type: Object,
				observer: '_scrollerChanged'
			},

			/**
			 * Whether the `scroller` is overflowing (can scroll) or not
			 */
			scrollerOverflow: {
				type: Boolean,
				value: false,
				readOnly: true,
				notify: true
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
				value: 3
			},

			/**
			 * The actual bar height, depending on if we `matchParent` or set `barHeight`
			 */
			computedBarHeight: {
				type: Number,
				computed: '_computeComputedBarHeight(_matchHeightElement, barHeight, _computedBarHeightKicker)',
				notify: true,
				readOnly: true
			},

			/**
			 * Kicker to make `computedBarHeight` recalculate
			 */
			_computedBarHeightKicker: {
				type: Number
			},

			/**
			 * Whether the bar is visible (has actions and is `active` or `fixed`)
			 */
			visible: {
				type: Boolean,
				notify: true,
				readOnly: true,
				computed: '_computeVisible(hasActions, active, fixed)'
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
			},
		},

		/**
		 * Non-Polymer properties
		 */
		_nodeObserver: undefined,
		_hiddenMutationObserver: undefined,
		_scrollHandler: undefined,

		observers: [
			'_showHideBottomBar(visible, computedBarHeight)'
		],

		attached: function () {
			this._hiddenMutationObserver = new MutationObserver(function (mutations) {
				this._overflowWidth = undefined;
				this._debounceLayoutActions();
			}.bind(this));
			this._nodeObserver = Polymer.dom(this).observeNodes(this._childrenUpdated.bind(this));
			this._computedBarHeightKicker = 0;
		},

		detached: function () {
			Polymer.dom(this).unobserveNodes(this._nodeObserver);
			this._hiddenMutationObserver.disconnect();
			if (this.scroller) {
				this.scroller.removeEventListener('scroll', this._scrollHandler);
			}
		},

		created: function () {
			this._scrollHandler = this._scrollManagement.bind(this);
		},

		_getHeightMatchingElement: function (matchParent) {
			if (matchParent) {
				return this.parentElement;
			}

			return null;
		},

		_computeVisible: function (hasActions, active, fixed) {
			return hasActions && (active || fixed);
		},

		_scrollerChanged: function (newScroller, oldScroller) {
			if (oldScroller) {
				oldScroller.removeEventListener('scroll', this._scrollHandler);
			}

			if (!newScroller) {
				return;
			}

			if (!newScroller.addEventListener) {
				console.warn('New scroller does not have addEventListener', newScroller);
				return;
			}

			newScroller.addEventListener('scroll', this._scrollHandler);
			this._scrollManagement();
		},

		_computeComputedBarHeight: function (matchElementHeight, barHeight, kicker) {
			if (matchElementHeight) {
				return matchElementHeight.offsetHeight;
			}
			return barHeight;
		},

		_getHeightStyle: function (height) {
			return 'height: ' + height + 'px;';
		},

		_onResize: function () {
			this._computedBarHeightKicker += 1;
			this._scrollManagement();
			this._debounceLayoutActions();
		},

		_scrollManagement: function () {

			if (!this.scroller) {
				return;
			}

			var scrollTop = this.scroller.scrollTop,
				isScrollingUp = this.lastScroll > scrollTop,
				scrollerHeight = this.scroller.clientHeight,
				scrollerScrollHeight = this.scroller.scrollHeight,
				isAtBottom = scrollTop + scrollerHeight + this.barHeight * 0.7 >= scrollerScrollHeight,
				isAtTop = scrollTop === 0;

			this.active = isAtTop || isScrollingUp || isAtBottom;
			this._setScrollerOverflow(scrollerScrollHeight > scrollerHeight);
			this.lastScroll = scrollTop;
		},

		_showHideBottomBar: function (visible, barHeight) {
			var	translateY = visible ? 0 : barHeight;

			this.style.height = 'auto';
			this.style.overflow = 'initial';
			this.translate3d('0px', translateY + 'px', '0px');
		},

		_onTransitionEnd: function (event) {
			if (!this.visible && Polymer.dom(event).rootTarget === this) {
				this.style.height = '0px';
				this.style.overflow = 'hidden';
			}
		},

		_isActionNode: function (node) {
			return node.nodeType === Node.ELEMENT_NODE &&
				node.getAttribute('slot') !== 'info' &&
				node.tagName !== 'TEMPLATE';
		},

		_childrenUpdated: function (info) {
			var addedNodes = info.addedNodes.filter(this._isActionNode),
				removedNodes = info.removedNodes.filter(this._isActionNode);

			if (addedNodes.length === 0 && removedNodes.length === 0) {
				return;
			}

			addedNodes
				.filter(function (node) {
					// ignore nodes that are moved between slots
					return removedNodes.indexOf(node) === -1;
				})
				.forEach(function (node) {
					this._hiddenMutationObserver.observe(node, {
						attributes: true,
						attributeFilter: [
							'hidden'
						]
					});
					this._moveElement(node, true);
					this._toolbarMoveToStart(node);
				}, this);

			this._debounceLayoutActions();
		},

		_toolbarMoveToStart: function (node) {
			var toolbar = this.$.toolbar;
			if (toolbar.children.length === 0) {
				toolbar.appendChild(node);
				return;
			}
			toolbar.insertBefore(node, toolbar.children[0]);
		},

		_dropdownClosed: function () {
			this.$.dropdownButton.active = false;
		},

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
		 * @param  {Boolean} bigger If we're sizing up
		 *
		 */

		_layoutActions: function () {
			var elements = this.getEffectiveChildren()
					.filter(this._isActionNode)
					.filter(function (element) {
						return !element.hidden;
					}),
				toolbarElements,
				menuElements,
				toolbar = this.$.toolbar,
				currentWidth,
				fits,
				newToolbarElement,
				newMenuElement;

			this._setHasActions(elements.length > 0);
			if (!this.hasActions) {
				// No need to render if we don't have any actions
				return;
			}

			currentWidth = toolbar.clientWidth;
			fits = toolbar.scrollWidth <= currentWidth + 1;

			toolbarElements = elements.filter(function (element) {
				if (element.getAttribute('slot') === BOTTOM_BAR_TOOLBAR_SLOT) {
					// make sure we only read scrollWidth and clientWidth until
					// know that we don't fit
					fits = fits && element.scrollWidth <= element.clientWidth;
					return true;
				}
			});

			menuElements = elements.filter(function (element) {
				return element.getAttribute('slot') === BOTTOM_BAR_MENU_SLOT;
			});

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

			newMenuElement = toolbarElements[toolbarElements.length - 1];
			this._moveElement(newMenuElement, false);
			this._debounceLayoutActions();
		},

		_moveElement: function (element, toToolbar) {
			var slot = toToolbar ? BOTTOM_BAR_TOOLBAR_SLOT : BOTTOM_BAR_MENU_SLOT,
				tabindex = toToolbar ? '0' : '-1';

			element.setAttribute('slot', slot);
			element.setAttribute('tabindex', tabindex);
			this.toggleClass(this.menuClass, !toToolbar, element);
			this.toggleClass(this.toolbarClass, toToolbar, element);
		},

		_debounceLayoutActions: function () {
			this.debounce('layoutActions', this._layoutActions, 30);
		},

		_canAddMoreButtonToBar: function (width, bottomBarElements, menuElements) {

			var hasSpace = width > this._overflowWidth || this._overflowWidth === undefined,
				hasPlace = bottomBarElements.length < this.maxToolbarItems,
				hasCandidates = menuElements.length > 0;

			return hasSpace && hasPlace && hasCandidates;
		},

		_onActionSelected: function (event, detail) {
			this._fireAction(detail.item);
			event.currentTarget.selected = undefined;
		},

		_fireAction: function (item) {

			if (!item || !item.dispatchEvent) {
				return;
			}

			item.dispatchEvent(new window.CustomEvent('action', {
				bubbles: true,
				cancelable: true,
				detail: {
					item: item
				}
			}));
		}
	});
}());
