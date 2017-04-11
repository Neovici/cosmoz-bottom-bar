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
			this._observer = Polymer.dom(this).observeNodes(this.childrenUpdated.bind(this));
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

			var bigger = event && event.detail && event.detail.bigger;

			this.debounce('layoutActions', function () {
				this._layoutActions(bigger);
			}, 50);
		},

		_scrollManagement: function (event) {

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

		_showHideBottomBar: function (visible, height, attached) {
			if (!this._attached) {
				return;
			}
			var	translateY = this._visible
				? 0
				: this._computedBarHeight;

			this.translate3d('0px', translateY + 'px', '0px');
		},

		childrenUpdated: function (info) {
			var menuDom = Polymer.dom(this.$.dropdown);
			// Move all nodes out of the slot and directly into the menu
			// FIXME: Will this work with WC1 native..?
			this.getElements(this.$.actionMenu, true).forEach(function (node) {
				menuDom.appendChild(node);
			});
			this.debounce('layoutActions', function () {
				this._layoutActions(true);
			});
		},

		getElements: function (contentElement, dist) {
			var polyDom = Polymer.dom(contentElement),
				nodeList = dist ? polyDom.getDistributedNodes() : polyDom.children;

			return nodeList.filter(function (node) {
				return node instanceof window.HTMLElement && !node.hasAttribute('hidden') && node.tagName !== 'CONTENT';
			});
		},

		_dropdownClosed: function (event) {
			this.$.dropdownButton.active = false;
		},

		_layoutActions: function (bigger) {
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

			var buttonsBar = this.$.buttons,
				fits = buttonsBar.scrollWidth <= buttonsBar.clientWidth + 1,
				actionButtons = this.getElements(buttonsBar),
				menuItems = this.getElements(this.$.dropdown),
				nodes = this.getElements(this.$.actionMenu, true),
				lastButton,
				firstMenuItem;

			this.menuActions = nodes.length + menuItems.length > 0;
			this._hasActions = this.menuActions || actionButtons.length > 0;

			if (!this._hasActions) {
				// No need to render if we don't have any actions
				return;
			}

			actionButtons.some(function (button) {
				if (typeof button.textOverflow === 'function') {
					fits = !button.textOverflow();
					return true;
				}
				if (button.scrollWidth > button.clientWidth) {
					fits = false;
					return true;
				}
			});

			if (fits) {
				if (actionButtons.length > 3) {
					return;
				}

				if (fits && bigger && this.menuActions) {
					this.menuActions = nodes.length + menuItems.length > 1;
					if (menuItems.length > 0) {
						firstMenuItem = menuItems[0];
					} else {
						firstMenuItem = nodes[0];
					}

					Polymer.dom(this.$.buttons).appendChild(firstMenuItem);
					firstMenuItem.onclick = this.onActionClick;
					this.debounce('layoutActions', function () {
						this._layoutActions(true);
					}, 50);
					return;
				}
			}

			if (!fits && actionButtons.length > 0) {
				lastButton = actionButtons[actionButtons.length - 1];
				if (menuItems.length > 0) {
					Polymer.dom(this.$.dropdown).insertBefore(lastButton, menuItems[menuItems.length - 1]);
				} else {
					Polymer.dom(this.$.dropdown).appendChild(lastButton);
				}
				this.menuActions = true;
				this.debounce('layoutActions', function () {
					this._layoutActions();
				}, 50);
			}
		},
		onActionClick: function (event, detail, sender) {
			var actionButton = event.currentTarget;
			if (actionButton && actionButton.hasAttribute('slot')) {
				actionButton.dispatchEvent(new window.CustomEvent('action', {
					bubbles: true,
					cancelable: true,
					detail: {
						item: actionButton
					}
				}));
				event.stopPropagation();
			}
		},
		onActionSelect: function (event, detail) {
			detail.item.dispatchEvent(new window.CustomEvent('action', {
				bubbles: true,
				cancelable: true,
				detail: {
					item: detail.item
				}
			}));
			event.currentTarget.selected = undefined;
			event.stopPropagation();
		},

		onMenuTap: function (event) {
			this.$.dropdown.open();
		}
	});
}());
