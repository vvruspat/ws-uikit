# CSS Token Refactor Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Replace the existing ad-hoc CSS variable system with a clean three-layer token architecture (palette → semantic theme/platform → direct component usage) where every component references semantic tokens without intermediate per-component variable layers.

**Architecture:** `brand.css` holds semantic-agnostic palette values scoped to `:root`; `themes/light.css` and `themes/dark.css` hold semantic color tokens scoped to `[data-theme]`; `platforms/web|tablet|mobile.css` hold semantic size/spacing/radius tokens scoped to `[data-platform]`. Component `.module.css` files reference semantic tokens directly — no intermediate component variable layer.

**Tech Stack:** CSS Custom Properties, `:root` scoping with `data-theme` / `data-platform` attributes, Vite, Storybook 10 with `@storybook/addon-themes`.

**Reference:** See `docs/plans/2026-03-09-css-token-refactor-design.md` for full token lists and design rationale.

---

## Token Mapping Quick Reference

Use this throughout the migration tasks below.

### Spacing (old `--whiteSpace-general-*` → new `--space-*`)

| Old | Value | New |
|---|---|---|
| `--whiteSpace-general-_5x` | 0.25rem | `--space-2` |
| `--whiteSpace-general-1x` | 0.5rem | `--space-4` |
| `--whiteSpace-general-1_5x` | 0.75rem | `--space-6` |
| `--whiteSpace-general-2x` | 1rem | `--space-8` |
| `--whiteSpace-general-2_5x` | 1.25rem | `--space-10` |
| `--whiteSpace-general-3x` | 1.5rem | `--space-12` |
| `--whiteSpace-general-3_5x` | 1.75rem | `--space-14` |
| `--whiteSpace-general-4x` | 2rem | `--space-16` |
| `--whiteSpace-general-6x` | 3rem | `--space-24` |
| `--whiteSpace-general-8x` | 4rem | `--space-32` |

### Border Radius (old `--borderRadius-general-*` → new `--radius-*`)

| Old | Value | New |
|---|---|---|
| `--borderRadius-general-1x` | 0.25rem | `--radius-2` |
| `--borderRadius-general-2x` | 0.5rem | `--radius-4` |
| `--borderRadius-general-3x` | 0.75rem | `--radius-6` |
| `--borderRadius-general-4x` | 1rem | `--radius-8` |
| `--borderRadius-general-5x` | 1.25rem | `--radius-10` |
| `--borderRadius-general-6x` | 1.5rem | `--radius-12` |
| `--borderRadius-general-8x` | 2rem | `--radius-16` |
| `--borderRadius-general-9x` | 2.25rem | `--radius-18` |
| `--borderRadius-general-12x` | 3rem | `--radius-24` |
| `--borderRadius-general-14x` | 3.5rem | `--radius-28` |
| `--borderRadius-general-16x` | 4rem | `--radius-32` |

### MCard generic border-radius → new `--radius-*`

| Old (MCard generic var) | New |
|---|---|
| `--border-radius-none` | `0` (literal) |
| `--border-radius-xs` | `var(--radius-2)` |
| `--border-radius-s` | `var(--radius-4)` |
| `--border-radius-default` / `--border-radius-m` | `var(--radius-8)` |
| `--border-radius-l` | `var(--radius-12)` |
| `--border-radius-xl` | `var(--radius-18)` |
| `--border-radius-2xl` | `var(--radius-24)` |
| `--border-radius-3xl` | `var(--radius-28)` |
| `--border-radius-4xl` | `var(--radius-32)` |

### Sizes (old `--size-general-*` → new `--size-*`)

| Old | Value | New |
|---|---|---|
| `--size-general-4x` | 2rem | `--size-16` |
| `--size-general-6x` | 3rem | `--size-24` |

### Font Sizes

| Old | New |
|---|---|
| `--font-size-s` | `--font-size-sm` |
| `--font-size-m` | `--font-size-md` |
| `--font-size-l` | `--font-size-lg` |

---

## Migration Pattern for Each Component

When migrating any `.vars.css` + `.module.css` pair:

1. **Read** both files to understand what vars exist
2. **Delete** all `:root[data-theme]` and `:root[data-platform]` blocks from `.vars.css`
3. **Delete** the `:root {}` structural block from `.vars.css` (it maps old tokens → old tokens)
4. **Update `.module.css`** to reference semantic tokens directly — no component-level vars
5. For platform-specific layout differences (e.g. input padding differs on mobile), use `:root[data-platform="mobile"]` scoping **directly in the `.module.css`**, not in `.vars.css`
6. If `.vars.css` is now completely empty (or just a comment), delete the file

---

### Task 1: Create `src/styles/brand.css`

**Files:**
- Create: `src/styles/brand.css`

**Step 1: Create the file**

