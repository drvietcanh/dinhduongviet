# Tool tuong-tac-thuoc final review v1

Date: 2026-06-24

Branch: `tool-tuong-tac-thuoc-final-review-v1`

Base: `be3428c test: add drug interaction page QA`

Tag checkpoint:

- `local-tuong-tac-thuoc-qa-polish-v1 -> be3428c`

## Scope

Route reviewed:

- `/cong-cu/tuong-tac-thuoc/`

Route file:

- `src/pages/cong-cu/tuong-tac-thuoc.astro`

This round is final review only. It does not add drug search, a drug interaction database, a new engine, severity tiers, drug-specific output, or personal interaction conclusions.

## Mobile / Browser Method

Build command run before preview:

- `npm run build`

Preview:

- `npm run preview -- --host localhost --port 4335`

Browser method:

- Browser plugin with local preview.
- Preview was served on IPv6 loopback, so browser checks used `http://[::1]:4335/...`.
- Mobile check used Browser viewport override `390 x 844`, then reset to default.

HTTP checks:

- `/cong-cu/`: `200`
- `/cong-cu/tuong-tac-thuoc/`: `200`

## Route Final Scope

Final route checks:

- HTTP 200: pass.
- Redirect: none observed.
- Meta refresh: none observed.
- H1: `Tương tác thuốc`.
- Scope: safety shell only.
- Console errors: none observed.
- Desktop horizontal overflow: none observed.
- Mobile `390 x 844` horizontal overflow: none observed.
- Form/select readable and easy to tap on mobile.
- Safety result layout did not break on mobile.

The route does not expose:

- A specific drug search box.
- A user-facing interaction database or list.
- User-facing `severity`, `action`, or `mechanism` fields.
- A hardcoded interaction table.
- Personal conclusions about using medicines together.
- Mild/moderate/severe interaction tiers.
- Claims that two medicines can be used together safely.
- Advice to stop medicine.
- Advice to change dose.
- Advice to change medicine timing.
- A new engine.
- Data/formula changes.

## Final Wording Review

The route clearly says:

- It only reminds users about situations that need a doctor or pharmacist.
- It does not replace professional advice.
- It should not be used to change medicine, dose, timing, supplements, or diet on its own.
- Prescription medicines, multiple medicines, anticoagulants, diabetes medicines, blood pressure/diuretic medicines, seizure medicines, cancer medicines, kidney/liver/heart disease, pregnancy/lactation, children, and older adults should be reviewed with a doctor or pharmacist.
- The preparation checklist is for bringing information to a professional conversation, not a treatment instruction.

No user-facing banned wording appeared:

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

No personal-conclusion wording appeared:

- `Bạn có thể dùng hai thuốc này cùng nhau`
- `Bạn nên ngừng thuốc này`
- `Bạn chỉ cần uống cách X giờ`
- `Tương tác này an toàn`
- `Tương tác này không đáng lo`
- `Tương tác mức nhẹ`
- `Tương tác mức vừa`
- `Tương tác mức nặng`

## Five Final UI Cases

Tested select options:

1. `prescription`: dùng thuốc theo toa.
2. `many`: dùng nhiều thuốc cùng lúc.
3. `blood`: thuốc chống đông hoặc thuốc tim mạch.
4. `diabetes`: thuốc đái tháo đường hoặc đường huyết.
5. `pressure`: thuốc huyết áp hoặc thuốc lợi tiểu.

Result for all five:

- Heading: `Cần hỏi bác sĩ hoặc dược sĩ`.
- Mentions doctor/pharmacist review.
- No personal interaction conclusion.
- No self-adjust medication instruction.
- No fixed medicine timing rule.
- No severity tier.
- No banned wording.

Pregnancy/lactation, children, and older adults are still explicitly covered in the route risk flags and select options from the QA polish round.

## `/cong-cu/` Card

Card: `Tương tác thuốc`

Description:

> Nhắc các tình huống cần hỏi bác sĩ hoặc dược sĩ khi dùng nhiều thuốc hoặc có bệnh nền.

Badge:

- No `Đã kiểm v1` badge in this final review round.

The card does not describe the route as:

- A personal interaction lookup.
- A calculator.
- A safety-conclusion tool.
- A treatment or prescription tool.

## Changes In This Round

Created:

- `reports/tool-tuong-tac-thuoc-final-review-v1.md`

No wording/CSS/code changes were needed.

No changes were made to:

- Engine logic.
- Nutrition data.
- Formulas.
- Stable finalized routes.
- `dist` by hand.

## QA Status

Final QA commands:

- `npm run build`: pass.
- `npm run qa`: pass.
- `npm run qa:food-data`: pass.
- `npm run qa:data-consistency`: pass.
- `npm run test:tools`: pass.
- `git diff --check`: pass.
- `git status --short`: clean except this report before commit.

## Conclusion

`tuong-tac-thuoc` is ready for status update after this final review.

Recommended status:

- `stable_v1`

Recommended stable scope:

- `safety shell only`

It is not:

- A personal drug interaction lookup.
- A drug database.
- A severity/action/mechanism tool.
- A medicine safety conclusion tool.
- A treatment or prescription tool.
