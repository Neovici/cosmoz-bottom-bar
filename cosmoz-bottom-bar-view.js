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
			 * Bar-view and bar are active
			 */
			active: {
				type: Boolean,
				value: true
			},

			/**
			 * Height of the bar
			 */
			barHeight: {
				type: Number
			},

			/**
			 * Fixed bar
			 */
			fixed: {
				type: Boolean,
				computed: '_computeFixed(viewInfo.desktop, active)',
				readOnly: true
			},

			/**
			 * The scroller for the scrolling part of the view
			 */
			scroller: {
				type: Object
			},

			/**
			 * Bar is visible
			 */
			visible: {
				type: Boolean,
				value: true
			}
		},

		listeners: {
			'iron-resize': '_onResize'
		},

		attached: function () {
			this.scroller = this.$.scroller;
		},

		_computeFixed: function (desktop, active) {
			return active && desktop;
		},

		_onResize: function () {
			var scrollerSizer = this.$.scrollerSizer;

			// HACK(pasleq): ensure scrollerSizer is sized correctly.
			scrollerSizer.style.minHeight = '';
			this.async(function () {
				if (scrollerSizer.scrollHeight > scrollerSizer.offsetHeight) {
					scrollerSizer.style.minHeight = scrollerSizer.scrollHeight + 'px';
				}
			});
		},

		_getHeightStyle: function (barHeight) {
			return [
				'max-height: ' + barHeight + 'px',
				'min-height: ' + barHeight + 'px'
			].join(';');
		}
	});
}());
