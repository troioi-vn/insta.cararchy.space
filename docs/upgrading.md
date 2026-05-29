# Upgrading Dependencies

Dependency upgrades are normal maintenance, but not every upgrade has the same risk.

- Patch and minor updates are usually routine.
- Major updates are deliberate engineering work.
- The important distinction is not only "how do we install updates?" but also "how do we notice versions that our current constraints intentionally do not allow?"

This project is a small Astro static landing page for `insta.catarchy.space`. The deployed build currently uses npm:

- `package.json` defines the Astro dependency and scripts.
- `package-lock.json` is the committed lockfile.
- Woodpecker verifies `package-lock.json`, runs `npm ci`, and then runs `npm run build`.

Because CI uses npm, use npm for dependency maintenance unless the repo is intentionally migrated to another package manager in the same change.

## Upgrade Tiers

| Type  | Example          | Usual handling                        |
| ----- | ---------------- | ------------------------------------- |
| Patch | `1.2.3 -> 1.2.4` | Routine update                        |
| Minor | `1.2 -> 1.3`     | Routine update with full verification |
| Major | `1.x -> 2.0`     | Planned upgrade branch                |

Even patch and minor updates can break in practice, so every update should be followed by the relevant checks.

## Execution Modes

There are two useful ways to run this protocol:

- Rehearsal mode: non-mutating checks that show what would change.
- Real update mode: actually change `package-lock.json`, `node_modules`, and sometimes `package.json`.

Use rehearsal mode first when you want a safe signal about whether the branch is healthy enough for upgrade work.

### Rehearsal Mode

```bash
npm update --dry-run
npm outdated
```

Then run the same verification suite you would use after a real update.

## Routine Updates

Run from the repository root:

```bash
npm update
```

Then verify:

```bash
npm run build
git status --short
git diff --stat
```

There is no dedicated test suite or linter configured at the moment. `npm run build` is the required check after dependency changes.

## How To Detect New Major Versions

This is the part people often miss.

Most dependencies use SemVer ranges such as `^5.5.5`. That is good for stability, but it means `npm update` usually stays inside the current major line. It does not automatically move the project to a new major version.

Use:

```bash
npm outdated
```

Interpretation:

- `Current` is the installed version.
- `Wanted` is the newest version allowed by `package.json`.
- `Latest` is the newest version published.
- If `Wanted` is behind `Latest`, a newer version exists outside the current allowed range.

For this repo, the main package to watch is:

- `astro`

## Recommended Cadence

Use two different rhythms:

### 1. Routine dependency maintenance

Do this regularly:

```bash
npm update
npm run build
```

### 2. Major-version scan

Do this on a schedule, for example once a month:

```bash
npm outdated
```

This keeps major upgrades visible without forcing them into every routine maintenance pass.

## Major Upgrade Process

When taking a major version, treat it as a small project.

### Principles

- Upgrade one major dependency at a time when feasible.
- Read the official upgrade guide before changing code.
- Start from a clean baseline with a passing build.
- Keep lockfile changes reviewable.

### Workflow

#### 1. Read the upstream guide

For Astro, read the target major's official migration guide and release notes before changing the constraint.

#### 2. Establish a clean baseline

```bash
npm ci
npm run build
```

If the baseline is already broken, fix that first.

#### 3. Create a dedicated branch

```bash
git checkout -b upgrade/astro-6
```

#### 4. Upgrade explicitly

Example:

```bash
npm install astro@^6.0.0 --save-dev
```

Then inspect the diff:

```bash
git status --short
git diff --stat
```

#### 5. Fix breakages iteratively

Suggested order:

1. Build errors
2. Astro config or content API changes
3. Manual smoke testing of the generated static site

#### 6. Document what changed

If the upgrade taught us project-specific lessons, add them to this document.

## Deployment Note

Pushes can trigger Woodpecker deployment for the static site on `catarchy2`. Treat dependency-upgrade pushes to `main` as potentially live deploys and verify the pipeline and public site afterward.

## What Not To Assume

- A normal `npm update` does not mean "we are fully up to date".
- A green lockfile refresh does not mean "no major upgrades exist".
- Static sites still need verification after dependency changes.
- Do not switch package managers casually; CI currently depends on npm and `package-lock.json`.

## Current Versions

| Dependency | Version |
| ---------- | ------- |
| Astro      | ^5.5.5  |
