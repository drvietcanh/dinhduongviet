# QA polish: dinh-duong-thai-ky v1

Date: 2026-06-25

Branch: `tool-dinh-duong-thai-ky-qa-polish-v1`

Base commit: `96e1319 fix: safety gate clinical high risk tool`

Tag created:

- `local-dinh-duong-thai-ky-safety-patch-v1 -> 96e1319`

## Scope

Route under QA:

- `/cong-cu/dinh-duong-thai-ky/`
- route file: `src/pages/cong-cu/dinh-duong-thai-ky.astro`

This round is browser/manual QA plus light wording polish only. It does not promote the tool to `stable_v1`.

## Browser/mobile QA method

Build and preview method:

- Ran `npm run build`.
- Served the built `dist` output locally with Python static server on `http://127.0.0.1:4355`.
- Checked:
  - `/cong-cu/`
  - `/cong-cu/dinh-duong-thai-ky/`

Browser tools used:

- In-app Browser plugin for desktop route identity, DOM, console, and overflow checks.
- Browser viewport override did not apply in this environment: the page still reported `1280 x 720` after setting `390 x 844`.
- Fallback for true mobile viewport: system Chrome via Playwright runtime using the installed Chrome executable at `C:\Program Files\Google\Chrome\Application\chrome.exe`.
- No dependency was installed.

Preview HTTP:

- `/cong-cu/`: `200`.
- `/cong-cu/dinh-duong-thai-ky/`: `200`.
- No redirect.
- No meta refresh.
- Preview was stable when serving the built static output from `dist`.

Console:

- No route/app JavaScript errors were found.
- A static-server-only `favicon.ico` 404 appeared in Chrome desktop console. The repo does not currently have `public/favicon.ico`; this is not caused by the pregnancy route patch and did not affect route rendering or interaction.

## Desktop result

Desktop checks passed:

- H1: `Dinh dưỡng thai kỳ`.
- Route title: `Dinh dưỡng thai kỳ | Dinh Dưỡng Việt`.
- No horizontal overflow at `1280 x 720`.
- No route-level form.
- No route-level input/select/textarea.
- 9 situation cards rendered.
- Safety-shell text rendered:
  - `Cần hỏi bác sĩ sản khoa hoặc chuyên gia dinh dưỡng`.
  - `Không đủ điều kiện đưa khuyến nghị cá nhân ở v1`.

## Mobile 390px-class result

System Chrome / Playwright viewport:

- `390 x 844`.

Mobile checks passed:

- H1: `Dinh dưỡng thai kỳ`.
- No horizontal overflow.
- `documentElement.scrollWidth = 390`, `clientWidth = 390`.
- `body.scrollWidth = 390`, `body.clientWidth = 390`.
- Panels stayed within viewport.
- Card/checklist/panel layout did not break.
- Safety note remained readable and not overly dense.
- 9 situation cards rendered.
- No route-level form or input.
- No calculator text markers.
- No personal conclusion text.

## Calculator/output removal checks

The route no longer shows:

- pregnancy needs calculator form.
- BMI calculator.
- BMR-style formula.
- stage multiplier.
- calorie target numbers.
- protein target numbers.
- iron/calcium/folate/DHA/fiber/vitamin D target numbers.
- pregnancy weight-gain conclusion.
- food list or avoid/replace table framed as personal instructions.

The only nutrient words left on the route are in safety-shell wording that says the tool does not calculate or personalize them.

## Situation review

Because the route is now an educational safety shell, the reviewed situations all lead to the same safe orientation message rather than a calculated personal output.

Reviewed situations:

- newly pregnant or preparing for pregnancy.
- first trimester.
- second or third trimester.
- low pre-pregnancy weight.
- overweight/obesity before pregnancy.
- too little or too much weight change.
- severe nausea, vomiting, or poor intake.
- gestational diabetes.
- gestational hypertension, preeclampsia, or preeclampsia risk.
- anemia or suspected micronutrient deficiency.
- kidney, liver, or cardiovascular disease.
- twins/multiple pregnancy.
- medicines or supplements.
- user wants exact calorie or micronutrient targets.

Expected behavior passed:

- Output points users to a doctor or dietitian.
- No kcal/protein/micronutrient numbers.
- No automatic conclusion about whether weight gain is adequate.
- No personal meal plan.
- No advice to self-supplement iron, calcium, folate, DHA, or vitamin D.
- No advice to stop or change medicines.
- Wording says the page does not replace professional advice.

## Wording guard

Checked route source, built route output, and rendered page text for forbidden wording:

- `an toàn cho thai kỳ`
- `không cần hỏi bác sĩ`
- `mục tiêu chuẩn`
- `cân nặng chuẩn`
- `tăng cân chuẩn`
- `bắt buộc ăn`
- `ăn càng nhiều càng tốt`
- `ăn càng ít càng tốt`
- `BMR`
- `TDEE`
- `stage multiplier`
- `mục tiêu kcal cá nhân`
- `mục tiêu đạm cá nhân`
- `mục tiêu macro cá nhân`
- `mục tiêu sắt cá nhân`
- `mục tiêu canxi cá nhân`
- `mục tiêu folate cá nhân`
- `mục tiêu DHA cá nhân`
- `mục tiêu vitamin D cá nhân`
- `thực đơn chuẩn`
- `điều trị thiếu máu`
- `điều trị đái tháo đường thai kỳ`
- `điều trị tiền sản giật`
- `tự bổ sung vi chất`
- `tự dùng thuốc bổ`
- `tự ngừng thuốc`
- `tự chỉnh liều`

No user-facing matches were found.

Also checked for personal conclusions:

- `Bạn cần X kcal mỗi ngày`
- `Bạn cần X g đạm mỗi ngày`
- `Bạn cần X mg sắt mỗi ngày`
- `Bạn cần X mg canxi mỗi ngày`
- `Bạn tăng cân đạt chuẩn`
- `Bạn tăng cân chưa đủ`
- `Bạn tăng cân quá nhiều`
- `Nên ăn theo thực đơn này`
- `Chỉ cần bổ sung vitamin này`

No matches were found.

## `/cong-cu/` card

Updated card description:

- `Nhắc các tình huống cần cá thể hóa khi đánh giá dinh dưỡng trong thai kỳ.`

Card status:

- No `Đã kiểm v1` badge was added.
- Link remains `/cong-cu/dinh-duong-thai-ky`.
- The card does not call the route a calculator.
- The card does not call it a personal calorie/micronutrient pregnancy tool.
- The card does not call it a pregnancy weight-gain assessment tool.
- The card does not call it a pregnancy meal prescription tool.

## Changes made in this round

Changed:

- Light wording polish in `/cong-cu/` card description.

Not changed:

- route engine logic.
- nutrition data.
- formulas.
- stable routes.
- `dist` manually.

No calculator, BMR/TDEE, stage multiplier, pregnancy weight-gain table, calorie/protein/micronutrient target, pregnancy menu, or personal output was added.

## QA commands

Final QA:

- `npm run build`: pass.
- `npm run qa`: pass.
- `npm run qa:food-data`: pass.
- `npm run qa:data-consistency`: pass.
- `npm run test:tools`: pass.
- `git diff --check`: pass.
- `git status --short`: clean except intended files before commit.

## Conclusion

`dinh-duong-thai-ky` passed QA polish as an educational safety shell.

It still needs a dedicated final review before any `tools-core-status` update.
