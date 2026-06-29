# Safety patch: theo-doi-duong-huyet v1

Date: 2026-06-29

Branch: `clinical-p0-05-safety-patch-v1`

Base commit: `e027e94 docs: update tool status with pregnancy nutrition safety shell v1`

Tag created:

- `local-tools-core-status-v10 -> e027e94`

## P0 selection

Selected tool:

- Slug: `theo-doi-duong-huyet`
- Display name: `Theo dõi đường huyết`
- Route: `/cong-cu/theo-doi-duong-huyet/`
- Route file: `src/pages/cong-cu/theo-doi-duong-huyet.astro`
- Current status in `reports/tools-core-status-v10.md`: `clinical_high_risk`

Selection source:

- `reports/clinical-high-risk-triage-v1.md`

Original P0 priority order from triage:

1. `tuong-tac-thuoc-thuc-pham`
2. `tuong-tac-thuoc`
3. `nhu-cau-dinh-duong-tre-em`
4. `dinh-duong-thai-ky`
5. `theo-doi-duong-huyet`
6. `theo-doi-suc-khoe`
7. `dia-an-lanh-manh`
8. `nuoc-muoi-mon-an`
9. `chi-so-gi`

The first four P0 tools were already safety-patched, reviewed, and promoted in status v7/v8/v9/v10. The next highest remaining P0 in the triage order is therefore `theo-doi-duong-huyet`.

Why not the other remaining P0 tools in this round:

- `theo-doi-suc-khoe`, `dia-an-lanh-manh`, `nuoc-muoi-mon-an`, and `chi-so-gi` remain P0.
- They were not selected because this round follows the existing triage priority order instead of choosing by preference.

## Before patch

Route state before patch:

- Real route, not a redirect.
- Had a glucose diary form.
- Stored entries in `localStorage`.
- Rendered a chart.
- Rendered a log table.
- Had inline JavaScript in the route.
- Had no separate engine file.
- Had no dedicated test script.
- Had no source-lock for diabetes thresholds.

User-facing clinical output before patch:

- Target cards for fasting, post-meal, bedtime, and HbA1c.
- Numeric threshold language.
- Labels such as good, slightly high, high, very high, and low.
- Count of low/high events.
- Reference line on the chart.
- Safety note with emergency threshold wording.

Risk:

- Diabetes-facing thresholds can be mistaken for individualized treatment goals.
- HbA1c and glucose target cards were not source-locked in the project.
- Low/high labels can be read as diagnostic or treatment triage.
- Emergency threshold wording can be unsafe without individualized clinical context.
- Users using insulin, sulfonylureas, pregnancy diabetes care, kidney disease, acute illness, or complex medication need clinician review.

## Patch applied

The route was converted to a neutral logging and safety-orientation page.

Kept:

- Route `/cong-cu/theo-doi-duong-huyet/`.
- A simple diary form.
- User-entered glucose value capture.
- Notes about meals, medicine, symptoms, and context.
- Local browser-only storage.
- A chart showing only user-entered values.
- A table showing only user-entered values and notes.

Removed or disabled from user-facing output:

- Fasting, post-meal, bedtime, and HbA1c target cards.
- Numeric target thresholds.
- Reference line on the chart.
- Good/high/low/severe labels.
- Low/high event counts.
- Emergency threshold wording tied to a specific number.
- Any conclusion that a result is safe, unsafe, controlled, uncontrolled, high, low, good, bad, or urgent.
- Any instruction to change medicine, dose, meal plan, or care plan.

Current UI:

- H1: `Theo dõi đường huyết`
- Lead says the route only helps record information to discuss with a doctor or clinician.
- Scope note says v1 does not set glucose goals, classify results, or guide medicine adjustment.
- Diary form captures:
  - measurement time.
  - value shown by the meter.
  - meal/medicine/symptom notes.
- Summary says:
  - number of recorded entries.
  - latest entry time.
  - page does not classify or set glucose goals.
- Situation cards list groups that need individualized review.
- Orientation panel says `Không đủ điều kiện đưa khuyến nghị cá nhân ở v1`.
- Preparation checklist tells users what information to bring to a professional review.

## `/cong-cu/` card

Updated card:

- `Theo dõi đường huyết`
- Description changed to: `Ghi lại chỉ số để chuẩn bị thông tin khi hỏi bác sĩ hoặc chuyên gia theo dõi.`

No `Đã kiểm v1` badge was added in this safety patch round.

The card no longer describes the route as assessing diabetes control or giving a clinical target.

## Wording guard

Checked the patched route and updated `/cong-cu/` card for the requested banned wording:

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
- `bắt buộc ăn`
- `ăn càng ít càng tốt`
- `giảm cân chắc chắn`
- `mục tiêu kcal cá nhân`
- `mục tiêu macro cá nhân`
- `mục tiêu nước cá nhân`
- `mục tiêu natri cá nhân`
- `mục tiêu kali cá nhân`
- `mục tiêu phospho cá nhân`

No matches were found in the patched route or updated card.

Notes:

- Terms such as `insulin`, `sulfonylurea`, `HbA1c`, and `mục tiêu đường huyết` remain only in safety-gate wording that says these situations need clinician review or that v1 does not set goals.
- User-entered glucose values remain visible as diary data, not as targets or recommendations.

## Out of scope

No changes were made to:

- nutrition data.
- formulas.
- stable tool engines.
- stable routes.
- `dist`.

No deploy was performed.

## QA status

Final command QA:

- `npm run build`: pass.
- `npm run qa`: pass.
- `npm run qa:food-data`: pass.
- `npm run qa:data-consistency`: pass.
- `npm run test:tools`: pass.
- `git diff --check`: pass.
- `git status --short`: clean except intended route/index/report changes before commit.

Preview checks:

- `npm run preview` was attempted first, but the hidden preview process did not expose a stable local port in this session.
- Fallback used a static `dist` server from the successful build output for route verification.
- `/cong-cu/theo-doi-duong-huyet/`: `200` by HTTP check.
- No redirect or meta refresh.
- Route rendered as neutral logging and safety orientation.
- Browser checks used the in-app Browser where available, then system Chrome headless/CDP when the in-app Browser timed out during viewport switching.
- Mobile `390 x 844` had no horizontal overflow (`clientWidth = 390`, `scrollWidth = 390`) in Chrome CDP.
- Add-entry interaction wrote a neutral diary row without clinical classification in the in-app Browser desktop check.
- Chrome CDP mobile check found no console errors, no target cards, and no old threshold labels.

## Conclusion

`theo-doi-duong-huyet` is safety-patched enough for a dedicated browser QA/polish round.

Do not mark it `stable_v1` from this round alone. It still needs:

- browser/mobile QA polish.
- final review.
- a later status update if approved.
