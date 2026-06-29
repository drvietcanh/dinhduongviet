# Tool nuoc-muoi-mon-an final review v1

## 1. Mốc đầu vào

- Safety patch commit: `a63bdbb fix: safety gate clinical high risk tool`.
- QA polish commit: `5612a4f test: add salt lookup page QA`.
- Branch final review: `tool-nuoc-muoi-mon-an-final-review-v1`.
- Chưa deploy.
- Route chính: `/cong-cu/nuoc-muoi-mon-an/`.
- File route chính: `src/pages/cong-cu/nuoc-muoi-mon-an.astro`.

## 2. Cách QA browser/manual

- Chạy `npm run build`.
- Chạy preview local tại `http://localhost:4368`.
- Kiểm HTTP bằng `Invoke-WebRequest` cho:
  - `/cong-cu/`
  - `/cong-cu/nuoc-muoi-mon-an/`
- Kiểm bằng Browser plugin:
  - Desktop viewport mặc định.
  - Mobile viewport class `390 x 844`.
  - DOM snapshot, screenshot, console logs, overflow ngang, search input, render kết quả và `/cong-cu/` card.

Flow dưới test:

- `/cong-cu/nuoc-muoi-mon-an/` -> nhập món hoặc chuỗi đặc biệt -> chỉ hiện `muối ước tính` hoặc empty state trung tính, không sinh tư vấn bệnh nền.

## 3. Route `/cong-cu/nuoc-muoi-mon-an/`

Kết quả final review:

- HTTP status: `200`.
- URL sau load: `http://localhost:4368/cong-cu/nuoc-muoi-mon-an/`.
- Redirect: không ghi nhận.
- Meta refresh: không có.
- H1: `🧂 Tra nhanh lượng muối trong món ăn`.
- Page title: `Tra nhanh lượng muối trong món ăn Việt`.
- Console app: không có error/warning.
- Desktop overflow ngang: không.
- Mobile `390 x 844` class overflow ngang: không.
- Search input có trên mobile và nhập được.
- Safety shell còn rõ: có phần `Khi nào cần hỏi chuyên môn?` và phần `Trang này không làm gì?`.

## 4. Search/render

Các truy vấn đã thử:

| Query | Kết quả final |
| --- | --- |
| `mì` | Trả `Bánh mì thịt` và `Mì gói`, chỉ hiện `muối ước tính`. |
| `phở` | Trả `Phở bò`, chỉ hiện `muối ước tính`. |
| `bánh mì` | Trả `Bánh mì thịt`, chỉ hiện `muối ước tính`. |
| `canh` | Trả `Canh chua` và `Canh rau`, chỉ hiện `muối ước tính`. |
| `nước mắm` | Empty state: `Không tìm thấy món nào trong danh sách tham khảo.` |
| `mon-khong-co` | Empty state trung tính. |
| `<script>alert(1)</script>` | Empty state trung tính, không tạo script tag, không mở dialog. |

Render an toàn:

- Source route dùng `textContent` cho tên món, ghi chú, lượng muối và label.
- Source route dùng `replaceChildren()` để thay kết quả.
- Không thấy `innerHTML` hoặc HTML không kiểm soát từ input trong route.
- Browser final review xác nhận input script không tạo script/dialog.

## 5. Safety

Không còn user-facing:

- Bảng disease target.
- Target riêng cho tăng huyết áp.
- Target riêng cho suy tim.
- Target riêng cho suy thận.
- Target riêng cho CKD/bệnh thận.
- Ngưỡng bệnh nền kiểu `dưới 2g`.
- Ngưỡng bệnh nền kiểu `dưới 2-3g`.
- Mục tiêu muối cá nhân.
- Mục tiêu natri cá nhân.
- Mục tiêu kali cá nhân.
- Mục tiêu phospho cá nhân.
- Mục tiêu nước/dịch cá nhân.
- Nhãn `cao/vừa/thấp/rất cao` như kết luận sức khỏe.
- Màu phân loại sức khỏe cá nhân.
- Kết luận món ăn an toàn/không an toàn cho bệnh nền.
- Câu khuyên tự chỉnh thuốc.
- Câu khuyên tự chỉnh lợi tiểu.
- Câu khuyên tự chỉnh dịch.
- Câu khuyên tự điều trị tăng huyết áp/suy tim/bệnh thận.

