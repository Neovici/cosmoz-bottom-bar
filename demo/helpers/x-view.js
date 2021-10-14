import '@polymer/paper-button';
import { PolymerElement } from '@polymer/polymer/polymer-element';
import '../../cosmoz-bottom-bar.js';
import { html } from '@polymer/polymer/lib/utils/html-tag';

customElements.define('x-view', class extends PolymerElement {
	static get properties() {
		return {
			active: {
				type: Boolean,
				value: false
			}
		};
	}

	// eslint-disable-next-line max-lines-per-function
	static get template() {
		return html`
			<style>
				:host {
					display: block;
					position: absolute;
					top: 0;
					right: 0;
					bottom: 0;
					left: 0;
					display: flex;
					flex-direction: column;
				}

				#bottomBarPlaceholder {
					position: relative;
					min-height: 64px;
					background-color: lightgreen;
				}

				#bottomBar {
					height: 64px;
				}

				#lipsum {
					overflow: auto;
					flex: auto;
				}
			</style>
			<h3>Cosmoz bottom bar with match-parent demo</h3>
			<div id="lipsum">
				<paper-button on-tap="showHideBottomBar">Show/hide bottom bar</paper-button>
				Bottom bar active: <span>[[ active ]]</span>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing
					elit. Quisque pretium erat et nulla euismod congue.
					Maecenas mattis sem ac viverra egestas. Praesent in
					commodo velit, id gravida lectus. Vivamus varius
					fringilla risus ut blandit. Sed laoreet venenatis
					risus, vitae tempus enim tempus a. Praesent ac
					maximus elit. Nam non semper ex. Ut eleifend urna
					sit amet sapien ultrices, vitae ultrices erat
					accumsan.
				</p>
				<p>
					Nullam eros leo, pharetra eget posuere sed, tempor
					sit amet magna. Suspendisse a augue vitae est
					eleifend faucibus. Duis sodales nulla ac est
					sollicitudin mollis. Cras quis dapibus sem, sit amet
					vestibulum elit. Nulla in pellentesque tellus, vitae
					molestie dolor. Nunc sed ex placerat, finibus arcu
					in, sollicitudin neque. Maecenas eu vehicula nibh.
					Morbi ultrices nibh enim, ac congue purus aliquam
					sed.
				</p>

			</div>
			<div id="bottomBarPlaceholder">
				<div style="vertical-align: center">
					The bottom bar will overlap this content
				</div>
				<cosmoz-bottom-bar id="bottomBar" match-parent active="{{ active }}">
					<span slot="info">10</span>
					<slot></slot>
				</cosmoz-bottom-bar>
			</div>
		`;
	}

	showHideBottomBar() {
		this.active = !this.active;
	}
});
