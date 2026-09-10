# Đối chiếu dữ liệu thực phẩm với Viện Dinh dưỡng — 2026-09-10

Nguồn đối chiếu: `https://viendinhduong.vn/vi/cong-cu-va-tien-ich/gia-tri-dinh-duong-thuc-pham`.

## Phạm vi

- Tải dữ liệu từ endpoint công cụ tra cứu của Viện: `/api/fe/foodNatunal/getPageFoodData`.
- Số bản ghi nguồn Viện: 853 thực phẩm.
- Số thực phẩm trong `dist/api-foods.json`: 777 thực phẩm.
- Khớp tên chính xác sau chuẩn hóa không dấu: 63 thực phẩm.

## Batch cập nhật nguồn Viện — nhóm thực phẩm quen thuộc bổ sung

Đã mở rộng lớp `vddSourceReplacements` cho 7 thực phẩm đang có trong app, ưu tiên các mục Việt Nam dùng hằng ngày và có mã Viện khớp đủ rõ.

| Slug | Mã Viện | Tên nguồn | Ghi chú an toàn dữ liệu |
| --- | --- | --- | --- |
| `banh-pho-chin` | 1013 | Bánh phở | Chỉ áp dụng cho bánh phở, không áp dụng cho tô phở đã có nước dùng/thịt/gia vị. |
| `rau-muong` | 4083 | Rau muống, tươi | Áp dụng cho rau tươi; rau luộc/xào thay đổi theo nước, dầu và gia vị. |
| `tao` | 5051 | Táo tây, tươi | Đánh `medium` vì táo ta/táo mèo có thành phần khác. |
| `bo-trai` | 5042 | Quả bơ vỏ xanh, tươi | Đánh `medium` vì giống bơ và độ chín làm dao động nhiều chất béo/năng lượng. |
| `sua-dac` | 10008 | Sữa đặc có đường Việt Nam | Cần xem nhãn với từng sản phẩm thương mại cụ thể. |
| `hat-tieu` | 13004 | Hạt tiêu | Số liệu theo 100g; khẩu phần thực tế thường rất nhỏ. |
| `moc-nhi` | 4125 | Mộc nhĩ, khô | Không áp dụng trực tiếp cho mộc nhĩ đã ngâm theo 100g. |

## Batch cập nhật nguồn Viện — rau, trái cây và nước dừa

Đã cập nhật thêm 11 mục đơn thành phần, ưu tiên trường hữu ích cho người Việt theo dõi đường huyết, năng lượng, chất xơ, kali/natri và khoáng chất.

| Slug | Mã Viện | Tên nguồn | Ghi chú an toàn dữ liệu |
| --- | --- | --- | --- |
| `dau-que` | 4029 | Đậu cô ve, quả, tươi | Nguồn thiếu dòng chất béo tổng nên đánh `medium`. |
| `sup-lo` | 4100 | Súp lơ xanh, tươi | Khớp đủ macro chính và vi chất. |
| `sup-lo-trang` | 4099 | Súp lơ trắng, tươi | Khớp đủ macro chính và vi chất. |
| `bap-cai-thao` | 4109 | Rau cải thảo, tươi | Nguồn thiếu một số trường như chất béo, chất xơ, natri, kali nên đánh `medium`. |
| `mang-tay` | 4052 | Măng tây, tươi | Khớp đủ macro chính và vi chất. |
| `man-chua` | 4050 | Măng chua, măng tre | Nguồn thiếu dòng chất béo tổng nên đánh `medium`; tên slug cũ giữ nguyên để không gãy URL. |
| `chom-chom` | 5004 | Chôm chôm, tươi | Nguồn thiếu dòng chất béo tổng nên đánh `medium`. |
| `mang-cut` | 5061 | Măng cụt | Khớp đủ macro chính; độ chín làm carbohydrate dao động. |
| `dau-tay` | 5009 | Dâu tây, tươi | Khớp đủ macro chính; không áp dụng cho mứt/sinh tố có đường. |
| `nho` | 5037 | Nho ngọt, tươi | Đánh `medium` vì nho ta chua/nho khô khác thành phần. |
| `nuoc-dua` | 14006 | Nước dừa non tươi | Nguồn không trả kali/natri trong payload dùng lần này nên không tự điền điện giải. |

## Batch cập nhật nguồn Viện — đậu, hạt, rau dền và trứng cút

Đã cập nhật thêm 6 mục đã có sẵn trong thư viện, không tạo slug mới để tránh trùng lặp URL/tên hiển thị.

| Slug | Mã Viện | Tên nguồn | Ghi chú an toàn dữ liệu |
| --- | --- | --- | --- |
| `rau-dan` | 4073 | Rau giền đỏ, tươi | App hiển thị “Rau dền”; nguồn dùng tên “Rau giền đỏ”, đánh `medium` vì có nhiều loại rau dền/giền. |
| `trung-cut` | 9007 | Trứng chim cút | Khớp trứng cút nguyên quả theo 100g phần ăn được; không áp dụng cho trứng cút lộn hoặc món kho/chiên. |
| `dau-phap` | 3017 | Lạc hạt, khô | App dùng tên “Đậu phộng”; nguồn khớp lạc/đậu phộng hạt khô, không áp dụng cho lạc rang muối/chao dầu. |
| `hat-bi` | 3028 | Hạt bí đỏ, rang | Khớp hạt bí đỏ rang; không áp dụng cho hạt tẩm muối/đường. |
| `hat-huong-duong` | 3041011 | Hạt hướng dương rang | Khớp hạt hướng dương rang; không áp dụng cho loại rang muối nhiều hoặc tẩm vị. |
| `dau-ha-lan` | 4031 | Đậu Hà Lan, quả, tươi | App ghi chung “Đậu Hà Lan”, nguồn là quả tươi nên đánh `medium`; không áp dụng cho hạt khô/đậu hộp. |

