MDescriptionList from ws-uikit. Use via `window.WsUikit.MDescriptionList` (bundle loaded from the root `_ds_bundle.js`). Wrap the tree in `<WsThemeProvider>` (full provider chain in README.md — components read theme/i18n from that context).

Variants (see `MDescriptionList.html`): Basic.

## Examples

```jsx
// Basic
export const Basic: Story = {
	args: {
		options: [
			{
				title: "Title",
				description: "Description",
			},
			{
				title: "Title second",
				description: "Description second",
			},
			{
				title: "Title third",
				description: "Description third",
			},
			{
				title: "Title fourth",
				description: "Description fourth",
			},
			{
				title: "Title fifth",
				description: "Description fifth",
			},
			{
				title: "Title sixth",
				description: "Description sixth",
			},
		],

		size: "m",
	},

	argTypes: {
		size: {
			options: ["s", "m", "l"],
			control: { type: "select" },
		},
	},
};
```

### Basic

```jsx
/* Basic */ compose(S, "Basic")
```
