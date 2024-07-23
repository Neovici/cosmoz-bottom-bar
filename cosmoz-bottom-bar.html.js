import '@neovici/cosmoz-dropdown';
import { html } from '@polymer/polymer/lib/utils/html-tag';

export default html`
	<style>
		:host {
			display: block;
			bottom: 0;
			left: 0;
			width: 100%;
			max-width: 100%; /* Firefox fix */
			background-color: inherit;
			transition: max-height 0.3s ease;
			flex: none;
			background-color: var(
				--cosmoz-bottom-bar-bg-color,
				rgba(230, 230, 230, 0.8)
			);
			box-shadow: var(--cosmoz-bottom-bar-shadow, none);
			z-index: 1;

			--cosmoz-dropdown-anchor-spacing: 12px 6px;
			--paper-button: {
				background-color: inherit;
				text-transform: none;
				border: 0;
				border-radius: 0;
				font-size: inherit;
				color: inherit;
				font-weight: inherit;
				margin: 0;
				padding: 0;
			};
		}
		:host([force-open]) {
			transition: none;
		}
		[hidden],
		::slotted([hidden]) {
			display: none !important;
		}
		#bar {
			padding: 0 3%;
			display: flex;
			align-items: center;
		}
		#info {
			min-width: 5px;
			padding-right: 3%;
			margin-right: auto;
			white-space: nowrap;
		}
		#bottomBarToolbar::slotted(:not(slot):not([unstyled])) {
			margin: 0 0.29em;
			min-width: 40px;
			min-height: 40px;
			text-overflow: ellipsis;
			white-space: nowrap;
			background: var(
				--cosmoz-bottom-bar-button-bg-color,
				var(--cosmoz-button-bg-color, #101010)
			);
			color: var(
				--cosmoz-bottom-bar-button-color,
				var(--cosmoz-button-color, #fff)
			);
			border-radius: 6px;
			padding: 0 18px;
			font-size: 14px;
			font-weight: 500;
			line-height: 40px;
		}

		#bottomBarToolbar::slotted(:not(slot)[disabled]) {
			opacity: var(--cosmoz-button-disabled-opacity, 0.15);
			pointer-events: none;
		}
		#bottomBarToolbar::slotted(:not(slot):hover) {
			background: var(
				--cosmoz-bottom-bar-button-hover-bg-color,
				var(--cosmoz-button-hover-bg-color, #3a3f44)
			);
		}
		#dropdown::part(content) {
			max-width: 300px;
		}

		:host([hide-actions]) #bottomBarToolbar,
		:host([hide-actions]) #bottomBarMenu,
		:host([hide-actions]) #dropdown {
			display: none;
		}
	</style>
	<div id="bar" style$="[[ _getHeightStyle(computedBarHeight) ]]" part="bar">
		<div id="info"><slot name="info"></slot></div>
		<slot id="bottomBarToolbar" name="bottom-bar-toolbar"></slot>
		<cosmoz-dropdown-menu
			id="dropdown"
			hidden="[[ !hasMenuItems ]]"
			placement="[[ topPlacement ]]"
		>
			<svg
				slot="button"
				width="4"
				height="16"
				viewBox="0 0 4 16"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M1.50996e-07 2C1.02714e-07 3.10457 0.89543 4 2 4C3.10457 4 4 3.10457 4 2C4 0.89543 3.10457 -3.91405e-08 2 -8.74228e-08C0.895431 -1.35705e-07 1.99278e-07 0.89543 1.50996e-07 2Z"
					fill="white"
				/>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M1.50996e-07 8C1.02714e-07 9.10457 0.89543 10 2 10C3.10457 10 4 9.10457 4 8C4 6.89543 3.10457 6 2 6C0.895431 6 1.99278e-07 6.89543 1.50996e-07 8Z"
					fill="white"
				/>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M1.50996e-07 14C1.02714e-07 15.1046 0.89543 16 2 16C3.10457 16 4 15.1046 4 14C4 12.8954 3.10457 12 2 12C0.895431 12 1.99278e-07 12.8954 1.50996e-07 14Z"
					fill="white"
				/>
			</svg>
			<slot id="bottomBarMenu" name="bottom-bar-menu"></slot>
		</cosmoz-dropdown-menu>
		<slot name="extra" id="extraSlot"></slot>
	</div>
	<div hidden style="display:none">
		<slot id="content"></slot>
	</div>
`;