```css
/* src/styles/brand.css
   Raw semantic-agnostic palette. No semantic meaning assigned here.
   All values scoped to :root — always available regardless of theme/platform.
   Wide spectrum intentionally: unused steps exist for future semantic assignment.
*/
:root {
  /* ── Primary ─────────────────────────────────────── */
  --palette-primary-50:   rgba(245, 245, 246, 1);
  --palette-primary-100:  rgba(245, 245, 246, 1);
  --palette-primary-200:  rgba(235, 236, 236, 1);
  --palette-primary-300:  rgba(215, 217, 217, 1);
  --palette-primary-400:  rgba(175, 178, 179, 1);
  --palette-primary-500:  rgba(136, 140, 141, 1);
  --palette-primary-600:  rgba(96, 101, 103, 1);
  --palette-primary-700:  rgba(56, 63, 65, 1);
  --palette-primary-800:  rgba(39, 44, 46, 1);
  --palette-primary-900:  color-mix(in srgb, var(--palette-primary-800), black 10%);
  --palette-primary-1000: color-mix(in srgb, var(--palette-primary-800), black 20%);

  /* ── Secondary ───────────────────────────────────── */
  --palette-secondary-50:   rgba(240, 230, 232, 1);
  --palette-secondary-100:  rgba(224, 206, 208, 1);
  --palette-secondary-200:  rgba(194, 156, 162, 1);
  --palette-secondary-300:  rgba(163, 107, 115, 1);
  --palette-secondary-400:  rgba(133, 57, 69, 1);
  --palette-secondary-500:  rgba(102, 8, 22, 1);
  --palette-secondary-600:  color-mix(in srgb, var(--palette-secondary-500), black 10%);
  --palette-secondary-700:  color-mix(in srgb, var(--palette-secondary-500), black 20%);
  --palette-secondary-800:  color-mix(in srgb, var(--palette-secondary-500), black 30%);
  --palette-secondary-900:  color-mix(in srgb, var(--palette-secondary-500), black 40%);
  --palette-secondary-1000: color-mix(in srgb, var(--palette-secondary-500), black 50%);

  /* ── Tertiary ────────────────────────────────────── */
  --palette-tertiary-50:   rgba(243, 238, 245, 1);
  --palette-tertiary-100:  color-mix(in srgb, var(--palette-tertiary-200), white 10%);
  --palette-tertiary-200:  rgba(164, 96, 188, 1);
  --palette-tertiary-300:  rgba(104, 59, 120, 1);
  --palette-tertiary-400:  color-mix(in srgb, var(--palette-tertiary-300), black 10%);
  --palette-tertiary-500:  color-mix(in srgb, var(--palette-tertiary-300), black 20%);
  --palette-tertiary-600:  color-mix(in srgb, var(--palette-tertiary-300), black 30%);
  --palette-tertiary-700:  color-mix(in srgb, var(--palette-tertiary-300), black 40%);
  --palette-tertiary-800:  color-mix(in srgb, var(--palette-tertiary-300), black 50%);
  --palette-tertiary-900:  color-mix(in srgb, var(--palette-tertiary-300), black 60%);
  --palette-tertiary-1000: color-mix(in srgb, var(--palette-tertiary-300), black 70%);

  /* ── Base / Neutral ──────────────────────────────── */
  --palette-base-0:    rgba(255, 255, 255, 1);
  --palette-base-50:   rgba(251, 251, 251, 1);
  --palette-base-100:  rgba(245, 245, 245, 1);
  --palette-base-200:  rgba(230, 231, 231, 1);
  --palette-base-300:  rgba(216, 217, 217, 1);
  --palette-base-400:  rgba(123, 132, 132, 1);
  --palette-base-500:  rgba(75, 79, 79, 1);
  --palette-base-600:  rgba(34, 38, 38, 1);
  --palette-base-700:  rgba(24, 28, 28, 1);
  --palette-base-800:  rgba(14, 18, 18, 1);
  --palette-base-900:  rgba(0, 12, 11, 1);
  --palette-base-1000: rgba(0, 0, 0, 1);

  /* ── Success ─────────────────────────────────────── */
  --palette-success-100:  rgba(247, 255, 230, 1);
  --palette-success-200:  rgba(210, 242, 155, 1);
  --palette-success-300:  rgba(182, 230, 110, 1);
  --palette-success-400:  rgba(153, 217, 69, 1);
  --palette-success-500:  rgba(124, 204, 33, 1);
  --palette-success-600:  rgba(96, 192, 0, 1);
  --palette-success-700:  rgba(71, 153, 0, 1);
  --palette-success-800:  rgba(50, 115, 0, 1);
  --palette-success-900:  rgba(31, 77, 0, 1);
  --palette-success-1000: rgba(14, 38, 0, 1);

  /* ── Error ───────────────────────────────────────── */
  --palette-error-50:   rgba(255, 242, 242, 1);
  --palette-error-100:  rgba(254, 202, 202, 1);
  --palette-error-200:  color-mix(in srgb, var(--palette-error-300), white 10%);
  --palette-error-300:  rgba(218, 33, 33, 1);
  --palette-error-400:  rgba(191, 0, 13, 1);
  --palette-error-500:  color-mix(in srgb, var(--palette-error-400), black 10%);
  --palette-error-600:  color-mix(in srgb, var(--palette-error-400), black 20%);
  --palette-error-700:  color-mix(in srgb, var(--palette-error-400), black 30%);
  --palette-error-800:  color-mix(in srgb, var(--palette-error-400), black 40%);
  --palette-error-900:  color-mix(in srgb, var(--palette-error-400), black 50%);
  --palette-error-1000: color-mix(in srgb, var(--palette-error-400), black 60%);

  /* ── Warning ─────────────────────────────────────── */
  --palette-warning-50:   rgba(254, 227, 173, 1);
  --palette-warning-100:  rgba(254, 227, 173, 1);
  --palette-warning-200:  color-mix(in srgb, var(--palette-warning-300), white 10%);
  --palette-warning-300:  rgba(240, 151, 0, 1);
  --palette-warning-400:  rgba(204, 102, 0, 1);
  --palette-warning-500:  color-mix(in srgb, var(--palette-warning-400), black 10%);
  --palette-warning-600:  color-mix(in srgb, var(--palette-warning-400), black 20%);
  --palette-warning-700:  color-mix(in srgb, var(--palette-warning-400), black 30%);
  --palette-warning-800:  color-mix(in srgb, var(--palette-warning-400), black 40%);
  --palette-warning-900:  color-mix(in srgb, var(--palette-warning-400), black 50%);
  --palette-warning-1000: color-mix(in srgb, var(--palette-warning-400), black 60%);

  /* ── Info ────────────────────────────────────────── */
  --palette-info-100:  rgba(232, 253, 255, 1);
  --palette-info-200:  rgba(191, 249, 255, 1);
  --palette-info-300:  rgba(150, 241, 255, 1);
  --palette-info-400:  rgba(110, 231, 255, 1);
  --palette-info-500:  rgba(69, 218, 255, 1);
  --palette-info-600:  rgba(27, 200, 255, 1);
  --palette-info-700:  rgba(13, 162, 217, 1);
  --palette-info-800:  rgba(2, 125, 179, 1);
  --palette-info-900:  rgba(0, 94, 140, 1);
  --palette-info-1000: rgba(0, 65, 102, 1);
}
```

**Step 2: Verify creation**

Run: `wc -l src/styles/brand.css`
Expected: ~90 lines

**Step 3: Commit**

```bash
mkdir -p src/styles/themes src/styles/platforms
git add src/styles/brand.css
git commit -m "feat(tokens): add brand.css — semantic-agnostic palette"
```

---

### Task 2: Create `src/styles/font.css`

**Files:**
- Create: `src/styles/font.css`

**Step 1: Create the file**

```css
/* src/styles/font.css
   Font families, sizes, and line-heights.
   Three font roles all point to Roboto for now — swap independently later.
   Line-height name matches font-size name; each value = font-size + 2px.
*/
:root {
  /* ── Font families ────────────────────────────────── */
  --font-family-primary:   "Roboto", sans-serif;
  --font-family-secondary: "Roboto", sans-serif;
  --font-family-tertiary:  "Roboto", sans-serif;

  /* ── Font sizes ───────────────────────────────────── */
  --font-size-xs:  0.625rem;  /*  10px */
  --font-size-sm:  0.75rem;   /*  12px */
  --font-size-md:  0.875rem;  /*  14px */
  --font-size-lg:  1rem;      /*  16px */
  --font-size-xl:  1.25rem;   /*  20px */
  --font-size-2xl: 1.5rem;    /*  24px */
  --font-size-3xl: 2rem;      /*  32px */
  --font-size-4xl: 2.5rem;    /*  40px */
  --font-size-5xl: 3rem;      /*  48px */
  --font-size-6xl: 3.75rem;   /*  60px */

  /* ── Line heights (= font-size + 2px) ────────────── */
  --line-height-xs:  0.75rem;    /*  12px = 10 + 2 */
  --line-height-sm:  0.875rem;   /*  14px = 12 + 2 */
  --line-height-md:  1rem;       /*  16px = 14 + 2 */
  --line-height-lg:  1.125rem;   /*  18px = 16 + 2 */
  --line-height-xl:  1.375rem;   /*  22px = 20 + 2 */
  --line-height-2xl: 1.625rem;   /*  26px = 24 + 2 */
  --line-height-3xl: 2.125rem;   /*  34px = 32 + 2 */
  --line-height-4xl: 2.625rem;   /*  42px = 40 + 2 */
  --line-height-5xl: 3.125rem;   /*  50px = 48 + 2 */
  --line-height-6xl: 3.875rem;   /*  62px = 60 + 2 */
}

html {
  font-size: 16px;
  font-family: var(--font-family-primary);
}
```

**Step 2: Commit**

```bash
git add src/styles/font.css
git commit -m "feat(tokens): add font.css — font families, sizes, line-heights"
```

---

### Task 3: Create `src/styles/themes/light.css`

**Files:**
- Create: `src/styles/themes/light.css`

**Step 1: Create the file**

