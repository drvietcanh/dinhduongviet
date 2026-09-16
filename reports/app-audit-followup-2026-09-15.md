# Rà soát tiếp ứng dụng — 2026-09-15

## Lỗi xác nhận và đã sửa

1. **Bộ lọc thực đơn tuần bị bỏ qua ở các nhóm bữa:** công cụ lọc danh sách món theo chế độ ăn nhưng lại tạo bữa từ toàn bộ `MEAL_MAP`, nên món không đạt lựa chọn vẫn có thể xuất hiện. Các nhóm bữa hiện được giới hạn theo danh sách món đủ điều kiện; các bộ lọc ít natri/ít béo/ít đường/giàu xơ chỉ chấp nhận món có chỉ số đã biết.
2. **Nhật ký ăn uống coi vi chất thiếu là 0:** dữ liệu thực phẩm, món ăn và sản phẩm người dùng nhập hiện giữ giá trị chưa biết; tổng ngày/CSV/PDF hiển thị “Chưa đủ dữ liệu” khi có thành phần thiếu natri hoặc chất xơ, thay vì báo tổng thấp giả.
3. **Bộ lọc nâng cao cho qua dữ liệu thiếu khi có giới hạn:** khi người dùng bật khoảng cho natri, chất xơ, sắt hoặc canxi, mục không có giá trị ở trường đó hiện bị loại khỏi kết quả; khi không bật khoảng, mục vẫn hiện bình thường.
4. **Biểu đồ dinh dưỡng hiển thị chất xơ thiếu thành 0:** đã ẩn thanh chất xơ khi dữ liệu không có; các khoáng chất chỉ vẽ khi có số thực.

## Rà soát hồi quy tiếp tục từ lượt trước

- API thư viện giữ `null`; không tự sinh tag ít natri/ít kali; filter huyết áp/CKD không phân loại mục thiếu số; phép cộng dinh dưỡng món ăn không điền khoáng chất còn thiếu bằng 0.
- Không phát hiện `console.log` trong `src/`.
- Kiểm tra 69 CSS custom properties được tham chiếu: không có biến chưa khai báo trong `src/`.
- Kết quả xác minh: `npx astro check` 0 lỗi/cảnh báo; build thành công 1.897 trang; QA dữ liệu thực phẩm, test công cụ, QA món ăn và kiểm tra nhất quán đều đạt.

## Việc còn lại ngoài phạm vi sửa tự động

Các trường dinh dưỡng vẫn thiếu trong nguồn cần được bổ sung có provenance; không thể suy ra số 0 hay tự điền bằng nguồn khác. Những trường hợp bất đồng nguồn, trạng thái `source_verified`, và các mục cần chuyên gia duyệt tiếp tục theo dõi trong `food-source-standardization-plan-2026-09-15.md`.

## Rà soát bổ sung — 2026-09-15

- Bỏ suy luận purin từ lượng protein; không còn nhãn/xếp hạng purin hoặc gợi ý phù hợp gout dựa trên proxy. Chỉ số GI/GL cũng không được suy ra khi bản ghi thiếu GI đo/nguồn có căn cứ. QA có kiểm tra hồi quy cho các trường hợp thiếu dữ liệu này. Việc phân loại gout cần chờ dữ liệu purin trực tiếp có nguồn.
- Điểm sức khỏe không còn xem thành phần chưa biết là 0 hoặc gắn “tốt/xấu” khi thiếu dữ liệu cần thiết; giao diện ghi rõ đây là điểm tham khảo nội bộ, không phải thang điểm Bộ Y tế hay công cụ chẩn đoán.
- Bảo vệ xuất nhật ký: dữ liệu tên món do người dùng nhập được escape trước khi đưa vào cửa sổ in PDF; trường văn bản CSV bắt đầu bằng ký tự công thức bảng tính được trung hòa trước khi xuất.
- Kết quả xác minh sau các chỉnh sửa: Astro check 517 tệp, 0 lỗi/cảnh báo/hints; build 1.897 trang; thư viện 1.000 thực phẩm, không trùng slug/tên, không lỗi dữ liệu vi chất null; toàn bộ test công cụ, QA 447 món và kiểm tra đồng bộ dữ liệu đều đạt. Không có `console.log` trong `src/`; 69 biến CSS được dùng đều có khai báo; `git diff --check` không báo lỗi whitespace (chỉ cảnh báo chuẩn hóa LF/CRLF trên worktree Windows).
- Còn cảnh báo nguồn cần xử lý riêng: bản xuất Vietnam FCT có 14 tên hiển thị lỗi định dạng và 1 mã nguồn bị lặp; QA hiện gắn mức thông tin, tra cứu đã ẩn bản ghi mơ hồ và giữ API thô để truy xuất provenance. Không tự sửa dữ liệu gốc chưa đối chiếu nguồn.

