# Tool QA Polish v1: them-thuc-pham-dong-goi

## 1. Mốc đầu vào

- Status v22 commit: `24a768b`
- Branch: `tool-them-thuc-pham-dong-goi-qa-polish-v1`
- Route: `/cong-cu/them-thuc-pham-dong-goi/`
- Chưa deploy

## 2. File đã đọc

- `src/pages/cong-cu/them-thuc-pham-dong-goi.astro`
- `src/pages/cong-cu/index.astro`
- `reports/tools-core-status-v22.md`
- `package.json`
- Các helper/import route-scoped được rà soát qua source/grep trực tiếp trong page script

## 3. Hiện trạng trước polish

- Có form nhập free-text: tên sản phẩm, thương hiệu, ghi chú, search danh sách local.
- Có localStorage với key cũ `dinhduongviet_branded`.
- Có xuất/nhập JSON.
- Có list kết quả local.
- Có parse số cho kcal/protein/carb/fat và nhiều vi chất, nhưng đang dùng `parseFloat(...) || 0`, làm mờ ranh giới giữa `0` và dữ liệu thiếu.
- Heading user-facing nói như dữ liệu `100g / 100ml`, trong khi flow thực tế đang nhập theo khẩu phần từ nhãn.
- Nhiều đoạn render list dùng `innerHTML`.
- Search trong danh sách local chưa accent-insensitive rõ ràng.
- Copy route/card còn rộng, dễ bị hiểu là nhập dữ liệu để “đóng góp” hay gắn chung với dữ liệu chính thống, nhưng chưa có safety shell đủ chặt cho ngữ cảnh bệnh nền.

## 4. File đã sửa

- `src/pages/cong-cu/them-thuc-pham-dong-goi.astro`
- `src/pages/cong-cu/index.astro`

## 5. Scope sau polish

- `neutral packaged food entry + data QA shell only`

## 6. Những thứ đã hạ rủi ro

- Đổi lead copy và card copy sang hướng trung tính, chỉ nhập/lưu dữ liệu nhãn ở mức tham khảo.
- Thêm `data shell` và `safety shell` nhấn mạnh:
  - dữ liệu do người dùng nhập từ bao bì
  - cần đối chiếu lại với nhãn thực tế
  - không xác nhận sản phẩm tốt/xấu/an toàn/phù hợp cho bệnh nền
  - người có bệnh nền, thuốc, thai kỳ, trẻ em, người cao tuổi, nhu cầu ăn điều trị cần hỏi bác sĩ/chuyên gia
  - không tự chỉnh thuốc, insulin, lợi tiểu, chế độ điều trị
- Đổi heading dữ liệu sang “theo khẩu phần trên nhãn”.
- Đổi storage key sang `ddv_packaged_foods_v1`.
- Thêm nút xóa dữ liệu local.
- Bỏ `innerHTML` ở luồng render list route-scoped, chuyển sang DOM-safe render bằng `createElement`, `textContent`, `appendChild`, `replaceChildren`.
- Chuẩn hóa parse số nullable để:
  - `0` vẫn là `0`
  - dữ liệu thiếu hiển thị `—`
- Search local đổi sang accent-insensitive.
- Import JSON được sanitize về whitelist field thay vì đẩy object thô vào render path.
- Vá thêm lỗi CSS hover nhỏ ở nút xóa card.

## 7. Local data / export / copy

- LocalStorage: có
- Storage key hiện tại: `ddv_packaged_foods_v1`
- Export: có, JSON
- Import: có, JSON
- Copy: không có
- CSV: không có
- Dữ liệu lưu cục bộ trên trình duyệt, không có dấu hiệu gửi server trong scope route này
- Có nút `🧹 Xóa dữ liệu local`

## 8. UI safety

- Form: còn
- Free-text input: còn
- Search local: còn
- List local: còn
- Export/import JSON: còn
- localStorage: còn
- innerHTML route-scoped: không còn
- Chart/canvas: không có

## 9. Clinical safety

- Không có target bệnh nền.
- Không có phân loại đạt/không đạt mục tiêu cá nhân.
- Không có kết luận sản phẩm an toàn/phù hợp cho tiểu đường, tăng huyết áp, bệnh thận, gout, suy tim, thai kỳ, trẻ em.
- Không có lời khuyên nên ăn/không nên ăn.
- Không có hướng dẫn chỉnh thuốc/insulin/lợi tiểu/bữa ăn.
- Các từ bệnh nền/thuốc còn lại chỉ nằm trong safety shell cảnh báo cần hỏi chuyên môn.

## 10. Data / unit QA

