# Tool Danh Gia Bua An Spec v1

Date: 2026-06-11

Branch: `tool-danh-gia-bua-an-spec-v1`

Base commit: `8e5cc6b docs: update core tools status with meal assessment v1`

Tag created:

- `local-tools-core-status-v2 -> 8e5cc6b`

## Scope

- Audit `/cong-cu/danh-gia-bua-an/`.
- Decide whether this route should redirect, become a hub, or become a new light scoring tool.
- Avoid overlap with the stable v1 **Đánh giá khẩu phần Việt** tool.
- Spec only: no code, formula, UI, nutrition data, or manual `dist` changes in this round.

## Files Reviewed

- `src/pages/cong-cu/danh-gia-bua-an.astro`
- `src/pages/cong-cu/khau-phan-viet-clinical.astro`
- `src/lib/vietnamese-meal-assessment.ts`
- `reports/tools-core-status-v2.md`
- `reports/tool-khau-phan-clinical-spec-v1.md`
- `reports/tool-khau-phan-clinical-qa-polish-v1.md`
- `src/pages/cong-cu/so-sanh-bua-an.astro`

## Current State

`danh-gia-bua-an` is currently a redirect stub, not a real meal evaluation tool.

Current file behavior:

- Imports `BaseLayout`.
- Renders title `Đang chuyển hướng...`.
- Uses meta refresh:
  - `/cong-cu/danh-gia-bua-an/` -> `/cong-cu/so-sanh-bua-an`
- Shows a small fallback link:
  - `Tool này đã được cập nhật. Chuyển tiếp ->`

Current inputs:

- None.

Current outputs:

- No meal assessment output.
- No score.
- No nutrient totals.
- No clinical warning.
- Only redirect/fallback text.

Current logic:

- No engine.
- No calculation.
- No data pipeline use.
- No food/recipe selection.
- No safety gate.

Current hardcoding:

- Redirect target `/cong-cu/so-sanh-bua-an`.
- Fallback text.

There is no current disease adjustment, hardcoded score table, meal portion rule, medication advice, or clinical target in this route.

## Overlap Assessment

The route name **Đánh giá bữa ăn** strongly overlaps with the now-stable **Đánh giá khẩu phần Việt** tool at `/cong-cu/khau-phan-viet-clinical/`.

The stable meal assessment already provides:

- Food/recipe input.
- Gram entry.
- Intake totals for kcal, carb, protein, fat.
- Optional fiber, sodium, sugar when data exists.
- Missing-data and estimated-data warnings.
- `auto` / `caution` / `clinical_no_auto` safety modes.
- High-risk clinical flags.
- No disease-specific therapeutic targets.

Because of that, rebuilding `danh-gia-bua-an` as another assessment calculator would create duplicate product meaning unless it has a clearly separate purpose.

The current redirect target, `/cong-cu/so-sanh-bua-an`, is related but not semantically identical:

- `so-sanh-bua-an` compares 2-4 recipes side by side.
- It does not evaluate one user-entered meal.
- It does not have the high-risk safety gate from the stable meal assessment tool.

## Decision

Recommended v1 direction: **`hub_to_related_tools`**.

Rationale:

- The current route is a stub, so there is no valuable logic to preserve.
- A direct redirect to **Đánh giá khẩu phần Việt** would be safe but too narrow; some users arriving at "đánh giá bữa ăn" may actually want carb, GL, protein, water, or recipe comparison.
- A new `light_meal_score` tool would need a separate source-lock before scoring language is safe.
- A hub keeps the route alive, avoids broken links, and helps users choose the correct stable or semi-stable tool.
- A hub does not add new formulas, disease scoring, or clinical claims.

Alternative acceptable direction: **`redirect_to_meal_assessment`** if the product wants fewer intermediate pages.

Not recommended for v1: **`light_meal_score`** until source-lock and scoring wording are prepared.

## Proposed v1 Hub Behavior

Route stays:

- `/cong-cu/danh-gia-bua-an/`

User-facing title:

- `Đánh giá bữa ăn`

Lead wording:

- "Chọn công cụ phù hợp với mục tiêu của bạn."
- "Các công cụ bên dưới dùng cho giáo dục dinh dưỡng, không thay thế tư vấn cá thể."

Recommended cards:

| Card | Route | Purpose | Status wording |
|---|---|---|---|
| Đánh giá khẩu phần Việt | `/cong-cu/khau-phan-viet-clinical/` | Nhập món và gram để xem tổng năng lượng/carb/protein/fat, kèm cờ cần cá thể hóa. | `Đã kiểm v1` |
| Tính carb trong bữa ăn | `/cong-cu/tinh-carb/` | Tập trung vào carb theo khẩu phần. | `Đã kiểm v1` |
| Tính GL từ bữa ăn | `/cong-cu/tinh-gl-bua-an/` | Ước tính tải đường huyết khi có GI mapping phù hợp. | `Đã kiểm v1` |
| Tính nhu cầu đạm | `/cong-cu/tinh-nhu-cau-dam/` | Xem khoảng đạm tham khảo với safety gate. | `Đã kiểm v1` |
| Nhu cầu nước mỗi ngày | `/cong-cu/nuoc-uong/` | Ước tính nước cho người khỏe, chặn nhóm cần cá thể hóa. | `Đã kiểm v1` |
| So sánh bữa ăn | `/cong-cu/so-sanh-bua-an/` | So sánh 2-4 món/recipe cạnh nhau. | `Đang hoàn thiện` |

