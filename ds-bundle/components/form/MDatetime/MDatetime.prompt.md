MDatetime from ws-uikit. Use via `window.WsUikit.MDatetime` (bundle loaded from the root `_ds_bundle.js`). Wrap the tree in `<WsThemeProvider>` (full provider chain in README.md — components read theme/i18n from that context).

Variants (see `MDatetime.html`): Regular, Valid, Invalid, Disabled.

## Examples

```jsx
// Regular
export const Regular: Story = {
	args: {
		status: "regular",
		disabled: false,
		name: "datetime",
	},

	argTypes: argTypes,
};

// Valid
export const Valid: Story = {
	args: {
		status: "valid",
		disabled: false,
		name: "datetime",
	},

	argTypes: argTypes,
};

// Invalid
export const Invalid: Story = {
	args: {
		status: "invalid",
		disabled: false,
		name: "datetime",
	},

	argTypes: argTypes,
};
```

### Regular

```jsx
/* Regular */ compose(S, "Regular")
```

### Valid

```jsx
/* Valid */ compose(S, "Valid")
```

### Invalid

```jsx
/* Invalid */ compose(S, "Invalid")
```

### Disabled

```jsx
/* Disabled */ compose(S, "Disabled")
```
