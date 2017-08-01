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

			/** Whether the bar is active/shown (always active when fixed) */
			active: {
				type: Boolean,
				value: false,
				reflectToAttribute: true
			},

			/** Whether the bar is fixed (and take up space) or shows/hides from the bottom when needed
			 ** usually fixed on desktop and not mobile
			 */
			fixed: {
				type: Boolean,
				value: false,
				reflectToAttribute: true
			},

			/** Bar height (not applicable when "matchParent" or "matchElementHeight" is set) */
			barHeight: {
				type: Number,
				value: 64
			},

			/** Reference element from which to inherit height */
			matchElementHeight: {
				type: Object,
				computed: 'computeMatchElementHeight(matchParent)'
			},

			/** Whether to match the height of parent (set reference element to parent) */
			matchParent: {
				type: Boolean,
				value: false
			},

			/** Scroller element to listen to when deciding whether or not to show the bar.
			 * 	Bar will be shown while scrolling up or when reaching bottom
			 */
			scroller: {
				type: Object,
				observer: '_scrollerChanged'
			},

			scrollerOverflow: {
				type: Boolean,
				value: false,
				notify: true
			},

			/**
			 * Indicates wether this bottom bar has items distributed to the menu.
			 */
			hasMenuItems: {
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

			maxToolbarItems: {
				type: Number,
				value: 3
			},

			computedBarHeight: {
				type: Number,
				computed: '_computeComputedBarHeight(matchElementHeight, barHeight, _computedBarHeightKicker)',
				notify: true
			},

			_computedBarHeightKicker: {
				type: Number
			},

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
			}
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
			var context = this;

			this._hiddenMutationObserver = new MutationObserver(function (mutations) {
				var layoutingChange = mutations.some(function (mutation) {
					return mutation.attributeName === 'hidden';
				});
				if (layoutingChange) {
					context._forceLayout();
				}
			});
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

		_computeVisible: function (hasActions, active, fixed) {
			return hasActions && (active || fixed);
		},

		computeMatchElementHeight: function (matchParent) {
			if (matchParent) {
				return this.parentElement;
			}

			return null;
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
			this.lastScroll = newScroller.scrollTop;
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
			this.scrollerOverflow = scrollerScrollHeight > scrollerHeight;
			this.lastScroll = scrollTop;
		},

		_showHideBottomBar: function (visible, barHeight) {
			var	translateY = visible ? 0 : barHeight;

			this.style['height'] = 'auto';
			this.style['overflow'] = 'initial';
			this.translate3d('0px', translateY + 'px', '0px');
		},

		_onTransitionEnd: function (event) {
			if (Polymer.dom(event).rootTarget === this
				&& !this.visible) {
				this.style['height'] = '0px';
				this.style['overflow'] = 'hidden';
			}
		},

		_childrenUpdated: function (info) {
			info.addedNodes.forEach(function (node) {
				if (node.nodeType === Node.ELEMENT_NODE) {
					this._hiddenMutationObserver.observe(node, {
						attributes: true
					});
				}
			}, this);

			// Initially distribute elements to the menu.
			this._getElementToDistribute().forEach(function (element) {
				var slot = element.getAttribute('slot');
				if (slot !== BOTTOM_BAR_MENU_SLOT && slot !== BOTTOM_BAR_TOOLBAR_SLOT) {
					this._moveElement(element, false);
				}
			}, this);
			this._debounceLayoutActions();
		},

		_getElementToDistribute: function () {
			return this.getEffectiveChildren()
				.filter(function (element) {
					return !element.hidden && element.getAttribute('slot') !== 'info' && element.tagName !== 'TEMPLATE';
				}, this);
		},

		_dropdownClosed: function () {
			this.$.dropdownButton.active = false;
		},

		/**
		 * Causes a new layouting of all the bottom bar elements after visibility of one of the element has changed.
		 * This is implemented by placing all elements in the menu and trying to fill the toolbar.
		 * @returns {void}
		 */

		_forceLayout: function () {
			this._overflowWidth = undefined;
			this._getElementToDistribute().forEach(function (element) {
				this._moveElement(element, false);
			}, this);
			this._debounceLayoutActions();
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
			var elements = this._getElementToDistribute(),
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

			if (fits && toolbarElements.length === this.maxToolbarItems) {
				return;
			}

			fits = fits && toolbarElements.length < this.maxToolbarItems;

			menuElements = elements.filter(function (e) {
				return e.getAttribute('slot') === BOTTOM_BAR_MENU_SLOT;
			});

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
					this.distributeContent();
					this._debounceLayoutActions();
					this.hasMenuItems = menuElements.length > 1;
				} else {
					this.hasMenuItems = menuElements.length > 0;
				}
				return;
			}

			this._overflowWidth = currentWidth;

			if (toolbarElements.length < 1) {
				return;
			}

			newMenuElement = toolbarElements[toolbarElements.length - 1];
			this._moveElement(newMenuElement, false);
			this.hasMenuItems = true;
			this.distributeContent();
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
