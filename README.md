# ddnazzah.github.io

Personal portfolio of **Dieu-Donne Nazzah** — Full-Stack Engineer & CTO based in Accra, Ghana.

Live at **[ddnazzah.github.io](https://ddnazzah.github.io)**.

## Tech

- [Vite](https://vitejs.dev/) + [React 18](https://react.dev/) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) for scroll reveals
- Static, no backend — all content lives in [`src/data/content.ts`](src/data/content.ts)

## Editing content

Everything the site says (bio, skills, experience, projects, socials, stats) is in
**`src/data/content.ts`**. Edit that one file; no component changes are needed.
Items marked `// TODO` are spots where adding a real link or image would help.

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # type-check + production build to dist/
npm run preview  # preview the production build
```

## Deploy

Pushes to `master` are built and published to GitHub Pages automatically by the
workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)
(Settings → Pages → Source: **GitHub Actions**).
