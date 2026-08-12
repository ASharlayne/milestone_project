# Development Portfolio - Site Plan

## Project Overview
A code-inspired developer portfolio showcasing CLI tools, frameworks, and development projects with a dark theme aesthetic.

---

## Information Architecture

### Site Structure
```
Home (index.html)
├── Hero Section
├── Featured Projects Preview
└── CTA to Projects

Projects (projects.html)
├── Project Grid/List
├── Filter by Category (CLI Tools, Frameworks, Other)
└── Individual Project Cards with Details

About (about.html)
├── Personal Introduction
├── Skills & Tech Stack
├── Experience/Background
└── Contact Links

Project Detail (project-detail.html)
├── Project Title & Metadata
├── Description & Problem Statement
├── Screenshots/Demo
├── Tech Stack
├── Links (GitHub, Live Demo)
└── Related Projects
```

---

## Page Breakdown

### 1. Home (index.html)
**Purpose**: Introduce the portfolio, establish design tone, encourage exploration

**Sections**:
- **Header/Navigation**: Fixed or sticky nav with logo, links to Projects, About
- **Hero Section**: 
  - Developer tagline/title
  - Brief intro (1-2 sentences)
  - CTA button → "View My Work"
- **Featured Projects Preview**:
  - 2-3 highlighted projects (CLI tool, framework, other)
  - Project card snippets: title, description, tech tags, link
- **Footer**: Social links, copyright

---

### 2. Projects (projects.html)
**Purpose**: Showcase all development work with filtering capability

**Sections**:
- **Header/Navigation**: Same as home
- **Page Title**: "My Projects"
- **Filter/Category Buttons**:
  - All
  - CLI Tools
  - Frameworks
  - Other
- **Project Grid** (responsive):
  - Individual project cards displaying:
    - Project thumbnail/icon
    - Project title
    - Short description (1-2 lines)
    - Tech stack tags (languages, frameworks)
    - Category badge
    - "View Details" link
- **Footer**: Same as home

---

### 3. About (about.html)
**Purpose**: Build connection, showcase expertise and background

**Sections**:
- **Header/Navigation**: Same as home
- **About Me**:
  - Personal intro paragraph
  - Professional background
  - What drives your work
- **Skills & Tech Stack**:
  - Languages (Python, JavaScript, Go, Rust, etc.)
  - Frameworks & Tools
  - Databases, DevOps, etc.
- **Experience Timeline** (optional):
  - Key milestones or roles
- **Contact Section**:
  - Email link
  - GitHub profile link
  - LinkedIn, Twitter, or other social
- **Footer**: Same as home

---

### 4. Project Detail (project-detail.html)
**Purpose**: Deep dive into individual projects

**Sections**:
- **Header/Navigation**: Same as home
- **Back Button**: Link back to Projects
- **Project Hero**:
  - Project title
  - Category badge
  - One-liner description
- **Project Metadata**:
  - Status (Active, Archived, Maintained)
  - Year/Date
  - Role (Author, Contributor, Creator)
- **Problem Statement**:
  - What problem does it solve?
  - Why was it built?
- **Solution**:
  - How it works (overview)
  - Key features
- **Tech Stack**:
  - Languages, frameworks, dependencies
  - Displayed as tags or list
- **Visual Content**:
  - Screenshots or demo GIF
  - Code snippet (optional)
- **Links**:
  - GitHub repository
  - Live demo or documentation link
  - NPM/PyPI package link (if applicable)
- **Related Projects**:
  - 2-3 similar projects for discovery
- **Footer**: Same as home

---

## Content Strategy

### Project Information Structure
Each project should include:
1. **Title**: Clear, descriptive name
2. **Category**: CLI Tool, Framework, or Other
3. **Description**: 1-2 sentence summary
4. **Long Description**: Paragraph explaining purpose and functionality
5. **Tech Stack**: Array of technologies used
6. **Links**: GitHub URL, live demo URL, documentation
7. **Status**: Active/Maintained/Archived
8. **Year**: Release or last updated year

