# Final review: tuong-tac-thuoc-thuc-pham v1

Date: 2026-06-24

Branch: `tool-tuong-tac-thuoc-thuc-pham-final-review-v1`

Base commit: `94402b2 test: add drug food interaction page QA`

Tag created: `local-tuong-tac-thuoc-thuc-pham-qa-polish-v1 -> 94402b2`

## Scope

Route reviewed:

- `/cong-cu/tuong-tac-thuoc-thuc-pham/`
- File: `src/pages/cong-cu/tuong-tac-thuoc-thuc-pham.astro`

Final approved scope for this round:

- Safety shell only.
- Reminds users which situations should be discussed with a doctor or pharmacist.
- Does not work as a personal drug-food interaction lookup.
- Does not replace professional advice.
- Does not provide drug-specific conclusions, severity tiers, timing rules, dose changes, or stop/start instructions.

## Browser and mobile QA method

Preview server:

- `npm run preview -- --host localhost --port 4331`

Browser method:

- Browser plugin / in-app browser.
- Desktop/default viewport for route and `/cong-cu/` checks.
- Explicit Browser viewport override at `390 x 844` for mobile-class review.

HTTP checks:

- `/cong-cu/tuong-tac-thuoc-thuc-pham/`: `200`
- `/cong-cu/`: `200`

## Route review

Result:

- HTTP `200`: pass.
- Redirect: none observed.
- Meta refresh: none observed.
- H1: `Tương tác thuốc - thực phẩm`.
- Console errors/warnings: none observed.
- Desktop horizontal overflow: none observed.
- Mobile 390px-class horizontal overflow: none observed.

The route remains a safety shell:

- No drug-specific selector.
- No hardcoded interaction table shown to users.
- No personal interaction conclusion.
- No mild/moderate/severe interaction tier.
- No statement that a drug-food pairing is safe.
- No instruction to stop medicine, change dose, or change medicine timing.
- No new engine called or created in this review.
- No nutrition data or formula changes.

## Mobile result

Viewport review at `390 x 844`:

- Select/control height: 46px.
- Submit button height: 46px.
- Main content width fit within viewport.
- Result panel and risk cards did not overflow horizontally.
- Labels remained readable.
- Safety note remained understandable and did not break layout.

## Final scenario checks

Five final groups tested through the UI:

1. Thuốc theo toa.
2. Thuốc chống đông hoặc thuốc tim mạch.
3. Thuốc đái tháo đường hoặc đường huyết.
4. Thuốc huyết áp, lợi tiểu hoặc điện giải.
5. Mang thai hoặc cho con bú.

Expected and observed result for all five:

- Output heading: `Cần hỏi bác sĩ hoặc dược sĩ`.
- Output only reminds users to ask a professional.
- No personal drug-food conclusion.
- No self-adjustment instruction.
- No timing instruction such as taking medicine a certain number of hours apart.
- No severity tier.

## Wording guard

User-facing route and `/cong-cu/` card were checked for the banned wording list.

No user-facing occurrence found for:

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
- `Bạn có thể dùng thuốc này với thực phẩm này`
- `Bạn nên ngừng thuốc này`
- `Bạn nên tránh hoàn toàn thực phẩm này`
- `Bạn chỉ cần uống cách X giờ`
- `Tương tác này an toàn`
- `Tương tác này không đáng lo`

Technical/code wording did not require changes in this round.

## `/cong-cu/` card

Card:

- Name: `Tương tác thuốc - thực phẩm`
- Description: `Nhắc các tình huống cần hỏi bác sĩ hoặc dược sĩ khi dùng thuốc cùng thực phẩm.`
- Badge: no `Đã kiểm v1` badge in this round.
- Does not call the route a calculator or personal interaction lookup.

## Changes in this round

Files changed:

- `reports/tool-tuong-tac-thuoc-thuc-pham-final-review-v1.md`

No route wording/CSS changes were needed.

No changes to:

- engine logic
- nutrition data
- formulas
- route behavior outside this report
- stable tools
- `dist`

## QA status

Final command QA:

- `npm run build`: pass
- `npm run qa`: pass
- `npm run qa:food-data`: pass
- `npm run qa:data-consistency`: pass
- `npm run test:tools`: pass
- `git diff --check`: pass
- `git status --short`: clean except this report before commit

## Conclusion

`tuong-tac-thuoc-thuc-pham` is ready for the next status-update round after final QA passes.

Recommended status:

- `stable_v1`

Recommended stable scope:

- `safety shell only`
- not a personal drug-food interaction lookup
- not a medication advice engine
- not a source of drug-specific safety conclusions
- not a substitute for doctor/pharmacist review
