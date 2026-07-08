"use strict";
var __dsPreview = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res, err) => function __init() {
    if (err) throw err[0];
    try {
      return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
    } catch (e) {
      throw err = [e], e;
    }
  };
  var __commonJS = (cb, mod) => function __require() {
    try {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    } catch (e) {
      throw mod = 0, e;
    }
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // <define:import.meta.env>
  var init_define_import_meta_env = __esm({
    "<define:import.meta.env>"() {
    }
  });

  // shim:react-shim
  var require_react_shim = __commonJS({
    "shim:react-shim"(exports, module) {
      init_define_import_meta_env();
      var R = window.React;
      function np(p, k) {
        var o = {};
        for (var x in p) if (x !== "children") o[x] = p[x];
        if (k !== void 0) o.key = k;
        return o;
      }
      function jsx2(t, p, k) {
        var c = p && p.children;
        return c === void 0 ? R.createElement(t, np(p, k)) : R.createElement(t, np(p, k), c);
      }
      function jsxs(t, p, k) {
        return R.createElement.apply(R, [t, np(p, k)].concat(p.children));
      }
      module.exports = R;
      module.exports.jsx = jsx2;
      module.exports.jsxs = jsxs;
      module.exports.jsxDEV = function(t, p, k, s) {
        return (s ? jsxs : jsx2)(t, p, k);
      };
      module.exports.Fragment = R.Fragment;
    }
  });

  // ds-raw:__ds_raw__
  var require_ds_raw = __commonJS({
    "ds-raw:__ds_raw__"(exports, module) {
      init_define_import_meta_env();
      module.exports = window.WsUikit;
    }
  });

  // .design-sync/.cache/previews/MSpinner.tsx
  var MSpinner_exports = {};
  __export(MSpinner_exports, {
    AllModes: () => AllModes2,
    AllSizes: () => AllSizes2,
    Regular: () => Regular2
  });
  init_define_import_meta_env();
  var React = __toESM(require_react_shim(), 1);

  // src/atoms/MSpinner/MSpinner.stories.tsx
  var MSpinner_stories_exports = {};
  __export(MSpinner_stories_exports, {
    AllModes: () => AllModes,
    AllSizes: () => AllSizes,
    Regular: () => Regular,
    default: () => MSpinner_stories_default
  });
  init_define_import_meta_env();

  // ds-shim:ds:MFlex
  var ds_MFlex_exports = {};
  __export(ds_MFlex_exports, {
    default: () => ds_MFlex_default
  });
  init_define_import_meta_env();
  __reExport(ds_MFlex_exports, __toESM(require_ds_raw()));
  var g = window.WsUikit;
  var ds_MFlex_default = g["MFlex"] !== void 0 ? g["MFlex"] : g;

  // ds-shim:ds:MSpinner
  var ds_MSpinner_exports = {};
  __export(ds_MSpinner_exports, {
    default: () => ds_MSpinner_default
  });
  init_define_import_meta_env();
  __reExport(ds_MSpinner_exports, __toESM(require_ds_raw()));
  var g2 = window.WsUikit;
  var ds_MSpinner_default = g2["MSpinner"] !== void 0 ? g2["MSpinner"] : g2;

  // src/atoms/MSpinner/MSpinner.stories.tsx
  var import_jsx_runtime = __toESM(require_react_shim());
  var meta = {
    title: "Atoms/Layout/MSpinner",
    component: ds_MSpinner_default
  };
  var MSpinner_stories_default = meta;
  var modes = ["base", "primary", "secondary", "tertiary"];
  var sizes = ["xs", "s", "m", "l", "xl", "3xl", "4xl"];
  var Regular = {
    args: {
      size: "xl",
      mode: "primary"
    },
    argTypes: {
      size: {
        control: { type: "select" },
        options: ["xs", "s", "m", "l", "xl", "3xl", "4xl"]
      },
      mode: {
        control: { type: "select" },
        options: ["base", "primary", "secondary", "tertiary"]
      }
    }
  };
  var AllModes = {
    name: "All Modes",
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_MFlex_default, { gap: "xl", align: "center", children: modes.map((mode) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_MSpinner_default, { mode, size: "xl" }, mode)) }),
    parameters: { controls: { disable: true } }
  };
  var AllSizes = {
    name: "All Sizes",
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_MFlex_default, { gap: "l", align: "center", children: sizes.map((size) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_MSpinner_default, { size, mode: "primary" }, size)) }),
    parameters: { controls: { disable: true } }
  };

  // .design-sync/.cache/previews/MSpinner.tsx
  function compose(S, key) {
    const meta2 = S.default ?? {};
    const st = S[key];
    const args = { ...meta2.args ?? {}, ...st && st.args ? st.args : {} };
    const at = { ...meta2.argTypes ?? {}, ...st && st.argTypes ? st.argTypes : {} };
    for (const k of Object.keys(args)) {
      const m = at[k] && at[k].mapping;
      if (m && typeof m === "object" && args[k] in m) args[k] = m[args[k]];
    }
    const title = typeof meta2.title === "string" ? meta2.title : "";
    const ctx = {
      args,
      name: key,
      title,
      kind: title,
      id: "",
      componentId: "",
      globals: {},
      viewMode: "story",
      parameters: (st && st.parameters) ?? meta2.parameters ?? {}
    };
    let render = null;
    if (st && typeof st.render === "function") render = () => st.render(args, ctx);
    else if (typeof st === "function") render = () => st(args, ctx);
    else if (typeof meta2.render === "function") render = () => meta2.render(args, ctx);
    else {
      const C = st && st.component || meta2.component;
      if (C) render = () => React.createElement(C, args);
    }
    if (!render) return () => null;
    const decorators = [].concat((st && st.decorators) ?? []).concat(meta2.decorators ?? []);
    return decorators.reduce((inner, dec) => () => {
      const out = dec(inner, ctx);
      return out === void 0 ? inner() : out;
    }, render);
  }
  var Regular2 = (
    /* Regular */
    compose(MSpinner_stories_exports, "Regular")
  );
  var AllModes2 = (
    /* All Modes */
    compose(MSpinner_stories_exports, "AllModes")
  );
  var AllSizes2 = (
    /* All Sizes */
    compose(MSpinner_stories_exports, "AllSizes")
  );
  return __toCommonJS(MSpinner_exports);
})();
