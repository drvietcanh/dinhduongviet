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
