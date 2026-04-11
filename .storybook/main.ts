// This file has been automatically migrated to valid ESM format by Storybook.
import { createRequire } from "node:module";
import { dirname, join } from "node:path";
import type { StorybookConfig } from "@storybook/react-vite";

const require = createRequire(import.meta.url);

const config: StorybookConfig = {
	stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

	addons: [
		getAbsolutePath("@storybook/addon-onboarding"),
		getAbsolutePath("@storybook/addon-links"),
		getAbsolutePath("@chromatic-com/storybook"),
		getAbsolutePath("@storybook/addon-a11y"),
		getAbsolutePath("@storybook/addon-themes"),
		getAbsolutePath("@storybook/addon-docs"),
	],

	framework: {
		name: getAbsolutePath("@storybook/react-vite"),
		options: {
			builder: {
				viteConfigPath: ".storybook/vite.config.ts",
			},
		},
	},

	typescript: {
		reactDocgen: "react-docgen-typescript",
	},
};
export default config;

function getAbsolutePath(value: string) {
	return dirname(require.resolve(join(value, "package.json")));
}