```css
/* src/styles/themes/light.css
   All semantic color tokens for light mode.
   Components reference these directly — no per-component color vars.
   Note: --color-status-* includes -surface (bg) and -border variants
         to cover alert, badge, and other status-aware components.
*/
:root[data-theme="light"] {
  /* ── Surface ──────────────────────────────────────── */
  --color-surface:          var(--palette-base-0);
  --color-surface-raised:   var(--palette-base-50);
  --color-surface-overlay:  var(--palette-base-100);
  --color-surface-sunken:   var(--palette-base-200);
  --color-surface-inverse:  var(--palette-base-800);

  /* ── Text ─────────────────────────────────────────── */
  --color-text-primary:        var(--palette-base-800);
  --color-text-secondary:      var(--palette-base-600);
  --color-text-tertiary:       var(--palette-base-400);
  --color-text-disabled:       var(--palette-base-300);
  --color-text-inverse:        var(--palette-base-0);
  --color-text-on-action:      var(--palette-base-0);
  --color-text-link:           var(--palette-primary-600);
  --color-text-link-hover:     var(--palette-primary-800);
  --color-text-link-visited:   var(--palette-primary-1000);

  /* ── Border ───────────────────────────────────────── */
  --color-border-default: rgba(0, 0, 0, 0.12);
  --color-border-strong:  var(--palette-base-300);
  --color-border-focus:   var(--palette-primary-600);
  --color-border-error:   var(--palette-error-600);
  --color-border-success: var(--palette-success-700);

  /* ── Action — primary ────────────────────────────── */
  --color-action-rest:                var(--palette-primary-700);
  --color-action-hover:               var(--palette-primary-600);
  --color-action-active:              var(--palette-primary-800);
  --color-action-disabled:            var(--palette-base-300);
  --color-action-foreground:          var(--palette-base-0);
  --color-action-foreground-disabled: var(--palette-base-400);

  /* ── Action — secondary ──────────────────────────── */
  --color-action-secondary-rest:       var(--palette-secondary-600);
  --color-action-secondary-hover:      var(--palette-secondary-700);
  --color-action-secondary-active:     var(--palette-secondary-800);
  --color-action-secondary-foreground: var(--palette-base-100);

  /* ── Action — subtle (ghost/tertiary) ─────────────── */
  --color-action-subtle-rest:       var(--palette-base-200);
  --color-action-subtle-hover:      var(--palette-base-200);
  --color-action-subtle-active:     var(--palette-base-300);
  --color-action-subtle-foreground: var(--palette-base-500);
  --color-action-subtle-border:     var(--palette-base-400);

  /* ── Action — outlined ───────────────────────────── */
  --color-action-outlined-bg:         var(--palette-base-0);
  --color-action-outlined-bg-hover:   var(--palette-base-100);
  --color-action-outlined-border:     var(--palette-base-300);
  --color-action-outlined-foreground: var(--palette-base-900);

  /* ── Action — transparent ────────────────────────── */
  --color-action-transparent-foreground:          var(--palette-base-1000);
  --color-action-transparent-foreground-hover:    var(--palette-base-800);
  --color-action-transparent-foreground-disabled: var(--palette-base-500);

  /* ── Control (checkbox, radio, switch) ─────────────── */
  --color-control-track:          var(--palette-base-200);
  --color-control-track-hover:    var(--palette-primary-500);
  --color-control-checked:        var(--palette-primary-600);
  --color-control-checked-hover:  var(--palette-primary-500);
  --color-control-thumb:          var(--palette-base-0);
  --color-control-outline:        var(--palette-base-600);
  --color-control-outline-hover:  var(--palette-base-700);
  --color-control-outline-focus:  var(--palette-primary-600);

  /* ── Input ────────────────────────────────────────── */
  --color-input-bg:               var(--palette-base-0);
  --color-input-bg-disabled:      var(--palette-base-100);
  --color-input-border:           rgba(0, 0, 0, 0.12);
  --color-input-border-hover:     var(--palette-base-200);
  --color-input-border-focus:     var(--palette-primary-600);
  --color-input-text:             var(--palette-base-400);
  --color-input-text-hover:       var(--palette-base-800);
  --color-input-placeholder:      var(--palette-base-300);
  --color-input-placeholder-hover: var(--palette-base-400);
  --color-input-label:            var(--palette-base-1000);
  --color-input-assistive:        var(--palette-base-1000);

  /* ── Status ───────────────────────────────────────── */
  --color-status-error:            var(--palette-error-800);
  --color-status-error-surface:    var(--palette-error-100);
  --color-status-error-border:     var(--palette-error-400);
  --color-status-success:          var(--palette-success-800);
  --color-status-success-surface:  var(--palette-success-100);
  --color-status-success-border:   var(--palette-success-400);
  --color-status-warning:          var(--palette-warning-800);
  --color-status-warning-surface:  var(--palette-warning-100);
  --color-status-warning-border:   var(--palette-warning-400);
  --color-status-info:             var(--palette-info-800);
  --color-status-info-surface:     var(--palette-info-100);
  --color-status-info-border:      var(--palette-info-400);

  /* ── Divider ──────────────────────────────────────── */
  --color-divider-subtle: var(--palette-base-400);
  --color-divider-strong: var(--palette-base-600);

  /* ── Overlay / Focus / Card shadow ─────────────────── */
  --color-overlay:  rgba(0, 0, 0, 0.4);
  --color-focus-ring: var(--palette-primary-700);
  --shadow-card:
    0px 0px 1px rgba(68, 80, 95, 0.08),
    0px 1px 4px rgba(68, 80, 95, 0.2);
}
```

**Step 2: Commit**

```bash
git add src/styles/themes/light.css
git commit -m "feat(tokens): add themes/light.css — semantic color tokens"
```

---

### Task 4: Create `src/styles/themes/dark.css`

**Files:**
- Create: `src/styles/themes/dark.css`

**Step 1: Create the file**

Use `src/styles/theme/dark.css` as reference for dark-mode palette values. Same token names as `light.css`, dark values:

```css
/* src/styles/themes/dark.css
   All semantic color tokens for dark mode.
   Token names are identical to light.css — only values differ.
*/
:root[data-theme="dark"] {
  /* ── Surface ──────────────────────────────────────── */
  --color-surface:          var(--palette-base-800);
  --color-surface-raised:   var(--palette-base-700);
  --color-surface-overlay:  var(--palette-base-600);
  --color-surface-sunken:   var(--palette-base-900);
  --color-surface-inverse:  var(--palette-base-0);

  /* ── Text ─────────────────────────────────────────── */
  --color-text-primary:        var(--palette-base-100);
  --color-text-secondary:      var(--palette-base-300);
  --color-text-tertiary:       var(--palette-base-500);
  --color-text-disabled:       var(--palette-base-700);
  --color-text-inverse:        var(--palette-base-1000);
  --color-text-on-action:      var(--palette-base-800);
  --color-text-link:           var(--palette-primary-400);
  --color-text-link-hover:     var(--palette-primary-200);
  --color-text-link-visited:   var(--palette-primary-100);

  /* ── Border ───────────────────────────────────────── */
  --color-border-default: var(--palette-base-500);
  --color-border-strong:  var(--palette-base-400);
  --color-border-focus:   var(--palette-primary-500);
  --color-border-error:   var(--palette-error-400);
  --color-border-success: var(--palette-success-700);

  /* ── Action — primary ────────────────────────────── */
  --color-action-rest:                var(--palette-primary-100);
  --color-action-hover:               var(--palette-primary-200);
  --color-action-active:              var(--palette-primary-100);
  --color-action-disabled:            var(--palette-base-300);
  --color-action-foreground:          var(--palette-base-800);
  --color-action-foreground-disabled: var(--palette-base-600);

  /* ── Action — secondary ──────────────────────────── */
  --color-action-secondary-rest:       var(--palette-primary-600);
  --color-action-secondary-hover:      var(--palette-primary-700);
  --color-action-secondary-active:     var(--palette-secondary-800);
  --color-action-secondary-foreground: var(--palette-base-100);

  /* ── Action — subtle ─────────────────────────────── */
  --color-action-subtle-rest:       var(--palette-base-200);
  --color-action-subtle-hover:      var(--palette-base-200);
  --color-action-subtle-active:     var(--palette-base-300);
  --color-action-subtle-foreground: var(--palette-base-500);
  --color-action-subtle-border:     var(--palette-base-400);

  /* ── Action — outlined ───────────────────────────── */
  --color-action-outlined-bg:         var(--palette-base-800);
  --color-action-outlined-bg-hover:   var(--palette-base-700);
  --color-action-outlined-border:     var(--palette-base-500);
  --color-action-outlined-foreground: var(--palette-base-100);

  /* ── Action — transparent ────────────────────────── */
  --color-action-transparent-foreground:          var(--palette-base-100);
  --color-action-transparent-foreground-hover:    var(--palette-base-300);
  --color-action-transparent-foreground-disabled: var(--palette-base-700);

  /* ── Control ──────────────────────────────────────── */
  --color-control-track:          var(--palette-base-200);
  --color-control-track-hover:    var(--palette-primary-500);
  --color-control-checked:        var(--palette-primary-600);
  --color-control-checked-hover:  var(--palette-primary-500);
  --color-control-thumb:          var(--palette-base-0);
  --color-control-outline:        var(--palette-base-600);
  --color-control-outline-hover:  var(--palette-base-700);
  --color-control-outline-focus:  var(--palette-primary-600);

  /* ── Input ────────────────────────────────────────── */
  --color-input-bg:               var(--palette-base-800);
  --color-input-bg-disabled:      var(--palette-base-700);
  --color-input-border:           var(--palette-base-500);
  --color-input-border-hover:     var(--palette-base-400);
  --color-input-border-focus:     var(--palette-primary-500);
  --color-input-text:             var(--palette-base-300);
  --color-input-text-hover:       var(--palette-base-100);
  --color-input-placeholder:      var(--palette-base-500);
  --color-input-placeholder-hover: var(--palette-base-300);
  --color-input-label:            var(--palette-base-300);
  --color-input-assistive:        var(--palette-base-100);

  /* ── Status ───────────────────────────────────────── */
  --color-status-error:            var(--palette-error-400);
  --color-status-error-surface:    var(--palette-error-100);
  --color-status-error-border:     var(--palette-error-400);
  --color-status-success:          var(--palette-success-700);
  --color-status-success-surface:  var(--palette-success-100);
  --color-status-success-border:   var(--palette-success-400);
  --color-status-warning:          var(--palette-warning-400);
  --color-status-warning-surface:  var(--palette-warning-100);
  --color-status-warning-border:   var(--palette-warning-400);
  --color-status-info:             var(--palette-info-800);
  --color-status-info-surface:     var(--palette-info-100);
  --color-status-info-border:      var(--palette-info-400);

  /* ── Divider ──────────────────────────────────────── */
  --color-divider-subtle: var(--palette-base-500);
  --color-divider-strong: var(--palette-base-300);

  /* ── Overlay / Focus / Card shadow ─────────────────── */
  --color-overlay:    rgba(0, 0, 0, 0.6);
  --color-focus-ring: var(--palette-primary-500);
  --shadow-card:
    0px 0px 1px rgba(0, 0, 0, 0.3),
    0px 1px 4px rgba(0, 0, 0, 0.5);
}
```