## Rà soát hồi quy bổ sung — 2026-09-15

- Tìm thấy lỗi suy diễn do giá trị thiếu: GI có thể tạo nhãn GL thấp nếu carb bị thiếu; chất béo chưa có số liệu có thể bị tính thành 0 và gắn “ít béo”. Đã chỉ sinh nhãn GL khi có cả GI và carb, chỉ phân loại béo khi có dữ liệu, đồng thời thêm điều kiện QA kiểm tra hai tình huống này.
- Các cảnh báo sức khỏe không còn mặc định năng lượng, đạm, chất béo, carb, xơ hoặc béo bão hòa chưa biết thành 0 trước khi so ngưỡng; các nhánh cảnh báo/đánh giá cần dữ liệu đều được chặn khi thiếu trường tương ứng.
- Điểm dinh dưỡng không cộng điểm cho đạm hay tỷ lệ năng lượng từ chất béo khi thiếu dữ liệu; trạng thái tổng thể “Chưa đủ dữ liệu” cũng tính cả đạm, chất béo và năng lượng trong các trường bắt buộc.
- Xác minh lại sau sửa: Astro check 517 tệp, 0 lỗi/cảnh báo/hints; build 1.897 trang; QA thư viện 1.000 thực phẩm với 0 lỗi nhãn từ dữ liệu thiếu; toàn bộ test công cụ, QA 447 món và consistency đều đạt. Không có `console.log`; 69 biến CSS được tham chiếu đều đã khai báo.

## Rà soát công cụ carb — 2026-09-15

- Công cụ tính carb trước đây cộng các món có dữ liệu, bỏ món thiếu carb rồi vẫn hiển thị tổng phụ như tổng bữa ăn và quy đổi thành phần carb; mốc tham khảo 45–60 g cũng được so trên tổng chưa đầy đủ. Đã thêm trạng thái `totalCarbComplete`, không hiển thị tổng/phần quy đổi như kết quả hoàn chỉnh khi thiếu dữ liệu, và giải thích rõ tổng phụ đã biết nếu có.
- Bộ máy đánh giá bữa ăn trả `carbG: null` thay vì tổng phụ khi không đủ carb ở toàn bộ món đã chọn. Thêm kiểm thử cho trường hợp chỉ thiếu dữ liệu và trộn món có/không có dữ liệu.
- Xác minh: kiểm thử carb và meal-assessment đạt; Astro check 517 tệp, không lỗi/cảnh báo; build 1.897 trang; mọi test công cụ, QA thư viện/món ăn và consistency đều đạt. `console.log` không có trong `src/`; 69 CSS custom properties tham chiếu đều có khai báo.

## Rà soát thư viện và bộ lọc — 2026-09-16

- Bộ lọc thư viện từng dùng `Number(... || 0)` cho calo, đạm, carb, xơ; bản ghi thiếu số có thể lọt vào bộ lọc “≤”/“≥” hoặc bị đẩy lên đầu khi sắp xếp. Đã chuyển sang số đã biết (`knownNumber`), loại bản ghi thiếu khi người dùng đặt giới hạn, và đưa giá trị thiếu xuống cuối khi sắp xếp.
- Hồ sơ giảm cân và các bộ lọc giàu đạm/xơ không còn coi dữ liệu thiếu là đạt tiêu chí. Các nhãn định lượng chỉ dựa trên trường có giá trị thực.
- Xác minh sau sửa: Astro check 517 tệp, 0 lỗi/cảnh báo; build 1.897 trang; QA 1.000 thực phẩm và 447 món đạt; toàn bộ test công cụ và kiểm tra đồng bộ đạt; không có `console.log`, 69 biến CSS được khai báo đầy đủ.

## Rà soát nhãn provenance — 2026-09-16

- Nhãn `source_verified` trên trang chi tiết từng diễn đạt quá mạnh là “Đã đối chiếu nguồn trực tiếp”/“Nguồn chắc”, trong khi trạng thái này có thể chỉ phản ánh việc đối chiếu định danh và nguồn tham chiếu, chưa xác minh toàn bộ từng chất dinh dưỡng. Đã đổi nhãn giao diện thành “Đã đối chiếu định danh và nguồn tham chiếu” và “Nguồn tham chiếu đã đối chiếu” để không hứa quá mức.

## Rà soát hồ sơ bệnh trong thư viện — 2026-09-16

