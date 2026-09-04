# Sapphire Beauty Studio

A premium, responsive marketing website for **Sapphire Beauty Studio** in
Cedar Rapids, Iowa. The site markets the studio, its services, artists and
results, then sends visitors to the existing
[GlossGenius](https://sapphirebeautyia.glossgenius.com/) platform to book.
It intentionally does **not** rebuild appointment scheduling.

## Tech stack

- [Vite](https://vitejs.dev/) 5
- [React](https://react.dev/) 18 + TypeScript 5
- Plain global CSS with CSS custom properties (design tokens)
- Google Fonts: Playfair Display (serif headings) + DM Sans (sans body/UI)

## Local setup

Requires Node.js 18+ and npm.

```bash
npm install
npm run dev      # start the Vite dev server (default http://localhost:5173)
npm run build    # type-check (tsc) and build to dist/
npm run preview  # preview the production build locally
```

> Note: this project was scaffolded in an offline sandbox where the npm
> registry was blocked, so `npm install` and `npm run build` could not be run
> there. Running `npm install && npm run dev` locally with network access will
> just work.

## Deploy to Vercel

This repo ships a `vercel.json` so the deployment settings live in source and do
not depend on the dashboard. If you configure the project manually in the Vercel
dashboard, use the matching settings below:

| Setting          | Value           |
| ---------------- | --------------- |
| Framework Preset | **Vite**        |
| Build Command    | `npm run build` |
| Output Directory | `dist`          |
| Install Command  | `npm install`   |

`vercel.json` also adds a single-page-app rewrite (`/(.*)` -> `/index.html`) so
client-side deep links resolve correctly.

> The packages needed by the `build` script (`tsc && vite build`) — `typescript`,
> `vite`, `@vitejs/plugin-react`, and the React type packages — live under
> `dependencies` (not `devDependencies`) so they are installed even when Vercel
> runs a production install. This avoids `vite: command not found` at build time.
> If you previously had this project set to the **Next.js** framework preset in
> Vercel (a leftover from an earlier starter), switch it to **Vite**.

## Project structure

```
index.html               # Vite entry + Google Fonts links
vite.config.ts
tsconfig.json / tsconfig.node.json
src/
  main.tsx               # React root
  App.tsx                # Composes all sections in order
  styles/global.css      # Palette, typography, base + utility classes
  components/            # Header, Hero, Services, ArtistCard, ArtistsSection,
                         # KBeautySection, Gallery, Testimonials, FAQ,
                         # ContactSection, Footer, BookButton
  data/                  # Typed content arrays (easy to edit)
    constants.ts         # BOOKING_URL, SERVICES_URL, studio + social links
    services.ts
    artists.ts
    gallery.ts
    testimonials.ts
    faq.ts
```

## Editing content

All copy, links and imagery are data-driven and centralized in `src/data/`.
Search for `TODO` comments to find every spot meant to be swapped with real
client-provided content:

- **Booking links** — `src/data/constants.ts` (`BOOKING_URL`, `SERVICES_URL`)
  and per-artist `bookingUrl` in `src/data/artists.ts`.
- **Social links** — `SOCIAL_LINKS` in `src/data/constants.ts` (replace the
  `#` placeholders).
- **Photography** — every `imageUrl` / `portrait` in the data files and the
  section stubs currently points at tasteful Unsplash placeholders.
- **Testimonials** — `src/data/testimonials.ts` (placeholder copy with generic
  `Verified Client` attribution; do not fabricate named clients).
- **Artist details** — `src/data/artists.ts`.

## Design tokens

Defined as CSS variables in `src/styles/global.css`:

| Token      | Value     | Use                   |
| ---------- | --------- | --------------------- |
| `--navy`   | `#0B2348` | Sapphire navy accent  |
| `--cream`  | `#F7F2EB` | Page background       |
| `--beige`  | `#E9DDD0` | Alternating sections  |
| `--taupe`  | `#D7C2AD` | Soft accents          |
| `--ink`    | `#242321` | Body text             |
| `--white`  | `#FFFDF9` | Surfaces              |

## Booking

Every booking CTA opens GlossGenius in a new tab via the reusable
`BookButton` component. To change the destination, edit `src/data/constants.ts`.
