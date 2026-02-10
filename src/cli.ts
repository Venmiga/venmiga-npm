#!/usr/bin/env node
/**
 * venmiga-pack - Pack a Venmiga app folder into a .vpk file
 * Usage: venmiga-pack [inputDir] [outputFile]
 * Default: current dir -> ./dist/<slug>.vpk
 */

import * as fs from 'fs';
import * as path from 'path';
import archiver from 'archiver';

async function main() {
  const args = process.argv.slice(2);
  const inputDir = path.resolve(args[0] || process.cwd());
  const outputArg = args[1];

  if (!fs.existsSync(inputDir)) {
    console.error('Error: Input directory does not exist:', inputDir);
    process.exit(1);
  }

  const manifestPath = path.join(inputDir, 'manifest.json');
  if (!fs.existsSync(manifestPath)) {
    console.error('Error: manifest.json not found in', inputDir);
    process.exit(1);
  }

  let slug = 'app';
  try {
    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
    slug = manifest.slug || manifest.id?.split('.').pop() || 'app';
  } catch (e) {
    console.warn('Warning: Could not parse manifest.json, using default slug');
  }

  const outputFile = outputArg
    ? path.resolve(outputArg)
    : path.join(path.dirname(inputDir), `${slug}.vpk`);

  const output = fs.createWriteStream(outputFile);
  const archive = archiver('zip', { zlib: { level: 9 } });

  return new Promise<void>((resolve, reject) => {
    output.on('close', () => {
      console.log(`Packaged: ${path.relative(process.cwd(), outputFile)} (${archive.pointer()} bytes)`);
      resolve();
    });

    archive.on('error', reject);
    archive.pipe(output);

    // Add manifest first
    archive.file(manifestPath, { name: 'manifest.json' });

    // Add main entry and assets
    const mainPath = path.join(inputDir, 'index.html');
    const distPath = path.join(inputDir, 'dist');
    const migrationsPath = path.join(inputDir, 'migrations');

    if (fs.existsSync(mainPath)) {
      archive.file(mainPath, { name: 'index.html' });
    }
    if (fs.existsSync(distPath)) {
      archive.directory(distPath, 'dist');
    }
    if (fs.existsSync(migrationsPath)) {
      archive.directory(migrationsPath, 'migrations');
    }

    // Add other common files
    const extraFiles = ['style.css', 'script.js'];
    for (const f of extraFiles) {
      const fp = path.join(inputDir, f);
      if (fs.existsSync(fp)) {
        archive.file(fp, { name: f });
      }
    }

    archive.finalize();
  }).catch((err) => {
    console.error('Pack error:', err);
    process.exit(1);
  });
}

main();
