# COPILOT GUIDELINES FOR CEMS UI GENERATION

You are GitHub Copilot assisting in generating HTML UI screens for the College Exam Management System (CEMS).

## Design System Reference

**Style Guide:** See `STYLE_GUIDE.md` for complete design system documentation

**CSS Framework:** `/css/cems.css` (735 lines, production-ready)
- **Do NOT use TailwindCSS** - All utility classes removed
- Use semantic component classes: `.btn`, `.form-input`, `.section`, `.data-table`

**Icons:** Feather Icons via CDN
```html
<script src="https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js"></script>
<i data-feather="icon-name" style="width: 20px; height: 20px;"></i>
```

**JavaScript:** `/js/cems.js` handles dropdowns, modals, feather icons init

## GOAL
Generate clean, professional, enterprise-style HTML pages using the custom CEMS CSS framework.
These pages are production-ready screens for the exam management system.

## SOURCES TO USE
When generating any HTML screen, refer to:
- STYLE_GUIDE.md (design system documentation)
- General_UX_Guidance.md
- CEMS_Screen_Flow_Specification.md
- Master UX Specification Document.md
- Existing screens inside /cems-ui/

## Layout Structure

Every screen follows this structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Screen Title - CEMS</title>
  <link rel="stylesheet" href="../css/cems.css">
  <script src="https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js"></script>
</head>
<body>

  <!-- Top Navigation (copy from layout.html) -->
  <nav class="topnav">
    <a href="dashboard.html" class="topnav-logo">
      <i data-feather="book-open" style="width: 24px; height: 24px;"></i>
      <span>CEMS</span>
    </a>

    <!-- Module Dropdown (customize button text) -->
    <div class="dropdown dropdown-left">
      <button class="btn btn-ghost dropdown-toggle">
        Module Name
        <i data-feather="chevron-down" style="width: 16px; height: 16px;"></i>
      </button>
      <div class="dropdown-menu">
        <a href="#" class="dropdown-item">Screen 1</a>
        <a href="#" class="dropdown-item">Screen 2</a>
      </div>
    </div>

    <!-- User menu, notifications, etc. -->
    ...
  </nav>

  <!-- Context Bar (customize breadcrumb and actions) -->
  <div class="context-bar">
    <div class="breadcrumb">
      <a href="../dashboard.html" class="breadcrumb-item">Dashboard</a>
      <span class="breadcrumb-separator">›</span>
      <span class="breadcrumb-item">Module Name</span>
      <span class="breadcrumb-separator">›</span>
      <span class="breadcrumb-item active">Screen Name</span>
    </div>
    <div class="context-actions">
      <button class="btn btn-sm btn-secondary">Action 1</button>
      <button class="btn btn-sm btn-primary">Action 2</button>
    </div>
  </div>

  <!-- Main Content -->
  <main class="main-container">
    <div class="page-container">

      <!-- Section-based layout -->
      <div class="section">
        <div class="section-header">
          <h2 class="section-title">Section Title</h2>
          <button class="btn btn-sm btn-ghost">Optional Action</button>
        </div>
        <div class="section-body">
          <!-- Content here -->
        </div>
      </div>

    </div>
  </main>

  <!-- Initialize Feather Icons -->
  <script src="../js/cems.js"></script>
</body>
</html>
```

## Component Reference

### Buttons
```html
<!-- Primary action -->
<button class="btn btn-primary">Submit</button>

<!-- Secondary action -->
<button class="btn btn-secondary">Cancel</button>

<!-- Tertiary action -->
<button class="btn btn-ghost">View Details</button>

<!-- Small size -->
<button class="btn btn-sm btn-primary">Save</button>

<!-- Icon only -->
<button class="btn btn-icon btn-ghost">
  <i data-feather="settings" style="width: 20px; height: 20px;"></i>
</button>
```

### Forms
```html
<div class="form-group">
  <label class="form-label required">Field Label</label>
  <input type="text" class="form-input" placeholder="Enter value" />
</div>

<div class="form-group">
  <label class="form-label">Select Field</label>
  <select class="form-select">
    <option value="">-- Select --</option>
    <option>Option 1</option>
  </select>
</div>

<!-- Inline form (compact) -->
<div class="form-inline">
  <div class="form-group">...</div>
  <div class="form-group">...</div>
  <button class="btn btn-primary">Apply</button>
