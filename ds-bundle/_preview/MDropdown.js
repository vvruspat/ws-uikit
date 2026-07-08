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

  // sb-stub:storybook/preview-api
  var require_preview_api = __commonJS({
    "sb-stub:storybook/preview-api"(exports, module) {
      init_define_import_meta_env();
      var noopChannel = { on() {
      }, off() {
      }, once() {
      }, emit() {
      }, removeListener() {
      } };
      var addons = { register() {
      }, add() {
      }, getChannel() {
        return noopChannel;
      }, setConfig() {
      }, getConfig() {
        return {};
      } };
      var R = function() {
        return window.React || {};
      };
      module.exports = { addons, types: {}, useGlobals() {
        return [{}, function() {
        }];
      }, useArgs() {
        return [{}, function() {
        }, function() {
        }];
      }, useParameter() {
      }, useStorybookApi() {
        return {};
      }, useState() {
        return R().useState.apply(null, arguments);
      }, useCallback() {
        return R().useCallback.apply(null, arguments);
      }, useRef() {
        return R().useRef.apply(null, arguments);
      }, useMemo() {
        return R().useMemo.apply(null, arguments);
      }, useEffect() {
        return R().useEffect.apply(null, arguments);
      }, useReducer() {
        return R().useReducer.apply(null, arguments);
      }, useChannel() {
        return function() {
        };
      } };
    }
  });

  // ds-raw:__ds_raw__
  var require_ds_raw = __commonJS({
    "ds-raw:__ds_raw__"(exports, module) {
      init_define_import_meta_env();
      module.exports = window.WsUikit;
    }
  });

  // .design-sync/.cache/previews/MDropdown.tsx
  var MDropdown_exports = {};
  __export(MDropdown_exports, {
    Basic: () => Basic2
  });
  init_define_import_meta_env();
  var React = __toESM(require_react_shim(), 1);

  // src/atoms/MDropdown/MDropdown.stories.tsx
  var MDropdown_stories_exports = {};
  __export(MDropdown_stories_exports, {
    Basic: () => Basic,
    default: () => MDropdown_stories_default
  });
  init_define_import_meta_env();
  var import_preview_api = __toESM(require_preview_api());

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

  // ds-shim:ds:MDropdown
  var ds_MDropdown_exports = {};
  __export(ds_MDropdown_exports, {
    default: () => ds_MDropdown_default
  });
  init_define_import_meta_env();
  __reExport(ds_MDropdown_exports, __toESM(require_ds_raw()));
  var g4 = window.WsUikit;
  var ds_MDropdown_default = g4["MDropdown"] !== void 0 ? g4["MDropdown"] : g4;

  // src/atoms/MDropdown/MDropdown.stories.tsx
  var import_jsx_runtime = __toESM(require_react_shim());
  var meta = {
    title: "Atoms/Layout/MDropdown",
    component: ds_MDropdown_default
  };
  var MDropdown_stories_default = meta;
  var Basic = {
    args: {
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_MButton_default, { mode: "primary", children: "Open dropdown" }),
      dropdownContent: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_MFlex_default, { justify: "space-between", direction: "column", align: "start", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_MText_default, { children: "Dropdown content" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_MFlex_default, { gap: "xl", justify: "end", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_MButton_default, { mode: "primary", children: "Primary" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_MButton_default, { mode: "secondary", children: "Secondary" })
        ] })
      ] })
    },
    argTypes: {
      position: {
        control: { type: "select" },
        options: ["top", "bottom"]
      },
      open: { type: "boolean" },
      children: {
        control: { type: "text" }
      },
      dropdownContent: {
        control: { type: "text" }
      }
    },
    render: function Render(args) {
      const [{ open }, updateArgs] = (0, import_preview_api.useArgs)();
      function onClick() {
        updateArgs({ open: !open });
      }
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_MDropdown_default, { ...args, onClose: () => updateArgs({ open: false }), children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_MButton_default, { onClick, children: "Open dropdown" }) });
    }
  };

  // .design-sync/.cache/previews/MDropdown.tsx
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
    compose(MDropdown_stories_exports, "Basic")
  );
  return __toCommonJS(MDropdown_exports);
})();
