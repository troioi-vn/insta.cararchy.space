This is an Astro-based landing page for https://insta.catarchy.space (used as a landing page from the Catarchy Instagram account profile link).

Production deployment is static:

- Woodpecker builds the Astro site on `catarchy2`
- the generated `dist/` files are copied to `/var/www/insta.catarchy.space/html`
- NGINX serves the site directly from that directory

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
