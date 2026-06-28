const { MFlex } = window.WsUikit;

const Box = ({ label, color }: { label: string; color: string }) => (
  <div style={{ background: color, borderRadius: 6, padding: '8px 16px', color: '#fff', fontSize: 13, fontFamily: 'system-ui', fontWeight: 500 }}>
    {label}
  </div>
);

export function Row() {
  return (
    <div style={{ padding: 24 }}>
      <MFlex gap="m" direction="row" align="center">
        <Box label="Item A" color="#6366f1" />
        <Box label="Item B" color="#8b5cf6" />
        <Box label="Item C" color="#a78bfa" />
      </MFlex>
    </div>
  );
}

export function Column() {
  return (
    <div style={{ padding: 24 }}>
      <MFlex gap="s" direction="column" align="start">
        <Box label="Top" color="#059669" />
        <Box label="Middle" color="#10b981" />
        <Box label="Bottom" color="#34d399" />
      </MFlex>
    </div>
  );
}

export function SpaceBetween() {
  return (
    <div style={{ padding: 24 }}>
      <MFlex gap="none" direction="row" justify="space-between" style={{ width: '100%' }}>
        <Box label="Left" color="#0ea5e9" />
        <Box label="Right" color="#38bdf8" />
      </MFlex>
    </div>
  );
}
