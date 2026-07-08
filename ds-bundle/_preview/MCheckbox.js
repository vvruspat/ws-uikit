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
      function jsxs2(t, p, k) {
        return R.createElement.apply(R, [t, np(p, k)].concat(p.children));
      }
      module.exports = R;
      module.exports.jsx = jsx3;
      module.exports.jsxs = jsxs2;
      module.exports.jsxDEV = function(t, p, k, s) {
        return (s ? jsxs2 : jsx3)(t, p, k);
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

  // svg-react-component:/Users/aleksandrkolesov/Develop/ws-uikit/src/icons/Development/BracketsSquare.svg
  var require_BracketsSquare = __commonJS({
    "svg-react-component:/Users/aleksandrkolesov/Develop/ws-uikit/src/icons/Development/BracketsSquare.svg"(exports, module) {
      init_define_import_meta_env();
      var R = typeof window !== "undefined" && window.React || require_react_shim();
      var _i = '\r\n<g clip-path="url(#clip0_17_2577)">\r\n<path d="M6 6V26H10C10.2652 26 10.5196 26.1054 10.7071 26.2929C10.8946 26.4804 11 26.7348 11 27C11 27.2652 10.8946 27.5196 10.7071 27.7071C10.5196 27.8946 10.2652 28 10 28H5C4.73478 28 4.48043 27.8946 4.29289 27.7071C4.10536 27.5196 4 27.2652 4 27V5C4 4.73478 4.10536 4.48043 4.29289 4.29289C4.48043 4.10536 4.73478 4 5 4H10C10.2652 4 10.5196 4.10536 10.7071 4.29289C10.8946 4.48043 11 4.73478 11 5C11 5.26522 10.8946 5.51957 10.7071 5.70711C10.5196 5.89464 10.2652 6 10 6H6ZM27 4H22C21.7348 4 21.4804 4.10536 21.2929 4.29289C21.1054 4.48043 21 4.73478 21 5C21 5.26522 21.1054 5.51957 21.2929 5.70711C21.4804 5.89464 21.7348 6 22 6H26V26H22C21.7348 26 21.4804 26.1054 21.2929 26.2929C21.1054 26.4804 21 26.7348 21 27C21 27.2652 21.1054 27.5196 21.2929 27.7071C21.4804 27.8946 21.7348 28 22 28H27C27.2652 28 27.5196 27.8946 27.7071 27.7071C27.8946 27.5196 28 27.2652 28 27V5C28 4.73478 27.8946 4.48043 27.7071 4.29289C27.5196 4.10536 27.2652 4 27 4Z" fill="currentColor"/>\r\n<path d="M53.5 5.5V26.5H58C58.1326 26.5 58.2598 26.5527 58.3536 26.6464C58.4473 26.7402 58.5 26.8674 58.5 27C58.5 27.1326 58.4473 27.2598 58.3536 27.3536C58.2598 27.4473 58.1326 27.5 58 27.5H53C52.8674 27.5 52.7402 27.4473 52.6464 27.3536C52.5527 27.2598 52.5 27.1326 52.5 27V5C52.5 4.86739 52.5527 4.74021 52.6464 4.64645C52.7402 4.55268 52.8674 4.5 53 4.5H58C58.1326 4.5 58.2598 4.55268 58.3536 4.64645C58.4473 4.74021 58.5 4.86739 58.5 5C58.5 5.13261 58.4473 5.25979 58.3536 5.35355C58.2598 5.44732 58.1326 5.5 58 5.5H53.5ZM75 4.5H70C69.8674 4.5 69.7402 4.55268 69.6464 4.64645C69.5527 4.74021 69.5 4.86739 69.5 5C69.5 5.13261 69.5527 5.25979 69.6464 5.35355C69.7402 5.44732 69.8674 5.5 70 5.5H74.5V26.5H70C69.8674 26.5 69.7402 26.5527 69.6464 26.6464C69.5527 26.7402 69.5 26.8674 69.5 27C69.5 27.1326 69.5527 27.2598 69.6464 27.3536C69.7402 27.4473 69.8674 27.5 70 27.5H75C75.1326 27.5 75.2598 27.4473 75.3536 27.3536C75.4473 27.2598 75.5 27.1326 75.5 27V5C75.5 4.86739 75.4473 4.74021 75.3536 4.64645C75.2598 4.55268 75.1326 4.5 75 4.5Z" fill="currentColor"/>\r\n<path d="M101.75 5.75V26.25H106C106.199 26.25 106.39 26.329 106.53 26.4697C106.671 26.6103 106.75 26.8011 106.75 27C106.75 27.1989 106.671 27.3897 106.53 27.5303C106.39 27.671 106.199 27.75 106 27.75H101C100.801 27.75 100.61 27.671 100.47 27.5303C100.329 27.3897 100.25 27.1989 100.25 27V5C100.25 4.80109 100.329 4.61032 100.47 4.46967C100.61 4.32902 100.801 4.25 101 4.25H106C106.199 4.25 106.39 4.32902 106.53 4.46967C106.671 4.61032 106.75 4.80109 106.75 5C106.75 5.19891 106.671 5.38968 106.53 5.53033C106.39 5.67098 106.199 5.75 106 5.75H101.75ZM123 4.25H118C117.801 4.25 117.61 4.32902 117.47 4.46967C117.329 4.61032 117.25 4.80109 117.25 5C117.25 5.19891 117.329 5.38968 117.47 5.53033C117.61 5.67098 117.801 5.75 118 5.75H122.25V26.25H118C117.801 26.25 117.61 26.329 117.47 26.4697C117.329 26.6103 117.25 26.8011 117.25 27C117.25 27.1989 117.329 27.3897 117.47 27.5303C117.61 27.671 117.801 27.75 118 27.75H123C123.199 27.75 123.39 27.671 123.53 27.5303C123.671 27.3897 123.75 27.1989 123.75 27V5C123.75 4.80109 123.671 4.61032 123.53 4.46967C123.39 4.32902 123.199 4.25 123 4.25Z" fill="currentColor"/>\r\n<path d="M150.5 6.5V25.5H154C154.398 25.5 154.779 25.658 155.061 25.9393C155.342 26.2206 155.5 26.6022 155.5 27C155.5 27.3978 155.342 27.7794 155.061 28.0607C154.779 28.342 154.398 28.5 154 28.5H149C148.602 28.5 148.221 28.342 147.939 28.0607C147.658 27.7794 147.5 27.3978 147.5 27V5C147.5 4.60218 147.658 4.22064 147.939 3.93934C148.221 3.65804 148.602 3.5 149 3.5H154C154.398 3.5 154.779 3.65804 155.061 3.93934C155.342 4.22064 155.5 4.60218 155.5 5C155.5 5.39782 155.342 5.77936 155.061 6.06066C154.779 6.34196 154.398 6.5 154 6.5H150.5ZM171 3.5H166C165.602 3.5 165.221 3.65804 164.939 3.93934C164.658 4.22064 164.5 4.60218 164.5 5C164.5 5.39782 164.658 5.77936 164.939 6.06066C165.221 6.34196 165.602 6.5 166 6.5H169.5V25.5H166C165.602 25.5 165.221 25.658 164.939 25.9393C164.658 26.2206 164.5 26.6022 164.5 27C164.5 27.3978 164.658 27.7794 164.939 28.0607C165.221 28.342 165.602 28.5 166 28.5H171C171.398 28.5 171.779 28.342 172.061 28.0607C172.342 27.7794 172.5 27.3978 172.5 27V5C172.5 4.60218 172.342 4.22064 172.061 3.93934C171.779 3.65804 171.398 3.5 171 3.5Z" fill="currentColor"/>\r\n<path d="M219 5H197C196.47 5 195.961 5.21071 195.586 5.58579C195.211 5.96086 195 6.46957 195 7V25C195 25.5304 195.211 26.0391 195.586 26.4142C195.961 26.7893 196.47 27 197 27H219C219.53 27 220.039 26.7893 220.414 26.4142C220.789 26.0391 221 25.5304 221 25V7C221 6.46957 220.789 5.96086 220.414 5.58579C220.039 5.21071 219.53 5 219 5ZM205 22C205.265 22 205.52 22.1054 205.707 22.2929C205.895 22.4804 206 22.7348 206 23C206 23.2652 205.895 23.5196 205.707 23.7071C205.52 23.8946 205.265 24 205 24H201C200.735 24 200.48 23.8946 200.293 23.7071C200.105 23.5196 200 23.2652 200 23V9C200 8.73478 200.105 8.48043 200.293 8.29289C200.48 8.10536 200.735 8 201 8H205C205.265 8 205.52 8.10536 205.707 8.29289C205.895 8.48043 206 8.73478 206 9C206 9.26522 205.895 9.51957 205.707 9.70711C205.52 9.89464 205.265 10 205 10H202V22H205ZM216 23C216 23.2652 215.895 23.5196 215.707 23.7071C215.52 23.8946 215.265 24 215 24H211C210.735 24 210.48 23.8946 210.293 23.7071C210.105 23.5196 210 23.2652 210 23C210 22.7348 210.105 22.4804 210.293 22.2929C210.48 22.1054 210.735 22 211 22H214V10H211C210.735 10 210.48 9.89464 210.293 9.70711C210.105 9.51957 210 9.26522 210 9C210 8.73478 210.105 8.48043 210.293 8.29289C210.48 8.10536 210.735 8 211 8H215C215.265 8 215.52 8.10536 215.707 8.29289C215.895 8.48043 216 8.73478 216 9V23Z" fill="currentColor"/>\r\n<path opacity="0.2" d="M267 5V27H245V5H267Z" fill="currentColor"/>\r\n<path d="M246 6V26H250C250.265 26 250.52 26.1054 250.707 26.2929C250.895 26.4804 251 26.7348 251 27C251 27.2652 250.895 27.5196 250.707 27.7071C250.52 27.8946 250.265 28 250 28H245C244.735 28 244.48 27.8946 244.293 27.7071C244.105 27.5196 244 27.2652 244 27V5C244 4.73478 244.105 4.48043 244.293 4.29289C244.48 4.10536 244.735 4 245 4H250C250.265 4 250.52 4.10536 250.707 4.29289C250.895 4.48043 251 4.73478 251 5C251 5.26522 250.895 5.51957 250.707 5.70711C250.52 5.89464 250.265 6 250 6H246ZM267 4H262C261.735 4 261.48 4.10536 261.293 4.29289C261.105 4.48043 261 4.73478 261 5C261 5.26522 261.105 5.51957 261.293 5.70711C261.48 5.89464 261.735 6 262 6H266V26H262C261.735 26 261.48 26.1054 261.293 26.2929C261.105 26.4804 261 26.7348 261 27C261 27.2652 261.105 27.5196 261.293 27.7071C261.48 27.8946 261.735 28 262 28H267C267.265 28 267.52 27.8946 267.707 27.7071C267.895 27.5196 268 27.2652 268 27V5C268 4.73478 267.895 4.48043 267.707 4.29289C267.52 4.10536 267.265 4 267 4Z" fill="currentColor"/>\r\n</g>\r\n<defs>\r\n<clipPath id="clip0_17_2577">\r\n<rect width="272" height="32" rx="5" fill="white"/>\r\n</clipPath>\r\n</defs>\r\n';
      module.exports = function SvgIcon(p) {
        p = p || {};
        return R.createElement("svg", { viewBox: p.viewBox || "0 0 32 32", width: p.width !== void 0 ? p.width : 32, height: p.height !== void 0 ? p.height : 32, fill: p.fill !== void 0 ? p.fill : "none", xmlns: "http://www.w3.org/2000/svg", style: p.style, className: p.className, dangerouslySetInnerHTML: { __html: _i } });
      };
    }
  });

  // .design-sync/.cache/previews/MCheckbox.tsx
  var MCheckbox_exports = {};
  __export(MCheckbox_exports, {
    AllStatuses: () => AllStatuses2,
    Disabled: () => Disabled2,
    Invalid: () => Invalid2,
    Regular: () => Regular2,
    Valid: () => Valid2
  });
  init_define_import_meta_env();
  var React = __toESM(require_react_shim(), 1);

  // src/atoms/MCheckbox/MCheckbox.stories.tsx
  var MCheckbox_stories_exports = {};
  __export(MCheckbox_stories_exports, {
    AllStatuses: () => AllStatuses,
    Disabled: () => Disabled,
    Invalid: () => Invalid,
    Regular: () => Regular,
    Valid: () => Valid,
    default: () => MCheckbox_stories_default
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

  // src/atoms/MIcon/icons/MIconBracketsSquare.tsx
  init_define_import_meta_env();
  var import_BracketsSquare = __toESM(require_BracketsSquare());

  // src/atoms/MIcon/types.ts
  init_define_import_meta_env();
  var IconModeIndex = /* @__PURE__ */ new Map([
    ["regular", 0],
    ["thin", 1],
    ["light", 2],
    ["bold", 3],
    ["fill", 4],
    ["duotone", 5]
  ]);

  // src/atoms/MIcon/icons/MIconBracketsSquare.tsx
  var import_jsx_runtime = __toESM(require_react_shim());
  var MIconBracketsSquare = ({
    mode,
    width,
    height,
    viewBox,
    ...restProps
  }) => {
    const gap = 16;
    const finalWidth = Number(width ?? 32);
    const finalHeight = Number(height ?? finalWidth);
    const xPosition = (IconModeIndex.get(mode) ?? 0) * (32 + gap);
    const finalViewBox = viewBox ?? `${xPosition} 0 32 32`;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      import_BracketsSquare.default,
      {
        width: finalWidth,
        height: finalHeight,
        viewBox: finalViewBox,
        ...restProps
      }
    ) });
  };

  // ds-shim:ds:MText
  var ds_MText_exports = {};
  __export(ds_MText_exports, {
    default: () => ds_MText_default
  });
  init_define_import_meta_env();
  __reExport(ds_MText_exports, __toESM(require_ds_raw()));
  var g2 = window.WsUikit;
  var ds_MText_default = g2["MText"] !== void 0 ? g2["MText"] : g2;

  // ds-shim:ds:MCheckbox
  var ds_MCheckbox_exports = {};
  __export(ds_MCheckbox_exports, {
    default: () => ds_MCheckbox_default
  });
  init_define_import_meta_env();
  __reExport(ds_MCheckbox_exports, __toESM(require_ds_raw()));
  var g3 = window.WsUikit;
  var ds_MCheckbox_default = g3["MCheckbox"] !== void 0 ? g3["MCheckbox"] : g3;

  // src/atoms/MCheckbox/MCheckbox.stories.tsx
  var import_jsx_runtime2 = __toESM(require_react_shim());
  var meta = {
    title: "Atoms/Form/MCheckbox",
    component: ds_MCheckbox_default
  };
  var MCheckbox_stories_default = meta;
  var labelComponentContent = () => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(ds_MFlex_default, { gap: "s", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(MIconBracketsSquare, { mode: "regular", width: 24 }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(ds_MText_default, { children: "Label" })
  ] });
  var descriptionComponentContent = () => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(ds_MFlex_default, { gap: "s", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(MIconBracketsSquare, { mode: "regular", width: 16 }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(ds_MText_default, { children: "Description" })
  ] });
  var errorComponentContent = () => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(ds_MFlex_default, { gap: "s", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(MIconBracketsSquare, { mode: "regular", width: 16 }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(ds_MText_default, { children: "Error" })
  ] });
  var argTypes = {
    status: {
      control: { type: "select" },
      options: ["regular", "invalid"]
    },
    disabled: { control: { type: "boolean" } },
    label: { control: { type: "text" } },
    description: { control: { type: "text" } },
    icon: { control: { type: "text" } }
  };
  var AllStatuses = {
    name: "All Statuses",
    render: () => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { style: { display: "flex", flexDirection: "column", gap: "20px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(ds_MCheckbox_default, { label: "Regular", description: "Helper text", status: "regular" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(ds_MCheckbox_default, { label: "Regular (checked)", description: "Helper text", status: "regular", defaultChecked: true }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(ds_MCheckbox_default, { label: "Invalid", description: "Error message", status: "invalid" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(ds_MCheckbox_default, { label: "Disabled", description: "Helper text", status: "regular", disabled: true }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(ds_MCheckbox_default, { label: "Disabled (checked)", description: "Helper text", status: "regular", disabled: true, defaultChecked: true })
    ] }),
    parameters: { controls: { disable: true } }
  };
  var Regular = {
    args: {
      disabled: false,
      label: labelComponentContent(),
      description: descriptionComponentContent(),
      status: "regular"
    },
    argTypes
  };
  var Valid = {
    args: {
      disabled: false,
      label: labelComponentContent(),
      description: descriptionComponentContent(),
      status: "valid"
    },
    argTypes
  };
  var Invalid = {
    args: {
      disabled: false,
      label: labelComponentContent(),
      description: errorComponentContent(),
      status: "invalid"
    },
    argTypes
  };
  var Disabled = {
    args: {
      disabled: true,
      label: labelComponentContent(),
      description: descriptionComponentContent(),
      status: "regular",
      checked: true
    },
    argTypes
  };

  // .design-sync/.cache/previews/MCheckbox.tsx
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
  var AllStatuses2 = (
    /* All Statuses */
    compose(MCheckbox_stories_exports, "AllStatuses")
  );
  var Regular2 = (
    /* Regular */
    compose(MCheckbox_stories_exports, "Regular")
  );
  var Valid2 = (
    /* Valid */
    compose(MCheckbox_stories_exports, "Valid")
  );
  var Invalid2 = (
    /* Invalid */
    compose(MCheckbox_stories_exports, "Invalid")
  );
  var Disabled2 = (
    /* Disabled */
    compose(MCheckbox_stories_exports, "Disabled")
  );
  return __toCommonJS(MCheckbox_exports);
})();
