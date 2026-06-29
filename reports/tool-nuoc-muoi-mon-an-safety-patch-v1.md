# Tool nuoc-muoi-mon-an Safety Patch v1

Date: 2026-06-29

Branch: `clinical-p0-08-safety-patch-v1`

Base commit: `de46cdf docs: update tool status with healthy plate safety shell v1`

Tag created:

- `local-tools-core-status-v13 -> de46cdf`

## Selected P0 Tool

Selected tool: `nuoc-muoi-mon-an`

Display name:

- `Muối trong món ăn`

Route:

- `/cong-cu/nuoc-muoi-mon-an/`

Route file:

- `src/pages/cong-cu/nuoc-muoi-mon-an.astro`

Why this tool was selected:

- `reports/clinical-high-risk-triage-v1.md` ranks `nuoc-muoi-mon-an` as priority 8 in the original P0 list.
- The seven higher-priority P0 tools have already been safety patched, QA reviewed, final reviewed, and promoted or prepared through status reports:
  1. `tuong-tac-thuoc-thuc-pham`
  2. `tuong-tac-thuoc`
  3. `nhu-cau-dinh-duong-tre-em`
  4. `dinh-duong-thai-ky`
  5. `theo-doi-duong-huyet`
  6. `theo-doi-suc-khoe`
  7. `dia-an-lanh-manh`
- After removing those seven, the remaining P0 tools are `nuoc-muoi-mon-an` and `chi-so-gi`; `nuoc-muoi-mon-an` comes first in the triage order.

Why `chi-so-gi` was not selected in this round:

- It is the final remaining P0 after `nuoc-muoi-mon-an` in the triage order.
- This round was explicitly scoped to the next P0 after the seven processed tools, so it was not chosen by preference or severity guessing.

## Status Before Patch

From `reports/clinical-high-risk-triage-v1.md` and direct route review:

- Current status in `tools-core-status-v13`: `clinical_high_risk`.
- Route type: real route.
- Form: no `<form>` element, but had a search input and interactive lookup.
- Engine: no shared engine; inline JavaScript lookup table.
- localStorage: none.
- Chart/canvas: none.
- Table: yes, user-facing salt recommendation table.
- Hardcoded disease target: yes, user-facing daily salt table for:
  - healthy adults.
  - hypertension.
  - heart failure / kidney disease.
- Personal or clinical output: disease-specific salt limits could be interpreted as restriction instructions.
- Related tests: no dedicated tool tests.

Main pre-patch risks:

- User-facing disease-specific salt limits for hypertension, heart failure, and kidney disease.
- Broad daily salt limit wording without source-lock or patient context.
- Lookup output used colors based on salt estimate, which could be read as an appraisal rather than a neutral estimate.
- Wording overpromised control of salt intake.

## Safety Patch Implemented

The route remains available and returns a food-level lookup, but the clinical target surface was removed.

Removed or disabled:

- Disease-specific salt recommendation table.
- Hypertension / heart failure / kidney disease daily salt target rows.
- Color-coded high/medium/low salt appraisal based on numeric salt estimate.
- `innerHTML` rendering for lookup results.
- Wording that presents the route as a control or treatment helper.

Kept:

- Existing approximate food-level salt lookup data for common Vietnamese dishes.
- Search input for filtering the local list.
- Route URL and H1.

Changed:

- Lookup results now render with DOM text nodes (`textContent`) instead of HTML string interpolation.
- Result label is neutral: `muối ước tính`.
- Safety shell explains that the page does not set a salt level for chronic disease contexts.
- The page points users with high-risk contexts to a doctor or dietitian.
- The page lists information to prepare for clinical review: dish names, portion/frequency, dipping sauces, diagnoses, medicines, tests, and current professional advice.

## UI After Patch

The route now shows:

- H1: `Tra nhanh lượng muối trong món ăn`
- Lead: approximate food salt lookup only; not a personal disease target or replacement for professional advice.
- Safety panel: situations needing professional review.
- Lookup card: search common foods and show approximate salt range.
- Information panel: what the page does not do.
- Preparation panel: information to bring to a doctor or dietitian.

The route does not show:

- Disease-specific salt targets.
- Personal sodium/salt/water/potassium/phosphorus target.
- Clinical risk classification.
- A disease recommendation table.
- Medication or treatment adjustment advice.

## `/cong-cu/` Update

Updated the `Muối trong món ăn` card description.

Before:

- `Ước tính muối ẩn trong món Việt và nước chấm.`

After:

- `Xem ước tính muối trong món Việt và nhắc tình huống cần hỏi bác sĩ hoặc chuyên gia.`

No `Đã kiểm v1` badge was added in this safety patch round.

## Wording Check

No user-facing route output was left with forbidden wording as a personal conclusion:

- `an toàn cho bệnh`
- `không cần hỏi bác sĩ`
- `tự ngừng thuốc`
- `ngưng thuốc`
- `tự chỉnh liều`
- `giảm liều`
- `tăng liều`
- `điều trị bệnh`
- `kê đơn`
- `chỉ định`
- `mục tiêu chuẩn`
- `đạt mục tiêu`
- `không đạt mục tiêu`
- `bắt buộc ăn`
- `ăn càng ít càng tốt`
- `giảm cân chắc chắn`
- `mục tiêu kcal cá nhân`
- `mục tiêu macro cá nhân`
- `mục tiêu nước cá nhân`
- `mục tiêu natri cá nhân`
- `mục tiêu kali cá nhân`
- `mục tiêu phospho cá nhân`

Clinical terms such as hypertension, kidney disease, heart failure, sodium, potassium, and phosphorus appear only in safety-context wording that says the route does not set individualized limits and users should ask a professional when those contexts apply.

## Out of Scope

No changes were made to:

- nutrition data files.
- shared engines.
- formulas.
- stable routes.
- `dist`.

No deploy was performed.

## Conclusion

`nuoc-muoi-mon-an` is now safety-gated as an approximate food salt lookup plus safety shell. It is not yet stable and still needs browser QA/polish, final review, and a later status update before any `stable_v1` consideration.
