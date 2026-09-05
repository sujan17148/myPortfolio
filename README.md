# Portfolio (Next.js)

Personal portfolio built with Next.js (App Router). This repo contains the source for a small portfolio site with reusable components, project data in JSON, and a simple layout.

## Features

- Lightweight portfolio layout and components in `src/components`
- Project pages generated from JSON data in `src/data/project-details` and `src/data/projects.json`
- App Router structure under the `app/` directory

## Tech Stack

- Next.js (App Router)
- TypeScript
- PostCSS / CSS modules

## Local Development

Prerequisites: Node.js (16+ recommended) and a package manager (`npm`, `pnpm`, or `yarn`).

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open http://localhost:3000 to view the site.

## Useful Scripts

- `dev` - Run the development server
- `build` - Build for production
- `start` - Start the production server
- `lint` - Run linters (if configured)

Run scripts with `npm run <script>` (or `pnpm` / `yarn`).

## Project Structure (important paths)

- `app/` – Next.js app routes and pages
- `src/components/` – Page components grouped by area (home, layout, project-detail, ui)
- `src/data/` – JSON and data used to generate project pages (projects.json, project-details/*)
- `src/lib/` – utility helpers

To add or update projects, edit `src/data/projects.json` and the files under `src/data/project-details/`.

## Deployment

Deploy onto Vercel for the easiest workflow: connect the repository and use default Next.js settings. Alternatively build and serve with `npm run build` and `npm run start`.
