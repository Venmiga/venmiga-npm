# Contributing to venmiga-sdk

Thanks for your interest in contributing! This document provides guidelines for contributing to the Venmiga SDK.

## Development Setup

```bash
git clone https://github.com/Venmiga/venmiga-npm.git
cd venmiga-npm
npm install
```

## Build & Test

```bash
# Build the package
npm run build

# Test the CLI (from an app with manifest.json)
npx venmiga-pack
```

## Project Structure

```
venmiga-sdk/
├── src/
│   ├── index.ts    # Main exports (types, manifest)
│   ├── types.ts    # VenmigaSDK TypeScript definitions
│   ├── manifest.ts # Manifest schema & validation
│   └── cli.ts      # venmiga-pack CLI
├── dist/           # Built output (generated)
└── package.json
```

## Making Changes

1. **Fork** the repo and create a branch: `git checkout -b feature/your-feature`
2. Make your changes
3. Run `npm run build` to ensure it compiles
4. Commit with clear messages: `git commit -m "Add X to CLI"`
5. Push: `git push origin feature/your-feature`
6. Open a **Pull Request** on GitHub

## Pull Request Guidelines

- Keep PRs focused — one feature or fix per PR
- Ensure the build passes: `npm run build`
- Update README.md if you add new APIs or change behavior
- Follow existing code style (TypeScript, 2-space indent)

## Reporting Issues

Use [GitHub Issues](https://github.com/Venmiga/venmiga-npm/issues) for:

- Bug reports (include steps to reproduce)
- Feature requests
- Questions about the SDK

## Code of Conduct

Be respectful and constructive. We aim for a welcoming environment for all contributors.
