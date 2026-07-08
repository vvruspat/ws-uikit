MFormField from ws-uikit. Use via `window.WsUikit.MFormField` (bundle loaded from the root `_ds_bundle.js`). Wrap the tree in `<WsThemeProvider>` (full provider chain in README.md — components read theme/i18n from that context).

Variants (see `MFormField.html`): Basic.

## Examples

```jsx
// Basic
export const Basic: Story = {
	args: {
		status: "regular",
		spacing: "m",
		required: true,
		control: <MInput />,
		label: "Input field",
		description: "Field description",
	},

	argTypes: {
		status: {
			control: {
				type: "select",
			},
			options: ["regular", "valid", "invalid"],
		},
		spacing: {
			control: {
				type: "select",
			},
			options: ["s", "m", "l", "auto"],
		},
		disabled: { control: { type: "boolean" } },
		required: { control: { type: "boolean" } },
		direction: {
			control: { type: "select" },
			options: ["row", "column", "row-reverse", "column-reverse"],
		},
		label: {
			control: { type: "text" },
		},
		description: {
			control: { type: "text" },
		},
	},
};
```

### Basic

```jsx
/* Basic */ compose(S, "Basic")
```
