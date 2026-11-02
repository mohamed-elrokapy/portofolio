# Mohamed Elsayed Abdelmohsen, portfolio

Personal portfolio of Mohamed Elsayed Abdelmohsen, a full-stack developer in Giza, Egypt (React, Next.js, TypeScript, Python/FastAPI, Strapi, Linux, Plesk and DNS, currently working with FloLabs).

Live site: https://portofolio-xi-wine.vercel.app

| Desktop, light | Mobile, dark, Arabic (RTL) |
| --- | --- |
| ![Desktop light](docs/screenshots/desktop-light.png) | ![Mobile dark Arabic](docs/screenshots/mobile-dark-arabic-rtl.png) |

## Features

- Single-page site: hero, about and experience, skills, projects, contact.
- English and Arabic, with the page direction switching to RTL. The choice is saved in `localStorage`.
- Light and dark theme, saved in `localStorage`, applied before first paint to avoid a flash.
- Keyboard friendly: visible focus rings, semantic landmarks, `aria-current` on the active nav item, Escape closes the mobile menu.
- Respects `prefers-reduced-motion`.
- Fonts (IBM Plex Sans, Mono and Sans Arabic) are self-hosted through `@fontsource`, no CDN.
- All text lives in `project/src/i18n/translations.ts` and project/skill data in `project/src/data/portfolio.ts`, so content changes do not touch components.

## Stack

React 18, TypeScript, Vite 5, Tailwind CSS 3, lucide-react. State is plain React context (language and theme). Hosted on Vercel.

## Run locally

```bash
cd project
npm ci
npm run dev        # http://localhost:5201
npm run lint
npm run typecheck
npm run build      # output in project/dist
npm run preview    # serves the build on port 5201
```

No environment variables are needed.

## CI

`.github/workflows/ci.yml` runs `npm ci`, lint, typecheck and build in `project/` on every push and pull request.

## Content notes

- Project descriptions were rewritten to say only what could be confirmed from each repository (its dependencies, folders and README). Earlier claims that could not be confirmed, such as "secure authentication", "real-time health data tracking" and "interactive maps", were removed.
- The old contact form only simulated sending and never delivered anything, so it was replaced by direct contact links.
- Stock photos that had been used as project thumbnails were removed because they were not screenshots of the projects.
- Experience entries come from the CV in `project/public/`, which is unchanged.

## Verification and limitations

Verified by running `npm run lint`, `npm run typecheck` and `npm run build` (all pass), and by driving the dev server with Playwright at 1280x800 and 390x844 in light, dark, English and Arabic (no console errors, no horizontal overflow, language and theme toggles and the mobile menu work, choices persist after reload).

Not verified: the external project links (live demos and GitHub repositories) were not opened from the build environment, because outside network access was blocked. The e-commerce Strapi demo may depend on a separately hosted Strapi backend. The `dns-email-health-checker` project has no hosted demo, so it links only to its source. Automated tests were not added, since the site has no non-trivial logic.

## Notes

UI and code quality improvements were made with AI assistance (Claude, Anthropic), reviewed and verified by building and running the app.
