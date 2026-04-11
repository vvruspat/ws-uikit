# UI Kit Development Guidelines

This document defines the rules and best practices for building components in this UI kit. All agents and developers must follow these guidelines strictly.

## Core Principles

### 1. Atomic Design Pattern
Components follow the atomic design methodology:
- **Atoms**: Basic, reusable building blocks (MButton, MInput, MText, MCard, MFlex)
- **Molecules**: Combinations of atoms forming more complex components (MAccordion, MDataGrid)
- **Organisms** (future): Complex UI sections composed of molecules and atoms (Hero blocks, login forms etc...)

**Rule**: Always check if an existing atom can be reused before creating a new component.

### 2. Component Naming Convention
- All components must be prefixed with `M` (e.g., `MButton`, `MInput`, `MAccordion`)
- File structure: `{ComponentName}/{ComponentName}.tsx`
- Export as named export: `export const MButton = ...`
- Default export must also be provided: `export default MButton`

### 3. HTML-First Approach
Atomic components should extend native HTML elements:

```typescript
// ✅ CORRECT: Extends native button
type ButtonProps = ComponentProps<"button"> & CustomProps;

// ✅ CORRECT: Extends native input
type InputProps = ComponentProps<"input"> & CustomProps;

// ✅ CORRECT: Extends native heading
type HeadingProps = ComponentProps<"h1" | "h2" | "h3"> & CustomProps;

// ❌ WRONG: Avoid generic HTMLAttributes
type ButtonProps = HTMLAttributes<HTMLButtonElement> & CustomProps;
```

**Benefits**:
- Automatic inheritance of all native props
- Better accessibility out of the box
- Type safety without casting
- Semantic HTML preserved

## TypeScript Best Practices

### 1. NO `any` Type
**Strictly forbidden**. Always use proper types:

```typescript
// ❌ NEVER DO THIS
const handleClick = (data: any) => {};

// ✅ USE PROPER TYPES
const handleClick = (data: UserData) => {};

// ✅ USE GENERICS WHEN NEEDED
const fetchData = <T,>(url: string): Promise<T> => {};

// ✅ USE UNION TYPES
type Status = "loading" | "success" | "error";

// ✅ USE INTERSECTIONS
type ButtonProps = ComponentProps<"button"> & { mode: "primary" | "secondary" };
```

### 2. NO Type Casting
Avoid type assertions (`as`, `!`, `<Type>`):

```typescript
// ❌ AVOID TYPE CASTING
const button = element as HTMLButtonElement;
const value = data!.value;
const count = <number>stringValue;

// ✅ USE TYPE GUARDS
if ("value" in element) {
  const button = element as HTMLButtonElement; // Only when necessary
}

// ✅ USE TYPE NARROWING
if (data !== null && data !== undefined) {
  const value = data.value; // No casting needed
}

// ✅ USE PROPER TYPE PREDICATES
function isButtonElement(
  element: HTMLElement | HTMLButtonElement
): element is HTMLButtonElement {
  return element.tagName === "BUTTON";
}
```

### 3. Proper Type Definitions
Use React's built-in type utilities:

```typescript
import type { ComponentProps, ElementType } from "react";

// Extend native element props
type ButtonProps = ComponentProps<"button"> & {
  mode: "primary" | "secondary" | "tertiary";
  size: "s" | "m" | "l";
};

// For polymorphic components
type MFlexProps<T extends ElementType = "div"> = {
  as?: T;
  gap?: "xs" | "s" | "m" | "l" | "xl";
  direction?: "row" | "column";
} & ComponentProps<T>;

// Use Extract for specific values
type Size = Extract<TComponentSize["size"], "s" | "m" | "l">;
```

### 4. Avoid Partial Types When Possible
Be explicit about optional props:

```typescript
// ❌ TOO BROAD
type Props = Partial<ComponentProps<"input">>;

// ✅ EXPLICIT
type InputProps = ComponentProps<"input"> & {
  clearable?: boolean;
  placeholder?: string;
};
```

## Component Structure

### 1. File Organization
Each component must have:
```
MButton/
├── index.ts              # Re-exports all public API
├── MButton.tsx           # Main component implementation
├── MButton.module.css    # Component styles (CSS Modules)
├── MButton.module.css.d.ts  # TypeScript declarations for CSS
├── MButton.vars.css.d.ts    # CSS variables type declarations
├── MButton.stories.tsx   # Storybook stories
├── MButton.test.tsx      # Unit tests
├── MButton.mdx           # Storybook documentation
└── types/
    └── CommonButtonProps.ts  # Shared type definitions
```

