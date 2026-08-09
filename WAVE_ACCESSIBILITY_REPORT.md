# WAVE Accessibility Report

**Checker:** WAVE Web Accessibility Evaluation Tool (wave.webaim.org)  
**Reviewed page:** Published Projects page and Home page  
**Date:** August 8, 2026

## Findings and fixes

| Issue | Element affected | What WAVE reported | Why it matters | Fix applied |
| --- | --- | --- | --- | --- |
| Skipped heading level | The `h3` heading **Build Optimizer CLI** in the Projects grid | **Alert: Skipped heading level**. The page moved from its `h1` (**My Projects**) directly to an `h3`. | Screen-reader users often navigate by heading. Skipping a level makes the page outline harder to understand and can make a collection of projects seem disconnected from the page’s main topic. | Added the `h2` **Project collection** before the project-card `h3` headings. |
| Redundant link: Web Framework | The **View Details** link in the Web Framework card on the home page | **Alert: Redundant link**. This link and another adjacent/similar **View Details** link led to the same `project-detail.html` destination. | People using a screen-reader links list hear several identical “View Details” links with no dependable way to tell which project each represents. A distinct destination preserves the relationship between a card and its action. | Changed this link to `project-detail.html?project=react-ui`. |
| Redundant link: Development Tool | The **View Details** link in the Development Tool card on the home page | **Alert: Redundant link**. This link repeated the same `project-detail.html` destination used by the other project cards. | Repeated links to the same generic page add unnecessary stops for keyboard and screen-reader users and make it harder to select the intended project. | Changed this link to `project-detail.html?project=deploy-assistant`; the CLI Tool card now has its own `build-optimizer` destination as well. |

## Verification

WAVE was rerun against the deployed pages after publishing commit `077f1f2`.

- **Home page:** 0 errors, 0 contrast errors, and no redundant-link findings.
- **Projects page:** 0 errors, 0 contrast errors, and no skipped-heading finding.

WAVE’s remaining structural and feature markers (such as language, navigation, skip link, headings, main, and footer) are positive informational indicators, not errors.
