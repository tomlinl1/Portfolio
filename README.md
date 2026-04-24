# Portfolio

Static portfolio site for **GitHub Pages** (project URL: `https://<username>.github.io/<repo>/`). Built with [Vite](https://vitejs.dev/) and vanilla HTML, CSS, and JavaScript.

## Local development

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173/`). Preview the production build:

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

1. Push this repository to GitHub.
2. In the repo on GitHub: **Settings → Pages → Build and deployment**.
3. Under **Source**, choose **GitHub Actions** (not “Deploy from a branch”).
4. Push to the `main` branch (or merge a PR into `main`). The workflow in [`.github/workflows/pages.yml`](.github/workflows/pages.yml) builds the site and publishes the `dist` folder.
5. After the first successful run, Pages shows your site URL (may take a minute).

If your default branch is not `main`, edit the `on.push.branches` list in `pages.yml` to match.

### Permissions

The workflow needs **Pages** write access (declared in the workflow `permissions` block). The first deploy may prompt you to approve the `github-pages` environment in the Actions tab if your org requires it.

## Customize the site

| What to change | Where |
| ---------------- | ----- |
| Your name, tagline, about text | [`index.html`](index.html) |
| Project cards | [`src/data/projects.js`](src/data/projects.js) |
| Footer links (GitHub, LinkedIn, email) | [`src/data/site.js`](src/data/site.js) |
| Photo | Replace [`public/profile.jpg`](public/profile.jpg) (same path keeps links working) |
| Resume PDF | Replace [`public/resume.pdf`](public/resume.pdf) |

Files in `public/` are copied to the site root on build, so `./profile.jpg` and `./resume.pdf` in the HTML stay correct on a project Pages URL thanks to `base: './'` in [`vite.config.js`](vite.config.js).

The committed `profile.jpg` and `resume.pdf` are placeholders; swap them for your own assets before sharing the site.

## Tech notes

- **Project site paths:** `vite.config.js` sets `base: './'` so assets resolve under `/<repo>/` without hardcoding the repo name.
- **No Jekyll:** Plain static output; no theme configuration required.
