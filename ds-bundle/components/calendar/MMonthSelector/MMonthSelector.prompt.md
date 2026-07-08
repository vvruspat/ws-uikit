MMonthSelector from ws-uikit. Use via `window.WsUikit.MMonthSelector` (bundle loaded from the root `_ds_bundle.js`). Wrap the tree in `<WsThemeProvider>` (full provider chain in README.md — components read theme/i18n from that context).

Variants (see `MMonthSelector.html`): Primary.

## Examples

```jsx
// Primary
export const Primary: Story = {
	args: {
		locale: "en-US",
		format: "long",
	},

	argTypes: {
		locale: {
			control: {
				type: "select",
				options: ["en-US", "ja-JP"],
			},
		},
		format: {
			control: {
				type: "select",
				options: ["narrow", "short", "long"],
			},
		},
	},
};
```

### Primary

```jsx
/* Primary */ compose(S, "Primary")
```
