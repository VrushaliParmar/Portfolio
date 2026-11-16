# Vrushali Parmar — Portfolio

Personal portfolio website for Vrushali Parmar, built with React + TypeScript + Vite.

## Stack

- **React 18** + **TypeScript**
- **React Router v6** — client-side routing (`/` and `/poetry`)
- **Vite** — build tool and dev server
- **Plain CSS** — custom design system with CSS variables (no CSS framework)
- **Google Fonts** — Lora (serif) + Inter (sans-serif)

## Local development

```bash
npm install      # install dependencies (first time only)
npm run dev      # start dev server at http://localhost:5173
```

## Build

```bash
npm run build    # type-check + production build → dist/
npm run preview  # preview the production build locally
```

## Configuration — things to fill in before publishing

All personal details you still need to supply live in one file:

**`src/data/config.ts`**
| Field | What to add |
|---|---|
| `email` | Your email address |
| `resumeUrl` | Set to `'/resume.pdf'` after placing your PDF at `public/resume.pdf` |
| `ogImage` | Set to `'/og-image.png'` after adding a 1200×630 image to `public/` |
| `url` | Your actual deployed domain |

## Adding poems

Open `src/data/poems.ts`, copy the template comment at the bottom, fill in the fields, and add it to the `poems` array. The poetry page renders automatically.

## Adding experience entries

Open `src/data/experience.ts`, copy the template comment, fill in the fields, and add it to the `experienceEntries` array.

## Deployment

### Vercel (recommended)
1. Push this repo to GitHub.
2. Import the project on [vercel.com](https://vercel.com).
3. Framework preset: **Vite**. No other settings needed.
4. The included `vercel.json` handles SPA routing so `/poetry` refreshes correctly.

### Netlify
1. Push to GitHub and connect on [netlify.com](https://netlify.com).
2. Build command: `npm run build`. Publish directory: `dist`.
3. The `public/_redirects` file handles SPA routing.

### GitHub Pages
Requires setting `base` in `vite.config.ts` to your repo name:
```ts
export default defineConfig({ base: '/your-repo-name/', plugins: [react()] })
```
Then deploy the `dist/` folder via the `gh-pages` branch.
