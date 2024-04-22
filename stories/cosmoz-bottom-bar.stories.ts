import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import '../src/cosmoz-bottom-bar-next';
import '@polymer/paper-button/paper-button.js';

const CosmozBottomBar = ({
	active,
	hideButton1,
	hideButton2,
	hideButton3,
	hideButton4,
	hideButton5,
}: {
	active?: boolean;
	hideButton1?: boolean;
	hideButton2?: boolean;
	hideButton3?: boolean;
	hideButton4?: boolean;
	hideButton5?: boolean;
}) => {
	return html`<cosmoz-bottom-bar id="bottomBar" ?active=${active}>
		<span slot="info">Bottom bar demo</span>
		<paper-button ?hidden=${hideButton1}>Button 1</paper-button>
		<paper-button ?hidden=${hideButton2} data-priority="10"
			>Button 2</paper-button
		>
		<paper-button ?hidden=${hideButton3}>Button 3</paper-button>
		<paper-button ?hidden=${hideButton4} data-priority="20"
			>Button 4</paper-button
		>
		<paper-button ?hidden=${hideButton5}>Button 5</paper-button>
	</cosmoz-bottom-bar>`;
};

const meta: Meta = {
	title: 'Cosmoz Bottom Bar',
	render: CosmozBottomBar,
	argTypes: {
		active: { control: 'boolean' },
		hasMenuItems: { control: 'boolean' },
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
	},
	parameters: {
		docs: {
			description: {
				story: 'The basic version',
			},
		},
	},
};