Các tình huống review:

- Người tăng huyết áp hỏi món này ăn được không.
- Người suy tim/phù hỏi cần hạn chế muối/dịch thế nào.
- Người bệnh thận hỏi mục tiêu natri/kali/phospho.
- Người dùng hỏi mục tiêu muối mỗi ngày.
- Người dùng hỏi có cần đổi thuốc huyết áp/lợi tiểu theo lượng muối ăn không.

Kết quả:

- Route không có trường tư vấn tự do nên không trả lời cá nhân hóa các câu hỏi trên.
- UI chỉ hiển thị lookup món ăn, empty state trung tính và safety shell.
- Safety shell hướng người có bệnh nền, đang dùng thuốc, người cao tuổi, thai kỳ hoặc cần hạn chế muối/dịch tới bác sĩ/chuyên gia dinh dưỡng.

## 6. Wording cấm

Browser/rendered route:

- Không ghi nhận forbidden hits trong rendered body với các cụm cấm.
- Từ `cao` chỉ xuất hiện trong cụm `người cao tuổi`, là nhóm cần hỏi chuyên môn, không phải nhãn đánh giá cá nhân.
- Không ghi nhận `vừa` hoặc `thấp` như nhãn kết quả.

Source grep:

- `src/pages/cong-cu/nuoc-muoi-mon-an.astro` và card `/cong-cu/` không có các cụm cấm theo nghĩa kết luận cá nhân/tư vấn điều trị.
- Các cụm cấm chỉ xuất hiện trong `reports/tool-nuoc-muoi-mon-an-qa-polish-v1.md` như danh sách kiểm QA, không phải user-facing route.
- Các từ kỹ thuật `textContent` và `replaceChildren` chỉ nằm trong code để render an toàn.

## 7. `/cong-cu/` card

- Card hiện tại: `Muối trong món ăn`.
- Mô tả hiện tại: `Tra cứu muối ước tính trong món ăn và nhắc các tình huống cần hỏi bác sĩ hoặc chuyên gia.`
- Badge `Đã kiểm v1`: chưa gắn trong vòng này.
- Card không gọi route là calculator bệnh nền.
- Card không gọi route là công cụ xác định mục tiêu muối/natri.
- Card không gọi route là công cụ đánh giá món ăn an toàn cho tăng huyết áp/suy tim/bệnh thận.
- Card không gọi route là công cụ điều trị hoặc chỉnh thuốc.

## 8. Thay đổi trong vòng final review

- Chỉ tạo report final review này.
- Không sửa wording/layout route trong vòng final review.
- Không sửa text kết quả lookup.
- Không sửa card `/cong-cu/`.

## 9. Ngoài scope

Không sửa:

- Engine.
- Dữ liệu dinh dưỡng hoặc salt range.
- Công thức.
- Route stable ngoài scope.
- `dist`.

Không deploy.
Không cập nhật status trong vòng này.

## 10. QA cuối

Kết quả QA cuối:

- `npm run build`: pass.
  - Lần chạy trực tiếp đầu tiên bị timeout/EPIPE do output build quá dài qua pipe.
  - Đã rerun cùng lệnh với log redirect ra file tạm; exit code `0`, build complete.
- `npm run qa`: pass.
- `npm run qa:food-data`: pass.
- `npm run qa:data-consistency`: pass.
- `npm run test:tools`: pass.
- `git diff --check`: pass.
- `git status --short`: chỉ còn report final review trước commit.

## 11. Worktree

Worktree cần sạch sau commit final review.

## 12. Kết luận

`/cong-cu/nuoc-muoi-mon-an/` đủ điều kiện chuyển sang vòng `tools-core-status-v14` nếu QA cuối pass.

Stable scope đề xuất:

- `stable_v1` với phạm vi `educational salt lookup + safety shell only`.
- Không phải calculator bệnh nền.
- Không phải công cụ xác định mục tiêu muối/natri/kali/phospho/nước cá nhân.
- Không phải công cụ kết luận món ăn an toàn cho tăng huyết áp/suy tim/bệnh thận.
- Không phải công cụ điều trị hoặc chỉnh thuốc/lợi tiểu/dịch.