**Step 2: Commit**

```bash
git add src/styles/themes/dark.css
git commit -m "feat(tokens): add themes/dark.css — semantic color tokens"
```

---

### Task 5: Create platform token files

**Files:**
- Create: `src/styles/platforms/web.css`
- Create: `src/styles/platforms/tablet.css`
- Create: `src/styles/platforms/mobile.css`

**Step 1: Create `platforms/web.css`**

```css
/* src/styles/platforms/web.css — Desktop web
   Semantic size/spacing/radius/shadow/size tokens.
   Wide spectrum intentionally: unused steps exist for future use.
   tablet.css and mobile.css carry the same token names (different layout padding).
*/
:root[data-platform="web"] {

  /* ── Spacing ──────────────────────────────────────── */
  --space-1:  0.125rem;  /*  2px */
  --space-2:  0.25rem;   /*  4px */
  --space-3:  0.375rem;  /*  6px */
  --space-4:  0.5rem;    /*  8px */
  --space-5:  0.625rem;  /* 10px */
  --space-6:  0.75rem;   /* 12px */
  --space-8:  1rem;      /* 16px */
  --space-10: 1.25rem;   /* 20px */
  --space-12: 1.5rem;    /* 24px */
  --space-14: 1.75rem;   /* 28px */
  --space-16: 2rem;      /* 32px */
  --space-20: 2.5rem;    /* 40px */
  --space-24: 3rem;      /* 48px */
  --space-32: 4rem;      /* 64px */
  --space-36: 4.5rem;    /* 72px */
  --space-48: 6rem;      /* 96px */
  --space-56: 7rem;      /* 112px */
  --space-64: 8rem;      /* 128px */

  /* ── Border radius ────────────────────────────────── */
  --radius-1:    0.125rem;
  --radius-2:    0.25rem;
  --radius-3:    0.375rem;
  --radius-4:    0.5rem;
  --radius-5:    0.625rem;
  --radius-6:    0.75rem;
  --radius-8:    1rem;
  --radius-10:   1.25rem;
  --radius-12:   1.5rem;
  --radius-16:   2rem;
  --radius-18:   2.25rem;
  --radius-24:   3rem;
  --radius-28:   3.5rem;
  --radius-32:   4rem;
  --radius-full: 9999px;

  /* ── Shadows ──────────────────────────────────────── */
  --shadow-xs: 0px 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-sm: 0px 1px 4px rgba(68, 80, 95, 0.12);
  --shadow-md: 0px 0px 1px rgba(68, 80, 95, 0.08), 0px 1px 4px rgba(68, 80, 95, 0.2);
  --shadow-lg: 0px 4px 8px rgba(68, 80, 95, 0.16), 0px 2px 4px rgba(68, 80, 95, 0.08);
  --shadow-xl: 0px 8px 24px rgba(68, 80, 95, 0.2);

  /* ── Sizes ────────────────────────────────────────── */
  --size-4:  0.5rem;
  --size-5:  0.625rem;
  --size-6:  0.75rem;
  --size-8:  1rem;
  --size-10: 1.25rem;
  --size-12: 1.5rem;
  --size-16: 2rem;
  --size-20: 2.5rem;
  --size-24: 3rem;
  --size-32: 4rem;
  --size-36: 4.5rem;
  --size-48: 6rem;
  --size-56: 7rem;
  --size-64: 8rem;

  /* ── Layout ───────────────────────────────────────── */
  --layout-screen-padding-h: var(--space-24); /* 48px */
}
```

**Step 2: Create `platforms/tablet.css`**

Copy the full content of `web.css`, change the selector to `:root[data-platform="tablet"]`, and change only:

```css
--layout-screen-padding-h: var(--space-12); /* 24px */
```

**Step 3: Create `platforms/mobile.css`**

Same as above but `:root[data-platform="mobile"]` and:

```css
--layout-screen-padding-h: var(--space-8); /* 16px */
```

**Step 4: Commit**

```bash
git add src/styles/platforms/
git commit -m "feat(tokens): add platform token files — web, tablet, mobile"
```

---

### Task 6: Update `src/styles/index.css`

**Files:**
- Modify: `src/styles/index.css`

**Step 1: Replace file contents**

Old:
```css
@import "./brand/fonts.css";
@import "./brand/words-control.css";
@import "./theme/light.css";
@import "./theme/dark.css";
@import "./platform/ios.css";
@import "./platform/android.css";
@import "./platform/webmobile.css";
@import "./platform/webtablet.css";
@import "./platform/webdesktop.css";
```

New:
```css
@import "./brand.css";
@import "./font.css";
@import "./themes/light.css";
@import "./themes/dark.css";
@import "./platforms/web.css";
@import "./platforms/tablet.css";
@import "./platforms/mobile.css";
```

**Step 2: Check Storybook still builds**

Run: `npm run build:storybook 2>&1 | tail -5`
Expected: `Build succeeded.`

> Note: Components still reference old vars at this point — they'll appear unstyled in Storybook. That's fine; we fix them in Tasks 7–16.

**Step 3: Commit**

```bash
git add src/styles/index.css
git commit -m "feat(tokens): update index.css — import new brand/font/theme/platform files"
```

---

### Task 7: Migrate MAlert

**Files:**
- Modify: `src/atoms/MAlert/MAlert.vars.css`
- Modify: `src/atoms/MAlert/MAlert.module.css`

**Step 1: Read both files**

```bash
cat src/atoms/MAlert/MAlert.vars.css
cat src/atoms/MAlert/MAlert.module.css
```

**Step 2: Replace MAlert.vars.css with empty file**

```css
/* MAlert.vars.css — all tokens migrated to semantic layer */
```

**Step 3: Update MAlert.module.css** using this mapping:

| Old var | New token |
|---|---|
| `var(--alert-padding-vertical)` | `var(--space-4)` |
| `var(--alert-padding-horizontal)` | `var(--space-8)` |
| `var(--alert-border-radius)` | `var(--radius-8)` |
| `var(--alert-border-color-info)` | `var(--color-status-info-border)` |
| `var(--alert-background-color-info)` | `var(--color-status-info-surface)` |
| `var(--alert-color-info)` | `var(--color-status-info)` |
| `var(--alert-border-color-warning)` | `var(--color-status-warning-border)` |
| `var(--alert-background-color-warning)` | `var(--color-status-warning-surface)` |
| `var(--alert-color-warning)` | `var(--color-status-warning)` |
| `var(--alert-border-color-error)` | `var(--color-status-error-border)` |
| `var(--alert-background-color-error)` | `var(--color-status-error-surface)` |
| `var(--alert-color-error)` | `var(--color-status-error)` |
| `var(--alert-border-color-success)` | `var(--color-status-success-border)` |
| `var(--alert-background-color-success)` | `var(--color-status-success-surface)` |
| `var(--alert-color-success)` | `var(--color-status-success)` |

