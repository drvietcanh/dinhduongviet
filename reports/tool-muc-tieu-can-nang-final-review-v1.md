# Tool muc-tieu-can-nang final review v1

## Mốc

- Branch: `tool-muc-tieu-can-nang-final-review-v1`
- Base commit: `71ccb0e test: add weight goal page QA`
- Tag: `local-muc-tieu-can-nang-qa-polish-v1 -> 71ccb0e`
- Route: `/cong-cu/muc-tieu-can-nang/`
- Chưa deploy.

## Phạm vi

Final review chỉ kiểm tra wording, mobile 390px-class và UX an toàn. Không thêm công thức, không bật kcal/macro dạng số và không thay đổi engine.

## Cách test mobile

- Chạy `npm run build` và `npm run preview`.
- Mở route qua headless Chrome/Chrome DevTools Protocol.
- Viewport: `390 x 844`, device scale factor `1`, mobile mode bật.
- Không cài thêm Playwright hoặc dependency QA.

## Kết quả mobile

- HTTP `200`.
- Không redirect hoặc meta refresh.
- H1: `Mục tiêu cân nặng`.
- Viewport rộng `390px`, document rộng `390px`: không overflow ngang.
- Sáu input/select chính rộng khoảng `330px`, cao `40px`.
- Các checkbox row rộng khoảng `330px`, cao tối thiểu `36px`, không quá sát nhau.
- Nút `Xem định hướng` rộng khoảng `330px`, cao `42px`.
- Safety note cao khoảng `109px`, không chiếm quá nhiều màn hình.
- Result panel không vỡ layout; mode label đọc rõ.
- Không còn input cân nặng mục tiêu, thời gian giảm/tăng cân hoặc số kg muốn thay đổi.

## Kết quả wording

User-facing wording đã nói rõ:

- Đây là công cụ định hướng an toàn và tham khảo.
- Thông tin hiển thị phụ thuộc dữ liệu người dùng nhập.
- Không thay thế tư vấn cá thể của bác sĩ hoặc chuyên gia dinh dưỡng.
- Giảm cân nhẹ không được trình bày như cam kết tốc độ.
- Không đưa kế hoạch kcal/macro cá nhân dạng số.
- Nhóm nguy cơ cao chuyển sang `Cần cá thể hóa`.
- `Khoảng đạm tham khảo` có note `không phải chỉ định cá nhân`.

Không có user-facing:

- `mục tiêu chuẩn`
- `bắt buộc ăn`
- `giảm X kg/tuần chắc chắn`
- `ăn càng ít càng tốt`
- `macro tối ưu cho mọi người`
- `an toàn cho bệnh`
- `tự chỉnh insulin`
- `ngưng thuốc`
- `bệnh thận nên ăn X g đạm`
- BMR
- TDEE
- `7700 kcal/kg`
- `deficit`
- `surplus`
- `mục tiêu kcal`
- `mục tiêu macro`
- `macro bệnh nền`
- `trung tâm điều trị`

Ghi chú kỹ thuật: `src/lib/nutrition-goal-planner.ts` vẫn có chuỗi nội bộ về `deficit`, `surplus` và `mục tiêu kcal` trong warning/source-lock. Route không render trực tiếp các chuỗi này.

## Test case cuối

| Case | Kỳ vọng | Kết quả |
| --- | --- | --- |
| Người khỏe, duy trì | `Tham khảo cơ bản` | Pass |
| Giảm cân nhẹ | `Cần thận trọng`, không deficit số, không hứa tốc độ | Pass |
| Tăng cân nhẹ | `Cần thận trọng`, không surplus số | Pass |
| BMI <18.5 | `Cần cá thể hóa`, không hiện protein/target nổi bật | Pass |
| CKD | `Cần cá thể hóa`, không hiện protein/target nổi bật | Pass |
| Lọc máu | `Cần cá thể hóa`, không hiện protein/target nổi bật | Pass |

## Input sai

- Tuổi không hợp lệ: hiện lỗi thân thiện, không crash.
- Cân nặng không hợp lệ: hiện lỗi thân thiện, không crash.
- Chiều cao không hợp lệ: hiện lỗi thân thiện, không crash.
- Các trường hợp input sai trả `clinical_no_auto` và ẩn protein reference.

## Polish trong vòng này

Chỉ sửa một câu lead tại `src/pages/cong-cu/muc-tieu-can-nang.astro` để nói rõ:

> Thông tin hiển thị phụ thuộc dữ liệu bạn nhập, chỉ mang tính tham khảo và không thay thế tư vấn cá thể của bác sĩ hoặc chuyên gia dinh dưỡng.

Không sửa CSS vì kích thước và mobile layout đã đạt.

## Ngoài scope

Không sửa:

- Engine `src/lib/nutrition-goal-planner.ts`.
- Dữ liệu dinh dưỡng.
- Route `muc-tieu-dinh-duong`.
- Route `tinh-macro`.
- Route `tinh-nang-luong`.
- Route khác.
- `dist` thủ công.
- Stash `so-sanh`.

## Kết luận

`muc-tieu-can-nang` đủ điều kiện cập nhật status thành `stable_v1` với phạm vi **safe weight goal orientation**.

Phạm vi stable không bao gồm calculator giảm cân, calculator kcal/macro, cam kết tốc độ thay đổi cân nặng, BMR/TDEE, deficit/surplus hoặc kê đơn điều trị.