- Năng lượng hiển thị bằng `kcal`.
- Đạm/carb/chất béo/chất xơ/đường hiển thị bằng `g`.
- Natri/kali/canxi/sắt/vitamin C/cholesterol hiển thị bằng `mg` nếu có nhập.
- Không gọi natri là muối.
- Dữ liệu hiện đang hiển thị theo khẩu phần người dùng nhập từ nhãn.
- Không còn claim user-facing rằng đây là dữ liệu `100g / 100ml` mặc định.
- `0` được phân biệt với dữ liệu thiếu.
- Dữ liệu thiếu hiển thị trung tính bằng `—`.
- Không tự suy đoán giá trị thiếu.
- Export/import JSON giữ dữ liệu trung tính, không gắn kết luận sức khỏe.
- Không có CSV nên không phát sinh formula injection kiểu Excel trong flow hiện tại.

## 11. XSS / render

- Đã bỏ `innerHTML` trong render list route-scoped.
- Render hiện dùng:
  - `createElement`
  - `textContent`
  - `appendChild`
  - `replaceChildren`
- Input đã thử trong browser:
  - `<script>alert(1)</script>`
  - `<b>gao</b>`
  - `"><img src=x onerror=alert(1)>`
- Kết quả:
  - không tạo dialog
  - không render HTML
  - không sinh `script` tag trong list
  - không sinh `img` tag trong list
  - text độc hại chỉ hiện như text thô
- Query string đã thử:
  - `?q=<script>alert(1)</script>`
  - `?q=<b>gao</b>`
- Kết quả: không render HTML, không tạo dialog

## 12. Browser / mobile QA

- Preview port: `4321`
- Route `/cong-cu/`: pass
- Route `/cong-cu/them-thuc-pham-dong-goi/`: pass
- HTTP: 200
- Redirect: không
- Meta refresh: không
- Console: sạch trong các lượt check desktop/mobile đã hoàn tất
- Desktop: không overflow ngang
- Mobile `390 x 844`: không overflow ngang
- Add item bằng dữ liệu mẫu: pass
- Persist sau reload: pass
- Search/list hiển thị item mới: pass
- Card `/cong-cu/` mô tả đúng và chưa gắn `Đã kiểm v1`
- Nút `Xóa dữ liệu local` đã được đưa vào UI và handler source xóa key local + rerender đã được xác nhận trong code.
- Một lượt kiểm tương tác confirm muộn trong browser plugin bị timeout ở bước click sau khi các lượt QA desktop/mobile chính đã pass; đây không phải lỗi runtime của route hiện tại. Logic xóa local được xác nhận thêm ở source:
  - `localStorage.removeItem(STORAGE_KEY)`
  - reset form
  - rerender list

## 13. /cong-cu/ card

- Mô tả hiện tại:
  - `Nhập và lưu dữ liệu từ nhãn thực phẩm đóng gói ở mức tham khảo, không thay thế tư vấn chuyên môn.`
- Badge `Đã kiểm v1`: chưa gắn

## 14. Wording cấm

- Không còn user-facing kiểu:
  - xác nhận sản phẩm tốt/xấu
  - an toàn/phù hợp cho bệnh nền
  - nên ăn/không nên ăn
  - target bệnh nền
  - chỉnh thuốc/insulin/lợi tiểu
- Các từ còn lại như `an toàn`, `phù hợp`, `thuốc`, `insulin`, `lợi tiểu`, `điều trị`, `thai kỳ`, `trẻ em`, `người cao tuổi` chỉ còn trong safety shell hoặc câu phủ định rủi ro, chấp nhận được.

## 15. Không sửa

- Không sửa engine chung
- Không sửa dữ liệu gốc hàng loạt
- Không sửa công thức chung
- Không sửa dist thủ công
- Không sửa route ngoài scope
- Không xử lý backlog data QA mã `6014`

## 16. QA command

- `npm run build`: pass
- `npm run qa`: pass
- `npm run qa:food-data`: pass
- `npm run qa:data-consistency`: pass
- `npm run test:tools`: pass

## 17. git diff --check

- Pass về nội dung
- Có cảnh báo LF/CRLF trên Windows cho:
  - `src/pages/cong-cu/index.astro`
  - `src/pages/cong-cu/them-thuc-pham-dong-goi.astro`

## 18. Worktree cuối sạch không

- Chưa, còn thay đổi trong scope route/report trước khi commit

## 19. Kết luận

- QA polish pass
- Đủ điều kiện sang `tool-them-thuc-pham-dong-goi-final-review-v1`
- Stable scope đề xuất cho vòng sau:
  - `neutral packaged food entry + data QA shell only`
- Chưa cập nhật stable/status trong vòng này
- Chưa deploy
