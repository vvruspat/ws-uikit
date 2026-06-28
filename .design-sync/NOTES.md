# WS-UIKit Design-Sync Notes

## Post-build steps (required after every `package-build.mjs` run)

After running `node .ds-sync/package-build.mjs`, `_ds_bundle.js` will be ~17 MB because it
embeds 1,244 SVG sprite data URLs (~12 KB each). Run these two steps before validating or
uploading:

### 1. Strip SVG sprite data URLs (17 MB → ~2.7 MB)

```bash
node -e "
const fs=require('fs');
const placeholder='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIvPg==';
let c=fs.readFileSync('./ds-bundle/_ds_bundle.js','utf8'),n=0;
c=c.replace(/'data:image\/svg\+xml,[^']{500,}'/g,()=>(n++,JSON.stringify(placeholder)));
fs.writeFileSync('./ds-bundle/_ds_bundle.js',c);
console.log('Replaced',n,'SVG data URLs');
"
```

Expected output: `Replaced 1244 SVG data URLs`

**Why:** esbuild embeds `.svg` files as `dataurl` strings. MIcon has 1,244 sprite sheets (~272×32 px each), each ~12 KB as a URL-encoded string. ws-react-svg-patch.tsx handles the runtime rendering — stripped sprites show as a transparent 32×32 box, which is acceptable in the design tool's component picker (MIcon's own preview uses the svgReactPlugin and still shows actual icons).

### 2. Recompute bundleSha12 in `_ds_sync.json`

```bash
node -e "
const fs=require('fs'),crypto=require('crypto');
const sha=crypto.createHash('sha256').update(fs.readFileSync('./ds-bundle/_ds_bundle.js')).digest('hex').slice(0,12);
const sync=JSON.parse(fs.readFileSync('./ds-bundle/_ds_sync.json','utf8'));
sync.bundleSha12=sha;
fs.writeFileSync('./ds-bundle/_ds_sync.json',JSON.stringify(sync,null,2));
console.log('Updated bundleSha12:',sha);
"
```

**Why:** `_ds_sync.json` is generated from the original unstripped bundle. After stripping, the SHA256 no longer matches, which causes the upload tool to reject the sync with a stale-bundle error.

---

## Key design decisions

- **`ws-react-svg-patch.tsx`** (extraEntries): Patches `window.React.createElement` at bundle load time so any SVG data URL string passed as the `type` argument renders as `<img>` instead of crashing with `InvalidCharacterError`. Works because esbuild's `__copyProps` uses getters — the patch affects all internal bundle calls.

- **`overrides/story-imports.mjs`** (libOverride): Adds `svgReactPlugin` that converts `.svg?react` imports to inline React components using `dangerouslySetInnerHTML` for preview bundling. Needed because the Vite `?react` query that normally handles these is not available in esbuild.

- **`overrides/source-storybook.mjs`** (libOverride): `ws-uikit`'s `"types"` field in package.json points at `global-types.d.ts` (global augmentations), not the component types. When `exportedSet` is empty after parsing, this override populates it from the story's named exports instead.

- **Owned previews** (`previews/`):
  - `MTheme.tsx`: component returns `null` (headless attribute-setter on `<html>`); owned preview shows a visual explanation
  - `MFlex.tsx`, `MGrid.tsx`: auto-generated previews painted nothing visible (RENDER_THIN); owned previews show concrete content
  - `MDataGrid.tsx`: story imports `../../atoms` barrel → pulls all 1,244 icons → 15 MB preview; owned preview uses `window.WsUikit.MDataGrid` directly → 4.7 KB

- **GRID_OVERFLOW components** (`config.json overrides`): MMonthSelector, MYearSelector, MDataGrid, MSelect, MThemeSelector all use `position:fixed` portals that overflow grid cells. Fixed via `cardMode: "single"` + `primaryStory` in config.

- **`ws-styles-bundled.css`** (`cssEntry`): Pre-bundled CSS avoids `@import_MISSING` errors from the converter's CSS bundler not resolving relative imports across packages.
