import { PolymerElement } from '@polymer/polymer/polymer-element';
import { html } from '@polymer/polymer/lib/utils/html-tag';

customElements.define('fixed-size-item', class extends PolymerElement {

	static get properties() {
		return {
			height: {
				type: String,
				value: '32px'
			},
			width: {
				type: String,
				value: '32px'
			},
			color: {
				type: String,
				value: 'red'
			}
		};
	}

	static get template() {
		return html`
			<style>
				:host {
					display: block;
				}
				#item {
					display: block;
				}
			</style>

			<div id="item" style$="[[ _computeStyle(width, height, color) ]]"></div>
		`;
	}

	_computeStyle(width, height, color) {
		return `
			min-width: ${ width };
			max-width: ${ width };
			min-height: ${ height };
			max-height: ${ height };
			background-color: ${ color };
		`;
	}
});
