import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import '../src/cosmoz-bottom-bar';
import '@polymer/paper-button/paper-button.js';
import { component } from '@pionjs/pion';

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
	return html`
		<cosmoz-bottom-bar
			id="bottomBar"
			?active=${active}
			.maxToolbarItems=${maxToolbarItems}
		>
			<span slot="info">Bottom bar demo</span>
			<paper-button
				?hidden=${hideButton1}
				@click=${() => console.log!('!!Button 1 clicked')}
				slot="bottom-bar-toolbar"
				data-priority="5"
				>Button 1</paper-button
			>
			<paper-button
				?hidden=${hideButton2}
				@click=${() => console.log('!!Button 2 clicked')}
				slot="bottom-bar-toolbar"
				data-priority="4"
				>Button 2</paper-button
			>
			<paper-button
				?hidden=${hideButton3}
				@click=${() => console.log('!!Button 3 clicked')}
				slot="bottom-bar-toolbar"
				data-priority="3"
				>Button 3</paper-button
			>
			<paper-button
				?hidden=${hideButton4}
				@click=${() => console.log('!!Button 4 clicked')}
				slot="bottom-bar-toolbar"
				data-priority="2"
				>Button 4</paper-button
			>
			<paper-button
				?hidden=${hideButton5}
				@click=${() => console.log('!!Button 5 clicked')}
				slot="bottom-bar-toolbar"
				data-priority="7"
				>Button 5</paper-button
			>
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
