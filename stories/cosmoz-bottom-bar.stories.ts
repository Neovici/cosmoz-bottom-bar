/* eslint-disable no-console */
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import '../src/cosmoz-bottom-bar';
import '@polymer/paper-button/paper-button.js';
import { component, useState } from '@pionjs/pion';
import { map } from 'lit-html/directives/map.js';

const CosmozBottomBarStory = ({
	active,
	maxToolbarItems,
	hideButton1,
	hideButton2,
	hideButton3,
	hideButton4,
	hideButton5,
}: {
	active?: boolean;
	maxToolbarItems?: number;
	hideButton1?: boolean;
	hideButton2?: boolean;
	hideButton3?: boolean;
	hideButton4?: boolean;
	hideButton5?: boolean;
}) => {
	const [inputValue, setInputValue] = useState(0);
	const [buttons, setButtons] = useState<
		{
			hidden: boolean;
			onClick: () => void;
			priority: number;
			text: string;
		}[]
	>([
		{
			hidden: false,
			onClick: () => console.log('!!Button 1 clicked'),
			priority: 1,
			text: 'Button 1',
		},
		{
			hidden: false,
			onClick: () => console.log('!!Button 2 clicked'),
			priority: 2,
			text: 'Button 2',
		},
		{
			hidden: false,
			onClick: () => console.log('!!Button 3 clicked'),
			priority: 3,
			text: 'Button 3',
		},
		{
			hidden: false,
			onClick: () => console.log('!!Button 4 clicked'),
			priority: 4,
			text: 'Button 4',
		},
		{
			hidden: false,
			onClick: () => console.log('!!Button 5 clicked'),
			priority: 5,
			text: 'Button 5',
		},
	]);

	return html`
		<input
			value=${inputValue}
			placeholder="priority"
			type="number"
			@input=${(e) => setInputValue(e.target.value)}
		/>
		<paper-button
			@click=${() =>
				setButtons([
					...buttons,
					{
						hidden: false,
						onClick: () => console.log('!!Button clicked'),
						priority: +inputValue,
						text: 'Button ' + inputValue,
					},
				])}
			>Add btn</paper-button
		>

		<cosmoz-bottom-bar
			id="bottomBar"
			?active=${active}
			.maxToolbarItems=${maxToolbarItems}
		>
			<span slot="info">Bottom bar demo</span>
			${map(
				buttons,
				(btn) =>
					html`<paper-button
						slot="bottom-bar-toolbar"
						@click=${btn.onClick}
						data-priority=${btn.priority}
						>${btn.text}</paper-button
					>`,
			)}()
		</cosmoz-bottom-bar>
	`;
};

customElements.define(
	'cosmoz-bottom-bar-story',
	component(CosmozBottomBarStory, {
		observedAttributes: [
			'active',
			'maxToolbarItems',
			'hideButton1',
			'hideButton2',
			'hideButton3',
			'hideButton4',
			'hideButton5',
		],
	}),
);

const CosmozBottomBarTemplate = (args) =>
	html`<cosmoz-bottom-bar-story
		?active=${args.active}
		.maxToolbarItems=${args.maxToolbarItems}
		?hideButton1=${args.hideButton1}
		?hideButton2=${args.hideButton2}
		?hideButton3=${args.hideButton3}
		?hideButton4=${args.hideButton4}
		?hideButton5=${args.hideButton5}
	></cosmoz-bottom-bar-story>`;

const CosmozBottomBarEmptyTemplate = ({
	active,
	maxToolbarItems,
}: {
	active?: boolean;
	maxToolbarItems?: number;
}) => html`
	<cosmoz-bottom-bar
		id="bottomBar"
		?active=${active}
		.maxToolbarItems=${maxToolbarItems}
	>
		<span slot="info">Bottom bar demo</span>
	</cosmoz-bottom-bar>
`;

const meta: Meta = {
	title: 'Cosmoz Bottom Bar',
	render: CosmozBottomBarTemplate,
	argTypes: {
		active: { control: 'boolean' },
		maxToolbarItems: { control: 'number' },
		hideButton1: { control: 'boolean' },
		hideButton2: { control: 'boolean' },
		hideButton3: { control: 'boolean' },
		hideButton4: { control: 'boolean' },
		hideButton5: { control: 'boolean' },
	},
	parameters: {
		docs: {
			description: {
				component: 'The Cosmoz Bottom Bar web component',
			},
		},
	},
};

export default meta;

export const Basic: StoryObj = {
	args: {
		active: true,
		maxToolbarItems: 2,
	},
	parameters: {
		docs: {
			description: {
				story: 'The basic version',
			},
		},
	},
};

export const Empty: StoryObj = {
	render: CosmozBottomBarEmptyTemplate,
	args: {
		active: true,
		maxToolbarItems: 2,
	},
	parameters: {
		docs: {
			description: {
				story: 'The empty cosmoz-bottom-bar',
			},
		},
	},
};