## Đã cập nhật an toàn

Chỉ cập nhật các thực phẩm có tên khớp và macro/năng lượng không lệch đáng kể; chỉ bổ sung trường đang thiếu, không ghi đè trường hiện có.

| Thực phẩm | Trường bổ sung |
| --- | --- |
| Dầu hào | `calciumMg`, `ironMg`, `phosphorusMg` |
| Nước ép dưa hấu | `calciumMg`, `ironMg`, `sodiumMg`, `phosphorusMg` |
| Nấm kim châm | `sugarG`, `phosphorusMg` |
| Dưa lưới | `sugarG`, `phosphorusMg` |
| Măng cụt | `phosphorusMg` |

## Batch bổ sung nguồn Viện — sữa và chế phẩm sữa

Đã thêm 5 thực phẩm mới có định nghĩa rõ, dùng `sourceId: vdd-food-portal-2026`, `confidence: high`, `sourceReviewStatus: source_verified`.

| Slug | Thực phẩm | Ghi chú |
| --- | --- | --- |
| `sua-de-tuoi-vdd` | Sữa dê tươi | Thêm dạng tươi theo 100g, khác với các sản phẩm sữa hộp/nhãn hàng. |
| `sua-me-vdd` | Sữa mẹ | Hữu ích cho mảng trẻ em/nuôi con bằng sữa mẹ; ghi rõ dao động sinh học. |
| `sua-chua-dac-co-duong-vdd` | Sữa chua đặc có đường | Tách khỏi mục “sữa chua” chung để tránh lẫn có/không đường. |
| `sua-chua-dac-khong-duong-vdd` | Sữa chua đặc không đường | Hữu ích cho người cần kiểm soát đường/carbohydrate. |
| `sua-chua-uong-co-duong-vdd` | Sữa chua uống có đường | Tách khỏi sữa chua ăn và sản phẩm probiotic theo nhãn. |

Chưa thêm `Sữa bò tươi` từ nguồn Viện trong batch này vì giá trị natri nguồn trả về là `352.54 mg/100g`, cao bất thường so với sữa tươi phổ biến; cần đối chiếu thêm trước khi nhập để tránh gây hiểu nhầm cho người cần hạn chế natri.

## Batch bổ sung nguồn Viện — ngũ cốc/tinh bột

Đã thêm 9 thực phẩm mới, ưu tiên các mục quen thuộc ở Việt Nam và có trạng thái rõ (`sống`, `khô`, `luộc`) để tránh nhầm 100g nguyên liệu với 100g thành phẩm.

| Slug | Thực phẩm | Ghi chú an toàn dữ liệu |
| --- | --- | --- |
| `gao-te-xat-may-song-vdd` | Gạo tẻ trắng xát máy sống | Tách khỏi `cơm trắng`; không so trực tiếp với cơm chín. |
| `gao-nep-cai-song-vdd` | Gạo nếp cái trắng sống | Dùng cho xôi/bánh; thành phẩm thay đổi do hút nước/đường/nhân. |
| `gao-lut-te-song-vdd` | Gạo lứt tẻ sống | Vẫn giàu carbohydrate, không gắn thông điệp “ăn không giới hạn”. |
| `bot-gao-nep-vdd` | Bột gạo nếp | Tách khỏi bột gạo tẻ hiện có. |
| `banh-da-nem-vdd` | Bánh đa nem | Chỉ là vỏ bánh khô, chưa tính nhân/dầu/nước chấm. |
| `mi-soi-kho-vdd` | Mì sợi khô | Tách khỏi mì đã luộc/chế biến. |
| `mi-an-lien-lua-mi-luoc-vdd` | Mì ăn liền lúa mì luộc | Có cảnh báo natri cao. |
| `ngo-vang-hat-kho-vdd` | Ngô vàng hạt khô | Tách khỏi bắp tươi/luộc. |
| `ngo-tuoi-ca-bap-vdd` | Ngô tươi cả bắp | Tính phần ăn được; giống/độ già non làm thay đổi carb. |

## Batch cập nhật nguồn Viện — rau/củ quen thuộc

Đã thêm lớp `vddSourceReplacements` để cập nhật trực tiếp các thực phẩm đã có trong app, không tạo slug trùng. Nguồn là công cụ tra cứu giá trị dinh dưỡng thực phẩm của Viện Dinh dưỡng, cùng endpoint `/api/fe/foodNatunal/getPageFoodData`.

