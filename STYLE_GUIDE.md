# CEMS Style Guide v2.0
**Design System for 20+ Year Longevity**

---

## 🎯 Design Philosophy

### Core Principles

1. **Data-First** - Maximum information density without clutter
2. **Timeless Neutrality** - Avoid trendy colors, stick to gray + one brand color
3. **Keyboard-Optimized** - Power users should rarely need a mouse
4. **Responsive** - Mobile to 4K displays
5. **Accessible** - WCAG 2.1 AA compliant

---

## 🎨 Color System

### Neutral Palette (Primary)

```css
Background:     #FFFFFF  (white)
Surface:        #F8F9FA  (light gray)
Border:         #E5E7EB  (medium gray)
Text Primary:   #111827  (almost black)
Text Secondary: #6B7280  (medium gray)
Text Muted:     #9CA3AF  (light gray)
```

**Why Neutral?** Colored UIs age quickly. Gray-based designs remain fresh for decades.

### Brand Color (Single Accent)

```css
Primary:        #2563EB  (Blue 600)
Primary Hover:  #1D4ED8  (Blue 700)
Primary Light:  #DBEAFE  (Blue 100)
```

**Usage:** Buttons, links, active states, focus rings

### Semantic Colors

```css
Success:  #059669  (Green) - Approved, completed, verified
Warning:  #D97706  (Orange) - Pending, attention needed
Error:    #DC2626  (Red) - Rejected, failed, error
Info:     #0891B2  (Cyan) - Information, note
```

**Usage:** Status indicators, alerts, feedback

---

## 📝 Typography

### Font Family

```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
             Roboto, 'Helvetica Neue', Arial, sans-serif;
```

**Why System Fonts?**
- Zero load time
- Native look on every OS
- Better rendering
- No licensing issues

### Type Scale (8px base)

| Size | Value | Usage |
|------|-------|-------|
| xs   | 11px  | Table cells, labels, metadata |
| sm   | 13px  | Form inputs, body text, lists |
| base | 14px  | Default text size |
| lg   | 16px  | Section headers |
| xl   | 18px  | Page titles (rarely used) |

**Rule:** Use larger sizes sparingly. Most UI should be 13-14px.

### Font Weights

| Weight | Value | Usage |
|--------|-------|-------|
| Normal | 400   | Body text |
| Medium | 500   | Labels, buttons, table headers |
| Semibold | 600 | Section titles, emphasis |

**Never use:** Light (300), Bold (700), Black (900)

---

## 📏 Spacing System (8px Grid)

```css
--space-1: 4px
--space-2: 8px   ← Base unit
--space-3: 12px
--space-4: 16px  ← Common spacing
--space-5: 20px
--space-6: 24px  ← Section spacing
--space-8: 32px
--space-10: 40px
```

### Spacing Rules

- **Padding:** Use `--space-3` (12px) or `--space-4` (16px)
- **Gap:** Use `--space-2` (8px) or `--space-3` (12px)
- **Margin:** Use `--space-4` (16px) or `--space-6` (24px)
- **Always stick to 8px multiples**

---

## 🧩 Layout Rules

### Top Navigation

- **Height:** 48px (fixed)
- **Logo:** Left-aligned
- **Search:** 300px width, expandable on focus
- **Actions:** Right-aligned
- **Mobile:** Search expands, actions collapse to hamburger

### Context Bar

- **Height:** 40px (fixed)
- **Breadcrumb:** Left-aligned, max 4 levels
- **Actions:** Right-aligned, 2-3 buttons max

### Main Content

- **Padding:** 24px (desktop), 16px (mobile)
- **Max Width:** 1400px (centered)
- **Sections:** 16px margin between

### Sections

- **Header:** 48px height, gray background
- **Body:** 16px padding
- **Border:** 1px solid #E5E7EB

---

## 📊 Component Guidelines

### Buttons

#### Sizes
```css
Small:   padding: 4px 12px;  font-size: 11px;
Default: padding: 8px 16px;  font-size: 13px;
```

