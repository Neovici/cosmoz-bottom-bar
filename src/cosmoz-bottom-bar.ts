/* eslint-disable max-len */
import { html } from 'lit-html';
import { map } from 'lit-html/directives/map.js';
import { html as polymerHtml } from '@polymer/polymer/polymer-element.js';
import { component, css, useLayoutEffect, useState } from '@pionjs/pion';
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

	:host([force-open]) {
		transition: none;
	}

	[hidden],
	::slotted([hidden]) {
		display: none !important;
	}

	#bar {
		height: 64px;
		padding: 0 3%;
		display: flex;
		align-items: center;
	}

	#info {
		flex: 0 0 auto;
		padding-right: 3%;
		white-space: nowrap;
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

const CosmozBottomBar = ({ active = false, maxToolbarItems = 1 }: Props) => {
	const host = useHost();
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

		if (!allButtons.length) {
			return [];
		}

		const processedButtons = allButtons
			.map((btn) => ({
				element: btn,
				priority: Number(btn.dataset.priority ?? 0),
			}))
			.sort((a, b) => {
				return b.priority - a.priority;
			});

		const toolbarLimit = Math.min(
			maxToolbarItems,
			buttonStates.visible.size >= 0
				? buttonStates.visible.size
				: allButtons.length,
		);

		processedButtons.forEach(({ element, priority }, i) => {
			const isVisible = i < toolbarLimit;
			element.style.visibility = isVisible ? 'visible' : 'hidden';
			element.style.order = isVisible ? String(-priority) : 'unset';
		});

		const menuButtons = processedButtons
			.slice(toolbarLimit)
			.map(({ element }) => ({
				toolbarButton: element,
				text: element.textContent?.trim() || '',
			}));

		host.toggleAttribute('has-menu-items', menuButtons.length > 0);

		return menuButtons;
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
						(menuButton) => html`
							<paper-button @click=${() => menuButton.toolbarButton.click()}
								>${menuButton.text}</paper-button
							>
						`,
					)}
				</slot>
			</cosmoz-dropdown-menu>
			<slot name="extra" id="extraSlot"></slot>
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
