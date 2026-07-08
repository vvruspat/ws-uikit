/// <reference types='vitest' />

import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";
import { libInjectCss } from "vite-plugin-lib-inject-css";

export default defineConfig({
	root: __dirname,

	plugins: [react(), libInjectCss()],

	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: ["./src/test-setup.ts"],
		css: {
			modules: {
				classNameStrategy: "non-scoped",
			},
		},
	},
});
