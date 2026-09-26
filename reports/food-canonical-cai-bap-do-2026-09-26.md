# Rà soát Cải bắp đỏ và Cải bắp đỏ tươi — 2026-09-26

## Quyết định

- Chỉ công bố `cai-bap-do-vdd` với tên ngắn **Cải bắp đỏ**. Mục này đã ghi `state: raw`, `basis: 100g phần ăn được` và mô tả chưa chế biến, nên hậu tố “tươi” không tạo một trạng thái thực phẩm mới.
- Giữ `cai-bap-do-tuoi-vdd` trong mã nguồn để truy nguyên bộ số liệu gắn nhãn Viện Dinh dưỡng 2026, nhưng loại khỏi catalog/API/search index công khai. Các tên gọi của nó được thêm vào alias mục chuẩn.
- Chuyển URL cũ `/thuc-pham/cai-bap-do-tuoi-vdd/` về `/thuc-pham/cai-bap-do-vdd/`.
- Giữ `cai-bap-do-luoc-vdd` vì đó là thực phẩm đã luộc, có cơ sở 100 g thành phẩm khác.

## Đối chiếu nguồn và số liệu

Hai mục sống đều ghi mã 4011, cùng 1,9 g protein, 0,2 g lipid và 27 mg natri trên 100 g. Bản `vn-fct-2007` trong `public/api/vietnam-foods.json` ghi 45 kcal, 9 g glucid và 4 g chất xơ. Bản ghi ở `foods-extra11.ts` gắn nhãn cổng Viện Dinh dưỡng 2026 ghi 61 kcal và 13 g carbohydrate. Chênh lệch 4 g carbohydrate và 16 kcal đúng bằng 4 g chất xơ và 4 × 4 kcal; đây là **giả thuyết về quy ước tính**, chưa phải kết luận được xác nhận bởi nguồn.

Mục công khai hiện giữ nguyên bộ số liệu 2007 có bản ghi nguồn thô truy nguyên được. Không lấy trung bình hai bộ số liệu hay chép vi chất qua lại. [Trang tra cứu của Viện Dinh dưỡng](https://viendinhduong.vn/vi/cong-cu-va-tien-ich/gia-tri-dinh-duong-thuc-pham) không hiển thị trực tiếp hàng 4011 trong HTML để xác nhận độc lập bộ số liệu gắn nhãn 2026 trong lượt rà soát này.

## Kiểm tra

- `npm run build` thành công, sinh 2.020 trang và 1.008 thực phẩm công khai.
- `dist/api-foods.json` và `public/api/search-index.json` chỉ có `cai-bap-do-vdd` và `cai-bap-do-luoc-vdd` trong nhóm này.
- Trang tĩnh cho slug cũ chứa chuyển hướng và canonical URL sang `cai-bap-do-vdd`.
- Bộ quét skill: 0 slug trùng, 0 tên chuẩn hóa trùng; còn một ứng viên hậu tố “tươi” khác là `Khoai lang nghệ` / `Khoai lang nghệ tươi`, chưa xử lý trong lượt này.
- Skill đã được kiểm tra hợp lệ bằng `quick_validate.py`.
