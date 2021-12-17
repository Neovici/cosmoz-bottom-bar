import '@neovici/cosmoz-dropdown';

import { html } from '@polymer/polymer/lib/utils/html-tag';
export default html`
    <style>
        :host {
            display: block;
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            max-width: 100%; /* Firefox fix */
            background-color: inherit;
            transition: max-height 0.3s ease;
            z-index: 10;
						--cosmoz-dropdown-spacing: 0 0 5px 0;
        }

        [hidden] {
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

       ::slotted([disabled]) {
            @apply --cosmoz-bottom-bar-toolbar-item-disabled;
        }
				::slotted([hidden]) {
          display: none !important;
				}

        #bottomBarToolbar::slotted(:not(slot)) {
            margin: 0 0.29em;
            min-width: 40px;
            min-height: 40px;
            text-overflow: ellipsis;
            white-space: nowrap;
            @apply --cosmoz-bottom-bar-toolbar-item;
        }

				#dropdown::part(anchor) {
  				padding: 12px 8px;
				}
				#dropdown::part(dropdown) {
					max-width: 300px;
				}
        #bottomBarMenu::slotted(:not(slot)) {
            position: relative;
            cursor: pointer;
            @apply --cosmoz-bottom-bar-menu-item;
        }
        #bottomBarMenu::slotted(:not(slot):hover) {
           background: #eee;
        }

    </style>

    <div id="bar" style$="[[ _getHeightStyle(computedBarHeight) ]]" part="bar">
        <div id="info">
					<slot name="info"></slot>
        </div>
        <slot id="bottomBarToolbar" name="bottom-bar-toolbar"></slot>
        <cosmoz-dropdown id="dropdown" hidden="[[ !hasMenuItems ]]" placement="[[ topPlacement ]]">
					<svg slot="button" width="4" height="16" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M1.50996e-07 2C1.02714e-07 3.10457 0.89543 4 2 4C3.10457 4 4 3.10457 4 2C4 0.89543 3.10457 -3.91405e-08 2 -8.74228e-08C0.895431 -1.35705e-07 1.99278e-07 0.89543 1.50996e-07 2Z" fill="white"/>
						<path fill-rule="evenodd" clip-rule="evenodd" d="M1.50996e-07 8C1.02714e-07 9.10457 0.89543 10 2 10C3.10457 10 4 9.10457 4 8C4 6.89543 3.10457 6 2 6C0.895431 6 1.99278e-07 6.89543 1.50996e-07 8Z" fill="white"/>
						<path fill-rule="evenodd" clip-rule="evenodd" d="M1.50996e-07 14C1.02714e-07 15.1046 0.89543 16 2 16C3.10457 16 4 15.1046 4 14C4 12.8954 3.10457 12 2 12C0.895431 12 1.99278e-07 12.8954 1.50996e-07 14Z" fill="white"/>
					</svg>
          <slot id="bottomBarMenu" name="bottom-bar-menu"></slot>
        </cosmoz-dropdown>
        <div id="extraToolbarSlot">
          <slot name="extra" id="extraSlot"></slot>
        </div>
    </div>

    <div hidden style="display:none">
        <slot id="content"></slot>
    </div>
`;
