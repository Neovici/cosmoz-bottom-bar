import { component } from 'haunted';
import { html } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined';
import { bottomBarSlots } from './cosmoz-bottom-bar';

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
	active = true,
	barHeight
}) => html`
	<style>
		:host {
			position: relative;
			display: flex;
			flex-direction: column;
			flex: var(--cosmoz-bottom-bar-view-flex, auto);
			overflow: hidden;
		}

		#content {
			display: flex;
			flex-direction: column;
			flex: auto;
			-webkit-overflow-scrolling: touch;
			overflow-y: auto;
		}

		#bar {
			background-color: var(--cosmoz-bottom-bar-view-bar-color, rgba(230, 230, 230, 0.8));
			box-shadow: var(--cosmoz-bottom-bar-view-bar-shadow, none);
			position: static;
			flex: none;
		}
	</style>
	<div id="content" part="content">
		<slot name="content"></slot>
		<slot name="scroller-content"></slot>
	</div>
	<cosmoz-bottom-bar id="bar" ?active=${ active } bar-height=${ ifDefined(barHeight) } part="bar">
		<slot></slot>
		${ bottomBarSlots }
	</cosmoz-bottom-bar>
`;
customElements.define('cosmoz-bottom-bar-view', component(CosmozBottomBarView));