### 2. Component Template
```typescript
import clsx from "clsx";
import type { ComponentProps } from "react";
import { MFlex } from "../../atoms/MFlex";
import styles from "./MButton.module.css";
import type { CommonButtonProps } from "./types";

// Extend native element props
type ButtonProps = ComponentProps<"button"> & CommonButtonProps;

export const MButton = ({
  children,
  className,
  type = "button",
  mode = "primary",
  size = "m",
  ...restProps
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        styles.button,
        styles[mode],
        styles[size],
        className,
      )}
      type={type}
      {...restProps}
    >
      <MFlex justify="center" className={styles.buttonContent}>
        {children}
      </MFlex>
    </button>
  );
};

export default MButton;
```

### 3. CSS Modules with CSS Variables
**NO Tailwind CSS**. Use CSS Modules with design tokens from `src/styles/`:

**Available CSS Variables:**

**Spacing & Layout** (`src/styles/platforms/web.css`)

**Typography** (`src/styles/font.css`)

**Colors** (`src/styles/themes/light.css` & `dark.css`)

```css
/* ✅ CORRECT: Use CSS custom properties from src/styles */
.button {
  color: var(--color-action-foreground);
  background: var(--color-action-rest);
  border-radius: var(--radius-8);
  gap: var(--space-4);
  padding: var(--space-6);
  font-family: var(--font-family-primary);
  font-size: var(--font-size-md);
  line-height: var(--line-height-md);
  transition: color 0.2s ease-in-out;
}

.button--primary {
  background: var(--color-action-rest);
  color: var(--color-action-foreground);
}

.button--secondary {
  background: var(--color-action-secondary-rest);
  color: var(--color-action-secondary-foreground);
}

/* Use CSS variables for all values */
.button--size-s {
  padding: var(--space-4);
  font-size: var(--font-size-sm);
  line-height: var(--line-height-sm);
}

.button--size-m {
  padding: var(--space-6);
  font-size: var(--font-size-md);
  line-height: var(--line-height-md);
}

/* Focus states */
.button:focus {
  outline: 2px solid var(--color-focus-ring);
  outline-offset: var(--space-2);
}

/* Disabled states */
.button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
```

### 4. Reuse Existing Components
**Always check existing atoms before creating new components**:

**Rule**: Use `MFlex` for flexbox layouts instead of writing local `display: flex`, `align-items`, `justify-content`, `flex-direction`, `flex-wrap`, or `gap` CSS in component modules. Keep local CSS for non-layout styling or layout behavior that `MFlex` cannot represent, such as absolute positioning, transforms, pseudo-elements, or browser-specific input styling.

```typescript
import { MFlex } from "../../atoms/MFlex";
import { MText } from "../../atoms/MText";
import { MCard } from "../../atoms/MCard";

// ✅ REUSE MFlex for layout
export const MButton = () => (
  <MFlex justify="center" gap="s">
    <MText mode="primary">Button Text</MText>
  </MFlex>
);

// ✅ REUSE MCard for containers
export const MAccordionItem = () => (
  <MCard header={title} shadow={false}>
    {children}
  </MCard>
);

// ❌ DON'T REINVENT THE WHEEL
export const MButton = () => (
  <div style={{ display: "flex", alignItems: "center" }}>
    <span>Button Text</span>
  </div>
);
```

## Design Tokens

### 1. Use CSS Custom Properties
All components must use design tokens from `src/styles/`:

**DO NOT define custom CSS variables in component files.** Only use variables defined in:
- `src/styles/platforms/web.css` - spacing, radius, shadows, sizes
- `src/styles/themes/light.css` - light theme colors
- `src/styles/themes/dark.css` - dark theme colors
- `src/styles/brand.css` - palette colors
- `src/styles/font.css` - typography

```css
/* ✅ CORRECT: Use CSS variables from src/styles */
.button {
  color: var(--color-action-foreground);
  background: var(--color-action-rest);
  padding: var(--space-6);
  border-radius: var(--radius-8);
  font-size: var(--font-size-md);
  line-height: var(--line-height-md);
  box-shadow: var(--shadow-sm);
}

/* ❌ WRONG: Do NOT define custom variables */
.button {
  --my-custom-color: blue; /* DON'T DO THIS */
  color: var(--my-custom-color);
}

/* ❌ WRONG: Hardcoded values */
.button {
  color: #197CD1;
  background: #E3F2FD;
  padding: 12px;
  border-radius: 8px;
  font-size: 14px;
}
```

