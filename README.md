# venmiga-sdk

SDK for building apps on **VenmigaOS** — TypeScript types, VPK packaging CLI, and developer tools.

[![npm version](https://img.shields.io/npm/v/venmiga-sdk.svg)](https://www.npmjs.com/package/venmiga-sdk)

## Install

```bash
npm install venmiga-sdk
```

## TypeScript Types

Get full autocomplete for `window.Venmiga` when building Venmiga apps:

```typescript
// In your app (runs inside VenmigaOS iframe)
import 'venmiga-sdk';

// Now window.Venmiga is typed
const invoices = await window.Venmiga!.db.model('invoices').findMany({ status: 'draft' });
await window.Venmiga!.notify('Saved', 'Invoice created');
```

## Manifest Types

```typescript
import { type VenmigaManifest, validateManifest } from 'venmiga-sdk';

const manifest: VenmigaManifest = {
  id: 'com.mycompany.finance',
  slug: 'finance',
  name: 'Finance Pro',
  version: '1.0.0',
  main: 'dist/index.html',
  framework: 'react',
};
```

## CLI: venmiga-pack

Pack your app folder into a `.vpk` file for upload to the Venmiga App Store.

```bash
npx venmiga-pack [inputDir] [outputFile]
```

**Examples:**

```bash
# Pack current directory → ../<slug>.vpk
npx venmiga-pack

# Pack specific folder
npx venmiga-pack ./my-app

# Specify output path
npx venmiga-pack ./my-app ./releases/finance-v1.0.0.vpk
```

**What gets included:**
- `manifest.json` (required)
- `index.html` or `dist/` (entry + assets)
- `migrations/` (SQL migration files)
- `style.css`, `script.js` (if present)

## VPK Build Guide

1. Create your app with `manifest.json`, entry HTML, and optionally `migrations/`
2. For React: use Vite with `base: '/apps/<slug>/'` and build to `dist/`
3. Run `npx venmiga-pack` to create `.<slug>.vpk`
4. Upload to Venmiga Developer Portal (`/developer`)

See [VPK_BUILD_GUIDE.md](https://github.com/venmiga/venmigaos/blob/main/VPK_BUILD_GUIDE.md) in the VenmigaOS repo for full documentation.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for how to contribute.

## Publishing (Maintainers)

If you see a **403 Two-factor authentication required** error when publishing, see [PUBLISHING.md](./PUBLISHING.md) for how to fix it.

## License

MIT