#### Hierarchy
1. **Primary** - Main action (blue background)
2. **Secondary** - Secondary action (gray border)
3. **Ghost** - Tertiary action (transparent)

#### Rules
- Maximum 1 primary button per section
- Always pair primary with secondary/ghost
- Icon buttons: 32x32px touch target

### Forms

#### Field Layout
```html
<!-- Vertical (default) -->
<div class="form-group">
  <label>Label</label>
  <input />
</div>

<!-- Horizontal (compact - for read-only) -->
<div class="field">
  <div class="field-label">Label</div>
  <div class="field-value">Value</div>
</div>
```

#### Input Sizes
- **Height:** 32px
- **Padding:** 8px 12px
- **Border:** 1px solid #E5E7EB
- **Focus:** 1px blue border + 3px blue shadow

#### Labels
- **Font size:** 13px
- **Font weight:** 500
- **Margin bottom:** 8px
- **Required indicator:** Red asterisk (*)

### Tables

#### Dense Table Design

```css
Row Height:     36px
Header Height:  36px
Cell Padding:   8px 12px
Font Size:      13px
Border:         1px solid #E5E7EB
```

#### Rules
- Fixed header on scroll
- Row hover: light gray background
- Checkbox column: 40px width
- Actions column: 100-120px width, right-aligned
- Zebra striping: NO (adds visual noise)

### Status Indicators

```html
<span class="status status-approved">
  <span class="status-dot"></span>
  Approved
</span>
```

#### Colors
- **Approved/Success:** Green dot + text
- **Pending:** Orange dot + text
- **Rejected/Error:** Red dot + text
- **Verified/Info:** Blue dot + text

#### Rules
- Always use dot + text
- 8px dot size
- 11px font size
- 500 font weight

---

## 🎭 Visual Hierarchy

### Page Structure

```
Level 1: Page Title (18px, rarely used)
Level 2: Section Title (14px, semibold)
Level 3: Subsection (13px, semibold)
Level 4: Body Text (13-14px, normal)
Level 5: Metadata (11px, muted)
```

### Importance Signaling

1. **Most Important:** Primary button, bold text, larger size
2. **Important:** Secondary button, medium weight
3. **Normal:** Regular text, ghost button
4. **Less Important:** Muted text, small size

---

## ⚡ Interaction States

### Hover

```css
Button:      Darker background, scale 1.0 (no scale)
Link:        Primary color
Table Row:   Light gray background (#F8F9FA)
Dropdown:    Light gray background
```

### Focus

```css
Input/Select:    1px blue border + 3px blue shadow
Button:          3px blue outline (system default)
Keyboard Nav:    2px blue outline
```

### Active/Pressed

```css
Button:   Slightly darker, no scale animation
Link:     Darker blue
```

### Disabled

```css
Opacity:  0.5
Cursor:   not-allowed
```

---

## 📱 Responsive Breakpoints

```css
Mobile:   < 768px
Tablet:   768px - 1024px
Desktop:  > 1024px
```

### Mobile Adjustments

- Top nav: Collapse actions, expand search
- Tables: Horizontal scroll (never stack)
- Forms: Single column
- Stats cards: Single column
- Button groups: Stack vertically

---

## ♿ Accessibility

### Color Contrast

- **Text:** Minimum 4.5:1 contrast ratio
- **Large Text:** Minimum 3:1 contrast ratio
- **Interactive:** Minimum 3:1 against background

### Keyboard Navigation

- All interactive elements: focusable
- Modals: trap focus, ESC to close
- Dropdowns: Arrow keys to navigate
- Tables: Tab to navigate, Enter to select

### Screen Readers

- Buttons: descriptive labels
- Images: alt text
- Forms: label + input association
- Tables: proper thead/tbody structure

---

## 🚫 Don'ts

### Visual

