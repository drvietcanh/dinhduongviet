# Rà soát alias trùng giữa thực phẩm/món ăn — 2026-09-26

## Kết quả

Đã chuẩn hóa toàn bộ alias và tìm các alias trỏ tới nhiều ID. Các nhóm nổi bật:

- `broccoli` / `bông cải xanh`: `sup-lo` và `bong-cai-xanh` có mapping nguồn thay thế riêng; giữ nguyên, không gộp dữ liệu.
- `thịt nguội` / `ham` / `jambon`: `thit-nguoi-kho` và `thit-nguoi-thuong` khác trạng thái và natri; giữ nguyên.
- `giá đỗ`, `thịt ba chỉ`, `nấm rơm`, `bánh tiêu`, `cà phê`, `nước ép`: có cặp thực phẩm–công thức hoặc các trạng thái/chế biến khác nhau; không xóa theo alias.
- Các alias rộng như `bánh tiêu`, `chè đậu đen`, `cá kho` có thể khiến tìm kiếm trả nhiều kết quả, nhưng không chứng minh các bản ghi là trùng dinh dưỡng.

## Quyết định

Không thay đổi dữ liệu trong lượt này. Việc gộp alias nên được xử lý ở lớp xếp hạng/tìm kiếm (ưu tiên mục canonical), không xóa bản ghi dinh dưỡng khi còn mapping nguồn, trạng thái hoặc khẩu phần khác nhau.
