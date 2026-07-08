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
      function jsx3(t, p, k) {
        var c = p && p.children;
        return c === void 0 ? R.createElement(t, np(p, k)) : R.createElement(t, np(p, k), c);
      }
      function jsxs3(t, p, k) {
        return R.createElement.apply(R, [t, np(p, k)].concat(p.children));
      }
      module.exports = R;
      module.exports.jsx = jsx3;
      module.exports.jsxs = jsxs3;
      module.exports.jsxDEV = function(t, p, k, s) {
        return (s ? jsxs3 : jsx3)(t, p, k);
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

  // .design-sync/.cache/previews/MButton.tsx
  var MButton_exports = {};
  __export(MButton_exports, {
    AllModes: () => AllModes2,
    AllSizes: () => AllSizes2,
    Basic: () => Basic2,
    Disabled: () => Disabled2,
    LinkButton: () => LinkButton2
  });
  init_define_import_meta_env();
  var React = __toESM(require_react_shim(), 1);

  // src/atoms/MButton/MButton.stories.tsx
  var MButton_stories_exports = {};
  __export(MButton_stories_exports, {
    AllModes: () => AllModes,
    AllSizes: () => AllSizes,
    Basic: () => Basic,
    Disabled: () => Disabled,
    default: () => MButton_stories_default
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

  // src/atoms/MButton/MButton.stories.tsx
  var import_jsx_runtime = __toESM(require_react_shim());
  var meta = {
    title: "Atoms/Form/MButton",
    component: ds_MButton_default
  };
  var MButton_stories_default = meta;
  var modes = [
    "primary",
    "secondary",
    "tertiary",
    "outlined",
    "transparent",
    "round"
  ];
  var sizes = ["s", "m", "l"];
  var Basic = {
    args: {
      disabled: false,
      children: "Button",
      mode: "primary",
      before: "",
      after: "",
      size: "m"
    },
    argTypes: {
      disabled: { control: { type: "boolean" } },
      mode: {
        options: ["primary", "secondary", "tertiary", "round", "outlined", "transparent"],
        control: { type: "select" }
      },
      before: { control: { type: "text" } },
      after: { control: { type: "text" } },
      size: {
        options: ["s", "m", "l"],
        control: { type: "select" }
      }
    }
  };
  var AllModes = {
    name: "All Modes",
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center" }, children: modes.map((mode) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_MButton_default, { mode, children: mode === "round" ? "+" : mode }, mode)) }),
    parameters: { controls: { disable: true } }
  };
  var AllSizes = {
    name: "All Sizes",
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { display: "flex", gap: "12px", alignItems: "center" }, children: sizes.map((size) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_MButton_default, { size, mode: "primary", children: size }, size)) }),
    parameters: { controls: { disable: true } }
  };
  var Disabled = {
    name: "Disabled",
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_MButton_default, { mode: "primary", disabled: true, children: "Primary" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_MButton_default, { mode: "secondary", disabled: true, children: "Secondary" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_MButton_default, { mode: "tertiary", disabled: true, children: "Tertiary" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_MButton_default, { mode: "outlined", disabled: true, children: "Outlined" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_MButton_default, { mode: "transparent", disabled: true, children: "Transparent" })
    ] }),
    parameters: { controls: { disable: true } }
  };

  // src/atoms/MButton/MLinkButton.stories.ts
  var MLinkButton_stories_exports = {};
  __export(MLinkButton_stories_exports, {
    LinkButton: () => LinkButton,
    default: () => MLinkButton_stories_default
  });
  init_define_import_meta_env();

  // src/atoms/MButton/MLinkButton.tsx
  init_define_import_meta_env();

  // node_modules/clsx/dist/clsx.mjs
  init_define_import_meta_env();
  function r(e) {
    var t, f, n = "";
    if ("string" == typeof e || "number" == typeof e) n += e;
    else if ("object" == typeof e) if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    } else for (f in e) e[f] && (n && (n += " "), n += f);
    return n;
  }
  function clsx() {
    for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++) (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
    return n;
  }
  var clsx_default = clsx;

  // ds-shim:ds:MFlex
  var ds_MFlex_exports = {};
  __export(ds_MFlex_exports, {
    default: () => ds_MFlex_default
  });
  init_define_import_meta_env();
  __reExport(ds_MFlex_exports, __toESM(require_ds_raw()));
  var g2 = window.WsUikit;
  var ds_MFlex_default = g2["MFlex"] !== void 0 ? g2["MFlex"] : g2;

  // src/atoms/MButton/MButton.module.css
  var MButton_default = {
    after: "MButton_after",
    before: "MButton_before",
    button: "MButton_button",
    buttonContent: "MButton_buttonContent",
    linkButton: "MButton_linkButton",
    buttonContentWrapper: "MButton_buttonContentWrapper",
    primary: "MButton_primary",
    secondary: "MButton_secondary",
    tertiary: "MButton_tertiary",
    round: "MButton_round",
    outlined: "MButton_outlined",
    transparent: "MButton_transparent",
    disabled: "MButton_disabled",
    stretch: "MButton_stretch",
    s: "MButton_s",
    m: "MButton_m",
    l: "MButton_l",
    noPadding: "MButton_noPadding"
  };

  // src/atoms/MButton/MLinkButton.tsx
  var import_jsx_runtime2 = __toESM(require_react_shim());
  var MLinkButton = ({
    children,
    className,
    mode = "primary",
    justify = "center",
    stretch = false,
    size = "m",
    disabled,
    after,
    before,
    noPadding = false,
    ...restProps
  }) => {
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      "a",
      {
        "aria-disabled": disabled,
        tabIndex: disabled ? -1 : 0,
        className: clsx_default(
          MButton_default.button,
          MButton_default.linkButton,
          MButton_default[mode],
          {
            [MButton_default.stretch]: stretch,
            [MButton_default.disabled]: disabled,
            [MButton_default.noPadding]: noPadding
          },
          MButton_default[size],
          className
        ),
        ...restProps,
        children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(ds_MFlex_exports.MFlex, { justify, className: clsx_default(MButton_default.buttonContentWrapper), children: [
          before && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: MButton_default.before, children: before }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: MButton_default.buttonContent, children }),
          after && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: MButton_default.after, children: after })
        ] })
      }
    );
  };
  var MLinkButton_default = MLinkButton;

  // src/atoms/MButton/MLinkButton.stories.ts
  var meta2 = {
    title: "Atoms/Form/MButton",
    component: MLinkButton_default
  };
  var MLinkButton_stories_default = meta2;
  var LinkButton = {
    args: {
      href: "https://google.com",
      target: "_blank",
      disabled: false,
      children: "Link Button",
      mode: "primary",
      before: "+",
      after: "",
      size: "m"
    },
    argTypes: {
      href: {
        control: { type: "text" }
      },
      target: {
        control: { type: "text" }
      },
      disabled: { control: { type: "boolean" } },
      mode: {
        options: [
          "primary",
          "secondary",
          "tertiary",
          "round",
          "outlined",
          "transparent"
        ],
        control: { type: "select" }
      },
      before: {
        control: { type: "text" }
      },
      after: {
        control: { type: "text" }
      },
      size: {
        options: ["s", "m", "l"],
        control: { type: "select" }
      }
    }
  };

  // .design-sync/.cache/previews/MButton.tsx
  function compose(S, key) {
    const meta3 = S.default ?? {};
    const st = S[key];
    const args = { ...meta3.args ?? {}, ...st && st.args ? st.args : {} };
    const at = { ...meta3.argTypes ?? {}, ...st && st.argTypes ? st.argTypes : {} };
    for (const k of Object.keys(args)) {
      const m = at[k] && at[k].mapping;
      if (m && typeof m === "object" && args[k] in m) args[k] = m[args[k]];
    }
    const title = typeof meta3.title === "string" ? meta3.title : "";
    const ctx = {
      args,
      name: key,
      title,
      kind: title,
      id: "",
      componentId: "",
      globals: {},
      viewMode: "story",
      parameters: (st && st.parameters) ?? meta3.parameters ?? {}
    };
    let render = null;
    if (st && typeof st.render === "function") render = () => st.render(args, ctx);
    else if (typeof st === "function") render = () => st(args, ctx);
    else if (typeof meta3.render === "function") render = () => meta3.render(args, ctx);
    else {
      const C = st && st.component || meta3.component;
      if (C) render = () => React.createElement(C, args);
    }
    if (!render) return () => null;
    const decorators = [].concat((st && st.decorators) ?? []).concat(meta3.decorators ?? []);
    return decorators.reduce((inner, dec) => () => {
      const out = dec(inner, ctx);
      return out === void 0 ? inner() : out;
    }, render);
  }
  var Basic2 = (
    /* Basic */
    compose(MButton_stories_exports, "Basic")
  );
  var AllModes2 = (
    /* All Modes */
    compose(MButton_stories_exports, "AllModes")
  );
  var AllSizes2 = (
    /* All Sizes */
    compose(MButton_stories_exports, "AllSizes")
  );
  var Disabled2 = (
    /* Disabled */
    compose(MButton_stories_exports, "Disabled")
  );
  var LinkButton2 = (
    /* Link Button */
    compose(MLinkButton_stories_exports, "LinkButton")
  );
  return __toCommonJS(MButton_exports);
})();
