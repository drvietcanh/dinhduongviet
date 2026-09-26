# Data Deduplication — Bắp nếp luộc chấm muối tiêu

Ngày: 2026-09-26

## Phạm vi rà soát

- Tìm toàn bộ tên món có dấu hiệu là biến thể phụ gia: `chấm`, `kèm`, `sốt`, `muối tiêu`.
- Đối chiếu với thực phẩm nền và công thức độc lập trong `src/data`.

## Đã loại bỏ

- Recipe `bap-nep-luoc-muoi-tieu` — `Bắp nếp luộc chấm muối tiêu`.
- Lý do: chỉ thêm 1 g muối tiêu vào thực phẩm nền `bap-nep-luoc`; không tạo món/công thức có giá trị tra cứu độc lập và dễ làm phình danh sách bằng biến thể cách ăn.

## Giữ lại

- Các công thức như rau muống chấm kho quẹt, đậu phụ sốt cà chua và món có sốt/kèm là thành phần cấu thành công thức thực sự.
- Các thực phẩm gia vị/nước chấm độc lập vẫn giữ để phục vụ tra cứu thành phần.

## Kiểm chứng

- `npm run build`: thành công, 2.027 pages built.
- Search index công khai đã loại bỏ slug và tên biến thể.
- Không còn reference tới `bap-nep-luoc-muoi-tieu` trong `src` và `dist`.

## Nguyên tắc áp dụng tiếp

- Loại biến thể chỉ khác cách chấm/rắc gia vị nếu nền đã tồn tại và phần phụ gia không tạo công thức độc lập.
- Giữ món có thay đổi thành phần, cách chế biến hoặc hồ sơ dinh dưỡng đáng kể.
