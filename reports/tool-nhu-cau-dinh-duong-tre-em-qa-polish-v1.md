# QA polish: nhu-cau-dinh-duong-tre-em v1

Date: 2026-06-25

Branch: `tool-nhu-cau-dinh-duong-tre-em-qa-polish-v1`

Base commit: `6ac3724 fix: safety gate clinical high risk tool`

Tag created:

- `local-nhu-cau-dinh-duong-tre-em-safety-patch-v1 -> 6ac3724`

## Scope

Route reviewed:

- `/cong-cu/nhu-cau-dinh-duong-tre-em/`
- `src/pages/cong-cu/nhu-cau-dinh-duong-tre-em.astro`

This round was browser QA plus light wording polish only. It did not restore the old calculator and did not add formulas, age tables, numeric targets, or status/stable updates.

## Browser/mobile QA method

Commands and tools:

- `npm run build`
- `npm run preview`
- HTTP preview checks with `Invoke-WebRequest`
- Browser checks with system Chrome through Playwright using:
  - desktop viewport `1280 x 900`
  - mobile viewport `390 x 844`

The bundled Playwright browser binary was not installed, so the existing system Chrome executable was used. No new dependency or browser package was installed.

## Route checks

Result:

- HTTP status: `200`.
- Redirect: no.
- Meta refresh: no.
- H1: `Nhu cầu dinh dưỡng trẻ em`.
- Console errors on route: none in desktop or mobile checks.
- Desktop horizontal overflow: no.
- Mobile `390 x 844` horizontal overflow: no.
- Cards/checklists remained readable and tappable at mobile width.

## Removed calculator surface

The patched route no longer shows:

- child nutrition calculator form.
- age-band input.
- sex/weight/height/activity calculator inputs.
- automatic growth assessment.
- expected weight/height comparison.
- `kcal/kg`.
- energy target numbers.
- protein/fat/carb target numbers.
- vitamin/mineral/fiber target numbers.
- age-specific meal examples.
- age-specific focus-food target lists.
- personalized child nutrition output.

## UI situations tested

The page now explicitly covers these situations as safety-orientation cards:

- Trẻ dưới 2 tuổi.
- Trẻ sinh non/nhẹ cân khi sinh.
- Chậm tăng cân, sụt cân, thừa cân, béo phì, hoặc chậm tăng chiều cao.
- Bệnh mạn tính.
- Bệnh thận, gan, tim mạch.
- Đái tháo đường hoặc rối loạn chuyển hóa.
- Ung thư, suy dinh dưỡng hoặc nguy cơ suy kiệt.
- Rối loạn ăn uống/kén ăn nặng.
- Đang dùng thuốc dài ngày hoặc thực phẩm bổ sung liều cao.
- Triệu chứng tiêu hóa kéo dài như nôn ói/tiêu chảy kéo dài.
- Phụ huynh muốn tính khẩu phần cụ thể.

Expected output:

- The route only points users toward a doctor or pediatric dietitian.
- It does not provide kcal, macro, micronutrient, growth, or meal-plan targets.
- It does not label a child as normal/underweight/overweight.
- It does not replace professional assessment.

Result: pass.

## Wording guard

Checked user-facing route output for:

- `an toàn cho trẻ`
- `không cần hỏi bác sĩ`
- `mục tiêu chuẩn`
- `cân nặng chuẩn`
- `chiều cao chuẩn`
- `bắt buộc ăn`
- `ăn càng nhiều càng tốt`
- `ăn càng ít càng tốt`
- `kcal/kg`
- `mục tiêu kcal cá nhân`
- `mục tiêu đạm cá nhân`
- `mục tiêu macro cá nhân`
- `mục tiêu vitamin cá nhân`
- `mục tiêu vi chất cá nhân`
- `thực đơn chuẩn`
- `điều trị suy dinh dưỡng`
- `điều trị béo phì`
- `tự bổ sung vi chất`
- `tự dùng thuốc bổ`

Checked for personal-conclusion patterns:

- `Con bạn cần X kcal mỗi ngày`
- `Con bạn cần X g đạm mỗi ngày`
- `Con bạn thiếu cân`
- `Con bạn thừa cân`
- `Con bạn phát triển bình thường`
- `Nên cho trẻ ăn theo thực đơn này`
- `Chỉ cần bổ sung vitamin này`

Result: no banned wording or personal-conclusion wording appeared in the route output.

## `/cong-cu/` card

Updated card description:

- `Nhắc các tình huống cần cá thể hóa khi đánh giá nhu cầu dinh dưỡng của trẻ.`

Badge:

- No `Đã kiểm v1` badge was added in this QA polish round.

The card does not describe the route as:

- a calculator.
- a personal child portion calculator.
- a growth assessment tool.
- a source of numeric pediatric targets.

During generic `/cong-cu/` preview, unrelated words such as `Tính nhu cầu` and `Năng lượng` still appeared on other tool cards. They were not on the `Nhu cầu dinh dưỡng trẻ em` card.

## Polish applied

Light polish only:

- Expanded situation cards to cover under-2, premature/low birth weight, weight/growth changes, overweight/obesity, chronic disease, kidney/liver/cardiac disease, diabetes/metabolic disorder, cancer/malnutrition, eating disorder/severe picky eating, long-term medication, prolonged digestive symptoms, and caregiver requests for concrete portions.
- Updated `/cong-cu/` card description to safer wording.

No layout rewrite was needed after mobile review.

## Out of scope

No changes were made to:

- nutrition data.
- engines.
- formulas.
- stable routes.
- `dist`.

No deploy was performed.

## Final QA

- `npm run build`: pass.
- `npm run qa`: pass.
- `npm run qa:food-data`: pass.
- `npm run qa:data-consistency`: pass.
- `npm run test:tools`: pass.
- `git diff --check`: pass.
- `git status --short`: clean except intended route/index/report changes before commit.

## Conclusion

`nhu-cau-dinh-duong-tre-em` passes QA polish as an educational safety shell.

It still needs a final review before any status update. Proposed eventual status, if final review passes, is `stable_v1` with scope `educational safety shell only`, not a pediatric nutrition calculator and not a personalized growth or nutrient-target tool.
