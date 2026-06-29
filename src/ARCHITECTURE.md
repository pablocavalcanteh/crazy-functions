# Crazy Functions Architecture

Crazy Functions is organized around a small public API exposed by `src/index.ts`, which re-exports all reusable helpers from `src/functions`.

## Source layout

- `src/functions/array/`: array-oriented helpers and object-array transformations.
- `src/functions/string/`: string capitalization helpers.
- `src/functions/object/`: object selection, merge, clone, and nested-property helpers.
- `src/functions/utility/`: generic utility helpers such as emptiness checks.
- `src/functions/format/`: formatting helpers.
- `src/functions/higher-order/`: higher-order and async timing helpers.
- `src/decorators/`: decorators shared across functions.
- `src/exceptions/`: reusable custom exceptions.
- `src/types/`: public type definitions and enums.

## Export flow

1. Each category keeps its own `index.ts`.
2. `src/functions/index.ts` groups category exports into the library function surface.
3. `src/index.ts` exposes the complete package API and the default `cf` object.

## Test layout

Unit tests live under `src/__tests__/unit/` and mirror the production structure:

- `functions/<category>/`
- `decorators/`
- `exceptions/`

Mocks remain centralized in `src/__tests__/mocks/`.
