# Rà soát dedup thực phẩm/món ăn — 2026-09-26

## Phạm vi

- Chuẩn hóa tên món/thực phẩm toàn bộ `src/data` (bỏ dấu, chuẩn hóa cách viết) để tìm tên trùng.
- Rà riêng các tên có dấu hiệu là phần phụ gia/cách phục vụ: `chấm`, `kèm`, `sốt`, `muối tiêu`, `ướp`, `tẩm`.

## Kết quả

- Các tên chuẩn hóa trùng còn lại đều khác loại dữ liệu: thực phẩm theo 100 g/100 ml và công thức theo khẩu phần. Ví dụ `Sữa đậu nành`, `Trà sữa trân châu`, `Bánh đậu xanh` có bản thực phẩm và bản món; không xóa.
- `Đậu phụ sốt tương` (recipe) và `Tàu hũ sốt tương` (food) là hai lớp dữ liệu khác nhau; giữ nguyên.
- Các món có `chấm/kèm/sốt` còn lại có thành phần hoặc mục đích tra cứu riêng: `Rau muống luộc chấm kho quẹt`, `Cà na chấm muối ớt`, `Bò bít tết kèm khoai tây`, `Dưa món ăn kèm`, `Đậu phụ sốt tương`; giữ nguyên.
- Không phát hiện thêm trường hợp đủ chắc chắn để xóa sau lượt loại `Bắp nếp luộc chấm muối tiêu` và `Đậu hũ sốt cà chua`.

## Quy tắc an toàn

Không xóa chỉ vì tên gần giống; phải đồng thời trùng ngữ nghĩa, cùng loại dữ liệu và không có liên kết canonical riêng. Khi khác basis/khẩu phần hoặc khác thành phần, giữ lại.