| Slug | Mã Viện | Tên nguồn | Mức cập nhật |
| --- | --- | --- | --- |
| `rau-ngot` | 4086 | Rau ngót, tươi | Cập nhật năng lượng, đạm, carbohydrate và vi chất; giữ chất béo hiện có vì payload nguồn không có dòng fat tổng. |
| `mong-toi` | 4080 | Rau mồng tơi, tươi | Cập nhật năng lượng, đạm, carbohydrate và vi chất; giữ chất béo hiện có vì payload nguồn không có dòng fat tổng. |
| `cai-xanh` | 4016 | Cải xanh, tươi | Cập nhật đủ macro chính và vi chất từ nguồn. |
| `rau-cai-ngot` | 4108 | Rau cải ngọt, tươi | Cập nhật đủ macro chính và các vi chất có trong nguồn. |
| `bap-cai` | 4010 | Cải bắp trắng, tươi | Cập nhật đủ macro chính và vi chất; dùng cho bắp cải phổ thông. |
| `bi-xanh` | 4002 | Quả bí đao (bí xanh), tươi | Cập nhật năng lượng, đạm, carbohydrate và vi chất; giữ chất béo hiện có vì payload nguồn không có dòng fat tổng. |
| `bau` | 4001 | Quả bầu, tươi | Cập nhật đủ macro chính và vi chất từ nguồn. |
| `muop-huong` | 4054 | Mướp, tươi | Cập nhật đủ macro chính và vi chất; dùng cho mướp hương phổ thông. |
| `ca-rot` | 4007 | Củ cà rốt, tươi | Cập nhật đủ macro chính và vi chất từ nguồn. |
| `khoai-lang` | 2008 | Khoai lang, tươi | Cập nhật đủ macro chính và vi chất; ghi rõ là khoai lang tươi, không phải luộc/nướng. |

Ghi chú an toàn: các mục còn giữ một phần số cũ vì payload nguồn thiếu field liên quan không được tự nâng lên xác minh toàn phần; metadata đặt `sourceConfidence: medium` và `sourceReviewStatus: reviewed_keep_current`. Các mục đủ macro chính và không giữ các field trọng yếu từ dữ liệu cũ được đặt `confidence: high` và `sourceReviewStatus: source_verified`.

## Batch cập nhật nguồn Viện — trái cây quen thuộc

Đã mở rộng `vddSourceReplacements` cho các trái cây thường gặp trong bữa ăn Việt Nam, ưu tiên các trường hữu ích cho đái tháo đường/giảm cân/CKD như carbohydrate, đường, chất xơ, kali và vitamin C.

| Slug | Mã Viện | Tên nguồn | Mức cập nhật |
| --- | --- | --- | --- |
| `chuoi` | 5006 | Chuối tây, tươi | Cập nhật macro chính, đường và vi chất; payload có chất xơ null nên không ghi đè chất xơ. |
| `cam` | 5002 | Cam, tươi | Cập nhật đủ macro chính, chất xơ, đường và vi chất. |
| `buoi` | 5001 | Bưởi, tươi | Cập nhật năng lượng, đạm, carbohydrate, chất xơ và vi chất; không có fat trong payload nên giữ đối chiếu một phần. |
| `oi` | 5040 | Ổi, quả chín, tươi | Cập nhật đủ macro chính, chất xơ, đường và vi chất. |
| `xoai` | 5055 | Xoài chín, tươi | Cập nhật đủ macro chính, đường và vi chất; không áp dụng cho xoài xanh. |
| `du-du` | 5017 | Đu đủ chín, tươi | Cập nhật đủ macro chính, chất xơ, đường và vi chất; không áp dụng cho đu đủ xanh. |
| `dua-hau` | 5011 | Dưa hấu, tươi | Cập nhật theo nguồn nhưng giữ metadata một phần vì payload có đường tổng cao hơn carbohydrate. |
| `thanh-long` | 5044 | Quả thanh long, tươi | Cập nhật năng lượng, đạm, carbohydrate, chất xơ và một số vi chất; không có fat trong payload. |
| `mit` | 5028 | Mít dai, tươi | Cập nhật đủ macro chính và vi chất; không áp dụng cho mít mật/mít sấy. |
| `vai` | 5052 | Vải, tươi | Cập nhật đủ macro chính, đường và vi chất; không áp dụng cho vải nước đường/vải khô. |
| `nhan` | 5035 | Nhãn, tươi | Cập nhật năng lượng, đạm, carbohydrate, chất xơ và vi chất; không có fat trong payload. |
| `sau-rieng` | 5048 | Sầu riêng, tươi | Cập nhật đủ macro chính và vi chất; ghi chú năng lượng/carbohydrate cao. |
| `khom` | 5015 | Dứa tây, tươi | Cập nhật đủ macro chính, đường và vi chất; không áp dụng cho dứa hộp/nước dứa. |

Ghi chú an toàn: không tạo slug mới cho các mục đã có; cập nhật trực tiếp để tránh nhiễu tìm kiếm. Các mục nguồn thiếu fat hoặc có bất nhất nội bộ được đặt `sourceConfidence: medium`.

## Batch cập nhật nguồn Viện — rau/củ/tinh bột phổ biến, đợt 2

Đã bổ sung nguồn trực tiếp cho 12 mục còn ở mức ước tính thấp trong nhóm rau/củ/tinh bột quen thuộc. Với batch này, payload nguồn có nhiều macro/vi chất nhưng thiếu dòng năng lượng cho các mục được chọn, nên chỉ ghi đè các trường có nguồn chắc và giữ kcal hiện có. Metadata đặt `sourceConfidence: medium` và `sourceReviewStatus: reviewed_keep_current` để không diễn giải quá mức.

