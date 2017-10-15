/*global Polymer, Cosmoz*/

(function () {

	'use strict';

	Polymer({

		is: 'cosmoz-bottom-bar-view',

		behaviors: [
			Cosmoz.ViewInfoBehavior,
			Polymer.IronResizableBehavior
		],

		properties: {

			/**
			 * Height of the bar
			 */
			barHeight: {
				type: Number
			},

			/**
			 * When set to true, activate the bottom bar.
			 */
			active: {
				type: Boolean,
				value: true,
				notify: true
			},

			/**
			 * Set to true to have a fixed bottom that does not disappear upon scrolling.
			 */
			fixed: {
				type: Boolean,
				value: null,
			},

			_bottomBarActive: {
				type: Boolean
			},

			_bottomBarVisible: {
				type: Boolean
			},

			_computedBarHeight: {
				type: Number
			},

			_computedFixed: {
				type: Boolean,
				computed: '_computeFixed(fixed, viewInfo.desktop)',
			},

			_scroller: {
				type: Object
			}
		},

		observers: [
			'_updateScrollManagenent(_computedFixed, _scroller)'
		],

		created: function () {
			this._scrollHandler = this._scrollManagement.bind(this);
		},

		attached: function () {
			this._scroller = this.$.scroller;
		},

		detached: function () {
			this._scroller.removeEventListener('scroll', this._scrollHandler);
		},

		_updateScrollManagenent: function (fixed, scroller) {
			if (!scroller) {
				return;
			}

			if (fixed) {
				scroller.removeEventListener('scroll', this._scrollHandler);
			} else {
				scroller.addEventListener('scroll', this._scrollHandler);
				this._scrollManagement();
			}
		},

		_scrollManagement: function (e) {
			var scrollTop = this._scroller.scrollTop,
				isScrollingUp = this._lastScroll > scrollTop,
				scrollerHeight = this._scroller.clientHeight,
				scrollerScrollHeight = this._scroller.scrollHeight,
				isAtBottom = scrollTop + scrollerHeight + this._computedBarHeight * 0.7 >= scrollerScrollHeight,
				isAtTop = scrollTop === 0;

			this.active = isAtTop || isScrollingUp || isAtBottom;
			this._lastScroll = scrollTop;
		},

		_computeScrollerContentStyle: function (barHeight, bottomBarVisible, fixed) {
			// If bottom bar is visible, we need to reserve some space for it at the bottom of the scroller.
			// When changing the scroller content padding bottom value, space available inside the scroller
			// will change so we need to notify descendants of a resize
			this.async(function () {
				// eslint-disable-next-line no-invalid-this
				this.notifyResize();
			}, 10);

			if (bottomBarVisible) {
				return 'padding-bottom: ' + barHeight  + 'px';
			}

			return 'padding-bottom: 0px';
		},

		_computeFixed: function (fixed, desktop) {
			if (fixed === null) {
				return desktop;
			}
			return fixed;
		},
	});
}());