- Hồ sơ đái tháo đường, tăng huyết áp và bệnh thận trước đây chỉ kiểm tag/ngưỡng natri-kali; một mục ước tính hoặc đang chờ duyệt chuyên môn nhưng có số thấp vẫn có thể xuất hiện. Đã yêu cầu đồng thời `source_backed` và trạng thái rà soát đã duyệt (`source_verified`/`reviewed_keep_current`) trước khi đưa vào ba hồ sơ bệnh này. Mục thiếu số hoặc đang chờ chuyên gia sẽ không bị trình bày như lựa chọn lâm sàng.

- Xác minh cuối lượt: Astro check 517 tệp không lỗi; build 1.897 trang; QA 1.000 thực phẩm, 447 món và toàn bộ test công cụ/đồng bộ đạt. Không có `console.log`; 69 biến CSS được tham chiếu đều có khai báo. Các mục chờ duyệt (8 mục) và 14 tên nguồn bất thường + 1 mã nguồn trùng vẫn được giữ trong danh sách unresolved để chuyên gia xử lý, không tự động nâng trạng thái.

## Rà soát hồ sơ bệnh ở trang món ăn — 2026-09-16

- Trang danh sách món ăn vẫn gắn nhanh nhãn ĐTĐ/THA dựa trên tag của công thức, dù phần lớn món là ước tính công thức. Đã yêu cầu món phải có `confidence: high` và nguồn không phải `recipe-estimate-v1` mới được gắn nhãn hoặc xuất hiện trong hai hồ sơ bệnh; món ước tính vẫn tra cứu bình thường ở chế độ chung và hồ sơ giảm cân.

## Hoàn tất vòng rà soát tiếp theo — 2026-09-16

- Đã kiểm tra lại đường xuất dữ liệu và trang tra cứu Bảng thành phần thực phẩm Việt: các dòng tên chỉ còn số hoặc trùng mã được ẩn khỏi danh sách tìm kiếm, nhưng vẫn giữ nguyên trong API gốc để không mất provenance; tên đã có bản sửa chắc chắn chỉ áp dụng ở lớp hiển thị.
- Xác minh hồi quy sau sửa phạm vi card món ăn: Astro check 0 lỗi/cảnh báo; build 1.897 trang; QA 1.000 thực phẩm, 447 món, 38 công cụ và consistency đều đạt.
- Không tự điền 8 mục cần chuyên gia, 14 tên nguồn bất thường hoặc mã nguồn trùng vì chưa có bằng chứng đối chiếu đủ chắc. Các mục này tiếp tục được đánh dấu rõ trên giao diện và trong báo cáo chất lượng để xử lý ở vòng thẩm định nguồn tiếp theo.

## Rà soát phương pháp công cụ — 2026-09-16

- Công cụ “Theo dõi sức khỏe” không có phép tính số học, nhưng trước đây không được mô tả rõ trong thẻ phương pháp. Đã bổ sung logic ghi nhận (thời điểm + chỉ số + đơn vị + ghi chú), xác nhận dữ liệu được giữ nguyên để theo dõi xu hướng và không tự suy diễn chẩn đoán.
- Astro check và toàn bộ test công cụ đạt sau khi bổ sung; các công cụ có công thức tiếp tục hiển thị công thức và nguồn tương ứng.
- Đã bổ sung logic/phép tính minh bạch cho các trang trước đây chỉ có hướng dẫn: tra cứu GI, khẩu phần gia dụng, lọc dữ liệu, đồ uống, tương tác thuốc, checklist, hub đánh giá bữa ăn, mô hình đĩa ăn và nhập thực phẩm đóng gói.

## Rà soát trùng món ăn — 2026-09-16

- Rà soát 447 món bằng chuẩn hóa tên, slug, alias, thành phần và khối lượng khẩu phần; phát hiện 6 bản ghi trùng hoặc bản ghi “phần” sai proxy (chả mực, ếch xào sả ớt, nghêu hấp sả, bánh đúc nóng, bánh bông lan và seed cơm sườn bì chả) và đã loại khỏi nguồn sinh dữ liệu.
- Đổi tên các biến thể dễ gây hiểu nhầm: `Bánh bò (bánh bò hấp)` thành `Bánh bò hấp`, `Xôi mặn (xôi mỡ hành)` thành `Xôi mặn lạp xưởng mỡ hành`, và `Sinh tố dưa hấu tươi` thành `Sinh tố dưa hấu có đường` để phản ánh đúng thành phần.
- Sau xử lý còn 441 món; QA đạt, không còn tên/slug trùng và không có `foodId` hỏng. Các cặp gần giống nhưng khác nguyên liệu hoặc cách chế biến (ví dụ bánh mì thịt–thịt nguội, cá kho–cá kho thơm) được giữ lại như biến thể hợp lệ.
- Bổ sung kiểm tra chữ ký thành phần/khối lượng vào `qa:recipes`; đã tách thành phần đặc trưng cho toàn bộ nhóm bánh còn lại (bánh nậm, ram ít, ít trần, đúc, tằm bì, bánh tráng trộn/nướng). QA hiện không còn nhóm món nào có cùng chữ ký thành phần/khối lượng; các biến thể vẫn được giữ bằng công thức riêng.
- Xác minh hồi quy cuối vòng dữ liệu món: Astro check 517 tệp không lỗi/cảnh báo; QA thực phẩm, toàn bộ test công cụ và kiểm tra nhất quán API đều đạt. Chỉ mục tìm kiếm vẫn gồm 441 món, 375 bài viết, 38 công cụ, 9 hub và 1.000 thực phẩm.

