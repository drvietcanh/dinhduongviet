# Safety patch: tuong-tac-thuoc v1

Date: 2026-06-24

Branch: `clinical-p0-02-safety-patch-v1`

Base commit: `1f30480 docs: update tool status with drug food interaction safety shell v1`

Tag created:

- `local-tools-core-status-v7 -> 1f30480`

## P0 selection

Selected tool:

- Slug: `tuong-tac-thuoc`
- Display name: `Tương tác thuốc`
- Route: `/cong-cu/tuong-tac-thuoc/`
- Route file: `src/pages/cong-cu/tuong-tac-thuoc.astro`

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

`tuong-tac-thuoc-thuc-pham` was already processed and promoted in `reports/tools-core-status-v7.md`. The next highest remaining P0 from the triage order is therefore `tuong-tac-thuoc`.

Why not the other P0 tools in this round:

- `nhu-cau-dinh-duong-tre-em`, `dinh-duong-thai-ky`, `theo-doi-duong-huyet`, `theo-doi-suc-khoe`, `dia-an-lanh-manh`, `nuoc-muoi-mon-an`, and `chi-so-gi` remain P0, but they are lower in the existing triage priority order.
- This round intentionally follows the triage order rather than choosing a tool by preference.

## Before patch

Route state before patch:

- Real route, not a redirect.
- Had a drug search input.
- Had an inline JavaScript drug-food interaction database.
- Had drug-specific cards for broad medication classes.
- Rendered severity-like labels.
- Rendered mechanism text and action advice.
- Included hardcoded examples for anticoagulants, diabetes drugs, statins, blood pressure drugs, diuretics, thyroid drugs, antibiotics, NSAIDs, PPIs, and calcium channel blockers.

Risk:

- Medication-facing output could be read as personal interaction advice.
- Severity/action cards could be mistaken for triage guidance.
- Hardcoded interaction rows did not have project source-lock, update date, pharmacy review, or action taxonomy.
- Some old output included direct avoid/use/timing-style instructions.

No separate engine was found. The logic and data were inline in the route.

No dedicated test script was found for this route.

## Patch applied

The route was converted to a safety shell.

Removed or disabled from user-facing output:

- Drug-specific search.
- Inline interaction database rendering.
- Drug-specific selector/search result cards.
- Hardcoded interaction table/cards.
- Severity-like tiers.
- Mechanism/action output.
- Personal drug-food conclusions.
- Timing rules.
- Any recommendation to change medicine use based on the page.

Current UI:

- H1: `Tương tác thuốc`
- Lead says this only reminds users about situations that need a doctor or pharmacist.
- A general situation selector is kept only to show a safety reminder.
- The selector is not drug-specific and does not return a personal interaction conclusion.
- Risk group cards list groups that should ask before changing medicine, supplements, or diet.
- Preparation checklist tells users what information to bring to a professional conversation.

Output now says:

- `Cần hỏi bác sĩ hoặc dược sĩ`
- `Không đủ điều kiện đưa kết luận cá nhân ở v1`
- Information does not replace professional advice.

## `/cong-cu/` card

Updated card:

- `Tương tác thuốc`
- Description changed from a quick interaction lookup to: `Nhắc các tình huống cần hỏi bác sĩ hoặc dược sĩ khi đang dùng thuốc.`

No `Đã kiểm v1` badge was added in this safety patch round.

## Wording guard

Checked route and `/cong-cu/` card for the requested banned wording:

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

Preview checks:

- `/cong-cu/`: `200`.
- `/cong-cu/tuong-tac-thuoc/`: `200`.
- Route has no redirect or meta refresh.
- Route has no console error.
- Browser plugin mobile `390 x 844` check had no horizontal overflow.
- Route no longer shows personal interaction conclusions, drug-specific search, old interaction cards, or banned wording.
- Five UI situations tested:
  - thuốc theo toa.
  - thuốc chống đông hoặc thuốc tim mạch.
  - thuốc đái tháo đường hoặc đường huyết.
  - thuốc huyết áp hoặc thuốc lợi tiểu.
  - thai kỳ/trẻ em/người cao tuổi.
- All five outputs only showed `Cần hỏi bác sĩ hoặc dược sĩ` and did not show personal interaction conclusions, severity tiers, or timing rules.

## Conclusion

`tuong-tac-thuoc` is safety-patched enough for a dedicated browser QA/polish round.

Do not mark it `stable_v1` from this round alone. It still needs:

- browser/mobile QA polish.
- final review.
- a later status update if approved.
