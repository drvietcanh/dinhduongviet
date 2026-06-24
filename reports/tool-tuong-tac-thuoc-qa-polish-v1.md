# Tool tuong-tac-thuoc QA polish v1

Date: 2026-06-24

Branch: `tool-tuong-tac-thuoc-qa-polish-v1`

Base: `3603aff fix: safety gate clinical high risk tool`

Tag checkpoint: `local-tuong-tac-thuoc-safety-patch-v1 -> 3603aff`

## Scope

Route checked: `/cong-cu/tuong-tac-thuoc/`

Main route file: `src/pages/cong-cu/tuong-tac-thuoc.astro`

This round is browser/manual QA plus light wording polish only. It does not restore drug search, interaction database, severity/action/mechanism output, drug-specific conclusions, or medication timing advice.

## Browser QA Method

Method: Browser plugin with local preview after `npm run build`.

Preview URL used by browser: `http://[::1]:4334/cong-cu/tuong-tac-thuoc/`

HTTP checks with `Invoke-WebRequest`:

- `/cong-cu/`: `200`
- `/cong-cu/tuong-tac-thuoc/`: `200`

The Browser plugin initially could not open `127.0.0.1` because preview was bound on IPv6 loopback. Retesting with explicit `http://[::1]:4334/...` worked.

## Route Checks

- HTTP 200: pass.
- Redirect: none observed.
- Meta refresh: none observed.
- H1: `Tương tác thuốc`.
- Console errors: none observed.
- Desktop horizontal overflow: none observed.
- Mobile `390 x 844` horizontal overflow: none observed.
- Form/checklist tap targets: pass. Select width was 313px, height 46px; submit button height 44px.
- Safety note: readable and focused.

## Removed Dangerous Surface

The route did not expose:

- Drug search box.
- User-facing drug interaction database/list.
- Hardcoded interaction cards.
- Severity/action/mechanism output.
- Personal conclusion about combining medicines.
- Advice to stop, change dose, change timing, or take medicines apart by a fixed interval.

## UI Situation Tests

Tested all select options:

1. General reminder.
2. Prescription medicines.
3. Multiple medicines at the same time.
4. Anticoagulant or cardiovascular medicine.
5. Diabetes or blood glucose medicine.
6. Blood pressure medicine or diuretic.
7. Thyroid medicine.
8. Antibiotic.
9. Pain reliever or anti-inflammatory medicine.
10. Pregnancy, lactation, children, or older adults.
11. New symptoms after medicine use.

Result for every case:

- Heading: `Cần hỏi bác sĩ hoặc dược sĩ`.
- Mentions clinician/pharmacist review.
- No personal interaction conclusion.
- No mild/moderate/severe classification.
- No medication timing rule.
- No banned wording in the output.

Additional high-risk groups are visible as safety flags: seizure medicines, cancer medicines, kidney/liver/cardiovascular disease, children, and older adults.

## Wording Guard

User-facing route/output did not contain:

- `an toàn khi dùng chung`
- `không cần hỏi bác sĩ`
- `tự ngừng thuốc`
- `ngưng thuốc`
- `tự chỉnh liều`
- `giảm liều`
- `tăng liều`
- `uống bù`
- `đổi giờ uống thuốc`
- `uống cách`
- `kê đơn`
- `chỉ định`
- `chống chỉ định tuyệt đối`
- `tương tác nhẹ nên bỏ qua`
- `không nguy hiểm`
- `điều trị bệnh`
- `severity`
- `mechanism`
- `action`

No personal conclusion appeared, including:

- `Bạn có thể dùng hai thuốc này cùng nhau`
- `Bạn nên ngừng thuốc này`
- `Bạn chỉ cần uống cách X giờ`
- `Tương tác này an toàn`
- `Tương tác này không đáng lo`
- `Tương tác mức nhẹ/vừa/nặng`

## `/cong-cu/` Card

Card: `Tương tác thuốc`

Description after polish:

> Nhắc các tình huống cần hỏi bác sĩ hoặc dược sĩ khi dùng nhiều thuốc hoặc có bệnh nền.

Badge: no `Đã kiểm v1` badge in this round.

The card does not call the route a personal interaction lookup tool, calculator, or safety conclusion tool.

## Files Changed

- `src/pages/cong-cu/index.astro`: light wording polish for the `Tương tác thuốc` card.
- `reports/tool-tuong-tac-thuoc-qa-polish-v1.md`: this QA report.

No change was made to:

- Drug interaction logic or database.
- Nutrition data.
- Formula/engine code.
- Stable routes already finalized.
- `dist` by hand.

## Final QA

Commands to run before commit:

- `npm run build`
- `npm run qa`
- `npm run qa:food-data`
- `npm run qa:data-consistency`
- `npm run test:tools`
- `git diff --check`
- `git status --short`

## Conclusion

`/cong-cu/tuong-tac-thuoc/` passes QA polish as a safety shell. It still needs a final review round before any status update or stable classification.