**Step 4: Verify MAlert story looks correct in Storybook**

Run: `npm run storybook`
Open `http://localhost:6006`, find MAlert stories, check info/warning/error/success variants in both themes.

**Step 5: Commit**

```bash
git add src/atoms/MAlert/
git commit -m "feat(tokens): migrate MAlert to semantic tokens"
```

---

### Task 8: Migrate MBadge

**Files:**
- Modify: `src/atoms/MBadge/MBadge.vars.css`
- Modify: `src/atoms/MBadge/MBadge.module.css`

**Context:** MBadge currently cross-references MAlert vars (`--alert-background-color-info`, etc.). Both now share `--color-status-*` — the cross-dependency disappears.

**Step 1: Read both files**

```bash
cat src/atoms/MBadge/MBadge.vars.css
cat src/atoms/MBadge/MBadge.module.css
```

**Step 2: Clear MBadge.vars.css**

```css
/* MBadge.vars.css — all tokens migrated to semantic layer */
```

**Step 3: Update MBadge.module.css** using this mapping:

| Old var | New token |
|---|---|
| `var(--alert-background-color-info)` | `var(--color-status-info-surface)` |
| `var(--alert-border-color-info)` | `var(--color-status-info-border)` |
| `var(--alert-background-color-warning)` | `var(--color-status-warning-surface)` |
| `var(--alert-border-color-warning)` | `var(--color-status-warning-border)` |
| `var(--alert-background-color-error)` | `var(--color-status-error-surface)` |
| `var(--alert-border-color-error)` | `var(--color-status-error-border)` |
| `var(--alert-background-color-success)` | `var(--color-status-success-surface)` |
| `var(--alert-border-color-success)` | `var(--color-status-success-border)` |
| `var(--badge-primary-background-color)` | `var(--color-action-subtle-foreground)` |
| `var(--badge-primary-font-color)` | `var(--color-text-inverse)` |

**Step 4: Commit**

```bash
git add src/atoms/MBadge/
git commit -m "feat(tokens): migrate MBadge to semantic tokens"
```

---

### Task 9: Migrate MButton

**Files:**
- Modify: `src/atoms/MButton/MButton.vars.css`
- Modify: `src/atoms/MButton/MButton.module.css`

**Step 1: Read both files**

```bash
cat src/atoms/MButton/MButton.vars.css
cat src/atoms/MButton/MButton.module.css
```

**Step 2: Clear MButton.vars.css entirely**

```css
/* MButton.vars.css — all tokens migrated to semantic layer */
```

**Step 3: Update MButton.module.css** using this mapping:

| Old var | New token |
|---|---|
| `var(--button-font-size-default)` | `var(--font-size-lg)` |
| `var(--button-font-size-medium)` | `var(--font-size-md)` |
| `var(--button-font-size-small)` | `var(--font-size-sm)` |
| `var(--button-font-size-xl)` | `var(--font-size-xl)` |
| `var(--button-primary-medium-whiteSpace-padding-horizontal)` | `var(--space-8)` |
| `var(--button-primary-medium-whiteSpace-padding-vertical)` | `var(--space-6)` |
| `var(--button-primary-medium-whiteSpace-gap)` | `var(--space-4)` |
| `var(--button-primary-medium-borderRadius)` | `var(--radius-8)` |
| `var(--button-secondary-medium-whiteSpace-padding-horizontal)` | `var(--space-8)` |
| `var(--button-secondary-medium-whiteSpace-padding-vertical)` | `var(--space-6)` |
| `var(--button-secondary-medium-whiteSpace-gap)` | `var(--space-4)` |
| `var(--button-secondary-medium-borderRadius)` | `var(--radius-8)` |
| `var(--button-tertiary-medium-borderRadius)` | `var(--radius-8)` |
| `var(--button-tertiary-medium-whiteSpace-gap)` | `var(--space-4)` |
| `var(--button-outlined-medium-borderRadius)` | `var(--radius-4)` |
| `var(--button-outlined-medium-whiteSpace-padding-horizontal)` | `var(--space-8)` |
| `var(--button-outlined-medium-whiteSpace-padding-vertical)` | `var(--space-6)` |
| `var(--button-outlined-medium-whiteSpace-gap)` | `var(--space-4)` |
| `var(--button-transparent-medium-borderRadius)` | `var(--radius-8)` |
| `var(--button-transparent-medium-whiteSpace-gap)` | `var(--space-4)` |
| `var(--button-round-size-default)` | `var(--size-16)` |
| `var(--button-round-size-large)` | `var(--size-24)` |
| `var(--button-primary-enabled-background-color)` | `var(--color-action-rest)` |
| `var(--button-primary-hover-background-color)` | `var(--color-action-hover)` |
| `var(--button-primary-active-background-color)` | `var(--color-action-active)` |
| `var(--button-primary-disabled-background-color)` | `var(--color-action-disabled)` |
| `var(--button-primary-enabled-font-color)` | `var(--color-action-foreground)` |
| `var(--button-primary-hover-font-color)` | `var(--color-action-foreground)` |
| `var(--button-primary-active-font-color)` | `var(--color-action-foreground)` |
| `var(--button-primary-disabled-font-color)` | `var(--color-action-foreground-disabled)` |
| `var(--button-secondary-enabled-background-color)` | `var(--color-action-secondary-rest)` |
| `var(--button-secondary-hover-background-color)` | `var(--color-action-secondary-hover)` |
| `var(--button-secondary-active-background-color)` | `var(--color-action-secondary-active)` |
| `var(--button-secondary-enabled-font-color)` | `var(--color-action-secondary-foreground)` |
| `var(--button-secondary-disabled-background-color)` | `var(--color-action-disabled)` |
| `var(--button-secondary-disabled-font-color)` | `var(--color-action-foreground-disabled)` |
| `var(--button-tertiary-enabled-background-color)` | `var(--color-action-subtle-rest)` |
| `var(--button-tertiary-hover-background-color)` | `var(--color-action-subtle-hover)` |
| `var(--button-tertiary-active-background-color)` | `var(--color-action-subtle-active)` |
| `var(--button-tertiary-enabled-font-color)` | `var(--color-action-subtle-foreground)` |
| `var(--button-tertiary-disabled-font-color)` | `var(--color-action-foreground-disabled)` |
| `var(--button-tertiary-border-default-color)` | `var(--color-action-subtle-border)` |
| `var(--button-tertiary-border-hover-color)` | `var(--color-action-subtle-border)` |
| `var(--button-round-enabled-background-color)` | `var(--color-action-subtle-rest)` |
| `var(--button-round-hover-background-color)` | `var(--color-action-subtle-hover)` |
| `var(--button-round-active-background-color)` | `var(--color-action-subtle-active)` |
| `var(--button-round-enabled-font-color)` | `var(--color-text-primary)` |
| `var(--button-round-disabled-font-color)` | `var(--color-action-foreground-disabled)` |
| `var(--button-round-border-default-color)` | `transparent` |
| `var(--button-outlined-enabled-background-color)` | `var(--color-action-outlined-bg)` |
| `var(--button-outlined-hover-background-color)` | `var(--color-action-outlined-bg-hover)` |
| `var(--button-outlined-enabled-border-color)` | `var(--color-action-outlined-border)` |
| `var(--button-outlined-enabled-font-color)` | `var(--color-action-outlined-foreground)` |
| `var(--button-outlined-disabled-background-color)` | `var(--color-action-disabled)` |
| `var(--button-outlined-disabled-font-color)` | `var(--color-action-foreground-disabled)` |
| `var(--button-transparent-enabled-font-color)` | `var(--color-action-transparent-foreground)` |
| `var(--button-transparent-hover-font-color)` | `var(--color-action-transparent-foreground-hover)` |
| `var(--button-transparent-active-font-color)` | `var(--color-action-transparent-foreground)` |
| `var(--button-transparent-disabled-font-color)` | `var(--color-action-transparent-foreground-disabled)` |

