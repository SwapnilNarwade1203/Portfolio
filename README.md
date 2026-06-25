# Swapnil Narwade — Portfolio

A dual-track React portfolio. One person, two "build targets":

- **`analyst.build`** — Data Analyst track (Python, SQL, Power BI, EDA, dashboards)
- **`developer.build`** — Python/Django Developer & DevOps track (Docker, CI/CD, Render)

Switch between them using the target selector in the sticky terminal-style status bar at the top. Section structure (hero, skills, projects, education, certs, contact) stays the same — only the content recompiles to match the active track, with a short "compiling" transition between switches.

## Run locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Build for production

```bash
npm run build
```

Output goes to `dist/`.

## Deploy to GitHub Pages (your current setup)

Your site lives at `https://swapnilnarwade1203.github.io/Portfolio/`, so `vite.config.js` is already set with `base: "/Portfolio/"`.

1. Push this project to your `Portfolio` repo (replacing the old content), **or** create a new repo named `Portfolio`.
2. Install the deploy helper (already in `package.json` devDependencies):
   ```bash
   npm install
   npm run deploy
   ```
   This builds the app and pushes `dist/` to the `gh-pages` branch.
3. In your repo settings → Pages, set the source to the `gh-pages` branch (if not already set).

If you ever move this to Vercel, Netlify, or a custom domain instead of GitHub Pages, change `base: "/Portfolio/"` to `base: "/"` in `vite.config.js`.

## Adding your resume PDFs / profile photo

The contact/hero sections reference resume links in `src/data.js` (`PROFILE.resumeAnalyst`, `PROFILE.resumeDeveloper`). To make these work:

1. Create a `public/` folder in the project root.
2. Drop your resume PDFs in there, e.g. `public/SwapnilNarwade_DataAnalysis.pdf` and `public/SwapnilNarwade_Resume.pdf`.
3. They'll be served at the paths already referenced in `data.js`.

Add a profile photo the same way if you'd like one in the hero — just import it in `App.jsx` and place it near the hero text.

## Editing content

Everything text-based — summary, skills, projects, education, certificates — lives in **`src/data.js`**. Update that file and both tracks will reflect the change immediately; no need to touch the components.

## Structure

```
src/
  data.js      → all resume content for both tracks
  App.jsx      → page structure, the track switcher + compile transition
  App.css      → design system (colors, type, layout, the terminal motif)
  main.jsx     → React entry point
```