### Example Projects
- **CLI Tool**: Command-line utility (e.g., build tool, data processor, deployment helper)
- **Framework**: Reusable library or framework (e.g., web framework, utility library)
- **Other**: Any other development project (games, experiments, integrations)

---

## Design System (Code-Inspired)

### Color Palette
- **Primary Background**: Dark (e.g., #0d1117 or #1a1a1a)
- **Secondary Background**: Slightly lighter (e.g., #161b22)
- **Accent Color**: Neon/electric (e.g., #58a6ff, #79c0ff - GitHub blue/cyan)
- **Text Primary**: Light gray (e.g., #c9d1d9)
- **Text Secondary**: Dimmed gray (e.g., #8b949e)
- **Accent/Success**: Green (e.g., #3fb950)
- **Warning/Secondary**: Orange/Yellow (e.g., #d29922)

### Typography
- **Headers**: Monospace or geometric sans-serif (e.g., JetBrains Mono, Space Mono, IBM Plex Mono)
- **Body**: Clean sans-serif (e.g., Inter, Roboto, -apple-system)
- **Code**: Monospace (e.g., Courier New, Consolas)

### Components
- **Project Cards**: Bordered, hover effect with accent color highlight
- **Code Blocks**: Dark theme with syntax highlighting
- **Buttons**: Clean with accent color, hover states
- **Tags**: Small badges with tech names
- **Navigation**: Minimal, possibly with accent underline on active state

---

## Responsive Design
- **Desktop** (1024px+): Multi-column layouts
- **Tablet** (768px-1023px): 2-column grids
- **Mobile** (< 768px): Single column, touch-friendly buttons

---

## Navigation Flow
```
Home → Projects → Project Detail
     ↓
    About → Contact
```

---

## Success Metrics
- Easy discovery of projects
- Clear understanding of tech stack
- Simple access to GitHub repositories
- Professional impression
- Mobile responsiveness

---

## Accessibility

WAVE (wave.webaim.org) was run against the published site for all three pages — Home (`index.html`), Projects (`pages/projects.html`), and About & Contact (`pages/about.html`). All three report **0 errors, 0 contrast errors, and 0 alerts**. The pages were also checked with axe-core, including the contact form in its error state, with 0 violations. See `WAVE_ACCESSIBILITY_REPORT.md` for the run-by-run detail.

### Issues WAVE reported, and how each was fixed (one sentence per fix)
- **Skipped heading level (Projects):** Added the `h2` "Project collection" between the page `h1` and the project-card `h3` headings so the heading outline no longer jumps a level.
- **Redundant link — Web Framework (Home):** Gave that card's "View Details" link its own destination (`?project=react-ui`) so it no longer duplicates another link's target.
- **Redundant link — Development Tool (Home):** Gave that card's "View Details" link its own destination (`?project=deploy-assistant`), and the CLI Tool card its own `?project=build-optimizer`, so each link is distinguishable in a screen-reader links list.

### Additional accessibility improvements (verified with WAVE and axe-core)
- **Low-contrast text:** Raised muted body text from `#8b949e` to `#aab7c2` and badge text to `#c9d1d9` so every text/background pair clears WCAG AA rather than sitting near the threshold.
- **Skip navigation:** Added a "Skip to main content" link and a matching `id="main"` target on every page so keyboard users can bypass the header.
- **Form labels (About):** Every field in the contact form has an explicit `<label for="...">`, so no input relies on placeholder text alone.
- **Radio group semantics (About):** The "Reason for contact" radios are wrapped in a `<fieldset>` with a `<legend>` so their shared question is announced with each option.
- **Form instructions (About):** Added a form-level instruction paragraph referenced with `aria-describedby`, plus an `aria-describedby` hint on the email field.
- **Announced error states (About):** Validation errors are written into per-field `aria-live="polite"` regions, mark the field `aria-invalid="true"`, and are summarised in a `role="alert"` error summary that receives focus and links to each failing field.
- **Insecure external links:** Added `rel="noopener noreferrer"` to every link that opens in a new tab.
- **Form-control borders:** Form controls use `--border-control: #6e7681` (3.8:1 against the field background) to satisfy WCAG 1.4.11 non-text contrast.
- **Visible keyboard focus:** Added `:focus-visible` outlines and accent focus rings on inputs, buttons, and the skip link so the focused control is always obvious.

### Contrast (WCAG AA)
Every text/background pair used on the site was checked with the WebAIM Contrast Checker; the lowest ratio in use is 5.8:1, well above the 4.5:1 AA requirement for normal text.

| Text | Background | Ratio |
| --- | --- | --- |
| Body text `#c9d1d9` | page `#0d1117` | 12.3:1 |
| Muted text `#aab7c2` | page `#0d1117` | 9.3:1 |
| Muted text `#aab7c2` | card surface | 8.7:1 |
| Accent link `#58a6ff` | page `#0d1117` | 7.5:1 |
| Button text `#0d1117` | accent `#58a6ff` | 7.5:1 |
| Card heading `#ffffff` | card surface | 17.8:1 |
| Tag / badge text `#c9d1d9` | tinted badge | 9.4:1 |
| Skill tag `#b5f2a1` | tinted green badge | 11.0:1 |
| Error text `#ffb4a2` | error summary background | 9.4:1 |
| Active filter `#58a6ff` | tinted accent background | 5.8:1 |

## Visual Design

### Gestalt principles used
- **Proximity:** I used proximity to group the contact block on the About page — the contact details and the contact form each sit in their own bordered `.contact-group` with tight internal spacing (8–16px between a label, its field, and its error message) and a larger 32px gap between groups, so each label/field/error reads as one unit rather than a flat list of controls.
- **Similarity:** I used similarity so that equivalent items look equivalent — every project card (home page and Projects page) shares the same radius, border, padding, and grid, and every tag, category badge, and status badge shares one pill shape and one tinted-accent treatment, so a reader recognises "this is a project" or "this is a tech tag" without reading the text.
- **Common region (supporting):** Each `<fieldset>` draws a visible boundary around a set of related questions ("Your details", "Reason for contact", "Your message"), reinforcing the same grouping that the markup communicates to assistive technology.

### Color palette (consistent on all pages)
All pages load the same `css/styles.css` and use the same custom properties, so no page introduces a one-off colour:

| Token | Value | Use |
| --- | --- | --- |
| `--bg` | `#0d1117` | page background |
| `--surface` | `#161b22` | hero, panels, form fields |
| `--border` | `#30363d` | decorative borders |
| `--border-control` | `#6e7681` | form-control borders |
| `--accent` | `#58a6ff` | links, buttons, brand |
| `--accent-strong` | `#79c0ff` | hover state, status text |
| `--text` | `#c9d1d9` | body text, badge text |
| `--muted` | `#aab7c2` | secondary text |
| `--success` / `--success-text` | `#3fb950` / `#b5f2a1` | skill tags, status badges |
| `--error` / `--error-text` | `#f85149` / `#ffb4a2` | invalid fields, error messages |

## Accessible Contact Form
The About & Contact page includes a contact form with:
- an explicit `<label for="...">` for every input, textarea, and radio;
- three `<fieldset>`/`<legend>` groups ("Your details", "Reason for contact", "Your message"), which is what makes the radio group's shared question available to screen readers;
- required fields marked visually with `*` and programmatically with `required` / `aria-required="true"`, with the asterisk explained in the form instructions;
- `autocomplete="name"` and `autocomplete="email"` so browsers can fill known values;
- accessible error states: on submit, each invalid field gets `aria-invalid="true"`, a red border, and a message in its own `aria-live="polite"` region referenced by `aria-describedby`, and a `role="alert"` summary at the top of the form lists every error and moves focus to the field when an item is activated;
- an `aria-live` status message confirming a successful submission.

Validation is client-side only — this is a static demo site, so the form does not post to a server.