**Step 4: Commit**

```bash
git add src/atoms/MButton/
git commit -m "feat(tokens): migrate MButton to semantic tokens"
```

---

### Task 10: Migrate MInput + MTextarea

**Files:**
- Modify: `src/atoms/MInput/MInput.vars.css`
- Modify: `src/atoms/MInput/MInput.module.css`
- Modify: `src/atoms/MTextarea/MTextarea.vars.css`
- Modify: `src/atoms/MTextarea/MTextarea.module.css`

**Step 1: Read all four files**

```bash
cat src/atoms/MInput/MInput.vars.css
cat src/atoms/MInput/MInput.module.css
cat src/atoms/MTextarea/MTextarea.vars.css
cat src/atoms/MTextarea/MTextarea.module.css
```

**Step 2: Clear MInput.vars.css**

```css
/* MInput.vars.css — all tokens migrated to semantic layer */
```

**Step 3: Update MInput.module.css**

| Old var | New token |
|---|---|
| `var(--input-field-whiteSpace-field-gap)` | `var(--space-4)` |
| `var(--input-field-whiteSpace-label-gap)` | `var(--space-4)` |
| `var(--input-field-whiteSpace-caption-gap)` | `var(--space-4)` |
| `var(--input-field-whiteSpace-assistive-gap)` | `var(--space-4)` |
| `var(--input-field-whiteSpace-field-padding-horizontal)` | See note below |
| `var(--input-field-whiteSpace-field-padding-vertical)` | See note below |
| `var(--input-field-borderRadius-default)` | See note below |
| `var(--input-field-enabled-background-color)` | `var(--color-input-bg)` |
| `var(--input-field-disabled-background-color)` | `var(--color-input-bg-disabled)` |
| `var(--input-field-enabled-border-color)` | `var(--color-input-border)` |
| `var(--input-field-hover-border-color)` | `var(--color-input-border-hover)` |
| `var(--input-field-focus-border-color)` | `var(--color-input-border-focus)` |
| `var(--input-field-active-border-color)` | `var(--color-input-border-hover)` |
| `var(--input-field-enabled-font-color)` | `var(--color-input-text)` |
| `var(--input-field-hover-font-color)` | `var(--color-input-text-hover)` |
| `var(--input-field-active-font-color)` | `var(--color-input-text-hover)` |
| `var(--input-field-focus-font-color)` | `var(--color-input-text)` |
| `var(--input-field-enabled-placeholder)` | `var(--color-input-placeholder)` |
| `var(--input-field-hover-placeholder)` | `var(--color-input-placeholder-hover)` |
| `var(--input-field-enabled-label-font-color)` | `var(--color-input-label)` |
| `var(--input-field-enabled-assistive-font-color)` | `var(--color-input-assistive)` |
| `var(--input-field-invalid-border-color)` | `var(--color-border-error)` |
| `var(--input-field-invalid-font-color)` | `var(--color-status-error)` |
| `var(--input-field-invalid-assistive-font-color)` | `var(--color-status-error)` |
| `var(--input-field-valid-border-color)` | `var(--color-border-success)` |

> **Platform-specific padding note:** The old `.vars.css` had different padding/radius for desktop vs mobile/tablet. Handle this directly in `.module.css` without going through vars:
> ```css
> .field {
>   padding: var(--space-4) var(--space-6);         /* web default */
>   border-radius: var(--radius-4);
> }
> :root[data-platform="mobile"] .field,
> :root[data-platform="tablet"] .field {
>   padding: var(--space-6) var(--space-8);
>   border-radius: var(--radius-8);
> }
> ```

**Step 4: Clear MTextarea.vars.css; update MTextarea.module.css** using the same input token mapping (MTextarea shares the same token names).

**Step 5: Commit**

```bash
git add src/atoms/MInput/ src/atoms/MTextarea/
git commit -m "feat(tokens): migrate MInput and MTextarea to semantic tokens"
```

---

### Task 11: Migrate MCheckbox + MRadio

**Files:**
- Delete: `src/atoms/MCheckbox/MCheckbox.vars.css` (only had `[data-theme]` blocks)
- Modify: `src/atoms/MCheckbox/MCheckbox.module.css`
- Delete: `src/atoms/MRadio/MRadio.vars.css` (same)
- Modify: `src/atoms/MRadio/MRadio.module.css`

**Step 1: Read all four files**

```bash
cat src/atoms/MCheckbox/MCheckbox.vars.css
cat src/atoms/MCheckbox/MCheckbox.module.css
cat src/atoms/MRadio/MRadio.vars.css
cat src/atoms/MRadio/MRadio.module.css
```

**Step 2: Update MCheckbox.module.css** using this mapping:

| Old var | New token |
|---|---|
| `var(--input-checkbox-unchecked-background-enabled)` | `var(--color-control-track)` |
| `var(--input-checkbox-unchecked-background-hover)` | `var(--color-control-track-hover)` |
| `var(--input-checkbox-unchecked-background-active)` | `var(--color-action-active)` |
| `var(--input-checkbox-unchecked-background-disabled)` | `var(--color-action-disabled)` |
| `var(--input-checkbox-unchecked-background-invalid)` | `var(--color-action-active)` |
| `var(--input-checkbox-checked-background-enabled)` | `var(--color-control-checked)` |
| `var(--input-checkbox-checked-background-hover)` | `var(--color-control-checked-hover)` |
| `var(--input-checkbox-checked-background-disabled)` | `var(--color-action-disabled)` |
| `var(--input-checkbox-indeterminate-background-enabled)` | `var(--color-control-checked)` |
| `var(--input-checkbox-indeterminate-background-hover)` | `var(--color-control-checked-hover)` |
| `var(--input-checkbox-*-icon-enabled)` | `var(--color-control-thumb)` |
| `var(--input-checkbox-*-icon-disabled)` | `var(--color-control-thumb)` |
| `var(--input-checkbox-unchecked-outline-enabled)` | `var(--color-control-outline)` |
| `var(--input-checkbox-unchecked-outline-hover)` | `var(--color-control-outline-hover)` |
| `var(--input-checkbox-unchecked-outline-active)` | `var(--color-control-outline-focus)` |
| `var(--input-checkbox-*-outline-invalid)` | `var(--color-border-error)` |
| `var(--input-checkbox-*-outline-disabled)` | `var(--color-text-disabled)` |
| `var(--input-checkbox-*-label-default)` | `var(--color-text-primary)` |
| `var(--input-checkbox-assistive-default)` | `var(--color-text-primary)` |
| `var(--input-checkbox-assistive-invalid)` | `var(--color-status-error)` |

**Step 3: Delete MCheckbox.vars.css** (it becomes empty after removal of all `[data-theme]` blocks)

```bash
rm src/atoms/MCheckbox/MCheckbox.vars.css
```

**Step 4: Update MRadio.module.css** using the same pattern (radio/checkbox share identical token semantics):

| Old var | New token |
|---|---|
| `var(--input-radio-unchecked-background-enabled)` | `var(--color-surface)` |
| `var(--input-radio-unchecked-background-hover)` | `var(--color-control-track)` |
| `var(--input-radio-unchecked-background-disabled)` | `var(--color-surface-overlay)` |
| `var(--input-radio-unchecked-outline-enabled)` | `var(--color-control-outline)` |
| `var(--input-radio-unchecked-outline-hover)` | `var(--color-control-outline-hover)` |
| `var(--input-radio-unchecked-outline-active)` | `var(--color-control-outline-focus)` |
| `var(--input-radio-unchecked-outline-invalid)` | `var(--color-border-error)` |
| `var(--input-radio-unchecked-outline-disabled)` | `var(--color-text-disabled)` |
| `var(--input-radio-checked-background-enabled)` | `var(--color-control-checked)` |
| `var(--input-radio-checked-background-hover)` | `var(--color-control-checked-hover)` |
| `var(--input-radio-checked-background-disabled)` | `var(--color-action-disabled)` |
| `var(--input-radio-checked-icon-enabled)` | `var(--color-control-thumb)` |
| `var(--input-radio-checked-outline-enabled)` | `var(--color-control-checked)` |
| `var(--input-radio-checked-label-default)` | `var(--color-text-primary)` |
| `var(--input-radio-assistive-default)` | `var(--color-text-primary)` |
| `var(--input-radio-assistive-invalid)` | `var(--color-status-error)` |

