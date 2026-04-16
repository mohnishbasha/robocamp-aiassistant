# CLAUDE.md — Robocamp AI Assistant Website

Instructions for Claude Code when working in this project.

---

## Project Overview

This is a **static HTML/CSS/JS website** for Westwood Robotics Robocamp 2026 — a summer robotics camp at Westwood High School in Austin, TX. It is deployed via **GitHub Pages** and requires no build step.

The site was generated from the official 2026 Robocamp Handbook located at:
```
~/Downloads/2026 Robocamp Handbook _ Westwood Robotics _ Summer '26/2026RobocampHandbookWestwoodRoboticsSummer26.html
```

---

## Architecture

**Pure static site — no framework, no bundler, no package.json.**

```
css/style.css     — All styles. Uses CSS custom properties (variables).
js/main.js        — Nav hamburger, FAQ accordion, tab switching.
js/chat.js        — AI chat widget: knowledge base (KB array) + UI logic.
*.html            — Six pages. Each includes the same nav/footer/chat widget.
```

There is no shared template or component system. Nav and footer are duplicated across all 6 HTML files. When updating shared elements (nav links, footer), **edit all 6 files**.

---

## Design System

All colors and spacing are defined as CSS custom properties in `css/style.css` under `:root`. Do not use hardcoded hex values in HTML — always reference a variable.

**Key variables:**
```css
--blue          /* primary brand blue */
--purple        /* secondary accent */
--mint          /* success / positive */
--yellow        /* warning */
--coral         /* danger / alert */
--bg            /* page background */
--surface       /* card / panel background */
--border-soft   /* default border color */
--r-xl          /* large border radius (used on cards) */
--r-pill        /* fully rounded (buttons, badges) */
--font-body     /* Nunito — friendly, round */
--font-heading  /* Space Grotesk — techy, geometric */
```

**Badge colors** follow a semantic convention:
- `badge-blue` → Elementary program
- `badge-purple` → Middle School program
- `badge-mint` → Success / positive info
- `badge-yellow` → Warning
- `badge-coral` → Danger / alert
- `badge-orange` → Special events / highlights

---

## AI Chat Assistant

The chat knowledge base is the `KB` array at the top of `js/chat.js`. Each entry:
```js
{
  tags: ['keyword', 'multi word tag'],   // space-separated words score higher
  q: 'Display question',
  a: 'HTML string answer'
}
```

The `findAnswer()` function scores each KB entry by counting how many tags appear in the user's input. Multi-word tags score higher than single-word ones. If no entry scores ≥ 1, a fallback response is shown.

**To add a new topic:** append an entry to `KB` with relevant tags and an HTML answer.
**To update an answer:** find the entry by its `q` field and edit `a`.

---

## Responsive Breakpoints

| Breakpoint | Behavior |
|---|---|
| `≤ 1000px` | 4-col grids → 2-col; footer → 2-col |
| `≤ 768px` | Desktop nav hidden, hamburger shown; 2/3-col grids → 1-col; footer → 1-col |
| `≤ 560px` | Hero actions stack vertically; all grids → 1-col; headings scale down |
| `≤ 400px` | Reduced container padding; tab buttons shrink |

---

## Pages & Their Unique Sections

| Page | Key unique content |
|---|---|
| `index.html` | Hero with stats, session cards, activity 4-col grid, take-home section |
| `sessions.html` | Full session detail cards, pricing table, payment steps |
| `schedule.html` | Tabbed schedule tables (Elementary / Middle School) |
| `activities.html` | Sticky category jump-link bar, activity cards by category |
| `policies.html` | Policy lists, consequence escalation steps, medical alert |
| `faq.html` | Inline AI chat (not floating), full FAQ accordion, contact CTA |

---

## Deployment

**GitHub Pages** — deployed from the `main` branch root directory.

```bash
# Push changes
git add .
git commit -m "Update: description"
git push

# Live at:
# https://mohinishbasha.github.io/robocamp-aiassistant/
```

GitHub Pages auto-deploys ~30 seconds after each push.

---

## Content Updates

All camp content is hardcoded in the HTML files. Key content locations:

| Content | Location |
|---|---|
| Session dates & prices | `sessions.html` (session cards) and `index.html` (session overview) |
| Schedule tables | `schedule.html` (two `<table>` elements inside tab panels) |
| Activity descriptions | `activities.html` (activity-card divs, organized by section) |
| Rules & policies | `policies.html` (policy-list ul elements) |
| FAQ answers | `faq.html` (faq-answer divs) AND `js/chat.js` (KB array) |
| Quick info bar | `index.html` (`.info-bar` section) |

When updating session dates or prices, update **both** `index.html` and `sessions.html`.
When updating FAQ answers, update **both** `faq.html` and the matching `KB` entry in `js/chat.js`.

---

## Do Not

- Do not add a framework or build tool unless explicitly requested.
- Do not add `node_modules`, `package.json`, or any npm dependencies.
- Do not break the no-external-dependency constraint — Google Fonts is the only external resource.
- Do not use hardcoded hex colors in HTML inline styles — use CSS variables.
- Do not add a backend or API calls — the AI assistant must remain client-side only.
- Do not commit `.claude/settings.local.json` (it is in `.gitignore`).