**Rule**: If a variable doesn't exist in `src/styles/`, don't create it. Use the closest existing token or request a new one to be added to the appropriate theme file.

### 2. Available Token Categories
**Spacing & Layout** (`src/styles/platforms/web.css`):
- `--space-1` to `--space-64` (0.125rem to 8rem)
- `--radius-1` to `--radius-32`, `--radius-full`
- `--shadow-xs`, `--shadow-sm`, `--shadow-md`, `--shadow-lg`, `--shadow-xl`
- `--size-4` to `--size-64`
- `--layout-screen-padding-h`

**Typography** (`src/styles/font.css`):
- `--font-family-primary`, `--font-family-secondary`, `--font-family-tertiary`
- `--font-size-xs` to `--font-size-6xl`
- `--line-height-xs` to `--line-height-6xl`

**Colors** (`src/styles/themes/light.css` & `dark.css`):
- Surface: `--color-surface-*`
- Text: `--color-text-*`
- Border: `--color-border-*`
- Action: `--color-action-*`
- Control: `--color-control-*`
- Input: `--color-input-*`
- Status: `--color-status-*`
- Divider: `--color-divider-*`
- Focus: `--color-focus-ring`, `--color-overlay`
- Shadow: `--shadow-card`

**Palette** (`src/styles/brand.css`):
- `--palette-primary-*` (50-1000)
- `--palette-secondary-*` (50-1000)
- `--palette-tertiary-*` (50-1000)
- `--palette-base-*` (0-1000)
- `--palette-success-*` (100-1000)
- `--palette-error-*` (50-1000)
- `--palette-warning-*` (50-1000)
- `--palette-info-*` (100-200)

**Rule**: Only use variables defined in `src/styles/`. Do not create custom CSS variables in component files.

### 3. Token Sources
- Primitives: `/figma/tokens-primitives.json`
- Semantic Light: `/figma/tokens-semantic-light.json`
- Semantic Dark: `/figma/tokens-semantic-dark.json`

## Component Composition

### 1. Use React Patterns
```typescript
// ✅ USE PROPER REACT PATTERNS
import { forwardRef, useMemo, useCallback, useState } from "react";

// forwardRef for DOM components
export const MCard = forwardRef<HTMLDivElement, CardProps>(
  ({ children, className, ...restProps }, ref) => {
    return (
      <div ref={ref} className={className} {...restProps}>
        {children}
      </div>
    );
  }
);
MCard.displayName = "MCard";

// useMemo for computed values
const computedValue = useMemo(() => {
  return expensiveCalculation(data);
}, [data]);

// useCallback for event handlers
const handleClick = useCallback(() => {
  onClick();
}, [onClick]);
```

### 2. Custom Hooks for Shared Logic
Extract reusable logic into hooks:

```typescript
// useClearable.tsx
export const useClearable = ({
  clearable,
  value,
  onChange,
}: ClearableProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [localValue, setLocalValue] = useState(value ?? "");

  const onClear = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    setLocalValue("");
    onChange?.({ target: { value: "" } } as ChangeEvent<HTMLInputElement>);
  }, [onChange]);

  return { inputRef, ClearButton, onClear };
};

// Usage in component
const { inputRef, ClearButton } = useClearable({ clearable, value, onChange });
```

### 3. Component Composition Pattern
```typescript
// ✅ COMPOSABLE COMPONENTS
export const MButton = ({ before, after, children, ...restProps }) => (
  <button {...restProps}>
    {before && <span className={styles.before}>{before}</span>}
    <span className={styles.content}>{children}</span>
    {after && <span className={styles.after}>{after}</span>}
  </button>
);

// Usage
<MButton before={<MIcon name="star" />} after="→">
  Action
</MButton>
```

## Accessibility (a11y)

### 1. Semantic HTML
```typescript
// ✅ USE SEMANTIC ELEMENTS
export const MAlert = ({ mode = "info", children }) => {
  const isUrgent = mode === "warning" || mode === "error";
  const tag = isUrgent ? "div" : "output";

  return (
    <MFlex
      as={tag}
      role={isUrgent ? "alert" : undefined}
      aria-live={isUrgent ? "assertive" : "polite"}
      aria-atomic="true"
    >
      {children}
    </MFlex>
  );
};

// ✅ PROPER HEADING HIERARCHY
export const MHeading = ({ mode = "h1", children }) => {
  return <>{createElement(mode, {}, children)}</>;
};
```

