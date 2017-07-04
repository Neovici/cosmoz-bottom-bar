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
			 * Fixed bar
			 */
			fixed: {
				type: Boolean,
				computed: 'computeFixed(viewInfo.desktop, active)'
			},

			/**
			 * Scroller of bottom-bar is overflowing
			 */
			overflowing: {
				type: Boolean,
				value: false,
				reflectToAttribute: true
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

		computeFixed: function (desktop, active) {
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

		_getBarHeight: function (visible) {
			var height = visible ? this.$.bar.barHeight : 0;
			return [
				'max-height: ' + height + 'px',
				'min-height: ' + height + 'px'
			].join(';');
		}
	});
}());