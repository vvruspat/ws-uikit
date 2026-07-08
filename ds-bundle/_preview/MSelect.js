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
      function jsx4(t, p, k) {
        var c = p && p.children;
        return c === void 0 ? R.createElement(t, np(p, k)) : R.createElement(t, np(p, k), c);
      }
      function jsxs2(t, p, k) {
        return R.createElement.apply(R, [t, np(p, k)].concat(p.children));
      }
      module.exports = R;
      module.exports.jsx = jsx4;
      module.exports.jsxs = jsxs2;
      module.exports.jsxDEV = function(t, p, k, s) {
        return (s ? jsxs2 : jsx4)(t, p, k);
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

  // svg-react-component:/Users/aleksandrkolesov/Develop/ws-uikit/src/icons/Arrows/ArrowFatLinesRight.svg
  var require_ArrowFatLinesRight = __commonJS({
    "svg-react-component:/Users/aleksandrkolesov/Develop/ws-uikit/src/icons/Arrows/ArrowFatLinesRight.svg"(exports, module) {
      init_define_import_meta_env();
      var R = typeof window !== "undefined" && window.React || require_react_shim();
      var _i = '\r\n<g clip-path="url(#clip0_17_6590)">\r\n<path d="M29.7075 15.2926L17.7075 3.29256C17.5676 3.15254 17.3894 3.05718 17.1953 3.01853C17.0012 2.97988 16.8 2.99968 16.6172 3.07543C16.4344 3.15119 16.2782 3.27948 16.1683 3.44407C16.0584 3.60867 15.9998 3.80216 16 4.00006V9.00006H13C12.7348 9.00006 12.4804 9.10541 12.2929 9.29295C12.1054 9.48048 12 9.73484 12 10.0001V22.0001C12 22.2653 12.1054 22.5196 12.2929 22.7072C12.4804 22.8947 12.7348 23.0001 13 23.0001H16V28.0001C15.9998 28.198 16.0584 28.3914 16.1683 28.556C16.2782 28.7206 16.4344 28.8489 16.6172 28.9247C16.8 29.0004 17.0012 29.0202 17.1953 28.9816C17.3894 28.9429 17.5676 28.8476 17.7075 28.7076L29.7075 16.7076C29.8005 16.6147 29.8742 16.5044 29.9246 16.383C29.9749 16.2616 30.0008 16.1315 30.0008 16.0001C30.0008 15.8686 29.9749 15.7385 29.9246 15.6171C29.8742 15.4957 29.8005 15.3854 29.7075 15.2926ZM18 25.5863V22.0001C18 21.7348 17.8946 21.4805 17.7071 21.2929C17.5196 21.1054 17.2652 21.0001 17 21.0001H14V11.0001H17C17.2652 11.0001 17.5196 10.8947 17.7071 10.7072C17.8946 10.5196 18 10.2653 18 10.0001V6.41381L27.5863 16.0001L18 25.5863ZM6 10.0001V22.0001C6 22.2653 5.89464 22.5196 5.70711 22.7072C5.51957 22.8947 5.26522 23.0001 5 23.0001C4.73478 23.0001 4.48043 22.8947 4.29289 22.7072C4.10536 22.5196 4 22.2653 4 22.0001V10.0001C4 9.73484 4.10536 9.48048 4.29289 9.29295C4.48043 9.10541 4.73478 9.00006 5 9.00006C5.26522 9.00006 5.51957 9.10541 5.70711 9.29295C5.89464 9.48048 6 9.73484 6 10.0001ZM10 10.0001V22.0001C10 22.2653 9.89464 22.5196 9.70711 22.7072C9.51957 22.8947 9.26522 23.0001 9 23.0001C8.73478 23.0001 8.48043 22.8947 8.29289 22.7072C8.10536 22.5196 8 22.2653 8 22.0001V10.0001C8 9.73484 8.10536 9.48048 8.29289 9.29295C8.48043 9.10541 8.73478 9.00006 9 9.00006C9.26522 9.00006 9.51957 9.10541 9.70711 9.29295C9.89464 9.48048 10 9.73484 10 10.0001Z" fill="currentColor"/>\r\n<path d="M77.3538 15.6462L65.3538 3.64616C65.2838 3.57615 65.1947 3.52847 65.0977 3.50914C65.0006 3.48982 64.9 3.49972 64.8086 3.53759C64.7172 3.57547 64.6391 3.63962 64.5841 3.72191C64.5292 3.80421 64.4999 3.90096 64.5 3.99991V9.49991H61C60.8674 9.49991 60.7402 9.55258 60.6464 9.64635C60.5527 9.74012 60.5 9.8673 60.5 9.99991V21.9999C60.5 22.1325 60.5527 22.2597 60.6464 22.3535C60.7402 22.4472 60.8674 22.4999 61 22.4999H64.5V27.9999C64.4999 28.0989 64.5292 28.1957 64.5841 28.278C64.6391 28.3604 64.7173 28.4245 64.8088 28.4624C64.9002 28.5002 65.0007 28.5101 65.0978 28.4907C65.1948 28.4714 65.2839 28.4237 65.3538 28.3537L77.3538 16.3537C77.4002 16.3072 77.4371 16.2521 77.4623 16.1914C77.4874 16.1307 77.5004 16.0656 77.5004 15.9999C77.5004 15.9342 77.4874 15.8691 77.4623 15.8084C77.4371 15.7477 77.4002 15.6926 77.3538 15.6462ZM65.5 26.7924V21.9999C65.5 21.8673 65.4473 21.7401 65.3536 21.6464C65.2598 21.5526 65.1326 21.4999 65 21.4999H61.5V10.4999H65C65.1326 10.4999 65.2598 10.4472 65.3536 10.3535C65.4473 10.2597 65.5 10.1325 65.5 9.99991V5.20741L76.2925 15.9999L65.5 26.7924ZM53.5 9.99991V21.9999C53.5 22.1325 53.4473 22.2597 53.3536 22.3535C53.2598 22.4472 53.1326 22.4999 53 22.4999C52.8674 22.4999 52.7402 22.4472 52.6464 22.3535C52.5527 22.2597 52.5 22.1325 52.5 21.9999V9.99991C52.5 9.8673 52.5527 9.74012 52.6464 9.64635C52.7402 9.55258 52.8674 9.49991 53 9.49991C53.1326 9.49991 53.2598 9.55258 53.3536 9.64635C53.4473 9.74012 53.5 9.8673 53.5 9.99991ZM57.5 9.99991V21.9999C57.5 22.1325 57.4473 22.2597 57.3536 22.3535C57.2598 22.4472 57.1326 22.4999 57 22.4999C56.8674 22.4999 56.7402 22.4472 56.6464 22.3535C56.5527 22.2597 56.5 22.1325 56.5 21.9999V9.99991C56.5 9.8673 56.5527 9.74012 56.6464 9.64635C56.7402 9.55258 56.8674 9.49991 57 9.49991C57.1326 9.49991 57.2598 9.55258 57.3536 9.64635C57.4473 9.74012 57.5 9.8673 57.5 9.99991Z" fill="currentColor"/>\r\n<path d="M125.53 15.4701L113.53 3.47007C113.425 3.36532 113.292 3.29399 113.146 3.26511C113.001 3.23622 112.85 3.25107 112.713 3.30779C112.576 3.3645 112.459 3.46053 112.377 3.58374C112.294 3.70696 112.25 3.85183 112.25 4.00007V9.25007H109C108.801 9.25007 108.61 9.32909 108.47 9.46974C108.329 9.6104 108.25 9.80116 108.25 10.0001V22.0001C108.25 22.199 108.329 22.3898 108.47 22.5304C108.61 22.6711 108.801 22.7501 109 22.7501H112.25V28.0001C112.25 28.1483 112.294 28.2932 112.377 28.4164C112.459 28.5396 112.576 28.6356 112.713 28.6924C112.85 28.7491 113.001 28.7639 113.146 28.735C113.292 28.7062 113.425 28.6348 113.53 28.5301L125.53 16.5301C125.67 16.3894 125.749 16.1988 125.749 16.0001C125.749 15.8013 125.67 15.6107 125.53 15.4701ZM113.75 26.1888V22.0001C113.75 21.8012 113.671 21.6104 113.53 21.4697C113.39 21.3291 113.199 21.2501 113 21.2501H109.75V10.7501H113C113.199 10.7501 113.39 10.6711 113.53 10.5304C113.671 10.3898 113.75 10.199 113.75 10.0001V5.81132L123.939 16.0001L113.75 26.1888ZM101.75 10.0001V22.0001C101.75 22.199 101.671 22.3898 101.53 22.5304C101.39 22.6711 101.199 22.7501 101 22.7501C100.801 22.7501 100.61 22.6711 100.47 22.5304C100.329 22.3898 100.25 22.199 100.25 22.0001V10.0001C100.25 9.80116 100.329 9.6104 100.47 9.46974C100.61 9.32909 100.801 9.25007 101 9.25007C101.199 9.25007 101.39 9.32909 101.53 9.46974C101.671 9.6104 101.75 9.80116 101.75 10.0001ZM105.75 10.0001V22.0001C105.75 22.199 105.671 22.3898 105.53 22.5304C105.39 22.6711 105.199 22.7501 105 22.7501C104.801 22.7501 104.61 22.6711 104.47 22.5304C104.329 22.3898 104.25 22.199 104.25 22.0001V10.0001C104.25 9.80116 104.329 9.6104 104.47 9.46974C104.61 9.32909 104.801 9.25007 105 9.25007C105.199 9.25007 105.39 9.32909 105.53 9.46974C105.671 9.6104 105.75 9.80116 105.75 10.0001Z" fill="currentColor"/>\r\n<path d="M174.061 14.9387L162.061 2.93871C161.851 2.72869 161.584 2.58564 161.293 2.52767C161.002 2.46969 160.7 2.4994 160.426 2.61303C160.152 2.72666 159.917 2.9191 159.752 3.16599C159.588 3.41288 159.5 3.70312 159.5 3.99996V8.49996H159C158.602 8.49996 158.221 8.658 157.939 8.9393C157.658 9.2206 157.5 9.60214 157.5 9.99996V22C157.5 22.3978 157.658 22.7793 157.939 23.0606C158.221 23.3419 158.602 23.5 159 23.5H159.5V28C159.5 28.2968 159.588 28.587 159.752 28.8339C159.917 29.0808 160.152 29.2733 160.426 29.3869C160.7 29.5005 161.002 29.5302 161.293 29.4723C161.584 29.4143 161.851 29.2712 162.061 29.0612L174.061 17.0612C174.201 16.9219 174.311 16.7565 174.387 16.5744C174.462 16.3923 174.501 16.1971 174.501 16C174.501 15.8028 174.462 15.6076 174.387 15.4255C174.311 15.2435 174.201 15.078 174.061 14.9387ZM162.5 24.375V22C162.5 21.6021 162.342 21.2206 162.061 20.9393C161.779 20.658 161.398 20.5 161 20.5H160.5V11.5H161C161.398 11.5 161.779 11.3419 162.061 11.0606C162.342 10.7793 162.5 10.3978 162.5 9.99996V7.62496L170.875 16L162.5 24.375ZM150.5 9.99996V22C150.5 22.3978 150.342 22.7793 150.061 23.0606C149.779 23.3419 149.398 23.5 149 23.5C148.602 23.5 148.221 23.3419 147.939 23.0606C147.658 22.7793 147.5 22.3978 147.5 22V9.99996C147.5 9.60214 147.658 9.2206 147.939 8.9393C148.221 8.658 148.602 8.49996 149 8.49996C149.398 8.49996 149.779 8.658 150.061 8.9393C150.342 9.2206 150.5 9.60214 150.5 9.99996ZM155.5 9.99996V22C155.5 22.3978 155.342 22.7793 155.061 23.0606C154.779 23.3419 154.398 23.5 154 23.5C153.602 23.5 153.221 23.3419 152.939 23.0606C152.658 22.7793 152.5 22.3978 152.5 22V9.99996C152.5 9.60214 152.658 9.2206 152.939 8.9393C153.221 8.658 153.602 8.49996 154 8.49996C154.398 8.49996 154.779 8.658 155.061 8.9393C155.342 9.2206 155.5 9.60214 155.5 9.99996Z" fill="currentColor"/>\r\n<path d="M198 10.0001V22.0001C198 22.2653 197.895 22.5196 197.707 22.7072C197.52 22.8947 197.265 23.0001 197 23.0001C196.735 23.0001 196.48 22.8947 196.293 22.7072C196.105 22.5196 196 22.2653 196 22.0001V10.0001C196 9.73484 196.105 9.48048 196.293 9.29295C196.48 9.10541 196.735 9.00006 197 9.00006C197.265 9.00006 197.52 9.10541 197.707 9.29295C197.895 9.48048 198 9.73484 198 10.0001ZM201 9.00006C200.735 9.00006 200.48 9.10541 200.293 9.29295C200.105 9.48048 200 9.73484 200 10.0001V22.0001C200 22.2653 200.105 22.5196 200.293 22.7072C200.48 22.8947 200.735 23.0001 201 23.0001C201.265 23.0001 201.52 22.8947 201.707 22.7072C201.895 22.5196 202 22.2653 202 22.0001V10.0001C202 9.73484 201.895 9.48048 201.707 9.29295C201.52 9.10541 201.265 9.00006 201 9.00006ZM221.708 15.2926L209.708 3.29256C209.568 3.15254 209.389 3.05718 209.195 3.01853C209.001 2.97988 208.8 2.99968 208.617 3.07543C208.434 3.15119 208.278 3.27948 208.168 3.44407C208.058 3.60867 208 3.80216 208 4.00006V9.00006H205C204.735 9.00006 204.48 9.10541 204.293 9.29295C204.105 9.48048 204 9.73484 204 10.0001V22.0001C204 22.2653 204.105 22.5196 204.293 22.7072C204.48 22.8947 204.735 23.0001 205 23.0001H208V28.0001C208 28.198 208.058 28.3914 208.168 28.556C208.278 28.7206 208.434 28.8489 208.617 28.9247C208.8 29.0004 209.001 29.0202 209.195 28.9816C209.389 28.9429 209.568 28.8476 209.708 28.7076L221.708 16.7076C221.8 16.6147 221.874 16.5044 221.925 16.383C221.975 16.2616 222.001 16.1315 222.001 16.0001C222.001 15.8686 221.975 15.7385 221.925 15.6171C221.874 15.4957 221.8 15.3854 221.708 15.2926Z" fill="currentColor"/>\r\n<path opacity="0.2" d="M257 28V22H253V10H257V4L269 16L257 28Z" fill="currentColor"/>\r\n<path d="M269.708 15.2926L257.708 3.29256C257.568 3.15254 257.389 3.05718 257.195 3.01853C257.001 2.97988 256.8 2.99968 256.617 3.07543C256.434 3.15119 256.278 3.27948 256.168 3.44407C256.058 3.60867 256 3.80216 256 4.00006V9.00006H253C252.735 9.00006 252.48 9.10541 252.293 9.29295C252.105 9.48048 252 9.73484 252 10.0001V22.0001C252 22.2653 252.105 22.5196 252.293 22.7072C252.48 22.8947 252.735 23.0001 253 23.0001H256V28.0001C256 28.198 256.058 28.3914 256.168 28.556C256.278 28.7206 256.434 28.8489 256.617 28.9247C256.8 29.0004 257.001 29.0202 257.195 28.9816C257.389 28.9429 257.568 28.8476 257.708 28.7076L269.708 16.7076C269.8 16.6147 269.874 16.5044 269.925 16.383C269.975 16.2616 270.001 16.1315 270.001 16.0001C270.001 15.8686 269.975 15.7385 269.925 15.6171C269.874 15.4957 269.8 15.3854 269.708 15.2926ZM258 25.5863V22.0001C258 21.7348 257.895 21.4805 257.707 21.2929C257.52 21.1054 257.265 21.0001 257 21.0001H254V11.0001H257C257.265 11.0001 257.52 10.8947 257.707 10.7072C257.895 10.5196 258 10.2653 258 10.0001V6.41381L267.586 16.0001L258 25.5863ZM246 10.0001V22.0001C246 22.2653 245.895 22.5196 245.707 22.7072C245.52 22.8947 245.265 23.0001 245 23.0001C244.735 23.0001 244.48 22.8947 244.293 22.7072C244.105 22.5196 244 22.2653 244 22.0001V10.0001C244 9.73484 244.105 9.48048 244.293 9.29295C244.48 9.10541 244.735 9.00006 245 9.00006C245.265 9.00006 245.52 9.10541 245.707 9.29295C245.895 9.48048 246 9.73484 246 10.0001ZM250 10.0001V22.0001C250 22.2653 249.895 22.5196 249.707 22.7072C249.52 22.8947 249.265 23.0001 249 23.0001C248.735 23.0001 248.48 22.8947 248.293 22.7072C248.105 22.5196 248 22.2653 248 22.0001V10.0001C248 9.73484 248.105 9.48048 248.293 9.29295C248.48 9.10541 248.735 9.00006 249 9.00006C249.265 9.00006 249.52 9.10541 249.707 9.29295C249.895 9.48048 250 9.73484 250 10.0001Z" fill="currentColor"/>\r\n</g>\r\n<defs>\r\n<clipPath id="clip0_17_6590">\r\n<rect width="272" height="32" rx="5" fill="white"/>\r\n</clipPath>\r\n</defs>\r\n';
      module.exports = function SvgIcon(p) {
        p = p || {};
        return R.createElement("svg", { viewBox: p.viewBox || "0 0 32 32", width: p.width !== void 0 ? p.width : 32, height: p.height !== void 0 ? p.height : 32, fill: p.fill !== void 0 ? p.fill : "none", xmlns: "http://www.w3.org/2000/svg", style: p.style, className: p.className, dangerouslySetInnerHTML: { __html: _i } });
      };
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

  // .design-sync/.cache/previews/MSelect.tsx
  var MSelect_exports = {};
  __export(MSelect_exports, {
    Basic: () => Basic2
  });
  init_define_import_meta_env();
  var React = __toESM(require_react_shim(), 1);

  // src/atoms/MSelect/MSelect.stories.tsx
  var MSelect_stories_exports = {};
  __export(MSelect_stories_exports, {
    Basic: () => Basic,
    default: () => MSelect_stories_default
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

  // src/atoms/MIcon/icons/MIconArrowFatLinesRight.tsx
  init_define_import_meta_env();
  var import_ArrowFatLinesRight = __toESM(require_ArrowFatLinesRight());

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

  // src/atoms/MIcon/icons/MIconArrowFatLinesRight.tsx
  var import_jsx_runtime = __toESM(require_react_shim());
  var MIconArrowFatLinesRight = ({
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
      import_ArrowFatLinesRight.default,
      {
        width: finalWidth,
        height: finalHeight,
        viewBox: finalViewBox,
        ...restProps
      }
    ) });
  };

  // src/atoms/MIcon/icons/MIconBracketsSquare.tsx
  init_define_import_meta_env();
  var import_BracketsSquare = __toESM(require_BracketsSquare());
  var import_jsx_runtime2 = __toESM(require_react_shim());
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
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_jsx_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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

  // ds-shim:ds:MSelect
  var ds_MSelect_exports = {};
  __export(ds_MSelect_exports, {
    default: () => ds_MSelect_default
  });
  init_define_import_meta_env();
  __reExport(ds_MSelect_exports, __toESM(require_ds_raw()));
  var g3 = window.WsUikit;
  var ds_MSelect_default = g3["MSelect"] !== void 0 ? g3["MSelect"] : g3;

  // src/atoms/MSelect/MSelect.stories.tsx
  var import_jsx_runtime3 = __toESM(require_react_shim());
  var meta = {
    title: "Atoms/Form/MSelect",
    component: ds_MSelect_default
  };
  var item = () => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(ds_MFlex_default, { gap: "s", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(MIconBracketsSquare, { mode: "regular", width: 20 }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(ds_MText_default, { size: "m", children: "List Item" })
  ] });
  var item1 = () => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(ds_MFlex_default, { gap: "s", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(MIconArrowFatLinesRight, { mode: "regular", width: 20 }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(ds_MText_default, { size: "m", children: "List Item1" })
  ] });
  var item2 = () => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(ds_MFlex_default, { gap: "s", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(MIconArrowFatLinesRight, { mode: "regular", width: 20 }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(ds_MText_default, { size: "m", children: "List Item2" })
  ] });
  var MSelect_stories_default = meta;
  var Basic = {
    args: {
      options: [
        {
          key: "item1",
          value: item(),
          role: "listitem"
        },
        {
          key: "item2",
          value: item1()
        },
        {
          key: "item3",
          value: item2()
        },
        {
          key: "item4",
          value: item()
        },
        {
          key: "item5",
          value: item()
        }
      ]
    },
    argTypes: {}
  };

  // .design-sync/.cache/previews/MSelect.tsx
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
    compose(MSelect_stories_exports, "Basic")
  );
  return __toCommonJS(MSelect_exports);
})();
