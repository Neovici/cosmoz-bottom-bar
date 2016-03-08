/*global Polymer, Cosmoz*/

(function () {

	"use strict";

	Polymer({

		is: 'cosmoz-bottom-bar-view',

		behaviors: [
			Cosmoz.ViewInfoBehavior,
			Polymer.IronResizableBehavior
		],

		properties: {

			overflowing: {
				type: Boolean,
				value: false,
				reflectToAttribute: true
			},

			scroller: {
				type: Object
			}
		},

		listeners: {
			'iron-resize': '_onResize'
		},

		attached: function () {
			this.scroller = this.$.scroller;
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

		_getPadding: function (desktop) {
			// if (desktop) {
			// 	return;
			// }
			return 'padding-bottom: ' + this.$.bar.barHeight + 'px';
		},

		_getBarHeight: function (desktop) {
			return 'min-height: ' + this.$.bar.barHeight + 'px';
		}
	});
}());