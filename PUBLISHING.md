# Publishing @sairamanapb/icons to npm

> **Published:** `1.0.0` is live. The accessibility/fill/global-switch/lucide fixes in this tree are unreleased; bump to `1.0.1` (or `1.1.0`) before publishing again.

> **Status:** `1.0.0` is published on npm — https://www.npmjs.com/package/@sairamanapb/icons
> (`npm view @sairamanapb/icons version` → `1.0.0`). Use this guide for the next release.

## 0. Preconditions

- npm account with **2FA** enabled.
- Ownership of the **`@nexa` scope** (npm user or org). Package names in a scope
  can only be published by that scope; `npm view @sairamanapb/icons` being 404 does not
  prove the scope is available.
  - If the scope ever changes, update `npm pkg set name=@YOURSCOPE/icons` and the
documented imports.
- A clean working tree on `main`, matching the GitHub release.

## 1. Check the package

```bash
npm ci
npm run release                 # regenerate all bindings, build, test, verify
node gallery/build.mjs
npm pack --dry-run              # inspect tarball: files, size, no secrets
```

The `files` whitelist ships `dist/`, `js/`, `icons/`, data, Go/Rust crates,
docs, skills and `llms.txt`; everything else is excluded.

## 2. Log in

```bash
npm login                       # opens browser; completes 2FA
npm whoami                      # confirm the publishing account
```

## 3. First publish

```bash
npm publish --access public     # scoped packages need --access public
```

If npm asks for a one-time code: `npm publish --access public --otp=123456`.
`publishConfig.access: public` is already set in `package.json`.

## 4. Verify

```bash
npm view @sairamanapb/icons version dist.tarball
npm pack @sairamanapb/icons --dry-run  # or install in a throwaway project
npm i @sairamanapb/icons react
```

## 5. Subsequent releases

```bash
npm version patch|minor|major   # commits + creates the git tag
npm publish --access public
git push --follow-tags
```

`prepublishOnly` runs the release gate automatically before publishing.

## 6. Tag-driven GitHub Actions (recommended)

`.github/workflows/publish.yml` publishes on any `v*` tag with provenance.
Add the repository secret **`NPM_TOKEN`** (npm automation token with
publish rights) under **Settings → Secrets and variables → Actions**.

```bash
npm version minor
git push --follow-tags          # tag triggers the workflow
```

For npm **trusted publishing**, configure the GitHub repo as a trusted publisher
on npmjs.com and switch the workflow to `npm publish --provenance` with
`id-token: write` (no `NPM_TOKEN`); the `publish.yml` already grants `id-token`.

## Gotchas

- `dist/` is committed and also rebuilt by `prepublishOnly`; never hand-edit it.
- The package is ~1.13 MB packed / ~7.73 MB unpacked (4,291 files) (1,034 icon modules × ESM+CJS);
  scoped npm has no per-package size limit, but keep an eye on it.
- License: ISC; Lucide/Feather notices ship in `NOTICE` and must stay.
- Brand marks in `brands` are trademarks of their owners; see `NOTICE`.
