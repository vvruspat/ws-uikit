MWeekdays from ws-uikit. Use via `window.WsUikit.MWeekdays` (bundle loaded from the root `_ds_bundle.js`). Wrap the tree in `<WsThemeProvider>` (full provider chain in README.md — components read theme/i18n from that context).

Variants (see `MWeekdays.html`): Default.

## Examples

```jsx
// Default
export const Default: Story = {
	args: {
		locale: "en-US",
		format: "narrow",
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

### Default

```jsx
/* Default */ compose(S, "Default")
```
