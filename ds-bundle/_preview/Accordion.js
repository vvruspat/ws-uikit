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
      function jsx5(t, p, k) {
        var c = p && p.children;
        return c === void 0 ? R.createElement(t, np(p, k)) : R.createElement(t, np(p, k), c);
      }
      function jsxs3(t, p, k) {
        return R.createElement.apply(R, [t, np(p, k)].concat(p.children));
      }
      module.exports = R;
      module.exports.jsx = jsx5;
      module.exports.jsxs = jsxs3;
      module.exports.jsxDEV = function(t, p, k, s) {
        return (s ? jsxs3 : jsx5)(t, p, k);
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

  // svg-react-component:/Users/aleksandrkolesov/Develop/ws-uikit/src/icons/Arrows/CaretDown.svg
  var require_CaretDown = __commonJS({
    "svg-react-component:/Users/aleksandrkolesov/Develop/ws-uikit/src/icons/Arrows/CaretDown.svg"(exports, module) {
      init_define_import_meta_env();
      var R = typeof window !== "undefined" && window.React || require_react_shim();
      var _i = '\r\n<g clip-path="url(#clip0_17_5666)">\r\n<path d="M26.7076 12.7076L16.7076 22.7076C16.6147 22.8005 16.5044 22.8743 16.383 22.9246C16.2616 22.975 16.1315 23.0009 16.0001 23.0009C15.8687 23.0009 15.7385 22.975 15.6171 22.9246C15.4957 22.8743 15.3854 22.8005 15.2926 22.7076L5.29257 12.7076C5.10493 12.5199 4.99951 12.2654 4.99951 12.0001C4.99951 11.7347 5.10493 11.4802 5.29257 11.2926C5.48021 11.1049 5.7347 10.9995 6.00007 10.9995C6.26543 10.9995 6.51993 11.1049 6.70757 11.2926L16.0001 20.5863L25.2926 11.2926C25.3855 11.1997 25.4958 11.126 25.6172 11.0757C25.7386 11.0254 25.8687 10.9995 26.0001 10.9995C26.1315 10.9995 26.2616 11.0254 26.383 11.0757C26.5044 11.126 26.6147 11.1997 26.7076 11.2926C26.8005 11.3855 26.8742 11.4958 26.9245 11.6172C26.9747 11.7386 27.0006 11.8687 27.0006 12.0001C27.0006 12.1315 26.9747 12.2616 26.9245 12.383C26.8742 12.5044 26.8005 12.6147 26.7076 12.7076Z" fill="currentColor"/>\r\n<path d="M74.3538 12.3535L64.3538 22.3535C64.3073 22.4 64.2522 22.4369 64.1915 22.4621C64.1308 22.4872 64.0657 22.5002 64 22.5002C63.9343 22.5002 63.8693 22.4872 63.8086 22.4621C63.7479 22.4369 63.6927 22.4 63.6463 22.3535L53.6463 12.3535C53.5998 12.3071 53.563 12.2519 53.5378 12.1912C53.5127 12.1305 53.4998 12.0655 53.4998 11.9998C53.4998 11.9341 53.5127 11.869 53.5378 11.8083C53.563 11.7476 53.5998 11.6925 53.6463 11.646C53.7401 11.5522 53.8674 11.4995 54 11.4995C54.0657 11.4995 54.1308 11.5125 54.1915 11.5376C54.2522 11.5627 54.3073 11.5996 54.3538 11.646L64 21.2923L73.6463 11.646C73.6927 11.5996 73.7479 11.5627 73.8086 11.5376C73.8693 11.5125 73.9343 11.4995 74 11.4995C74.0657 11.4995 74.1308 11.5125 74.1915 11.5376C74.2522 11.5627 74.3073 11.5996 74.3538 11.646C74.4002 11.6925 74.4371 11.7476 74.4622 11.8083C74.4874 11.869 74.5003 11.9341 74.5003 11.9998C74.5003 12.0655 74.4874 12.1305 74.4622 12.1912C74.4371 12.2519 74.4002 12.3071 74.3538 12.3535Z" fill="currentColor"/>\r\n<path d="M122.53 12.5298L112.53 22.5298C112.389 22.6703 112.199 22.7492 112 22.7492C111.801 22.7492 111.611 22.6703 111.47 22.5298L101.47 12.5298C101.338 12.3877 101.265 12.1996 101.269 12.0053C101.272 11.811 101.351 11.6256 101.488 11.4882C101.626 11.3508 101.811 11.2721 102.006 11.2687C102.2 11.2652 102.388 11.3374 102.53 11.4698L112 20.9386L121.47 11.4698C121.612 11.3374 121.8 11.2652 121.995 11.2687C122.189 11.2721 122.374 11.3508 122.512 11.4882C122.649 11.6256 122.728 11.811 122.731 12.0053C122.735 12.1996 122.663 12.3877 122.53 12.5298Z" fill="currentColor"/>\r\n<path d="M171.061 13.0615L161.061 23.0615C160.922 23.2013 160.756 23.3123 160.574 23.388C160.392 23.4637 160.196 23.5027 159.999 23.5027C159.801 23.5027 159.606 23.4637 159.423 23.388C159.241 23.3123 159.076 23.2013 158.936 23.0615L148.936 13.0615C148.654 12.7797 148.496 12.3975 148.496 11.999C148.496 11.6005 148.654 11.2183 148.936 10.9365C149.218 10.6547 149.6 10.4964 149.999 10.4964C150.397 10.4964 150.779 10.6547 151.061 10.9365L160 19.8752L168.939 10.9352C169.22 10.6534 169.603 10.4951 170.001 10.4951C170.4 10.4951 170.782 10.6534 171.064 10.9352C171.345 11.217 171.504 11.5992 171.504 11.9977C171.504 12.3962 171.345 12.7784 171.064 13.0602L171.061 13.0615Z" fill="currentColor"/>\r\n<path d="M218.708 12.7075L208.708 22.7075C208.615 22.8005 208.504 22.8742 208.383 22.9246C208.262 22.9749 208.131 23.0008 208 23.0008C207.869 23.0008 207.739 22.9749 207.617 22.9246C207.496 22.8742 207.385 22.8005 207.293 22.7075L197.293 12.7075C197.153 12.5676 197.057 12.3894 197.019 12.1953C196.98 12.0012 197 11.8 197.075 11.6172C197.151 11.4344 197.279 11.2782 197.444 11.1683C197.609 11.0584 197.802 10.9998 198 11H218C218.198 10.9998 218.391 11.0584 218.556 11.1683C218.721 11.2782 218.849 11.4344 218.925 11.6172C219 11.8 219.02 12.0012 218.982 12.1953C218.943 12.3894 218.848 12.5676 218.708 12.7075Z" fill="currentColor"/>\r\n<path opacity="0.2" d="M266 12L256 22L246 12H266Z" fill="currentColor"/>\r\n<path d="M266.924 11.6175C266.848 11.4348 266.72 11.2786 266.556 11.1686C266.391 11.0587 266.198 11 266 11H246C245.802 10.9998 245.609 11.0584 245.444 11.1683C245.279 11.2782 245.151 11.4344 245.075 11.6172C245 11.8 244.98 12.0012 245.019 12.1953C245.057 12.3894 245.153 12.5676 245.293 12.7075L255.293 22.7075C255.385 22.8005 255.496 22.8742 255.617 22.9246C255.739 22.9749 255.869 23.0008 256 23.0008C256.131 23.0008 256.262 22.9749 256.383 22.9246C256.504 22.8742 256.615 22.8005 256.708 22.7075L266.708 12.7075C266.847 12.5676 266.943 12.3893 266.981 12.1953C267.02 12.0013 267 11.8002 266.924 11.6175ZM256 20.5863L248.414 13H263.586L256 20.5863Z" fill="currentColor"/>\r\n</g>\r\n<defs>\r\n<clipPath id="clip0_17_5666">\r\n<rect width="272" height="32" rx="5" fill="white"/>\r\n</clipPath>\r\n</defs>\r\n';
      module.exports = function SvgIcon(p) {
        p = p || {};
        return R.createElement("svg", { viewBox: p.viewBox || "0 0 32 32", width: p.width !== void 0 ? p.width : 32, height: p.height !== void 0 ? p.height : 32, fill: p.fill !== void 0 ? p.fill : "none", xmlns: "http://www.w3.org/2000/svg", style: p.style, className: p.className, dangerouslySetInnerHTML: { __html: _i } });
      };
    }
  });

  // svg-react-component:/Users/aleksandrkolesov/Develop/ws-uikit/src/icons/Arrows/CaretRight.svg
  var require_CaretRight = __commonJS({
    "svg-react-component:/Users/aleksandrkolesov/Develop/ws-uikit/src/icons/Arrows/CaretRight.svg"(exports, module) {
      init_define_import_meta_env();
      var R = typeof window !== "undefined" && window.React || require_react_shim();
      var _i = '\r\n<g clip-path="url(#clip0_17_5638)">\r\n<path d="M22.7076 16.7076L12.7076 26.7076C12.6147 26.8005 12.5044 26.8742 12.383 26.9245C12.2616 26.9747 12.1315 27.0006 12.0001 27.0006C11.8687 27.0006 11.7386 26.9747 11.6172 26.9245C11.4958 26.8742 11.3855 26.8005 11.2926 26.7076C11.1997 26.6147 11.126 26.5044 11.0757 26.383C11.0254 26.2616 10.9995 26.1315 10.9995 26.0001C10.9995 25.8687 11.0254 25.7386 11.0757 25.6172C11.126 25.4958 11.1997 25.3855 11.2926 25.2926L20.5863 16.0001L11.2926 6.70757C11.1049 6.51993 10.9995 6.26543 10.9995 6.00007C10.9995 5.7347 11.1049 5.48021 11.2926 5.29257C11.4802 5.10493 11.7347 4.99951 12.0001 4.99951C12.2654 4.99951 12.5199 5.10493 12.7076 5.29257L22.7076 15.2926C22.8005 15.3854 22.8743 15.4957 22.9246 15.6171C22.975 15.7385 23.0009 15.8687 23.0009 16.0001C23.0009 16.1315 22.975 16.2616 22.9246 16.383C22.8743 16.5044 22.8005 16.6147 22.7076 16.7076Z" fill="currentColor"/>\r\n<path d="M70.3538 16.3535L60.3538 26.3535C60.3073 26.4 60.2522 26.4368 60.1915 26.462C60.1308 26.4871 60.0657 26.5001 60 26.5001C59.9343 26.5001 59.8693 26.4871 59.8086 26.462C59.7479 26.4368 59.6927 26.4 59.6463 26.3535C59.5998 26.3071 59.563 26.2519 59.5378 26.1912C59.5127 26.1305 59.4998 26.0655 59.4998 25.9998C59.4998 25.9341 59.5127 25.869 59.5378 25.8083C59.563 25.7476 59.5998 25.6925 59.6463 25.646L69.2925 15.9998L59.6463 6.35354C59.5525 6.25972 59.4998 6.13247 59.4998 5.99979C59.4998 5.86711 59.5525 5.73986 59.6463 5.64604C59.7401 5.55222 59.8674 5.49951 60 5.49951C60.1327 5.49951 60.26 5.55222 60.3538 5.64604L70.3538 15.646C70.4003 15.6925 70.4372 15.7476 70.4623 15.8083C70.4875 15.869 70.5004 15.9341 70.5004 15.9998C70.5004 16.0655 70.4875 16.1306 70.4623 16.1913C70.4372 16.252 70.4003 16.3071 70.3538 16.3535Z" fill="currentColor"/>\r\n<path d="M118.53 16.5298L108.53 26.5298C108.388 26.6623 108.2 26.7344 108.006 26.731C107.811 26.7276 107.626 26.6489 107.488 26.5115C107.351 26.3741 107.272 26.1887 107.269 25.9944C107.265 25.8001 107.338 25.612 107.47 25.4698L116.939 15.9998L107.47 6.52985C107.338 6.38767 107.265 6.19963 107.269 6.00532C107.272 5.81102 107.351 5.62564 107.488 5.48822C107.626 5.35081 107.811 5.2721 108.006 5.26867C108.2 5.26524 108.388 5.33737 108.53 5.46985L118.53 15.4698C118.671 15.6105 118.749 15.8011 118.749 15.9998C118.749 16.1986 118.671 16.3892 118.53 16.5298Z" fill="currentColor"/>\r\n<path d="M167.061 17.0612L157.061 27.0612C156.779 27.343 156.397 27.5013 155.999 27.5013C155.6 27.5013 155.218 27.343 154.936 27.0612C154.654 26.7794 154.496 26.3972 154.496 25.9987C154.496 25.6002 154.654 25.218 154.936 24.9362L163.875 15.9999L154.939 7.0612C154.799 6.92167 154.688 6.75602 154.613 6.57372C154.537 6.39141 154.499 6.19602 154.499 5.9987C154.499 5.80137 154.537 5.60598 154.613 5.42367C154.688 5.24137 154.799 5.07573 154.939 4.9362C155.078 4.79667 155.244 4.68599 155.426 4.61047C155.608 4.53496 155.804 4.49609 156.001 4.49609C156.199 4.49609 156.394 4.53496 156.576 4.61047C156.759 4.68599 156.924 4.79667 157.064 4.9362L167.064 14.9362C167.203 15.0757 167.314 15.2414 167.39 15.4239C167.465 15.6063 167.504 15.8018 167.504 15.9992C167.503 16.1966 167.464 16.3921 167.388 16.5743C167.312 16.7565 167.201 16.922 167.061 17.0612Z" fill="currentColor"/>\r\n<path d="M214.708 16.7073L204.708 26.7073C204.568 26.8473 204.389 26.9427 204.195 26.9813C204.001 27.02 203.8 27.0002 203.617 26.9244C203.434 26.8487 203.278 26.7204 203.168 26.5558C203.058 26.3912 203 26.1977 203 25.9998V5.99981C203 5.80192 203.058 5.60842 203.168 5.44383C203.278 5.27923 203.434 5.15094 203.617 5.07519C203.8 4.99944 204.001 4.97963 204.195 5.01828C204.389 5.05693 204.568 5.1523 204.708 5.29231L214.708 15.2923C214.8 15.3852 214.874 15.4955 214.925 15.6169C214.975 15.7383 215.001 15.8684 215.001 15.9998C215.001 16.1312 214.975 16.2614 214.925 16.3828C214.874 16.5041 214.8 16.6144 214.708 16.7073Z" fill="currentColor"/>\r\n<path opacity="0.2" d="M262 16L252 26V6L262 16Z" fill="currentColor"/>\r\n<path d="M262.708 15.2923L252.708 5.29231C252.568 5.1523 252.389 5.05693 252.195 5.01828C252.001 4.97963 251.8 4.99944 251.617 5.07519C251.434 5.15094 251.278 5.27923 251.168 5.44383C251.058 5.60842 251 5.80192 251 5.99981V25.9998C251 26.1977 251.058 26.3912 251.168 26.5558C251.278 26.7204 251.434 26.8487 251.617 26.9244C251.8 27.0002 252.001 27.02 252.195 26.9813C252.389 26.9427 252.568 26.8473 252.708 26.7073L262.708 16.7073C262.8 16.6144 262.874 16.5041 262.925 16.3828C262.975 16.2614 263.001 16.1312 263.001 15.9998C263.001 15.8684 262.975 15.7383 262.925 15.6169C262.874 15.4955 262.8 15.3852 262.708 15.2923ZM253 23.5861V8.41356L260.586 15.9998L253 23.5861Z" fill="currentColor"/>\r\n</g>\r\n<defs>\r\n<clipPath id="clip0_17_5638">\r\n<rect width="272" height="32" rx="5" fill="white"/>\r\n</clipPath>\r\n</defs>\r\n';
      module.exports = function SvgIcon(p) {
        p = p || {};
        return R.createElement("svg", { viewBox: p.viewBox || "0 0 32 32", width: p.width !== void 0 ? p.width : 32, height: p.height !== void 0 ? p.height : 32, fill: p.fill !== void 0 ? p.fill : "none", xmlns: "http://www.w3.org/2000/svg", style: p.style, className: p.className, dangerouslySetInnerHTML: { __html: _i } });
      };
    }
  });

  // shim:react-dom-shim
  var require_react_dom_shim = __commonJS({
    "shim:react-dom-shim"(exports, module) {
      init_define_import_meta_env();
      var D = window.ReactDOM;
      var n = function() {
      };
      module.exports = Object.assign({ preload: n, preinit: n, preconnect: n, prefetchDNS: n, preloadModule: n, preinitModule: n }, D);
    }
  });

  // .design-sync/.cache/previews/Accordion.tsx
  var Accordion_exports = {};
  __export(Accordion_exports, {
    Basic: () => Basic2,
    ComplexContentStory: () => ComplexContentStory2,
    DefaultIcons: () => DefaultIcons2,
    InitiallyExpanded: () => InitiallyExpanded2,
    MultipleExpanded: () => MultipleExpanded2
  });
  init_define_import_meta_env();
  var React = __toESM(require_react_shim(), 1);

  // src/molecules/MAccordion/MAccordion.stories.tsx
  var MAccordion_stories_exports = {};
  __export(MAccordion_stories_exports, {
    Basic: () => Basic,
    ComplexContentStory: () => ComplexContentStory,
    DefaultIcons: () => DefaultIcons,
    InitiallyExpanded: () => InitiallyExpanded,
    MultipleExpanded: () => MultipleExpanded,
    default: () => MAccordion_stories_default
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

  // ds-shim:ds:MCaption
  var ds_MCaption_exports = {};
  __export(ds_MCaption_exports, {
    default: () => ds_MCaption_default
  });
  init_define_import_meta_env();
  __reExport(ds_MCaption_exports, __toESM(require_ds_raw()));
  var g2 = window.WsUikit;
  var ds_MCaption_default = g2["MCaption"] !== void 0 ? g2["MCaption"] : g2;

  // ds-shim:ds:MFlex
  var ds_MFlex_exports = {};
  __export(ds_MFlex_exports, {
    default: () => ds_MFlex_default
  });
  init_define_import_meta_env();
  __reExport(ds_MFlex_exports, __toESM(require_ds_raw()));
  var g3 = window.WsUikit;
  var ds_MFlex_default = g3["MFlex"] !== void 0 ? g3["MFlex"] : g3;

  // src/atoms/MIcon/icons/MIconCaretDown.tsx
  init_define_import_meta_env();
  var import_CaretDown = __toESM(require_CaretDown());

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

  // src/atoms/MIcon/icons/MIconCaretDown.tsx
  var import_jsx_runtime = __toESM(require_react_shim());
  var MIconCaretDown = ({
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
      import_CaretDown.default,
      {
        width: finalWidth,
        height: finalHeight,
        viewBox: finalViewBox,
        ...restProps
      }
    ) });
  };

  // src/atoms/MIcon/icons/MIconCaretRight.tsx
  init_define_import_meta_env();
  var import_CaretRight = __toESM(require_CaretRight());
  var import_jsx_runtime2 = __toESM(require_react_shim());
  var MIconCaretRight = ({
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
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_jsx_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      import_CaretRight.default,
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
  var g4 = window.WsUikit;
  var ds_MText_default = g4["MText"] !== void 0 ? g4["MText"] : g4;

  // src/molecules/MAccordion/MAccordion.tsx
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

  // src/molecules/MAccordion/MAccordion.tsx
  var import_react28 = __toESM(require_react_shim());

  // node_modules/react-aria-components/dist/exports/index.mjs
  init_define_import_meta_env();

  // node_modules/react-aria-components/dist/private/utils.mjs
  init_define_import_meta_env();

  // node_modules/react-aria/dist/exports/mergeProps.mjs
  init_define_import_meta_env();

  // node_modules/react-aria/dist/private/utils/mergeProps.mjs
  init_define_import_meta_env();

  // node_modules/react-aria/dist/private/utils/chain.mjs
  init_define_import_meta_env();
  function $a4e76a5424781910$export$e08e3b67e392101e(...callbacks) {
    return (...args) => {
      for (let callback of callbacks) if (typeof callback === "function") callback(...args);
    };
  }

  // node_modules/react-aria/dist/private/utils/useId.mjs
  init_define_import_meta_env();

  // node_modules/react-aria/dist/private/utils/useLayoutEffect.mjs
  init_define_import_meta_env();
  var import_react = __toESM(require_react_shim(), 1);
  var $c4867b2f328c2698$export$e5c5a5f917a5871c = typeof document !== "undefined" ? (0, import_react.default).useLayoutEffect : () => {
  };

  // node_modules/react-aria/dist/private/ssr/SSRProvider.mjs
  init_define_import_meta_env();
  var import_react2 = __toESM(require_react_shim(), 1);
  var $c7eafbbe1ea5834e$var$defaultContext = {
    prefix: String(Math.round(Math.random() * 1e10)),
    current: 0
  };
  var $c7eafbbe1ea5834e$var$SSRContext = /* @__PURE__ */ (0, import_react2.default).createContext($c7eafbbe1ea5834e$var$defaultContext);
  var $c7eafbbe1ea5834e$var$IsSSRContext = /* @__PURE__ */ (0, import_react2.default).createContext(false);
  var $c7eafbbe1ea5834e$var$canUseDOM = Boolean(typeof window !== "undefined" && window.document && window.document.createElement);
  var $c7eafbbe1ea5834e$var$componentIds = /* @__PURE__ */ new WeakMap();
  function $c7eafbbe1ea5834e$var$useCounter(isDisabled = false) {
    let ctx = (0, import_react2.useContext)($c7eafbbe1ea5834e$var$SSRContext);
    let ref = (0, import_react2.useRef)(null);
    if (ref.current === null && !isDisabled) {
      let currentOwner = (0, import_react2.default).__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED?.ReactCurrentOwner?.current;
      if (currentOwner) {
        let prevComponentValue = $c7eafbbe1ea5834e$var$componentIds.get(currentOwner);
        if (prevComponentValue == null)
          $c7eafbbe1ea5834e$var$componentIds.set(currentOwner, {
            id: ctx.current,
            state: currentOwner.memoizedState
          });
        else if (currentOwner.memoizedState !== prevComponentValue.state) {
          ctx.current = prevComponentValue.id;
          $c7eafbbe1ea5834e$var$componentIds.delete(currentOwner);
        }
      }
      ref.current = ++ctx.current;
    }
    return ref.current;
  }
  function $c7eafbbe1ea5834e$var$useLegacySSRSafeId(defaultId) {
    let ctx = (0, import_react2.useContext)($c7eafbbe1ea5834e$var$SSRContext);
    if (ctx === $c7eafbbe1ea5834e$var$defaultContext && !$c7eafbbe1ea5834e$var$canUseDOM && true) console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
    let counter = $c7eafbbe1ea5834e$var$useCounter(!!defaultId);
    let prefix = ctx === $c7eafbbe1ea5834e$var$defaultContext && false ? "react-aria" : `react-aria${ctx.prefix}`;
    return defaultId || `${prefix}-${counter}`;
  }
  function $c7eafbbe1ea5834e$var$useModernSSRSafeId(defaultId) {
    let id = (0, import_react2.default).useId();
    let [didSSR] = (0, import_react2.useState)($c7eafbbe1ea5834e$export$535bd6ca7f90a273());
    let prefix = didSSR || false ? "react-aria" : `react-aria${$c7eafbbe1ea5834e$var$defaultContext.prefix}`;
    return defaultId || `${prefix}-${id}`;
  }
  var $c7eafbbe1ea5834e$export$619500959fc48b26 = typeof (0, import_react2.default)["useId"] === "function" ? $c7eafbbe1ea5834e$var$useModernSSRSafeId : $c7eafbbe1ea5834e$var$useLegacySSRSafeId;
  function $c7eafbbe1ea5834e$var$getSnapshot() {
    return false;
  }
  function $c7eafbbe1ea5834e$var$getServerSnapshot() {
    return true;
  }
  function $c7eafbbe1ea5834e$var$subscribe(onStoreChange) {
    return () => {
    };
  }
  function $c7eafbbe1ea5834e$export$535bd6ca7f90a273() {
    if (typeof (0, import_react2.default)["useSyncExternalStore"] === "function") return (0, import_react2.default)["useSyncExternalStore"]($c7eafbbe1ea5834e$var$subscribe, $c7eafbbe1ea5834e$var$getSnapshot, $c7eafbbe1ea5834e$var$getServerSnapshot);
    return (0, import_react2.useContext)($c7eafbbe1ea5834e$var$IsSSRContext);
  }

  // node_modules/react-aria/dist/private/utils/useId.mjs
  var import_react3 = __toESM(require_react_shim(), 1);
  var $390e54f620492c70$var$canUseDOM = Boolean(typeof window !== "undefined" && window.document && window.document.createElement);
  var $390e54f620492c70$export$d41a04c74483c6ef = /* @__PURE__ */ new Map();
  var $390e54f620492c70$var$registry;
  if (typeof FinalizationRegistry !== "undefined") $390e54f620492c70$var$registry = new FinalizationRegistry((heldValue) => {
    $390e54f620492c70$export$d41a04c74483c6ef.delete(heldValue);
  });
  function $390e54f620492c70$export$f680877a34711e37(defaultId) {
    let [value, setValue] = (0, import_react3.useState)(defaultId);
    let nextId = (0, import_react3.useRef)(null);
    let res = (0, $c7eafbbe1ea5834e$export$619500959fc48b26)(value);
    let cleanupRef = (0, import_react3.useRef)(null);
    if ($390e54f620492c70$var$registry) $390e54f620492c70$var$registry.register(cleanupRef, res);
    if ($390e54f620492c70$var$canUseDOM) {
      const cacheIdRef = $390e54f620492c70$export$d41a04c74483c6ef.get(res);
      if (cacheIdRef && !cacheIdRef.includes(nextId)) cacheIdRef.push(nextId);
      else $390e54f620492c70$export$d41a04c74483c6ef.set(res, [
        nextId
      ]);
    }
    (0, $c4867b2f328c2698$export$e5c5a5f917a5871c)(() => {
      let r2 = res;
      return () => {
        if ($390e54f620492c70$var$registry) $390e54f620492c70$var$registry.unregister(cleanupRef);
        $390e54f620492c70$export$d41a04c74483c6ef.delete(r2);
      };
    }, [
      res
    ]);
    (0, import_react3.useEffect)(() => {
      let newId = nextId.current;
      if (newId) setValue(newId);
      return () => {
        if (newId) nextId.current = null;
      };
    });
    return res;
  }
  function $390e54f620492c70$export$cd8c9cb68f842629(idA, idB) {
    if (idA === idB) return idA;
    let setIdsA = $390e54f620492c70$export$d41a04c74483c6ef.get(idA);
    if (setIdsA) {
      setIdsA.forEach((ref) => ref.current = idB);
      return idB;
    }
    let setIdsB = $390e54f620492c70$export$d41a04c74483c6ef.get(idB);
    if (setIdsB) {
      setIdsB.forEach((ref) => ref.current = idA);
      return idA;
    }
    return idB;
  }

  // node_modules/react-aria/dist/private/utils/mergeRefs.mjs
  init_define_import_meta_env();
  function $4064df0d6f9620e1$export$c9058316764c140e(...refs) {
    if (refs.length === 1 && refs[0]) return refs[0];
    return (value) => {
      let hasCleanup = false;
      const cleanups = refs.map((ref) => {
        const cleanup = $4064df0d6f9620e1$var$setRef(ref, value);
        hasCleanup ||= typeof cleanup == "function";
        return cleanup;
      });
      if (hasCleanup) return () => {
        cleanups.forEach((cleanup, i) => {
          if (typeof cleanup === "function") cleanup();
          else $4064df0d6f9620e1$var$setRef(refs[i], null);
        });
      };
    };
  }
  function $4064df0d6f9620e1$var$setRef(ref, value) {
    if (typeof ref === "function") return ref(value);
    else if (ref != null) ref.current = value;
  }

  // node_modules/react-aria/dist/private/utils/mergeProps.mjs
  function $bbaa08b3cd72f041$export$9d1611c77c2fe928(...args) {
    let result = {
      ...args[0]
    };
    for (let i = 1; i < args.length; i++) {
      let props = args[i];
      for (let key in props) {
        let a = result[key];
        let b = props[key];
        if (typeof a === "function" && typeof b === "function" && // This is a lot faster than a regex.
        key[0] === "o" && key[1] === "n" && key.charCodeAt(2) >= /* 'A' */
        65 && key.charCodeAt(2) <= /* 'Z' */
        90) result[key] = (0, $a4e76a5424781910$export$e08e3b67e392101e)(a, b);
        else if ((key === "className" || key === "UNSAFE_className") && typeof a === "string" && typeof b === "string") result[key] = (0, clsx_default)(a, b);
        else if (key === "id" && a && b) result.id = (0, $390e54f620492c70$export$cd8c9cb68f842629)(a, b);
        else if (key === "ref" && a && b) result.ref = (0, $4064df0d6f9620e1$export$c9058316764c140e)(a, b);
        else result[key] = b !== void 0 ? b : a;
      }
    }
    return result;
  }

  // node_modules/react-aria/dist/exports/mergeRefs.mjs
  init_define_import_meta_env();

  // node_modules/react-aria-components/dist/private/utils.mjs
  var import_react5 = __toESM(require_react_shim(), 1);

  // node_modules/react-aria/dist/exports/private/utils/useLayoutEffect.mjs
  init_define_import_meta_env();

  // node_modules/react-aria/dist/exports/useObjectRef.mjs
  init_define_import_meta_env();

  // node_modules/react-aria/dist/private/utils/useObjectRef.mjs
  init_define_import_meta_env();
  var import_react4 = __toESM(require_react_shim(), 1);
  function $03e8ab2d84d7657a$export$4338b53315abf666(ref) {
    const objRef = (0, import_react4.useRef)(null);
    const cleanupRef = (0, import_react4.useRef)(void 0);
    const refEffect = (0, import_react4.useCallback)((instance) => {
      if (typeof ref === "function") {
        const refCallback = ref;
        const refCleanup = refCallback(instance);
        return () => {
          if (typeof refCleanup === "function") refCleanup();
          else refCallback(null);
        };
      } else if (ref) {
        ref.current = instance;
        return () => {
          ref.current = null;
        };
      }
    }, [
      ref
    ]);
    return (0, import_react4.useMemo)(() => ({
      get current() {
        return objRef.current;
      },
      set current(value) {
        objRef.current = value;
        if (cleanupRef.current) {
          cleanupRef.current();
          cleanupRef.current = void 0;
        }
        if (value != null) cleanupRef.current = refEffect(value);
      }
    }), [
      refEffect
    ]);
  }

  // node_modules/react-aria-components/dist/private/utils.mjs
  var $7230ffa83bc0c2cf$export$c62b8e45d58ddad9 = /* @__PURE__ */ Symbol("default");
  function $7230ffa83bc0c2cf$export$2881499e37b75b9a({ values, children }) {
    for (let [Context, value] of values)
      children = /* @__PURE__ */ (0, import_react5.default).createElement(Context.Provider, {
        value
      }, children);
    return children;
  }
  function $7230ffa83bc0c2cf$export$4d86445c2cf5e3(props) {
    let { className, style, children, defaultClassName, defaultChildren, defaultStyle, values, render } = props;
    return (0, import_react5.useMemo)(() => {
      let computedClassName;
      let computedStyle;
      let computedChildren;
      if (typeof className === "function") computedClassName = className({
        ...values,
        defaultClassName
      });
      else computedClassName = className;
      if (typeof style === "function") computedStyle = style({
        ...values,
        defaultStyle: defaultStyle || {}
      });
      else computedStyle = style;
      if (typeof children === "function") computedChildren = children({
        ...values,
        defaultChildren
      });
      else if (children == null) computedChildren = defaultChildren;
      else computedChildren = children;
      return {
        className: computedClassName ?? defaultClassName,
        style: computedStyle || defaultStyle ? {
          ...defaultStyle,
          ...computedStyle
        } : void 0,
        children: computedChildren ?? defaultChildren,
        "data-rac": "",
        render: render ? (props2) => render(props2, values) : void 0
      };
    }, [
      className,
      style,
      children,
      defaultClassName,
      defaultChildren,
      defaultStyle,
      values,
      render
    ]);
  }
  function $7230ffa83bc0c2cf$export$fabf2dc03a41866e(context, slot) {
    let ctx = (0, import_react5.useContext)(context);
    if (slot === null)
      return null;
    if (ctx && typeof ctx === "object" && "slots" in ctx && ctx.slots) {
      let slotKey = slot || $7230ffa83bc0c2cf$export$c62b8e45d58ddad9;
      if (!ctx.slots[slotKey]) {
        let availableSlots = new Intl.ListFormat().format(Object.keys(ctx.slots).map((p) => `"${p}"`));
        let errorMessage = slot ? `Invalid slot "${slot}".` : "A slot prop is required.";
        throw new Error(`${errorMessage} Valid slot names are ${availableSlots}.`);
      }
      return ctx.slots[slotKey];
    }
    return ctx;
  }
  function $7230ffa83bc0c2cf$export$29f1550f4b0d4415(props, ref, context) {
    let ctx = $7230ffa83bc0c2cf$export$fabf2dc03a41866e(context, props.slot) || {};
    let { ref: contextRef, ...contextProps } = ctx;
    let mergedRef = (0, $03e8ab2d84d7657a$export$4338b53315abf666)((0, import_react5.useMemo)(() => (0, $4064df0d6f9620e1$export$c9058316764c140e)(ref, contextRef), [
      ref,
      contextRef
    ]));
    let mergedProps = (0, $bbaa08b3cd72f041$export$9d1611c77c2fe928)(contextProps, props);
    if ("style" in contextProps && contextProps.style && "style" in props && props.style) {
      if (typeof contextProps.style === "function" || typeof props.style === "function")
        mergedProps.style = (renderProps) => {
          let contextStyle = typeof contextProps.style === "function" ? contextProps.style(renderProps) : contextProps.style;
          let defaultStyle = {
            ...renderProps.defaultStyle,
            ...contextStyle
          };
          let style = typeof props.style === "function" ? props.style({
            ...renderProps,
            defaultStyle
          }) : props.style;
          return {
            ...defaultStyle,
            ...style
          };
        };
      else
        mergedProps.style = {
          ...contextProps.style,
          ...props.style
        };
    }
    return [
      mergedProps,
      mergedRef
    ];
  }
  function $7230ffa83bc0c2cf$var$DOMElement(ElementType, props, forwardedRef) {
    let { render, ...otherProps } = props;
    let elementRef = (0, import_react5.useRef)(null);
    let ref = (0, import_react5.useMemo)(() => (0, $4064df0d6f9620e1$export$c9058316764c140e)(forwardedRef, elementRef), [
      forwardedRef,
      elementRef
    ]);
    (0, $c4867b2f328c2698$export$e5c5a5f917a5871c)(() => {
      if (render) {
        if (!elementRef.current) console.warn("Ref was not connected to DOM element returned by custom `render` function. Did you forget to pass through or merge the `ref`?");
        else if (elementRef.current.localName !== ElementType) console.warn(`Unexpected DOM element returned by custom \`render\` function. Expected <${ElementType}>, got <${elementRef.current.localName}>. This may break the component behavior and accessibility.`);
      }
    }, [
      ElementType,
      render
    ]);
    let domProps = {
      ...otherProps,
      ref
    };
    if (render) return render(domProps, void 0);
    return /* @__PURE__ */ (0, import_react5.default).createElement(ElementType, domProps);
  }
  var $7230ffa83bc0c2cf$var$domComponentCache = {};
  var $7230ffa83bc0c2cf$export$df3a06d6289f983e = new Proxy({}, {
    get(target, elementType) {
      if (typeof elementType !== "string") return void 0;
      let res = $7230ffa83bc0c2cf$var$domComponentCache[elementType];
      if (!res) {
        res = /* @__PURE__ */ (0, import_react5.forwardRef)($7230ffa83bc0c2cf$var$DOMElement.bind(null, elementType));
        $7230ffa83bc0c2cf$var$domComponentCache[elementType] = res;
      }
      return res;
    }
  });

  // node_modules/react-aria/dist/private/utils/shadowdom/DOMFunctions.mjs
  init_define_import_meta_env();

  // node_modules/react-aria/dist/private/utils/domHelpers.mjs
  init_define_import_meta_env();
  var $d447af545b77c9f1$export$b204af158042fbac = (el) => {
    return el?.ownerDocument ?? document;
  };
  var $d447af545b77c9f1$export$f21a1ffae260145a = (el) => {
    if (el && "window" in el && el.window === el) return el;
    const doc = $d447af545b77c9f1$export$b204af158042fbac(el);
    return doc.defaultView || window;
  };
  function $d447af545b77c9f1$var$isNode(value) {
    return value !== null && typeof value === "object" && "nodeType" in value && typeof value.nodeType === "number";
  }
  function $d447af545b77c9f1$export$af51f0f06c0f328a(node) {
    return $d447af545b77c9f1$var$isNode(node) && node.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host" in node;
  }

  // node_modules/react-stately/dist/exports/private/flags/flags.mjs
  init_define_import_meta_env();

  // node_modules/react-stately/dist/private/flags/flags.mjs
  init_define_import_meta_env();
  var $6a20a7989e6c817a$var$_shadowDOM = false;
  function $6a20a7989e6c817a$export$98658e8c59125e6a() {
    return $6a20a7989e6c817a$var$_shadowDOM;
  }

  // node_modules/react-aria/dist/private/utils/shadowdom/DOMFunctions.mjs
  function $23f2114a1b82827e$export$4282f70798064fe0(node, otherNode) {
    if (!(0, $6a20a7989e6c817a$export$98658e8c59125e6a)()) return otherNode && node ? node.contains(otherNode) : false;
    if (!node || !otherNode) return false;
    let currentNode = otherNode;
    while (currentNode !== null) {
      if (currentNode === node) return true;
      if (currentNode.tagName === "SLOT" && currentNode.assignedSlot)
        currentNode = currentNode.assignedSlot.parentNode;
      else if ((0, $d447af545b77c9f1$export$af51f0f06c0f328a)(currentNode))
        currentNode = currentNode.host;
      else currentNode = currentNode.parentNode;
    }
    return false;
  }
  var $23f2114a1b82827e$export$cd4e5573fbe2b576 = (doc = document) => {
    if (!(0, $6a20a7989e6c817a$export$98658e8c59125e6a)()) return doc.activeElement;
    let activeElement = doc.activeElement;
    while (activeElement && "shadowRoot" in activeElement && activeElement.shadowRoot?.activeElement) activeElement = activeElement.shadowRoot.activeElement;
    return activeElement;
  };
  function $23f2114a1b82827e$export$e58f029f0fbfdb29(event) {
    if ((0, $6a20a7989e6c817a$export$98658e8c59125e6a)() && event.target instanceof Element && event.target.shadowRoot) {
      if ("composedPath" in event) return event.composedPath()[0] ?? null;
      else if ("composedPath" in event.nativeEvent) return event.nativeEvent.composedPath()[0] ?? null;
    }
    return event.target;
  }

  // node_modules/react-aria/dist/private/interactions/useFocusVisible.mjs
  init_define_import_meta_env();

  // node_modules/react-aria/dist/private/interactions/utils.mjs
  init_define_import_meta_env();

  // node_modules/react-aria/dist/private/utils/focusWithoutScrolling.mjs
  init_define_import_meta_env();
  function $1969ac565cfec8d0$export$de79e2c695e052f3(element) {
    if ($1969ac565cfec8d0$var$supportsPreventScroll()) element.focus({
      preventScroll: true
    });
    else {
      let scrollableElements = $1969ac565cfec8d0$var$getScrollableElements(element);
      element.focus();
      $1969ac565cfec8d0$var$restoreScrollPosition(scrollableElements);
    }
  }
  var $1969ac565cfec8d0$var$supportsPreventScrollCached = null;
  function $1969ac565cfec8d0$var$supportsPreventScroll() {
    if ($1969ac565cfec8d0$var$supportsPreventScrollCached == null) {
      $1969ac565cfec8d0$var$supportsPreventScrollCached = false;
      try {
        let focusElem = document.createElement("div");
        focusElem.focus({
          get preventScroll() {
            $1969ac565cfec8d0$var$supportsPreventScrollCached = true;
            return true;
          }
        });
      } catch {
      }
    }
    return $1969ac565cfec8d0$var$supportsPreventScrollCached;
  }
  function $1969ac565cfec8d0$var$getScrollableElements(element) {
    let parent = element.parentNode;
    let scrollableElements = [];
    let rootScrollingElement = document.scrollingElement || document.documentElement;
    while (parent instanceof HTMLElement && parent !== rootScrollingElement) {
      if (parent.offsetHeight < parent.scrollHeight || parent.offsetWidth < parent.scrollWidth) scrollableElements.push({
        element: parent,
        scrollTop: parent.scrollTop,
        scrollLeft: parent.scrollLeft
      });
      parent = parent.parentNode;
    }
    if (rootScrollingElement instanceof HTMLElement) scrollableElements.push({
      element: rootScrollingElement,
      scrollTop: rootScrollingElement.scrollTop,
      scrollLeft: rootScrollingElement.scrollLeft
    });
    return scrollableElements;
  }
  function $1969ac565cfec8d0$var$restoreScrollPosition(scrollableElements) {
    for (let { element, scrollTop, scrollLeft } of scrollableElements) {
      element.scrollTop = scrollTop;
      element.scrollLeft = scrollLeft;
    }
  }

  // node_modules/react-aria/dist/private/utils/isFocusable.mjs
  init_define_import_meta_env();

  // node_modules/react-aria/dist/private/utils/isElementVisible.mjs
  init_define_import_meta_env();
  var $ae77152785188400$var$supportsCheckVisibility = typeof Element !== "undefined" && "checkVisibility" in Element.prototype;
  function $ae77152785188400$var$isStyleVisible(element) {
    const windowObject = (0, $d447af545b77c9f1$export$f21a1ffae260145a)(element);
    if (!(element instanceof windowObject.HTMLElement) && !(element instanceof windowObject.SVGElement)) return false;
    let { display, visibility } = element.style;
    let isVisible = display !== "none" && visibility !== "hidden" && visibility !== "collapse";
    if (isVisible) {
      const { getComputedStyle } = element.ownerDocument.defaultView;
      let { display: computedDisplay, visibility: computedVisibility } = getComputedStyle(element);
      isVisible = computedDisplay !== "none" && computedVisibility !== "hidden" && computedVisibility !== "collapse";
    }
    return isVisible;
  }
  function $ae77152785188400$var$isAttributeVisible(element, childElement) {
    return !element.hasAttribute("hidden") && // Ignore HiddenSelect when tree walking.
    !element.hasAttribute("data-react-aria-prevent-focus") && (element.nodeName === "DETAILS" && childElement && childElement.nodeName !== "SUMMARY" ? element.hasAttribute("open") : true);
  }
  function $ae77152785188400$export$e989c0fffaa6b27a(element, childElement) {
    if ($ae77152785188400$var$supportsCheckVisibility) return element.checkVisibility({
      visibilityProperty: true
    }) && !element.closest("[data-react-aria-prevent-focus]");
    return element.nodeName !== "#comment" && $ae77152785188400$var$isStyleVisible(element) && $ae77152785188400$var$isAttributeVisible(element, childElement) && (!element.parentElement || $ae77152785188400$export$e989c0fffaa6b27a(element.parentElement, element));
  }

  // node_modules/react-aria/dist/private/utils/isFocusable.mjs
  var $3b8b240c1bf84ab9$var$focusableElements = [
    "input:not([disabled]):not([type=hidden])",
    "select:not([disabled])",
    "textarea:not([disabled])",
    "button:not([disabled])",
    "a[href]",
    "area[href]",
    "summary",
    "iframe",
    "object",
    "embed",
    "audio[controls]",
    "video[controls]",
    '[contenteditable]:not([contenteditable^="false"])',
    "permission"
  ];
  var $3b8b240c1bf84ab9$var$FOCUSABLE_ELEMENT_SELECTOR = $3b8b240c1bf84ab9$var$focusableElements.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
  $3b8b240c1bf84ab9$var$focusableElements.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
  var $3b8b240c1bf84ab9$var$TABBABLE_ELEMENT_SELECTOR = $3b8b240c1bf84ab9$var$focusableElements.join(':not([hidden]):not([tabindex="-1"]),');
  function $3b8b240c1bf84ab9$export$4c063cf1350e6fed(element, options) {
    return element.matches($3b8b240c1bf84ab9$var$FOCUSABLE_ELEMENT_SELECTOR) && !$3b8b240c1bf84ab9$var$isInert(element) && (options?.skipVisibilityCheck || (0, $ae77152785188400$export$e989c0fffaa6b27a)(element));
  }
  function $3b8b240c1bf84ab9$var$isInert(element) {
    let node = element;
    while (node != null) {
      if (node instanceof node.ownerDocument.defaultView.HTMLElement && node.inert) return true;
      node = node.parentElement;
    }
    return false;
  }

  // node_modules/react-aria/dist/private/interactions/utils.mjs
  var import_react6 = __toESM(require_react_shim(), 1);
  function $a92dc41f639950be$export$525bc4921d56d4a(nativeEvent) {
    let event = nativeEvent;
    event.nativeEvent = nativeEvent;
    event.isDefaultPrevented = () => event.defaultPrevented;
    event.isPropagationStopped = () => event.cancelBubble;
    event.persist = () => {
    };
    return event;
  }
  function $a92dc41f639950be$export$c2b7abe5d61ec696(event, target) {
    Object.defineProperty(event, "target", {
      value: target
    });
    Object.defineProperty(event, "currentTarget", {
      value: target
    });
  }
  function $a92dc41f639950be$export$715c682d09d639cc(onBlur) {
    let stateRef = (0, import_react6.useRef)({
      isFocused: false,
      observer: null
    });
    (0, $c4867b2f328c2698$export$e5c5a5f917a5871c)(() => {
      const state = stateRef.current;
      return () => {
        if (state.observer) {
          state.observer.disconnect();
          state.observer = null;
        }
      };
    }, []);
    return (0, import_react6.useCallback)((e) => {
      let eventTarget = (0, $23f2114a1b82827e$export$e58f029f0fbfdb29)(e);
      if (eventTarget instanceof HTMLButtonElement || eventTarget instanceof HTMLInputElement || eventTarget instanceof HTMLTextAreaElement || eventTarget instanceof HTMLSelectElement) {
        stateRef.current.isFocused = true;
        let target = eventTarget;
        let onBlurHandler = (e2) => {
          stateRef.current.isFocused = false;
          if (target.disabled) {
            let event = $a92dc41f639950be$export$525bc4921d56d4a(e2);
            onBlur?.(event);
          }
          if (stateRef.current.observer) {
            stateRef.current.observer.disconnect();
            stateRef.current.observer = null;
          }
        };
        target.addEventListener("focusout", onBlurHandler, {
          once: true
        });
        stateRef.current.observer = new MutationObserver(() => {
          if (stateRef.current.isFocused && target.disabled) {
            stateRef.current.observer?.disconnect();
            let relatedTargetEl = target === (0, $23f2114a1b82827e$export$cd4e5573fbe2b576)() ? null : (0, $23f2114a1b82827e$export$cd4e5573fbe2b576)();
            target.dispatchEvent(new FocusEvent("blur", {
              relatedTarget: relatedTargetEl
            }));
            target.dispatchEvent(new FocusEvent("focusout", {
              bubbles: true,
              relatedTarget: relatedTargetEl
            }));
          }
        });
        stateRef.current.observer.observe(target, {
          attributes: true,
          attributeFilter: [
            "disabled"
          ]
        });
      }
    }, [
      onBlur
    ]);
  }
  var $a92dc41f639950be$export$fda7da73ab5d4c48 = false;
  function $a92dc41f639950be$export$cabe61c495ee3649(target) {
    while (target && !(0, $3b8b240c1bf84ab9$export$4c063cf1350e6fed)(target, {
      skipVisibilityCheck: true
    })) target = target.parentElement;
    let window2 = (0, $d447af545b77c9f1$export$f21a1ffae260145a)(target);
    let activeElement = window2.document.activeElement;
    if (!activeElement || activeElement === target) return;
    $a92dc41f639950be$export$fda7da73ab5d4c48 = true;
    let isRefocusing = false;
    let onBlur = (e) => {
      if ((0, $23f2114a1b82827e$export$e58f029f0fbfdb29)(e) === activeElement || isRefocusing) e.stopImmediatePropagation();
    };
    let onFocusOut = (e) => {
      if ((0, $23f2114a1b82827e$export$e58f029f0fbfdb29)(e) === activeElement || isRefocusing) {
        e.stopImmediatePropagation();
        if (!target && !isRefocusing) {
          isRefocusing = true;
          (0, $1969ac565cfec8d0$export$de79e2c695e052f3)(activeElement);
          cleanup();
        }
      }
    };
    let onFocus = (e) => {
      if ((0, $23f2114a1b82827e$export$e58f029f0fbfdb29)(e) === target || isRefocusing) e.stopImmediatePropagation();
    };
    let onFocusIn = (e) => {
      if ((0, $23f2114a1b82827e$export$e58f029f0fbfdb29)(e) === target || isRefocusing) {
        e.stopImmediatePropagation();
        if (!isRefocusing) {
          isRefocusing = true;
          (0, $1969ac565cfec8d0$export$de79e2c695e052f3)(activeElement);
          cleanup();
        }
      }
    };
    window2.addEventListener("blur", onBlur, true);
    window2.addEventListener("focusout", onFocusOut, true);
    window2.addEventListener("focusin", onFocusIn, true);
    window2.addEventListener("focus", onFocus, true);
    let cleanup = () => {
      cancelAnimationFrame(raf);
      window2.removeEventListener("blur", onBlur, true);
      window2.removeEventListener("focusout", onFocusOut, true);
      window2.removeEventListener("focusin", onFocusIn, true);
      window2.removeEventListener("focus", onFocus, true);
      $a92dc41f639950be$export$fda7da73ab5d4c48 = false;
      isRefocusing = false;
    };
    let raf = requestAnimationFrame(cleanup);
    return cleanup;
  }

  // node_modules/react-aria/dist/private/utils/platform.mjs
  init_define_import_meta_env();
  function $2add3ce32c6007eb$var$testUserAgent(re) {
    if (typeof window === "undefined" || window.navigator == null) return false;
    let brands = window.navigator["userAgentData"]?.brands;
    return Array.isArray(brands) && brands.some((brand) => re.test(brand.brand)) || re.test(window.navigator.userAgent);
  }
  function $2add3ce32c6007eb$var$testPlatform(re) {
    return typeof window !== "undefined" && window.navigator != null ? re.test(window.navigator["userAgentData"]?.platform || window.navigator.platform) : false;
  }
  function $2add3ce32c6007eb$var$cached(fn) {
    if (false) return fn;
    let res = null;
    return () => {
      if (res == null) res = fn();
      return res;
    };
  }
  var $2add3ce32c6007eb$export$9ac100e40613ea10 = $2add3ce32c6007eb$var$cached(function() {
    return $2add3ce32c6007eb$var$testPlatform(/^Mac/i);
  });
  var $2add3ce32c6007eb$export$186c6964ca17d99 = $2add3ce32c6007eb$var$cached(function() {
    return $2add3ce32c6007eb$var$testPlatform(/^iPhone/i);
  });
  var $2add3ce32c6007eb$export$7bef049ce92e4224 = $2add3ce32c6007eb$var$cached(function() {
    return $2add3ce32c6007eb$var$testPlatform(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
    $2add3ce32c6007eb$export$9ac100e40613ea10() && navigator.maxTouchPoints > 1;
  });
  var $2add3ce32c6007eb$export$fedb369cb70207f1 = $2add3ce32c6007eb$var$cached(function() {
    return $2add3ce32c6007eb$export$186c6964ca17d99() || $2add3ce32c6007eb$export$7bef049ce92e4224();
  });
  var $2add3ce32c6007eb$export$e1865c3bedcd822b = $2add3ce32c6007eb$var$cached(function() {
    return $2add3ce32c6007eb$export$9ac100e40613ea10() || $2add3ce32c6007eb$export$fedb369cb70207f1();
  });
  var $2add3ce32c6007eb$export$78551043582a6a98 = $2add3ce32c6007eb$var$cached(function() {
    return $2add3ce32c6007eb$var$testUserAgent(/AppleWebKit/i) && !$2add3ce32c6007eb$export$6446a186d09e379e();
  });
  var $2add3ce32c6007eb$export$6446a186d09e379e = $2add3ce32c6007eb$var$cached(function() {
    return $2add3ce32c6007eb$var$testUserAgent(/Chrome/i);
  });
  var $2add3ce32c6007eb$export$a11b0059900ceec8 = $2add3ce32c6007eb$var$cached(function() {
    return $2add3ce32c6007eb$var$testUserAgent(/Android/i);
  });
  var $2add3ce32c6007eb$export$b7d78993b74f766d = $2add3ce32c6007eb$var$cached(function() {
    return $2add3ce32c6007eb$var$testUserAgent(/Firefox/i);
  });

  // node_modules/react-aria/dist/private/utils/isVirtualEvent.mjs
  init_define_import_meta_env();
  function $b5c62b033c25b96d$export$60278871457622de(event) {
    if (event.pointerType === "" && event.isTrusted) return true;
    if ((0, $2add3ce32c6007eb$export$a11b0059900ceec8)() && event.pointerType) return event.type === "click" && event.buttons === 1;
    return event.detail === 0 && !event.pointerType;
  }
  function $b5c62b033c25b96d$export$29bf1b5f2c56cf63(event) {
    return !(0, $2add3ce32c6007eb$export$a11b0059900ceec8)() && event.width === 0 && event.height === 0 || event.width === 1 && event.height === 1 && event.pressure === 0 && event.detail === 0 && event.pointerType === "mouse";
  }

  // node_modules/react-aria/dist/private/utils/openLink.mjs
  init_define_import_meta_env();
  var import_react7 = __toESM(require_react_shim(), 1);
  function $caaf0dd3060ed57c$export$95185d699e05d4d7(target, modifiers, setOpening = true) {
    let { metaKey, ctrlKey, altKey, shiftKey } = modifiers;
    if ((0, $2add3ce32c6007eb$export$b7d78993b74f766d)() && window.event?.type?.startsWith("key") && target.target === "_blank") {
      if ((0, $2add3ce32c6007eb$export$9ac100e40613ea10)()) metaKey = true;
      else ctrlKey = true;
    }
    let event = (0, $2add3ce32c6007eb$export$78551043582a6a98)() && (0, $2add3ce32c6007eb$export$9ac100e40613ea10)() && !(0, $2add3ce32c6007eb$export$7bef049ce92e4224)() && true ? new KeyboardEvent("keydown", {
      keyIdentifier: "Enter",
      metaKey,
      ctrlKey,
      altKey,
      shiftKey
    }) : new MouseEvent("click", {
      metaKey,
      ctrlKey,
      altKey,
      shiftKey,
      detail: 1,
      bubbles: true,
      cancelable: true
    });
    $caaf0dd3060ed57c$export$95185d699e05d4d7.isOpening = setOpening;
    (0, $1969ac565cfec8d0$export$de79e2c695e052f3)(target);
    target.dispatchEvent(event);
    $caaf0dd3060ed57c$export$95185d699e05d4d7.isOpening = false;
  }
  $caaf0dd3060ed57c$export$95185d699e05d4d7.isOpening = false;

  // node_modules/react-aria/dist/private/interactions/useFocusVisible.mjs
  var import_react8 = __toESM(require_react_shim(), 1);
  var $8f5a2122b0992be3$var$currentModality = null;
  var $8f5a2122b0992be3$var$currentPointerType = "keyboard";
  var $8f5a2122b0992be3$export$901e90a13c50a14e = /* @__PURE__ */ new Set();
  var $8f5a2122b0992be3$export$d90243b58daecda7 = /* @__PURE__ */ new Map();
  var $8f5a2122b0992be3$var$hasEventBeforeFocus = false;
  var $8f5a2122b0992be3$var$hasBlurredWindowRecently = false;
  var $8f5a2122b0992be3$var$FOCUS_VISIBLE_INPUT_KEYS = {
    Tab: true,
    Escape: true
  };
  function $8f5a2122b0992be3$var$triggerChangeHandlers(modality, e) {
    for (let handler of $8f5a2122b0992be3$export$901e90a13c50a14e) handler(modality, e);
  }
  function $8f5a2122b0992be3$var$isValidKey(e) {
    return !(e.metaKey || !(0, $2add3ce32c6007eb$export$9ac100e40613ea10)() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
  }
  function $8f5a2122b0992be3$var$handleKeyboardEvent(e) {
    $8f5a2122b0992be3$var$hasEventBeforeFocus = true;
    if (!(0, $caaf0dd3060ed57c$export$95185d699e05d4d7).isOpening && $8f5a2122b0992be3$var$isValidKey(e)) {
      $8f5a2122b0992be3$var$currentModality = "keyboard";
      $8f5a2122b0992be3$var$currentPointerType = "keyboard";
      $8f5a2122b0992be3$var$triggerChangeHandlers("keyboard", e);
    }
  }
  function $8f5a2122b0992be3$var$handlePointerEvent(e) {
    $8f5a2122b0992be3$var$currentModality = "pointer";
    $8f5a2122b0992be3$var$currentPointerType = "pointerType" in e ? e.pointerType : "mouse";
    if (e.type === "mousedown" || e.type === "pointerdown") {
      $8f5a2122b0992be3$var$hasEventBeforeFocus = true;
      $8f5a2122b0992be3$var$triggerChangeHandlers("pointer", e);
    }
  }
  function $8f5a2122b0992be3$var$handleClickEvent(e) {
    if (!(0, $caaf0dd3060ed57c$export$95185d699e05d4d7).isOpening && (0, $b5c62b033c25b96d$export$60278871457622de)(e)) {
      $8f5a2122b0992be3$var$hasEventBeforeFocus = true;
      $8f5a2122b0992be3$var$currentModality = "virtual";
      $8f5a2122b0992be3$var$currentPointerType = "virtual";
    }
  }
  function $8f5a2122b0992be3$var$handleFocusEvent(e) {
    let ownerWindow = (0, $d447af545b77c9f1$export$f21a1ffae260145a)((0, $23f2114a1b82827e$export$e58f029f0fbfdb29)(e));
    let ownerDocument = (0, $d447af545b77c9f1$export$b204af158042fbac)((0, $23f2114a1b82827e$export$e58f029f0fbfdb29)(e));
    if ((0, $23f2114a1b82827e$export$e58f029f0fbfdb29)(e) === ownerWindow || (0, $23f2114a1b82827e$export$e58f029f0fbfdb29)(e) === ownerDocument || (0, $a92dc41f639950be$export$fda7da73ab5d4c48) || !e.isTrusted) return;
    if (!$8f5a2122b0992be3$var$hasEventBeforeFocus && !$8f5a2122b0992be3$var$hasBlurredWindowRecently) {
      $8f5a2122b0992be3$var$currentModality = "virtual";
      $8f5a2122b0992be3$var$currentPointerType = "virtual";
      $8f5a2122b0992be3$var$triggerChangeHandlers("virtual", e);
    }
    $8f5a2122b0992be3$var$hasEventBeforeFocus = false;
    $8f5a2122b0992be3$var$hasBlurredWindowRecently = false;
  }
  function $8f5a2122b0992be3$var$handleWindowBlur() {
    if (0, $a92dc41f639950be$export$fda7da73ab5d4c48) return;
    $8f5a2122b0992be3$var$hasEventBeforeFocus = false;
    $8f5a2122b0992be3$var$hasBlurredWindowRecently = true;
  }
  function $8f5a2122b0992be3$var$setupGlobalFocusEvents(element) {
    if (typeof window === "undefined" || typeof document === "undefined") return;
    const windowObject = (0, $d447af545b77c9f1$export$f21a1ffae260145a)(element);
    const documentObject = (0, $d447af545b77c9f1$export$b204af158042fbac)(element);
    if ($8f5a2122b0992be3$export$d90243b58daecda7.get(windowObject)) return;
    let focus = windowObject.HTMLElement.prototype.focus;
    windowObject.HTMLElement.prototype.focus = function() {
      $8f5a2122b0992be3$var$hasEventBeforeFocus = true;
      focus.apply(this, arguments);
    };
    documentObject.addEventListener("keydown", $8f5a2122b0992be3$var$handleKeyboardEvent, true);
    documentObject.addEventListener("keyup", $8f5a2122b0992be3$var$handleKeyboardEvent, true);
    documentObject.addEventListener("click", $8f5a2122b0992be3$var$handleClickEvent, true);
    windowObject.addEventListener("focus", $8f5a2122b0992be3$var$handleFocusEvent, true);
    windowObject.addEventListener("blur", $8f5a2122b0992be3$var$handleWindowBlur, false);
    if (typeof PointerEvent !== "undefined") {
      documentObject.addEventListener("pointerdown", $8f5a2122b0992be3$var$handlePointerEvent, true);
      documentObject.addEventListener("pointermove", $8f5a2122b0992be3$var$handlePointerEvent, true);
      documentObject.addEventListener("pointerup", $8f5a2122b0992be3$var$handlePointerEvent, true);
    } else if (false) {
      documentObject.addEventListener("mousedown", $8f5a2122b0992be3$var$handlePointerEvent, true);
      documentObject.addEventListener("mousemove", $8f5a2122b0992be3$var$handlePointerEvent, true);
      documentObject.addEventListener("mouseup", $8f5a2122b0992be3$var$handlePointerEvent, true);
    }
    windowObject.addEventListener("beforeunload", () => {
      $8f5a2122b0992be3$var$tearDownWindowFocusTracking(element);
    }, {
      once: true
    });
    $8f5a2122b0992be3$export$d90243b58daecda7.set(windowObject, {
      focus
    });
  }
  var $8f5a2122b0992be3$var$tearDownWindowFocusTracking = (element, loadListener) => {
    const windowObject = (0, $d447af545b77c9f1$export$f21a1ffae260145a)(element);
    const documentObject = (0, $d447af545b77c9f1$export$b204af158042fbac)(element);
    if (loadListener) documentObject.removeEventListener("DOMContentLoaded", loadListener);
    if (!$8f5a2122b0992be3$export$d90243b58daecda7.has(windowObject)) return;
    windowObject.HTMLElement.prototype.focus = $8f5a2122b0992be3$export$d90243b58daecda7.get(windowObject).focus;
    documentObject.removeEventListener("keydown", $8f5a2122b0992be3$var$handleKeyboardEvent, true);
    documentObject.removeEventListener("keyup", $8f5a2122b0992be3$var$handleKeyboardEvent, true);
    documentObject.removeEventListener("click", $8f5a2122b0992be3$var$handleClickEvent, true);
    windowObject.removeEventListener("focus", $8f5a2122b0992be3$var$handleFocusEvent, true);
    windowObject.removeEventListener("blur", $8f5a2122b0992be3$var$handleWindowBlur, false);
    if (typeof PointerEvent !== "undefined") {
      documentObject.removeEventListener("pointerdown", $8f5a2122b0992be3$var$handlePointerEvent, true);
      documentObject.removeEventListener("pointermove", $8f5a2122b0992be3$var$handlePointerEvent, true);
      documentObject.removeEventListener("pointerup", $8f5a2122b0992be3$var$handlePointerEvent, true);
    } else if (false) {
      documentObject.removeEventListener("mousedown", $8f5a2122b0992be3$var$handlePointerEvent, true);
      documentObject.removeEventListener("mousemove", $8f5a2122b0992be3$var$handlePointerEvent, true);
      documentObject.removeEventListener("mouseup", $8f5a2122b0992be3$var$handlePointerEvent, true);
    }
    $8f5a2122b0992be3$export$d90243b58daecda7.delete(windowObject);
  };
  function $8f5a2122b0992be3$export$2f1888112f558a7d(element) {
    const documentObject = (0, $d447af545b77c9f1$export$b204af158042fbac)(element);
    let loadListener;
    if (documentObject.readyState !== "loading") $8f5a2122b0992be3$var$setupGlobalFocusEvents(element);
    else {
      loadListener = () => {
        $8f5a2122b0992be3$var$setupGlobalFocusEvents(element);
      };
      documentObject.addEventListener("DOMContentLoaded", loadListener);
    }
    return () => $8f5a2122b0992be3$var$tearDownWindowFocusTracking(element, loadListener);
  }
  if (typeof document !== "undefined") $8f5a2122b0992be3$export$2f1888112f558a7d();
  function $8f5a2122b0992be3$export$b9b3dfddab17db27() {
    return $8f5a2122b0992be3$var$currentModality !== "pointer";
  }
  function $8f5a2122b0992be3$export$630ff653c5ada6a9() {
    return $8f5a2122b0992be3$var$currentModality;
  }
  var $8f5a2122b0992be3$var$nonTextInputTypes = /* @__PURE__ */ new Set([
    "checkbox",
    "radio",
    "range",
    "color",
    "file",
    "image",
    "button",
    "submit",
    "reset"
  ]);
  function $8f5a2122b0992be3$var$isKeyboardFocusEvent(isTextInput, modality, e) {
    let eventTarget = e ? (0, $23f2114a1b82827e$export$e58f029f0fbfdb29)(e) : void 0;
    let document1 = (0, $d447af545b77c9f1$export$b204af158042fbac)(eventTarget);
    let ownerWindow = (0, $d447af545b77c9f1$export$f21a1ffae260145a)(eventTarget);
    const IHTMLInputElement = typeof ownerWindow !== "undefined" ? ownerWindow.HTMLInputElement : HTMLInputElement;
    const IHTMLTextAreaElement = typeof ownerWindow !== "undefined" ? ownerWindow.HTMLTextAreaElement : HTMLTextAreaElement;
    const IHTMLElement = typeof ownerWindow !== "undefined" ? ownerWindow.HTMLElement : HTMLElement;
    const IKeyboardEvent = typeof ownerWindow !== "undefined" ? ownerWindow.KeyboardEvent : KeyboardEvent;
    let activeElement = (0, $23f2114a1b82827e$export$cd4e5573fbe2b576)(document1);
    isTextInput = isTextInput || activeElement instanceof IHTMLInputElement && !$8f5a2122b0992be3$var$nonTextInputTypes.has(activeElement.type) || activeElement instanceof IHTMLTextAreaElement || activeElement instanceof IHTMLElement && activeElement.isContentEditable;
    return !(isTextInput && modality === "keyboard" && e instanceof IKeyboardEvent && !$8f5a2122b0992be3$var$FOCUS_VISIBLE_INPUT_KEYS[e.key]);
  }
  function $8f5a2122b0992be3$export$ec71b4b83ac08ec3(fn, deps, opts) {
    $8f5a2122b0992be3$var$setupGlobalFocusEvents();
    (0, import_react8.useEffect)(() => {
      if (opts?.enabled === false) return;
      let handler = (modality, e) => {
        if (!$8f5a2122b0992be3$var$isKeyboardFocusEvent(!!opts?.isTextInput, modality, e)) return;
        fn($8f5a2122b0992be3$export$b9b3dfddab17db27());
      };
      $8f5a2122b0992be3$export$901e90a13c50a14e.add(handler);
      return () => {
        $8f5a2122b0992be3$export$901e90a13c50a14e.delete(handler);
      };
    }, deps);
  }

  // node_modules/react-aria/dist/private/utils/useEffectEvent.mjs
  init_define_import_meta_env();
  var import_react9 = __toESM(require_react_shim(), 1);
  var $fe16bffc7a557bf0$var$useEarlyEffect = (0, import_react9.default)["useInsertionEffect"] ?? (0, $c4867b2f328c2698$export$e5c5a5f917a5871c);
  function $fe16bffc7a557bf0$export$7f54fc3180508a52(fn) {
    const ref = (0, import_react9.useRef)(null);
    $fe16bffc7a557bf0$var$useEarlyEffect(() => {
      ref.current = fn;
    }, [
      fn
    ]);
    return (0, import_react9.useCallback)((...args) => {
      const f = ref.current;
      return f?.(...args);
    }, []);
  }

  // node_modules/react-aria/dist/private/utils/useEvent.mjs
  init_define_import_meta_env();
  var import_react10 = __toESM(require_react_shim(), 1);
  function $600b3cf69ae46262$export$90fc3a17d93f704c(ref, event, handler, options) {
    let handleEvent = (0, $fe16bffc7a557bf0$export$7f54fc3180508a52)(handler);
    let isDisabled = handler == null;
    (0, import_react10.useEffect)(() => {
      if (isDisabled || !ref.current) return;
      let element = ref.current;
      element.addEventListener(event, handleEvent, options);
      return () => {
        element.removeEventListener(event, handleEvent, options);
      };
    }, [
      ref,
      event,
      options,
      isDisabled
    ]);
  }

  // node_modules/react-stately/dist/private/utils/useControlledState.mjs
  init_define_import_meta_env();
  var import_react11 = __toESM(require_react_shim(), 1);
  var $3e6197669829fe11$var$useEarlyEffect = typeof document !== "undefined" ? (0, import_react11.default)["useInsertionEffect"] ?? (0, import_react11.default).useLayoutEffect : () => {
  };
  function $3e6197669829fe11$export$40bfa8c7b0832715(value, defaultValue, onChange) {
    let [stateValue, setStateValue] = (0, import_react11.useState)(value || defaultValue);
    let valueRef = (0, import_react11.useRef)(stateValue);
    let isControlledRef = (0, import_react11.useRef)(value !== void 0);
    let isControlled = value !== void 0;
    (0, import_react11.useEffect)(() => {
      let wasControlled = isControlledRef.current;
      if (wasControlled !== isControlled && true) console.warn(`WARN: A component changed from ${wasControlled ? "controlled" : "uncontrolled"} to ${isControlled ? "controlled" : "uncontrolled"}.`);
      isControlledRef.current = isControlled;
    }, [
      isControlled
    ]);
    let currentValue = isControlled ? value : stateValue;
    $3e6197669829fe11$var$useEarlyEffect(() => {
      valueRef.current = currentValue;
    });
    let [, forceUpdate] = (0, import_react11.useReducer)(() => ({}), {});
    let setValue = (0, import_react11.useCallback)((value2, ...args) => {
      let newValue = typeof value2 === "function" ? value2(valueRef.current) : value2;
      if (!Object.is(valueRef.current, newValue)) {
        valueRef.current = newValue;
        setStateValue(newValue);
        forceUpdate();
        onChange?.(newValue, ...args);
      }
    }, [
      onChange
    ]);
    return [
      currentValue,
      setValue
    ];
  }

  // node_modules/react-aria/dist/private/interactions/useFocusable.mjs
  init_define_import_meta_env();

  // node_modules/react-aria/dist/private/interactions/focusSafely.mjs
  init_define_import_meta_env();

  // node_modules/react-aria/dist/private/utils/runAfterTransition.mjs
  init_define_import_meta_env();
  var $081cb5757e08788e$var$transitionsByElement = /* @__PURE__ */ new Map();
  var $081cb5757e08788e$var$transitionCallbacks = /* @__PURE__ */ new Set();
  function $081cb5757e08788e$var$setupGlobalEvents() {
    if (typeof window === "undefined") return;
    function isTransitionEvent(event) {
      return "propertyName" in event;
    }
    let onTransitionStart = (e) => {
      let eventTarget = (0, $23f2114a1b82827e$export$e58f029f0fbfdb29)(e);
      if (!isTransitionEvent(e) || !eventTarget) return;
      let transitions = $081cb5757e08788e$var$transitionsByElement.get(eventTarget);
      if (!transitions) {
        transitions = /* @__PURE__ */ new Set();
        $081cb5757e08788e$var$transitionsByElement.set(eventTarget, transitions);
        eventTarget.addEventListener("transitioncancel", onTransitionEnd, {
          once: true
        });
      }
      transitions.add(e.propertyName);
    };
    let onTransitionEnd = (e) => {
      let eventTarget = (0, $23f2114a1b82827e$export$e58f029f0fbfdb29)(e);
      if (!isTransitionEvent(e) || !eventTarget) return;
      let properties = $081cb5757e08788e$var$transitionsByElement.get(eventTarget);
      if (!properties) return;
      properties.delete(e.propertyName);
      if (properties.size === 0) {
        eventTarget.removeEventListener("transitioncancel", onTransitionEnd);
        $081cb5757e08788e$var$transitionsByElement.delete(eventTarget);
      }
      if ($081cb5757e08788e$var$transitionsByElement.size === 0) {
        for (let cb of $081cb5757e08788e$var$transitionCallbacks) cb();
        $081cb5757e08788e$var$transitionCallbacks.clear();
      }
    };
    document.body.addEventListener("transitionrun", onTransitionStart);
    document.body.addEventListener("transitionend", onTransitionEnd);
  }
  if (typeof document !== "undefined") {
    if (document.readyState !== "loading") $081cb5757e08788e$var$setupGlobalEvents();
    else document.addEventListener("DOMContentLoaded", $081cb5757e08788e$var$setupGlobalEvents);
  }
  function $081cb5757e08788e$var$cleanupDetachedElements() {
    for (const [eventTarget] of $081cb5757e08788e$var$transitionsByElement)
      if ("isConnected" in eventTarget && !eventTarget.isConnected) $081cb5757e08788e$var$transitionsByElement.delete(eventTarget);
  }
  function $081cb5757e08788e$export$24490316f764c430(fn) {
    requestAnimationFrame(() => {
      $081cb5757e08788e$var$cleanupDetachedElements();
      if ($081cb5757e08788e$var$transitionsByElement.size === 0) fn();
      else $081cb5757e08788e$var$transitionCallbacks.add(fn);
    });
  }

  // node_modules/react-aria/dist/private/interactions/focusSafely.mjs
  function $f192c2f16961cbe0$export$80f3e147d781571c(element) {
    if (!element.isConnected) return;
    const ownerDocument = (0, $d447af545b77c9f1$export$b204af158042fbac)(element);
    if ((0, $8f5a2122b0992be3$export$630ff653c5ada6a9)() === "virtual") {
      let lastFocusedElement = (0, $23f2114a1b82827e$export$cd4e5573fbe2b576)(ownerDocument);
      (0, $081cb5757e08788e$export$24490316f764c430)(() => {
        const activeElement = (0, $23f2114a1b82827e$export$cd4e5573fbe2b576)(ownerDocument);
        if ((activeElement === lastFocusedElement || activeElement === ownerDocument.body) && element.isConnected) (0, $1969ac565cfec8d0$export$de79e2c695e052f3)(element);
      });
    } else (0, $1969ac565cfec8d0$export$de79e2c695e052f3)(element);
  }

  // node_modules/react-aria/dist/private/interactions/useFocus.mjs
  init_define_import_meta_env();
  var import_react12 = __toESM(require_react_shim(), 1);
  function $1e74c67db218ce67$export$f8168d8dd8fd66e6(props) {
    let { isDisabled, onFocus: onFocusProp, onBlur: onBlurProp, onFocusChange } = props;
    const onBlur = (0, import_react12.useCallback)((e) => {
      if ((0, $23f2114a1b82827e$export$e58f029f0fbfdb29)(e) === e.currentTarget) {
        if (onBlurProp) onBlurProp(e);
        if (onFocusChange) onFocusChange(false);
        return true;
      }
    }, [
      onBlurProp,
      onFocusChange
    ]);
    const onSyntheticFocus = (0, $a92dc41f639950be$export$715c682d09d639cc)(onBlur);
    const onFocus = (0, import_react12.useCallback)((e) => {
      let eventTarget = (0, $23f2114a1b82827e$export$e58f029f0fbfdb29)(e);
      const ownerDocument = (0, $d447af545b77c9f1$export$b204af158042fbac)(eventTarget);
      const activeElement = ownerDocument ? (0, $23f2114a1b82827e$export$cd4e5573fbe2b576)(ownerDocument) : (0, $23f2114a1b82827e$export$cd4e5573fbe2b576)();
      if (eventTarget === e.currentTarget && eventTarget === activeElement) {
        if (onFocusProp) onFocusProp(e);
        if (onFocusChange) onFocusChange(true);
        onSyntheticFocus(e);
      }
    }, [
      onFocusChange,
      onFocusProp,
      onSyntheticFocus
    ]);
    return {
      focusProps: {
        onFocus: !isDisabled && (onFocusProp || onFocusChange || onBlurProp) ? onFocus : void 0,
        onBlur: !isDisabled && (onBlurProp || onFocusChange) ? onBlur : void 0
      }
    };
  }

  // node_modules/react-aria/dist/private/interactions/useKeyboard.mjs
  init_define_import_meta_env();

  // node_modules/react-aria/dist/private/interactions/createEventHandler.mjs
  init_define_import_meta_env();
  function $8dba16319206abb6$export$48d1ea6320830260(handler) {
    if (!handler) return void 0;
    let shouldStopPropagation = true;
    return (e) => {
      let event = {
        ...e,
        preventDefault() {
          e.preventDefault();
        },
        isDefaultPrevented() {
          return e.isDefaultPrevented();
        },
        stopPropagation() {
          if (shouldStopPropagation && true) console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.");
          else shouldStopPropagation = true;
        },
        continuePropagation() {
          shouldStopPropagation = false;
        },
        isPropagationStopped() {
          return shouldStopPropagation;
        }
      };
      handler(event);
      if (shouldStopPropagation) e.stopPropagation();
    };
  }

  // node_modules/react-aria/dist/private/interactions/useKeyboard.mjs
  function $8296dad1a4c5e0dc$export$8f71654801c2f7cd(props) {
    return {
      keyboardProps: props.isDisabled ? {} : {
        onKeyDown: (0, $8dba16319206abb6$export$48d1ea6320830260)(props.onKeyDown),
        onKeyUp: (0, $8dba16319206abb6$export$48d1ea6320830260)(props.onKeyUp)
      }
    };
  }

  // node_modules/react-aria/dist/private/utils/useSyncRef.mjs
  init_define_import_meta_env();
  function $b7115c395c64f7b5$export$4debdb1a3f0fa79e(context, ref) {
    (0, $c4867b2f328c2698$export$e5c5a5f917a5871c)(() => {
      if (context && context.ref && ref) {
        context.ref.current = ref.current;
        return () => {
          if (context.ref) context.ref.current = null;
        };
      }
    });
  }

  // node_modules/react-aria/dist/private/interactions/useFocusable.mjs
  var import_react13 = __toESM(require_react_shim(), 1);
  var $d1116acdf220c2da$export$f9762fab77588ecb = /* @__PURE__ */ (0, import_react13.default).createContext(null);
  function $d1116acdf220c2da$var$useFocusableContext(ref) {
    let context = (0, import_react13.useContext)($d1116acdf220c2da$export$f9762fab77588ecb) || {};
    (0, $b7115c395c64f7b5$export$4debdb1a3f0fa79e)(context, ref);
    let { ref: _, ...otherProps } = context;
    return otherProps;
  }
  function $d1116acdf220c2da$export$4c014de7c8940b4c(props, domRef) {
    let { focusProps } = (0, $1e74c67db218ce67$export$f8168d8dd8fd66e6)(props);
    let { keyboardProps } = (0, $8296dad1a4c5e0dc$export$8f71654801c2f7cd)(props);
    let interactions = (0, $bbaa08b3cd72f041$export$9d1611c77c2fe928)(focusProps, keyboardProps);
    let domProps = $d1116acdf220c2da$var$useFocusableContext(domRef);
    let interactionProps = props.isDisabled ? {} : domProps;
    let autoFocusRef = (0, import_react13.useRef)(props.autoFocus);
    (0, import_react13.useEffect)(() => {
      if (autoFocusRef.current && domRef.current) (0, $f192c2f16961cbe0$export$80f3e147d781571c)(domRef.current);
      autoFocusRef.current = false;
    }, [
      domRef
    ]);
    let tabIndex = props.excludeFromTabOrder ? -1 : 0;
    if (props.isDisabled) tabIndex = void 0;
    return {
      focusableProps: (0, $bbaa08b3cd72f041$export$9d1611c77c2fe928)({
        ...interactions,
        tabIndex
      }, interactionProps)
    };
  }

  // node_modules/react-aria/dist/private/collections/Hidden.mjs
  init_define_import_meta_env();
  var import_react14 = __toESM(require_react_shim(), 1);
  if (typeof HTMLTemplateElement !== "undefined") {
    Object.defineProperty(HTMLTemplateElement.prototype, "firstChild", {
      configurable: true,
      enumerable: true,
      get: function() {
        return this.content.firstChild;
      }
    });
    Object.defineProperty(HTMLTemplateElement.prototype, "appendChild", {
      configurable: true,
      enumerable: true,
      value: function(node) {
        return this.content.appendChild(node);
      }
    });
    Object.defineProperty(HTMLTemplateElement.prototype, "removeChild", {
      configurable: true,
      enumerable: true,
      value: function(node) {
        return this.content.removeChild(node);
      }
    });
    Object.defineProperty(HTMLTemplateElement.prototype, "insertBefore", {
      configurable: true,
      enumerable: true,
      value: function(node, child) {
        return this.content.insertBefore(node, child);
      }
    });
  }
  var $d7f64c32b702fe2c$export$94b6d0abf7d33e8c = /* @__PURE__ */ (0, import_react14.createContext)(false);
  function $d7f64c32b702fe2c$export$86427a43e3e48ebb(fn) {
    let Wrapper = (props, ref) => {
      let isHidden = (0, import_react14.useContext)($d7f64c32b702fe2c$export$94b6d0abf7d33e8c);
      if (isHidden) return null;
      return fn(props, ref);
    };
    Wrapper.displayName = fn.displayName || fn.name;
    return (0, import_react14.forwardRef)(Wrapper);
  }

  // node_modules/react-aria/dist/private/utils/filterDOMProps.mjs
  init_define_import_meta_env();
  var $8e9d2fae0ecb9001$var$DOMPropNames = /* @__PURE__ */ new Set([
    "id"
  ]);
  var $8e9d2fae0ecb9001$var$labelablePropNames = /* @__PURE__ */ new Set([
    "aria-label",
    "aria-labelledby",
    "aria-describedby",
    "aria-details"
  ]);
  var $8e9d2fae0ecb9001$var$linkPropNames = /* @__PURE__ */ new Set([
    "href",
    "hrefLang",
    "target",
    "rel",
    "download",
    "ping",
    "referrerPolicy"
  ]);
  var $8e9d2fae0ecb9001$var$globalAttrs = /* @__PURE__ */ new Set([
    "dir",
    "lang",
    "hidden",
    "inert",
    "translate"
  ]);
  var $8e9d2fae0ecb9001$var$globalEvents = /* @__PURE__ */ new Set([
    "onClick",
    "onAuxClick",
    "onContextMenu",
    "onDoubleClick",
    "onMouseDown",
    "onMouseEnter",
    "onMouseLeave",
    "onMouseMove",
    "onMouseOut",
    "onMouseOver",
    "onMouseUp",
    "onTouchCancel",
    "onTouchEnd",
    "onTouchMove",
    "onTouchStart",
    "onPointerDown",
    "onPointerMove",
    "onPointerUp",
    "onPointerCancel",
    "onPointerEnter",
    "onPointerLeave",
    "onPointerOver",
    "onPointerOut",
    "onGotPointerCapture",
    "onLostPointerCapture",
    "onScroll",
    "onWheel",
    "onAnimationStart",
    "onAnimationEnd",
    "onAnimationIteration",
    "onTransitionCancel",
    "onTransitionEnd",
    "onTransitionRun",
    "onTransitionStart"
  ]);
  var $8e9d2fae0ecb9001$var$propRe = /^(data-.*)$/;
  function $8e9d2fae0ecb9001$export$457c3d6518dd4c6f(props, opts = {}) {
    let { labelable, isLink, global, events = global, propNames } = opts;
    let filteredProps = {};
    for (const prop in props) if (Object.prototype.hasOwnProperty.call(props, prop) && ($8e9d2fae0ecb9001$var$DOMPropNames.has(prop) || labelable && $8e9d2fae0ecb9001$var$labelablePropNames.has(prop) || isLink && $8e9d2fae0ecb9001$var$linkPropNames.has(prop) || global && $8e9d2fae0ecb9001$var$globalAttrs.has(prop) || events && ($8e9d2fae0ecb9001$var$globalEvents.has(prop) || prop.endsWith("Capture") && $8e9d2fae0ecb9001$var$globalEvents.has(prop.slice(0, -7))) || propNames?.has(prop) || $8e9d2fae0ecb9001$var$propRe.test(prop))) filteredProps[prop] = props[prop];
    return filteredProps;
  }

  // node_modules/react-aria/dist/private/interactions/usePress.mjs
  init_define_import_meta_env();

  // node_modules/react-aria/dist/private/interactions/textSelection.mjs
  init_define_import_meta_env();
  var $cbf007e418543821$var$state = "default";
  var $cbf007e418543821$var$savedUserSelect = "";
  var $cbf007e418543821$var$modifiedElementMap = /* @__PURE__ */ new WeakMap();
  function $cbf007e418543821$export$16a4697467175487(target) {
    if ((0, $2add3ce32c6007eb$export$fedb369cb70207f1)()) {
      if ($cbf007e418543821$var$state === "default") {
        const documentObject = (0, $d447af545b77c9f1$export$b204af158042fbac)(target);
        $cbf007e418543821$var$savedUserSelect = documentObject.documentElement.style.webkitUserSelect;
        documentObject.documentElement.style.webkitUserSelect = "none";
      }
      $cbf007e418543821$var$state = "disabled";
    } else if (target instanceof HTMLElement || target instanceof SVGElement) {
      let property = "userSelect" in target.style ? "userSelect" : "webkitUserSelect";
      $cbf007e418543821$var$modifiedElementMap.set(target, target.style[property]);
      target.style[property] = "none";
    }
  }
  function $cbf007e418543821$export$b0d6fa1ab32e3295(target) {
    if ((0, $2add3ce32c6007eb$export$fedb369cb70207f1)()) {
      if ($cbf007e418543821$var$state !== "disabled") return;
      $cbf007e418543821$var$state = "restoring";
      setTimeout(() => {
        (0, $081cb5757e08788e$export$24490316f764c430)(() => {
          if ($cbf007e418543821$var$state === "restoring") {
            const documentObject = (0, $d447af545b77c9f1$export$b204af158042fbac)(target);
            if (documentObject.documentElement.style.webkitUserSelect === "none") documentObject.documentElement.style.webkitUserSelect = $cbf007e418543821$var$savedUserSelect || "";
            $cbf007e418543821$var$savedUserSelect = "";
            $cbf007e418543821$var$state = "default";
          }
        });
      }, 300);
    } else if (target instanceof HTMLElement || target instanceof SVGElement) {
      if (target && $cbf007e418543821$var$modifiedElementMap.has(target)) {
        let targetOldUserSelect = $cbf007e418543821$var$modifiedElementMap.get(target);
        let property = "userSelect" in target.style ? "userSelect" : "webkitUserSelect";
        if (target.style[property] === "none") target.style[property] = targetOldUserSelect;
        if (target.getAttribute("style") === "") target.removeAttribute("style");
        $cbf007e418543821$var$modifiedElementMap.delete(target);
      }
    }
  }

  // node_modules/react-aria/dist/private/utils/getNonce.mjs
  init_define_import_meta_env();
  function $2b2d34ff061957fb$var$getWebpackNonce(doc) {
    let ownerWindow = doc?.defaultView;
    return ownerWindow?.__webpack_nonce__ || globalThis["__webpack_nonce__"] || void 0;
  }
  var $2b2d34ff061957fb$var$nonceCache = /* @__PURE__ */ new WeakMap();
  function $2b2d34ff061957fb$export$2b85b721e524d74b(doc) {
    let d = doc ?? (typeof document !== "undefined" ? document : void 0);
    if (!d) return $2b2d34ff061957fb$var$getWebpackNonce(d);
    if ($2b2d34ff061957fb$var$nonceCache.has(d)) return $2b2d34ff061957fb$var$nonceCache.get(d);
    let meta2 = d.querySelector('meta[property="csp-nonce"]');
    let nonce = meta2 && meta2 instanceof (0, $d447af545b77c9f1$export$f21a1ffae260145a)(meta2).HTMLMetaElement && (meta2.nonce || meta2.content) || $2b2d34ff061957fb$var$getWebpackNonce(d) || void 0;
    if (nonce !== void 0) $2b2d34ff061957fb$var$nonceCache.set(d, nonce);
    return nonce;
  }

  // node_modules/react-aria/dist/private/interactions/context.mjs
  init_define_import_meta_env();
  var import_react15 = __toESM(require_react_shim(), 1);
  var $24f9a20f226ad820$export$5165eccb35aaadb5 = (0, import_react15.default).createContext({
    register: () => {
    }
  });
  $24f9a20f226ad820$export$5165eccb35aaadb5.displayName = "PressResponderContext";

  // node_modules/react-aria/dist/private/utils/useGlobalListeners.mjs
  init_define_import_meta_env();
  var import_react16 = __toESM(require_react_shim(), 1);
  function $48a7d519b337145d$export$4eaf04e54aa8eed6() {
    let globalListeners = (0, import_react16.useRef)(/* @__PURE__ */ new Map());
    let addGlobalListener = (0, import_react16.useCallback)((eventTarget, type, listener, options) => {
      let fn = options?.once ? (...args) => {
        globalListeners.current.delete(listener);
        listener(...args);
      } : listener;
      globalListeners.current.set(listener, {
        type,
        eventTarget,
        fn,
        options
      });
      eventTarget.addEventListener(type, fn, options);
    }, []);
    let removeGlobalListener = (0, import_react16.useCallback)((eventTarget, type, listener, options) => {
      let fn = globalListeners.current.get(listener)?.fn || listener;
      eventTarget.removeEventListener(type, fn, options);
      globalListeners.current.delete(listener);
    }, []);
    let removeAllGlobalListeners = (0, import_react16.useCallback)(() => {
      globalListeners.current.forEach((value, key) => {
        removeGlobalListener(value.eventTarget, value.type, key, value.options);
      });
    }, [
      removeGlobalListener
    ]);
    (0, import_react16.useEffect)(() => {
      return removeAllGlobalListeners;
    }, [
      removeAllGlobalListeners
    ]);
    return {
      addGlobalListener,
      removeGlobalListener,
      removeAllGlobalListeners
    };
  }

  // node_modules/react-aria/dist/private/interactions/usePress.mjs
  var import_react_dom = __toESM(require_react_dom_shim(), 1);
  var import_react17 = __toESM(require_react_shim(), 1);
  function $d27d541f9569d26d$var$usePressResponderContext(props) {
    let context = (0, import_react17.useContext)((0, $24f9a20f226ad820$export$5165eccb35aaadb5));
    if (context) {
      let { register, ref, ...contextProps } = context;
      props = (0, $bbaa08b3cd72f041$export$9d1611c77c2fe928)(contextProps, props);
      register();
    }
    (0, $b7115c395c64f7b5$export$4debdb1a3f0fa79e)(context, props.ref);
    return props;
  }
  var $d27d541f9569d26d$var$PressEvent = class {
    #shouldStopPropagation;
    constructor(type, pointerType, originalEvent, state) {
      this.#shouldStopPropagation = true;
      let currentTarget = state?.target ?? originalEvent.currentTarget;
      const rect = currentTarget?.getBoundingClientRect();
      let x, y = 0;
      let clientX, clientY = null;
      if (originalEvent.clientX != null && originalEvent.clientY != null) {
        clientX = originalEvent.clientX;
        clientY = originalEvent.clientY;
      }
      if (rect) {
        if (clientX != null && clientY != null) {
          x = clientX - rect.left;
          y = clientY - rect.top;
        } else {
          x = rect.width / 2;
          y = rect.height / 2;
        }
      }
      this.type = type;
      this.pointerType = pointerType;
      this.target = originalEvent.currentTarget;
      this.shiftKey = originalEvent.shiftKey;
      this.metaKey = originalEvent.metaKey;
      this.ctrlKey = originalEvent.ctrlKey;
      this.altKey = originalEvent.altKey;
      this.x = x;
      this.y = y;
      this.key = originalEvent.key;
    }
    continuePropagation() {
      this.#shouldStopPropagation = false;
    }
    get shouldStopPropagation() {
      return this.#shouldStopPropagation;
    }
  };
  var $d27d541f9569d26d$var$LINK_CLICKED = /* @__PURE__ */ Symbol("linkClicked");
  var $d27d541f9569d26d$var$STYLE_ID = "react-aria-pressable-style";
  var $d27d541f9569d26d$var$PRESSABLE_ATTRIBUTE = "data-react-aria-pressable";
  function $d27d541f9569d26d$export$45712eceda6fad21(props) {
    let { onPress, onPressChange, onPressStart, onPressEnd, onPressUp, onClick, isDisabled, isPressed: isPressedProp, preventFocusOnPress, shouldCancelOnPointerExit, allowTextSelectionOnPress, ref: domRef, ...domProps } = $d27d541f9569d26d$var$usePressResponderContext(props);
    let [isPressed, setPressed] = (0, import_react17.useState)(false);
    let ref = (0, import_react17.useRef)({
      isPressed: false,
      ignoreEmulatedMouseEvents: false,
      didFirePressStart: false,
      isTriggeringEvent: false,
      activePointerId: null,
      target: null,
      isOverTarget: false,
      pointerType: null,
      disposables: []
    });
    let { addGlobalListener, removeAllGlobalListeners } = (0, $48a7d519b337145d$export$4eaf04e54aa8eed6)();
    let triggerPressStart = (0, import_react17.useCallback)((originalEvent, pointerType) => {
      let state = ref.current;
      if (isDisabled || state.didFirePressStart) return false;
      let shouldStopPropagation = true;
      state.isTriggeringEvent = true;
      if (onPressStart) {
        let event = new $d27d541f9569d26d$var$PressEvent("pressstart", pointerType, originalEvent);
        onPressStart(event);
        shouldStopPropagation = event.shouldStopPropagation;
      }
      if (onPressChange) onPressChange(true);
      state.isTriggeringEvent = false;
      state.didFirePressStart = true;
      setPressed(true);
      return shouldStopPropagation;
    }, [
      isDisabled,
      onPressStart,
      onPressChange
    ]);
    let triggerPressEnd = (0, import_react17.useCallback)((originalEvent, pointerType, wasPressed = true) => {
      let state = ref.current;
      if (!state.didFirePressStart) return false;
      state.didFirePressStart = false;
      state.isTriggeringEvent = true;
      let shouldStopPropagation = true;
      if (onPressEnd) {
        let event = new $d27d541f9569d26d$var$PressEvent("pressend", pointerType, originalEvent);
        onPressEnd(event);
        shouldStopPropagation = event.shouldStopPropagation;
      }
      if (onPressChange) onPressChange(false);
      setPressed(false);
      if (onPress && wasPressed && !isDisabled) {
        let event = new $d27d541f9569d26d$var$PressEvent("press", pointerType, originalEvent);
        onPress(event);
        shouldStopPropagation &&= event.shouldStopPropagation;
      }
      state.isTriggeringEvent = false;
      return shouldStopPropagation;
    }, [
      isDisabled,
      onPressEnd,
      onPressChange,
      onPress
    ]);
    let triggerPressEndEvent = (0, $fe16bffc7a557bf0$export$7f54fc3180508a52)(triggerPressEnd);
    let triggerPressUp = (0, import_react17.useCallback)((originalEvent, pointerType) => {
      let state = ref.current;
      if (isDisabled) return false;
      if (onPressUp) {
        state.isTriggeringEvent = true;
        let event = new $d27d541f9569d26d$var$PressEvent("pressup", pointerType, originalEvent);
        onPressUp(event);
        state.isTriggeringEvent = false;
        return event.shouldStopPropagation;
      }
      return true;
    }, [
      isDisabled,
      onPressUp
    ]);
    let triggerPressUpEvent = (0, $fe16bffc7a557bf0$export$7f54fc3180508a52)(triggerPressUp);
    let cancel = (0, import_react17.useCallback)((e) => {
      let state = ref.current;
      if (state.isPressed && state.target) {
        if (state.didFirePressStart && state.pointerType != null) triggerPressEnd($d27d541f9569d26d$var$createEvent(state.target, e), state.pointerType, false);
        state.isPressed = false;
        state.isOverTarget = false;
        state.activePointerId = null;
        state.pointerType = null;
        removeAllGlobalListeners();
        if (!allowTextSelectionOnPress) (0, $cbf007e418543821$export$b0d6fa1ab32e3295)(state.target);
        for (let dispose of state.disposables) dispose();
        state.disposables = [];
      }
    }, [
      allowTextSelectionOnPress,
      removeAllGlobalListeners,
      triggerPressEnd
    ]);
    let cancelEvent = (0, $fe16bffc7a557bf0$export$7f54fc3180508a52)(cancel);
    let cancelOnPointerExit = (0, import_react17.useCallback)((e) => {
      if (shouldCancelOnPointerExit) cancel(e);
    }, [
      shouldCancelOnPointerExit,
      cancel
    ]);
    let triggerClick = (0, import_react17.useCallback)((e) => {
      if (isDisabled) return;
      onClick?.(e);
    }, [
      isDisabled,
      onClick
    ]);
    let triggerSyntheticClick = (0, import_react17.useCallback)((e, target) => {
      if (isDisabled) return;
      if (onClick) {
        let event = new MouseEvent("click", e);
        (0, $a92dc41f639950be$export$c2b7abe5d61ec696)(event, target);
        onClick((0, $a92dc41f639950be$export$525bc4921d56d4a)(event));
      }
    }, [
      isDisabled,
      onClick
    ]);
    let pressProps = (0, import_react17.useMemo)(() => {
      let state = ref.current;
      let pressProps2 = {
        onKeyDown(e) {
          if ($d27d541f9569d26d$var$isValidKeyboardEvent(e.nativeEvent, e.currentTarget) && (0, $23f2114a1b82827e$export$4282f70798064fe0)(e.currentTarget, (0, $23f2114a1b82827e$export$e58f029f0fbfdb29)(e))) {
            if ($d27d541f9569d26d$var$shouldPreventDefaultKeyboard((0, $23f2114a1b82827e$export$e58f029f0fbfdb29)(e), e.key)) e.preventDefault();
            let shouldStopPropagation = true;
            if (!state.isPressed && !e.repeat) {
              state.target = e.currentTarget;
              state.isPressed = true;
              state.pointerType = "keyboard";
              shouldStopPropagation = triggerPressStart(e, "keyboard");
            }
            let originalTarget = e.currentTarget;
            let pressUp = (e2) => {
              if ($d27d541f9569d26d$var$isValidKeyboardEvent(e2, originalTarget) && !e2.repeat && (0, $23f2114a1b82827e$export$4282f70798064fe0)(originalTarget, (0, $23f2114a1b82827e$export$e58f029f0fbfdb29)(e2)) && state.target)
                triggerPressUpEvent($d27d541f9569d26d$var$createEvent(state.target, e2), "keyboard");
            };
            addGlobalListener((0, $d447af545b77c9f1$export$b204af158042fbac)(e.currentTarget), "keyup", (0, $a4e76a5424781910$export$e08e3b67e392101e)(pressUp, onKeyUp), true);
            if (shouldStopPropagation) e.stopPropagation();
            if (e.metaKey && (0, $2add3ce32c6007eb$export$9ac100e40613ea10)()) state.metaKeyEvents?.set(e.key, e.nativeEvent);
          } else if (e.key === "Meta") state.metaKeyEvents = /* @__PURE__ */ new Map();
        },
        onClick(e) {
          if (e && !(0, $23f2114a1b82827e$export$4282f70798064fe0)(e.currentTarget, (0, $23f2114a1b82827e$export$e58f029f0fbfdb29)(e))) return;
          if (e && e.button === 0 && !state.isTriggeringEvent && !(0, $caaf0dd3060ed57c$export$95185d699e05d4d7).isOpening) {
            let shouldStopPropagation = true;
            if (isDisabled) e.preventDefault();
            if (!state.ignoreEmulatedMouseEvents && !state.isPressed && (state.pointerType === "virtual" || (0, $b5c62b033c25b96d$export$60278871457622de)(e.nativeEvent))) {
              let stopPressStart = triggerPressStart(e, "virtual");
              let stopPressUp = triggerPressUpEvent(e, "virtual");
              let stopPressEnd = triggerPressEndEvent(e, "virtual");
              triggerClick(e);
              shouldStopPropagation = stopPressStart && stopPressUp && stopPressEnd;
            } else if (state.isPressed && state.pointerType !== "keyboard") {
              let pointerType = state.pointerType || e.nativeEvent.pointerType || "virtual";
              let stopPressUp = triggerPressUpEvent($d27d541f9569d26d$var$createEvent(e.currentTarget, e), pointerType);
              let stopPressEnd = triggerPressEndEvent($d27d541f9569d26d$var$createEvent(e.currentTarget, e), pointerType, true);
              shouldStopPropagation = stopPressUp && stopPressEnd;
              state.isOverTarget = false;
              triggerClick(e);
              cancelEvent(e);
            }
            state.ignoreEmulatedMouseEvents = false;
            if (shouldStopPropagation) e.stopPropagation();
          }
        }
      };
      let onKeyUp = (e) => {
        if (state.isPressed && state.target && $d27d541f9569d26d$var$isValidKeyboardEvent(e, state.target)) {
          if ($d27d541f9569d26d$var$shouldPreventDefaultKeyboard((0, $23f2114a1b82827e$export$e58f029f0fbfdb29)(e), e.key)) e.preventDefault();
          let target = (0, $23f2114a1b82827e$export$e58f029f0fbfdb29)(e);
          let wasPressed = (0, $23f2114a1b82827e$export$4282f70798064fe0)(state.target, target);
          triggerPressEndEvent($d27d541f9569d26d$var$createEvent(state.target, e), "keyboard", wasPressed);
          if (wasPressed) triggerSyntheticClick(e, state.target);
          removeAllGlobalListeners();
          if (e.key !== "Enter" && $d27d541f9569d26d$var$isHTMLAnchorLink(state.target) && (0, $23f2114a1b82827e$export$4282f70798064fe0)(state.target, target) && !e[$d27d541f9569d26d$var$LINK_CLICKED]) {
            e[$d27d541f9569d26d$var$LINK_CLICKED] = true;
            (0, $caaf0dd3060ed57c$export$95185d699e05d4d7)(state.target, e, false);
          }
          state.isPressed = false;
          state.metaKeyEvents?.delete(e.key);
        } else if (e.key === "Meta" && state.metaKeyEvents?.size) {
          let events = state.metaKeyEvents;
          state.metaKeyEvents = void 0;
          for (let event of events.values()) state.target?.dispatchEvent(new KeyboardEvent("keyup", event));
        }
      };
      if (typeof PointerEvent !== "undefined") {
        pressProps2.onPointerDown = (e) => {
          if (e.button !== 0 || !(0, $23f2114a1b82827e$export$4282f70798064fe0)(e.currentTarget, (0, $23f2114a1b82827e$export$e58f029f0fbfdb29)(e))) return;
          if ((0, $b5c62b033c25b96d$export$29bf1b5f2c56cf63)(e.nativeEvent)) {
            state.pointerType = "virtual";
            return;
          }
          state.pointerType = e.pointerType;
          let shouldStopPropagation = true;
          if (!state.isPressed) {
            state.isPressed = true;
            state.isOverTarget = true;
            state.activePointerId = e.pointerId;
            state.target = e.currentTarget;
            if (!allowTextSelectionOnPress) (0, $cbf007e418543821$export$16a4697467175487)(state.target);
            shouldStopPropagation = triggerPressStart(e, state.pointerType);
            let target = (0, $23f2114a1b82827e$export$e58f029f0fbfdb29)(e);
            if ("releasePointerCapture" in target) {
              if ("hasPointerCapture" in target) {
                if (target.hasPointerCapture(e.pointerId)) target.releasePointerCapture(e.pointerId);
              } else target.releasePointerCapture(e.pointerId);
            }
            addGlobalListener((0, $d447af545b77c9f1$export$b204af158042fbac)(e.currentTarget), "pointerup", onPointerUp, false);
            addGlobalListener((0, $d447af545b77c9f1$export$b204af158042fbac)(e.currentTarget), "pointercancel", onPointerCancel, false);
          }
          if (shouldStopPropagation) e.stopPropagation();
        };
        pressProps2.onMouseDown = (e) => {
          if (!(0, $23f2114a1b82827e$export$4282f70798064fe0)(e.currentTarget, (0, $23f2114a1b82827e$export$e58f029f0fbfdb29)(e))) return;
          if (e.button === 0) {
            if (preventFocusOnPress) {
              let dispose = (0, $a92dc41f639950be$export$cabe61c495ee3649)(e.target);
              if (dispose) state.disposables.push(dispose);
            }
            e.stopPropagation();
          }
        };
        pressProps2.onPointerUp = (e) => {
          if (!(0, $23f2114a1b82827e$export$4282f70798064fe0)(e.currentTarget, (0, $23f2114a1b82827e$export$e58f029f0fbfdb29)(e)) || state.pointerType === "virtual") return;
          if (e.button === 0 && !state.isPressed)
            triggerPressUpEvent(e, state.pointerType || e.pointerType);
        };
        pressProps2.onPointerEnter = (e) => {
          if (e.pointerId === state.activePointerId && state.target && !state.isOverTarget && state.pointerType != null) {
            state.isOverTarget = true;
            triggerPressStart($d27d541f9569d26d$var$createEvent(state.target, e), state.pointerType);
          }
        };
        pressProps2.onPointerLeave = (e) => {
          if (e.pointerId === state.activePointerId && state.target && state.isOverTarget && state.pointerType != null) {
            state.isOverTarget = false;
            triggerPressEndEvent($d27d541f9569d26d$var$createEvent(state.target, e), state.pointerType, false);
            cancelOnPointerExit(e);
          }
        };
        let onPointerUp = (e) => {
          if (e.pointerId === state.activePointerId && state.isPressed && e.button === 0 && state.target) {
            if ((0, $23f2114a1b82827e$export$4282f70798064fe0)(state.target, (0, $23f2114a1b82827e$export$e58f029f0fbfdb29)(e)) && state.pointerType != null) {
              let clicked = false;
              let timeout = setTimeout(() => {
                if (state.isPressed && state.target instanceof HTMLElement) {
                  if (clicked)
                    cancelEvent(e);
                  else {
                    (0, $1969ac565cfec8d0$export$de79e2c695e052f3)(state.target);
                    state.target.click();
                  }
                }
              }, 80);
              addGlobalListener(e.currentTarget, "click", () => clicked = true, true);
              state.disposables.push(() => clearTimeout(timeout));
            } else
              cancelEvent(e);
            state.isOverTarget = false;
          }
        };
        let onPointerCancel = (e) => {
          cancelEvent(e);
        };
        pressProps2.onDragStart = (e) => {
          if (!(0, $23f2114a1b82827e$export$4282f70798064fe0)(e.currentTarget, (0, $23f2114a1b82827e$export$e58f029f0fbfdb29)(e))) return;
          cancelEvent(e);
        };
      } else if (false) {
        pressProps2.onMouseDown = (e) => {
          if (e.button !== 0 || !(0, $23f2114a1b82827e$export$4282f70798064fe0)(e.currentTarget, (0, $23f2114a1b82827e$export$e58f029f0fbfdb29)(e))) return;
          if (state.ignoreEmulatedMouseEvents) {
            e.stopPropagation();
            return;
          }
          state.isPressed = true;
          state.isOverTarget = true;
          state.target = e.currentTarget;
          state.pointerType = (0, $b5c62b033c25b96d$export$60278871457622de)(e.nativeEvent) ? "virtual" : "mouse";
          let shouldStopPropagation = (0, import_react_dom.flushSync)(() => triggerPressStart(e, state.pointerType));
          if (shouldStopPropagation) e.stopPropagation();
          if (preventFocusOnPress) {
            let dispose = (0, $a92dc41f639950be$export$cabe61c495ee3649)(e.target);
            if (dispose) state.disposables.push(dispose);
          }
          addGlobalListener((0, $d447af545b77c9f1$export$b204af158042fbac)(e.currentTarget), "mouseup", onMouseUp, false);
        };
        pressProps2.onMouseEnter = (e) => {
          if (!(0, $23f2114a1b82827e$export$4282f70798064fe0)(e.currentTarget, (0, $23f2114a1b82827e$export$e58f029f0fbfdb29)(e))) return;
          let shouldStopPropagation = true;
          if (state.isPressed && !state.ignoreEmulatedMouseEvents && state.pointerType != null) {
            state.isOverTarget = true;
            shouldStopPropagation = triggerPressStart(e, state.pointerType);
          }
          if (shouldStopPropagation) e.stopPropagation();
        };
        pressProps2.onMouseLeave = (e) => {
          if (!(0, $23f2114a1b82827e$export$4282f70798064fe0)(e.currentTarget, (0, $23f2114a1b82827e$export$e58f029f0fbfdb29)(e))) return;
          let shouldStopPropagation = true;
          if (state.isPressed && !state.ignoreEmulatedMouseEvents && state.pointerType != null) {
            state.isOverTarget = false;
            shouldStopPropagation = triggerPressEndEvent(e, state.pointerType, false);
            cancelOnPointerExit(e);
          }
          if (shouldStopPropagation) e.stopPropagation();
        };
        pressProps2.onMouseUp = (e) => {
          if (!(0, $23f2114a1b82827e$export$4282f70798064fe0)(e.currentTarget, (0, $23f2114a1b82827e$export$e58f029f0fbfdb29)(e))) return;
          if (!state.ignoreEmulatedMouseEvents && e.button === 0 && !state.isPressed)
            triggerPressUpEvent(e, state.pointerType || "mouse");
        };
        let onMouseUp = (e) => {
          if (e.button !== 0) return;
          if (state.ignoreEmulatedMouseEvents) {
            state.ignoreEmulatedMouseEvents = false;
            return;
          }
          if (state.target && (0, $23f2114a1b82827e$export$4282f70798064fe0)(state.target, (0, $23f2114a1b82827e$export$e58f029f0fbfdb29)(e)) && state.pointerType != null) ;
          else
            cancelEvent(e);
          state.isOverTarget = false;
        };
        pressProps2.onTouchStart = (e) => {
          if (!(0, $23f2114a1b82827e$export$4282f70798064fe0)(e.currentTarget, (0, $23f2114a1b82827e$export$e58f029f0fbfdb29)(e))) return;
          let touch = $d27d541f9569d26d$var$getTouchFromEvent(e.nativeEvent);
          if (!touch) return;
          state.activePointerId = touch.identifier;
          state.ignoreEmulatedMouseEvents = true;
          state.isOverTarget = true;
          state.isPressed = true;
          state.target = e.currentTarget;
          state.pointerType = "touch";
          if (!allowTextSelectionOnPress) (0, $cbf007e418543821$export$16a4697467175487)(state.target);
          let shouldStopPropagation = triggerPressStart($d27d541f9569d26d$var$createTouchEvent(state.target, e), state.pointerType);
          if (shouldStopPropagation) e.stopPropagation();
          addGlobalListener((0, $d447af545b77c9f1$export$f21a1ffae260145a)(e.currentTarget), "scroll", onScroll, true);
        };
        pressProps2.onTouchMove = (e) => {
          if (!(0, $23f2114a1b82827e$export$4282f70798064fe0)(e.currentTarget, (0, $23f2114a1b82827e$export$e58f029f0fbfdb29)(e))) return;
          if (!state.isPressed) {
            e.stopPropagation();
            return;
          }
          let touch = $d27d541f9569d26d$var$getTouchById(e.nativeEvent, state.activePointerId);
          let shouldStopPropagation = true;
          if (touch && $d27d541f9569d26d$var$isOverTarget(touch, e.currentTarget)) {
            if (!state.isOverTarget && state.pointerType != null) {
              state.isOverTarget = true;
              shouldStopPropagation = triggerPressStart($d27d541f9569d26d$var$createTouchEvent(state.target, e), state.pointerType);
            }
          } else if (state.isOverTarget && state.pointerType != null) {
            state.isOverTarget = false;
            shouldStopPropagation = triggerPressEndEvent($d27d541f9569d26d$var$createTouchEvent(state.target, e), state.pointerType, false);
            cancelOnPointerExit($d27d541f9569d26d$var$createTouchEvent(state.target, e));
          }
          if (shouldStopPropagation) e.stopPropagation();
        };
        pressProps2.onTouchEnd = (e) => {
          if (!(0, $23f2114a1b82827e$export$4282f70798064fe0)(e.currentTarget, (0, $23f2114a1b82827e$export$e58f029f0fbfdb29)(e))) return;
          if (!state.isPressed) {
            e.stopPropagation();
            return;
          }
          let touch = $d27d541f9569d26d$var$getTouchById(e.nativeEvent, state.activePointerId);
          let shouldStopPropagation = true;
          if (touch && $d27d541f9569d26d$var$isOverTarget(touch, e.currentTarget) && state.pointerType != null) {
            triggerPressUpEvent($d27d541f9569d26d$var$createTouchEvent(state.target, e), state.pointerType);
            shouldStopPropagation = triggerPressEndEvent($d27d541f9569d26d$var$createTouchEvent(state.target, e), state.pointerType);
            triggerSyntheticClick(e.nativeEvent, state.target);
          } else if (state.isOverTarget && state.pointerType != null)
            shouldStopPropagation = triggerPressEndEvent($d27d541f9569d26d$var$createTouchEvent(state.target, e), state.pointerType, false);
          if (shouldStopPropagation) e.stopPropagation();
          state.isPressed = false;
          state.activePointerId = null;
          state.isOverTarget = false;
          state.ignoreEmulatedMouseEvents = true;
          if (state.target && !allowTextSelectionOnPress) (0, $cbf007e418543821$export$b0d6fa1ab32e3295)(state.target);
          removeAllGlobalListeners();
        };
        pressProps2.onTouchCancel = (e) => {
          if (!(0, $23f2114a1b82827e$export$4282f70798064fe0)(e.currentTarget, (0, $23f2114a1b82827e$export$e58f029f0fbfdb29)(e))) return;
          e.stopPropagation();
          if (state.isPressed)
            cancelEvent($d27d541f9569d26d$var$createTouchEvent(state.target, e));
        };
        let onScroll = (e) => {
          if (state.isPressed && (0, $23f2114a1b82827e$export$4282f70798064fe0)((0, $23f2114a1b82827e$export$e58f029f0fbfdb29)(e), state.target))
            cancelEvent({
              currentTarget: state.target,
              shiftKey: false,
              ctrlKey: false,
              metaKey: false,
              altKey: false
            });
        };
        pressProps2.onDragStart = (e) => {
          if (!(0, $23f2114a1b82827e$export$4282f70798064fe0)(e.currentTarget, (0, $23f2114a1b82827e$export$e58f029f0fbfdb29)(e))) return;
          cancelEvent(e);
        };
      }
      return pressProps2;
    }, [
      addGlobalListener,
      isDisabled,
      preventFocusOnPress,
      removeAllGlobalListeners,
      allowTextSelectionOnPress,
      cancelOnPointerExit,
      triggerPressStart,
      triggerClick,
      triggerSyntheticClick
    ]);
    (0, import_react17.useEffect)(() => {
      if (!domRef || false) return;
      const ownerDocument = (0, $d447af545b77c9f1$export$b204af158042fbac)(domRef.current);
      if (!ownerDocument || !ownerDocument.head || ownerDocument.getElementById($d27d541f9569d26d$var$STYLE_ID)) return;
      const style = ownerDocument.createElement("style");
      style.id = $d27d541f9569d26d$var$STYLE_ID;
      let nonce = (0, $2b2d34ff061957fb$export$2b85b721e524d74b)(ownerDocument);
      if (nonce) style.nonce = nonce;
      style.textContent = `
@layer {
  [${$d27d541f9569d26d$var$PRESSABLE_ATTRIBUTE}] {
    touch-action: pan-x pan-y pinch-zoom;
  }
}
    `.trim();
      ownerDocument.head.prepend(style);
    }, [
      domRef
    ]);
    (0, import_react17.useEffect)(() => {
      let state = ref.current;
      return () => {
        if (!allowTextSelectionOnPress) (0, $cbf007e418543821$export$b0d6fa1ab32e3295)(state.target ?? void 0);
        for (let dispose of state.disposables) dispose();
        state.disposables = [];
      };
    }, [
      allowTextSelectionOnPress
    ]);
    return {
      isPressed: isPressedProp || isPressed,
      pressProps: (0, $bbaa08b3cd72f041$export$9d1611c77c2fe928)(domProps, pressProps, {
        [$d27d541f9569d26d$var$PRESSABLE_ATTRIBUTE]: true
      })
    };
  }
  function $d27d541f9569d26d$var$isHTMLAnchorLink(target) {
    return target.tagName === "A" && target.hasAttribute("href");
  }
  function $d27d541f9569d26d$var$isValidKeyboardEvent(event, currentTarget) {
    const { key, code } = event;
    const element = currentTarget;
    const role = element.getAttribute("role");
    return (key === "Enter" || key === " " || key === "Spacebar" || code === "Space") && !(element instanceof (0, $d447af545b77c9f1$export$f21a1ffae260145a)(element).HTMLInputElement && !$d27d541f9569d26d$var$isValidInputKey(element, key) || element instanceof (0, $d447af545b77c9f1$export$f21a1ffae260145a)(element).HTMLTextAreaElement || element.isContentEditable) && // Links should only trigger with Enter key
    !((role === "link" || !role && $d27d541f9569d26d$var$isHTMLAnchorLink(element)) && key !== "Enter");
  }
  function $d27d541f9569d26d$var$createEvent(target, e) {
    let clientX = e.clientX;
    let clientY = e.clientY;
    return {
      currentTarget: target,
      shiftKey: e.shiftKey,
      ctrlKey: e.ctrlKey,
      metaKey: e.metaKey,
      altKey: e.altKey,
      clientX,
      clientY,
      key: e.key
    };
  }
  function $d27d541f9569d26d$var$shouldPreventDefaultUp(target) {
    if (target instanceof HTMLInputElement) return false;
    if (target instanceof HTMLButtonElement) return target.type !== "submit" && target.type !== "reset";
    if ($d27d541f9569d26d$var$isHTMLAnchorLink(target)) return false;
    return true;
  }
  function $d27d541f9569d26d$var$shouldPreventDefaultKeyboard(target, key) {
    if (target instanceof HTMLInputElement) return !$d27d541f9569d26d$var$isValidInputKey(target, key);
    return $d27d541f9569d26d$var$shouldPreventDefaultUp(target);
  }
  var $d27d541f9569d26d$var$nonTextInputTypes = /* @__PURE__ */ new Set([
    "checkbox",
    "radio",
    "range",
    "color",
    "file",
    "image",
    "button",
    "submit",
    "reset"
  ]);
  function $d27d541f9569d26d$var$isValidInputKey(target, key) {
    return target.type === "checkbox" || target.type === "radio" ? key === " " : $d27d541f9569d26d$var$nonTextInputTypes.has(target.type);
  }

  // node_modules/react-aria/dist/exports/filterDOMProps.mjs
  init_define_import_meta_env();

  // node_modules/react-aria/dist/exports/useFocusRing.mjs
  init_define_import_meta_env();

  // node_modules/react-aria/dist/private/focus/useFocusRing.mjs
  init_define_import_meta_env();

  // node_modules/react-aria/dist/private/interactions/useFocusWithin.mjs
  init_define_import_meta_env();
  var import_react18 = __toESM(require_react_shim(), 1);
  function $2c9edc598a03d523$export$420e68273165f4ec(props) {
    let { isDisabled, onBlurWithin, onFocusWithin, onFocusWithinChange } = props;
    let state = (0, import_react18.useRef)({
      isFocusWithin: false
    });
    let { addGlobalListener, removeAllGlobalListeners } = (0, $48a7d519b337145d$export$4eaf04e54aa8eed6)();
    let onBlur = (0, import_react18.useCallback)((e) => {
      if (!(0, $23f2114a1b82827e$export$4282f70798064fe0)(e.currentTarget, (0, $23f2114a1b82827e$export$e58f029f0fbfdb29)(e))) return;
      if (state.current.isFocusWithin && !(0, $23f2114a1b82827e$export$4282f70798064fe0)(e.currentTarget, e.relatedTarget)) {
        state.current.isFocusWithin = false;
        removeAllGlobalListeners();
        if (onBlurWithin) onBlurWithin(e);
        if (onFocusWithinChange) onFocusWithinChange(false);
      }
    }, [
      onBlurWithin,
      onFocusWithinChange,
      state,
      removeAllGlobalListeners
    ]);
    let onSyntheticFocus = (0, $a92dc41f639950be$export$715c682d09d639cc)(onBlur);
    let onFocus = (0, import_react18.useCallback)((e) => {
      if (!(0, $23f2114a1b82827e$export$4282f70798064fe0)(e.currentTarget, (0, $23f2114a1b82827e$export$e58f029f0fbfdb29)(e))) return;
      let eventTarget = (0, $23f2114a1b82827e$export$e58f029f0fbfdb29)(e);
      const ownerDocument = (0, $d447af545b77c9f1$export$b204af158042fbac)(eventTarget);
      const activeElement = (0, $23f2114a1b82827e$export$cd4e5573fbe2b576)(ownerDocument);
      if (!state.current.isFocusWithin && activeElement === eventTarget) {
        if (onFocusWithin) onFocusWithin(e);
        if (onFocusWithinChange) onFocusWithinChange(true);
        state.current.isFocusWithin = true;
        onSyntheticFocus(e);
        let currentTarget = e.currentTarget;
        addGlobalListener(ownerDocument, "focus", (e2) => {
          let eventTarget2 = (0, $23f2114a1b82827e$export$e58f029f0fbfdb29)(e2);
          if (state.current.isFocusWithin && !(0, $23f2114a1b82827e$export$4282f70798064fe0)(currentTarget, eventTarget2)) {
            let nativeEvent = new ownerDocument.defaultView.FocusEvent("blur", {
              relatedTarget: eventTarget2
            });
            (0, $a92dc41f639950be$export$c2b7abe5d61ec696)(nativeEvent, currentTarget);
            let event = (0, $a92dc41f639950be$export$525bc4921d56d4a)(nativeEvent);
            onBlur(event);
          }
        }, {
          capture: true
        });
      }
    }, [
      onFocusWithin,
      onFocusWithinChange,
      onSyntheticFocus,
      addGlobalListener,
      onBlur
    ]);
    if (isDisabled) return {
      focusWithinProps: {
        // These cannot be null, that would conflict in mergeProps
        onFocus: void 0,
        onBlur: void 0
      }
    };
    return {
      focusWithinProps: {
        onFocus,
        onBlur
      }
    };
  }

  // node_modules/react-aria/dist/private/focus/useFocusRing.mjs
  var import_react19 = __toESM(require_react_shim(), 1);
  function $0c4a58759813079a$export$4e328f61c538687f(props = {}) {
    let { autoFocus = false, isTextInput, within } = props;
    let state = (0, import_react19.useRef)({
      isFocused: false,
      isFocusVisible: autoFocus || (0, $8f5a2122b0992be3$export$b9b3dfddab17db27)()
    });
    let [isFocused, setFocused] = (0, import_react19.useState)(false);
    let [isFocusVisibleState, setFocusVisible] = (0, import_react19.useState)(() => state.current.isFocused && state.current.isFocusVisible);
    let updateState = (0, import_react19.useCallback)(() => setFocusVisible(state.current.isFocused && state.current.isFocusVisible), []);
    let onFocusChange = (0, import_react19.useCallback)((isFocused2) => {
      state.current.isFocused = isFocused2;
      state.current.isFocusVisible = (0, $8f5a2122b0992be3$export$b9b3dfddab17db27)();
      setFocused(isFocused2);
      updateState();
    }, [
      updateState
    ]);
    (0, $8f5a2122b0992be3$export$ec71b4b83ac08ec3)((isFocusVisible) => {
      state.current.isFocusVisible = isFocusVisible;
      updateState();
    }, [
      isTextInput,
      isFocused
    ], {
      enabled: isFocused,
      isTextInput
    });
    let { focusProps } = (0, $1e74c67db218ce67$export$f8168d8dd8fd66e6)({
      isDisabled: within,
      onFocusChange
    });
    let { focusWithinProps } = (0, $2c9edc598a03d523$export$420e68273165f4ec)({
      isDisabled: !within,
      onFocusWithinChange: onFocusChange
    });
    return {
      isFocused,
      isFocusVisible: isFocusVisibleState,
      focusProps: within ? focusWithinProps : focusProps
    };
  }

  // node_modules/react-aria/dist/exports/useHover.mjs
  init_define_import_meta_env();

  // node_modules/react-aria/dist/private/interactions/useHover.mjs
  init_define_import_meta_env();
  var import_react20 = __toESM(require_react_shim(), 1);
  var $e969f22b6713ca4a$var$globalIgnoreEmulatedMouseEvents = false;
  var $e969f22b6713ca4a$var$hoverCount = 0;
  function $e969f22b6713ca4a$var$setGlobalIgnoreEmulatedMouseEvents() {
    $e969f22b6713ca4a$var$globalIgnoreEmulatedMouseEvents = true;
    setTimeout(() => {
      $e969f22b6713ca4a$var$globalIgnoreEmulatedMouseEvents = false;
    }, 500);
  }
  function $e969f22b6713ca4a$var$handleGlobalPointerEvent(e) {
    if (e.pointerType === "touch") $e969f22b6713ca4a$var$setGlobalIgnoreEmulatedMouseEvents();
  }
  function $e969f22b6713ca4a$var$setupGlobalTouchEvents() {
    let ownerDocument = (0, $d447af545b77c9f1$export$b204af158042fbac)(null);
    if (typeof ownerDocument === "undefined") return;
    if ($e969f22b6713ca4a$var$hoverCount === 0) {
      if (typeof PointerEvent !== "undefined") ownerDocument.addEventListener("pointerup", $e969f22b6713ca4a$var$handleGlobalPointerEvent);
      else if (false) ownerDocument.addEventListener("touchend", $e969f22b6713ca4a$var$setGlobalIgnoreEmulatedMouseEvents);
    }
    $e969f22b6713ca4a$var$hoverCount++;
    return () => {
      $e969f22b6713ca4a$var$hoverCount--;
      if ($e969f22b6713ca4a$var$hoverCount > 0) return;
      if (typeof PointerEvent !== "undefined") ownerDocument.removeEventListener("pointerup", $e969f22b6713ca4a$var$handleGlobalPointerEvent);
      else if (false) ownerDocument.removeEventListener("touchend", $e969f22b6713ca4a$var$setGlobalIgnoreEmulatedMouseEvents);
    };
  }
  function $e969f22b6713ca4a$export$ae780daf29e6d456(props) {
    let { onHoverStart, onHoverChange, onHoverEnd, isDisabled } = props;
    let [isHovered, setHovered] = (0, import_react20.useState)(false);
    let state = (0, import_react20.useRef)({
      isHovered: false,
      ignoreEmulatedMouseEvents: false,
      pointerType: "",
      target: null
    }).current;
    (0, import_react20.useEffect)($e969f22b6713ca4a$var$setupGlobalTouchEvents, []);
    let { addGlobalListener, removeAllGlobalListeners } = (0, $48a7d519b337145d$export$4eaf04e54aa8eed6)();
    let { hoverProps, triggerHoverEnd } = (0, import_react20.useMemo)(() => {
      let triggerHoverStart = (event, pointerType) => {
        state.pointerType = pointerType;
        if (isDisabled || pointerType === "touch" || state.isHovered || !(0, $23f2114a1b82827e$export$4282f70798064fe0)(event.currentTarget, (0, $23f2114a1b82827e$export$e58f029f0fbfdb29)(event))) return;
        state.isHovered = true;
        let target = event.currentTarget;
        state.target = target;
        addGlobalListener((0, $d447af545b77c9f1$export$b204af158042fbac)((0, $23f2114a1b82827e$export$e58f029f0fbfdb29)(event)), "pointerover", (e) => {
          if (state.isHovered && state.target && !(0, $23f2114a1b82827e$export$4282f70798064fe0)(state.target, (0, $23f2114a1b82827e$export$e58f029f0fbfdb29)(e))) triggerHoverEnd2(e, e.pointerType);
        }, {
          capture: true
        });
        if (onHoverStart) onHoverStart({
          type: "hoverstart",
          target,
          pointerType
        });
        if (onHoverChange) onHoverChange(true);
        setHovered(true);
      };
      let triggerHoverEnd2 = (event, pointerType) => {
        let target = state.target;
        state.pointerType = "";
        state.target = null;
        if (pointerType === "touch" || !state.isHovered || !target) return;
        state.isHovered = false;
        removeAllGlobalListeners();
        if (onHoverEnd) onHoverEnd({
          type: "hoverend",
          target,
          pointerType
        });
        if (onHoverChange) onHoverChange(false);
        setHovered(false);
      };
      let hoverProps2 = {};
      if (typeof PointerEvent !== "undefined") {
        hoverProps2.onPointerEnter = (e) => {
          if ($e969f22b6713ca4a$var$globalIgnoreEmulatedMouseEvents && e.pointerType === "mouse") return;
          triggerHoverStart(e, e.pointerType);
        };
        hoverProps2.onPointerLeave = (e) => {
          if (!isDisabled && (0, $23f2114a1b82827e$export$4282f70798064fe0)(e.currentTarget, (0, $23f2114a1b82827e$export$e58f029f0fbfdb29)(e))) triggerHoverEnd2(e, e.pointerType);
        };
      } else if (false) {
        hoverProps2.onTouchStart = () => {
          state.ignoreEmulatedMouseEvents = true;
        };
        hoverProps2.onMouseEnter = (e) => {
          if (!state.ignoreEmulatedMouseEvents && !$e969f22b6713ca4a$var$globalIgnoreEmulatedMouseEvents) triggerHoverStart(e, "mouse");
          state.ignoreEmulatedMouseEvents = false;
        };
        hoverProps2.onMouseLeave = (e) => {
          if (!isDisabled && (0, $23f2114a1b82827e$export$4282f70798064fe0)(e.currentTarget, (0, $23f2114a1b82827e$export$e58f029f0fbfdb29)(e))) triggerHoverEnd2(e, "mouse");
        };
      }
      return {
        hoverProps: hoverProps2,
        triggerHoverEnd: triggerHoverEnd2
      };
    }, [
      onHoverStart,
      onHoverChange,
      onHoverEnd,
      isDisabled,
      state,
      addGlobalListener,
      removeAllGlobalListeners
    ]);
    (0, import_react20.useEffect)(() => {
      if (isDisabled) triggerHoverEnd({
        currentTarget: state.target
      }, state.pointerType);
    }, [
      isDisabled
    ]);
    return {
      hoverProps,
      isHovered
    };
  }

  // node_modules/react-aria-components/dist/private/Button.mjs
  init_define_import_meta_env();

  // node_modules/react-aria-components/dist/private/ProgressBar.mjs
  init_define_import_meta_env();

  // node_modules/react-aria/dist/exports/private/collections/Hidden.mjs
  init_define_import_meta_env();

  // node_modules/react-aria-components/dist/private/ProgressBar.mjs
  var import_react21 = __toESM(require_react_shim(), 1);
  var $6c0095e7e99364f2$export$e9f3bf65a26ce129 = /* @__PURE__ */ (0, import_react21.createContext)(null);

  // node_modules/react-aria/dist/exports/private/live-announcer/LiveAnnouncer.mjs
  init_define_import_meta_env();

  // node_modules/react-aria/dist/private/live-announcer/LiveAnnouncer.mjs
  init_define_import_meta_env();
  var $a46cf152bb926da5$var$LIVEREGION_TIMEOUT_DELAY = 7e3;
  var $a46cf152bb926da5$var$liveAnnouncer = null;
  function $a46cf152bb926da5$export$a9b970dcc4ae71a9(message, assertiveness = "assertive", timeout = $a46cf152bb926da5$var$LIVEREGION_TIMEOUT_DELAY) {
    if (!$a46cf152bb926da5$var$liveAnnouncer) {
      $a46cf152bb926da5$var$liveAnnouncer = new $a46cf152bb926da5$var$LiveAnnouncer();
      if (!(typeof IS_REACT_ACT_ENVIRONMENT === "boolean" ? IS_REACT_ACT_ENVIRONMENT : typeof jest !== "undefined")) setTimeout(() => {
        if ($a46cf152bb926da5$var$liveAnnouncer?.isAttached()) $a46cf152bb926da5$var$liveAnnouncer?.announce(message, assertiveness, timeout);
      }, 100);
      else $a46cf152bb926da5$var$liveAnnouncer.announce(message, assertiveness, timeout);
    } else $a46cf152bb926da5$var$liveAnnouncer.announce(message, assertiveness, timeout);
  }
  var $a46cf152bb926da5$var$LiveAnnouncer = class {
    constructor() {
      this.node = null;
      this.assertiveLog = null;
      this.politeLog = null;
      if (typeof document !== "undefined") {
        this.node = document.createElement("div");
        this.node.dataset.liveAnnouncer = "true";
        Object.assign(this.node.style, {
          border: 0,
          clip: "rect(0 0 0 0)",
          clipPath: "inset(50%)",
          height: "1px",
          margin: "-1px",
          overflow: "hidden",
          padding: 0,
          position: "absolute",
          width: "1px",
          whiteSpace: "nowrap"
        });
        this.assertiveLog = this.createLog("assertive");
        this.node.appendChild(this.assertiveLog);
        this.politeLog = this.createLog("polite");
        this.node.appendChild(this.politeLog);
        document.body.prepend(this.node);
      }
    }
    isAttached() {
      return this.node?.isConnected;
    }
    createLog(ariaLive) {
      let node = document.createElement("div");
      node.setAttribute("role", "log");
      node.setAttribute("aria-live", ariaLive);
      node.setAttribute("aria-relevant", "additions");
      return node;
    }
    destroy() {
      if (!this.node) return;
      document.body.removeChild(this.node);
      this.node = null;
    }
    announce(message, assertiveness = "assertive", timeout = $a46cf152bb926da5$var$LIVEREGION_TIMEOUT_DELAY) {
      if (!this.node) return;
      let node = document.createElement("div");
      if (typeof message === "object") {
        node.setAttribute("role", "img");
        node.setAttribute("aria-labelledby", message["aria-labelledby"]);
      } else node.textContent = message;
      if (assertiveness === "assertive") this.assertiveLog?.appendChild(node);
      else this.politeLog?.appendChild(node);
      if (message !== "") setTimeout(() => {
        node.remove();
      }, timeout);
    }
    clear(assertiveness) {
      if (!this.node) return;
      if ((!assertiveness || assertiveness === "assertive") && this.assertiveLog) this.assertiveLog.innerHTML = "";
      if ((!assertiveness || assertiveness === "polite") && this.politeLog) this.politeLog.innerHTML = "";
    }
  };

  // node_modules/react-aria/dist/exports/useButton.mjs
  init_define_import_meta_env();

  // node_modules/react-aria/dist/private/button/useButton.mjs
  init_define_import_meta_env();
  function $ac4318a9c075bb9f$export$ea18c227d4417cc3(props, ref) {
    let { elementType = "button", isDisabled, onPress, onPressStart, onPressEnd, onPressUp, onPressChange, preventFocusOnPress, allowFocusWhenDisabled, onClick, href, target, rel, type = "button" } = props;
    let additionalProps;
    if (elementType === "button") additionalProps = {
      type,
      disabled: isDisabled,
      form: props.form,
      formAction: props.formAction,
      formEncType: props.formEncType,
      formMethod: props.formMethod,
      formNoValidate: props.formNoValidate,
      formTarget: props.formTarget,
      name: props.name,
      value: props.value
    };
    else additionalProps = {
      role: "button",
      href: elementType === "a" && !isDisabled ? href : void 0,
      target: elementType === "a" ? target : void 0,
      type: elementType === "input" ? type : void 0,
      disabled: elementType === "input" ? isDisabled : void 0,
      "aria-disabled": !isDisabled || elementType === "input" ? void 0 : isDisabled,
      rel: elementType === "a" ? rel : void 0
    };
    let { pressProps, isPressed } = (0, $d27d541f9569d26d$export$45712eceda6fad21)({
      onPressStart,
      onPressEnd,
      onPressChange,
      onPress,
      onPressUp,
      onClick,
      isDisabled,
      preventFocusOnPress,
      ref
    });
    let { focusableProps } = (0, $d1116acdf220c2da$export$4c014de7c8940b4c)(props, ref);
    if (allowFocusWhenDisabled) focusableProps.tabIndex = isDisabled ? -1 : focusableProps.tabIndex;
    let buttonProps = (0, $bbaa08b3cd72f041$export$9d1611c77c2fe928)(focusableProps, pressProps, (0, $8e9d2fae0ecb9001$export$457c3d6518dd4c6f)(props, {
      labelable: true
    }));
    return {
      isPressed,
      buttonProps: (0, $bbaa08b3cd72f041$export$9d1611c77c2fe928)(additionalProps, buttonProps, {
        "aria-haspopup": props["aria-haspopup"],
        "aria-expanded": props["aria-expanded"],
        "aria-controls": props["aria-controls"],
        "aria-pressed": props["aria-pressed"],
        "aria-current": props["aria-current"],
        "aria-disabled": props["aria-disabled"]
      })
    };
  }

  // node_modules/react-aria-components/dist/private/Button.mjs
  var import_react22 = __toESM(require_react_shim(), 1);

  // node_modules/react-aria/dist/exports/useId.mjs
  init_define_import_meta_env();

  // node_modules/react-aria-components/dist/private/Button.mjs
  var $7705c033048f6da7$export$24d547caef80ccd1 = /* @__PURE__ */ (0, import_react22.createContext)({});
  var $7705c033048f6da7$export$353f5b6fc5456de1 = /* @__PURE__ */ (0, $d7f64c32b702fe2c$export$86427a43e3e48ebb)(function Button(props, ref) {
    [props, ref] = (0, $7230ffa83bc0c2cf$export$29f1550f4b0d4415)(props, ref, $7705c033048f6da7$export$24d547caef80ccd1);
    let ctx = props;
    let { isPending } = ctx;
    let { buttonProps, isPressed } = (0, $ac4318a9c075bb9f$export$ea18c227d4417cc3)(props, ref);
    buttonProps = $7705c033048f6da7$var$useDisableInteractions(buttonProps, isPending);
    let { focusProps, isFocused, isFocusVisible } = (0, $0c4a58759813079a$export$4e328f61c538687f)(props);
    let { hoverProps, isHovered } = (0, $e969f22b6713ca4a$export$ae780daf29e6d456)({
      ...props,
      isDisabled: props.isDisabled || isPending
    });
    let renderValues = {
      isHovered,
      isPressed: (ctx.isPressed || isPressed) && !isPending,
      isFocused,
      isFocusVisible,
      isDisabled: props.isDisabled || false,
      isPending: isPending ?? false
    };
    let renderProps = (0, $7230ffa83bc0c2cf$export$4d86445c2cf5e3)({
      ...props,
      values: renderValues,
      defaultClassName: "react-aria-Button"
    });
    let buttonId = (0, $390e54f620492c70$export$f680877a34711e37)(buttonProps.id);
    let progressId = (0, $390e54f620492c70$export$f680877a34711e37)();
    let ariaLabelledby = buttonProps["aria-labelledby"];
    if (isPending) {
      if (ariaLabelledby) ariaLabelledby = `${ariaLabelledby} ${progressId}`;
      else if (buttonProps["aria-label"]) ariaLabelledby = `${buttonId} ${progressId}`;
    }
    let wasPending = (0, import_react22.useRef)(isPending);
    (0, import_react22.useEffect)(() => {
      let message = {
        "aria-labelledby": ariaLabelledby || buttonId
      };
      if (!wasPending.current && isFocused && isPending) (0, $a46cf152bb926da5$export$a9b970dcc4ae71a9)(message, "assertive");
      else if (wasPending.current && isFocused && !isPending) (0, $a46cf152bb926da5$export$a9b970dcc4ae71a9)(message, "assertive");
      wasPending.current = isPending;
    }, [
      isPending,
      isFocused,
      ariaLabelledby,
      buttonId
    ]);
    let DOMProps = (0, $8e9d2fae0ecb9001$export$457c3d6518dd4c6f)(props, {
      global: true
    });
    delete DOMProps.onClick;
    return /* @__PURE__ */ (0, import_react22.default).createElement((0, $7230ffa83bc0c2cf$export$df3a06d6289f983e).button, {
      ...(0, $bbaa08b3cd72f041$export$9d1611c77c2fe928)(DOMProps, renderProps, buttonProps, focusProps, hoverProps),
      // When the button is in a pending state, we want to stop implicit form submission (ie. when the user presses enter on a text input).
      // We do this by changing the button's type to button.
      type: buttonProps.type === "submit" && isPending ? "button" : buttonProps.type,
      id: buttonId,
      ref,
      "aria-labelledby": ariaLabelledby,
      slot: props.slot || void 0,
      "aria-disabled": isPending ? "true" : buttonProps["aria-disabled"],
      "data-disabled": props.isDisabled || void 0,
      "data-pressed": renderValues.isPressed || void 0,
      "data-hovered": isHovered || void 0,
      "data-focused": isFocused || void 0,
      "data-pending": isPending || void 0,
      "data-focus-visible": isFocusVisible || void 0
    }, /* @__PURE__ */ (0, import_react22.default).createElement((0, $6c0095e7e99364f2$export$e9f3bf65a26ce129).Provider, {
      value: {
        id: progressId
      }
    }, renderProps.children));
  });
  var $7705c033048f6da7$var$PRESERVED_EVENT_PATTERN = /Focus|Blur|Hover|Pointer(Enter|Leave|Over|Out)|Mouse(Enter|Leave|Over|Out)/;
  function $7705c033048f6da7$var$useDisableInteractions(props, isPending) {
    if (isPending) {
      for (const key in props) if (key.startsWith("on") && !$7705c033048f6da7$var$PRESERVED_EVENT_PATTERN.test(key)) props[key] = void 0;
      props.href = void 0;
      props.target = void 0;
    }
    return props;
  }

  // node_modules/react-aria-components/dist/private/Heading.mjs
  init_define_import_meta_env();
  var import_react23 = __toESM(require_react_shim(), 1);
  var $2ec61d1d4f780267$export$d688439359537581 = /* @__PURE__ */ (0, import_react23.createContext)({});
  var $2ec61d1d4f780267$export$a8a3e93435678ff9 = /* @__PURE__ */ (0, import_react23.forwardRef)(function Heading(props, ref) {
    [props, ref] = (0, $7230ffa83bc0c2cf$export$29f1550f4b0d4415)(props, ref, $2ec61d1d4f780267$export$d688439359537581);
    let { children, level = 3, className, ...domProps } = props;
    let Element2 = (0, $7230ffa83bc0c2cf$export$df3a06d6289f983e)[`h${level}`];
    return /* @__PURE__ */ (0, import_react23.default).createElement(Element2, {
      ...domProps,
      ref,
      className: className ?? "react-aria-Heading"
    }, children);
  });

  // node_modules/react-aria-components/dist/private/Disclosure.mjs
  init_define_import_meta_env();

  // node_modules/react-aria/dist/exports/useDisclosure.mjs
  init_define_import_meta_env();

  // node_modules/react-aria/dist/private/disclosure/useDisclosure.mjs
  init_define_import_meta_env();
  var import_react_dom2 = __toESM(require_react_dom_shim(), 1);
  var import_react24 = __toESM(require_react_shim(), 1);
  function $89a3495b7d82e671$export$6e3e27031a30522f(props, state, ref) {
    let { isDisabled } = props;
    let triggerId = (0, $390e54f620492c70$export$f680877a34711e37)();
    let panelId = (0, $390e54f620492c70$export$f680877a34711e37)();
    let isSSR = (0, $c7eafbbe1ea5834e$export$535bd6ca7f90a273)();
    let raf = (0, import_react24.useRef)(null);
    let handleBeforeMatch = (0, import_react24.useCallback)(() => {
      raf.current = requestAnimationFrame(() => {
        if (ref.current) ref.current.setAttribute("hidden", "until-found");
      });
      (0, import_react_dom2.flushSync)(() => {
        state.toggle();
      });
    }, [
      ref,
      state
    ]);
    (0, $600b3cf69ae46262$export$90fc3a17d93f704c)(ref, "beforematch", handleBeforeMatch);
    let isExpandedRef = (0, import_react24.useRef)(null);
    (0, $c4867b2f328c2698$export$e5c5a5f917a5871c)(() => {
      if (raf.current) cancelAnimationFrame(raf.current);
      if (ref.current && !isSSR) {
        let panel = ref.current;
        if (isExpandedRef.current == null || typeof panel.getAnimations !== "function") {
          if (state.isExpanded) {
            panel.removeAttribute("hidden");
            panel.style.setProperty("--disclosure-panel-width", "auto");
            panel.style.setProperty("--disclosure-panel-height", "auto");
          } else {
            panel.setAttribute("hidden", "until-found");
            panel.style.setProperty("--disclosure-panel-width", "0px");
            panel.style.setProperty("--disclosure-panel-height", "0px");
          }
        } else if (state.isExpanded !== isExpandedRef.current) {
          if (state.isExpanded) {
            panel.removeAttribute("hidden");
            panel.style.setProperty("--disclosure-panel-width", panel.scrollWidth + "px");
            panel.style.setProperty("--disclosure-panel-height", panel.scrollHeight + "px");
            Promise.all(panel.getAnimations().map((a) => a.finished)).then(() => {
              panel.style.setProperty("--disclosure-panel-width", "auto");
              panel.style.setProperty("--disclosure-panel-height", "auto");
            }).catch(() => {
            });
          } else {
            panel.style.setProperty("--disclosure-panel-width", panel.scrollWidth + "px");
            panel.style.setProperty("--disclosure-panel-height", panel.scrollHeight + "px");
            window.getComputedStyle(panel).height;
            panel.style.setProperty("--disclosure-panel-width", "0px");
            panel.style.setProperty("--disclosure-panel-height", "0px");
            Promise.all(panel.getAnimations().map((a) => a.finished)).then(() => panel.setAttribute("hidden", "until-found")).catch(() => {
            });
          }
        }
        isExpandedRef.current = state.isExpanded;
      }
    }, [
      isDisabled,
      ref,
      state.isExpanded,
      isSSR
    ]);
    (0, import_react24.useEffect)(() => {
      return () => {
        if (raf.current) cancelAnimationFrame(raf.current);
      };
    }, []);
    return {
      buttonProps: {
        id: triggerId,
        "aria-expanded": state.isExpanded,
        "aria-controls": panelId,
        onPress: (e) => {
          if (!isDisabled && e.pointerType !== "keyboard") state.toggle();
        },
        isDisabled,
        onPressStart(e) {
          if (e.pointerType === "keyboard" && !isDisabled) state.toggle();
        }
      },
      panelProps: {
        id: panelId,
        // This can be overridden at the panel element level.
        role: "group",
        "aria-labelledby": triggerId,
        "aria-hidden": !state.isExpanded,
        hidden: isSSR ? !state.isExpanded : void 0
      }
    };
  }

  // node_modules/react-stately/dist/exports/useDisclosureGroupState.mjs
  init_define_import_meta_env();

  // node_modules/react-stately/dist/private/disclosure/useDisclosureGroupState.mjs
  init_define_import_meta_env();
  var import_react25 = __toESM(require_react_shim(), 1);
  function $29a18fa139197b5c$export$f36461af0ef4707d(props) {
    let { allowsMultipleExpanded = false, isDisabled = false } = props;
    let [expandedKeys, setExpandedKeys] = (0, $3e6197669829fe11$export$40bfa8c7b0832715)((0, import_react25.useMemo)(() => props.expandedKeys ? new Set(props.expandedKeys) : void 0, [
      props.expandedKeys
    ]), (0, import_react25.useMemo)(() => props.defaultExpandedKeys ? new Set(props.defaultExpandedKeys) : /* @__PURE__ */ new Set(), [
      props.defaultExpandedKeys
    ]), props.onExpandedChange);
    (0, import_react25.useEffect)(() => {
      if (!allowsMultipleExpanded && expandedKeys.size > 1) {
        let firstKey = expandedKeys.values().next().value;
        if (firstKey != null) setExpandedKeys(/* @__PURE__ */ new Set([
          firstKey
        ]));
      }
    });
    return {
      allowsMultipleExpanded,
      isDisabled,
      expandedKeys,
      setExpandedKeys,
      toggleKey(key) {
        let keys;
        if (allowsMultipleExpanded) {
          keys = new Set(expandedKeys);
          if (keys.has(key)) keys.delete(key);
          else keys.add(key);
        } else keys = new Set(expandedKeys.has(key) ? [] : [
          key
        ]);
        setExpandedKeys(keys);
      }
    };
  }

  // node_modules/react-stately/dist/exports/useDisclosureState.mjs
  init_define_import_meta_env();

  // node_modules/react-stately/dist/private/disclosure/useDisclosureState.mjs
  init_define_import_meta_env();
  var import_react26 = __toESM(require_react_shim(), 1);
  function $086b1fd51041276f$export$3fcbf6e4407997e0(props) {
    let [isExpanded, setExpanded] = (0, $3e6197669829fe11$export$40bfa8c7b0832715)(props.isExpanded, props.defaultExpanded || false, props.onExpandedChange);
    const expand = (0, import_react26.useCallback)(() => {
      setExpanded(true);
    }, [
      setExpanded
    ]);
    const collapse = (0, import_react26.useCallback)(() => {
      setExpanded(false);
    }, [
      setExpanded
    ]);
    const toggle = (0, import_react26.useCallback)(() => {
      setExpanded(!isExpanded);
    }, [
      setExpanded,
      isExpanded
    ]);
    return {
      isExpanded,
      setExpanded,
      expand,
      collapse,
      toggle
    };
  }

  // node_modules/react-aria-components/dist/private/Disclosure.mjs
  var import_react27 = __toESM(require_react_shim(), 1);
  var $a3e16eab0ea4036c$export$1d40e3e0cc4d5de = /* @__PURE__ */ (0, import_react27.createContext)(null);
  var $a3e16eab0ea4036c$export$944aceb4f8c89f10 = /* @__PURE__ */ (0, import_react27.forwardRef)(function DisclosureGroup(props, ref) {
    let state = (0, $29a18fa139197b5c$export$f36461af0ef4707d)(props);
    let renderProps = (0, $7230ffa83bc0c2cf$export$4d86445c2cf5e3)({
      ...props,
      defaultClassName: "react-aria-DisclosureGroup",
      values: {
        isDisabled: state.isDisabled,
        state
      }
    });
    let domProps = (0, $8e9d2fae0ecb9001$export$457c3d6518dd4c6f)(props, {
      global: true
    });
    return /* @__PURE__ */ (0, import_react27.default).createElement((0, $7230ffa83bc0c2cf$export$df3a06d6289f983e).div, {
      ...domProps,
      ...renderProps,
      ref,
      "data-disabled": props.isDisabled || void 0
    }, /* @__PURE__ */ (0, import_react27.default).createElement($a3e16eab0ea4036c$export$1d40e3e0cc4d5de.Provider, {
      value: state
    }, renderProps.children));
  });
  var $a3e16eab0ea4036c$export$d665dd135a51b28a = /* @__PURE__ */ (0, import_react27.createContext)(null);
  var $a3e16eab0ea4036c$export$dab3ea4a6ef094da = /* @__PURE__ */ (0, import_react27.createContext)(null);
  var $a3e16eab0ea4036c$var$InternalDisclosureContext = /* @__PURE__ */ (0, import_react27.createContext)(null);
  var $a3e16eab0ea4036c$export$74a362b31437ec83 = /* @__PURE__ */ (0, import_react27.forwardRef)(function Disclosure(props, ref) {
    [props, ref] = (0, $7230ffa83bc0c2cf$export$29f1550f4b0d4415)(props, ref, $a3e16eab0ea4036c$export$d665dd135a51b28a);
    let groupState = (0, import_react27.useContext)($a3e16eab0ea4036c$export$1d40e3e0cc4d5de);
    let { id, ...otherProps } = props;
    let defaultId = (0, $390e54f620492c70$export$f680877a34711e37)();
    id ||= defaultId;
    let isExpanded = groupState ? groupState.expandedKeys.has(id) : props.isExpanded;
    let state = (0, $086b1fd51041276f$export$3fcbf6e4407997e0)({
      ...props,
      isExpanded,
      onExpandedChange(isExpanded2) {
        if (groupState) groupState.toggleKey(id);
        props.onExpandedChange?.(isExpanded2);
      }
    });
    let panelRef = (0, import_react27.default).useRef(null);
    let isDisabled = props.isDisabled || groupState?.isDisabled || false;
    let { buttonProps, panelProps } = (0, $89a3495b7d82e671$export$6e3e27031a30522f)({
      ...props,
      isExpanded,
      isDisabled
    }, state, panelRef);
    let { isFocusVisible: isFocusVisibleWithin, focusProps: focusWithinProps } = (0, $0c4a58759813079a$export$4e328f61c538687f)({
      within: true
    });
    let renderProps = (0, $7230ffa83bc0c2cf$export$4d86445c2cf5e3)({
      ...props,
      id: void 0,
      defaultClassName: "react-aria-Disclosure",
      values: {
        isExpanded: state.isExpanded,
        isDisabled,
        isFocusVisibleWithin,
        state
      }
    });
    let domProps = (0, $8e9d2fae0ecb9001$export$457c3d6518dd4c6f)(otherProps, {
      global: true
    });
    return /* @__PURE__ */ (0, import_react27.default).createElement((0, $7230ffa83bc0c2cf$export$2881499e37b75b9a), {
      values: [
        [
          (0, $7705c033048f6da7$export$24d547caef80ccd1),
          {
            slots: {
              [(0, $7230ffa83bc0c2cf$export$c62b8e45d58ddad9)]: {},
              trigger: buttonProps
            }
          }
        ],
        [
          $a3e16eab0ea4036c$var$InternalDisclosureContext,
          {
            panelProps,
            panelRef
          }
        ],
        [
          $a3e16eab0ea4036c$export$dab3ea4a6ef094da,
          state
        ]
      ]
    }, /* @__PURE__ */ (0, import_react27.default).createElement((0, $7230ffa83bc0c2cf$export$df3a06d6289f983e).div, {
      ...(0, $bbaa08b3cd72f041$export$9d1611c77c2fe928)(domProps, renderProps, focusWithinProps),
      ref,
      "data-expanded": state.isExpanded || void 0,
      "data-disabled": isDisabled || void 0,
      "data-focus-visible-within": isFocusVisibleWithin || void 0
    }, renderProps.children));
  });
  var $a3e16eab0ea4036c$export$feabaa331e1d464c = /* @__PURE__ */ (0, import_react27.forwardRef)(function DisclosurePanel(props, ref) {
    let { role = "group" } = props;
    let { panelProps, panelRef } = (0, import_react27.useContext)($a3e16eab0ea4036c$var$InternalDisclosureContext);
    let { isFocusVisible: isFocusVisibleWithin, focusProps: focusWithinProps } = (0, $0c4a58759813079a$export$4e328f61c538687f)({
      within: true
    });
    let renderProps = (0, $7230ffa83bc0c2cf$export$4d86445c2cf5e3)({
      ...props,
      defaultClassName: "react-aria-DisclosurePanel",
      values: {
        isFocusVisibleWithin
      }
    });
    let DOMProps = (0, $8e9d2fae0ecb9001$export$457c3d6518dd4c6f)(props, {
      global: true,
      labelable: true
    });
    return /* @__PURE__ */ (0, import_react27.default).createElement((0, $7230ffa83bc0c2cf$export$df3a06d6289f983e).div, {
      ...(0, $bbaa08b3cd72f041$export$9d1611c77c2fe928)(DOMProps, renderProps, panelProps, focusWithinProps),
      ref: (0, $4064df0d6f9620e1$export$c9058316764c140e)(ref, panelRef),
      role,
      "data-focus-visible-within": isFocusVisibleWithin || void 0
    }, /* @__PURE__ */ (0, import_react27.default).createElement((0, $7230ffa83bc0c2cf$export$2881499e37b75b9a), {
      values: [
        [
          (0, $7705c033048f6da7$export$24d547caef80ccd1),
          null
        ]
      ]
    }, props.children));
  });

  // node_modules/client-only/index.js
  init_define_import_meta_env();

  // ds-shim:ds:MCard
  var ds_MCard_exports = {};
  __export(ds_MCard_exports, {
    default: () => ds_MCard_default
  });
  init_define_import_meta_env();
  __reExport(ds_MCard_exports, __toESM(require_ds_raw()));
  var g5 = window.WsUikit;
  var ds_MCard_default = g5["MCard"] !== void 0 ? g5["MCard"] : g5;

  // src/molecules/MAccordion/MAccordion.module.css
  var MAccordion_default = {
    container: "MAccordion_container",
    group: "MAccordion_group",
    item: "MAccordion_item",
    itemHeading: "MAccordion_itemHeading",
    itemHeader: "MAccordion_itemHeader",
    headerContent: "MAccordion_headerContent",
    title: "MAccordion_title",
    icon: "MAccordion_icon",
    itemPanel: "MAccordion_itemPanel",
    itemPanelContent: "MAccordion_itemPanelContent"
  };

  // src/molecules/MAccordion/MAccordion.tsx
  var import_jsx_runtime3 = __toESM(require_react_shim());
  var getInitialExpandedKeys = (items, allowsMultipleExpanded) => {
    const expandedItems = items.filter((item) => item.collapsed === false).map((item) => item.key);
    if (allowsMultipleExpanded) {
      return expandedItems;
    }
    return expandedItems.slice(0, 1);
  };
  var MAccordion = ({
    items,
    iconOpen: iconOpen2,
    iconClosed: iconClosed2,
    allowsMultipleExpanded = false,
    defaultExpandedKeys,
    expandedKeys,
    onExpandedChange,
    isDisabled,
    headingLevel = 3,
    className
  }) => {
    const initialExpandedKeys = (0, import_react28.useMemo)(
      () => getInitialExpandedKeys(items, allowsMultipleExpanded),
      [allowsMultipleExpanded, items]
    );
    const openIcon = iconOpen2 ?? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(MIconCaretDown, { mode: "regular", width: 20 });
    const closedIcon = iconClosed2 ?? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(MIconCaretRight, { mode: "regular", width: 20 });
    const resolvedDefaultExpandedKeys = expandedKeys === void 0 ? defaultExpandedKeys ?? initialExpandedKeys : void 0;
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(ds_MCard_default, { noPadding: true, className: clsx_default(MAccordion_default.container, className), children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      $a3e16eab0ea4036c$export$944aceb4f8c89f10,
      {
        allowsMultipleExpanded,
        defaultExpandedKeys: resolvedDefaultExpandedKeys,
        expandedKeys,
        onExpandedChange,
        isDisabled,
        className: MAccordion_default.group,
        children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          $a3e16eab0ea4036c$export$74a362b31437ec83,
          {
            id: item.key,
            isDisabled: item.disabled,
            className: MAccordion_default.item,
            children: ({ isExpanded }) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)($2ec61d1d4f780267$export$a8a3e93435678ff9, { level: headingLevel, className: MAccordion_default.itemHeading, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)($7705c033048f6da7$export$353f5b6fc5456de1, { slot: "trigger", className: MAccordion_default.itemHeader, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
                ds_MFlex_default,
                {
                  align: "center",
                  justify: "space-between",
                  gap: "m",
                  wrap: "nowrap",
                  className: MAccordion_default.headerContent,
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: MAccordion_default.title, children: item.title }),
                    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: MAccordion_default.icon, "aria-hidden": "true", children: isExpanded ? openIcon : closedIcon })
                  ]
                }
              ) }) }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                $a3e16eab0ea4036c$export$feabaa331e1d464c,
                {
                  className: MAccordion_default.itemPanel,
                  role: "region",
                  inert: !isExpanded,
                  children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: MAccordion_default.itemPanelContent, children: item.children })
                }
              )
            ] })
          },
          item.key
        ))
      }
    ) });
  };
  var MAccordion_default2 = MAccordion;

  // src/molecules/MAccordion/MAccordion.stories.tsx
  var import_jsx_runtime4 = __toESM(require_react_shim());
  var meta = {
    title: "Molecules/Data Display/Accordion",
    component: MAccordion_default2
  };
  var MAccordion_stories_default = meta;
  var iconClosed = /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(MIconCaretRight, { mode: "regular", width: 20 });
  var iconOpen = /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(MIconCaretDown, { mode: "regular", width: 20 });
  var LongTextContent = () => /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(ds_MFlex_default, { direction: "column", align: "stretch", gap: "m", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(ds_MText_default, { as: "p", mode: "secondary", children: "The deployment workflow runs through a longer review cycle when release candidates include schema changes, billing updates, or any migration that affects customer-visible data. Each step should remain readable when the content wraps across several lines, and the animated panel should preserve the rhythm of the surrounding accordion items." }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(ds_MText_default, { as: "p", mode: "secondary", children: "When the panel opens, users should be able to scan the copy without the header jumping or the content clipping awkwardly. When it closes, the transition should feel calm and predictable, especially when adjacent items are also expanded in multiple-open mode." })
  ] });
  var ComplexContent = () => /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(ds_MFlex_default, { direction: "column", align: "stretch", gap: "l", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(ds_MFlex_default, { direction: "column", align: "stretch", gap: "xs", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(ds_MText_default, { as: "div", mode: "primary", children: "Release checklist" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(ds_MCaption_default, { children: "Use this to validate nested text, actions, and multi-line rows inside an animated panel." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(ds_MFlex_default, { as: "ul", direction: "column", align: "stretch", gap: "s", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(ds_MText_default, { mode: "secondary", children: "Confirm keyboard focus remains visible." }) }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(ds_MText_default, { mode: "secondary", children: "Verify collapsed content is not interactive." }) }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(ds_MText_default, { mode: "secondary", children: "Check that long labels wrap without pushing the caret out of place." }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(ds_MFlex_default, { gap: "s", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(ds_MButton_default, { size: "s", mode: "primary", children: "Approve" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(ds_MButton_default, { size: "s", mode: "outlined", children: "Review later" })
    ] })
  ] });
  var Basic = {
    args: {
      items: [
        {
          key: 1,
          title: "item 1",
          children: "accordion item 1"
        },
        {
          key: 2,
          title: "title 2",
          children: "accordion item 2"
        },
        {
          key: 3,
          title: "title 3",
          children: "accordion item 3"
        },
        {
          key: 4,
          title: "title 4",
          children: "accordion item 4"
        },
        {
          key: 5,
          title: "title 5",
          children: "accordion item 5"
        }
      ],
      iconClosed,
      iconOpen
    },
    argTypes: {
      iconClosed: { type: "string" },
      iconOpen: { type: "string" }
    }
  };
  var DefaultIcons = {
    args: {
      items: [
        {
          key: 1,
          title: "Account details",
          children: "Name, email, and profile settings."
        },
        {
          key: 2,
          title: "Notifications",
          children: "Email and product update preferences."
        },
        {
          key: 3,
          title: "Billing",
          children: "Invoices, payment methods, and tax details."
        }
      ]
    }
  };
  var InitiallyExpanded = {
    args: {
      items: [
        {
          key: 1,
          title: "Collapsed by default",
          children: "This item starts closed."
        },
        {
          key: 2,
          title: "Open by default",
          children: "This item starts open because collapsed is false.",
          collapsed: false
        }
      ]
    }
  };
  var MultipleExpanded = {
    args: {
      allowsMultipleExpanded: true,
      items: [
        {
          key: 1,
          title: "First section",
          children: "Multiple sections can stay open.",
          collapsed: false
        },
        {
          key: 2,
          title: "Second section",
          children: "This one can stay open at the same time.",
          collapsed: false
        },
        {
          key: 3,
          title: "Third section",
          children: "This one starts closed."
        }
      ]
    }
  };
  var ComplexContentStory = {
    name: "Complex content",
    args: {
      items: [
        {
          key: 1,
          title: "Release readiness with actions",
          children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(ComplexContent, {}),
          collapsed: false
        },
        {
          key: 2,
          title: "Long operational notes",
          children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(LongTextContent, {})
        },
        {
          key: 3,
          title: "Very long accordion title that should wrap cleanly without overlapping the caret icon",
          children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(ds_MText_default, { as: "p", mode: "secondary", children: "This item checks that the trigger layout remains stable when the title is much longer than usual. The icon should stay aligned at the end while the text takes the available horizontal space." })
        }
      ]
    }
  };

  // .design-sync/.cache/previews/Accordion.tsx
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
    compose(MAccordion_stories_exports, "Basic")
  );
  var DefaultIcons2 = (
    /* Default Icons */
    compose(MAccordion_stories_exports, "DefaultIcons")
  );
  var InitiallyExpanded2 = (
    /* Initially Expanded */
    compose(MAccordion_stories_exports, "InitiallyExpanded")
  );
  var MultipleExpanded2 = (
    /* Multiple Expanded */
    compose(MAccordion_stories_exports, "MultipleExpanded")
  );
  var ComplexContentStory2 = (
    /* Complex content */
    compose(MAccordion_stories_exports, "ComplexContentStory")
  );
  return __toCommonJS(Accordion_exports);
})();
