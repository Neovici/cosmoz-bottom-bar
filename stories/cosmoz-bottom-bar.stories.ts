/* eslint-disable no-alert */
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import '../src/cosmoz-bottom-bar';
import '@polymer/paper-button/paper-button.js';
import { component, useState } from '@pionjs/pion';
import { map } from 'lit-html/directives/map.js';
import { ifDefined } from 'lit-html/directives/if-defined.js';

interface CosmozBottomBarStoryProps {
	active?: boolean;
	maxToolbarItems?: number;
}

const CosmozBottomBarStory = (
	host: HTMLElement & CosmozBottomBarStoryProps,
) => {
	const { active, maxToolbarItems } = host;
	const [inputValue, setInputValue] = useState<string>('');
	const [buttons, setButtons] = useState<
		{
			onClick: () => void;
			priority?: number;
			text: string;
		}[]
	>([
		{
			onClick: () => alert('!!Button 1 clicked'),
			priority: 10,
			text: 'Button 1',
		},
		{
			onClick: () => alert('!!Button 2 clicked'),
			text: 'Button 2',
		},
		{
			onClick: () => alert('!!Button 3 clicked'),
			text: 'Button 3',
		},
		{
			onClick: () => alert('!!Button 4 clicked'),
			priority: 5,
			text: 'Button 4',
		},
		{
			onClick: () => alert('!!Button 5 clicked'),
			text: 'Button 5',
		},
	]);

	const handleInput = (e: InputEvent) => {
		const target = e.target as HTMLInputElement;
		setInputValue(target.value);
	};

	const addButton = () => {
		if (!inputValue) {
			return;
		}

		setButtons([
			...buttons,
			{
				onClick: () => alert('!!Button ' + inputValue + ' clicked'),
				priority: +inputValue,
				text: 'Button ' + inputValue,
			},
		]);
		setInputValue('');
	};

	const reconnect = () => {
		const node = host.shadowRoot!.querySelector('cosmoz-bottom-bar')!;
		host.shadowRoot!.appendChild(node);
	};

	return html`
		<input
			.value=${inputValue}
			placeholder="priority"
			type="number"
			@input=${handleInput}
			@keypress=${(e: KeyboardEvent) => e.key === 'Enter' && addButton()}
		/>
		<paper-button @click=${addButton}>Add btn</paper-button>
		<paper-button @click=${reconnect}>Test reconnect</paper-button>

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
						data-priority=${ifDefined(btn.priority)}
						>${btn.text}</paper-button
					>`,
			)}
		</cosmoz-bottom-bar>
	`;
};

customElements.define(
	'cosmoz-bottom-bar-story',
	component(CosmozBottomBarStory, {
		observedAttributes: ['active', 'max-toolbar-items'],
	}),
);

const CosmozBottomBarTemplate = (args: CosmozBottomBarStoryProps) =>
	html`<cosmoz-bottom-bar-story
		?active=${args.active}
		.maxToolbarItems=${args.maxToolbarItems}
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