**Step 5: Delete MRadio.vars.css**

```bash
rm src/atoms/MRadio/MRadio.vars.css
```

**Step 6: Commit**

```bash
git add src/atoms/MCheckbox/ src/atoms/MRadio/
git commit -m "feat(tokens): migrate MCheckbox and MRadio to semantic tokens"
```

---

### Task 12: Migrate MCard

**Files:**
- Modify: `src/atoms/MCard/MCard.vars.css`
- Modify: `src/atoms/MCard/MCard.module.css`

**Context:** MCard.vars.css defines generic `--border-radius-*` tokens used by OTHER components (MSwitch). After this task, those tokens are gone — MSwitch will be fixed in Task 13.

**Step 1: Read both files**

```bash
cat src/atoms/MCard/MCard.vars.css
cat src/atoms/MCard/MCard.module.css
```

**Step 2: Clear MCard.vars.css**

```css
/* MCard.vars.css — all tokens migrated to semantic layer */
```

**Step 3: Update MCard.module.css** using this mapping:

| Old var | New token |
|---|---|
| `var(--border-radius-none)` | `0` |
| `var(--border-radius-xs)` | `var(--radius-2)` |
| `var(--border-radius-s)` | `var(--radius-4)` |
| `var(--border-radius-default)` | `var(--radius-8)` |
| `var(--border-radius-m)` | `var(--radius-8)` |
| `var(--border-radius-l)` | `var(--radius-12)` |
| `var(--border-radius-xl)` | `var(--radius-18)` |
| `var(--border-radius-2xl)` | `var(--radius-24)` |
| `var(--border-radius-3xl)` | `var(--radius-28)` |
| `var(--border-radius-4xl)` | `var(--radius-32)` |
| `var(--card-shadow)` | `var(--shadow-card)` |
| `var(--card-background)` | `var(--color-surface)` |
| `var(--card-padding-vertical)` | `var(--space-8)` |
| `var(--card-padding-horizontal)` | `var(--space-8)` |
| `var(--card-border-color)` | `var(--color-border-strong)` |

**Step 4: Commit**

```bash
git add src/atoms/MCard/
git commit -m "feat(tokens): migrate MCard to semantic tokens"
```

---

### Task 13: Migrate MSwitch

**Files:**
- Modify: `src/atoms/MSwitch/MSwitch.vars.css`
- Modify: `src/atoms/MSwitch/MSwitch.module.css`

**Context:** MSwitch.vars.css references `--border-radius-2xl` and `--border-radius-s` which were MCard generic vars. Those no longer exist. Replace directly.

**Step 1: Read both files**

```bash
cat src/atoms/MSwitch/MSwitch.vars.css
cat src/atoms/MSwitch/MSwitch.module.css
```

**Step 2: Clear MSwitch.vars.css**

```css
/* MSwitch.vars.css — all tokens migrated to semantic layer */
```

**Step 3: Update MSwitch.module.css** using this mapping:

| Old var | New token |
|---|---|
| `var(--input-checkbox-round-border-radius)` | `var(--radius-24)` |
| `var(--input-checkbox-rectangular-border-radius)` | `var(--radius-4)` |
| `var(--input-checkbox-marker-round-border-radius)` | `var(--radius-4)` |
| Track / checked state colors | `var(--color-control-checked)` |
| Track / default state | `var(--color-control-track)` |
| Thumb color | `var(--color-control-thumb)` |

**Step 4: Commit**

```bash
git add src/atoms/MSwitch/
git commit -m "feat(tokens): migrate MSwitch to semantic tokens"
```

---

### Task 14: Migrate typography atoms

**Files:**
- Modify: `src/atoms/MHeading/MHeading.vars.css` (empty — delete)
- Modify: `src/atoms/MHeading/MHeading.module.css`
- Modify: `src/atoms/MText/MText.vars.css` (empty — delete)
- Modify: `src/atoms/MText/MText.module.css`
- Modify: `src/atoms/MLabel/MLabel.vars.css` + `.module.css`
- Modify: `src/atoms/MCaption/MCaption.module.css`

**Step 1: Read all module.css files**

```bash
cat src/atoms/MHeading/MHeading.module.css
cat src/atoms/MText/MText.module.css
cat src/atoms/MLabel/MLabel.vars.css
cat src/atoms/MLabel/MLabel.module.css
cat src/atoms/MCaption/MCaption.module.css
```

**Step 2: Delete empty vars files**

```bash
rm src/atoms/MHeading/MHeading.vars.css
rm src/atoms/MText/MText.vars.css
```

**Step 3: Update each module.css** using these mappings:

| Old var | New token |
|---|---|
| `var(--typography-h*-font-color)` | `var(--color-text-primary)` |
| `var(--typography-body-font-color)` | `var(--color-text-primary)` |
| `var(--typography-caption-font-color)` | `var(--color-text-secondary)` |
| `var(--typography-link-enabled-font-color)` | `var(--color-text-link)` |
| `var(--typography-link-hover-font-color)` | `var(--color-text-link-hover)` |
| `var(--typography-link-visited-font-color)` | `var(--color-text-link-visited)` |
| `var(--font-size-s)` | `var(--font-size-sm)` |
| `var(--font-size-m)` | `var(--font-size-md)` |
| `var(--font-size-l)` | `var(--font-size-lg)` |
| `var(--text-primary)` / `var(--text-secondary)` | `var(--color-text-primary)` / `var(--color-text-secondary)` |

**Step 4: Commit**

```bash
git add src/atoms/MHeading/ src/atoms/MText/ src/atoms/MLabel/ src/atoms/MCaption/
git commit -m "feat(tokens): migrate typography atoms to semantic tokens"
```

---

### Task 15: Migrate remaining atoms (batch)

**Files:** All remaining atoms in `src/atoms/`

For each component, follow the standard Migration Pattern described at the top of this document. Use the token mapping Quick Reference table.

**Batch A — Layout / structural atoms**

```bash
# Read vars + module files:
cat src/atoms/MFlex/MFlex.vars.css src/atoms/MFlex/MFlex.module.css
cat src/atoms/MGrid/MGrid.vars.css src/atoms/MGrid/MGrid.module.css
cat src/atoms/MSkelleton/MSkelleton.vars.css src/atoms/MSkelleton/MSkelleton.module.css
cat src/atoms/MDivider/MDivider.vars.css src/atoms/MDivider/MDivider.module.css
cat src/atoms/MSpinner/MSpinner.vars.css src/atoms/MSpinner/MSpinner.module.css
```

Key mappings:
- MSkelleton: `--skelleton-min-size-*` → use `--space-*` directly (see spacing table)
  - `-xs`: `var(--space-2)`, `-s`: `var(--space-4)`, `-m`: `var(--space-6)`, `-l`: `var(--space-8)`, etc.
- MDivider: `--divider-color` → `var(--color-divider-subtle)`
- MDivider `--background-secondary` → `var(--color-divider-subtle)`

```bash
git add src/atoms/MFlex/ src/atoms/MGrid/ src/atoms/MSkelleton/ src/atoms/MDivider/ src/atoms/MSpinner/
git commit -m "feat(tokens): migrate layout/structural atoms to semantic tokens"
```

**Batch B — Avatar, form helpers**

```bash
cat src/atoms/MAvatar/MAvatar.vars.css src/atoms/MAvatar/MAvatar.module.css
cat src/atoms/MAvatar/MAvatarFallback.vars.css src/atoms/MAvatar/MAvatarFallback.module.css
cat src/atoms/MFormField/MFormField.module.css
cat src/atoms/MFieldDescription/MFieldDescription.module.css
cat src/atoms/MRequired/MRequired.module.css
```

Key mappings:
- Avatar background → `var(--color-surface-raised)`
- Avatar text → `var(--color-text-primary)`
- Form helpers text colors → `var(--color-text-secondary)`, `var(--color-status-error)` for invalid

```bash
git add src/atoms/MAvatar/ src/atoms/MFormField/ src/atoms/MFieldDescription/ src/atoms/MRequired/
git commit -m "feat(tokens): migrate avatar and form helper atoms"
```

