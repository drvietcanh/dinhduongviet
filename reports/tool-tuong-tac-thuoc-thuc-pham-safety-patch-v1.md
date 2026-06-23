# Tool Tuong Tac Thuoc Thuc Pham Safety Patch v1

Date: 2026-06-23

Branch: `tool-tuong-tac-thuoc-thuc-pham-safety-patch-v1`

Base commit: `5a4ef91 docs: triage clinical high risk tools`

Tag created:

- `local-clinical-high-risk-triage-v1 -> 5a4ef91`

## Scope

Route:

- `/cong-cu/tuong-tac-thuoc-thuc-pham/`

Main file:

- `src/pages/cong-cu/tuong-tac-thuoc-thuc-pham.astro`

This round is a safety patch only. It does not make the route stable and does not update tool status.

## Before Patch

The route was a real page with a drug selector and inline JavaScript database.

Observed behavior:

- Had a form/select for individual drug groups.
- Had an inline hardcoded `DRUGS` table in the route file.
- Had no separate engine in `src/lib/`.
- Had no dedicated source-lock or reviewed severity taxonomy.
- Had no dedicated test.
- Returned drug-specific `do`, `avoid`, and `tip` content.

Safety risks:

- Output could be read as personal drug-food interaction guidance.
- Some text gave timing, avoidance, supplementation, dose-change-like, or medication-action advice.
- High-risk drug groups were mixed into a quick lookup experience.
- The hardcoded interaction table was not suitable as user-facing output without source-lock and pharmacist/clinician review.

## Patch

The route was converted into an educational safety shell.

Current behavior:

- Keeps route `200`.
- Keeps H1 `Tương tác thuốc - thực phẩm`.
- Explains that the page only flags situations where the user should ask a doctor or pharmacist.
- Provides a generic scenario selector.
- The selector only returns safety reminders, not interaction conclusions.
- Shows groups that need professional review.
- Shows a checklist of information to bring when asking a professional.

Removed or disabled:

- Drug-specific selector.
- Inline hardcoded interaction table.
- Severity-like interaction output.
- Personal `do` / `avoid` / `tip` advice.
- Any result that concludes a drug-food combination is suitable for the individual user.

## Output Safety

The page now uses only generic outputs such as:

- `Cần hỏi bác sĩ hoặc dược sĩ`
- `Không đủ điều kiện đưa kết luận cá nhân ở v1`
- `Không tự thay đổi cách dùng thuốc hoặc liều dùng dựa trên trang này`

It does not:

- Tell users to stop, adjust, or schedule medication on their own.
- Say a drug and food combination is safe for them.
- Provide personal severity levels.
- Provide a personal treatment plan.
- Provide drug-specific food avoidance instructions.

## Index Card

`src/pages/cong-cu/index.astro` was updated for the card description:

- `Nhắc các tình huống cần hỏi bác sĩ hoặc dược sĩ khi dùng thuốc cùng thực phẩm.`

No `Đã kiểm v1` badge was added.

## Wording Guard

User-facing route text and the `/cong-cu/` card were checked for the banned wording set from this round.

No banned user-facing conclusion wording remains in the patched route.

## Out Of Scope

Not changed:

- nutrition data
- formulas
- stable tool engines
- `muc-tieu-dinh-duong`
- `muc-tieu-can-nang`
- `so-sanh`
- `danh-gia-bua-an`
- `dist`

## Conclusion

`tuong-tac-thuoc-thuc-pham` is now safety-gated enough for the next QA/polish round.

Browser QA was also spot-checked in this safety patch round:

- preview route `200` via `http://localhost:4322/cong-cu/tuong-tac-thuoc-thuc-pham/`
- no redirect observed
- no meta refresh
- H1 is `Tương tác thuốc - thực phẩm`
- old `#drug-select` is not present
- safety scenario form is present and can submit a generic reminder
- console errors: none observed
- mobile 390px-class viewport: no horizontal overflow observed
- `/cong-cu/` card shows the safer description

It should not be marked `stable_v1` yet. A dedicated browser QA/polish round should still verify:

- route `200`
- no redirect/meta refresh
- no console errors
- mobile layout
- no personal interaction conclusion
- no banned wording
