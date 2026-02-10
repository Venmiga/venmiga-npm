import { defineConfig } from 'tsup';

export default defineConfig([
  {
    entry: ['src/index.ts'],
    format: ['cjs', 'esm'],
    dts: true,
    outDir: 'dist',
  },
  {
    entry: ['src/cli.ts'],
    format: ['cjs'],
    outDir: 'dist',
    noExternal: ['archiver'],
    banner: { js: '#!/usr/bin/env node' },
  },
]);
