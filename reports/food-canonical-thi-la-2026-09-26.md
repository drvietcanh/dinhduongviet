# Chuẩn hóa mục thực phẩm Thì là — 2026-09-26

## Kết quả

- Giữ `thi-la-kho` — tên hiển thị `Thì là`, trạng thái tươi, cơ sở 100 g.
- Loại `thi-la-kho-x` (`Thì là (rau)`) khỏi catalog công khai bằng danh sách loại trừ hiện có trong `src/data/nutrition.ts`.
- Chuyển các cách gọi `thia la` và `dill herb` sang aliases của mục canonical; giữ `thìa là` và `dill`.
- Không tìm thấy recipe nào tham chiếu đến `thi-la-kho-x`; slug `thi-la-kho` vẫn là mục công khai duy nhất.

## Căn cứ

Hai bản ghi đều mô tả rau thì là tươi, cùng nhóm, trạng thái và cơ sở 100 g. Năng lượng, đạm, carbohydrate, chất béo, chất xơ, canxi, sắt, natri, kali và vitamin C trùng nhau. Bản `thi-la-kho` còn có vitamin A; bản trùng không có số liệu mâu thuẫn cho vi chất này.

## Kiểm tra

- `npm run build` thành công; 2.020 trang được tạo.
- `dist/api-foods.json`: có đúng một slug `thi-la-kho`, không còn `thi-la-kho-x`.
- `public/api/search-index.json` được tái tạo; mục canonical `thi-la-kho` hiện diện.
- Bộ quét sau khi sửa bỏ food đã loại khỏi catalog và phân biệt va chạm cùng loại với khác loại: 0 slug trùng, 0 tên chuẩn hóa trùng, 34 nhóm alias cùng loại và 22 nhóm alias khác loại còn cần phân loại.

## Tiếp theo

Rà soát từng nhóm alias cùng loại; ưu tiên kiểm tra các cặp có cùng trạng thái/cơ sở như `Cà phê đen đá` và các alias tổng quát gây hai recipe xuất hiện cho cùng truy vấn. Không gộp các mục khác khẩu phần hoặc công thức khi chưa đối chiếu thành phần.