- ❌ Don't use multiple brand colors
- ❌ Don't use gradients
- ❌ Don't use shadows excessively (max 1-2 levels)
- ❌ Don't use animations (except transitions)
- ❌ Don't use custom fonts

### Layout

- ❌ Don't exceed 1400px content width
- ❌ Don't use fixed sidebars (use top nav)
- ❌ Don't use card grids with icons (wastes space)
- ❌ Don't add page descriptions (assume trained users)

### Typography

- ❌ Don't mix font sizes within a component
- ❌ Don't use font sizes > 18px
- ❌ Don't use all caps (except small labels)
- ❌ Don't use italic (use color/weight for emphasis)

### Interactions

- ❌ Don't auto-play animations
- ❌ Don't use carousels/sliders
- ❌ Don't hide information in tooltips
- ❌ Don't use modal windows for data entry (use inline)

---

## ✅ Best Practices

### Data Entry

1. **Inline Editing** - Edit in place when possible
2. **Compact Forms** - Multiple fields per row
3. **Smart Defaults** - Pre-fill when possible
4. **Validation** - Real-time, inline errors

### Data Display

1. **Dense Tables** - Max information, min space
2. **Field Grids** - For read-only key-value pairs
3. **Status Indicators** - Use dots + text
4. **Actions** - Keep in-row, avoid hover-only

### Navigation

1. **Breadcrumbs** - Always show current path
2. **Module Dropdown** - Group by category
3. **Search** - Global, Cmd/Ctrl+K shortcut
4. **Back Button** - Browser back, not custom

### Performance

1. **No External Fonts** - Use system fonts
2. **Minimal JS** - Only for dropdowns/modals
3. **CSS Variables** - Easy theming
4. **Lazy Load** - Images, tables (pagination)

---

## 🔄 Angular Migration Notes

### CSS → Angular

```css
/* Current (HTML/CSS) */
<div class="section">
  <div class="section-header">Title</div>
  <div class="section-body">Content</div>
</div>

<!-- Angular (Component) -->
<app-section title="Title">
  Content
</app-section>
```

### Benefits

- Reusable components
- Type-safe props
- State management
- Easier testing

### Migration Strategy

1. Keep CSS classes identical
2. Wrap HTML in Angular components
3. Add TypeScript logic
4. Connect to API
5. Add state management

---

## 📦 Design Tokens (CSS Variables)

```css
/* Copy from cems.css for reference */
:root {
  --color-bg: #FFFFFF;
  --color-surface: #F8F9FA;
  --color-border: #E5E7EB;
  --color-text: #111827;
  --color-primary: #2563EB;

  --space-2: 0.5rem;
  --space-4: 1rem;
  --space-6: 1.5rem;

  --font-size-sm: 0.8125rem;
  --font-size-base: 0.875rem;

  --border-radius: 4px;
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
}
```

**Usage in Angular:**
```scss
// Import tokens
@import 'variables';

.my-component {
  padding: var(--space-4);
  background: var(--color-surface);
}
```

---

## 📋 Design Checklist

Before implementing any screen:

- [ ] Uses system fonts
- [ ] Sticks to neutral colors (gray + blue)
- [ ] No page title/description (assumes trained users)
- [ ] Compact layout (dense tables, inline forms)
- [ ] 8px spacing grid
- [ ] Maximum 1 primary button per section
- [ ] Keyboard accessible (Tab, Enter, ESC work)
- [ ] Mobile responsive
- [ ] No custom animations
- [ ] Uses existing components

---

## 🎓 Training Notes

### For Developers

- Read Component Library first
- Use CSS classes as documented
- Don't create new components without approval
- Test on mobile devices
- Validate accessibility (keyboard nav, screen reader)

### For Designers

- Design in grayscale first
- Add color only for status/brand
- Use 8px grid
- Design for data density, not aesthetics
- Assume power users, not first-time users

---

**Version:** 2.0
**Last Updated:** January 2025
**Next Review:** January 2027
**Contact:** CEMS Development Team