| Slug | Mã Viện | Tên nguồn | Mức cập nhật |
| --- | --- | --- | --- |
| `ca-chua` | 4005 | Quả cà chua, tươi | Cập nhật đạm, béo, carb, chất xơ, đường, điện giải, vitamin C, folate và vi chất; giữ kcal hiện có. |
| `dua-leo` | 4027 | Dưa chuột, tươi | Cập nhật macro, chất xơ, đường, kali/natri, vitamin C, folate và vi chất; dùng cho dưa leo/dưa chuột tươi. |
| `khoai-tay` | 2014 | Khoai tây, tươi | Cập nhật macro, chất xơ, kali và vi chất cho khoai tây tươi; không áp dụng cho khoai tây chiên/luộc. |
| `cai-thia` | 4015 | Cải thìa (cải trắng), tươi | Cập nhật macro, chất xơ, đường, canxi, kali, vitamin C, folate và vi chất. |
| `rau-ma` | 4079 | Rau má, má mơ, tươi | Cập nhật đạm, carb, chất xơ, canxi, sắt, phospho và vitamin C; giữ fat/kcal hiện có. |
| `rau-day` | 4070 | Rau đay, tươi | Cập nhật macro, chất xơ, canxi, sắt, kali, vitamin C, folate và vi chất. |
| `khoai-mi` | 2004 | Củ sắn, tươi | Cập nhật macro, chất xơ, canxi, sắt, kali, vitamin C, folate; không áp dụng cho sắn nướng/luộc/bột sắn. |
| `khoai-mon` | 2010 | Khoai môn, tươi | Cập nhật macro, chất xơ, canxi, sắt, phospho và vitamin C; giữ điện giải chưa có nguồn trực tiếp. |
| `cu-cai-trang` | 4021 | Củ cải trắng, tươi | Cập nhật macro, chất xơ, đường, điện giải, vitamin C, folate và vi chất. |
| `ca-tim` | 4009 | Quả cà tím, tươi | Cập nhật đạm, carb, chất xơ, canxi, sắt, phospho và vitamin C; giữ fat/kcal hiện có. |
| `su-hao` | 4096 | Củ su hào, tươi | Cập nhật macro, chất xơ, đường, natri/kali, vitamin C, folate và vi chất. |
| `bong-cai-xanh` | 4100 | Súp lơ xanh, tươi | Cập nhật macro, chất xơ, đường, điện giải, vitamin C, folate và vi chất; dùng cho bông cải xanh/súp lơ xanh tươi. |

## Batch cập nhật nguồn Viện — nhóm đạm quen thuộc

Đã bổ sung lớp đối chiếu nguồn Viện cho 13 thực phẩm giàu đạm thường gặp trong bữa ăn Việt Nam. Batch này đặc biệt hữu ích cho các trang chi tiết thực phẩm và công cụ lọc theo bệnh mạn tính vì bổ sung các trường như đạm, chất béo, natri, kali, phospho, sắt, kẽm, selen. Payload nguồn thiếu dòng năng lượng cho các mục được chọn, nên giữ kcal hiện có và đặt metadata ở mức rà soát một phần.

| Slug | Mã Viện | Tên nguồn | Mức cập nhật |
| --- | --- | --- | --- |
| `thit-heo-nac` | 7017 | Thịt lợn, nạc, tươi | Cập nhật đạm, béo, điện giải, phospho, sắt, kẽm, selen; giữ kcal hiện có. |
| `thit-ba-roi` | 7018 | Thịt lợn, nửa nạc, nửa mỡ, tươi | Cập nhật đạm, béo và vi chất; ghi chú tỷ lệ mỡ dao động theo miếng cắt. |
| `thit-bo-nac` | 7005 | Thịt bò, lưng, nạc, tươi | Cập nhật đạm, béo thấp, sắt, kẽm, phospho, kali và selen. |
| `uc-ga` | 7089 | Thịt gà công nghiệp, lườn, raw | Cập nhật đạm, béo, canxi, sắt, kẽm, phospho; thiếu điện giải trong payload. |
| `thit-ga-dui` | 7088 | Thịt gà công nghiệp, đùi, tươi | Cập nhật đạm, béo, carb vết, canxi, sắt, kẽm, phospho. |
| `trung-ga` | 9001 | Trứng gà ta | Cập nhật macro, natri/kali, canxi, sắt, phospho, selen, folate; chưa ghi đè cholesterol vì payload không có. |
| `trung-vit` | 9004 | Trứng vịt | Cập nhật macro, natri/kali, canxi, sắt, phospho, selen, folate; chưa ghi đè cholesterol vì payload không có. |
| `tom-tuoi` | 8051 | Tôm biển, tươi | Cập nhật macro, natri, canxi, sắt, kẽm, phospho, selen; không áp dụng cho tôm khô/tôm tẩm bột. |
| `muc-tuoi` | 8040 | Mực, tươi | Cập nhật đạm, béo, natri/kali, phospho, selen và vi chất. |
| `ca-ro-phi` | 8024 | Cá rô phi, tươi | Cập nhật đạm, béo, canxi, sắt, phospho; thiếu điện giải trong payload. |
| `ca-thu` | 8026 | Cá thu, tươi | Cập nhật đạm, béo cao hơn cá trắng, natri/kali, canxi, sắt, phospho. |
| `ca-nuc` | 8020 | Cá nục, tươi | Cập nhật đạm, béo, natri/kali, canxi, sắt, kẽm, phospho, selen. |
| `dau-phu` | 3025 | Đậu phụ, sống | Cập nhật macro, chất xơ, natri thấp, sắt, kẽm, phospho, selen; không áp dụng cho đậu phụ chiên. |

## Batch cập nhật nguồn Viện — cá, tép và phủ tạng quen thuộc

