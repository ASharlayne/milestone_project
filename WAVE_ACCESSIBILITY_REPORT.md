# WAVE Accessibility Report

**Checker:** WAVE Web Accessibility Evaluation Tool (wave.webaim.org)  
**Reviewed pages:** Published Home, Projects, and About & Contact pages  
**Dates:** August 8, 2026 (initial audit and fixes); August 12, 2026 (three-page reverification and final post-merge recheck)

## Findings and fixes

| Issue | Element affected | What WAVE reported | Why it matters | Fix applied |
| --- | --- | --- | --- | --- |
| Skipped heading level | The `h3` heading **Build Optimizer CLI** in the Projects grid | **Alert: Skipped heading level**. The page moved from its `h1` (**My Projects**) directly to an `h3`. | Screen-reader users often navigate by heading. Skipping a level makes the page outline harder to understand and can make a collection of projects seem disconnected from the page’s main topic. | Added the `h2` **Project collection** before the project-card `h3` headings. |
| Redundant link: Web Framework | The **View Details** link in the Web Framework card on the home page | **Alert: Redundant link**. This link and another adjacent/similar **View Details** link led to the same `project-detail.html` destination. | People using a screen-reader links list hear several identical “View Details” links with no dependable way to tell which project each represents. A distinct destination preserves the relationship between a card and its action. | Changed this link to `project-detail.html?project=react-ui`. |
| Redundant link: Development Tool | The **View Details** link in the Development Tool card on the home page | **Alert: Redundant link**. This link repeated the same `project-detail.html` destination used by the other project cards. | Repeated links to the same generic page add unnecessary stops for keyboard and screen-reader users and make it harder to select the intended project. | Changed this link to `project-detail.html?project=deploy-assistant`; the CLI Tool card now has its own `build-optimizer` destination as well. |

## Verification

WAVE was rerun against the deployed pages after publishing commit `077f1f2`.

- **Home page:** 0 errors, 0 contrast errors, 0 alerts — no redundant-link findings.
- **Projects page:** 0 errors, 0 contrast errors, 0 alerts — no skipped-heading finding.
- **About & Contact page:** 0 errors, 0 contrast errors, 0 alerts.

WAVE’s remaining structural and feature markers (such as language, navigation, skip link, headings, main, and footer) are positive informational indicators, not errors.

### Final recheck of the published site

After the contact form and the radio-group required markup were published, WAVE was run once more against every live page:

| Page | Errors | Contrast Errors | Alerts | AIM Score |
| --- | --- | --- | --- | --- |
| Home | 0 | 0 | 0 | 10 / 10 |
| Projects | 0 | 0 | 0 | 10 / 10 |
| About & Contact | 0 | 0 | 0 | 10 / 10 |

On the About & Contact page WAVE counts **6 form labels** and **3 fieldsets** among its positive features, confirming that every control has an associated label and that all three groups are exposed as groups. Home and Projects both report a skip link plus a matching skip-link target.

## Contact form audit

The About & Contact page now carries a full contact form, so it was audited separately with axe-core (WCAG 2.1 A/AA rule set) in three states, all reporting **0 violations**:

- **Initial state.**
- **Error state** — submitted empty so every field is invalid, the inline messages are populated, and the `role="alert"` summary is shown.
- **Success state** — after a valid submission, with the confirmation status present.

The form was also exercised in the browser:

- Submitting an empty form reveals the error summary, moves focus to it, and lists one entry per error alongside an inline message on every required field.
- Activating an entry in the summary moves focus to the control it names (the reason entry focuses the first radio).
- Malformed addresses (`foo`, `foo@`, `foo@bar`, `a b@c.de`) and whitespace-only text are rejected; fixing one field at a time shrinks the summary and clears that field's `aria-invalid`.
- A valid submission announces the confirmation through the `aria-live` status region, hides the summary and clears every field, leaving no stale state behind on the next submission.
- The whole form can be completed and submitted with the keyboard alone, and the skip link is the first tab stop on all three pages.

Because the radios carry native `required` while the form carries `novalidate`, the custom error summary remains the only error surface — no browser validation bubbles appear.

## Contrast

All text/background pairs in the palette were calculated against the WCAG relative-luminance formula (the same calculation the WebAIM Contrast Checker uses); the lowest ratio in use is 5.8:1 against the 4.5:1 AA requirement. Form-control borders use `#6e7681` for 3.8:1 non-text contrast (WCAG 1.4.11). The full table is in `README.md`.
