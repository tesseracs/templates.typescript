# Tesseracs TypeScript template

A typed Node.js starter for small CLI tools, report generators, and automation-friendly utilities.

The template includes:

- one top-level entry point in `index.ts`
- typed domain models under `src/`
- separate analysis and rendering layers
- a minimal `tsc` build that outputs to `dist/`

Clone URL: `https://github.com/tesseracs/templates.typescript`

## Quick start

1. Run `npm install`
2. Run `npm run build`
3. Run `npm start`
4. Or use `./run.sh`

## Project layout

- `index.ts` - app entry point
- `src/models.ts` - shared TypeScript types
- `src/data.ts` - sample typed dataset
- `src/analysis.ts` - derived metrics and ranking logic
- `src/render.ts` - console formatter
- `tsconfig.json` - compiler configuration for a small ESM Node project
- `run.sh` - installs dependencies, builds, and runs

## Extend it

- Replace the starter data with your own interfaces and records
- Add validation or parsing before the analysis step
- Emit Markdown, JSON, or API payloads from `src/render.ts`
