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
			'iron-overlay-closed': '_dropdownClosed'
		},

		properties: {

			/** Whether the bar is active/shown (always active when fixed) */
			active: {
				type: Boolean,
				value: false,
				reflectToAttribute: true
			},

			/** Whether the bar is fixed (and take up space) or shows/hides from the bottom when needed - usually fixed on desktop and not mobile */
			fixed: {
				type: Boolean,
				value: false
			},

			/** Bar height (not applicable when "matchParent" or "matchElementHeight" is set) */
			barHeight: {
				type: Number,
				value: 64
			},

			/** Reference element from which to inherit height */
			matchElementHeight: {
				type: Object,
				value: undefined
			},

			/** Whether to match the height of parent (set reference element to parent) */
			matchParent: {
				type: Boolean,
				value: false,
				observer: '_matchParentChanged'
			},

			/** Scroller element to listen to when deciding whether or not to show the bar. Bar will be shown while scrolling up or when reaching bottom */
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

			_computedBarHeight: {
				type: Number
			},

			_visible: {
				type: Boolean,
				computed: '_computeVisible(_hasAction, active, fixed)'
			},

			_attached: {
				type: Boolean
			},

			_hasActions: {
				type: Boolean,
				value: true
			}
		},

		observers: [
			'_showHideBottomBar(_visible, _computedBarHeight, _attached)'
		],

		_observer: undefined,

		attached: function () {
			this._observer = Polymer.dom(this).observeNodes(this._childrenUpdated.bind(this));
			this._attached = true;
			this._computeBarHeight();
		},

		detached: function () {
			Polymer.dom(this).unobserveNodes(this._observer);
		},

		created: function () {
			this.scrollHandler = this._scrollManagement.bind(this);
		},

		_computeVisible: function (hasActions, active, fixed) {
			return hasActions && (active || fixed);
		},

		_matchParentChanged: function () {
			if (this.matchParent) {
				this.matchElementHeight = this.parentElement;
			} else {
				this.matchElementHeight = null;
			}
		},

		_scrollerChanged: function (newScroller, oldScroller) {
			if (newScroller === undefined) {
				return;
			}
			if (oldScroller) {
				oldScroller.removeEventListener('scroll', this.scrollHandler);
			}
			if (newScroller) {
				if (!newScroller.addEventListener) {
					console.warn('New scroller does not have addEventListener', newScroller);
					return;
				}
				newScroller.addEventListener('scroll', this.scrollHandler);
				this.lastScroll = newScroller.scrollTop;
			}
		},

		_computeBarHeight: function () {
			if (this.matchElementHeight) {
				this._computedBarHeight = this.matchElementHeight.offsetHeight;
			} else {
				this._computedBarHeight = this.barHeight;
			}

			this.$.canvas.style.height = this._computedBarHeight + 'px';
		},

		_onResize: function () {

			this._computeBarHeight();

			this._scrollManagement();

			this._debounceLayoutActions();
		},

		_scrollManagement: function () {

			if (this.scroller === undefined) {
				return;
			}

			var scrollTop = this.scroller.scrollTop,
				up = this.lastScroll > scrollTop,
				scrollerHeight = this.scroller.clientHeight,
				scrollerScrollHeight = this.scroller.scrollHeight,
				atBottom = scrollTop + scrollerHeight + this.barHeight * 0.7 >= scrollerScrollHeight;

			this.active = up || atBottom;
			this.scrollerOverflow = scrollerScrollHeight > scrollerHeight;
			this.lastScroll = scrollTop;
		},

		_showHideBottomBar: function () {
			if (!this._attached) {
				return;
			}
			var	translateY = this._visible
				? 0
				: this._computedBarHeight;

			this.translate3d('0px', translateY + 'px', '0px');
		},

		_childrenUpdated: function (info) {
			var elements = this._getElementToDistribute();
			// Initially distribute elements to the menu.
			elements.forEach(function (e) {
				var slot = e.getAttribute('slot');
				if (slot !== BOTTOM_BAR_MENU_SLOT && slot !== BOTTOM_BAR_TOOLBAR_SLOT) {
					e.setAttribute('slot', BOTTOM_BAR_MENU_SLOT);
					e.setAttribute('tabindex', '-1');
					this.toggleClass(this.toolbarClass, false, e);
					this.toggleClass(this.menuClass, true, e);
				}
			}, this);
			this._debounceLayoutActions();
		},

		_getElementToDistribute: function () {
			var elements = this.getEffectiveChildren();
			return elements.filter(function (e) {
				return e.getAttribute('slot') !== 'info';
			});
		},

		_dropdownClosed: function () {
			this.$.dropdownButton.active = false;
		},

		forceLayout: function () {
			this._overflowWidth = undefined;
			this._childrenUpdated();
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
			var
				elements = this._getElementToDistribute(),
				toolbarElements,
				menuElements,
				toolbar = this.$.toolbar,
				currentWidth,
				fits,
				newToolbarElement,
				newMenuElement;

			this._hasAction = elements.length > 0;
			if (!this._hasActions) {
				// No need to render if we don't have any actions
				return;
			}

			currentWidth = toolbar.clientWidth;
			fits = toolbar.scrollWidth <= currentWidth + 1;

			toolbarElements = elements.filter(function (e) {
				if (e.hidden) {
					return false;
				}

				if (e.getAttribute('slot') === BOTTOM_BAR_TOOLBAR_SLOT) {
					if (e.scrollWidth > e.clientWidth) {
						fits = false;
					}
					return true;
				}
			});

			menuElements = elements.filter(function (e) {
				return !e.hidden && e.getAttribute('slot') === BOTTOM_BAR_MENU_SLOT;
			});

			if (fits) {
				if (this._canAddMoreButtonToBar(currentWidth, toolbarElements, menuElements)) {
					newToolbarElement = menuElements[0];
					newToolbarElement.setAttribute('slot', BOTTOM_BAR_TOOLBAR_SLOT);
					newToolbarElement.setAttribute('tabindex', '0');
					this.toggleClass(this.toolbarClass, true, newToolbarElement);
					this.toggleClass(this.menuClass, false, newToolbarElement);
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
				}
				this.hasMenuItems = menuElements.length > 0;
			} else {
				this._overflowWidth = currentWidth;
				if (toolbarElements.length > 0) {
					newMenuElement = toolbarElements[toolbarElements.length - 1];
					newMenuElement.setAttribute('slot', BOTTOM_BAR_MENU_SLOT);
					newMenuElement.setAttribute('tabindex', '-1');
					this.toggleClass(this.menuClass, true, newMenuElement);
					this.toggleClass(this.toolbarClass, false, newMenuElement);
					this.hasMenuItems = true;
					this.distributeContent();
					this._debounceLayoutActions();
				}
			}
		},

		_debounceLayoutActions: function () {
			this.debounce('layoutActions', this._layoutActions, 30);
		},

		_canAddMoreButtonToBar: function (width, bottomBarElements, menuElements) {
			if ((width > this._overflowWidth || this._overflowWidth === undefined)
				&& bottomBarElements.length < this.maxToolbarItems && menuElements.length > 0) {
				return true;
			}

			return false;
		},

		_onActionSelected: function (event, detail) {
			this.fireAction(detail.item);
			event.currentTarget.selected = undefined;
		},

		fireAction: function (item) {
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
		},
	});
}());
