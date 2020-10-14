import '@webcomponents/shadycss/entrypoints/apply-shim';

import '@polymer/iron-icons';
import '@polymer/paper-icon-button';
import '@polymer/paper-menu-button';
import '@polymer/paper-listbox';
import '@polymer/iron-selector/iron-selector';

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
            transition: transform 0.5s ease;
            z-index: 10;
        }

        [hidden] {
            display: none !important;
        }

        #bar, #info, #toolbar, #extraToolbarSlot, #menu, #dropdown ::slotted(*) {
            display: flex;
            align-items: center;
        }

        #bar {
            padding: 0 3%;
        }

        #info {
            min-width: 5px;
            padding-right: 3%;
        }

        #dropdownButton {
            color: var(--cosmoz-bottom-bar-menubutton-color, var(--light-primary-color));
            background-color: var(--cosmoz-bottom-bar-menubutton-background-color, var(--dark-primary-color));
            @apply --cosmoz-bottom-bar-menubutton;
        }

        #extraToolbarSlot ::slotted(:not(slot)) {
            @apply --cosmoz-bottom-bar-extra-toolbar-item;
        }

        #flex {
            flex: 1 0.000000000001px;
        }

        #toolbar, #extraToolbarSlot {
            overflow: hidden;
        }
        #info,
        #menu > div {
            white-space: nowrap;
        }

        #toolbar ::slotted(*) {
            margin: 0 0.29em;
            min-width: 40px;
            min-height: 40px;
            text-overflow: ellipsis;
            white-space: nowrap;
            @apply --cosmoz-bottom-bar-toolbar-item;
        }

        #toolbar ::slotted([disabled]) {
            @apply --cosmoz-bottom-bar-toolbar-item-disabled;
        }

        #toolbar ::slotted([hidden]),
        #dropdown ::slotted([hidden]) {
            display: none !important;
        }

        #dropdown {
            padding: 0;
        }

        /** Seems like a shady dom scoping/slotting issue */
        #listboxSizer {
            max-height: 0;
            padding: 0 !important;
        }

        #dropdown ::slotted(*) {
            position: relative;
            @apply --cosmoz-bottom-bar-menu-item;
        }
    </style>

    <div id="bar" style$="[[ _getHeightStyle(computedBarHeight) ]]">
        <div id="info">
            <slot name="info"></slot>
        </div>
        <div id="flex"></div>
        <iron-selector id="toolbar" selected-class="[[ selectedClass ]]" on-iron-select="_onActionSelected">
            <slot id="bottomBarToolbar" name="bottom-bar-toolbar"></slot>
        </iron-selector>
        <paper-menu-button id="menu" hidden$="[[ !hasMenuItems ]]" no-animations
            vertical-offset="[[ barHeight ]]" vertical-align="bottom" horizontal-align="right">

            <paper-icon-button id="dropdownButton" class="dropdown-trigger" slot="dropdown-trigger" icon="menu" toggles raised>
            </paper-icon-button>
            <paper-listbox id="dropdown" class="dropdown-content" slot="dropdown-content"
                selected-class="[[ selectedClass ]]" on-iron-select="_onActionSelected">
                    <span id="listboxSizer"></span>
                    <slot id="bottomBarMenu" name="bottom-bar-menu"></slot>
            </paper-listbox>
        </paper-menu-button>
        <iron-selector id="extraToolbarSlot" on-iron-select="_onActionSelected">
            <slot name="extra" id="extraSlot"></slot>
        </iron-selector>
    </div>

    <div hidden style="display:none">
        <slot id="content"></slot>
    </div>
`;
