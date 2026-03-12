This is an Astro-based landing page for https://insta.catarchy.space.

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

## Run with Docker

### Option 1: Docker Compose

```bash
docker compose up --build -d
```

Open http://localhost:8081

If you want a different host port:

```bash
HOST_PORT=8090 docker compose up --build -d
```

Stop:

```bash
docker compose down
```

### Option 2: Plain Docker

```bash
docker build -t insta-catarchy-site .
docker run --rm -p 8081:80 insta-catarchy-site
```
