# Safety patch: nhu-cau-dinh-duong-tre-em v1

Date: 2026-06-25

Branch: `clinical-p0-03-safety-patch-v1`

Base commit: `dda3f71 docs: update tool status with drug interaction safety shell v1`

Tag created:

- `local-tools-core-status-v8 -> dda3f71`

## P0 selection

Selected tool:

- Slug: `nhu-cau-dinh-duong-tre-em`
- Display name: `Nhu cầu dinh dưỡng trẻ em`
- Route: `/cong-cu/nhu-cau-dinh-duong-tre-em/`
- Route file: `src/pages/cong-cu/nhu-cau-dinh-duong-tre-em.astro`
- Current status in `reports/tools-core-status-v8.md`: `clinical_high_risk`

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

The first two P0 tools were already safety-patched, reviewed, and promoted in status v7/v8. The next highest remaining P0 in the triage order is therefore `nhu-cau-dinh-duong-tre-em`.

Why not the other remaining P0 tools in this round:

- `dinh-duong-thai-ky`, `theo-doi-duong-huyet`, `theo-doi-suc-khoe`, `dia-an-lanh-manh`, `nuoc-muoi-mon-an`, and `chi-so-gi` remain P0.
- They were not selected because this round follows the existing triage priority order instead of choosing by preference.

## Before patch

Route state before patch:

- Real route, not a redirect.
- Had a child age/sex/weight/height/activity form.
- Had inline JavaScript calculator logic in the route.
- Had hardcoded age bands, expected weight/height values, kcal/kg values, protein, fat, carb, calcium, iron, vitamin D, zinc, vitamin A, vitamin C, and fiber values.
- Displayed growth-assessment labels and nutrition cards.
- Displayed feeding guidance, meal examples, and focus foods by age group.
- Named WHO and the Vietnam National Institute of Nutrition in page wording, but did not have a dedicated source-lock table or pediatric review trail.

Risk:

- Pediatric growth labels could be read as diagnosis-like interpretation.
- Numeric energy, macro, micronutrient, and fiber values could be read as child-specific targets.
- Hardcoded kcal/kg and micronutrient values were not source-locked.
- Feeding guidance and meal examples could be mistaken for personalized pediatric advice.

No separate engine was found. The logic and values were inline in the route.

No dedicated test script was found for this route.

## Patch applied

The route was converted to an educational safety shell.

Removed or disabled from user-facing output:

- Child calculator form.
- Automatic growth assessment.
- Expected weight/height comparison.
- kcal/kg calculation.
- Energy, protein, fat, carb, calcium, iron, vitamin, zinc, and fiber numeric cards.
- Meal examples by age group.
- Focus-food target lists by age group.
- Inline JavaScript calculator logic.

Current UI:

- H1: `Nhu cầu dinh dưỡng trẻ em`
- Lead says the tool only helps orient situations that need a doctor or dietitian.
- The route explains that v1 does not calculate energy, protein, fat, carb, or micronutrient needs for an individual child.
- Situation cards list when pediatric nutrition should be individualized.
- A result-style panel says `Cần hỏi bác sĩ hoặc chuyên gia dinh dưỡng`.
- A preparation checklist tells caregivers what information to bring to a professional conversation.

Output now says:

- `Không đủ điều kiện đưa khuyến nghị cá nhân ở v1`.
- Bring growth, intake, medicine, and lab information for individualized assessment.
- Do not set child portions, energy, or micronutrients from an online tool alone.

## `/cong-cu/` card

Updated card:

- `Nhu cầu dinh dưỡng trẻ em`
- Description changed to: `Định hướng khi nào cần hỏi bác sĩ hoặc chuyên gia dinh dưỡng cho trẻ em.`

No `Đã kiểm v1` badge was added in this safety patch round.

## Wording guard

Checked the patched route and `/cong-cu/` card for the requested banned wording:

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

No matches were found in the patched route or `/cong-cu/` card.

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

Preview/browser checks:

- `/cong-cu/`: `200`.
- `/cong-cu/nhu-cau-dinh-duong-tre-em/`: `200`.
- Browser check used system Chrome through Playwright because the bundled Playwright browser binary was not installed and no new dependency was added.
- Route has no redirect or meta refresh.
- Route had no console error in desktop or `390 x 844` checks.
- Mobile `390 x 844` check had no horizontal overflow.
- `/cong-cu/` card showed the updated safe description. A desktop favicon `404` appeared during the generic `/cong-cu/` preview, but it was unrelated to this route patch.
- Route no longer shows pediatric numeric targets, growth classification, meal examples, kcal/kg output, macro cards, or micronutrient target cards.
- Forbidden wording was not found in user-facing route/card source.

## Conclusion

`nhu-cau-dinh-duong-tre-em` is safety-patched enough for a dedicated browser QA/polish round.

Do not mark it `stable_v1` from this round alone. It still needs:

- browser/mobile QA polish.
- final review.
- a later status update if approved.