**Batch C — List, tabs, select, dropdown**

```bash
cat src/atoms/MTabs/MTabs.vars.css src/atoms/MTabs/MTabs.module.css
cat src/atoms/MTab/MTab.vars.css src/atoms/MTab/MTab.module.css
cat src/atoms/MListItem/MListItem.vars.css src/atoms/MListItem/MListItem.module.css
cat src/atoms/MList/MList.module.css
cat src/atoms/MSelect/MSelect.module.css
cat src/atoms/MDropdown/MDropdown.vars.css src/atoms/MDropdown/MDropdown.module.css
```

Key mappings:
- Active/selected state backgrounds → `var(--color-action-rest)` or `var(--color-surface-raised)`
- Hover backgrounds → `var(--color-surface-overlay)`
- Text → `var(--color-text-primary)` / `var(--color-text-secondary)`
- Borders → `var(--color-border-default)`

```bash
git add src/atoms/MTabs/ src/atoms/MTab/ src/atoms/MListItem/ src/atoms/MList/ src/atoms/MSelect/ src/atoms/MDropdown/
git commit -m "feat(tokens): migrate list, tab, select, dropdown atoms"
```

**Batch D — Calendar, StepProgress, Gallery, FileInput, ExpandableText, DescriptionList**

```bash
cat src/atoms/MCalendar/MCalendar.vars.css src/atoms/MCalendar/MCalendar.module.css
cat src/atoms/MCalendar/MDaySelector/MDaySelector.vars.css
cat src/atoms/MCalendar/MDaySelector/MDaySelector.module.css
cat src/atoms/MCalendar/MWeekdays/MWeekdays.vars.css
cat src/atoms/MCalendar/MWeekdays/MWeekdays.module.css
# also read YearSelector, MonthSelector module.css (no vars)
cat src/atoms/MStepProgress/MStepProgress.vars.css src/atoms/MStepProgress/MStepProgress.module.css
cat src/atoms/MGallery/MGallery.vars.css src/atoms/MGallery/MGallery.module.css
cat src/atoms/MFileInput/MFileInput.vars.css src/atoms/MFileInput/MFileInput.module.css
cat src/atoms/MFileInput/modal/MFileInputModal.vars.css
cat src/atoms/MFileInput/modal/MFileInputModal.module.css
cat src/atoms/MExpandableText/MExpandableText.vars.css src/atoms/MExpandableText/MExpandableText.module.css
cat src/atoms/MDescriptionList/MDescriptionList.vars.css src/atoms/MDescriptionList/MDescriptionList.module.css
```

Key mappings:
- Calendar selected day → `var(--color-action-rest)`, foreground → `var(--color-action-foreground)`
- Calendar today highlight → `var(--color-action-hover)`
- Calendar hover → `var(--color-surface-overlay)`
- Step progress: active → `var(--color-action-rest)`, inactive → `var(--color-surface-sunken)`
- ExpandableText overlay → `var(--color-surface)`, button color → `var(--color-action-rest)`
- FileInput borders → `var(--color-border-default)`, focus → `var(--color-border-focus)`

```bash
git add src/atoms/MCalendar/ src/atoms/MStepProgress/ src/atoms/MGallery/
git add src/atoms/MFileInput/ src/atoms/MExpandableText/ src/atoms/MDescriptionList/
git commit -m "feat(tokens): migrate calendar, file, gallery, step atoms"
```

---

### Task 16: Migrate molecules

**Files:** All in `src/molecules/`

**Step 1: Read all molecule CSS files**

```bash
cat src/molecules/MDataGrid/MDataGrid.vars.css
cat src/molecules/MDataGrid/MDataGrid.module.css
cat src/molecules/MDataGrid/MDataGridPagination.module.css
cat src/molecules/MDataGrid/MDataGridHeader.module.css
cat src/molecules/MDataGrid/MDataGridRow.module.css
cat src/molecules/MAccordion/MAccordion.module.css
```

**Step 2: Update MDataGrid** using the same token patterns:
- Table/grid backgrounds → `var(--color-surface)`, `var(--color-surface-raised)`
- Header background → `var(--color-surface-sunken)`
- Row hover → `var(--color-surface-overlay)`
- Border → `var(--color-border-default)`
- Pagination buttons → `var(--color-action-rest)`, `var(--color-action-outlined-bg)`

**Step 3: Update MAccordion**
- Accordion header → `var(--color-surface-raised)`
- Expanded bg → `var(--color-surface)`
- Border → `var(--color-border-default)`
- Text → `var(--color-text-primary)`

**Step 4: Commit**

```bash
git add src/molecules/
git commit -m "feat(tokens): migrate MDataGrid and MAccordion molecules"
```

---

### Task 17: Delete old style files

**Files to delete:**
- `src/styles/brand/fonts.css`
- `src/styles/brand/words-control.css`
- `src/styles/theme/light.css`
- `src/styles/theme/dark.css`
- `src/styles/platform/webdesktop.css`
- `src/styles/platform/webtablet.css`
- `src/styles/platform/webmobile.css`
- `src/styles/platform/ios.css`
- `src/styles/platform/android.css`
- Any `.vars.css` that now only contain a `/* ... migrated */` comment

**Step 1: Delete old brand/theme/platform files**

```bash
rm src/styles/brand/fonts.css
rm src/styles/brand/words-control.css
rm src/styles/theme/light.css
rm src/styles/theme/dark.css
rm src/styles/platform/webdesktop.css
rm src/styles/platform/webtablet.css
rm src/styles/platform/webmobile.css
rm src/styles/platform/ios.css
rm src/styles/platform/android.css
```

**Step 2: Remove empty directories**

```bash
rmdir src/styles/brand/ 2>/dev/null || true
rmdir src/styles/theme/ 2>/dev/null || true
rmdir src/styles/platform/ 2>/dev/null || true
```

**Step 3: Remove empty .vars.css stub files** (those containing only the migration comment)

```bash
grep -rl "all tokens migrated to semantic layer" src/atoms/ src/molecules/ | xargs rm
```

**Step 4: Commit**

```bash
git add -A
git commit -m "feat(tokens): delete old brand/theme/platform style files and empty vars stubs"
```

---

### Task 18: Final verification

**Step 1: Search for any remaining old token references**

```bash
grep -r \
  "whiteSpace-general\|borderRadius-general\|size-general\|palette-active\|palette-semantic\|input-regular-border\|background-tertiary\|background-secondary\|text-primary\|text-secondary\|text-tertiary\|font-size-[slm]:" \
  src/atoms/ src/molecules/ \
  --include="*.css" \
  -l
```

Expected: **No output** (empty result). If files appear, open each one and fix the remaining references before continuing.

**Step 2: Build Storybook**

```bash
npm run build:storybook 2>&1 | tail -10
```

Expected: `Build succeeded.`

**Step 3: Start Storybook and spot-check visually**

```bash
npm run storybook
```

Open `http://localhost:6006` and verify:
- [ ] MButton primary/secondary/outlined variants look correct in light + dark
- [ ] MAlert info/warning/error/success all have correct background + border colors
- [ ] MInput states (default, hover, focus, invalid, disabled) render correctly
- [ ] MCard shadow and background render in both themes
- [ ] MCheckbox + MRadio checked/unchecked states look correct
- [ ] Theme switcher toggles colors correctly
- [ ] Platform switcher (web/tablet/mobile) changes layout padding

**Step 4: Final commit**

```bash
git add -A
git commit -m "feat(tokens): complete CSS token system refactor

- Replace brand/theme/platform files with new three-layer token architecture
- brand.css: semantic-agnostic palette (wide spectrum)
- font.css: three font roles + sizes xs-6xl + matching line-heights
- themes/light.css + dark.css: semantic color tokens (surface, text, border,
  action, control, input, status, divider, overlay)
- platforms/web.css + tablet.css + mobile.css: semantic size/spacing/radius/
  shadow/size tokens (wide spectrum)
- Migrated all 33 component .vars.css files: removed [data-theme] and
  [data-platform] blocks; deleted files that became empty
- Migrated all 49 component .module.css files: now reference semantic tokens
  directly with no intermediate component variable layer"
```
