# Tool Tuong Tac Thuoc Thuc Pham QA Polish v1

Date: 2026-06-23

Branch: `tool-tuong-tac-thuoc-thuc-pham-qa-polish-v1`

Base commit: `eba0be8 fix: make drug food interaction page safety gated`

Tag created:

- `local-tuong-tac-thuoc-thuc-pham-safety-patch-v1 -> eba0be8`

## Scope

Route:

- `/cong-cu/tuong-tac-thuoc-thuc-pham/`

Main file:

- `src/pages/cong-cu/tuong-tac-thuoc-thuc-pham.astro`

This round is browser/manual QA plus light polish. It does not update stable/status.

## Browser QA Method

Preview:

- `npm run build`
- `npm run preview -- --host localhost --port 4330`

Browser validation:

- Browser plugin with Playwright-style checks.
- Desktop viewport: default in-app browser viewport.
- Mobile viewport: `390 x 844` class through Browser viewport override.
- Route checked at `http://localhost:4330/cong-cu/tuong-tac-thuoc-thuc-pham/`.

HTTP check:

- `/cong-cu/tuong-tac-thuoc-thuc-pham/`: `200`
- redirect `Location`: none

## Route Checks

Passed:

- H1 is `Tương tác thuốc - thực phẩm`.
- No meta refresh.
- No redirect observed.
- No framework error overlay.
- Console errors/warnings: none observed.
- Desktop: no horizontal overflow.
- Mobile 390px-class: no horizontal overflow.
- Form is visible on mobile.
- Select and submit button have 46px minimum height.

## Safety Surface Checks

The old route behavior remains removed:

- no `#drug-select`
- no old `#result`
- no hardcoded `DRUGS` interaction table in the user-facing route
- no `showDrug()`
- no drug-specific `do` / `avoid` / `tip` output
- no severity output
- no personal interaction conclusion

## UI Scenario Tests

All scenarios were selected and submitted through the browser.

| Scenario | Output title | Safe output |
| --- | --- | --- |
| Chỉ muốn đọc lưu ý chung | Cần hỏi bác sĩ hoặc dược sĩ | pass |
| Đang dùng thuốc theo toa | Cần hỏi bác sĩ hoặc dược sĩ | pass |
| Dùng nhiều thuốc cùng lúc | Cần hỏi bác sĩ hoặc dược sĩ | pass |
| Thuốc chống đông hoặc thuốc tim mạch | Cần hỏi bác sĩ hoặc dược sĩ | pass |
| Thuốc đái tháo đường hoặc đường huyết | Cần hỏi bác sĩ hoặc dược sĩ | pass |
| Thuốc huyết áp, lợi tiểu hoặc điện giải | Cần hỏi bác sĩ hoặc dược sĩ | pass |
| Thuốc chống động kinh | Cần hỏi bác sĩ hoặc dược sĩ | pass |
| Thuốc ung thư | Cần hỏi bác sĩ hoặc dược sĩ | pass |
| Bệnh thận, gan hoặc tim mạch | Cần hỏi bác sĩ hoặc dược sĩ | pass |
| Mang thai hoặc cho con bú | Cần hỏi bác sĩ hoặc dược sĩ | pass |
| Trẻ em, người cao tuổi hoặc người dễ suy kiệt | Cần hỏi bác sĩ hoặc dược sĩ | pass |
| Có triệu chứng bất thường sau khi dùng thuốc | Cần hỏi bác sĩ hoặc dược sĩ | pass |

For all scenarios:

- Output asks for doctor/pharmacist review.
- No self-change medication instruction.
- No personal drug-food conclusion.
- No light/moderate/severe interaction tier.
- No timing rule such as taking medicine a fixed number of hours away from food.

## Wording Guard

User-facing route text and output were checked for this banned set:

- `an toàn khi dùng chung`
- `không cần hỏi bác sĩ`
- `tự ngừng thuốc`
- `ngưng thuốc`
- `tự chỉnh liều`
- `giảm liều`
- `tăng liều`
- `uống bù`
- `đổi giờ uống thuốc`
- `kê đơn`
- `chỉ định`
- `chống chỉ định tuyệt đối`
- `tương tác nhẹ nên bỏ qua`
- `không nguy hiểm`
- `điều trị bệnh`
- personal conclusion phrases such as `Bạn có thể dùng thuốc này với thực phẩm này`

Result:

- no banned user-facing wording found.

## Polish Applied

Light route wording polish:

- Added scenario options for `Thuốc chống động kinh` and `Thuốc ung thư`.
- Reworded severity text from `không phân mức nặng nhẹ` to `không phân mức độ tương tác`.
- Reworded the child/older adult output to avoid the word `cân nặng`, which could be confused with severity matching in QA.

No `/cong-cu/` card change was needed in this round.

## `/cong-cu/` Card

Card status:

- Card exists.
- Description: `Nhắc các tình huống cần hỏi bác sĩ hoặc dược sĩ khi dùng thuốc cùng thực phẩm.`
- No `Đã kiểm v1` badge.
- Does not call the route a calculator.
- Does not describe personal interaction lookup.

## Out Of Scope

Not changed:

- data
- engines
- formulas
- stable routes
- `dist` manually

Not added:

- drug interaction table
- interaction severity tiers
- drug-specific output
- personal interaction conclusions

## Conclusion

The route is ready for a final review round.

Do not mark `tuong-tac-thuoc-thuc-pham` as `stable_v1` from this QA polish alone.
