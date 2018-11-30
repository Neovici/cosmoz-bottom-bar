(() => {

	'use strict';

	const  {
			IronResizableBehavior,
			Element,
			mixinBehaviors,
			Async
		} = Polymer,
		{
			ViewInfoBehavior
		} = Cosmoz,
		BaseElement = mixinBehaviors([
			IronResizableBehavior,
			ViewInfoBehavior
		], Element);

	class CosmozBottomBarView extends BaseElement {

		static get is() {
			return 'cosmoz-bottom-bar-view';
		}

		static get properties() {
			return {
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
			};
		}

		static get observers() {
			return [
				'_updateScrollManagenent(_computedFixed, _scroller)'
			];
		}


		constructor() {
			super();

			this._scrollHandler = this._scrollManagement.bind(this);
		}

		connectedCallback() {
			super.connectedCallback();

			this._scroller = this.$.scroller;
		}

		disconnectedCallback() {
			super.disconnectedCallback();

			this._scroller.removeEventListener('scroll', this._scrollHandler);
		}

		_updateScrollManagenent(fixed, scroller) {
			if (!scroller) {
				return;
			}

			if (fixed) {
				scroller.removeEventListener('scroll', this._scrollHandler);
			} else {
				scroller.addEventListener('scroll', this._scrollHandler);
				this._scrollManagement();
			}
		}

		_scrollManagement() {
			const scrollTop = this._scroller.scrollTop,
				isScrollingUp = this._lastScroll > scrollTop,
				scrollerHeight = this._scroller.clientHeight,
				scrollerScrollHeight = this._scroller.scrollHeight,
				isAtBottom = scrollTop + scrollerHeight + this._computedBarHeight * 0.7 >= scrollerScrollHeight,
				isAtTop = scrollTop === 0;

			this.active = isAtTop || isScrollingUp || isAtBottom;
			this._lastScroll = scrollTop;
		}

		_computeScrollerContentStyle(barHeight, bottomBarVisible) {
			Async.microTask.run(() => this.notifyResize());
			return `padding-bottom: ${bottomBarVisible ? barHeight : 0}px`;
		}

		_computeFixed(fixed, desktop) {
			return fixed == null ? desktop : fixed;
		}
	}

	customElements.define(CosmozBottomBarView.is, CosmozBottomBarView);

})();
