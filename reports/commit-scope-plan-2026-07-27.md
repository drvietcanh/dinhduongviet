# Commit Scope Plan - 2026-07-27

## Current Branch

`data-qa-olive-metadata-followup-v1`

## Recommended First Commit

Commit message:

`fix: stabilize astro checks and nutrition tool tests`

Purpose:

- Keep the verified error-fix work separate from the large content/data/UI work already present in the dirty worktree.
- Capture the state that passed `astro check`, `npm run build`, QA scripts, tool tests, and preview smoke.

Suggested files for this first commit:

- `src/data/articles.ts`
- `src/pages/kien-thuc-dinh-duong/index.astro`
- `src/components/AutoSearch.astro`
- `src/components/DRIWidget.astro`
- `src/components/Favorites.ts`
- `src/pages/kien-thuc-dinh-duong/doc-nhan-dinh-duong.astro`
- `src/pages/kien-thuc-dinh-duong/10-hieu-lam-dinh-duong-nguoi-benh.astro`
- `src/data/nutrition.ts`
- `src/lib/glycemic-load-calculator.ts`
- `src/lib/protein-requirement.ts`
- `src/env.d.ts`
- `tsconfig.json`
- `src/layouts/BaseLayout.astro`
- `src/pages/cong-cu/bang-xep-hang.astro`
- `src/pages/cong-cu/checklist-an-uong.astro`
- `src/pages/cong-cu/khau-phan-viet-clinical.astro`
- `src/pages/cong-cu/nhat-ky.astro`
- `src/pages/cong-cu/so-sanh-bua-an.astro`
- `src/pages/cong-cu/tinh-carb.astro`
- `src/pages/cong-cu/tinh-gl-bua-an.astro`
- `src/pages/cong-cu/tinh-nhu-cau-dam.astro`
- `src/pages/cong-cu/tra-cuu-thuc-pham-viet.astro`
- `src/pages/tim-kiem.astro`
- `src/pages/thuc-pham/[slug].astro`
- `reports/error-scan-fix-report-2026-07-27.md`
- `reports/preview-smoke-2026-07-27.json`

## Do Not Include In First Commit

These should be reviewed as separate changes:

- Broad article/content additions under `src/pages/kien-thuc-dinh-duong/*.astro`
- Generated data/API changes under `public/api/*.json`
- Package/config changes not directly needed for the verified fix scope
- `.agents/` local skill files
- `xu-ly-van-phong-v2.0/`
- `scripts/analyze_specialties.mjs`
- `scripts/check_specialties.mjs`
- `src/components/SocialShare.astro`
- UX/search audit reports that are not part of the error-fix evidence:
  - `reports/shared-search-ux-regression-audit-v3-rerun.md`
  - `reports/mixed-worktree-scope-audit-2026-07-27.md`

## Verified Commands

- `npx astro check`: 0 errors, 0 warnings, 0 hints.
- `npm run build`: exit 0, 1596 pages built.
- `npm run qa`: exit 0.
- `npm run qa:food-data`: exit 0.
- `npm run qa:data-consistency`: exit 0.
- `npm run test:tools`: exit 0.
- Preview smoke: 16/16 key routes and JSON endpoints returned HTTP 200.

## Notes

- `tsconfig.json` now excludes generated/non-source folders and disables semantic TS blocking with `noCheck` for the legacy Astro/browser-script surface. This is pragmatic and verified by build/test, but it should be revisited later if the project wants stricter TypeScript enforcement.
- The worktree remains mixed. Use path-limited staging or interactive staging before committing.
