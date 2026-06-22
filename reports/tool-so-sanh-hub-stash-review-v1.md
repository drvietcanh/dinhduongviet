# Tool so-sanh hub stash review v1

## Mốc

- Branch: `tool-so-sanh-hub-stash-review-v1`
- Base commit: `600c15b docs: update tool status with weight goal v1`
- Tag: `local-tools-core-status-v5 -> 600c15b`
- Stash: `stash@{0}: wip: out-of-scope local changes before nutrition goal spec`
- Chưa deploy.

## Stash inspection và apply

Stash chứa đúng bốn file dự kiến:

- `src/layouts/BaseLayout.astro`
- `src/pages/cong-cu/index.astro`
- `src/pages/cong-cu/so-sanh-bua-an.astro`
- `src/pages/cong-cu/so-sanh.astro`

`git stash apply stash@{0}` có một content conflict tại `src/pages/cong-cu/index.astro`. Ba file còn lại apply sạch.

Nguyên nhân conflict: stash được tạo từ status v3 và còn hai entry draft lỗi thời trong cùng vị trí:

- HEAD v5 còn entry `so-sanh` draft trước khi hub được khôi phục.
- Stash còn entry `muc-tieu-dinh-duong` draft trước khi tool này được nâng stable.

Conflict được resolve có chủ đích:

- Giữ toàn bộ card/badge stable hiện tại của v5.
- Loại entry `so-sanh` draft vì route đã chuyển thành hub.
- Không mang lại entry `muc-tieu-dinh-duong` draft vì route đã stable từ status v4.
- Thêm card `So sánh dinh dưỡng` ở nhóm tra cứu với badge `Đang hoàn thiện`.

Không dùng `git stash pop` và không drop stash.

## File được khôi phục/sửa

### `src/pages/cong-cu/so-sanh.astro`

- Bỏ redirect/meta refresh sang `so-sanh-thuc-pham`.
- Chuyển route thành navigation hub `So sánh dinh dưỡng`.
- Polish lead để nói rõ đây là hub chọn công cụ.
- Đổi badge hai card thành `Đang hoàn thiện`; không dùng `Đã kiểm v1` cho route chưa stable.

### `src/pages/cong-cu/index.astro`

- Chuyển `so-sanh` khỏi nhóm draft sang nhóm `Tra cứu và so sánh thực phẩm`.
- Card user-facing: `So sánh dinh dưỡng`.
- Mô tả: `Hub chọn công cụ phù hợp để so sánh thực phẩm hoặc bữa ăn.`
- Badge: `Đang hoàn thiện`.
- Không gắn `Đã kiểm v1`.

### `src/layouts/BaseLayout.astro`

- Thêm breadcrumb mapping:
  - `so-sanh` -> `So sánh dinh dưỡng`.
- Thay đổi khớp pattern `breadcrumbNames` hiện có.

### `src/pages/cong-cu/so-sanh-bua-an.astro`

- Đổi JSON embedding từ Astro child expression sang:
  - `<script type="application/json" set:html={JSON.stringify(recipeData)}>`.
- Client code vẫn đọc cùng element `recipe-data` và gọi `JSON.parse(textContent)`.
- Không thay đổi công thức, field dữ liệu, hàm so sánh hoặc cách tính nutrient.

## Route `/cong-cu/so-sanh/`

- HTTP `200`.
- Không redirect.
- Không meta refresh.
- H1: `So sánh dinh dưỡng`.
- Stable scope đề xuất cho vòng sau: navigation hub only.
- Không phải calculator.
- Không chấm điểm bữa ăn hoặc sức khỏe.
- Không tạo kcal/macro mới.
- Không đặt disease target hoặc khuyến nghị điều trị.

## Hub links

Hub hiện dẫn tới:

1. `/cong-cu/so-sanh-thuc-pham`
   - Card: `So sánh thực phẩm`.
   - Badge: `Đang hoàn thiện`.
2. `/cong-cu/so-sanh-bua-an`
   - Card: `So sánh bữa ăn`.
   - Badge: `Đang hoàn thiện`.

Hai route này chưa được đánh dấu stable trong `tools-core-status-v5`, nên hub không gắn badge `Đã kiểm v1` cho chúng.

## `set:html` review

Thay đổi `set:html` là hợp lý cho JSON data script trong Astro:

- JSON được nhúng dưới dạng raw text vào script `application/json`.
- Browser QA xác nhận `JSON.parse` thành công.
- Dataset parse được `410` recipe item.
- Không có console/runtime error trên route `so-sanh-bua-an`.
- Không thay đổi logic business, công thức hoặc dữ liệu nguồn.

## Wording guard

Không thấy user-facing trên hub:

- `kết luận chính xác tuyệt đối`
- `mục tiêu chuẩn`
- `bắt buộc ăn`
- `chấm điểm sức khỏe`
- `điều trị bệnh`
- `an toàn cho bệnh`
- `tự chỉnh thuốc`
- `macro tối ưu`
- `giảm cân chắc chắn`
- `calculator`
- `máy tính`
- `kê đơn`
- `mục tiêu kcal`
- `mục tiêu macro`

## Browser/preview QA

Phương pháp:

- `npm run build`.
- `npm run preview`.
- Headless Chrome qua Chrome DevTools Protocol.
- Mobile viewport `390 x 844`.

Kết quả:

- `/cong-cu/so-sanh/`: `200`, không redirect/meta refresh, không overflow ngang, không console error.
- Hub có đúng hai link route nêu trên.
- Hai card đều có badge `Đang hoàn thiện`.
- `/cong-cu/so-sanh-bua-an/`: `200`, không overflow ngang, JSON parse thành công với 410 item, không console error.
- `/cong-cu/`: `200`, có đúng một card `So sánh dinh dưỡng`, href đúng, mô tả đúng, badge `Đang hoàn thiện`.

## Ngoài scope

Không sửa:

- Engine logic.
- Công thức.
- Dữ liệu dinh dưỡng.
- `muc-tieu-dinh-duong`.
- `muc-tieu-can-nang`.
- `tinh-macro`.
- `tinh-nang-luong`.
- `dist` thủ công.

## Kết luận

Stash đã được review và tích hợp an toàn sau một conflict có giới hạn tại `index.astro`. Route `/cong-cu/so-sanh/` hiện phù hợp với phạm vi navigation hub only, nhưng chưa nâng stable/status trong vòng này.

Cần một vòng browser QA/polish riêng trước khi xét `stable_v1` hoặc cập nhật tools core status.
