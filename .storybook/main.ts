// This file has been automatically migrated to valid ESM format by Storybook.
import { createRequire } from "node:module";
import { dirname, join } from "node:path";
import type { StorybookConfig } from "@storybook/react-vite";
import fs from "fs";
import path from "path";

const require = createRequire(import.meta.url);

const SCREENSHOT_DIR = "/sessions/hopeful-exciting-thompson/screenshots/storybook";

const screenshotPlugin = {
	name: "screenshot-capture",
	configureServer(server: any) {
		// Diagnostic: log server.ws properties
		const wsKeys = server.ws ? Object.keys(server.ws).join(',') : 'NO server.ws';
		const wsType = server.ws ? typeof server.ws.on : 'no on method';
		fs.writeFileSync("/sessions/hopeful-exciting-thompson/configureServer-called.txt",
			`called:${new Date().toISOString()}\nwsKeys:${wsKeys}\nwsOnType:${wsType}\nserverKeys:${Object.keys(server).slice(0,10).join(',')}`);
		console.log("[sb-screenshot] configureServer called, ws.keys:", wsKeys);
		// Raw socket-level handler (bypasses customListeners Map issue)
		server.ws.on("connection", (socket: any) => {
			socket.on("message", (raw: any) => {
				let msg: any;
				try { msg = JSON.parse(String(raw)); } catch { return; }
				if (msg?.type !== "custom" || msg?.event !== "sb:screenshot") return;
				const { comp, dataUrl } = msg.data || {};
				console.log("[sb-screenshot] received via raw socket:", comp);
				try {
					const b64 = (dataUrl || "").replace(/^data:image\/\w+;base64,/, "");
					fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
					fs.writeFileSync(path.join(SCREENSHOT_DIR, comp + ".png"), Buffer.from(b64, "base64"));
					console.log(`[screenshot] saved ${comp}.png`);
					socket.send(JSON.stringify({ type: "custom", event: "sb:screenshot-saved", data: { comp, ok: true } }));
				} catch (e: any) {
					console.error(`[screenshot] error: ${e.message}`);
					socket.send(JSON.stringify({ type: "custom", event: "sb:screenshot-saved", data: { comp, ok: false, error: e.message } }));
				}
			});
		});

		// Also keep HTTP fallback for direct VM access
		server.middlewares.use("/@sb-capture", (req: any, res: any) => {
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
						const b64 = dataUrl.replace(/^data:image\/\w+;base64,/, "");
						fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
						fs.writeFileSync(path.join(SCREENSHOT_DIR, comp + ".png"), Buffer.from(b64, "base64"));
						res.writeHead(200, { "Content-Type": "application/json" });
						res.end(JSON.stringify({ ok: true, comp }));
					} catch (e: any) {
						res.writeHead(500); res.end(JSON.stringify({ error: (e as any).message }));
					}
				});
				return;
			}
			res.writeHead(404); res.end();
		});
	},
};

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
				viteConfigPath: "./vite.config.ts",
			},
		},
	},

	typescript: {
		reactDocgen: "react-docgen-typescript",
	},

	viteFinal(config: any) {
		config.plugins = config.plugins || [];
		config.plugins.push(screenshotPlugin);
		return config;
	},
};
export default config;

function getAbsolutePath(value: string) {
	return dirname(require.resolve(join(value, "package.json")));
}
