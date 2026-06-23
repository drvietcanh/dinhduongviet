# Tool so-sanh hub QA polish v1

## Mốc

- Branch: `tool-so-sanh-hub-qa-polish-v1`
- Base commit: `ce0cab9 feat: add nutrition comparison hub`
- Tag: `local-so-sanh-hub-stash-review-v1 -> ce0cab9`
- Chưa deploy.

## Phạm vi

- QA browser/manual cho hub `/cong-cu/so-sanh/`.
- Kiểm tra các route liên quan:
  - `/cong-cu/`
  - `/cong-cu/so-sanh/`
  - `/cong-cu/so-sanh-bua-an/`
  - `/cong-cu/so-sanh-thuc-pham`
- Không cập nhật stable/status.
- Không thêm logic tính toán mới.
- Không sửa công thức hoặc dữ liệu dinh dưỡng.
- Không đụng stash `so-sanh`.

## Browser QA method

Phương pháp:

- `npm run build`.
- `npm run preview -- --host 127.0.0.1 --port 4321`.
- Browser plugin qua `localhost:4321`.
- Desktop/default viewport.
- Mobile viewport `390 x 844` bằng Browser viewport override.

Ghi chú kỹ thuật:

- Lần đầu mở `http://127.0.0.1:4321/...` bị `connection refused` vì preview lắng nghe trên `::1`.
- Mở qua `http://localhost:4321/...` hoạt động bình thường.
- Browser screenshot command bị timeout, nên bằng chứng QA dùng DOM snapshot, route identity, console logs, viewport metrics và click navigation proof.

## `/cong-cu/so-sanh/`

Kết quả:

- HTTP route hoạt động qua preview.
- URL sau load: `http://localhost:4321/cong-cu/so-sanh/`.
- Title: `So sánh dinh dưỡng - Dinh Dưỡng Việt`.
- H1: `So sánh dinh dưỡng`.
- Không redirect.
- Không meta refresh.
- Không console error/warn liên quan.
- Không overflow ngang trên desktop.
- Không overflow ngang trên mobile `390 x 844`.
- Main content không có form/input/select/textarea; ô search trong navbar là layout chung, không thuộc hub.
- Trang thể hiện đúng vai trò navigation hub.
- Không có kết quả tính toán, chấm điểm hoặc đánh giá sức khỏe.

Mobile `390 x 844`:

- Viewport reported: `390 x 844`.
- Document scroll width: `375`.
- `overflowX=false`.
- Card hub dễ bấm:
  - `So sánh thực phẩm`: khoảng `347 x 279`.
  - `So sánh bữa ăn`: khoảng `347 x 300`.

## Hub links

Hub hiện dẫn tới:

1. `/cong-cu/so-sanh-thuc-pham`
   - Route có file thật: `src/pages/cong-cu/so-sanh-thuc-pham.astro`.
   - Preview route load được.
   - H1: `So sánh dinh dưỡng thực phẩm`.
   - Không redirect/meta refresh.
   - Không console error/warn liên quan.
   - Không overflow ngang trên mobile `390 x 844`.
2. `/cong-cu/so-sanh-bua-an`
   - Route có file thật: `src/pages/cong-cu/so-sanh-bua-an.astro`.
   - Preview route load được.
   - H1: `🍽️ So sánh bữa ăn`.
   - Không redirect/meta refresh.
   - Không console error/warn liên quan.
   - Không overflow ngang trên mobile `390 x 844`.

Click proof:

- Click card `So sánh bữa ăn` từ hub điều hướng đến `http://localhost:4321/cong-cu/so-sanh-bua-an`.
- Route sau click có H1 `🍽️ So sánh bữa ăn`.
- Không overflow ngang sau navigation.

Badge:

- Hai card trong hub đều dùng `Đang hoàn thiện`.
- Không gắn `Đã kiểm v1` cho route chưa stable.
- Không gắn `Đã kiểm v1` cho chính hub trong vòng này.

## `so-sanh-bua-an` JSON parse

`set:html` JSON data script được kiểm tra trong browser:

- Element `#recipe-data` tồn tại.
- `JSON.parse(textContent)` thành công.
- Parse được `410` món.
- Sample đầu tiên: `Phở bò`.
- Text JSON không chứa chuỗi `</script>`.
- Không có console error/warn liên quan.

Thay đổi `set:html` không làm thay đổi logic tính toán trong vòng này.

## `/cong-cu/` card

Kết quả:

- `/cong-cu/` load được.
- Không overflow ngang.
- Không console error/warn liên quan.
- Có đúng card `So sánh dinh dưỡng`.
- Href: `/cong-cu/so-sanh`.
- Badge: `Đang hoàn thiện`.
- Mô tả: `Hub chọn công cụ phù hợp để so sánh thực phẩm hoặc bữa ăn.`
- Không làm lệch nhóm stable v1 hoặc counts status v5.

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

Không cần sửa UI/code trong vòng này.

Không sửa:

- Wording hub.
- Layout hub.
- Link hub.
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

`/cong-cu/so-sanh/` đã pass vòng QA polish như navigation hub. Route không redirect/meta refresh, link trong hub không chết, mobile `390 x 844` không overflow, `so-sanh-bua-an` JSON parse ổn với `410` món, và không có wording cấm trên hub.

Chưa cập nhật stable/status trong vòng này. Cần một vòng final review trước khi xét cập nhật status cho `so-sanh` theo phạm vi `navigation hub only`.
