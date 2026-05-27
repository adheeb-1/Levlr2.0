# Levlr — Personal Skill Tracker V2

> **"What you do daily defines you."**

Levlr is a personal skill tracking web app that lets you log daily practice sessions, visualise your growth over time, and get AI-powered feedback on your progress.

**Live:** [levlr-phi.vercel.app](https://levlr-phi.vercel.app)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | HTML, CSS, Vanilla JavaScript |
| Auth & Database | Firebase Authentication + Firestore |
| AI Feedback | Groq API (Llama 3.3 70B) |
| Charts | Chart.js |
| Hosting | Vercel |

---

## Pages

- **`index.html`** — Landing page with hero, how-it-works, features, login/signup modal
- **`dashboard.html`** — Main app: log sessions, view streaks, activity grid, charts, AI feedback
- **`growth.html`** — Day 1 vs Now comparison, skill timeline, AI growth summary
- **`monthly.html`** — Monthly stats, per-skill breakdown, AI monthly review

---

## Features

- Email/password authentication via Firebase Auth
- Log sessions with skill, duration, notes, and what you learned
- Streak tracking and session history per skill
- Activity heatmap grid (GitHub-style)
- Progress chart (Chart.js)
- AI feedback on each log using Groq (Llama 3.3 70B)
- Day 1 vs Now comparison across all skills
- Monthly review with AI-generated summary
- Fully responsive on mobile and desktop

---

## Improvements Made (V1 → V2)

### Visual & UI Overhaul
| V1 | V2 |
|---|---|
| Static, minimal CSS | Cinematic entrance animations on all 4 pages |
| Plain dark background | Full-page particle canvas (120 dots, connecting lines, grid) |
| No depth | Frosted glass cards with `backdrop-filter: blur` |
| No personality | Ambient floating orbs, scanline overlay, trailing cursor dot |
| 1 animation (`@keyframes marquee`) | 18+ animations across all pages |
| Hero loads instantly | Staggered hero load sequence with glitch effect on headline |
| Static stat numbers | Count-up animation on all stat numbers |
| Plain CTA button | Pulsing glow animation on CTA |

### Page-Specific Upgrades
- **Dashboard** — Burst explosion on log button, activity grid ripple, AI feedback typewriter effect
- **Growth** — Timeline stagger animation, pulsing timeline dots, skill tab flash on click
- **Monthly** — Stat cards pop-in stagger, hero breathing glow, AI review typewriter
- **Index** — Glitch effect on headline, text flicker, hero spacing tightened for better visual rhythm

### Mobile Responsiveness (Major Fix)
| V1 | V2 |
|---|---|
| No mobile topbar on growth/monthly | Proper fixed topbar on all 3 inner pages |
| Floating ☰ button overlapped "Levlr" text | Levlr left, ☰ right — clean layout |
| Sidebar stayed open on page load | Sidebar starts hidden on mobile |
| No way to close sidebar | Dark backdrop overlay — tap outside to close |
| Breakpoint mismatch (768px vs 900px) | Unified 900px breakpoint across all pages |
| `sidebarReveal` animation overrode mobile hide | Animation disabled on mobile via media query |

### Bug Fixes
| Bug | Fix |
|---|---|
| Login/signup modal invisible | Cinematic CSS overrode `z-index: 500` → `2`; fixed to `5000` |
| Page scroll permanently locked after clicking nav | Same z-index bug caused modal to open invisibly, locking `body overflow:hidden` |
| ☰ button did nothing on growth/monthly | `toggleSidebar()` used `getElementById('sidebar')` but element had no `id` |
| Sidebar open by default on mobile dashboard | `sidebarReveal` animation forced `translateX(0)` overriding CSS hide |
| Width gap between sidebar and content panels | Content `padding` reduced from `40px` to `24px` |

---

## What I Learned

- How Firebase Auth and Firestore work together for a real user system
- Integrating a third-party AI API (Groq) for live generated feedback
- The complexity of mobile responsiveness — breakpoints, z-index stacking, animation conflicts
- Debugging CSS specificity issues (when `!important` fights itself)
- How `position: fixed` elements and CSS animations interact on mobile browsers
- Deploying and iterating on a live app with Vercel

---

## Setup

No local setup needed — it's fully client-side and hosted on Vercel.

To run locally just open any `.html` file in a browser. Firebase is configured and connected.
