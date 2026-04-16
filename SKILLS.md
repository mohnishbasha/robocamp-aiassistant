# SKILLS.md — Technologies & Skills Used

A reference guide to every technology, technique, and design pattern in this project. Useful for understanding the codebase, onboarding contributors, or extending the site.

---

## HTML

| Skill | Where Used |
|---|---|
| **Semantic HTML5** — `<nav>`, `<section>`, `<footer>` | All pages |
| **ARIA labels** — `aria-label` on buttons and interactive elements | Hamburger menu, chat FAB, send button |
| **Meta tags** — `charset`, `viewport`, `description` for SEO | All `<head>` sections |
| **Tab panels** — `data-tab` / `data-panel` attributes drive tab switching | `schedule.html` |
| **Anchor jump links** — `href="#section-id"` with smooth scroll | `activities.html`, `policies.html` |
| **Responsive tables** — wrapping `<table>` in a scroll container div | `schedule.html` |

---

## CSS

| Skill | Where Used |
|---|---|
| **CSS Custom Properties** — all colors, spacing, radii defined as `--variables` | `css/style.css :root` |
| **CSS Grid** — `repeat()`, `auto-fit`, `minmax()` | All layout sections |
| **Flexbox** — nav, info bar, cards, chat messages | Throughout |
| **`clamp()`** — fluid responsive typography without extra breakpoints | All heading sizes |
| **`backdrop-filter: blur()`** — frosted glass navbar | `.navbar` |
| **Linear gradients** — hero, buttons, headers, footer | Hero, buttons, chat header |
| **CSS Animations** — `@keyframes pulse`, `msgIn`, `blink` | Status dot, chat messages, typing dots |
| **`position: sticky`** — category nav visible while scrolling | `activities.html` |
| **`overflow-x: auto`** — horizontal scroll for tables on mobile | `.schedule-wrap` |
| **`-webkit-background-clip: text`** — gradient colored text | Hero headline, session prices |
| **`transition`** — smooth hover effects on cards, buttons, nav | Cards, buttons, nav |
| **`transform: translateY()`** — card lift on hover, chat window animation | Cards, `#chat-window` |
| **`@media` queries** — 4 breakpoints: 1000px, 768px, 560px, 400px | `css/style.css` bottom |
| **`cubic-bezier` easing** — spring-like chat window open animation | `#chat-window` transition |

---

## JavaScript

| Skill | Where Used |
|---|---|
| **Vanilla ES6+** — `const`, arrow functions, template literals | `js/main.js`, `js/chat.js` |
| **`querySelectorAll()`** — batch element selection | FAQ accordion, tab nav, nav links |
| **`classList.toggle/add/remove`** — UI state management | Mobile nav, hamburger, FAQ, chat |
| **`dataset`** — read `data-tab` / `data-panel` attributes | Tab switching in `js/main.js` |
| **`createElement` + `innerHTML`** — dynamic chat message injection | `js/chat.js` |
| **`scrollTop = scrollHeight`** — auto-scroll chat to latest message | `js/chat.js` |
| **`setTimeout`** — simulated AI typing delay (600–1000ms) | `js/chat.js` |
| **Keyword scoring algorithm** — ranks KB entries by tag matches | `js/chat.js` `findAnswer()` |
| **HTML escaping** — `escapeHtml()` prevents XSS in user messages | `js/chat.js` |
| **`location.pathname`** — detects current page to highlight active nav link | `js/main.js` |
| **`max-height` transition trick** — smooth accordion expand without JS height calc | FAQ accordion |

---

## AI Assistant Architecture

The chat assistant in `js/chat.js` uses a **client-side keyword-matching knowledge base** — no API key, no server, no cost.

```
User types question
      ↓
findAnswer() normalizes input to lowercase
      ↓
Iterates KB array — scores each entry:
  multi-word tags score higher than single words
      ↓
Returns highest-scoring answer (score ≥ 1) or fallback
      ↓
setTimeout simulates 600–1000ms "thinking" delay
      ↓
HTML answer injected into chat DOM
```

**Special cases handled before scoring:**
- Greetings (`hi`, `hello`, `hey`) → welcome response
- Thanks (`thank`, `great`, `perfect`) → you're welcome response

**To add a new topic** — append to the `KB` array in `js/chat.js`:
```js
{
  tags: ['keyword1', 'multi word tag'],
  q: 'Example question text',
  a: 'HTML answer string with <strong>formatting</strong>'
}
```

---

## Design System

| Concept | Detail |
|---|---|
| **Fonts** | Nunito (body — friendly, round) + Space Grotesk (headings — techy) via Google Fonts |
| **Color palette** | Pastel: blue `#5b8dee`, purple `#a78bfa`, mint `#34d399`, yellow `#fbbf24`, coral `#fb7185` |
| **Semantic colors** | blue=info, mint=success, yellow=warning, coral=danger |
| **Border radius scale** | `--r-sm` (10px) → `--r-md` → `--r-lg` → `--r-xl` (32px) → `--r-pill` (100px) |
| **Shadow scale** | `--shadow-xs` through `--shadow-xl` — all blue-tinted for brand cohesion |
| **Emoji as icons** | No icon font needed — emojis provide visual cues at zero cost |
| **Gradient text** | `-webkit-background-clip: text` on hero `h1` and prices |
| **Dot-grid texture** | `radial-gradient` background creates subtle circuit-board pattern on hero |
| **Frosted glass nav** | `backdrop-filter: blur(14px)` + semi-transparent white |
| **Mobile-first** | Base CSS targets small screens; breakpoints layer in complexity |

---

## GitHub Pages Deployment

| Concept | Detail |
|---|---|
| **Hosting type** | Static — serves HTML/CSS/JS files directly, no server-side code |
| **Branch** | Deployed from `main` branch, root directory `/` |
| **Auto-deploy** | Pushes to `main` trigger re-deployment in ~30 seconds |
| **URL** | `https://mohinishbasha.github.io/robocamp-aiassistant/` |
| **No config needed** | Plain HTML site — no `_config.yml` or Jekyll required |
| **Enable via CLI** | `gh api repos/OWNER/REPO/pages --method POST -f source='{"branch":"main","path":"/"}'` |
