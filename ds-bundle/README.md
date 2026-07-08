# WsUikit (ws-uikit@0.4.1)

This design system is the published ws-uikit React library, bundled as a single
browser global. All 47 components are the real upstream code.

## Where things are

- `_ds_bundle.js` — the whole-DS bundle at the project root; loads every component to `window.WsUikit`. First line is a `/* @ds-bundle: … */` metadata header.
- `styles.css` — the single stylesheet entry: it `@import`s the tokens, fonts, and component styles (`_ds_bundle.css`). Link this one file.
- `components/<group>/<Name>/<Name>.prompt.md` (example JSX + variants), `<Name>.d.ts` (types), `<Name>.html` (variant grid).
- `tokens/*.css` — CSS custom properties, names verbatim from upstream.
- `fonts/` — `@font-face` files + `fonts.css` (when the package ships fonts).

For a specific component, `read_file("components/<group>/<Name>/<Name>.prompt.md")`.

## Loading

Add these two lines to your page once (React must be on the page first):

```html
<link rel="stylesheet" href="styles.css">
<script src="_ds_bundle.js"></script>
```

Components are then available at `window.WsUikit.*`. Mount into a dedicated child node (e.g. `<div id="ds-root">`), not the host page's own React root, so the two trees don't collide:

```jsx
const { Accordion } = window.WsUikit;
ReactDOM.createRoot(document.getElementById('ds-root')).render(<Accordion />);
```

Wrap the tree in the provider — most components read theme/i18n from context:

```jsx
<WsThemeProvider>{children}</WsThemeProvider>
```

## Tokens

249 CSS custom properties from ws-uikit. Names are
preserved verbatim from upstream. They are declared inside `_ds_bundle.css` (this DS ships one compiled stylesheet rather than separate token files).

- **color** (82): `--color-surface`, `--color-surface-raised`, `--color-surface-overlay`, …
- **spacing** (20): `--space-1`, `--space-2`, `--space-3`, …
- **typography** (23): `--font-family-primary`, `--font-family-secondary`, `--font-family-tertiary`, …
- **radius** (16): `--radius-1`, `--radius-2`, `--radius-3`, …
- **shadow** (6): `--shadow-card`, `--shadow-xs`, `--shadow-sm`, …
- **other** (102): `--palette-primary-50`, `--palette-primary-100`, `--palette-primary-200`, …

## Components

### data-display
- `Accordion`
- `MDataGrid`

### layout
- `MAlert`
- `MAvatar`
- `MCard`
- `MDescriptionList`
- `MDivider`
- `MDropdown`
- `MExpandableText`
- `MFlex`
- `MGrid`
- `MSpinner`
- `MThemeSelector`

### visual
- `MBadge`
- `MGallery`
- `MSkelleton`

### form
- `MButton`
- `MCheckbox`
- `MDatepicker`
- `MDatetime`
- `MFieldDescription`
- `MFileInput`
- `MFormField`
- `MInput`
- `MLabel`
- `MList`
- `MListItem`
- `MRadio`
- `MRangeSlider`
- `MSelect`
- `MSlider`
- `MSwitch`
- `MTab`
- `MTabs`
- `MTextarea`
- `MTimepicker`

### calendar
- `MCalendar`
- `MDaySelector`
- `MMonthSelector`
- `MWeekdays`
- `MYearSelector`

### typography
- `MCaption`
- `MHeading`
- `MText`

### feedback
- `MProgressBar`
- `MStepProgress`

### utils
- `MTheme`
