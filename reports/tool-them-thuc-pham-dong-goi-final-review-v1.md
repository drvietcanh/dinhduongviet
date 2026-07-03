# Tool Final Review v1: them-thuc-pham-dong-goi

## 1. Mốc đầu vào

- Status v22 commit: `24a768b`
- QA polish commit: `9267a6d`
- Branch: `tool-them-thuc-pham-dong-goi-final-review-v1`
- Route: `/cong-cu/them-thuc-pham-dong-goi/`
- Chưa deploy

## 2. File đã đọc

- `src/pages/cong-cu/them-thuc-pham-dong-goi.astro`
- `src/pages/cong-cu/index.astro`
- `reports/tool-them-thuc-pham-dong-goi-qa-polish-v1.md`
- `reports/tools-core-status-v22.md`
- `package.json`

## 3. File đã sửa

- `src/pages/cong-cu/index.astro`
- `reports/tool-them-thuc-pham-dong-goi-final-review-v1.md`

Không cần sửa thêm route logic trong final review này.

## 4. Route scope sau final review

- `neutral packaged food entry + data QA shell only`

## 5. Browser / mobile QA

- Preview URL: `http://localhost:4321`
- `/cong-cu/`: pass, HTTP 200
- `/cong-cu/them-thuc-pham-dong-goi/`: pass, HTTP 200
- Redirect: không
- Meta refresh: không
- Console: sạch trong fresh tab/session
- Desktop overflow ngang: không
- Mobile `390 x 844` overflow ngang: không
- Mobile action buttons: wrap đúng
- Save button trên mobile: hiển thị và thao tác được
- Route vẫn render đúng sau reload và sau query payload

## 6. Chức năng đã kiểm

- Form nhập dữ liệu nhãn: pass
- localStorage key: `ddv_packaged_foods_v1`
- Lưu item mới: pass
- Reload và hiển thị lại item đã lưu: pass
- Xóa từng mục: pass
- Xóa toàn bộ dữ liệu local: pass
- Search/list local: pass
- Export JSON:
  - click không gây lỗi console hay crash app
  - browser runtime của phiên QA này không trả `download` event ổn định để xác nhận file tải xuống ở tầng automation
  - source route cho thấy export chỉ dùng `Blob` + `a.download` với JSON text thô, không chèn HTML
- Import JSON:
  - source route có `try/catch`
  - chặn dữ liệu không phải mảng
  - sanitize field theo whitelist
  - final review không dùng được helper upload file đáng tin cậy trong browser runtime hiện tại, nên phần invalid-file path được xác nhận bằng source audit thay vì file-picker automation
- Copy/CSV: không có

## 7. UI safety

- Form: còn
- Free-text input: còn
- Search local: còn
- List local: còn
- Export/import JSON: còn
- localStorage: còn
- innerHTML route-scoped: không còn
- Render DOM-safe:
  - `createElement`
  - `textContent`
  - `appendChild`
  - `replaceChildren`
- Chart/canvas: không có

## 8. Clinical safety

- Tool chỉ là nơi nhập/lưu/hiển thị dữ liệu nhãn thực phẩm đóng gói ở mức tham khảo.
- Không gọi đây là dữ liệu chính thống.
- Không nói dữ liệu được đóng góp vào cơ sở dữ liệu gốc.
- Không kết luận sản phẩm tốt/xấu/an toàn/phù hợp.
- Không kết luận phù hợp cho tiểu đường, tăng huyết áp, bệnh thận, gout, suy tim, thai kỳ, trẻ em.
- Không có target bệnh nền.
- Không có đạt/không đạt mục tiêu cá nhân.
- Không có hướng dẫn chỉnh thuốc/insulin/lợi tiểu/bữa ăn.
- Từ bệnh nền còn lại chỉ nằm trong safety shell.

## 9. Data / unit QA

- Năng lượng: `kcal`
- Đạm/carb/chất béo/chất xơ/đường: `g`
- Natri/kali/canxi/sắt/vitamin C/cholesterol: `mg`
- Không gọi natri là muối
- Route nói rõ dữ liệu hiển thị theo khẩu phần người dùng nhập từ nhãn
- `0` được phân biệt với missing data
- Missing data hiển thị trung tính bằng `—`
- Không tự bịa giá trị còn thiếu
- Không còn claim `100g / 100ml` mặc định như trước QA polish

## 10. XSS / fuzz test

### Payload đã thử trực tiếp

- `<script>alert(1)</script>`
- `<b>gao</b>`
- `"><img src=x onerror=alert(1)>`
- `=HYPERLINK("http://x","x")`
- `+SUM(1,1)`
- `@cmd`
- `-1+2`

### Query string đã thử

- `?q=<script>alert(1)</script>`
- `?q=<b>gao</b>`

### Kết quả

- Không tạo dialog
- Không render HTML
- Không sinh `script` tag trong list
- Không sinh `img` tag trong list
- Không phá layout desktop/mobile
- Không gây lỗi console
- Payload dạng công thức chỉ hiện như text người dùng nhập

## 11. Wording cấm

- Không còn user-facing kiểu:
  - tốt/xấu
  - an toàn/phù hợp cho bệnh
  - nên ăn/không nên ăn
  - target bệnh nền
  - đạt/không đạt mục tiêu cá nhân
  - chỉnh thuốc/insulin/lợi tiểu
- Các từ còn lại như `an toàn`, `phù hợp`, `thuốc`, `insulin`, `lợi tiểu`, `điều trị`, `thai kỳ`, `trẻ em`, `người cao tuổi` chỉ còn trong safety shell hoặc câu phủ định rủi ro, chấp nhận được.

## 12. /cong-cu/ card

- Mô tả giữ nguyên:
  - `Nhập và lưu dữ liệu từ nhãn thực phẩm đóng gói ở mức tham khảo, không thay thế tư vấn chuyên môn.`
- Badge:
  - `Đã kiểm v1` đã được gắn sau khi final review pass

## 13. Không sửa

- Không sửa engine chung
- Không sửa dữ liệu gốc hàng loạt
- Không sửa công thức chung
- Không sửa dist thủ công
- Không sửa route ngoài scope
- Không xử lý backlog data QA mã `6014`

## 14. QA cuối

- `npm run build`: pass
- `npm run qa`: pass
- `npm run qa:food-data`: pass
- `npm run qa:data-consistency`: pass
- `npm run test:tools`: pass

## 15. git diff --check

- Pass về nội dung
- Nếu còn cảnh báo LF/CRLF thì là kiểu Git Windows, không phải lỗi nội dung

## 16. Worktree cuối sạch không

- Chưa, còn thay đổi trong scope final review trước khi commit

## 17. Kết luận

- Final review pass
- Đủ điều kiện sang `tools-core-status-v23`
- Stable scope đề xuất:
  - `neutral packaged food entry + data QA shell only`
- Card `/cong-cu/` đã gắn `Đã kiểm v1`
- Chưa cập nhật stable/status trong vòng này
- Chưa deploy
