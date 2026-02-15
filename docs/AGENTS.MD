# FairShare Frontend — AGENTS.md (Living Project Snapshot)

This document is the **handoff + rules-of-the-road** for the FairShare frontend.

## Purpose (read this first)
- **Single source of truth** for what exists in this repo right now (structure, routes, components, styling, conventions).
- **Update cadence:** Anytime you add/move/rename a page/component, change routing, add a new library, or introduce a new convention, update this file in the same change.
- **Audience:** You (future you) + any AI assistant. It should be understandable in <2 minutes.

---

## Tech stack (current)
- **Build tool:** Vite
- **UI:** React (with JSX transform via `@vitejs/plugin-react`)
- **Language:** TypeScript
- **Routing:** `react-router-dom`
- **Styling:** Tailwind CSS v4 (via `@tailwindcss/vite`)
- **Linting:** ESLint (flat config) + `typescript-eslint` + React Hooks / React Refresh rules

### Planned (not implemented yet)
- **Auth:** Supabase Auth (Google OAuth)
  - Note: there are currently **no Supabase dependencies** in `package.json` and no `supabase` usage in `src/`.

---

## Repo layout & conventions

### Pages
- **Location:** `src/pages/`
- **Rule:** Pages should be **composition-only**.
  - They import the relevant components and lay out the page.
  - Keep business logic and reusable UI out of pages when possible.

### Components
- **Root:** `src/components/`
- **Two buckets:**
  - `src/components/shared/`
    - Reusable components used across multiple pages/features.
    - Examples (future): buttons, modals, form fields, layout primitives.
  - `src/components/standalone/<PageName>/`
    - Page-specific components that are not meant to be reused elsewhere.
    - `<PageName>` should match the page file name (e.g. `Hero` page → `standalone/Hero/`).

### Naming conventions
- **Components:** PascalCase file names, `.tsx` (e.g. `HeroSection.tsx`).
- **Folders:**
  - Page-specific folder matches the page name (e.g. `Hero/`).
  - Keep related sections grouped together.
- **Imports:** Current code uses explicit TS extensions in imports (e.g. `"./Hero.tsx"`). Prefer keeping this consistent unless you intentionally change the convention.

### “Lib” utilities
- **Location:** `src/lib/`
- **Rule:** Non-React utilities/constants that are shared across the app.

---

## Current app entry points

### HTML entry
- `index.html`
  - Loads fonts (Inter + Material Symbols).
  - Mounts React at `<div id="root" />`.

### React entry
- `src/main.tsx`
  - Creates the React root
  - Wraps app in `BrowserRouter`

### App router
- `src/App.tsx`
  - Defines routes using `react-router-dom`.

---

## Current routes

### `/`
- Page: `src/pages/Hero.tsx`
- Purpose: Landing page prototype (dark, glassy UI)
- Structure: renders `Navbar` + `<main>` containing a sequence of landing sections.

---

## Landing page: Hero (`src/pages/Hero.tsx`)

### Standalone components
Location: `src/components/standalone/Hero/`
- `Navbar.tsx`
  - Fixed top nav with brand + links + CTA.
- `HeroSection.tsx`
  - Main headline + subtext + CTA button + “dashboard preview” mock.
- `FeaturesSection.tsx`
  - “Smart Scan Technology” section with image + copy.
- `HighlightsSection.tsx`
  - Grid of feature highlight cards + larger “Groups for every occasion” card.
- `CallToActionSection.tsx`
  - Final CTA section (“Ready to settle up?”)
- `Footer.tsx`
  - Footer content and links.
  - Uses `GITHUB_URL` from `src/lib/constants.ts`.

### Page composition
- `Hero.tsx` uses:
  - `<Navbar />`
  - `<main className="min-h-screen bg-background-dark bg-hero-glow"> ...sections... </main>`

---

## Styling

### Tailwind config
- `tailwind.config.ts`
  - `darkMode: "class"`
  - `content`: `./index.html`, `./src/**/*.{js,ts,jsx,tsx}`
  - `theme.extend` includes:
    - `colors`: `primary`, `background-light`, `background-dark`, `surface-dark`, `glass`
    - `fontFamily`: `display`, `sans` (Inter)
    - `borderRadius`: default → full
    - `backgroundImage`: `hero-glow` (radial gradient)

### Global CSS utilities
- `src/styles/global.css`
  - Imports Tailwind (`@import "tailwindcss";`)
  - Uses `@config "../../tailwind.config.ts";`
  - Defines custom classes used throughout the landing page:
    - `.glass-panel`
    - `.text-gradient`
    - `.text-gradient-primary`
  - Custom scrollbar styling

---

## Constants
- `src/lib/constants.ts`
  - `GITHUB_URL` used by landing footer.

---

## Tooling scripts
From `package.json`:
- `dev`: run Vite dev server
- `build`: TypeScript build (project references) + Vite build
- `lint`: ESLint
- `preview`: Vite preview

---

## Known gaps / TODO (keep this short and current)
- Supabase Google auth not wired yet (no deps/usages yet).
- Shared component library (`src/components/shared/`) currently empty.
- Landing page is present; app features (groups/expenses/settlements) not started yet.
