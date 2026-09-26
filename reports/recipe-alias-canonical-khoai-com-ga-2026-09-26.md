# Rà soát va chạm alias: Khoai lang luộc và Cơm gà — 2026-09-26

## Khoai lang luộc

- Giữ recipe `khoai-lang-luoc` làm mục chuẩn, mẫu 1 củ khoảng 130 g.
- Bỏ recipe `khoai-lang-luoc-mon-an` (`Khoai lang luộc nguyên củ`): cùng nguyên liệu `khoai-lang`, cùng cách luộc, chỉ dùng 200 g thay cho 130 g. Trang món có công cụ đổi khối lượng; ghi nhận cỡ củ lớn khoảng 200 g ở mô tả khẩu phần mục chuẩn.
- Giữ đường dẫn cũ bằng trang chuyển hướng tới `/mon-an/khoai-lang-luoc/`.
- Mục thực phẩm `khoai-lang-luoc-vdd` theo 100 g đã luộc vẫn riêng với recipe theo khẩu phần.

## Cơm gà

- Giữ cả `com-ga` và `com-ga-uc-ga`: mục thứ hai dùng ức gà 100 g, rau muống và khẩu phần 320 g; mục chuẩn dùng đùi gà luộc 120 g và khẩu phần 400 g.
- Gỡ alias quá rộng `cơm gà` khỏi `com-ga-uc-ga`; thay bằng `cơm ức gà`. Tên chung `cơm gà` thuộc mục `com-ga`.

## Kiểm tra

- `npm run build` thành công; 2.020 trang, 425 recipe, 1.007 thực phẩm.
- `dist/api-recipes.json` và `public/api/search-index.json` không còn recipe `khoai-lang-luoc-mon-an`; hai mục cơm gà vẫn có slug riêng.
- Trang tĩnh của slug khoai cũ chuyển hướng và gắn canonical URL về mục chuẩn.
- `public/ingredient-map.json` không có liên kết tới slug khoai cũ, nên không cần chỉnh bản đồ nguyên liệu.
- Bộ quét: 0 slug trùng, 0 tên chuẩn hóa trùng; alias cùng loại giảm từ 34 xuống 32 nhóm.

## Lưu ý dữ liệu

Recipe `khoai-lang-luoc` vẫn tính theo `foodId: khoai-lang` của bản ước tính cũ, trong khi thư viện đã có thực phẩm đã luộc theo nguồn VDD. Đây là vấn đề đối chiếu thành phần dinh dưỡng riêng, không được tự động đổi nguồn trong lượt gộp tên này.