</div>

<!-- Field grid (auto-fit 250px columns) -->
<div class="field-grid">
  <div class="form-group">...</div>
  <div class="form-group">...</div>
</div>
```

### Tables
```html
<div class="table-container">
  <table class="data-table">
    <thead>
      <tr>
        <th>Column 1</th>
        <th>Column 2</th>
        <th style="text-align: right;">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Data 1</td>
        <td>Data 2</td>
        <td style="text-align: right;">
          <button class="btn btn-sm btn-ghost">
            <i data-feather="edit" style="width: 16px; height: 16px;"></i>
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
```

### Status Badges
```html
<span class="status status-approved">
  <span class="status-dot"></span>
  Approved
</span>

<span class="status status-pending">
  <span class="status-dot"></span>
  Pending
</span>

<span class="status status-rejected">
  <span class="status-dot"></span>
  Rejected
</span>

<span class="status status-verified">
  <span class="status-dot"></span>
  Verified
</span>
```

### Alerts
```html
<div class="alert alert-info">
  <i data-feather="info" style="width: 20px; height: 20px;"></i>
  <div>Information message</div>
</div>

<div class="alert alert-warning">
  <i data-feather="alert-circle" style="width: 20px; height: 20px;"></i>
  <div>Warning message</div>
</div>

<div class="alert alert-success">
  <i data-feather="check-circle" style="width: 20px; height: 20px;"></i>
  <div>Success message</div>
</div>

<div class="alert alert-error">
  <i data-feather="x-circle" style="width: 20px; height: 20px;"></i>
  <div>Error message</div>
</div>
```

### Stats Cards (Dashboard)
```html
<div class="stats-grid">
  <a href="#" class="stat-card">
    <div class="stat-label">Label</div>
    <div class="stat-value">1,245</div>
    <div class="text-xs text-success" style="margin-top: 4px;">↑ 5% growth</div>
  </a>
</div>
```

### Common Feather Icons
- `book-open` - Logo
- `chevron-down` - Dropdowns
- `bell` - Notifications
- `settings` - Settings
- `user` - User profile
- `plus` - Add/create
- `search` - Search
- `edit` - Edit action
- `check-circle` - Approve/verify
- `x-circle` - Reject/delete
- `eye` - View
- `download` - Export
- `calendar` - Scheduling
- `clipboard` - Assessment
- `credit-card` - Hall ticket
- `book` - Exam
- `bar-chart-2` - Results
- `file-text` - Mark sheet
- `award` - Certificate

**Icon sizes:** 16px (buttons), 20px (toolbar), 24px (logo), 32px (placeholders)

## Design Standards

### Colors
- **Neutral gray palette:** #F8F9FA, #E5E7EB, #111827, #6B7280, #9CA3AF
- **Single blue accent:** #2563EB (for primary actions only)
- **Semantic colors:** Green (success), Orange (warning), Red (error), Blue (info)
- **Background:** White (#FFFFFF) with gray borders

### Typography
- **Font stack:** System fonts (Inter, Roboto, Open Sans, fallback to system-ui)
- **Sizes:** 11px, 13px, 14px, 16px, 18px
- **Most UI:** 13-14px
- **Weights:** 400 (normal), 500 (medium), 600 (semibold) only

### Spacing
- **Grid:** 8px base unit
- **Common values:** 8px, 12px, 16px, 24px, 32px, 48px
- **Section padding:** 24px
- **Form gaps:** 16px between fields

## WHAT NOT TO DO
- Do NOT use TailwindCSS classes (bg-blue-50, px-4, rounded-xl, etc.)
- Do NOT generate mobile-app style narrow cards
- Do NOT use bright colors for backgrounds
- Do NOT change module names or add extra fields
- Do NOT simplify validation or layouts beyond UX spec
- Do NOT skip Feather Icons initialization

## WHEN ASKED FOR A SCREEN
Copilot must:
1. Read CEMS_Screen_Flow_Specification.md for that screen
2. Use cems.css classes (NOT TailwindCSS)
3. Include topnav + context bar from layout.html
4. Use section-based layout (.section, .section-header, .section-body)
5. Include Feather Icons CDN + call feather.replace()
6. Link to js/cems.js
7. Output clean code with proper semantic HTML