### 2. Focus Management
```css
/* Always style focus states */
.button:focus {
  outline: var(--focus-outline);
  outline-offset: var(--focus-outline-offset);
}

/* Keyboard navigation */
.button:focus-visible {
  outline: var(--focus-outline);
}
```

### 3. ARIA Attributes
```typescript
// ✅ USE ARIA WHEN NEEDED
<div
  role="button"
  aria-disabled={disabled}
  tabIndex={disabled ? -1 : 0}
>
  {children}
</div>

// ✅ LABEL ASSOCIATION
<label htmlFor={id}>
  {label}
  <input id={id} {...props} />
</label>
```

## Testing Requirements

### 1. Unit Tests (Testing Library)
```typescript
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import MButton from "./MButton";

describe("MButton", () => {
  test("renders button with text", () => {
    render(<MButton mode="primary">Click me</MButton>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  test("calls onClick when clicked", async () => {
    const handleClick = vi.fn();
    render(<MButton onClick={handleClick}>Click me</MButton>);
    
    await userEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalled();
  });

  test("disabled button cannot be clicked", async () => {
    const handleClick = vi.fn();
    render(<MButton disabled onClick={handleClick}>Disabled</MButton>);
    
    await userEvent.click(screen.getByRole("button"));
    expect(handleClick).not.toHaveBeenCalled();
  });
});
```

### 2. Storybook Stories
```typescript
import type { Meta, StoryObj } from "@storybook/react-vite";
import MButton from "./MButton";

const meta: Meta<typeof MButton> = {
  title: "Atoms/Form/MButton",
  component: MButton,
};

export default meta;
type Story = StoryObj<typeof MButton>;

export const Primary: Story = {
  args: {
    mode: "primary",
    size: "m",
    children: "Button",
  },
  argTypes: {
    mode: {
      options: ["primary", "secondary", "tertiary"],
      control: { type: "select" },
    },
  },
};

export const AllModes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "12px" }}>
      {["primary", "secondary", "tertiary"].map((mode) => (
        <MButton key={mode} mode={mode}>
          {mode}
        </MButton>
      ))}
    </div>
  ),
};
```

## SOLID Principles

### 1. Single Responsibility Principle (SRP)
Each component should have one reason to change:

```typescript
// ✅ GOOD: Single responsibility
export const MButton = () => { /* Button logic */ };
export const MIcon = () => { /* Icon logic */ };
export const useClearable = () => { /* Clearable input logic */ };

// ❌ BAD: Multiple responsibilities
export const MButtonWithValidationAndClearable = () => {
  // Too many responsibilities
};
```

### 2. Open/Closed Principle (OCP)
Components should be open for extension, closed for modification:

```typescript
// ✅ EXTENSIBLE VIA PROPS
export const MButton = ({
  mode = "primary",
  size = "m",
  before,
  after,
  children,
}) => (
  <button className={clsx(styles[mode], styles[size])}>
    {before && <span>{before}</span>}
    {children}
    {after && <span>{after}</span>}
  </button>
);

// Users can extend via composition without modifying source
```

### 3. Liskov Substitution Principle (LSP)
Subtypes must be substitutable for base types:

```typescript
// ✅ ALL BUTTON MODES BEHAVE CONSISTENTLY
type ButtonMode = "primary" | "secondary" | "tertiary";

// All modes support the same props and behavior
export const MButton = ({ mode = "primary", ...props }) => {
  // All modes work the same way
  return <button {...props} />;
};
```

### 4. Interface Segregation Principle (ISP)
Many specific interfaces are better than one general interface:

```typescript
// ✅ SPECIFIC INTERFACES
type ButtonProps = ComponentProps<"button"> & {
  mode: "primary" | "secondary";
  size: "s" | "m" | "l";
};

type InputProps = ComponentProps<"input"> & {
  clearable?: boolean;
  placeholder?: string;
};

// ❌ ONE BIG INTERFACE
type FormElementProps = {
  mode?: string;
  size?: string;
  clearable?: boolean;
  placeholder?: string;
  // Too many optional props
};
```

### 5. Dependency Inversion Principle (DIP)
Depend on abstractions, not concretions:

```typescript
// ✅ DEPEND ON ABSTRACTIONS
export const MCard = ({ header, children }) => {
  // header can be any ReactNode
  return (
    <div>
      {header && <header>{header}</header>}
      {children}
    </div>
  );
};

// Usage with any component
<MCard header={<MHeading mode="h2">Title</MHeading>}>
  Content
</MCard>
```

