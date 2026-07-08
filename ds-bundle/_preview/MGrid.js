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

  // .design-sync/previews/MGrid.tsx
  var MGrid_exports = {};
  __export(MGrid_exports, {
    ThreeColumn: () => ThreeColumn,
    TwoColumn: () => TwoColumn
  });
  init_define_import_meta_env();
  var import_jsx_runtime = __toESM(require_react_shim(), 1);
  var { MGrid } = window.WsUikit;
  var Cell = ({ label, span }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
    background: "#6366f1",
    color: "#fff",
    borderRadius: 6,
    padding: "12px 16px",
    fontFamily: "system-ui",
    fontSize: 13,
    fontWeight: 500,
    gridColumn: span
  }, children: label });
  function TwoColumn() {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { padding: 24 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MGrid, { columnTemplate: "1fr 1fr", columnGap: "m", rowGap: "s", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { label: "Column 1" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { label: "Column 2" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { label: "Column 3" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { label: "Column 4" })
    ] }) });
  }
  function ThreeColumn() {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { padding: 24 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MGrid, { columnTemplate: "1fr 1fr 1fr", columnGap: "s", rowGap: "s", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { label: "Alpha" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { label: "Beta" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { label: "Gamma" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { label: "Delta" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { label: "Epsilon" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { label: "Zeta" })
    ] }) });
  }
  return __toCommonJS(MGrid_exports);
})();
