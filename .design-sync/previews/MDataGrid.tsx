// Owned preview — avoids bundling the full atoms barrel (which pulls in
// all 1,244 icons and inflates the preview to 15 MB via storyImports.bundle).
const { MDataGrid } = window.WsUikit;

const headers = [
  { field: 'name', label: 'Customer', sortable: true },
  { field: 'status', label: 'Status', sortable: true },
  { field: 'plan', label: 'Plan', sortable: true },
  { field: 'revenue', label: 'Revenue', sortable: true },
];

const rows = [
  { id: 0, name: 'Northwind account 1', status: 'Active', plan: 'Enterprise', revenue: 2400 },
  { id: 1, name: 'Northwind account 2', status: 'Active', plan: 'Team', revenue: 2775 },
  { id: 2, name: 'Northwind account 3', status: 'Paused', plan: 'Pro', revenue: 3150 },
  { id: 3, name: 'Northwind account 4', status: 'Active', plan: 'Enterprise', revenue: 3525 },
  { id: 4, name: 'Northwind account 5', status: 'Active', plan: 'Team', revenue: 3900 },
];

export function Default() {
  return (
    <MDataGrid
      caption="Customer accounts"
      headers={headers}
      rows={rows}
      pagination={{
        total: 32,
        limit: 5,
        offset: 0,
        rowsPerPageOptions: [5, 10, 25],
        onNextPage: () => {},
        onPreviousPage: () => {},
        onRowsPerPageChange: () => {},
      }}
      onSelect={() => {}}
    />
  );
}

export function Empty() {
  return (
    <MDataGrid
      caption="Customer accounts"
      headers={headers}
      rows={[]}
      emptyMessage="No customer accounts match the current filters."
    />
  );
}