Đã bổ sung nguồn cho 12 mục còn `recipe-estimate-v1` trong nhóm cá nước ngọt/biển và phủ tạng hay gặp. Các mục này có ý nghĩa thực hành cao cho người cần theo dõi đạm, phospho, kali, sắt, kẽm, selen; riêng gan có vitamin A và folate cao nên cần cảnh báo khẩu phần khi dùng cho thai kỳ, gout hoặc bệnh mạn tính.

| Slug | Mã Viện | Tên nguồn | Mức cập nhật |
| --- | --- | --- | --- |
| `ca-loc` | 8022 | Cá quả, tươi | Dùng tên nguồn cá quả tương ứng cá lóc; cập nhật đạm, béo, canxi, phospho. |
| `ca-chep` | 8003 | Cá chép, tươi | Cập nhật đạm, béo, natri/kali, sắt, kẽm, phospho, selen, vitamin A. |
| `ca-ngu` | 8019 | Cá ngừ, tươi | Cập nhật đạm cao, béo thấp, natri/kali, phospho, selen; không áp dụng cho cá ngừ hộp. |
| `ca-moi` | 8015 | Cá mòi (cá sardin), tươi | Cập nhật đạm, béo, canxi, sắt, natri, phospho, selen; không áp dụng cho cá mòi hộp. |
| `ca-tram-co` | 8029 | Cá trắm cỏ, tươi | Cập nhật đạm, béo, natri/kali, canxi, phospho. |
| `ca-basa-phi-le` | 8063 | Cá basa, phi lê | Cập nhật đạm, béo, carbohydrate theo payload nguồn, canxi, phospho; đánh dấu đối chiếu một phần. |
| `ca-ro-dong` | 8023 | Cá rô đồng, tươi | Cập nhật đạm, béo, canxi, sắt, phospho. |
| `tep-dong` | 8049 | Tép gạo, tươi | Cập nhật đạm, béo, canxi rất cao do ăn cả vỏ, phospho; không áp dụng cho tép khô/mắm tép. |
| `gan-heo` | 7041 | Gan lợn, tươi | Cập nhật đạm, béo, carb, sắt, kẽm, phospho, selen, vitamin A, vitamin C, folate; cần cảnh báo khẩu phần. |
| `tim-heo` | 7057 | Tim lợn, tươi | Cập nhật đạm, béo, carb, sắt, kẽm, phospho, selen, vitamin A, folate. |
| `gan-ga` | 7040 | Gan gà, tươi | Cập nhật đạm, béo, carb, sắt, kẽm, phospho, selen, vitamin A và folate rất cao; cần cảnh báo khẩu phần. |
| `tim-ga` | 7056 | Tim gà, tươi | Cập nhật đạm, béo, sắt, kẽm, phospho, vitamin A, folate. |

## Batch cập nhật nguồn Viện — đậu, hạt và thủy sản vỏ

Đã bổ sung nguồn cho 14 mục thuộc nhóm đậu/hạt và thủy sản vỏ phổ biến. Nhóm này hữu ích cho người ăn chay, tăng đạm, rối loạn mỡ máu, loãng xương, CKD và gout; tuy nhiên nhiều mục đậu/hạt khô có kali/phospho cao, còn cua/ốc/vừng có canxi rất cao do đặc thù phần ăn được.

| Slug | Mã Viện | Tên nguồn | Mức cập nhật |
| --- | --- | --- | --- |
| `dau-nanh` | 3007 | Đậu tương, đậu nành, hạt khô | Cập nhật đạm, béo, carb, chất xơ, kali, phospho, canxi, sắt, kẽm, folate; không áp dụng cho sữa đậu nành. |
| `dau-xanh` | 3010 | Đậu xanh, hạt khô | Cập nhật macro, chất xơ, kali, phospho, magie, folate; không áp dụng cho giá đỗ/chè. |
| `dau-den` | 3004 | Đậu đen, hạt khô | Cập nhật macro, chất xơ, canxi, sắt, phospho, folate; thiếu điện giải trong payload. |
| `dau-trang-hat` | 3008 | Đậu trắng/đậu tây, hạt khô | Cập nhật macro, chất xơ, canxi, sắt, phospho, folate. |
| `dau-phong-song` | 3017 | Lạc hạt, khô | Cập nhật đạm, béo cao, carb, chất xơ, kali, phospho, magie, folate; không áp dụng cho lạc rang muối. |
| `me-vung` | 3020 | Vừng đen/trắng, hạt khô | Cập nhật macro, chất xơ, canxi rất cao, sắt, kẽm, magie, phospho, selen. |
| `me-trang` | 3020 | Vừng đen/trắng, hạt khô | Dùng nguồn gộp cho mè trắng; metadata giữ đối chiếu một phần. |
| `me-den` | 3020 | Vừng đen/trắng, hạt khô | Dùng nguồn gộp cho mè đen; metadata giữ đối chiếu một phần. |
| `hat-sen-tuoi` | 4040 | Hạt sen, tươi | Cập nhật macro, chất xơ, kali, phospho, magie, folate. |
| `hat-sen-kho` | 4041 | Hạt sen, khô | Cập nhật macro, chất xơ, kali/phospho cao hơn hạt sen tươi; cần phân biệt trạng thái khô. |
| `cua-dong` | 8034 | Cua đồng, tươi | Cập nhật macro, canxi rất cao, natri nguồn cao, vitamin A; cần cảnh báo khi hạn chế natri. |
| `ngheu` | 8066 | Ngao biển trắng | Cập nhật macro, canxi và folate; payload có ít vi chất nên chỉ cập nhật phần chắc. |
| `oc-buou` | 8041 | Ốc bươu, tươi | Cập nhật macro, canxi rất cao, phospho; không áp dụng cho món ốc xào nhiều dầu/muối. |
| `ghe-xanh` | 8035 | Cua ghẹ, tươi | Cập nhật đạm, béo, natri/kali, kẽm, phospho, selen, folate; dùng cho ghẹ xanh phổ thông. |

