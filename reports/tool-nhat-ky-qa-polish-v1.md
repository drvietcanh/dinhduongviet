# tool-nhat-ky-qa-polish-v1

## 1. Mốc đầu vào

- Status v17 commit: `216a625`
- Chưa deploy

## 2. File đã đọc

- `src/pages/cong-cu/nhat-ky.astro`
- `src/pages/cong-cu/index.astro`
- `src/layouts/BaseLayout.astro`
- `reports/tools-core-status-v17.md`
- `reports/tools-core-status-v16.md`
- `reports/needs-qa-polish-triage-v1.md`
- `package.json`

## 3. Hiện trạng trước polish

- Có form nhập nhật ký theo ngày và theo bữa.
- Có localStorage, copy từ hôm qua, export CSV/PDF.
- Có tổng hợp dinh dưỡng ngày.
- Có lớp mục tiêu cá nhân với wording kiểu `Mục tiêu dinh dưỡng cá nhân`, BMR/TDEE-like, tiến độ so với target.
- Có các nhãn/gợi ý dễ bị hiểu là đánh giá sức khỏe như thiếu/thừa/chưa đủ/cân đối.
- Có nhiều render bằng `innerHTML`.
- Có bug runtime: hai block JSON cho foods/recipes đang render literal `{JSON.stringify(...)}` trong HTML, làm `JSON.parse(...)` fail và `window.MT` không khởi tạo trong browser.

## 4. File đã sửa

- `src/pages/cong-cu/nhat-ky.astro`
- `src/pages/cong-cu/index.astro`
- `src/layouts/BaseLayout.astro`

## 5. Scope sau polish

- `neutral nutrition log + safety shell only`

## 6. Những thứ đã hạ rủi ro

- Bỏ target cá nhân, panel mục tiêu cá nhân, BMR/TDEE user-facing.
- Bỏ wording đánh giá kiểu đạt/không đạt, cân đối, thiếu/thừa như kết luận sức khỏe.
- Giữ tổng hợp ngày theo hướng trung tính: chỉ cộng dữ liệu đã nhập.
- Bổ sung safety shell rõ: không thay thế tư vấn chuyên môn, nhóm có bệnh nền/thuốc/thai kỳ/trẻ em/người cao tuổi cần hỏi bác sĩ hoặc chuyên gia.
- Bỏ `innerHTML` trong render route; chuyển sang `createElement`, `textContent`, `appendChild`, `replaceChildren`.
- Vá bug runtime của JSON script bằng `set:html={JSON.stringify(...)}` để browser nhận JSON thật.

## 7. UI safety

- Form: còn.
- localStorage: còn.
- export/copy: còn.
- Dashboard/tổng hợp: còn, nhưng chỉ là tổng hợp trung tính dữ liệu đã nhập.
- Output cá nhân điều trị: không còn.
- `innerHTML`: không còn trong route `nhat-ky`.

## 8. Clinical safety

- Target bệnh nền: không còn.
- Kết luận `an toàn/phù hợp/kiểm soát tốt-kém`: không còn.
- Hướng dẫn chỉnh thuốc/insulin/lợi tiểu/bữa ăn: không còn.
- Target natri/kali/phospho/carb/protein/đường huyết/huyết áp cá nhân: không còn.

## 9. Local data/privacy

- LocalStorage key: `mt-diary-v2`.
- Dữ liệu lưu cục bộ trên trình duyệt/thiết bị người dùng.
- Đã thêm nút `Xóa dữ liệu` để xóa toàn bộ nhật ký local.
- Không thấy log dữ liệu nhạy cảm ra console trong QA browser.
- CSV export chỉ chứa dữ liệu thô/tổng hợp trung tính: ngày, bữa, tên, loại, khẩu phần, kcal, đạm, béo, carb, xơ, natri.
- PDF export chỉ in nhật ký ngày hiện tại + tổng hợp trung tính + safety note, không có target điều trị.

## 10. XSS/render

- Đã thử search input với chuỗi `<script>alert(1)</script>`.
- Không tạo script tag, không bật dialog.
- Empty state trả về trung tính: `Không tìm thấy - thử từ khóa khác`.
- Render route dùng DOM-safe API: `createElement`, `textContent`, `appendChild`, `replaceChildren`.

