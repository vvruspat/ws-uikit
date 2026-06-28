// Fork of lib/story-imports.mjs:
// Added svgReactPlugin — converts .svg?react imports into inline React components
// so ws-uikit's phosphor icon sprites (MIcon* wrappers) render in previews.
// MIcon icons are forced to bundle from source (not shimmed to window.WsUikit)
// via cfg.storyImports.bundle so the SVG plugin can intercept their SVG imports.

import { existsSync, readFileSync, realpathSync } from 'node:fs';
import { relative, resolve } from 'node:path';

const MANAGER_API_STUB =
  'const noopChannel={on(){},off(){},once(){},emit(){},removeListener(){}};' +
  'const addons={register(){},add(){},getChannel(){return noopChannel},setConfig(){},getConfig(){return{}}};' +
  'const R=function(){return window.React||{}};' +
  'module.exports={addons,types:{},useGlobals(){return[{},function(){}]},useArgs(){return[{},function(){},function(){}]},useParameter(){},useStorybookApi(){return{}},' +
  'useState(){return R().useState.apply(null,arguments)},useCallback(){return R().useCallback.apply(null,arguments)},useRef(){return R().useRef.apply(null,arguments)},' +
  'useMemo(){return R().useMemo.apply(null,arguments)},useEffect(){return R().useEffect.apply(null,arguments)},useReducer(){return R().useReducer.apply(null,arguments)},' +
  'useChannel(){return function(){}}};';

const INERT_STUB =
  'var inert=new Proxy(function(){},{' +
  'get:function(t,k){if(k==="then")return void 0;if(k==="prototype")return t.prototype;if(k==="valueOf"||k==="toString"||k===Symbol.toPrimitive)return function(){return""};return inert},' +
  'apply:function(){return inert},construct:function(){return{}}});' +
  'var m={};"fn action actions expect userEvent within waitFor screen fireEvent spyOn mocked jest vi configureActions decorateAction setupWorker http HttpResponse graphql rest".split(" ").forEach(function(k){m[k]=inert});' +
  'var def=function(p){return p&&p.children!==void 0?p.children:null};Object.assign(def,m);' +
  'module.exports=new Proxy(def,{get:function(t,k){if(k==="then")return void 0;if(k==="prototype")return t.prototype;return k in m?m[k]:k==="__esModule"?void 0:inert}});';

export const STORY_FILE_RE = /\.stor(?:y|ies)\.[cm]?[jt]sx?$/;

export const STORY_LOADERS = {
  '.js': 'jsx',
  '.css': 'empty', '.scss': 'empty', '.sass': 'empty', '.less': 'empty', '.styl': 'empty',
  '.png': 'dataurl', '.jpg': 'dataurl', '.jpeg': 'dataurl', '.gif': 'dataurl',
  '.webp': 'dataurl', '.avif': 'dataurl', '.svg': 'dataurl', '.ico': 'dataurl',
  '.woff': 'dataurl', '.woff2': 'dataurl', '.ttf': 'dataurl', '.eot': 'empty',
  '.md': 'text', '.mdx': 'empty', '.mp4': 'empty', '.webm': 'empty', '.mov': 'empty',
};

function exportedComponentFor(p, exported) {
  const segs = p.replace(/\\/g, '/').split('/');
  const file = (segs[segs.length - 1] ?? '').replace(/\.[cm]?[jt]sx?$/, '');
  const dir = segs[segs.length - 2] ?? '';
  if (exported.has(file)) return file;
  if ((file === 'index' || file === dir) && exported.has(dir)) return dir;
  return null;
}

export function storybookStubPlugin() {
  return {
    name: 'sb-stub',
    setup(b) {
      b.onResolve({ filter: /^(@storybook\/|storybook(\/|$)|msw(\/|$)|@mswjs\/)/ }, (a) => ({ path: a.path, namespace: 'sb-stub' }));
      b.onLoad({ filter: /.*/, namespace: 'sb-stub' }, (a) => ({
        contents: /(^|\/)(manager|preview|client)-api$/.test(a.path) ? MANAGER_API_STUB : INERT_STUB,
        loader: 'js',
      }));
    },
  };
}

// Converts .svg and .svg?react imports into a React component that renders
// the SVG inline via dangerouslySetInnerHTML. Respects the viewBox prop so
// ws-uikit's phosphor sprite sheets (each a 272x32 strip of 6 modes) display
// the correct icon variant when the MIcon* wrapper passes a sliced viewBox.
function svgReactPlugin() {
  return {
    name: 'svg-react-component',
    setup(b) {
      b.onResolve({ filter: /\.svg(\?.*)?$/ }, (a) => {
        if (a.namespace === 'svg-react-component') return null;
        if (!a.resolveDir) return null;
        const cleanImport = a.path.replace(/\?.*$/, '');
        const resolved = resolve(a.resolveDir, cleanImport);
        if (!existsSync(resolved)) return null;
        return { path: resolved, namespace: 'svg-react-component' };
      });
      b.onLoad({ filter: /.*/, namespace: 'svg-react-component' }, (a) => {
        let svgContent = '';
        try { svgContent = readFileSync(a.path, 'utf8'); } catch { /* fallback below */ }
        // Extract inner SVG children (the <g>, <path>, <defs>, etc.)
        const innerMatch = svgContent.match(/<svg[^>]*>([\s\S]*?)<\/svg>\s*$/);
        const inner = innerMatch ? innerMatch[1] : '';
        const code =
          'var R=typeof window!=="undefined"&&window.React||require("react");' +
          'var _i=' + JSON.stringify(inner) + ';' +
          'module.exports=function SvgIcon(p){' +
          'p=p||{};' +
          'return R.createElement("svg",{' +
          'viewBox:p.viewBox||"0 0 32 32",' +
          'width:p.width!==undefined?p.width:32,' +
          'height:p.height!==undefined?p.height:32,' +
          'fill:p.fill!==undefined?p.fill:"none",' +
          'xmlns:"http://www.w3.org/2000/svg",' +
          'style:p.style,' +
          'className:p.className,' +
          'dangerouslySetInnerHTML:{__html:_i}' +
          '});};';
        return { contents: code, loader: 'js' };
      });
    },
  };
}

