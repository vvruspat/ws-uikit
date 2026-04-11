import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
	root: process.cwd(),
	plugins: [react(), svgr(), tsconfigPaths()],
});
