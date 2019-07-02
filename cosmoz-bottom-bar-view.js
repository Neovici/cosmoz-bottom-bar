import '@webcomponents/shadycss/entrypoints/apply-shim';

import '@polymer/iron-flex-layout/iron-flex-layout';

import { PolymerElement } from '@polymer/polymer/polymer-element';
import { html } from '@polymer/polymer/lib/utils/html-tag';

import { IronResizableBehavior } from '@polymer/iron-resizable-behavior/iron-resizable-behavior';
import { mixinBehaviors } from '@polymer/polymer/lib/legacy/class';
import { microTask } from '@polymer/polymer/lib/utils/async';

import { viewInfoAware } from '@neovici/cosmoz-viewinfo';
import './cosmoz-bottom-bar';

/**
 * `cosmoz-bottom-bar-view` contains a content section and a bottom bar with actions.
 *
 * __Important:__ Because `cosmoz-bottom-bar-view` is handling scrolling of its content, it must be explicitly sized.
 * By "explicitly sized", we mean it either has an explicit CSS height property set via a class or inline style,
 * or else is sized by other layout means (e.g. the flex or fit classes).
 *
 * @demo demo/bottom-bar-view.html Basic Demo
 * @appliesMixin viewInfoAware
*/
class CosmozBottomBarView extends mixinBehaviors([IronResizableBehavior], viewInfoAware(PolymerElement)) {
	static get template() {
		return html`
		<style>
			:host {
				position: relative;
				overflow: hidden;
				display: block;
				/* TODO(plequang): Remove this, as it was added for convenience when the component was not public. */
				@apply --layout-flex;
			}

			#scroller {
				@apply --layout-fit;
				-webkit-overflow-scrolling: touch;
				overflow-x: hidden;
				overflow-y: auto;
			}

			#scrollerContent {
				box-sizing: border-box;
				min-height: 100%;
				@apply --layout-vertical;
			}

			#scrollerContent ::slotted(*) {
				position: relative;
				/* Default to vertical flex layout, but can be overriden locally */
				@apply --layout-vertical;
			}

			cosmoz-bottom-bar {
				background-color: var(--cosmoz-bottom-bar-view-bar-color, rgba(230, 230, 230, 0.8));
				@apply --cosmoz-bottom-bar-view-bar;
			}

		</style>
		<div id="scroller">
			<div id="scrollerContent" style$="[[ _computeScrollerContentStyle(_computedBarHeight, _bottomBarVisible, _computedFixed)]]">
				<slot name="scroller-content"></slot>
			</div>
		</div>
		<cosmoz-bottom-bar id="bottomBar" active="[[ active ]]" visible="{{ _bottomBarVisible }}"
			bar-height="[[ barHeight ]]" computed-bar-height="{{ _computedBarHeight }}">
			<slot></slot>
		</cosmoz-bottom-bar>
`;
	}

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
				value: null
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
				computed: '_computeFixed(fixed, viewInfo.desktop)'
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
		microTask.run(() => this.notifyResize());
		return `padding-bottom: ${bottomBarVisible ? barHeight : 0}px`;
	}

	_computeFixed(fixed, desktop) {
		return fixed == null ? desktop : fixed;
	}
}

customElements.define(CosmozBottomBarView.is, CosmozBottomBarView);
