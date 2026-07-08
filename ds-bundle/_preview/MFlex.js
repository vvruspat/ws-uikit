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

  // .design-sync/previews/MFlex.tsx
  var MFlex_exports = {};
  __export(MFlex_exports, {
    Column: () => Column,
    Row: () => Row,
    SpaceBetween: () => SpaceBetween
  });
  init_define_import_meta_env();
  var import_jsx_runtime = __toESM(require_react_shim(), 1);
  var { MFlex } = window.WsUikit;
  var Box = ({ label, color }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { background: color, borderRadius: 6, padding: "8px 16px", color: "#fff", fontSize: 13, fontFamily: "system-ui", fontWeight: 500 }, children: label });
  function Row() {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { padding: 24 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MFlex, { gap: "m", direction: "row", align: "center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, { label: "Item A", color: "#6366f1" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, { label: "Item B", color: "#8b5cf6" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, { label: "Item C", color: "#a78bfa" })
    ] }) });
  }
  function Column() {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { padding: 24 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MFlex, { gap: "s", direction: "column", align: "start", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, { label: "Top", color: "#059669" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, { label: "Middle", color: "#10b981" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, { label: "Bottom", color: "#34d399" })
    ] }) });
  }
  function SpaceBetween() {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { padding: 24 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MFlex, { gap: "none", direction: "row", justify: "space-between", style: { width: "100%" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, { label: "Left", color: "#0ea5e9" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, { label: "Right", color: "#38bdf8" })
    ] }) });
  }
  return __toCommonJS(MFlex_exports);
})();
