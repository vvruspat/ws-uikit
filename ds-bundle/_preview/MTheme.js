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

  // .design-sync/previews/MTheme.tsx
  var MTheme_exports = {};
  __export(MTheme_exports, {
    Basic: () => Basic
  });
  init_define_import_meta_env();
  var import_jsx_runtime = __toESM(require_react_shim(), 1);
  var { MTheme } = window.WsUikit;
  function Basic() {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { padding: 24, fontFamily: "system-ui", fontSize: 14, color: "#374151" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MTheme, { theme: "light", brand: "", platform: "desktop" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { background: "var(--background, #f9fafb)", border: "1px solid var(--border, #e5e7eb)", borderRadius: 8, padding: 16 }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "MTheme" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { style: { margin: "8px 0 0", color: "#6b7280" }, children: [
          "Headless component — sets ",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "data-theme" }),
          ", ",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "data-brand" }),
          ", and",
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "data-platform" }),
          " on ",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "<html>" }),
          "."
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", { style: { marginTop: 12, background: "#f3f4f6", borderRadius: 4, padding: 8, fontSize: 12 }, children: '<MTheme theme="light" brand="" platform="desktop" />' })
      ] })
    ] });
  }
  return __toCommonJS(MTheme_exports);
})();