## Batch cập nhật nguồn Viện — nền bếp Việt và thực phẩm dùng hằng ngày

Đã bổ sung nguồn cho 16 mục nền thường gặp trong bữa ăn Việt Nam: sữa/đậu nành, rau gia vị, tinh bột khô/tươi, gia vị ngọt–mặn và một số nguồn đạm. Batch này giúp trang thực phẩm và công cụ lọc bệnh mạn tính hiển thị rõ hơn các điểm cần lưu ý: mì ăn liền rất cao natri, mật ong/đường chủ yếu là đường, gạo–miến–bột là nguồn carbohydrate đậm đặc, và sữa chua/sữa đậu nành cần phân biệt loại có đường/không đường theo nhãn hàng.

| Slug | Mã Viện | Tên nguồn | Mức cập nhật |
| --- | --- | --- | --- |
| `sua-dau-nanh` | 3032 | Sữa đậu nành (100g đậu/lít) | Cập nhật macro, natri/kali, canxi, phospho, selen, vitamin D/E, folate; không áp dụng cho sữa đóng hộp có đường. |
| `sua-chua` | 10004 | Sữa chua | Cập nhật macro, đường, chất béo bão hòa, canxi, natri/kali, phospho, vitamin A/C, folate; cần phân biệt loại có đường/không đường. |
| `gia-do` | 4036 | Giá đậu xanh, tươi | Cập nhật macro, đường, chất béo bão hòa, điện giải, canxi, sắt, phospho, vitamin C/E, folate. |
| `hanh-la` | 4038 | Hành lá/hành hoa, tươi | Cập nhật đạm, carb, canxi, sắt, natri/kali, vitamin A/C; ghi chú thường dùng lượng nhỏ. |
| `hanh-tay` | 4039 | Hành tây, tươi | Cập nhật macro, đường, điện giải, vi chất, vitamin C/E và folate. |
| `toi` | 4103 | Tỏi ta, tươi | Cập nhật macro, đường, natri/kali, phospho, selen cao; ghi chú thường dùng lượng nhỏ. |
| `thit-vit` | 7028 | Thịt vịt, tươi | Cập nhật đạm, béo, chất béo bão hòa, sắt, kẽm, phospho, selen, vitamin A/E; không áp dụng cho vịt quay/luộc bỏ da. |
| `cua-bien` | 8035 | Cua ghẹ, tươi | Dùng nguồn cua/ghẹ cho cua biển phổ thông; cập nhật đạm, béo, natri/kali, kẽm, phospho, selen, folate. |
| `gao-te` | 1004 | Gạo trắng tẻ xát máy, sống | Cập nhật macro, điện giải, selen, phospho; không áp dụng trực tiếp cho cơm chín theo 100g. |
| `bun-tuoi` | 1020 | Bún, tươi | Cập nhật macro, canxi, sắt, phospho; không áp dụng cho tô bún đã thêm nước dùng/thịt/chả. |
| `mien-dong` | 2015 | Miến dong, khô | Cập nhật macro và khoáng; nhấn mạnh miến khô khác miến đã nấu do hút nước. |
| `mi-goi` | 1043 | Mỳ ăn liền, lúa mì | Cập nhật macro và natri rất cao; cần đối chiếu nhãn/gói gia vị khi tư vấn cá thể. |
| `bot-gao` | 1017 | Bột gạo tẻ | Cập nhật macro, kali, phospho, selen, vitamin E, folate; không áp dụng cho bột pha sẵn. |
| `duong-trang` | 12014 | Đường kính | Cập nhật carbohydrate và khoáng vết; chủ yếu là đường, vi chất rất thấp. |
| `mat-ong` | 12026 | Mật ong | Cập nhật carb/đường, kali, vi chất vết; cảnh báo khẩu phần ở đái tháo đường/giảm cân. |
| `nuoc-mam` | 13015 | Nước mắm loại I | Cập nhật đạm, canxi, sắt, phospho; không ghi đè natri vì payload lần này không có natri. |

## Batch cập nhật nguồn Viện — rau gia vị, rau củ và củ quả Việt

Đã bổ sung nguồn cho 19 mục rau gia vị/rau củ thường gặp. Batch này giúp giảm vùng `recipe-estimate-v1` ở các thực phẩm dùng hằng ngày, nhất là các nguyên liệu Việt như gừng, nghệ, riềng, sả, khổ qua, bí đao, măng tre, ngó sen và nhóm rau thơm. Nhiều rau gia vị có vitamin/khoáng cao theo 100g nhưng khẩu phần thực tế rất nhỏ, nên ghi chú hiển thị cần nhấn mạnh “100g tham khảo, không phải lượng ăn thông thường”.

