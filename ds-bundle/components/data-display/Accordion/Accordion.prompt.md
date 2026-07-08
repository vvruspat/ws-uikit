Accordion from ws-uikit. Use via `window.WsUikit.Accordion` (bundle loaded from the root `_ds_bundle.js`). Wrap the tree in `<WsThemeProvider>` (full provider chain in README.md — components read theme/i18n from that context).

Variants (see `Accordion.html`): Basic, Default Icons, Initially Expanded, Multiple Expanded, Complex content.

## Examples

```jsx
// Basic
export const Basic: Story = {
	args: {
		items: [
			{
				key: 1,
				title: "item 1",
				children: "accordion item 1",
			},
			{
				key: 2,
				title: "title 2",
				children: "accordion item 2",
			},
			{
				key: 3,
				title: "title 3",
				children: "accordion item 3",
			},
			{
				key: 4,
				title: "title 4",
				children: "accordion item 4",
			},
			{
				key: 5,
				title: "title 5",
				children: "accordion item 5",
			},
		],
		iconClosed,
		iconOpen,
	},

	argTypes: {
		iconClosed: { type: "string" },
		iconOpen: { type: "string" },
	},
};

// Default Icons
export const DefaultIcons: Story = {
	args: {
		items: [
			{
				key: 1,
				title: "Account details",
				children: "Name, email, and profile settings.",
			},
			{
				key: 2,
				title: "Notifications",
				children: "Email and product update preferences.",
			},
			{
				key: 3,
				title: "Billing",
				children: "Invoices, payment methods, and tax details.",
			},
		],
	},
};

// Initially Expanded
export const InitiallyExpanded: Story = {
	args: {
		items: [
			{
				key: 1,
				title: "Collapsed by default",
				children: "This item starts closed.",
			},
			{
				key: 2,
				title: "Open by default",
				children: "This item starts open because collapsed is false.",
				collapsed: false,
			},
		],
	},
};
```

### Basic

```jsx
/* Basic */ compose(S, "Basic")
```

### DefaultIcons

```jsx
/* Default Icons */ compose(S, "DefaultIcons")
```

### InitiallyExpanded

```jsx
/* Initially Expanded */ compose(S, "InitiallyExpanded")
```

### MultipleExpanded

```jsx
/* Multiple Expanded */ compose(S, "MultipleExpanded")
```

### ComplexContentStory

```jsx
/* Complex content */ compose(S, "ComplexContentStory")
```
