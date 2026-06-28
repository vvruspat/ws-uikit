// Patches window.React.createElement so that SVG data URLs used as element
// types (artifact of esbuild's .svg?react → dataurl bundling) render as <img>
// instead of throwing InvalidCharacterError in document.createElement.
// This runs at bundle load time, before any component renders.
if (typeof window !== 'undefined' && window.React) {
  const _orig = (window.React as any).createElement;
  (window.React as any).createElement = function (type: any, props: any, ...children: any[]) {
    if (typeof type === 'string' && type.startsWith('data:image/svg+xml')) {
      return _orig('img', {
        ...(props || {}),
        src: type,
        alt: '',
        style: { display: 'inline-block', ...((props as any)?.style || {}) },
      });
    }
    return _orig(type, props, ...children);
  };
}
export {};
