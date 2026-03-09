# CSS Token Refactor — Design Document

**Date:** 2026-03-09
**Status:** Approved

---

## Problem

The existing CSS architecture was extracted from a monorepo and has several structural issues:

- `brand/words-control.css` mixes palette, font sizes, spacing, border radii, and even button-specific padding in a single file
- Theme files (`theme/light.css`, `theme/dark.css`) and component `.vars.css` files **duplicate** the same `[data-theme]` token definitions
- Platform files are nearly empty (`webdesktop.css` has 1 variable)
- Components reference palette tokens directly (e.g. `var(--palette-base-300)`) rather than semantic tokens, making theming brittle
- No consistent naming convention across token layers

---

## Goals

1. Single source of truth for every visual value
2. Components reference semantic tokens only — no hardcoded values, no palette refs inside components
3. Wide token spectrum so future palette/brand changes require only token reassignment, not component edits
4. Clear, predictable naming convention

---

## Decisions

| Question | Decision |
|---|---|
| Token architecture | Role + State (Approach A) |
| Component token layer | None — components use semantic tokens directly (Option B) |
| Font families | 3 roles (`primary`, `secondary`, `tertiary`), all point to Roboto for now |
| Line-height naming | Matches font-size names (`xs`…`6xl`), each value = font-size + 2px |
| Platforms | 3: `web` (was webdesktop), `tablet` (was webtablet), `mobile` (was webmobile). ios/android dropped. |
| Palette | Full spectrum kept including unused values — available for future semantic assignment |
| Size scale | Wide spectrum including unused steps — available for future use |

---

## New File Structure

```
src/styles/
  brand.css              ← raw palette only, no semantic meaning
  font.css               ← @font-face + font role vars + sizes + line-heights
  themes/
    light.css            ← all semantic color tokens, light mode
    dark.css             ← all semantic color tokens, dark mode
  platforms/
    web.css              ← semantic spacing/radius/shadow/size tokens
    tablet.css           ← same, tablet-specific values
    mobile.css           ← same, mobile-specific values
  index.css              ← imports all of the above (updated)
```

### Files deleted

- `src/styles/brand/fonts.css`
- `src/styles/brand/words-control.css`
- `src/styles/theme/light.css`
- `src/styles/theme/dark.css`
- `src/styles/platform/webdesktop.css`
- `src/styles/platform/webtablet.css`
- `src/styles/platform/webmobile.css`
- `src/styles/platform/ios.css`
- `src/styles/platform/android.css`

---

## Token Specifications

### `brand.css` — Palette

Semantic-agnostic raw colors. Scoped to `:root`. Groups:

- `--palette-primary-50` → `--palette-primary-1000` (color-mix based above 800)
- `--palette-secondary-50` → `--palette-secondary-1000`
- `--palette-tertiary-50` → `--palette-tertiary-1000`
- `--palette-base-0` → `--palette-base-1000` (neutral/grey scale)
- `--palette-success-100` → `--palette-success-1000`
- `--palette-error-50` → `--palette-error-1000`
- `--palette-warning-50` → `--palette-warning-1000`
- `--palette-info-100` → `--palette-info-1000`

The `--palette-active-*` aliases and `--input-regular-border` are removed — expressed as semantic tokens in theme files instead.

---

### `font.css` — Typography

