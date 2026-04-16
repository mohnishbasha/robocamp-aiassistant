# Robocamp 2026 — AI-Assisted Parent Website

A responsive, parent-friendly website for **Westwood Robotics Robocamp 2026** — a summer robotics camp at Westwood High School in Austin, TX. Built from the official 2026 Robocamp Handbook with an integrated AI assistant to help parents find information instantly.

**Live site:** `https://mohinishbasha.github.io/robocamp-aiassistant/`

---

## Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Hero, session overview, activity highlights, packing list, FAQ preview |
| Sessions | `sessions.html` | All 3 session dates, pricing ($325/$350), step-by-step registration |
| Schedule | `schedule.html` | Day-by-day schedule tables for Elementary & Middle School (tabbed) |
| Activities | `activities.html` | All 30+ activities organized by category with descriptions |
| Policies | `policies.html` | Safety rules, behavior contract, medical policy, drop-off/pick-up, waiver |
| FAQ + AI | `faq.html` | Full FAQ accordion + inline AI chat assistant |

---

## Features

- **AI Chat Assistant** — Floating robot button on every page + full inline chat on the FAQ page. Powered by a keyword-matching knowledge base built from the handbook. No API key required — works entirely client-side.
- **Pastel Tech Robotic Theme** — Light, friendly design using Nunito + Space Grotesk fonts, pastel blue/purple/mint palette, and rounded UI components.
- **Fully Responsive** — Mobile-first layout with hamburger navigation, fluid type scaling (`clamp()`), and horizontal-scrolling schedule tables on small screens.
- **No Build Step** — Pure HTML/CSS/JS. No frameworks, no bundler, no dependencies. Deploy anywhere static files are served.
- **Accessibility** — Semantic HTML, ARIA labels on interactive elements, sufficient color contrast, keyboard-navigable.

---

## Project Structure

```
robocamp-aiassistant/
├── index.html          # Home page
├── sessions.html       # Sessions & registration
├── schedule.html       # Daily schedule (tabbed)
├── activities.html     # All 30+ activities
├── policies.html       # Rules, safety, medical, waiver
├── faq.html            # FAQ accordion + AI assistant
├── css/
│   └── style.css       # All styles (CSS variables, responsive grid)
├── js/
│   ├── main.js         # Navigation, tabs, FAQ accordion
│   └── chat.js         # AI assistant knowledge base + chat UI
├── images/             # (empty — no external images needed)
├── .gitignore
├── README.md
├── CLAUDE.md
└── SKILLS.md
```

---

## Camp Info (Quick Reference)

| | |
|---|---|
| **Camp Name** | Robocamp 2026 — Westwood Robotics |
| **Location** | Westwood High School, Makerspace C1307 — 12400 Mellow Meadow Dr, Austin TX 78750 |
| **Session 1** | June 1–4, 2026 (Elementary, K–5) |
| **Session 2** | June 15–18, 2026 (Middle School, 6–8) |
| **Session 3** | July 13–16, 2026 (Elementary, K–5) |
| **Hours** | 9:00 am – 5:00 pm daily |
| **Cost** | $325 (no lunch) / $350 (with Domino's Pizza) |
| **Registration** | [westwoodrobots.org/robocamp](https://westwoodrobots.org/robocamp) |
| **Payment** | [rrisdpay.com](https://rrisdpay.com) → High Schools → Westwood → Robotics Club |
| **Email** | westwood_robotics@roundrockisd.org |
| **Instagram** | [@ww_robotics](https://instagram.com/ww_robotics) |

---

## Deploying to GitHub Pages

### First time
```bash
# 1. Create repo and push
gh repo create robocamp-aiassistant --public --source=. --remote=origin --push

# 2. Enable GitHub Pages (deploys from main branch root)
gh api repos/mohinishbasha/robocamp-aiassistant/pages \
  --method POST \
  -f source='{"branch":"main","path":"/"}'
```

Site goes live at `https://mohinishbasha.github.io/robocamp-aiassistant/` within ~2 minutes.

### Updating the site
```bash
git add .
git commit -m "Update: describe what changed"
git push
```
GitHub Pages auto-deploys within ~30 seconds of each push.

---

## Updating the AI Assistant

The AI chat knowledge base lives in `js/chat.js` in the `KB` array. Each entry has:

```js
{
  tags: ['keyword1', 'keyword2'],   // words that trigger this answer
  q: 'Question shown as example',
  a: 'HTML answer string'
}
```

To add a new Q&A, append an entry to the `KB` array. To update an existing answer, find the matching entry by its `tags` or `q` field and edit the `a` string. HTML is supported in answers.

---

## Tech Stack

| | |
|---|---|
| **HTML** | Semantic HTML5, no frameworks |
| **CSS** | Custom properties, CSS Grid, Flexbox, `clamp()`, `backdrop-filter` |
| **JavaScript** | Vanilla ES6+, no dependencies |
| **Fonts** | Nunito (body) + Space Grotesk (headings) via Google Fonts |
| **Hosting** | GitHub Pages (static) |
| **AI** | Client-side keyword-matching knowledge base (no API key needed) |

---

## Source

Website content derived from the **2026 Robocamp Handbook — Westwood Robotics** (last updated April 15, 2026). Site built with [Claude Code](https://claude.ai/code).
