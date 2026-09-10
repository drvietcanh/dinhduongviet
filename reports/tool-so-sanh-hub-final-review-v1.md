# Tool so-sanh hub final review v1

## Mốc

- Branch: `tool-so-sanh-hub-final-review-v1`
- Base commit: `ff48921 test: add nutrition comparison hub QA`
- Tag: `local-so-sanh-hub-qa-polish-v1 -> ff48921`
- Chưa deploy.

## Phạm vi

- Final review cho `/cong-cu/so-sanh/` trước khi cập nhật status.
- Chỉ kiểm tra scope hub, wording, mobile, link và `/cong-cu/`.
- Không cập nhật stable/status trong vòng này.
- Không thêm logic tính toán.
- Không sửa công thức.
- Không sửa dữ liệu dinh dưỡng.
- Không đụng stash.

## Cách test mobile

Phương pháp:

- `npm run build`.
- Preview local đang chạy tại `http://localhost:4321`.
- Browser plugin qua in-app Browser.
- Desktop/default viewport.
- Mobile viewport override `390 x 844`.

Các route kiểm nhanh:

- `/cong-cu/`
- `/cong-cu/so-sanh/`
- `/cong-cu/so-sanh-bua-an/`
- `/cong-cu/so-sanh-thuc-pham`

## `/cong-cu/so-sanh/`

Kết quả final review:

- HTTP route load được qua preview.
- URL sau load: `http://localhost:4321/cong-cu/so-sanh/`.
- Title: `So sánh dinh dưỡng - Dinh dưỡng Việt`.
- H1: `So sánh dinh dưỡng`.
- Không redirect.
- Không meta refresh.
- DOM snapshot có nội dung meaningful, không phải blank page.
- Không console error/warn liên quan.
- Không overflow ngang desktop.
- Không overflow ngang mobile `390 x 844`.
- Main content không có form/input/select/textarea.
- Không có kết quả so sánh hoặc chấm điểm trong hub.
- Không hứa kết luận sức khỏe.
- Không đưa khuyến nghị điều trị.
- Không tạo hoặc gọi engine mới trong vòng này.

Scope cuối đạt: **navigation hub only**.

Không phải:

- calculator.
- máy tính.
- công cụ kê đơn.
- công cụ chấm điểm sức khỏe.
- công cụ đặt mục tiêu kcal/macro.
- công cụ điều trị bệnh.

## Mobile `390 x 844`

Kết quả:

- Viewport reported: `390 x 844`.
- Document scroll width: `375`.
- `overflowX=false`.
- Card dễ bấm:
  - `So sánh thực phẩm`: khoảng `347 x 279`.
  - `So sánh bữa ăn`: khoảng `347 x 300`.
- Badge `Đang hoàn thiện` không vỡ layout.
- Link rõ ràng.
- Không console error/warn liên quan.

Click proof:

- Click card `/cong-cu/so-sanh-bua-an` từ hub điều hướng đến `http://localhost:4321/cong-cu/so-sanh-bua-an`.
- Route sau click có H1 `🍽️ So sánh bữa ăn`.
- Không overflow ngang sau navigation.
- Không console error/warn liên quan.

## Hub links

Hub hiện dẫn tới:

1. `/cong-cu/so-sanh-thuc-pham`
   - Route load được qua preview.
   - URL: `http://localhost:4321/cong-cu/so-sanh-thuc-pham`.
   - H1: `So sánh dinh dưỡng thực phẩm`.
   - Không redirect/meta refresh.
   - Không console error/warn liên quan.
2. `/cong-cu/so-sanh-bua-an`
   - Route load được qua preview.
   - URL: `http://localhost:4321/cong-cu/so-sanh-bua-an/`.
   - H1: `🍽️ So sánh bữa ăn`.
   - Không redirect/meta refresh.
   - Không console error/warn liên quan.

Badge trong hub:

- `So sánh thực phẩm`: `Đang hoàn thiện`.
- `So sánh bữa ăn`: `Đang hoàn thiện`.
- Không gắn `Đã kiểm v1` cho hai route con.
- Không gắn `Đã kiểm v1` cho chính hub trong vòng final review này.

## `/cong-cu/`

Kết quả:

- `/cong-cu/` load được qua preview.
- Không overflow ngang.
- Không console error/warn liên quan.
- Có card `So sánh dinh dưỡng`.
- Card hub:
  - href: `/cong-cu/so-sanh`.
  - badge: `Đang hoàn thiện`.
  - mô tả: `Hub chọn công cụ phù hợp để so sánh thực phẩm hoặc bữa ăn.`
- Không có card draft/stale lỗi thời cho `/cong-cu/so-sanh/`.
- Hai card `So sánh thực phẩm` và `So sánh bữa ăn` vẫn là route con hiện có trong cùng nhóm tra cứu, không phải bản trùng lỗi thời của hub.
- Không làm sai nhóm stable v1.
- Không làm sai counts status v5.

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

## Polish

Không cần sửa wording, layout hoặc link trong vòng final review.

Không sửa:

- Engine logic.
- Công thức.
- Dữ liệu dinh dưỡng.
- Tools stable đã chốt.
- `muc-tieu-dinh-duong`.
- `muc-tieu-can-nang`.
- `tinh-macro`.
- `tinh-nang-luong`.
- `dist` thủ công.
- Stash.

## Stash

Stash vẫn còn nguyên:

- `stash@{0}: On tools-core-status-v3: wip: out-of-scope local changes before nutrition goal spec`

Không chạy:

- `git stash pop`
- `git stash drop`
- `git stash apply`

## QA cuối

Chạy sau report:

- `npm run build`
- `npm run qa`
- `npm run qa:food-data`
- `npm run qa:data-consistency`
- `npm run test:tools`
- `git diff --check`
- `git status --short`

## Kết luận

`/cong-cu/so-sanh/` đủ điều kiện cập nhật `tools-core-status-v6`.

Đề xuất status: `stable_v1` với phạm vi **navigation hub only**.

Stable scope đề xuất:

- Hub điều hướng chọn công cụ so sánh phù hợp.
- Không phải calculator.
- Không phải máy tính kcal/macro.
- Không chấm điểm sức khỏe.
- Không kết luận điều trị.
- Không tạo engine/công thức mới.
- Không sửa dữ liệu dinh dưỡng.
