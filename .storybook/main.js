// Keep the CSS minifier from downleveling light-dark() (vite 8 minifies with
// lightningcss, whose default targets predate light-dark support).
const lightDarkFloor = ['chrome123', 'edge123', 'firefox120', 'safari17.5'];

/** @type { import('@storybook/web-components-vite').StorybookConfig } */
const config = {
	stories: ['../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],

	framework: {
		name: '@storybook/web-components-vite',
		options: {},
	},
	docs: {
		autodocs: 'tag',
	},
	async viteFinal(viteConfig) {
		viteConfig.build = { ...viteConfig.build, cssTarget: lightDarkFloor };
		return viteConfig;
	},
};

export default config;
