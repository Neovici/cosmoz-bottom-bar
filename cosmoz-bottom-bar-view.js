/*global Polymer, Cosmoz*/

(function () {

	"use strict";

	Polymer({

		is: 'cosmoz-bottom-bar-view',

		behaviors: [
			Cosmoz.ViewInfoBehavior
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

		attached: function () {
			this.scroller = this.$.scroller;
		},

		_getPadding: function (desktop) {
			// if (desktop) {
			// 	return;
			// }
			return 'padding-bottom: ' + this.$.bar.barHeight + 'px';
		}
	});
}());