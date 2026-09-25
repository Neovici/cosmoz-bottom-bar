/** @type { import('@storybook/web-components-vite').StorybookConfig } */
const config = {
	stories: ['../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: [
		// eslint-disable-next-line storybook/no-uninstalled-addons
		'@neovici/cfg/storybook/preset.mjs',
	],

	framework: {
		name: '@storybook/web-components-vite',
		options: {},
	},
	docs: {
		autodocs: 'tag',
	},
};

export default config;
