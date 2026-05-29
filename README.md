This is an Astro-based landing page for https://insta.catarchy.space (used as a landing page from the Catarchy Instagram account profile link).

Production deployment is static:

- CI builds the Astro site
- the generated `dist/` files are copied to the configured web root
- the target web server serves the site directly from that directory

Environment-specific server names, SSH targets, and web-root paths are kept out
of this public repository.

## Local development

Install dependencies:

```bash
npm install
```

Start the Astro dev server:

```bash
npm run dev
```

Open http://localhost:4321

Build the static site:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```