| Slug | Mã Viện | Tên nguồn | Mức cập nhật |
| --- | --- | --- | --- |
| `gung-tuoi` | 13003 | Gừng tươi | Cập nhật macro, đường, natri/kali, canxi, sắt, magie, phospho, vitamin C/E, folate. |
| `nghe-tuoi` | 13007 | Nghệ tươi | Cập nhật macro, điện giải, kẽm, magie, phospho, vitamin C/E, folate; không áp dụng cho tinh bột nghệ/viên curcumin. |
| `rieng` | 13009 | Riềng | Cập nhật đạm, carb, canxi và phospho; payload nguồn ít vi chất nên chỉ cập nhật phần chắc. |
| `sa-cay` | 13024 | Sả | Cập nhật macro, natri/kali, sắt, phospho, vitamin A/C; ghi chú thường dùng lượng nhỏ. |
| `ot-tuoi` | 13039 | Ớt tươi | Cập nhật macro, điện giải và vitamin C cao; khẩu phần thực tế thường rất nhỏ. |
| `ot-hiem` | 13039 | Ớt tươi | Dùng nguồn ớt tươi tổng quát cho ớt hiểm tươi ở mức đối chiếu một phần. |
| `su-su` | 4098 | Quả su su, tươi | Cập nhật macro, đường, điện giải, vitamin C/E và folate; không áp dụng cho món đã nêm muối/dầu. |
| `kho-qua` | 4055 | Mướp đắng, tươi | Dùng tên nguồn mướp đắng tương ứng khổ qua; cập nhật carb, kali, vitamin A/C, folate. |
| `bi-do` | 4003 | Quả bí ngô, tươi | Cập nhật carb, kali, beta-carotene quy đổi vitamin A, vitamin C/E và folate. |
| `bi-dao` | 4002 | Quả bí đao/bí xanh, tươi | Cập nhật carb, natri/kali, vitamin C; không áp dụng cho trà bí đao/canh đã nêm. |
| `mang-tuoi` | 4053 | Măng tre, tươi | Cập nhật macro, đường, kali, phospho, vitamin E, folate; nhắc cần sơ chế/nấu kỹ. |
| `ngo-sen` | 4059 | Ngó sen, tươi | Cập nhật carb, kali cao, vitamin C và phospho; không áp dụng cho gỏi đã thêm đường/mắm. |
| `khoai-so` | 2013 | Khoai sọ, tươi | Cập nhật carb, kali, phospho, vitamin E và folate; phân biệt khoai sống với món đã nấu/chè. |
| `rau-lang` | 4076 | Rau khoai lang, tươi | Cập nhật macro, kali, sắt, magie, vitamin A/C, folate. |
| `rau-tan-o` | 4013 | Cải cúc, tươi | Dùng tên nguồn cải cúc tương ứng rau tần ô; cập nhật folate cao, điện giải và vi chất. |
| `rau-can-tay` | 4018 | Cần tây, tươi | Cập nhật macro, natri/kali, canxi, sắt, vitamin C; không áp dụng cho nước ép pha trộn. |
| `rau-ram` | 4088 | Rau răm, tươi | Cập nhật đạm, carb, canxi, sắt, kali, vitamin C; ghi chú rau gia vị lượng nhỏ. |
| `rau-thi-la` | 4101 | Thìa là, tươi | Cập nhật macro, canxi, kali, vitamin A/C, folate; ghi chú rau gia vị lượng nhỏ. |
| `la-lot` | 4046 | Lá lốt, tươi | Cập nhật đạm, carb, canxi, kali, phospho, vitamin A/C; không áp dụng cho chả lá lốt. |

## Batch cập nhật nguồn Viện — rau thơm và rau ăn lá Việt

Đã bổ sung nguồn cho 13 mục rau thơm/rau ăn lá rất thường gặp trong bữa Việt. Batch này ưu tiên các slug đang còn `recipe-estimate-v1` nhưng có tên nguồn Viện Dinh dưỡng khớp rõ. Với rau gia vị, số liệu 100g giúp so sánh thành phần, nhưng khẩu phần thực tế thường chỉ vài gram đến vài chục gram.

| Slug | Mã Viện | Tên nguồn | Mức cập nhật |
| --- | --- | --- | --- |
| `rau-diep-ca` | 4071 | Rau giấp cá/diếp cá, tươi | Cập nhật đạm, carb, natri/kali, magie, vitamin A/C; nhắc rửa kỹ khi ăn sống. |
| `hung-que` | 4075 | Rau húng, tươi | Dùng nguồn rau húng tổng quát cho húng quế; cập nhật macro, khoáng, vitamin A/C và folate. |
| `hung-lui` | 4075 | Rau húng, tươi | Dùng nguồn rau húng tổng quát cho húng lủi; đối chiếu một phần do chưa tách giống húng. |
| `rau-hung-lui` | 4075 | Rau húng, tươi | Cập nhật đồng bộ cho bản rau húng lủi trong thư viện mở rộng. |
| `rau-mui-ta` | 4081 | Rau mùi, tươi | Cập nhật macro, kali, canxi, sắt, vitamin A/C/E, folate; ghi chú rau gia vị lượng nhỏ. |
| `rau-mui-tau` | 4082 | Rau mùi tàu, tươi | Cập nhật macro, đường, điện giải, vitamin A/C/E và folate. |
| `rau-ngo` | 4085 | Rau ngổ, tươi | Cập nhật đạm, carb, canxi, sắt, kali, vitamin A/C. |
| `rau-sam` | 4091 | Rau sam, tươi | Cập nhật đạm, carb, canxi, sắt, phospho, vitamin A/C; payload ít điện giải nên chỉ cập nhật phần chắc. |
| `dot-su-su` | 4110 | Ngọn su su, tươi | Cập nhật macro, canxi, sắt, kẽm, phospho, vitamin C; không áp dụng cho món xào. |
| `hanh-cu` | 4037 | Hành củ, tươi | Cập nhật macro, natri/kali, canxi, sắt, phospho, folate; không áp dụng cho hành phi/hành muối. |
| `toi-tay` | 4104 | Tỏi tây, cả lá, tươi | Cập nhật đạm, carb, canxi, sắt, phospho, vitamin C. |
| `la-chanh` | 13059 | Lá chanh | Payload chỉ có đạm/carb nên cập nhật rất hẹp; dùng lượng nhỏ làm gia vị. |
| `rau-cai-ngong` | 4134 | Cải ngồng | Cập nhật macro, đường, natri/kali, canxi, vitamin A/C, folate. |