## Audit cuối vòng: y khoa, SEO và build — 2026-09-16

- Quét medical-fact-checker trên 382 tệp: 0 cảnh báo mức critical/high/medium; 368 mục ở mức `review` để chuyên gia xem lại các con số, cách diễn đạt hoặc ngữ cảnh thuốc. Không có trang có rủi ro cao nhưng thiếu cảnh báo an toàn hoặc gợi ý nguồn.
- Rà soát SEO: 437/437 trang dùng `BaseLayout` trực tiếp hoặc thông qua `ArticleLayout`; các trang bài viết không phải là trang thiếu meta như kết quả grep đơn giản có thể gây hiểu nhầm. `@astrojs/sitemap` đã cấu hình với site chuẩn `https://dinh-duong-viet.pages.dev`; không có ảnh raster trong `public/` vượt 500 KB.
- Kiểm tra mã nguồn: không có `console.log` trong `src/`; các biến CSS đang dùng được khai báo trong hệ thống style (kết quả kiểm tra trước đó đã xác nhận 69/69); `git diff --check` chỉ phát hiện cảnh báo chuẩn hóa LF/CRLF của Windows, không có lỗi whitespace.
- Build cuối vòng thành công: 1.891 trang tĩnh, sitemap được tạo, không có lỗi Astro/Vite. QA dữ liệu thực phẩm, món ăn, công cụ và đồng bộ API tiếp tục đạt theo các mục ở trên.
- Các mục `review` y khoa và 8 bản ghi cần chuyên gia vẫn được giữ nguyên trạng thái chờ thẩm định; không tự sửa số liệu khi chưa có nguồn đối chiếu chắc chắn.
- Bổ sung `npm run qa:seo` (`scripts/check-seo.mjs`) để kiểm tra đúng cả `BaseLayout` và `ArticleLayout`, đồng thời xác nhận sitemap và ảnh raster lớn; lần chạy hiện tại đạt 437/437 trang.

## Đối chiếu nguồn ngoài và cập nhật hồ sơ xúc xích — 2026-09-16

- Tra cứu FoodData Central (USDA), cơ sở SR Legacy, xác nhận các bản ghi có trạng thái nấu chín và cơ sở trên 100 g. Đã thay hai ước tính công thức bằng close match có provenance rõ: xúc xích gà dùng FDC 172957 (bratwurst gà, cooked) và xúc xích heo dùng FDC 173876 (pork sausage, fully cooked, unheated).
- Cập nhật macro, chất béo bão hòa, cholesterol, natri, kali, canxi và sắt theo hồ sơ tương ứng; giữ `sourceConfidence: medium` và cờ `candidate_pending_dietitian_review` vì sản phẩm Việt Nam có thể khác công thức/nhãn hàng. Không trình bày hai mục này như khuyến nghị lâm sàng đã xác minh.
- Sau cập nhật: `recipe_estimate` giảm từ 16 xuống 14 trong nhóm 25 hồ sơ chất lượng; số mục cần chuyên gia vẫn là 8 do các close match chưa đại diện duy nhất cho sản phẩm Việt Nam.
- QA sau cập nhật: 1.000 thực phẩm, 441 món, 38 công cụ; không trùng tên/slug, không lỗi mapping hoặc nullability; toàn bộ test công cụ và consistency đạt. Nhóm cooked-high-energy giảm từ 32 xuống 31 nhờ hồ sơ mới.
- Nguồn tham khảo: [USDA FoodData Central](https://fdc.nal.usda.gov/), [tài liệu API FDC](https://fdc.nal.usda.gov/api-spec/fdc_api.html). Các hồ sơ gạo lứt đỏ/đen, lá sách bò, lạp xưởng nướng, thịt hun khói và thịt heo quay vẫn cần nguồn khớp trực tiếp hơn hoặc duyệt chuyên gia.