Optional secondary card:

- `Tra cứu thực phẩm Việt` -> `/cong-cu/tra-cuu-thuc-pham-viet/`

## Safety Wording Requirements

The hub must not say:

- "Bữa ăn đạt chuẩn" as an absolute claim.
- "Bữa ăn đúng/sai" without context.
- "Điểm sức khỏe" as a clinical score.
- "An toàn cho tiểu đường/CKD/gout".
- "Tự tăng/giảm insulin".
- "Tự ngưng thuốc".
- "Khẩu phần điều trị chuẩn".

Suggested safety copy:

- "Các công cụ chỉ dùng để ước tính và giáo dục dinh dưỡng."
- "Nếu bạn có bệnh thận, đái tháo đường dùng insulin/sulfonylurea, suy tim/hạn chế dịch, thai kỳ, trẻ em, ung thư/suy dinh dưỡng, rối loạn ăn uống hoặc sụt cân nhanh, hãy ưu tiên tư vấn cá thể."
- "Kết quả phụ thuộc dữ liệu món ăn và khối lượng nhập."

If linking to **Đánh giá khẩu phần Việt**, mention:

- "Công cụ này có cờ cần cá thể hóa và không kê đơn khẩu phần điều trị."

## Redirect Option

If choosing `redirect_to_meal_assessment`, keep the route for link stability and update the copy:

- Redirect target: `/cong-cu/khau-phan-viet-clinical/`
- Fallback text: "Đánh giá bữa ăn đã được hợp nhất vào Đánh giá khẩu phần Việt."

Pros:

- Simplest.
- Avoids duplicate route meaning.
- Sends users directly to the stable v1 assessment engine.

Cons:

- Users who wanted comparison, carb-only, or GL-specific workflows lose the choice point.
- The route name "Đánh giá bữa ăn" remains hidden rather than clarified.

## Light Score Option

If choosing `light_meal_score` later, it must be a separate source-locked feature.

Possible scope:

- Checklist only, not disease scoring:
  - Has vegetable/fruit component.
  - Has protein source.
  - Has starch or energy source when appropriate.
  - Avoids sugary drink.
  - Avoids obviously salty/processed/fried-heavy pattern.
- Output should be educational suggestions, not a clinical grade.
- Use phrases like:
  - "Có thể cân nhắc..."
  - "Bữa này đang thiếu thông tin về..."
  - "Một điểm cần xem lại..."
- Avoid:
  - "Đạt chuẩn".
  - "Không đạt".
  - "Tốt/xấu cho bệnh X".

Required before implementation:

- Source-lock for the checklist principles.
- Typed engine, for example `src/lib/light-meal-checklist.ts`.
- Dedicated tests.
- Browser QA.
- Clear interaction with high-risk flags.

Suggested test cases for `light_meal_score` if built later:

1. Balanced ordinary meal -> general positive education, no absolute "đạt chuẩn".
2. Missing vegetables -> suggestion to add vegetables if appropriate.
3. Sugary drink selected -> sugar education, no diabetes safety claim.
4. Salty/processed pattern -> sodium caution, no personal sodium target.
5. CKD/heart failure/diabetes medication/pregnancy/child flags -> no score-as-treatment; show personalization message.
6. Missing data -> warning, no crash.
7. Output text does not contain forbidden wording.

## Implementation Recommendation After Approval

Recommended next implementation: **hub page**.

Implementation steps:

1. Replace the current meta refresh stub with a lightweight hub page.
2. Keep route `/cong-cu/danh-gia-bua-an/`.
3. Add cards to stable tools:
   - `khau-phan-viet-clinical`
   - `tinh-carb`
   - `tinh-gl-bua-an`
   - `tinh-nhu-cau-dam`
   - `nuoc-uong`
4. Add one card to `so-sanh-bua-an` as "Đang hoàn thiện" rather than stable.
5. Use wording "Chọn công cụ phù hợp với mục tiêu của bạn".
6. Do not add formulas, disease targets, scoring, or nutrition data changes.
7. QA desktop/mobile and internal links.

No new engine is needed for the hub option.

No new engine test is needed for the hub option, but a simple route/content check could be added later if the project adds page-level tests.

## Status Recommendation

For `tools-core-status-v3` after implementation:

- If implemented as hub: classify `danh-gia-bua-an` as `needs_qa_polish` or `stable_v1` only after browser QA.
- If left as current redirect stub: keep `stub_or_draft`.
- If rebuilt as light score: keep `needs_spec` until source-lock and tests exist.

## Conclusion

`danh-gia-bua-an` is currently a redirect stub with no real evaluation logic. It overlaps by name with **Đánh giá khẩu phần Việt**, but not by implementation.

The safest v1 product path is **`hub_to_related_tools`**: preserve the route, explain the choice, and route users to the five stable v1 tools plus `so-sanh-bua-an` as a related comparison tool. This avoids a premature meal "score" and avoids making another calculator that duplicates the stable meal assessment engine.