## Batch cập nhật nguồn Viện — bắp/ngô, nấm, cá và củ sắn

Đã bổ sung nguồn cho 12 mục thường gặp, ưu tiên thực phẩm nguyên liệu có tên nguồn rõ và hạn chế công thức biến thiên. Batch này giúp giảm vùng dữ liệu ước tính ở các nhóm bắp/ngô, nấm, cá nước ngọt/biển và củ sắn. Các món chế biến như bắp Mỹ luộc không có mã đủ đặc hiệu trong payload hiện tại nên chưa ghi đè.

| Slug | Mã Viện | Tên nguồn | Mức cập nhật |
| --- | --- | --- | --- |
| `bap-non` | 4058 | Ngô bao tử, tươi | Cập nhật macro, canxi, sắt, phospho và vitamin C; không áp dụng cho bắp non đóng hộp/xào. |
| `bap-nep-luoc` | 1023 | Ngô nếp cả bắp, luộc | Cập nhật macro, canxi, sắt, phospho; không áp dụng cho bắp nướng/bắp xào. |
| `bot-bap` | 1019 | Bột ngô vàng | Cập nhật macro, kali, phospho, magie, selen, vitamin A/E, folate. |
| `nam-rom` | 4129 | Nấm rơm, tươi | Cập nhật macro, canxi, sắt, phospho, vitamin C; không áp dụng cho món đã nêm. |
| `nam-huong` | 4126 | Nấm hương, khô | Cập nhật macro, canxi, sắt và phospho; phân biệt rõ nấm khô với nấm tươi. |
| `nam-dong-co` | 4127 | Nấm hương, tươi | Dùng nguồn nấm hương tươi cho nhóm đông cô tươi; cập nhật macro, canxi, sắt, phospho. |
| `nam-kim-cham` | 4133 | Nấm kim châm | Cập nhật macro, đường, natri/kali, kẽm, phospho, selen, folate. |
| `nam-meo` | 4125 | Mộc nhĩ, khô | Cập nhật macro, canxi/sắt/kali/selen cao; ghi chú khi ngâm nở giá trị 100g thành phẩm giảm. |
| `ca-dieu-hong` | 8062 | Cá điêu hồng | Cập nhật đạm, béo, canxi, sắt, kẽm, phospho, vitamin A/E; không áp dụng cho cá chiên/kho. |
| `ca-chim-trang` | 8061 | Cá chim trắng | Cập nhật đạm, béo cao hơn nhiều cá trắng, phospho và vitamin E; không áp dụng cho món chiên/sốt. |
| `ca-trich` | 8031 | Cá trích, tươi | Cập nhật đạm, béo, natri/kali, selen, phospho; không áp dụng cho cá trích hộp/kho mặn. |
| `cu-san` | 2004 | Củ sắn, tươi | Cập nhật macro, natri/kali, vitamin C/E, folate; nhắc cần chế biến đúng cách. |

## Nhóm không tự ghi đè

Một số mục lệch lớn do khả năng khác định nghĩa thực phẩm, khác trạng thái sống/chín/khô, khác công thức hoặc trùng tên:

- `bo-trai` / “Bơ”: nguồn Viện có vẻ là bơ/dầu béo, không phải trái bơ.
- `dau-dua`: nguồn Viện có giá trị 900 kcal/100g và 100g lipid, giống dầu dừa hơn là đậu đũa.
- `tuong-ot`, `bot-nem`, `sa-te`: gia vị chế biến biến thiên lớn theo nhãn/công thức; cần đối chiếu thêm nhãn hoặc nguồn chuẩn trước khi ghi đè.
- Các bánh/món chế biến như `banh-duc`, `banh-chung`, `banh-gio`, `che-thai`, `nem-lui`: khác công thức/khẩu phần nên không nên tự ghi đè.

## Khuyến nghị bước tiếp theo

1. Tạo script đối chiếu có whitelist thủ công theo `slug -> mã thực phẩm Viện` thay vì chỉ khớp tên.
2. Với rau/củ/quả tươi, ưu tiên bổ sung vi chất khi tên và trạng thái khớp rõ.
3. Với món chế biến/gia vị/đồ uống đóng gói, chỉ cập nhật khi có nhãn sản phẩm hoặc mô tả công thức tương đồng.
4. Thêm trường nguồn chi tiết cho từng nutrient nếu muốn phân biệt “macro theo USDA/ước tính” và “vi chất bổ sung từ Viện”.
## Batch cập nhật nguồn Viện — sữa bò tươi

- `sua-tuoi` ← mã VDD `10001` (Sữa bò tươi): cập nhật năng lượng, đạm, béo, carbohydrate, đường, chất béo bão hòa, canxi, sắt, natri, kali, magie, phospho, selen, vitamin A/C/E và folate.
- Không áp dụng cho sữa có đường, sữa hương vị hoặc sản phẩm thương mại khác công thức.
