// Sets data-theme and data-platform on the html element to match ws-uikit's
// storybook preview decorators (withThemeByDataAttribute + inline decorator).
if (typeof document !== 'undefined') {
  document.documentElement.setAttribute('data-theme', 'light');
  document.documentElement.setAttribute('data-platform', 'desktop');
}
export function WsThemeProvider({ children }: { children: React.ReactNode }) {
  return children as React.ReactElement;
}
