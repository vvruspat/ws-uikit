/// <reference types='vitest' />

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import svgr from "vite-plugin-svgr";
import fs from "fs";
import path from "path";

const screenshotMiddleware = {
	name: "screenshot-capture",
	configureServer(server: any) {
		server.middlewares.use("/capture", (req: any, res: any) => {
			res.setHeader("Access-Control-Allow-Origin", "*");
			res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
			res.setHeader("Access-Control-Allow-Headers", "Content-Type");
			if (req.method === "OPTIONS") { res.writeHead(200); res.end(); return; }
			if (req.method === "POST") {
				let body = "";
				req.on("data", (d: any) => (body += d));
				req.on("end", () => {
					try {
						const { comp, dataUrl } = JSON.parse(body);
						const base64 = dataUrl.replace(/^data:image\/\w+;base64,/, "");
						const dir = "/sessions/hopeful-exciting-thompson/screenshots/storybook";
						fs.mkdirSync(dir, { recursive: true });
						fs.writeFileSync(path.join(dir, comp + ".png"), Buffer.from(base64, "base64"));
						res.writeHead(200, { "Content-Type": "application/json" });
						res.end(JSON.stringify({ ok: true }));
					} catch (e: any) {
						res.writeHead(500); res.end(JSON.stringify({ error: e.message }));
					}
				});
				return;
			}
			res.writeHead(404); res.end();
		});
	},
};

export default defineConfig({
	root: __dirname,

	plugins: [react(), svgr(), libInjectCss(), screenshotMiddleware],

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