## 11. Browser/mobile QA

- Cách test: build local + `npm run preview` tại `http://127.0.0.1:4371`, QA bằng Playwright với Chrome hệ thống.
- Desktop `/cong-cu/`: HTTP 200, không redirect, không meta refresh, không overflow ngang, console sạch sau khi thêm favicon link vào layout.
- Desktop `/cong-cu/nhat-ky/`: HTTP 200, không redirect, không meta refresh, H1 đúng `📓 Nhật ký ăn uống`, không overflow ngang, console sạch.
- Mobile `390 x 844`: HTTP 200, không overflow ngang, form/dialog dùng được, search input dùng được, overlay mở bình thường.
- Thao tác đã thử:
  - mở dialog thêm món
  - tìm `gạo`
  - thêm 1 item 120g
  - kiểm tra summary
  - export CSV
  - xóa item
  - xóa toàn bộ dữ liệu local
  - search với chuỗi script

## 12. Kết quả thao tác chính

- Search `gạo`: có 7 kết quả.
- Sau khi thêm item: route hiển thị 1 item, summary cập nhật trung tính.
- Summary hiển thị theo hướng:
  - `Tổng hợp dữ liệu đã nhập trong ngày`
  - `Đây là tổng hợp trung tính từ dữ liệu đã nhập, không phải đánh giá kiểm soát bệnh hay mục tiêu điều trị.`
- CSV download chạy với tên file `nhat-ky-an-uong.csv`.
- Sau xóa item: số item về 0.
- Sau `Xóa dữ liệu`: localStorage key `mt-diary-v2` bị xóa.

## 13. /cong-cu/ card

- Mô tả hiện tại:
  - `Ghi lại bữa ăn và chỉ số ở mức theo dõi cá nhân, kèm nhắc khi cần hỏi bác sĩ hoặc chuyên gia.`
- Badge `Đã kiểm v1`: chưa gắn.

## 14. Wording cấm

- Không thấy user-facing các cụm cấm như:
  - `đạt mục tiêu`
  - `không đạt mục tiêu`
  - `kiểm soát tốt`
  - `kiểm soát kém`
  - `phù hợp cho người...`
  - `an toàn cho...`
  - `tự chỉnh thuốc`
  - `tự chỉnh insulin`
  - `kê đơn`
- Các từ như `điều trị`, `bệnh nền`, `thuốc`, `người cao tuổi` còn xuất hiện trong safety shell hoặc câu phủ định an toàn, chấp nhận được vì không dùng như tư vấn cá nhân.
- Kết quả grep còn `mục tiêu` ở các route/card khác trong index và câu phủ định `mục tiêu điều trị` trong route; không phải output điều trị của `nhat-ky`.

## 15. Ghi chú QA/bug đã xử lý

- Đã gặp bug runtime thật ở route:
  - `SyntaxError: Expected property name or '}' in JSON at position 1`
  - nguyên nhân: JSON script cho foods/recipes render literal `{JSON.stringify(...)}`
  - đã sửa bằng `set:html={JSON.stringify(...)}`
- Đã gặp console 404 ở `/cong-cu/` do thiếu favicon link rõ ràng trong layout.
  - đã thêm `<link rel="icon" type="image/svg+xml" href="/favicon.svg" />`
  - sau đó console sạch lại trong browser QA fresh session.

## 16. Không sửa

- Không sửa engine/dữ liệu/công thức/route ngoài scope.
- Không sửa `dist`.

## 17. QA cuối

- `npm run build`: pass
- `npm run qa`: pass
- `npm run qa:food-data`: pass
- `npm run qa:data-consistency`: pass
- `npm run test:tools`: pass
- `git diff --check`: không fail; chỉ còn cảnh báo LF/CRLF của Git Windows trên file đã sửa
- `git status --short`: đúng với 4 file thay đổi trong scope vòng này

## 18. Worktree cuối sạch không

- Chưa tại thời điểm viết report, vì còn thay đổi chưa commit cho vòng này.

## 19. Kết luận

- Đủ điều kiện sang `tool-nhat-ky-final-review-v1`.
- Chưa stable/status update trong vòng này.
- Chưa deploy.
