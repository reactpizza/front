import type { StorybookConfig } from '@storybook/react-webpack5'
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

const config: StorybookConfig = {
	stories: [
		'../src/**/*.mdx',
		'../src/**/*.stories.@(ts|tsx)',
		'../src/**/*.story.@(ts|tsx)',
	],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/preset-create-react-app',
		'@storybook/addon-interactions',
	],
	framework: {
		name: '@storybook/react-webpack5',
		options: {},
	},

	docs: {
		autodocs: 'tag',
	},
	staticDirs: ['..\\public'],
	webpackFinal: config => {
		config!.resolve!.plugins = [new TsconfigPathsPlugin()]
		return config
	},
}
export default config