export function storyImportPlugins({ PKG, GLOBAL, extraEntries = [], exported, cfg, pkgDir }) {
  extraEntries = extraEntries.filter((e) => !/^(\.\.?\/|\/|[A-Za-z]:[\\/])/.test(e));
  const escRx = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const pkgRx = new RegExp(`^(?:${[PKG, ...extraEntries].map(escRx).join('|')})(?:/.*)?$`);
  const force = cfg?.storyImports ?? {};
  const matches = (p, pats) => Array.isArray(pats) && pats.some((s) => typeof s === 'string' && p.includes(s));
  const shimFor = (name) =>
    `export * from "__ds_raw__";var g=window.${GLOBAL};export default ${
      name ? `g[${JSON.stringify(name)}]!==void 0?g[${JSON.stringify(name)}]:g` : `"default" in g?g.default:g`
    };`;
  const shimResult = (name) => ({ path: name ? `ds:${name}` : 'ds', namespace: 'ds-shim' });

  const dsShim = {
    name: 'ds-global',
    setup(b) {
      const entryNames = new Set([PKG, ...extraEntries]);
      b.onResolve({ filter: pkgRx }, (a) => {
        if (matches(a.path, force.bundle)) return null;
        if (!entryNames.has(a.path)) {
          const name = (a.path.split('/').pop() ?? '').replace(/\.[cm]?[jt]sx?$/, '');
          return exported.has(name) ? shimResult(name) : null;
        }
        return shimResult(null);
      });
      b.onLoad({ filter: /.*/, namespace: 'ds-shim' }, (a) => ({
        contents: shimFor(a.path.startsWith('ds:') ? a.path.slice(3) : null),
        loader: 'js',
      }));
      b.onResolve({ filter: /^@ds-stories\// }, (a) => {
        const base = resolve(process.cwd(), a.path.slice('@ds-stories/'.length));
        for (const ext of ['', '.tsx', '.ts', '.jsx', '.js', '.mjs', '.cjs', '.mdx']) {
          if (existsSync(base + ext)) return { path: base + ext };
        }
        return { errors: [{ text: `@ds-stories path not found: ${a.path} (resolved against ${process.cwd()})` }] };
      });
      b.onResolve({ filter: /^__ds_raw__$/ }, () => ({ path: '__ds_raw__', namespace: 'ds-raw' }));
      b.onLoad({ filter: /.*/, namespace: 'ds-raw' }, () => ({
        contents: `module.exports=window.${GLOBAL};`,
        loader: 'js',
      }));
    },
  };

  const CWD = process.cwd().replace(/\\/g, '/');
  const real = (p) => { try { return realpathSync(p).replace(/\\/g, '/'); } catch { return null; } };
  const barrelRoots = [...new Set([CWD, real(process.cwd()), pkgDir && resolve(pkgDir).replace(/\\/g, '/'), pkgDir && real(pkgDir)].filter(Boolean))];
  const policyRedirect = {
    name: 'ds-import-policy',
    setup(b) {
      b.onResolve({ filter: /.*/ }, async (a) => {
        if (a.pluginData === 'ds-resolving') return null;
        if (a.kind === 'entry-point' || (a.namespace && a.namespace !== 'file')) return null;
        const r = await b.resolve(a.path, {
          kind: a.kind, resolveDir: a.resolveDir, importer: a.importer,
          pluginData: 'ds-resolving',
        });
        if (r.errors.length > 0 || !r.path) return null;
        if (r.namespace && r.namespace !== 'file') return r;
        const p = r.path.replace(/\\/g, '/');
        if (STORY_FILE_RE.test(p)) return r;
        if (matches(p, force.bundle)) return r;
        if (matches(p, force.shim)) return shimResult(exportedComponentFor(p, exported));
        if (p.includes('/node_modules/')) return r;
        if (barrelRoots.some((root) => /^src\/index\.[cm]?[jt]sx?$/.test(relative(root, p).replace(/\\/g, '/')))) {
          return shimResult(null);
        }
        const name = exportedComponentFor(p, exported);
        return name ? shimResult(name) : r;
      });
    },
  };

  const consoleStub = {
    name: 'node-console-stub',
    setup(b) {
      b.onResolve({ filter: /^(node:)?console$/ }, () => ({ path: 'console', namespace: 'node-console' }));
      b.onLoad({ filter: /.*/, namespace: 'node-console' }, () => ({ contents: 'module.exports=console;', loader: 'js' }));
    },
  };

  // svgReactPlugin runs first so .svg?react imports are claimed before
  // policyRedirect tries to re-resolve them against the file system.
  return {
    plugins: [svgReactPlugin(), dsShim, storybookStubPlugin(), consoleStub, policyRedirect],
    loaders: { ...STORY_LOADERS, ...(force.loaders ?? {}) },
  };
}
