import { component } from 'haunted';
import { html } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined';
import { ref } from '@neovici/cosmoz-utils/lib/directives/ref';
import { useBottomBarView } from './lib/use-bottom-bar-view';
import './cosmoz-bottom-bar';


/**
 * `cosmoz-bottom-bar-view` contains a content section and a bottom bar with actions.
 *
 * __Important:__ Because `cosmoz-bottom-bar-view` is handling scrolling of its content, it must be explicitly sized.
 * By "explicitly sized", we mean it either has an explicit CSS height property set via a class or inline style,
 * or else is sized by other layout means (e.g. the flex or fit classes).
 *
 * @demo demo/bottom-bar-view.html Basic Demo
*/

const CosmozBottomBarView = ({
	barHeight,
	...pass
}) => { /*eslint-disable no-return-assign */
	const {
		active,
		info
	} = useBottomBarView(pass);

	return html`
			<style>
				:host {
					position: relative;
					overflow: hidden;
					display: flex;
					flex-direction: column;
					-webkit-overflow-scrolling: touch;
					overflow-x: hidden;
					overflow-y: auto;
				}

				#content {
					flex: 1;
				}

				#bar {
					background-color: var(--cosmoz-bottom-bar-view-bar-color, rgba(230, 230, 230, 0.8));
					position: sticky;
					flex: none;
					@apply --cosmoz-bottom-bar-view-bar;
				}
			</style>
			<div id="content" part="content">
				${ref(info)}
				<slot name="content"></slot>
				<slot name="scroller-content"></slot>
			</div>
			<cosmoz-bottom-bar id="bar" ?active=${ active } bar-height=${ ifDefined(barHeight) } part="bar"
				@computed-bar-height-changed=${e => info.computedBarHeight = e.target.computedBarHeight} >
				<slot></slot>
				<slot name="extra" slot="extra"></slot>
			</cosmoz-bottom-bar>
		`;
};
customElements.define('cosmoz-bottom-bar-view', component(CosmozBottomBarView));

