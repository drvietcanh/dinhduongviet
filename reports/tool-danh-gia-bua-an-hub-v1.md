# Tool Danh Gia Bua An Hub v1

Date: 2026-06-11

Branch: `tool-danh-gia-bua-an-hub-v1`

Base commit: `af701d9 docs: add meal evaluation tool specification`

Tag created:

- `local-danh-gia-bua-an-spec-v1 -> af701d9`

## Scope

- Replace `/cong-cu/danh-gia-bua-an/` redirect stub with a lightweight hub page.
- Keep the route stable for existing links.
- Do not add a new calculator, scoring engine, disease target, formula, or nutrition data change.

## Files Changed

- `src/pages/cong-cu/danh-gia-bua-an.astro`
- `src/pages/cong-cu/index.astro`
- `reports/tool-danh-gia-bua-an-hub-v1.md`

## Redirect Stub Status

The route is no longer a meta refresh redirect.

Removed behavior:

- Title `Đang chuyển hướng...`
- Meta refresh to `/cong-cu/so-sanh-bua-an`
- Redirect fallback copy

New behavior:

- Page title and H1: `Đánh giá bữa ăn`
- Lead copy:
  - `Chọn công cụ phù hợp với mục tiêu của bạn.`
  - `Các công cụ bên dưới dùng để ước tính và giáo dục dinh dưỡng, không thay thế tư vấn cá thể.`
- Static hub cards linking to the most relevant stable v1 tools and related draft tools.

## Cards And Links

Primary cards:

| Card | Route | Badge | Purpose |
|---|---|---|---|
| Đánh giá khẩu phần Việt | `/cong-cu/khau-phan-viet-clinical/` | `Đã kiểm v1` | Nhập món và gram để xem tổng năng lượng, carb, protein, fat từ khẩu phần, kèm cờ cần cá thể hóa. |
| Tính carb trong bữa ăn | `/cong-cu/tinh-carb/` | `Đã kiểm v1` | Tập trung vào lượng carbohydrate theo món và khẩu phần. |
| Tính GL từ bữa ăn | `/cong-cu/tinh-gl-bua-an/` | `Đã kiểm v1` | Ước tính tải đường huyết khi món có GI mapping phù hợp. |
| Tính nhu cầu đạm | `/cong-cu/tinh-nhu-cau-dam/` | `Đã kiểm v1` | Xem khoảng đạm tham khảo với safety gate cho các nhóm cần cá thể hóa. |
| Nhu cầu nước mỗi ngày | `/cong-cu/nuoc-uong/` | `Đã kiểm v1` | Ước tính nước cho người khỏe, chặn nhóm cần cá thể hóa. |

Related cards:

| Card | Route | Badge | Purpose |
|---|---|---|---|
| So sánh bữa ăn | `/cong-cu/so-sanh-bua-an/` | `Đang hoàn thiện` | So sánh 2-4 món hoặc recipe cạnh nhau. |
| Tra cứu thực phẩm Việt | `/cong-cu/tra-cuu-thuc-pham-viet/` | `Đang hoàn thiện` | Tra cứu nhanh dữ liệu thực phẩm để chọn món phù hợp với câu hỏi của người dùng. |

## Formula, Engine, And Data

No new formula was added.

No new engine was added.

No meal scoring was added.

No disease-specific target was added.

No nutrition data was changed.

The route now only helps users choose an existing tool.

## Safety Wording

Added safety note:

- If the user has kidney disease, diabetes using insulin/sulfonylurea, heart failure/fluid restriction, pregnancy, child/adolescent context, cancer/malnutrition, eating disorder, or rapid weight loss, they should prioritize individualized counseling.
- Results depend on food data and entered portion weights.

Forbidden wording check:

- No `Bữa ăn đạt chuẩn`
- No `Bữa ăn đúng/sai`
- No `Điểm sức khỏe`
- No `An toàn cho tiểu đường/CKD/gout`
- No `Tự tăng/giảm insulin`
- No `Tự ngưng thuốc`
- No `Khẩu phần điều trị chuẩn`

## Route And Link QA

QA performed:

- `npm run build`
- `npm run qa`
- `npm run qa:food-data`
- `npm run qa:data-consistency`
- `npm run test:tools`
- Previewed `/cong-cu/danh-gia-bua-an/` at `http://[::1]:4327/cong-cu/danh-gia-bua-an/`.

Preview results:

- HTTP status: `200`
- Meta refresh redirect: absent
- H1: `Đánh giá bữa ăn`
- Hub cards rendered: `7`
- Primary and related links visible
- Forbidden wording in rendered user-facing text: none
- Horizontal overflow at tested desktop viewport: none

## Status Recommendation

Do not mark `danh-gia-bua-an` as `stable_v1` in `tools-core-status-v3` until browser QA polish is complete.

Recommended interim status after this implementation:

- `needs_qa_polish`

Possible final status after browser QA:

- `stable_v1` as a navigation hub only, not as a calculator.

## Conclusion

`/cong-cu/danh-gia-bua-an/` has been converted from a redirect stub into a lightweight hub that directs users to the five stable v1 nutrition tools plus related tools still being completed. The page does not calculate, score, prescribe, or add disease targets. A short browser QA polish round should happen before updating the overall tool status report.
