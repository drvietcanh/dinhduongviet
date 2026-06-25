# Safety patch: dinh-duong-thai-ky v1

Date: 2026-06-25

Branch: `clinical-p0-04-safety-patch-v1`

Base commit: `92889c8 docs: update tool status with child nutrition safety shell v1`

Tag created:

- `local-tools-core-status-v9 -> 92889c8`

## P0 selection

Selected tool:

- Slug: `dinh-duong-thai-ky`
- Display name: `Dinh dưỡng thai kỳ`
- Route: `/cong-cu/dinh-duong-thai-ky/`
- Route file: `src/pages/cong-cu/dinh-duong-thai-ky.astro`
- Current status in `reports/tools-core-status-v9.md`: `clinical_high_risk`

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

The first three P0 tools were already safety-patched, reviewed, and promoted in status v7/v8/v9. The next highest remaining P0 in the triage order is therefore `dinh-duong-thai-ky`.

Why not the other remaining P0 tools in this round:

- `theo-doi-duong-huyet`, `theo-doi-suc-khoe`, `dia-an-lanh-manh`, `nuoc-muoi-mon-an`, and `chi-so-gi` remain P0.
- They were not selected because this round follows the existing triage priority order instead of choosing by preference.

## Before patch

Route state before patch:

- Real route, not a redirect.
- Had a pregnancy/lactation calculator form.
- Inputs included pre-pregnancy weight, height, age, and stage.
- Had inline JavaScript calculator logic.
- Calculated BMI from pre-pregnancy weight and height.
- Displayed recommended weight gain ranges with IOM wording.
- Used BMR-style formula and stage multipliers.
- Displayed calorie estimates and nutrient targets.
- Displayed protein, iron, calcium, folate, DHA, fiber, and vitamin D numeric cards.
- Displayed food source lists and avoid/replace table.
- Named WHO, the Vietnam National Institute of Nutrition, and ACOG in broad wording, but had no dedicated source-lock table or obstetric review trail.

Risk:

- Pregnancy/lactation is a high-risk population.
- BMI/weight-gain ranges could be read as individual pregnancy targets.
- BMR and calorie multipliers were not source-locked in the project.
- Micronutrient and macro values could be read as personal pregnancy targets.
- Food avoid/replace table could be mistaken for individualized pregnancy advice.
- No red-flag gate for high-risk pregnancy, gestational diabetes, hypertension/preeclampsia, multiple pregnancy, underweight, severe nausea/vomiting, anemia, kidney disease, medication complexity, or eating disorder.

No separate engine was found. The logic and values were inline in the route.

No dedicated test script was found for this route.

## Patch applied

The route was converted to an educational safety shell.

Removed or disabled from user-facing output:

- Pregnancy/lactation calculator form.
- Automatic BMI and weight-gain calculation.
- BMR formula.
- Stage calorie multipliers.
- Personal calorie output.
- Protein, iron, calcium, folate, DHA, fiber, and vitamin D numeric target cards.
- IOM weight-gain range output.
- Food source lists framed as meeting targets.
- Avoid/replace table framed as route guidance.
- Inline JavaScript calculator logic.

Current UI:

- H1: `Dinh dưỡng thai kỳ`
- Lead says the tool only helps orient situations that need a doctor or dietitian.
- The route explains that v1 does not calculate energy, weight gain, protein, iron, calcium, folate, DHA, or vitamins for an individual pregnancy.
- Situation cards list when pregnancy/lactation nutrition should be individualized.
- A result-style panel says `Cần hỏi bác sĩ sản khoa hoặc chuyên gia dinh dưỡng`.
- A preparation checklist tells users what information to bring to a professional conversation.

Output now says:

- `Không đủ điều kiện đưa khuyến nghị cá nhân ở v1`.
- Bring pregnancy stage, intake, medicines, supplements, test results, and obstetric guidance for individualized assessment.
- Do not set energy, weight gain, protein, or micronutrients from an online tool alone.

## `/cong-cu/` card

Updated card:

- `Dinh dưỡng thai kỳ`
- Description changed to: `Nhắc các tình huống cần cá thể hóa khi xem dinh dưỡng thai kỳ và cho con bú.`

No `Đã kiểm v1` badge was added in this safety patch round.

The card no longer describes the route as a calorie, iron, calcium, DHA, folate, or pregnancy target calculator.

## Wording guard

Checked the patched route and the updated `/cong-cu/` card for the requested banned wording:

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

No matches were found in the patched route or the updated pregnancy card.

Notes:

- Terms such as `sắt`, `canxi`, `folate`, `DHA`, and `vitamin` remain on the route only in safety-shell wording that says the route does not calculate or personalize them.
- Generic words such as `mục tiêu`, `calo`, or `đạm` still appear on unrelated `/cong-cu/` cards. They are not on the `Dinh dưỡng thai kỳ` card.

## Out of scope

No changes were made to:

- nutrition data.
- formulas outside the removed inline route calculator.
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

Build artifact checks:

- `dist/cong-cu/dinh-duong-thai-ky/index.html` contains the H1 `Dinh dưỡng thai kỳ`.
- Built route contains the safety-shell message `Không đủ điều kiện đưa khuyến nghị cá nhân ở v1`.
- Built route contains the professional-referral message `Cần hỏi bác sĩ sản khoa hoặc chuyên gia dinh dưỡng`.
- Built route has no route-level `<form>`.
- Built route has no route-level calculator markers such as `pregnancyForm`, `nutritionResults`, `calMultiplier`, `minGain`, or `maxGain`.
- Built route has no route-level `BMR`, `TDEE`, `7700`, or `kcal/kg`.
- Built route has no meta refresh.
- Forbidden wording was not found in the patched route or updated pregnancy card source.

Preview note:

- `npm run preview` was attempted after build, but the PowerShell-launched preview process did not accept local HTTP connections consistently in this environment.
- This safety-patch round therefore relies on build output/static checks plus the full command QA suite.
- A dedicated browser/mobile QA polish round is still required before final review or status update.

## Conclusion

`dinh-duong-thai-ky` is safety-patched enough for a dedicated browser QA/polish round.

Do not mark it `stable_v1` from this round alone. It still needs:

- browser/mobile QA polish.
- final review.
- a later status update if approved.
