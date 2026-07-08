// Owned preview for MTheme — the component itself returns null (headless
// attribute-setter). This preview shows the theme data-attribute it applies.
const { MTheme } = window.WsUikit;

export function Basic() {
  return (
    <div style={{ padding: 24, fontFamily: 'system-ui', fontSize: 14, color: '#374151' }}>
      <MTheme theme="light" brand="" platform="desktop" />
      <div style={{ background: 'var(--background, #f9fafb)', border: '1px solid var(--border, #e5e7eb)', borderRadius: 8, padding: 16 }}>
        <strong>MTheme</strong>
        <p style={{ margin: '8px 0 0', color: '#6b7280' }}>
          Headless component — sets <code>data-theme</code>, <code>data-brand</code>, and{' '}
          <code>data-platform</code> on <code>&lt;html&gt;</code>.
        </p>
        <pre style={{ marginTop: 12, background: '#f3f4f6', borderRadius: 4, padding: 8, fontSize: 12 }}>
          {'<MTheme theme="light" brand="" platform="desktop" />'}
        </pre>
      </div>
    </div>
  );
}
