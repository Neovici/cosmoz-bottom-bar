/*global Cosmoz, document, Polymer, window*/

(function () {

	'use strict';

	Polymer({

		is: 'cosmoz-bottom-bar',

		behaviors: [
			Cosmoz.ViewInfoBehavior
		],

		listeners: {
			'viewinfo-resize': '_onResize',
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

			menuActions: {
				type: Boolean,
				value: false
			},

			_computedBarHeight: {
				type: Number
			},

			_visible: {
				type: Boolean
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
			'_setVisible(_hasActions, active, fixed)',
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

		_setVisible: function (hasActions, active, fixed) {
			this._visible = hasActions && (active || fixed);
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

		_onResize: function (event) {


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

		_childrenUpdated: function () {
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
				buttonsBarElements,
				menuElements,
				notDistributedElements,
				buttonsBar = this.$.buttons,
				currentWidth,
				fits,
				i;

			this._hasAction = elements.length > 0;
			if (!this._hasActions) {
				// No need to render if we don't have any actions
				return;
			}

			buttonsBarElements = elements.filter(function (e) {
				return e.getAttribute('slot') === 'bottom-bar-buttons';
			});

			menuElements = elements.filter(function (e) {
				return e.getAttribute('slot') === 'bottom-bar-menu';
			});

			notDistributedElements = elements.filter(function (e) {
				var attr = e.getAttribute('slot');
				return attr !== 'bottom-bar-buttons' && attr !== 'bottom-bar-menu';
			});


			currentWidth = buttonsBar.clientWidth;
			fits = buttonsBar.scrollWidth <= currentWidth + 1;

			buttonsBarElements.some(function (e) {
				if (typeof e.textOverflow === 'function') {
					fits = !e.textOverflow();
					return true;
				}
				if (e.scrollWidth > e.clientWidth) {
					fits = false;
					return true;
				}
			});

			if (fits) {
				if (this._canAddMoreButtonToBar(currentWidth, buttonsBarElements, menuElements, notDistributedElements)) {
					for (i = 0; i < elements.length; i+=1) {
						if (elements[i].getAttribute('slot') !== 'bottom-bar-buttons') {
							elements[i].setAttribute('slot', 'bottom-bar-buttons');
							break;
						}
					}

					i+=1;

					if (i < elements.length) {
						this.menuActions = true;
					} else {
						this.menuActions = false;
					}

					for (; i < elements.length; i+=1) {
						elements[i].setAttribute('slot', 'bottom-bar-menu');
					}

					this.distributeContent();

					this._debounceLayoutActions();
				}
			} else {
				this._overflowWidth = currentWidth;
				if (buttonsBarElements.length > 0) {
					buttonsBarElements[buttonsBarElements.length - 1].setAttribute('slot', 'bottom-bar-menu');
					this.menuActions = true;
					this.distributeContent();
					this._debounceLayoutActions();
				}
			}
		},

		_debounceLayoutActions: function () {
			this.debounce('layoutActions', this._layoutActions, 20);
		},

		_canAddMoreButtonToBar: function (width, buttonsBarElements, menuElements, notDistributedElements) {
			// Allow up to 4 buttons in the button bar
			// Ensure the buttons are not hidden before counting them.
			var visibleButtonsCount = buttonsBarElements.reduce(function (count, el) {
				if (el.clientWidth > 0) {
					return count + 1;
				}
				return count;
			}, 0);

			if (visibleButtonsCount > 3) {
				return false;
			}

			if (menuElements.length === 0 && notDistributedElements.length === 0) {
				// nothing to add
				return false;
			}

			if (this._overflowWidth === undefined) {
				return true;
			}

			if (width > this._overflowWidth) {
				return true;
			}

			return false;
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

		onActionClick: function (event) {
			this.fireAction(event.currentTarget);
			event.stopPropagation();
		},

		onActionSelect: function (event, detail) {
			this.fireAction(detail.item);
			event.currentTarget.selected = undefined;
			event.stopPropagation();
		}
	});
}());
