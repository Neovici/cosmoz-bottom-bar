/* eslint-disable max-len */
import { html } from 'lit-html';
import { map } from 'lit-html/directives/map.js';
import { html as polymerHtml } from '@polymer/polymer/polymer-element.js';
import {
	component,
	css,
	useEffect,
	useLayoutEffect,
	useState,
} from '@pionjs/pion';
import { useHost } from '@neovici/cosmoz-utils/hooks/use-host';
import { toggleSize } from '@neovici/cosmoz-collapse/toggle';
import { useActivity } from '@neovici/cosmoz-utils/keybindings/use-activity';
import '@neovici/cosmoz-dropdown';
import overflow from './overflow';

const style = css`
	:host {
		display: block;
		overflow: hidden;
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

	#bar {
		max-height: 64px;
		padding: 0 3%;
		display: flex;
		align-items: center;
	}

	#info {
		flex: 0 0 auto;
		min-width: 100px;
		padding-right: 3%;
		white-space: nowrap;
		position: relative;
		z-index: 2;
	}

	#buttonContainer {
		display: flex;
		flex: 1 1 auto;
		overflow: hidden;
		flex-wrap: wrap;
		justify-content: flex-start;
		flex-direction: row-reverse;
		position: relative;
		margin: 0 8px;
		min-width: 0;
		max-height: 40px;
		outline: 2px blue dashed;
	}

	#actions {
		display: flex;
		align-items: center;
		flex: 0 0 auto;
		margin-left: 8px;
		z-index: 2;
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
		overflow: hidden;
		flex: 0 0 auto;
	}

	#dropdown::part(content) {
		max-width: 300px;
	}

	:host([hide-actions]) #bottomBarToolbar,
	:host([hide-actions]) #bottomBarMenu,
	:host([hide-actions]) #dropdown {
		display: none;
	}

	:host(:not([has-menu-items])) cosmoz-dropdown-menu {
		display: none;
	}
`;

export const openMenu = Symbol('openMenu');

const openActionsMenu = (host: HTMLElement) => {
	const dropdown = host.shadowRoot?.querySelector('#dropdown');

	if (!dropdown || dropdown.hasAttribute('hidden')) return;

	//TODO: Clean up when open function is implemented for cosmoz-dropdown-menu
	const cosmozDropdown =
			dropdown.shadowRoot?.querySelector<HTMLElement>('cosmoz-dropdown'),
		button =
			cosmozDropdown?.shadowRoot?.querySelector<HTMLButtonElement>(
				'#dropdownButton',
			);

	button?.click();
};

/**
 * `<cosmoz-bottom-bar>` is a horizontal responsive bottom toolbar containing items that
 * can be used for actions.
 *
 * The items placed inside the `cosmoz-bottom-bar` are distributed into the toolbar in a horizontal container.
 * If the items do not fit the available width, those that do not fit are placed in a dropdown
 * menu triggered by a button in the toolbar.
 * The class specified by the property `toolbarClass` (default `cosmoz-bottom-bar-toolbar`)
 * is applied to items distributed to the toolbar.
 * The class specified in the property `menuClass` (default `cosmoz-bottom-bar-menu`)
 * is applied to items distributed to the menu.
 *
 * ### Usage
 *
 * See demo for example usage
 *
 * @element cosmoz-bottom-bar
 * @demo demo/bottom-bar-next.html Basic Demo
 */

type Props = HTMLElement & {
	active?: boolean;
	maxToolbarItems?: number;
};

// TODO: Use order style attr to sort on priority

const CosmozBottomBar = ({ active = false, maxToolbarItems = 1 }: Props) => {
	const host = useHost();
	// const [allButtons, setAllButtons] = useState<HTMLElement[]>([]),
	// 	[visibleButtons, setVisibleButtons] = useState<Set<HTMLElement>>(new Set());
	const [buttonStates, setButtonStates] = useState<{
		visible: Set<HTMLElement>;
		overflown: Set<HTMLElement>;
	}>({
		visible: new Set(),
		overflown: new Set(),
	});

	useActivity(
		{
			activity: openMenu,
			callback: () => openActionsMenu(host),
			check: () => active && !host.hasAttribute('hide-actions'),
			element: () => host.shadowRoot?.querySelector('#dropdown'),
		},
		[active],
	);

	const calculateDistribution = () => {
		const allButtons = [...buttonStates.visible, ...buttonStates.overflown];

		allButtons.forEach((btn) => {
			if (!btn.style.order) {
				btn.style.order = `-${btn.dataset.priority || '0'}`;
			}
		});

		const effectiveVisibleSize =
			buttonStates.visible.size > 0
				? buttonStates.visible.size
				: allButtons.length;

		const toolbarLimit = Math.min(maxToolbarItems, effectiveVisibleSize);
		const toolbarElements = allButtons.slice(0, toolbarLimit);

		allButtons.forEach((el) => {
			if (toolbarElements.includes(el)) {
				el.style.visibility = 'visible';
			} else {
				el.style.visibility = 'hidden';
			}
		});

		const menuElements = allButtons.slice(toolbarLimit);

		host.toggleAttribute('has-menu-items', menuElements.length > 0);

		return menuElements.map((el) => ({
			victim: el,
			text: el.textContent?.trim() || '',
		}));
	};

	const handleOverflow = (
		visible: Set<HTMLElement>,
		overflown: Set<HTMLElement>,
	) => {
		setButtonStates({
			visible,
			overflown,
		});
	};

	const toggle = toggleSize('height');

	useLayoutEffect(() => {
		toggle(host, active);
	}, [active]);

	return html`<div id="bar" part="bar">
			<div id="info" part="info"><slot name="info"></slot></div>
			<div id="buttonContainer">
				<slot
					id="bottomBarToolbar"
					name="bottom-bar-toolbar"
					${overflow(handleOverflow)}
				></slot>
			</div>
			<div id="actions">
				<cosmoz-dropdown-menu id="dropdown">
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
					<slot id="bottomBarMenu" name="bottom-bar-menu">
						${map(
							calculateDistribution(),
							(item) => html`
								<paper-button @click=${() => item.victim.click()}
									>${item.text}</paper-button
								>
							`,
						)}
					</slot>
				</cosmoz-dropdown-menu>
				<slot name="extra" id="extraSlot"></slot>
			</div>
		</div>
		<div hidden style="display:none">
			<slot id="content"></slot>
		</div>`;
};

export default CosmozBottomBar;

customElements.define(
	'cosmoz-bottom-bar',
	component(CosmozBottomBar, {
		observedAttributes: ['active', 'max-toolbar-items'],
		styleSheets: [style],
	}),
);

const tmplt = `
	<slot name="extra" slot="extra"></slot>
	<slot name="bottom-bar-toolbar" slot="bottom-bar-toolbar"></slot>
	<slot name="bottom-bar-menu" slot="bottom-bar-menu"></slot>
`;

export const bottomBarSlots = html(Object.assign([tmplt], { raw: [tmplt] })),
	bottomBarSlotsPolymer = polymerHtml(Object.assign([tmplt], { raw: [tmplt] }));
