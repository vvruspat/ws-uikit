const { MGrid } = window.WsUikit;

const Cell = ({ label, span }: { label: string; span?: string }) => (
  <div style={{
    background: '#6366f1',
    color: '#fff',
    borderRadius: 6,
    padding: '12px 16px',
    fontFamily: 'system-ui',
    fontSize: 13,
    fontWeight: 500,
    gridColumn: span,
  }}>
    {label}
  </div>
);

export function TwoColumn() {
  return (
    <div style={{ padding: 24 }}>
      <MGrid columnTemplate="1fr 1fr" columnGap="m" rowGap="s">
        <Cell label="Column 1" />
        <Cell label="Column 2" />
        <Cell label="Column 3" />
        <Cell label="Column 4" />
      </MGrid>
    </div>
  );
}

export function ThreeColumn() {
  return (
    <div style={{ padding: 24 }}>
      <MGrid columnTemplate="1fr 1fr 1fr" columnGap="s" rowGap="s">
        <Cell label="Alpha" />
        <Cell label="Beta" />
        <Cell label="Gamma" />
        <Cell label="Delta" />
        <Cell label="Epsilon" />
        <Cell label="Zeta" />
      </MGrid>
    </div>
  );
}