## Code Quality Rules

### 1. No Inline Styles (Except Dynamic Values)
```typescript
// ❌ AVOID INLINE STYLES
<div style={{ color: "blue", padding: "12px" }}>Text</div>

// ✅ USE CSS MODULES
<div className={styles.text}>Text</div>

// ✅ DYNAMIC VALUES ONLY
<div style={{ width: `${width}px` }}>Content</div>
```

### 2. Use clsx for Conditional Classes
```typescript
import clsx from "clsx";

// ✅ CLEAN CONDITIONAL CLASSES
className={clsx(
  styles.button,
  styles[mode],
  styles[size],
  {
    [styles.disabled]: disabled,
    [styles.stretch]: stretch,
  },
  className,
)}
```

### 3. Proper Prop Destructuring
```typescript
// ✅ EXPLICIT DESTRUCTURING
export const MButton = ({
  children,
  className,
  mode = "primary",
  size = "m",
  ...restProps
}: ButtonProps) => {
  // Clear what's used and what's spread
};
```

### 4. Consistent File Structure
```typescript
// 1. Imports (grouped)
import clsx from "clsx";
import type { ComponentProps } from "react";
import { MFlex } from "../../atoms/MFlex";
import styles from "./MButton.module.css";
import type { CommonButtonProps } from "./types";

// 2. Type definitions
type ButtonProps = ComponentProps<"button"> & CommonButtonProps;

// 3. Component exports
export const MButton = ({ ...props }: ButtonProps) => {
  // Implementation
};

// 4. Default export
export default MButton;
```

## Component Checklist

Before marking a component as complete:

- [ ] Component follows atomic design pattern
- [ ] Named with `M` prefix
- [ ] Extends native HTML element props (`ComponentProps<"element">`)
- [ ] No `any` types used
- [ ] No type casting (`as`, `!`, `<Type>`)
- [ ] Uses CSS Modules (no Tailwind)
- [ ] Uses CSS custom properties (design tokens)
- [ ] Reuses existing components where possible
- [ ] Proper TypeScript types (no implicit any)
- [ ] Accessible (semantic HTML, ARIA, focus states)
- [ ] Unit tests written (Testing Library)
- [ ] Storybook stories created
- [ ] MDX documentation written
- [ ] Follows SOLID principles
- [ ] Proper index.ts exports
- [ ] CSS module type declarations exist
- [ ] No inline styles (except dynamic values)
- [ ] Uses `clsx` for conditional classes
- [ ] forwardRef used for DOM components
- [ ] Component has displayName

## File Naming Conventions

```
ComponentName/
├── index.ts                          # Public API exports
├── ComponentName.tsx                 # Main component
├── ComponentName.module.css          # Styles
├── ComponentName.module.css.d.ts     # CSS module types
├── ComponentName.vars.css.d.ts       # CSS variable types
├── ComponentName.stories.tsx         # Storybook stories
├── ComponentName.test.tsx            # Unit tests
├── ComponentName.mdx                 # Documentation
├── useComponentHook.tsx              # Custom hooks
└── types/
    └── SpecificType.ts               # Type definitions
```

## Export Patterns

### Component index.ts
```typescript
// Component's index.ts
export { MButton } from "./MButton";
export { MLinkButton } from "./MButton";
export type { ButtonProps } from "./MButton";
export type { CommonButtonProps } from "./types";
```

### Atoms index.ts
```typescript
// atoms/index.ts
export { MAlert } from "./MAlert";
export { MButton, MLinkButton } from "./MButton";
export { MCard } from "./MCard";
export type { SelectOption } from "./MList";
```

### Main index.ts
```typescript
// src/index.ts
import "./styles/index.css";
export * from "./atoms";
export * from "./molecules";
```

## Common Patterns

### 1. Polymorphic Components
```typescript
import type { ElementType } from "react";

type MFlexProps<T extends ElementType = "div"> = {
  as?: T;
  gap?: "xs" | "s" | "m" | "l";
  direction?: "row" | "column";
} & ComponentProps<T>;

export const MFlex = <T extends ElementType = "div">({
  as,
  gap = "s",
  direction = "row",
  ...restProps
}: MFlexProps<T>) => {
  const Element = as ?? "div";
  return <Element {...restProps} />;
};
```

