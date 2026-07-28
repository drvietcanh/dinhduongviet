# Source Review Completion - 2026-07-28

## Summary

- Branch: `data-qa-olive-metadata-followup-v1`.
- Status: tracked worktree clean after verification.
- Remote: no Git remote configured, so changes cannot be pushed from this workspace yet.

## Completed

- Hardened medical copy and removed high-risk phrasing flagged by local scanners.
- Fixed food data duplicate/alias issues and regenerated public API JSON.
- Removed `needsExternalSource` backlog from food-data QA.
- Updated `thit-xong-khoi`, `thit-bacon`, and `thit-bacon-chien` with USDA FDC-backed source IDs and review metadata.
- Regenerated and synchronized food source review, crosscheck, decision, and quality backlog reports.
- Added meal-assessment test coverage for source-backed foods that still require dietitian review.

## Latest QA

- `npx astro check`: 398 files, 0 errors, 0 warnings, 0 hints.
- `npm run build`: 1595 pages built; public and dist API data are up to date.
- `npm run qa`: passed.
- `npm run qa:food-data`: passed.
- `npm run qa:data-consistency`: passed.
- `npm run test:tools`: passed.

## Food Data Counters

- `foodsSlim`: 777.
- `foodsFull`: 777.
- `searchFoods`: 777.
- `duplicateSlugs`: 0.
- `duplicateDisplayNames`: 0.
- `suspiciousSlugs`: 0.
- `rawCookedAmbiguity`: 0.
- `missingCoreNutrients`: 0.
- `aliasWarnings`: 0.
- `needsExternalSource`: 0.
- `needsDietitianReview`: 13.
- `cookedHighEnergyWithoutReviewMetadata`: 0.
- `decisionTableMissingMetadata`: 0.

## Remaining Review Backlog

- `com-nep`, `com-gao-lut-do`, `com-gao-lut-den`: need a reliable cooked/prepared 100g source before changing nutrients.
- `thit-heo-quay`: keep as recipe estimate until a dish-level source or approved recipe model is available.
- `lap-xuong-nuong` and `xuc-xich-*`: have VN 2007 close-match candidates, but need dietitian approval because product type and cooking state vary.
- `thit-xong-khoi`, `thit-bacon`, `thit-bacon-chien`: now source-backed with USDA FDC candidates, but still need dietitian review for fit to Vietnamese products.

## Recent Commits

- `94f4ae7` test: cover source-backed meal review warnings
- `ae5b1ec` docs: sync food source crosscheck report
- `9649d49` docs: refresh source decision reports
- `98288f9` docs: refresh food quality backlog report
- `be0658a` fix: source processed pork nutrition data
- `a8058c1` chore: ignore local repair artifacts
- `01a5c78` fix: harden nutrition QA and medical copy
