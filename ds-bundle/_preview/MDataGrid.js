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

  // .design-sync/previews/MDataGrid.tsx
  var MDataGrid_exports = {};
  __export(MDataGrid_exports, {
    Default: () => Default,
    Empty: () => Empty
  });
  init_define_import_meta_env();
  var import_jsx_runtime = __toESM(require_react_shim(), 1);
  var { MDataGrid } = window.WsUikit;
  var headers = [
    { field: "name", label: "Customer", sortable: true },
    { field: "status", label: "Status", sortable: true },
    { field: "plan", label: "Plan", sortable: true },
    { field: "revenue", label: "Revenue", sortable: true }
  ];
  var rows = [
    { id: 0, name: "Northwind account 1", status: "Active", plan: "Enterprise", revenue: 2400 },
    { id: 1, name: "Northwind account 2", status: "Active", plan: "Team", revenue: 2775 },
    { id: 2, name: "Northwind account 3", status: "Paused", plan: "Pro", revenue: 3150 },
    { id: 3, name: "Northwind account 4", status: "Active", plan: "Enterprise", revenue: 3525 },
    { id: 4, name: "Northwind account 5", status: "Active", plan: "Team", revenue: 3900 }
  ];
  function Default() {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      MDataGrid,
      {
        caption: "Customer accounts",
        headers,
        rows,
        pagination: {
          total: 32,
          limit: 5,
          offset: 0,
          rowsPerPageOptions: [5, 10, 25],
          onNextPage: () => {
          },
          onPreviousPage: () => {
          },
          onRowsPerPageChange: () => {
          }
        },
        onSelect: () => {
        }
      }
    );
  }
  function Empty() {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      MDataGrid,
      {
        caption: "Customer accounts",
        headers,
        rows: [],
        emptyMessage: "No customer accounts match the current filters."
      }
    );
  }
  return __toCommonJS(MDataGrid_exports);
})();
