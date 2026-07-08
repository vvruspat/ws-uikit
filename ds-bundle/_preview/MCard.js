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
      function jsxs2(t, p, k) {
        return R.createElement.apply(R, [t, np(p, k)].concat(p.children));
      }
      module.exports = R;
      module.exports.jsx = jsx2;
      module.exports.jsxs = jsxs2;
      module.exports.jsxDEV = function(t, p, k, s) {
        return (s ? jsxs2 : jsx2)(t, p, k);
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

  // .design-sync/.cache/previews/MCard.tsx
  var MCard_exports = {};
  __export(MCard_exports, {
    Basic: () => Basic2,
    Collapsed: () => Collapsed2,
    ContentOnly: () => ContentOnly2,
    NoPadding: () => NoPadding2,
    WithDividers: () => WithDividers2
  });
  init_define_import_meta_env();
  var React = __toESM(require_react_shim(), 1);

  // src/atoms/MCard/MCard.stories.tsx
  var MCard_stories_exports = {};
  __export(MCard_stories_exports, {
    Basic: () => Basic,
    Collapsed: () => Collapsed,
    ContentOnly: () => ContentOnly,
    NoPadding: () => NoPadding,
    WithDividers: () => WithDividers,
    default: () => MCard_stories_default
  });
  init_define_import_meta_env();

  // ds-shim:ds:MButton
  var ds_MButton_exports = {};
  __export(ds_MButton_exports, {
    default: () => ds_MButton_default
  });
  init_define_import_meta_env();
  __reExport(ds_MButton_exports, __toESM(require_ds_raw()));
  var g = window.WsUikit;
  var ds_MButton_default = g["MButton"] !== void 0 ? g["MButton"] : g;

  // ds-shim:ds:MFlex
  var ds_MFlex_exports = {};
  __export(ds_MFlex_exports, {
    default: () => ds_MFlex_default
  });
  init_define_import_meta_env();
  __reExport(ds_MFlex_exports, __toESM(require_ds_raw()));
  var g2 = window.WsUikit;
  var ds_MFlex_default = g2["MFlex"] !== void 0 ? g2["MFlex"] : g2;

  // ds-shim:ds:MText
  var ds_MText_exports = {};
  __export(ds_MText_exports, {
    default: () => ds_MText_default
  });
  init_define_import_meta_env();
  __reExport(ds_MText_exports, __toESM(require_ds_raw()));
  var g3 = window.WsUikit;
  var ds_MText_default = g3["MText"] !== void 0 ? g3["MText"] : g3;

  // ds-shim:ds:MCard
  var ds_MCard_exports = {};
  __export(ds_MCard_exports, {
    default: () => ds_MCard_default
  });
  init_define_import_meta_env();
  __reExport(ds_MCard_exports, __toESM(require_ds_raw()));
  var g4 = window.WsUikit;
  var ds_MCard_default = g4["MCard"] !== void 0 ? g4["MCard"] : g4;

  // src/atoms/MCard/MCard.stories.tsx
  var import_jsx_runtime = __toESM(require_react_shim());
  var meta = {
    title: "Atoms/Layout/MCard",
    component: ds_MCard_default
  };
  var MCard_stories_default = meta;
  var cardFooter = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_MFlex_default, { justify: "space-between", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_MText_default, { children: "Footer content" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_MFlex_default, { gap: "xl", justify: "end", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_MButton_default, { mode: "primary", children: "Confirm" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_MButton_default, { mode: "secondary", children: "Cancel" })
    ] })
  ] });
  var defaultRadius = {
    borderLeftBottomRadius: "l",
    borderLeftTopRadius: "l",
    borderRightBottomRadius: "l",
    borderRightTopRadius: "l"
  };
  var argTypes = {
    children: { control: { type: "text" } },
    header: { control: { type: "text" } },
    footer: { control: { type: "text" } },
    collapsed: { control: { type: "boolean" } },
    shadow: { control: { type: "boolean" } },
    noPadding: { control: { type: "boolean" } },
    showHeaderDivider: { control: { type: "boolean" } },
    showFooterDivider: { control: { type: "boolean" } },
    borderLeftBottomRadius: {
      control: { type: "select" },
      options: ["none", "s", "m", "l", "xl", "2xl", "3xl", "4xl"]
    },
    borderLeftTopRadius: {
      control: { type: "select" },
      options: ["none", "s", "m", "l", "xl", "2xl", "3xl", "4xl"]
    },
    borderRightBottomRadius: {
      control: { type: "select" },
      options: ["none", "s", "m", "l", "xl", "2xl", "3xl", "4xl"]
    },
    borderRightTopRadius: {
      control: { type: "select" },
      options: ["none", "s", "m", "l", "xl", "2xl", "3xl", "4xl"]
    }
  };
  var Basic = {
    args: {
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_MText_default, { children: "Card content goes here." }),
      header: "Title",
      showHeaderDivider: false,
      showFooterDivider: true,
      shadow: true,
      noPadding: false,
      collapsed: false,
      footer: cardFooter,
      ...defaultRadius
    },
    argTypes
  };
  var WithDividers = {
    name: "With Dividers",
    args: {
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_MText_default, { children: "Card content goes here." }),
      header: "Card Title",
      footer: cardFooter,
      showHeaderDivider: true,
      showFooterDivider: true,
      shadow: true,
      ...defaultRadius
    }
  };
  var Collapsed = {
    args: {
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_MText_default, { children: "This content is hidden when collapsed." }),
      header: "Collapsible Card",
      collapsed: true,
      shadow: true,
      ...defaultRadius
    }
  };
  var NoPadding = {
    name: "No Padding",
    args: {
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { background: "#f0f0f0", padding: "24px" }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_MText_default, { children: "Content with custom padding" }) }),
      header: "No Padding Card",
      noPadding: true,
      shadow: true,
      ...defaultRadius
    }
  };
  var ContentOnly = {
    name: "Content Only",
    args: {
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_MText_default, { children: "A minimal card with no header or footer." }),
      shadow: true,
      ...defaultRadius
    }
  };

  // .design-sync/.cache/previews/MCard.tsx
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
  var Basic2 = (
    /* Basic */
    compose(MCard_stories_exports, "Basic")
  );
  var WithDividers2 = (
    /* With Dividers */
    compose(MCard_stories_exports, "WithDividers")
  );
  var Collapsed2 = (
    /* Collapsed */
    compose(MCard_stories_exports, "Collapsed")
  );
  var NoPadding2 = (
    /* No Padding */
    compose(MCard_stories_exports, "NoPadding")
  );
  var ContentOnly2 = (
    /* Content Only */
    compose(MCard_stories_exports, "ContentOnly")
  );
  return __toCommonJS(MCard_exports);
})();
