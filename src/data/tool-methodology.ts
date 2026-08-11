export type ToolSourceLink = {
  label: string;
  url: string;
};

export type ToolMethodology = {
  slug: string;
  status: string;
  summary: string;
  formulas?: Array<{
    label: string;
    value: string;
  }>;
  guidance?: string[];
  notFor?: string[];
  sources: ToolSourceLink[];
};

export const TOOL_METHODOLOGY_BY_SLUG: Record<string, ToolMethodology> = {
  bmi: {
    slug: "bmi",
    status: "Đã bổ sung phương pháp v1",
    summary:
      "BMI là chỉ số sàng lọc cho người lớn, dùng để đọc cùng vòng eo, thành phần cơ thể và bối cảnh lâm sàng, không dùng như chẩn đoán độc lập.",
    formulas: [
      {
        label: "Công thức",
        value: "BMI = cân nặng (kg) / [chiều cao (m)]²",
      },
      {
        label: "Ngưỡng đang dùng",
        value: "<18.5 gầy, 18.5-24.9 bình thường, 25-29.9 thừa cân, >=30 béo phì",
      },
    ],
    guidance: [
      "Ưu tiên dùng cho người lớn; trẻ em và vị thành niên cần biểu đồ theo tuổi và giới.",
      "Kết quả nên đọc cùng vòng eo nếu nghi ngờ béo bụng hoặc nguy cơ chuyển hóa.",
    ],
    notFor: [
      "Không tự dùng để đặt mục tiêu điều trị cho thai kỳ, trẻ em, vận động viên, người phù hoặc mất cơ.",
    ],
    sources: [
      { label: "CDC - Adult BMI Categories", url: "https://www.cdc.gov/bmi/adult-calculator/bmi-categories.html" },
      { label: "NHLBI - Calculate Your BMI", url: "https://www.nhlbi.nih.gov/calculate-your-bmi" },
    ],
  },
  "chi-so-gi": {
    slug: "chi-so-gi",
    status: "Trang khái niệm v1 có nguồn",
    summary:
      "Trang này giải thích GI như một chỉ dấu tham khảo cho thực phẩm chứa carbohydrate. Nó không phải công cụ chấm điểm cá nhân hay thay thế tư vấn điều trị.",
    guidance: [
      "GI chỉ nên được đọc cùng khẩu phần, lượng carb, cách chế biến và bối cảnh ăn uống thực tế.",
      "Với trẻ em, thai kỳ, bệnh nền hoặc đang dùng thuốc hạ đường huyết, cần ưu tiên câu hỏi lâm sàng hơn là con số GI đơn lẻ.",
    ],
    notFor: [
      "Không dùng GI đơn độc để kết luận món nào 'tốt' hay 'xấu' cho mọi người.",
    ],
    sources: [
      { label: "CDC - Diabetes and Carb Counting", url: "https://www.cdc.gov/diabetes/managing/eat-well/carb-counting.html" },
      { label: "NIDDK - Eating, Diet, & Nutrition for Diabetes", url: "https://www.niddk.nih.gov/health-information/diabetes/overview/eating-diet-nutrition" },
    ],
  },
  "tinh-carb": {
    slug: "tinh-carb",
    status: "Tính carb giáo dục v1",
    summary:
      "Trang này cộng carbohydrate theo thực phẩm/món ăn từ dữ liệu hiện có để hỗ trợ học đếm carb. Nó không đổi thành chế độ điều trị và không dùng như mốc bắt buộc cho mọi bữa ăn.",
    formulas: [
      {
        label: "Quy đổi cốt lõi",
        value: "carb món = carb/100g x khối lượng ăn vào / 100",
      },
      {
        label: "Số phần carb",
        value: "số phần carb ≈ tổng carb / 15 g",
      },
    ],
    guidance: [
      "Cùng một món nhưng khẩu phần khác nhau có thể cho tổng carb rất khác.",
      "Mốc 15 g/phần carb là quy ước giáo dục, không phải mục tiêu bắt buộc cho mọi người.",
    ],
    notFor: [
      "Không dùng số carb này để tự chỉnh insulin hoặc thuốc hạ đường huyết mà chưa được hướng dẫn.",
    ],
    sources: [
      { label: "CDC - Carb Counting", url: "https://www.cdc.gov/diabetes/managing/eat-well/carb-counting.html" },
      { label: "ADA - Carbohydrate Counting", url: "https://diabetes.org/food-nutrition/understanding-carbs/carb-counting" },
    ],
  },
  "tinh-gl-bua-an": {
    slug: "tinh-gl-bua-an",
    status: "Tải lượng đường huyết v1",
    summary:
      "Trang này ước tính GL từ GI và lượng carbohydrate trong bữa ăn. Đây là chỉ số học thuật để so sánh tương đối, không phải dự báo chắc chắn đường huyết cá nhân.",
    formulas: [
      {
        label: "Công thức đang dùng",
        value: "GL = GI x carb (g) / 100",
      },
      {
        label: "Phân loại giáo dục",
        value: "GL thấp ≤ 10, trung bình 11-19, cao ≥ 20",
      },
    ],
    guidance: [
      "GL chỉ có ý nghĩa khi GI và lượng carb cùng được đọc đúng bối cảnh khẩu phần.",
      "Nếu một món không có GI curated, kết quả chỉ nên hiểu là tham khảo rất thận trọng.",
    ],
    notFor: [
      "Không dùng GL để tự đổi thuốc, tự tính ăn bù hoặc thay thế đo đường huyết cá nhân.",
    ],
    sources: [
      { label: "NIDDK - Diabetes and Carb Counting", url: "https://www.niddk.nih.gov/health-information/diabetes/overview/eating-diet-nutrition" },
      { label: "Harvard T.H. Chan - Glycemic Index and Glycemic Load", url: "https://nutritionsource.hsph.harvard.edu/carbohydrates/glycemic-index/" },
    ],
  },
  "tinh-nhu-cau-dam": {
    slug: "tinh-nhu-cau-dam",
    status: "Nhu cầu đạm tham khảo v1",
    summary:
      "Trang này ước tính nhu cầu protein ban đầu theo cân nặng và tình huống phổ thông. Nó chỉ là mốc giáo dục, chưa thay thế chỉ định theo bệnh nền hoặc mục tiêu điều trị.",
    formulas: [
      {
        label: "Quy đổi tham khảo",
        value: "protein/ngày = cân nặng (kg) x mức g/kg theo profile",
      },
    ],
    guidance: [
      "Mức đạm chỉ có ý nghĩa khi đi cùng profile và bối cảnh lâm sàng đúng.",
      "Để đọc thực phẩm, nên tách rõ protein trong khẩu phần với gram thịt/cá/đậu thực tế.",
    ],
    notFor: [
      "Không dùng để tự áp dụng cho suy thận, lọc máu, thai kỳ, bệnh cấp hoặc nuôi ăn y học mà chưa được cá thể hóa.",
    ],
    sources: [
      { label: "NIH/NCBI - Dietary Reference Intakes", url: "https://www.ncbi.nlm.nih.gov/books/NBK610333/" },
      { label: "WHO - Healthy Diet", url: "https://www.who.int/news-room/fact-sheets/detail/healthy-diet" },
    ],
  },
  "doi-don-vi": {
    slug: "doi-don-vi",
    status: "Bộ đổi đơn vị v1 có nguồn",
    summary:
      "Trang này quy đổi các đơn vị thông dụng theo giá trị chuẩn tham khảo. Nó hữu ích để đổi nhanh, nhưng không thay thế việc cân đo thực phẩm thật khi cần độ chính xác cao.",
    formulas: [
      {
        label: "Khối lượng / thể tích / năng lượng",
        value: "Dùng hệ số quy đổi chuẩn giữa g, kg, mg, ml, L, kcal, kJ và các đơn vị U.S. customary",
      },
    ],
    guidance: [
      "Một số quy đổi trong nấu ăn chỉ là xấp xỉ vì độ đầy muỗng/cốc và mật độ thực phẩm khác nhau.",
      "Nếu quy đổi sang kcal, cần phân biệt kcal, Calorie viết hoa C và kJ.",
    ],
    notFor: [
      "Không dùng bộ đổi đơn vị để kết luận dinh dưỡng cá nhân, liều thuốc hay khẩu phần điều trị.",
    ],
    sources: [
      { label: "NIST - Appendix B Conversion Factors", url: "https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors" },
      { label: "NIST - Metric Conversion Card", url: "https://www.nist.gov/pml/owm/metric-si/metric-conversion-card-sp-365" },
    ],
  },
  "nuoc-uong": {
    slug: "nuoc-uong",
    status: "Nhu cầu nước tham khảo v1",
    summary:
      "Trang này ước tính nhu cầu nước uống cho người lớn tương đối ổn định, rồi tự dừng lại khi gặp nhóm cần cá thể hóa. Đây không phải chỉ định dịch hay mục tiêu điều trị.",
    formulas: [
      {
        label: "Logic đang dùng",
        value: "Nhu cầu cơ bản theo cân nặng, sau đó cộng/trừ theo vận động, thời tiết, mồ hôi và bối cảnh sinh lý",
      },
    ],
    guidance: [
      "Kết quả chỉ là mốc để hình dung nhu cầu chung, không phải mục tiêu bắt buộc.",
      "Nhóm có bệnh tim, thận, gan hoặc đang dùng lợi tiểu cần đọc như cảnh báo để hỏi chuyên môn.",
    ],
    notFor: [
      "Không dùng để tự mở rộng hoặc siết dịch ở người bệnh mà chưa có chỉ định.",
    ],
    sources: [
      { label: "NASEM - Dietary Reference Intakes for Water", url: "https://nap.nationalacademies.org/catalog/10925/dietary-reference-intakes-for-water-potassium-sodium-chloride-and-sulfate" },
      { label: "WHO - Healthy Diet", url: "https://www.who.int/news-room/fact-sheets/detail/healthy-diet" },
    ],
  },
  "tinh-nang-luong": {
    slug: "tinh-nang-luong",
    status: "Đã bổ sung phương pháp v1",
    summary:
      "Trang này đang ước tính BMR theo Mifflin-St Jeor rồi nhân hệ số hoạt động để ra TDEE tham khảo ban đầu; cần theo dõi cân nặng và mức vận động thực để hiệu chỉnh.",
    formulas: [
      {
        label: "BMR nam",
        value: "10 x cân nặng (kg) + 6.25 x chiều cao (cm) - 5 x tuổi + 5",
      },
      {
        label: "BMR nữ",
        value: "10 x cân nặng (kg) + 6.25 x chiều cao (cm) - 5 x tuổi - 161",
      },
      {
        label: "TDEE",
        value: "BMR x hệ số hoạt động",
      },
    ],
    guidance: [
      "Dùng như mốc mở đầu cho người trưởng thành tương đối ổn định về sức khỏe.",
      "Khi mục tiêu là thay đổi cân nặng, nên theo dõi lại sau 2-4 tuần thay vì cố giữ cứng một con số.",
    ],
    notFor: [
      "Không dùng để tự kê mức ăn điều trị cho thai kỳ, bệnh cấp, ICU, rối loạn ăn uống, suy dinh dưỡng nặng hoặc vận động viên chuyên biệt.",
    ],
    sources: [
      { label: "NIDDK - Body Weight Planner", url: "https://www.niddk.nih.gov/health-information/weight-management/body-weight-planner" },
      { label: "Dietary Guidelines for Americans 2020-2025", url: "https://www.dietaryguidelines.gov/sites/default/files/2020-12/Dietary_Guidelines_for_Americans_2020-2025.pdf" },
    ],
  },
  "tinh-macro": {
    slug: "tinh-macro",
    status: "Đã bổ sung phương pháp v1",
    summary:
      "Macro ở đây là bước quy đổi giáo dục từ tổng kcal sang gram đạm, tinh bột và béo theo các preset phổ thông, không phải toa điều trị cá nhân.",
    formulas: [
      {
        label: "Quy đổi năng lượng",
        value: "1 g đạm = 4 kcal, 1 g carb = 4 kcal, 1 g béo = 9 kcal",
      },
      {
        label: "Cách tính gram",
        value: "gram = (tổng kcal x tỷ lệ %) / hệ số kcal mỗi gram",
      },
    ],
    guidance: [
      "Các preset hiện giữ trong vùng phổ thông để dễ học cách phân bổ khẩu phần.",
      "Đạm thực phẩm và gram thịt/cơm là hai khái niệm khác nhau; cần quy đổi qua bảng thành phần.",
    ],
    notFor: [
      "Không dùng preset này thay cho chỉ định macro trong bệnh thận, đái tháo đường phức tạp, nuôi ăn y học hoặc chế độ ăn điều trị chuyên biệt.",
    ],
    sources: [
      { label: "NIH/NCBI - Dietary Reference Intakes", url: "https://www.ncbi.nlm.nih.gov/books/NBK610333/" },
      { label: "Dietary Guidelines for Americans 2020-2025", url: "https://www.dietaryguidelines.gov/sites/default/files/2020-12/Dietary_Guidelines_for_Americans_2020-2025.pdf" },
    ],
  },
  "tinh-calo-tieu-thu": {
    slug: "tinh-calo-tieu-thu",
    status: "Đã bổ sung phương pháp v1",
    summary:
      "Kcal vận động đang được ước tính theo mức MET tham khảo của từng hoạt động và cân nặng cơ thể; sai số tăng khi cường độ thực tế khác mô tả trong danh sách.",
    formulas: [
      {
        label: "Công thức đang dùng",
        value: "kcal ≈ MET x 3.5 x cân nặng (kg) / 200 x số phút",
      },
      {
        label: "Ý nghĩa MET",
        value: "1 MET là mức tiêu hao tương đối khi nghỉ; hoạt động càng nặng thì MET càng cao",
      },
    ],
    guidance: [
      "Phù hợp để so sánh tương đối giữa các buổi vận động hoặc để hiểu cường độ gần đúng.",
      "Không nên coi đây là số 'ăn bù' sau tập hoặc mục tiêu đốt mỡ chính xác.",
    ],
    notFor: [
      "Không dùng thay cho đơn tập luyện cá thể hóa ở người có bệnh tim mạch, hô hấp, cơ xương khớp hoặc triệu chứng khi gắng sức.",
    ],
    sources: [
      { label: "CDC - Physical Activity Guidelines for Adults", url: "https://www.cdc.gov/physical-activity-basics/guidelines/adults.html" },
      { label: "Compendium of Physical Activities", url: "https://pacompendium.com/" },
    ],
  },
  "so-sanh-thuc-pham": {
    slug: "so-sanh-thuc-pham",
    status: "So sánh thực phẩm v1",
    summary:
      "Trang này đặt 2-4 thực phẩm cạnh nhau theo 100 g để xem khác biệt dinh dưỡng. Nó giúp đọc dữ liệu chứ không xếp hạng tốt-xấu tuyệt đối cho mọi người.",
    guidance: [
      "Nên so cùng đơn vị và cùng mức dữ liệu gốc, đặc biệt khi một bên là thực phẩm sống còn một bên là món chế biến.",
      "Các vi chất có thể thay đổi mạnh theo nguồn, chế biến và độ ẩm của thực phẩm.",
    ],
    notFor: [
      "Không dùng bảng so sánh này để tự chỉnh thuốc, tự đặt chế độ điều trị hoặc quy đổi sang khẩu phần lâm sàng mà chưa cá thể hóa.",
    ],
    sources: [
      { label: "USDA FoodData Central", url: "https://fdc.nal.usda.gov/" },
      { label: "WHO - Healthy Diet", url: "https://www.who.int/news-room/fact-sheets/detail/healthy-diet" },
    ],
  },
  "so-sanh-bua-an": {
    slug: "so-sanh-bua-an",
    status: "So sánh bữa ăn v1",
    summary:
      "Trang này so các bữa ăn/món ăn theo khẩu phần đã chọn để nhìn nhanh khác biệt về năng lượng và macro. Nó hỗ trợ lựa chọn thực đơn, không thay thế tư vấn dinh dưỡng cá thể.",
    guidance: [
      "Cùng một món nhưng khẩu phần khác nhau có thể đảo thứ tự so sánh, nên cần xem cả gram thật.",
      "Nếu một bữa có nhiều nước chấm, topping hoặc món phụ, giá trị hiển thị vẫn chỉ là ước tính theo dữ liệu đầu vào.",
    ],
    notFor: [
      "Không dùng để tự đổi thuốc, tự tính bù năng lượng hay áp cho người bệnh cần thực đơn điều trị chuyên biệt.",
    ],
    sources: [
      { label: "USDA FoodData Central", url: "https://fdc.nal.usda.gov/" },
      { label: "NIH/NCBI - Dietary Reference Intakes", url: "https://www.ncbi.nlm.nih.gov/books/NBK610333/" },
    ],
  },
  "khau-phan-don-gian": {
    slug: "khau-phan-don-gian",
    status: "Khẩu phần tham khảo v1",
    summary:
      "Trang này chỉ minh họa cách gọi khẩu phần bằng chén, muỗng, lát, miếng hoặc ly để người đọc hình dung nhanh. Nó không phải bảng khẩu phần điều trị và không đủ để cá thể hóa.",
    guidance: [
      "Cùng một tên khẩu phần có thể khác nhau giữa gia đình, quán ăn và nhãn sản phẩm.",
      "Các ví dụ nên được đọc như ngôn ngữ giao tiếp nhanh, không phải mốc tuyệt đối.",
    ],
    notFor: [
      "Không dùng để tự chốt lượng ăn cho bệnh thận, tim mạch, đái tháo đường, thai kỳ hoặc trẻ em.",
    ],
    sources: [
      { label: "USDA FoodData Central", url: "https://fdc.nal.usda.gov/" },
      { label: "CDC - Carb Counting", url: "https://www.cdc.gov/diabetes/managing/eat-well/carb-counting.html" },
    ],
  },
  "khau-phan-viet-clinical": {
    slug: "khau-phan-viet-clinical",
    status: "Đánh giá khẩu phần v1",
    summary:
      "Trang này so khẩu phần món Việt theo dữ liệu có sẵn để xem năng lượng và macro ở mức giáo dục. Nó vẫn cần đọc cùng cờ an toàn vì không thay thế đánh giá lâm sàng.",
    formulas: [
      {
        label: "Quy đổi lõi",
        value: "chỉ số khẩu phần = dữ liệu/100g x gram thực ăn / 100",
      },
    ],
    guidance: [
      "Giá trị hiển thị phụ thuộc dữ liệu món, công thức và khối lượng đã nhập.",
      "Nên xem cùng cờ cần cá thể hóa, nhất là khi có bệnh nền hoặc thuốc đang dùng.",
    ],
    notFor: [
      "Không dùng để tự ra phác đồ ăn điều trị hoặc tự chỉnh thuốc, insulin hay lợi tiểu.",
    ],
    sources: [
      { label: "USDA FoodData Central", url: "https://fdc.nal.usda.gov/" },
      { label: "NIH/NCBI - Dietary Reference Intakes", url: "https://www.ncbi.nlm.nih.gov/books/NBK610333/" },
    ],
  },
  "ti-le-mo-co-the": {
    slug: "ti-le-mo-co-the",
    status: "Trang định hướng v1 có nguồn",
    summary:
      "Trang này chưa phải máy tính % mỡ. Mục tiêu hiện tại là giúp người đọc hiểu vì sao các công thức và thiết bị ước tính thành phần cơ thể có thể cho kết quả khác nhau.",
    guidance: [
      "Các phương pháp chu vi cơ thể, cân điện trở sinh học và kẹp mỡ đều có sai số và phụ thuộc cách đo.",
      "Nếu cần theo dõi thay đổi theo thời gian, nên giữ cùng một phương pháp và điều kiện đo thay vì so chéo quá nhiều thiết bị.",
    ],
    notFor: [
      "Không dùng riêng % mỡ ước tính để tự chẩn đoán, tự đặt mục tiêu điều trị hoặc đánh giá thai kỳ, trẻ em, vận động viên và người có phù.",
    ],
    sources: [
      { label: "NIH/NCBI - Body Composition In The Military Services", url: "https://www.ncbi.nlm.nih.gov/books/NBK235939/" },
      { label: "PMC - Circumference-Based Predictions of Body Fat Revisited", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9008774/" },
    ],
  },
  "muc-tieu-can-nang": {
    slug: "muc-tieu-can-nang",
    status: "Bộ lọc an toàn v1 có nguồn",
    summary:
      "Tool này đang làm nhiệm vụ phân tầng an toàn và cho khoảng đạm tham khảo khi đủ điều kiện. Các số kcal, deficit hoặc surplus vẫn chủ động khóa ở v1.",
    guidance: [
      "BMI và các cờ lâm sàng chỉ dùng để sàng lọc xem có nên dừng tự dùng công cụ hay không.",
      "Khi chỉ còn nhóm tham khảo cơ bản, khoảng đạm hiển thị vẫn là khoảng giáo dục chứ không phải toa cá nhân.",
    ],
    notFor: [
      "Không dùng tool này để tự đặt tốc độ giảm cân, tự chỉnh thuốc hoặc tự xây chế độ điều trị cho bệnh nền phức tạp.",
    ],
    sources: [
      { label: "CDC - Adult BMI Categories", url: "https://www.cdc.gov/bmi/adult-calculator/bmi-categories.html" },
      { label: "NIDDK - Body Weight Planner", url: "https://www.niddk.nih.gov/health-information/weight-management/body-weight-planner" },
      { label: "NIH/NCBI - Dietary Reference Intakes", url: "https://www.ncbi.nlm.nih.gov/books/NBK610333/" },
    ],
  },
  "muc-tieu-dinh-duong": {
    slug: "muc-tieu-dinh-duong",
    status: "Bộ lọc an toàn v1 có nguồn",
    summary:
      "Tool này ưu tiên phân tầng an toàn trước, sau đó chỉ bật khoảng đạm tham khảo khi bối cảnh đủ đơn giản. Năng lượng và macro cá nhân vẫn chưa được mở ở v1.",
    guidance: [
      "Mục tiêu hiện tại là chặn bớt các tình huống dễ bị hiểu quá tay, nhất là khi có CKD, lọc máu, thai kỳ, sụt cân nhanh hoặc thuốc phức tạp.",
      "Nếu mục tiêu là ăn lành mạnh hoặc duy trì, nên dùng thêm các tool bữa ăn và nhật ký thay vì cố ép mọi thứ về một con số.",
    ],
    notFor: [
      "Không dùng tool này như hệ thống kê đơn kcal, macro, dịch hay muối cho người bệnh.",
    ],
    sources: [
      { label: "NIH/NCBI - Dietary Reference Intakes", url: "https://www.ncbi.nlm.nih.gov/books/NBK610333/" },
      { label: "WHO - Healthy Diet", url: "https://www.who.int/news-room/fact-sheets/detail/healthy-diet" },
      { label: "NIDDK - Body Weight Planner", url: "https://www.niddk.nih.gov/health-information/weight-management/body-weight-planner" },
    ],
  },
  "nuoc-muoi-mon-an": {
    slug: "nuoc-muoi-mon-an",
    status: "Tra nhanh món ăn v1 có nguồn",
    summary:
      "Các con số trên trang là khoảng muối ước tính theo món, nước dùng, nước chấm và khẩu phần phổ biến. Trang không thay thế nhật ký natri cá nhân hoặc tư vấn bệnh lý.",
    formulas: [
      {
        label: "Quy đổi đang dùng",
        value: "5 g muối tương đương khoảng 2000 mg natri; 1 g muối tương đương khoảng 400 mg natri",
      },
    ],
    guidance: [
      "Phù hợp để nhận diện nhanh món nào thường đội muối lên vì nước dùng, nước mắm, đồ kho hoặc thực phẩm chế biến sẵn.",
      "Món cùng tên vẫn có thể lệch nhiều nếu khác quán, khác cách nêm hoặc ăn kèm nhiều nước chấm.",
    ],
    notFor: [
      "Không dùng tool này để tự đặt mức natri, kali, phospho hoặc lượng nước cho CKD, suy tim, xơ gan và các bệnh cần theo dõi dịch.",
    ],
    sources: [
      { label: "WHO - Sodium Reduction", url: "https://www.who.int/news-room/fact-sheets/detail/sodium-reduction" },
      { label: "WHO - Healthy Diet", url: "https://www.who.int/news-room/fact-sheets/detail/healthy-diet" },
    ],
  },
  "duong-do-uong": {
    slug: "duong-do-uong",
    status: "Tra cứu đồ uống v1 có nguồn",
    summary:
      "Trang này dùng dữ liệu khẩu phần hiển thị để giúp đọc nhãn và so sánh gram đường trong đồ uống phổ biến. Không phải mọi gram đường ở đây đều là added sugar chính xác theo từng hãng.",
    guidance: [
      "Ưu tiên đọc cùng dung tích thật, topping, đá, mức đường chọn thêm và Nutrition Facts khi có.",
      "Hữu ích nhất khi dùng để so sánh cùng một nhóm đồ uống, ví dụ trà sữa với nước ngọt hoặc cà phê sữa.",
    ],
    notFor: [
      "Không dùng tool này để tự kết luận kiểm soát đường huyết cá nhân hoặc thay đổi thuốc chỉ dựa trên một đồ uống.",
    ],
    sources: [
      { label: "WHO - Sugars intake for adults and children", url: "https://www.who.int/publications/i/item/9789241549028" },
      { label: "WHO - Healthy Diet", url: "https://www.who.int/news-room/fact-sheets/detail/healthy-diet" },
      { label: "MedlinePlus - Food Labeling", url: "https://medlineplus.gov/foodlabeling.html" },
    ],
  },
  "dinh-duong-thai-ky": {
    slug: "dinh-duong-thai-ky",
    status: "Khung an toàn v1 có nguồn",
    summary:
      "Trang thai kỳ hiện đóng vai trò định hướng an toàn và chuẩn bị câu hỏi khi đi khám; chưa đưa số kcal, macro hay vi chất cá nhân hóa.",
    guidance: [
      "Đọc như checklist để nhận diện tình huống cần bác sĩ sản khoa hoặc chuyên gia dinh dưỡng thai kỳ.",
      "Các quyết định về tăng cân thai kỳ, bổ sung sắt, acid folic, canxi hoặc kiểm soát đường huyết phải bám hồ sơ thai và xét nghiệm.",
    ],
    notFor: [
      "Không tự dùng tool này để tăng giảm ăn mạnh, tự bổ sung liều cao hoặc thay đổi thuốc trong thai kỳ.",
    ],
    sources: [
      { label: "WHO - Healthy Diet", url: "https://www.who.int/news-room/fact-sheets/detail/healthy-diet" },
      { label: "WHO - Breastfeeding", url: "https://www.who.int/health-topics/breastfeeding" },
    ],
  },
  "nhu-cau-dinh-duong-tre-em": {
    slug: "nhu-cau-dinh-duong-tre-em",
    status: "Khung an toàn v1 có nguồn",
    summary:
      "Trang trẻ em hiện chỉ là điểm vào giáo dục và định hướng; nhu cầu thật cần khóa theo tuổi, giới, tăng trưởng, bệnh nền và kiểu nuôi dưỡng.",
    guidance: [
      "Ưu tiên đọc cùng biểu đồ tăng trưởng, tiền sử ăn uống và mốc phát triển của trẻ.",
      "Trẻ 6-23 tháng cần tiếp cận theo nguyên tắc ăn bổ sung, đa dạng thực phẩm và tần suất bữa phù hợp tuổi.",
    ],
    notFor: [
      "Không dùng như bảng số cá nhân hóa cho trẻ suy dinh dưỡng, dị ứng, bệnh mạn, sinh non hoặc đang điều trị nội trú.",
    ],
    sources: [
      { label: "WHO - Infant and Young Child Feeding", url: "https://www.who.int/news-room/fact-sheets/detail/infant-and-young-child-feeding" },
      { label: "NIH/NCBI - Dietary Reference Intakes Reference Tables", url: "https://www.ncbi.nlm.nih.gov/books/NBK208874/" },
    ],
  },
  "theo-doi-suc-khoe": {
    slug: "theo-doi-suc-khoe",
    status: "Nhật ký an toàn v1 có nguồn",
    summary:
      "Trang này là nơi ghi và xuất lại số liệu do người dùng nhập. V1 không phân tầng nguy cơ và không diễn giải chỉ số thay cho bác sĩ.",
    guidance: [
      "Phù hợp để gom dữ liệu trước buổi khám hoặc theo dõi xu hướng cá nhân theo hướng dẫn sẵn có.",
      "Khi chỉ số bất thường lặp lại hoặc kèm triệu chứng, nên liên hệ cơ sở y tế thay vì chờ đủ nhiều lần nhập.",
    ],
    notFor: [
      "Không dùng nhật ký này như hệ thống chẩn đoán, cảnh báo cấp cứu hoặc quyết định đổi thuốc.",
    ],
    sources: [
      { label: "CDC - About High Blood Pressure", url: "https://www.cdc.gov/high-blood-pressure/about/index.html" },
      { label: "NIDDK - Diabetes Tests and Diagnosis", url: "https://www.niddk.nih.gov/health-information/diabetes/overview/tests-diagnosis" },
    ],
  },
  "tuong-tac-thuoc": {
    slug: "tuong-tac-thuoc",
    status: "Công cụ an toàn v1 có nguồn",
    summary:
      "Trang tương tác thuốc hiện chỉ là khung sàng lọc câu hỏi cần mang đi khám hoặc hỏi dược sĩ; v1 không chấm mức độ tương tác cá nhân.",
    guidance: [
      "Ưu tiên mang đủ tên thuốc, hàm lượng, giờ uống, thực phẩm bổ sung và bệnh nền khi cần kiểm tra tương tác.",
      "Nếu có chóng mặt, chảy máu, khó thở, mẩn nặng hoặc lơ mơ sau khi dùng thuốc, cần liên hệ y tế ngay.",
    ],
    notFor: [
      "Không dùng trang này để tự phối hợp thuốc mới, tự ngừng thuốc hoặc tự đổi liều.",
    ],
    sources: [
      { label: "MedlinePlus - Drug Reactions and Interactions", url: "https://medlineplus.gov/drugreactions.html" },
      { label: "DailyMed - Official Drug Labels", url: "https://dailymed.nlm.nih.gov/dailymed/" },
    ],
  },
  "tuong-tac-thuoc-thuc-pham": {
    slug: "tuong-tac-thuoc-thuc-pham",
    status: "Công cụ an toàn v1 có nguồn",
    summary:
      "Trang tương tác thuốc - thực phẩm hiện chỉ giúp định hướng câu hỏi về thời điểm dùng thuốc, bưởi, rượu bia, thảo dược và thực phẩm bổ sung.",
    guidance: [
      "Cần hỏi lại với toa thuốc thật hoặc nhãn chính thức nếu thuốc có cửa sổ điều trị hẹp.",
      "Đặc biệt thận trọng khi có warfarin, insulin, thuốc hạ đường huyết, statin, thuốc chống động kinh hoặc thực phẩm bổ sung nhiều thành phần.",
    ],
    notFor: [
      "Không dùng trang này để tự kết luận an toàn khi phối hợp thuốc với đồ uống, thực phẩm chức năng hay rượu bia.",
    ],
    sources: [
      { label: "MedlinePlus - Medicines", url: "https://medlineplus.gov/medicines.html" },
      { label: "MedlinePlus - Drug Reactions and Interactions", url: "https://medlineplus.gov/drugreactions.html" },
    ],
  },
};

export function getToolMethodology(pathname: string) {
  if (!pathname.startsWith("/cong-cu/")) return null;
  const slug = pathname.split("/").filter(Boolean)[1];
  if (!slug) return null;
  return TOOL_METHODOLOGY_BY_SLUG[slug] ?? null;
}
