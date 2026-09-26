# Rà soát Khoai lang nghệ / Khoai lang nghệ tươi — 2026-09-26

## Quyết định

- Giữ `khoai-lang-nghe` làm mục công khai cho khoai lang nghệ sống, 100 g phần ăn được.
- Giữ `khoai-lang-nghe-tuoi-vdd` trong mã nguồn để truy nguyên số liệu gắn nhãn cổng Viện Dinh dưỡng 2026, nhưng loại khỏi API và chỉ mục công khai.
- Thêm các cách gọi cũ của mục “tươi” vào alias mục chuẩn và chuyển URL cũ về `/thuc-pham/khoai-lang-nghe/`.
- Giữ riêng khoai lang luộc và khoai lang nướng vì trạng thái chế biến và cơ sở tính khác.

## Đối chiếu

Cả hai mục sống đều ghi mã thực phẩm 2009, cùng 1,2 g protein và 0,3 g lipid trên 100 g. Bản ghi gốc 2007 trong `data/nutrition/nutrition_chunks_final_v4/032_2009_khoai_lang_nghe.md` có 116 kcal, 27,1 g glucid và 0,8 g chất xơ. Bản ghi ở `src/data/foods-extra11.ts` có 119 kcal và 27,9 g carbohydrate. Chênh carbohydrate đúng bằng lượng chất xơ; đó là tín hiệu có thể khác quy ước tính, chưa đủ để xác nhận nguyên nhân. Không lấy trung bình hoặc trộn vi chất giữa hai bản.

Bản gắn nhãn 2026 còn ghi 350 mg natri; bản gốc 2007 không công bố chỉ số natri cho thực phẩm này. Vì chưa đối chiếu trực tiếp được hàng 2009 trên [trang tra cứu của Viện Dinh dưỡng](https://viendinhduong.vn/vi/cong-cu-va-tien-ich/gia-tri-dinh-duong-thuc-pham), không chuyển số natri đó sang mục công khai.

## Kiểm tra

- `npm run build` thành công: 2.020 trang, 1.007 thực phẩm công khai.
- `dist/api-foods.json` và `public/api/search-index.json` chỉ có `khoai-lang-nghe` trong cặp này.
- Trang tĩnh của slug cũ chuyển hướng và đặt canonical URL về mục chuẩn.
- Bộ quét skill còn 0 slug trùng, 0 tên chuẩn hóa trùng và 0 cặp tên chỉ khác hậu tố “tươi” trên catalog hiện hành; còn 34 nhóm alias cùng loại cần phân loại riêng.
- Skill hợp lệ theo `quick_validate.py`.