```css
:root {
  --font-family-primary:   "Roboto", sans-serif;
  --font-family-secondary: "Roboto", sans-serif;
  --font-family-tertiary:  "Roboto", sans-serif;

  /* Font sizes */
  --font-size-xs:   0.625rem;   /*  10px */
  --font-size-sm:   0.75rem;    /*  12px */
  --font-size-md:   0.875rem;   /*  14px */
  --font-size-lg:   1rem;       /*  16px */
  --font-size-xl:   1.25rem;    /*  20px */
  --font-size-2xl:  1.5rem;     /*  24px */
  --font-size-3xl:  2rem;       /*  32px */
  --font-size-4xl:  2.5rem;     /*  40px */
  --font-size-5xl:  3rem;       /*  48px */
  --font-size-6xl:  3.75rem;    /*  60px */

  /* Line heights — name matches font-size, value = font-size + 2px */
  --line-height-xs:   0.75rem;    /*  12px */
  --line-height-sm:   0.875rem;   /*  14px */
  --line-height-md:   1rem;       /*  16px */
  --line-height-lg:   1.125rem;   /*  18px */
  --line-height-xl:   1.375rem;   /*  22px */
  --line-height-2xl:  1.625rem;   /*  26px */
  --line-height-3xl:  2.125rem;   /*  34px */
  --line-height-4xl:  2.625rem;   /*  42px */
  --line-height-5xl:  3.125rem;   /*  50px */
  --line-height-6xl:  3.875rem;   /*  62px */
}
```

> **Migration note:** `--font-size-s` → `--font-size-sm`, `--font-size-m` → `--font-size-md`, `--font-size-l` → `--font-size-lg`. All component CSS files updated accordingly.

---

### `themes/light.css` + `themes/dark.css` — Semantic Colors

Scoped to `:root[data-theme="light"]` / `:root[data-theme="dark"]`.

#### Token groups

**Surface**
```
--color-surface                   page/card background
--color-surface-raised            slightly elevated (base-50)
--color-surface-overlay           modal, dropdown (base-100)
--color-surface-sunken            inset, disabled bg (base-200)
--color-surface-inverse           dark surface on light theme
```

**Text**
```
--color-text-primary
--color-text-secondary
--color-text-tertiary
--color-text-disabled
--color-text-inverse              text on dark/inverse surfaces
--color-text-on-action            text on action-colored backgrounds
--color-text-link
--color-text-link-hover
--color-text-link-visited
```

**Border**
```
--color-border-default
--color-border-strong
--color-border-focus
--color-border-error
--color-border-success
```

**Action — primary**
```
--color-action-rest
--color-action-hover
--color-action-active
--color-action-disabled
--color-action-foreground
--color-action-foreground-disabled
```

**Action — secondary**
```
--color-action-secondary-rest
--color-action-secondary-hover
--color-action-secondary-active
--color-action-secondary-foreground
```

**Action — subtle (ghost/tertiary)**
```
--color-action-subtle-rest
--color-action-subtle-hover
--color-action-subtle-active
--color-action-subtle-foreground
--color-action-subtle-border
```

**Action — outlined**
```
--color-action-outlined-bg
--color-action-outlined-bg-hover
--color-action-outlined-border
--color-action-outlined-foreground
```

**Action — transparent**
```
--color-action-transparent-foreground
--color-action-transparent-foreground-hover
--color-action-transparent-foreground-disabled
```

**Control (checkbox, radio, switch)**
```
--color-control-track
--color-control-track-hover
--color-control-checked
--color-control-checked-hover
--color-control-thumb
--color-control-outline
--color-control-outline-hover
--color-control-outline-focus
```

**Input**
```
--color-input-bg
--color-input-bg-disabled
--color-input-border
--color-input-border-hover
--color-input-border-focus
--color-input-text
--color-input-text-hover
--color-input-placeholder
--color-input-placeholder-hover
--color-input-label
--color-input-assistive
```

**Status**
```
--color-status-error
--color-status-error-surface
--color-status-success
--color-status-success-surface
--color-status-warning
--color-status-warning-surface
--color-status-info
--color-status-info-surface
```

**Divider**
```
--color-divider-subtle
--color-divider-strong
```

**Overlay / Focus**
```
--color-overlay
--color-focus-ring
--shadow-card
```

---

### `platforms/web.css` — Semantic Sizes (wide spectrum)

Scoped to `:root[data-platform="web"]`. `tablet.css` and `mobile.css` carry the same token names with adjusted values.

