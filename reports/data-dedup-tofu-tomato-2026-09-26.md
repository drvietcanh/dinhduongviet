# Rà soát biến thể món đậu phụ sốt cà chua — 2026-09-26

## Kết quả

- Đã loại bỏ `dau-hu-sot-ca-chua` (`Đậu hũ sốt cà chua`) trong `src/data/recipes-extra5.ts`.
- Giữ `dau-phu-sot-ca-chua` (`Đậu phụ sốt cà chua`) trong `src/data/nutrition.ts` vì đây là mục canonical đang được liên kết từ nội dung hướng dẫn và có cùng ý nghĩa món ăn.
- Không loại bỏ `dau-phu-sot-tuong` và `tau-hu-sot-tuong`: một mục là công thức theo khẩu phần, mục còn lại là thực phẩm theo 100 g nên phục vụ hai ngữ cảnh tra cứu khác nhau.
- Giữ các món có thành phần/phối hợp độc lập như `Rau muống luộc chấm kho quẹt`, `Cà na chấm muối ớt`, `Bò bít tết kèm khoai tây` và `Dưa món ăn kèm`.

## Nguyên tắc

Chỉ loại biến thể khi tên khác cách gọi nhưng công thức và mục đích tra cứu trùng nhau; không xóa các trạng thái chế biến hoặc món phối hợp có giá trị dinh dưỡng riêng.
