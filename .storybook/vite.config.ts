import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import fs from "fs";
import path from "path";

export default defineConfig({
  root: process.cwd(),
  plugins: [
    react(),
    svgr(),
    tsconfigPaths(),
    // Screenshot capture middleware plugin
    {
      name: 'screenshot-capture',
      configureServer(server) {
        server.middlewares.use('/capture', (req, res) => {
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
          res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
          if (req.method === 'OPTIONS') { res.writeHead(200); res.end(); return; }
          if (req.method === 'POST') {
            let body = '';
            req.on('data', d => body += d);
            req.on('end', () => {
              try {
                const { comp, dataUrl } = JSON.parse(body);
                const base64 = dataUrl.replace(/^data:image\/\w+;base64,/, '');
                const dir = '/sessions/hopeful-exciting-thompson/screenshots/storybook';
                fs.mkdirSync(dir, { recursive: true });
                fs.writeFileSync(path.join(dir, comp + '.png'), Buffer.from(base64, 'base64'));
                console.log(`[capture] Saved ${comp}.png`);
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ ok: true }));
              } catch(e) {
                console.error('[capture] Error:', e.message);
                res.writeHead(500); res.end(JSON.stringify({ error: e.message }));
              }
            });
          } else {
            // GET: return status
            const dir = '/sessions/hopeful-exciting-thompson/screenshots/storybook';
            try {
              const files = fs.readdirSync(dir).filter(f => f.endsWith('.png'));
              res.writeHead(200, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ saved: files.length, files }));
            } catch { res.writeHead(200); res.end(JSON.stringify({ saved: 0, files: [] })); }
          }
        });
      }
    }
  ],
});