**Spacing** (`--space-1` … `--space-64`, pixel multiples of 2px base)
```
--space-1:   0.125rem   /*  2px */
--space-2:   0.25rem    /*  4px */
--space-3:   0.375rem   /*  6px */
--space-4:   0.5rem     /*  8px */
--space-5:   0.625rem   /* 10px */
--space-6:   0.75rem    /* 12px */
--space-8:   1rem       /* 16px */
--space-10:  1.25rem    /* 20px */
--space-12:  1.5rem     /* 24px */
--space-14:  1.75rem    /* 28px */
--space-16:  2rem       /* 32px */
--space-20:  2.5rem     /* 40px */
--space-24:  3rem       /* 48px */
--space-32:  4rem       /* 64px */
--space-36:  4.5rem     /* 72px */
--space-48:  6rem       /* 96px */
--space-56:  7rem       /* 112px */
--space-64:  8rem       /* 128px */
```

**Border radius** (`--radius-1` … `--radius-full`)
```
--radius-1:    0.125rem
--radius-2:    0.25rem
--radius-3:    0.375rem
--radius-4:    0.5rem
--radius-5:    0.625rem
--radius-6:    0.75rem
--radius-8:    1rem
--radius-10:   1.25rem
--radius-12:   1.5rem
--radius-16:   2rem
--radius-18:   2.25rem
--radius-24:   3rem
--radius-28:   3.5rem
--radius-32:   4rem
--radius-full: 9999px
```

**Shadows**
```
--shadow-xs:  0px 1px 2px rgba(0,0,0,0.05)
--shadow-sm:  0px 1px 4px rgba(68,80,95,0.12)
--shadow-md:  0px 0px 1px rgba(68,80,95,0.08), 0px 1px 4px rgba(68,80,95,0.2)
--shadow-lg:  0px 4px 8px rgba(68,80,95,0.16), 0px 2px 4px rgba(68,80,95,0.08)
--shadow-xl:  0px 8px 24px rgba(68,80,95,0.2)
```

**Sizes** (`--size-4` … `--size-64`)
```
--size-4:   0.5rem
--size-5:   0.625rem
--size-6:   0.75rem
--size-8:   1rem
--size-10:  1.25rem
--size-12:  1.5rem
--size-16:  2rem
--size-20:  2.5rem
--size-24:  3rem
--size-32:  4rem
--size-36:  4.5rem
--size-48:  6rem
--size-56:  7rem
--size-64:  8rem
```

**Layout**
```
--layout-screen-padding-h:  var(--space-24)   /* web: 48px */
                            var(--space-12)   /* tablet: 24px */
                            var(--space-8)    /* mobile: 16px */
```

---

## Component Migration

Each component `.vars.css` file currently contains:
- `:root {}` — common structural tokens (reference brand tokens)
- `:root[data-theme]` — color overrides
- `:root[data-platform]` — size overrides

**After migration:**
- `:root[data-theme]` and `:root[data-platform]` blocks are **deleted** from all `.vars.css` files
- Component CSS (`.module.css`) references semantic tokens directly: `var(--color-action-rest)`, `var(--space-8)`, etc.
- `.vars.css` files that only contained theme/platform overrides are **deleted entirely**
- `.vars.css` files with remaining structural tokens (e.g. computed layout values) are kept

### Font size rename in components

| Old | New |
|---|---|
| `var(--font-size-s)` | `var(--font-size-sm)` |
| `var(--font-size-m)` | `var(--font-size-md)` |
| `var(--font-size-l)` | `var(--font-size-lg)` |
| `var(--whiteSpace-general-*)` | `var(--space-*)` |
| `var(--borderRadius-general-*)` | `var(--radius-*)` |
| `var(--size-general-*)` | `var(--size-*)` |

---

## Storybook

`preview.tsx` already sets `data-theme` and `data-platform` on `document.documentElement` — no changes needed.

---

## Non-goals

- No changes to component TypeScript/JSX
- No changes to `.module.css` structure (only variable references updated)
- No new components