### 2. Compound Components
```typescript
// MCard.tsx
export const MCard = ({ header, children, footer }) => (
  <div>
    {header && <header>{header}</header>}
    <div>{children}</div>
    {footer && <footer>{footer}</footer>}
  </div>
);

// Usage
<MCard
  header={<MHeading mode="h2">Title</MHeading>}
  footer={<MButton>Action</MButton>}
>
  Content
</MCard>
```

### 3. Custom Hooks Pattern
```typescript
// useClearable.tsx
export const useClearable = ({
  clearable,
  value,
  onChange,
}: ClearableProps) => {
  const [localValue, setLocalValue] = useState(value ?? "");
  
  const onClear = useCallback(() => {
    setLocalValue("");
    onChange?.({ target: { value: "" } } as ChangeEvent<HTMLInputElement>);
  }, [onChange]);

  return {
    value: localValue,
    onChange: onLocalChange,
    ClearButton: clearable ? <MButton onClick={onClear}>×</MButton> : null,
  };
};
```

## Error Prevention

### Common Mistakes to Avoid

```typescript
// ❌ DON'T: Use any
const data: any = fetchData();

// ✅ DO: Use proper types
const data: UserData = fetchData<UserData>();

// ❌ DON'T: Type assertion
const value = props.value as string;

// ✅ DO: Type narrowing
if (typeof props.value === "string") {
  const value = props.value;
}

// ❌ DON'T: Inline styles
<div style={{ color: "blue", padding: "12px" }}>

// ✅ DO: CSS modules
<div className={styles.text}>

// ❌ DON'T: Hardcoded values
<button style={{ backgroundColor: "#197CD1" }}>

// ✅ DO: CSS variables
<button className={styles.buttonPrimary}>

// ❌ DON'T: Reinvent components
<div style={{ display: "flex", gap: "12px" }}>

// ✅ DO: Reuse MFlex
<MFlex gap="m">
```

## Performance Guidelines

### 1. Memoization
```typescript
// useMemo for expensive calculations
const computedData = useMemo(() => {
  return expensiveTransformation(props.data);
}, [props.data]);

// useCallback for stable references
const handleClick = useCallback(() => {
  handleItemClick(id);
}, [id, handleItemClick]);
```

### 2. Lazy Loading
```typescript
// Lazy load heavy components
const MDataGrid = lazy(() => import("./MDataGrid"));
```

## Documentation Requirements

### 1. JSDoc Comments
```typescript
/**
 * Button component with multiple modes and sizes.
 *
 * @example
 * <MButton mode="primary" size="m">
 *   Click me
 * </MButton>
 *
 * @param mode - Visual style of the button
 * @param size - Size variant (s, m, l)
 * @param children - Button content
 */
export const MButton = ({ mode, size, children }) => {
  // Implementation
};
```

### 2. Storybook MDX
```mdx
import MButton from "./MButton";
import { Canvas, Meta, Story } from "@storybook/blocks";

# MButton

Button component for user actions.

<Meta of={MButton} />

## Primary Mode

<Canvas>
  <Story name="Primary" />
</Canvas>
```

## Summary

### Key Rules (Quick Reference)

1. **NO `any` type** - Always use proper TypeScript types
2. **NO type casting** - Use type narrowing and guards instead
3. **NO Tailwind** - Use CSS Modules with CSS variables
4. **NO inline styles** - Except for dynamic values
5. **NO hardcoded values** - Use design tokens (CSS variables)
6. **ALWAYS reuse** - Check existing components before creating new ones
7. **ALWAYS extend HTML** - Use `ComponentProps<"element">`
8. **ALWAYS test** - Unit tests + Storybook stories
9. **ALWAYS accessible** - Semantic HTML, ARIA, focus states
10. **ALWAYS type-safe** - Proper TypeScript, no implicit any

### Component Creation Flow

1. Check if existing component can be reused
2. Identify the native HTML element to extend
3. Define props using `ComponentProps<"element">`
4. Create component with proper types
5. Style with CSS Modules + CSS variables
6. Write unit tests
7. Create Storybook stories
8. Write MDX documentation
9. Export from index.ts
10. Add to atoms/molecules index

### Quality Checklist

- [ ] No `any` types
- [ ] No type casting
- [ ] Uses ComponentProps for HTML elements
- [ ] CSS Modules (no Tailwind)
- [ ] CSS custom properties (design tokens)
- [ ] Reuses existing components
- [ ] Unit tests pass
- [ ] Storybook stories complete
- [ ] Accessible (a11y)
- [ ] Proper exports
- [ ] Documentation complete
