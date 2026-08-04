// Practical Q&A for each article
// Format: "Ăn được không? → Bao nhiêu? → Thay bằng gì? → Khi nào hỏi bác sĩ?"

export interface PracticalQA {

  canEat?: string;       // Ăn được không?
  howMuch?: string;      // Ăn bao nhiêu là vừa?
  swapWith?: string;     // Nên thay bằng gì?
  whenDoctor?: string;   // Khi nào cần hỏi bác sĩ?
  summary?: string;      // Tóm tắt ngắn (1 câu)
}

const qa: Record<string, PracticalQA> = {
  "bun-pho-mi-duong-huyet": {
    canEat: "Có, cả bún, phở, mì, miến đều được — nhưng ảnh hưởng đường huyết khác nhau từng loại.",
    howMuch: "Mỗi bữa: 1 tô nhỏ (~200-250g bún/phở). Phở ít tăng đường hơn bún và mì.",
    swapWith: "Phở tái (ít béo) thay phở bò viên. Miến dong thay miến gạo. Bún gạo lứt (nếu có) thay bún trắng.",
    whenDoctor: "Nếu đường huyết sau ăn bún/phở tăng nhiều hơn ăn cơm — cần điều chỉnh thuốc.",
    summary: "Phở (chỉ số đường huyết trung bình) tốt hơn bún và mì (chỉ số cao). Miến dong ít tăng đường nhất.",
  },
  "ca-phe-uong-sao-cho-loi": {
    canEat: "Có, cà phê có lợi cho sức khỏe nếu uống đúng cách: không đường, không sữa đặc.",
    howMuch: "1-2 ly/ngày (mỗi ly 200-250ml). Uống trước 15h để không ảnh hưởng giấc ngủ.",
    swapWith: "Cà phê đen thay cà phê sữa đá. Trà xanh thay cà phê nếu nhạy cảm caffeine.",
    whenDoctor: "Nếu trào ngược dạ dày, mất ngủ, hồi hộp sau uống — hoặc đang dùng thuốc huyết áp.",
    summary: "Cà phê đen (không đường, không sữa đặc) 1-2 ly/ngày có lợi: chống oxy hóa, giảm nguy cơ đái tháo đường.",
  },
  "tra-sua-goc-nhin-dinh-duong": {
    canEat: "Có thể, nhưng 1 ly trà sữa thường có 40-55g đường — gấp đôi giới hạn khuyến nghị cả ngày.",
    howMuch: "Tối đa 1 ly/tuần, chọn size nhỏ (M), ít đường (30%), không trân châu hoặc topping.",
    swapWith: "Trà tắc (chanh) không đường. Cà phê đen. Nước lọc là lựa chọn tốt nhất.",
    whenDoctor: "Nếu đã bị đái tháo đường, tiền đái tháo đường, hoặc mỡ máu — nên tránh hoàn toàn.",
    summary: "1 ly trà sữa = 8-11 muỗng cà phê đường. Uống không quá 1 ly/tuần, chọn ít đường.",
  },
  "nuoc-ep-khong-nhu-trai-cay": {
    canEat: "Có, nhưng nước ép thiếu chất xơ và cô đặc đường. 1 ly nước cam = 4 quả cam.",
    howMuch: "Tối đa 1 ly nhỏ/ngày (150ml). Tốt nhất: ăn nguyên quả thay vì ép. Nếu ép: uống cả bã.",
    swapWith: "Ăn trái cây nguyên quả thay nước ép. Nước lọc + lát chanh/quất thay nước ép.",
    whenDoctor: "Nếu đái tháo đường hoặc tiền đái tháo đường — nước ép làm tăng đường huyết nhanh hơn ăn quả.",
    summary: "Nước ép không bằng trái cây nguyên quả. Thiếu xơ, đường cô đặc, dễ nạp quá nhiều đường.",
  },
  "dinh-duong-viem-gan": {
    canEat: "Có, cần đủ đạm, vitamin B, nghệ, trà xanh. Tuyệt đối không rượu bia.",
    howMuch: "Đạm: 1-1.2g/kg/ngày. Hạn chế mỡ bão hòa, đồ chiên rán. Uống đủ nước.",
    swapWith: "Cá thay thịt đỏ. Dầu olive thay mỡ. Nghệ + tiêu đen (tăng hấp thu curcumin).",
    whenDoctor: "Nếu vàng da, men gan cao >2 lần, hoặc đã xơ gan — cần bác sĩ theo dõi sát.",
    summary: "Viêm gan: đủ đạm, nghệ, trà xanh. Tuyệt đối tránh rượu. Kiểm tra men gan định kỳ.",
  },
  "soi-than-dinh-duong": {
    canEat: "Có, nhưng chế độ ăn tùy loại sỏi. Quan trọng nhất: uống 2.5-3 lít nước/ngày.",
    howMuch: "Nước: 2.5-3 lít/ngày. Canxi: không cắt — ăn đủ canxi (1000mg/ngày) giúp ngừa sỏi.",
    swapWith: "Sữa tươi (không sợ tạo sỏi — sự thật ngược lại: canxi từ thực phẩm GIÚP ngừa sỏi). Giảm muối, giảm đạm động vật.",
    whenDoctor: "Nếu đau quặn thận, tiểu ra máu, hoặc sỏi >5mm khó tự đào thải.",
    summary: "Sỏi thận: uống nhiều nước là quan trọng nhất. Canxi từ thực phẩm KHÔNG gây sỏi — giúp ngừa sỏi.",
  },
  "men-gan-cao": {
    canEat: "Có, men gan cao thường do gan nhiễm mỡ, rượu hoặc thuốc. Không cần kiêng đặc biệt.",
    howMuch: "Giảm đường, tinh bột trắng. Tuyệt đối không rượu. Giảm cân nếu thừa cân (giảm 5-10% cân).",
    swapWith: "Cà phê đen (1-2 ly/ngày — nghiên cứu cho thấy tốt cho men gan). Trà xanh. Nghệ.",
    whenDoctor: "Nếu men gan >2 lần giới hạn trên, hoặc có vàng da, vàng mắt — cần khám ngay.",
    summary: "Men gan cao: không rượu, giảm đường, giảm cân. Cà phê đen có thể giúp cải thiện men gan.",
  },
  "trái-cây-người-tiểu-đường": {
    canEat: "Có, người đái tháo đường ăn trái cây được — chọn loại ít ngọt và kiểm soát lượng.",
    howMuch: "150-200g trái cây/bữa (bằng 1 nắm tay). Tối đa 2 phần/ngày. Ăn sau bữa chính 30-60 phút.",
    swapWith: "Ổi, thanh long, bưởi, táo, lê, dâu tây — ít ngọt (GI thấp). Tránh: sầu riêng, mít, nhãn, vải, chuối chín.",
    whenDoctor: "Nếu đường huyết tăng >10 mmol/L sau ăn trái cây, hoặc HbA1c >7%.",
    summary: "Người đái tháo đường vẫn ăn trái cây: ổi, thanh long, bưởi, táo — 150-200g/bữa, 2 phần/ngày.",
  },

  "dai-thao-duong": {
    canEat: "Có, người đái tháo đường VẪN ăn được cơm, bún, phở, bánh mì — nhưng cần kiểm soát lượng và chọn loại.",
    howMuch: "Mỗi bữa: 1 chén cơm vừa (lưng chén) hoặc 1 tô bún/phở nhỏ. Tổng tinh bột: 160-180g/ngày chia đều 3 bữa.",
    swapWith: "Gạo lứt thay 50% gạo trắng. Bánh mì nguyên cám thay bánh mì trắng. Khoai lang thay cơm 1 bữa/tuần.",
    whenDoctor: "Nếu đường huyết tăng >13 mmol/L sau ăn dù đã kiểm soát, hoặc HbA1c >7% dù ăn đúng — cần bác sĩ điều chỉnh thuốc.",
    summary: "Người đái tháo đường không cần bỏ cơm, chỉ cần giảm lượng và kiểm soát thứ tự ăn (rau → đạm → tinh bột).",
  },
  "tien-dai-thao-duong": {
    canEat: "Có, nhưng đây là giai đoạn rất nên thay đổi sớm để cải thiện đường huyết và giảm nguy cơ tiến triển.",
    howMuch: "Tinh bột: 50% đĩa từ rau, 25% tinh bột, 25% đạm. Mỗi bữa 1 chén cơm là vừa.",
    swapWith: "Gạo lứt, yến mạch, khoai lang. Hạn chế cơm trắng, bánh mì trắng, xôi, nước ngọt.",
    whenDoctor: "Nếu đường huyết đói >6.5 mmol/L dù đã thay đổi ăn uống 3 tháng, hoặc có tiền sử gia đình đái tháo đường.",
    summary: "Tiền đái tháo đường có thể cải thiện rõ ở nhiều người. Giảm 5-7% cân nặng và vận động đều giúp giảm nguy cơ tiến triển.",
  },
  "gout": {
    canEat: "Có, nhưng chọn đạm thân thiện: trứng, sữa, đậu hũ. Hạn chế thịt đỏ, nội tạng.",
    howMuch: "Đạm: 1-1.2g/kg/ngày (người 60kg = 60-70g đạm). Thịt/cá: 100-150g/bữa, 3-4 bữa/tuần.",
    swapWith: "Đậu hũ thay thịt. Trứng thay cá. Sữa thay nước hầm xương. Sữa giúp giảm acid uric.",
    whenDoctor: "Nếu đau khớp cấp dù đã kiêng, hoặc acid uric >500 µmol/L, hoặc có tophi.",
    summary: "Người gout không cần kiêng đạm hoàn toàn — chỉ cần chọn đúng loại và uống 2-3 lít nước/ngày.",
  },
  "suy-than": {
    canEat: "Tùy giai đoạn — KHÔNG tự kiêng. Cần xét nghiệm máu và hỏi bác sĩ trước.",
    howMuch: "Chỉ giảm đạm khi có chỉ định. Lượng đạm tùy giai đoạn (thường 0.6-0.8g/kg/ngày ở giai đoạn 3-4).",
    swapWith: "Không tự thay đổi. Nếu cần giảm kali: luộc rau 2 lần nước, bỏ nước. Nếu cần giảm phốt pho: hạn chế sữa, hạt.",
    whenDoctor: "Luôn luôn hỏi bác sĩ trước khi thay đổi chế độ ăn nếu bạn bị suy thận. Tự kiêng quá mức có thể gây suy dinh dưỡng.",
    summary: "Suy thận mỗi người mỗi khác — không áp dụng chế độ ăn của người khác. Cần có chỉ định từ bác sĩ.",
  },
  "tang-huyet-ap": {
    canEat: "Có, nhưng cần giảm muối. Chú ý muối ẩn trong nước chấm, bánh mì, mì gói.",
    howMuch: "Muối: dưới 5g/ngày (lý tưởng 2g để hạ huyết áp). Tương đương 1 muỗng cà phê/phở.",
    swapWith: "Nước mắm pha 1:4 thay nước mắm nguyên chất. Gia vị thơm (hành, tỏi, gừng, sả) thay muối.",
    whenDoctor: "Nếu huyết áp >160/100 dù đã giảm muối, hoặc phù chân, hoặc suy tim kèm theo.",
    summary: "Giảm muối là quan trọng nhất. Pha loãng nước mắm 1:4. Dùng gia vị thay muối.",
  },
  "gan-nhiem-mo": {
    canEat: "Có. Nguyên tắc: giảm đường, tinh bột trắng, mỡ bão hòa. Tăng chất xơ, omega-3.",
    howMuch: "Giảm 500 kcal/ngày so với nhu cầu. Hạn chế tinh bột trắng còn 1 chén/bữa. Đường: dưới 25g/ngày.",
    swapWith: "Gạo lứt thay gạo trắng. Cá béo (cá hồi, cá thu) thay thịt đỏ. Dầu olive thay mỡ động vật.",
    whenDoctor: "Nếu men gan tăng >2 lần chỉ số bình thường, hoặc siêu âm gan nhiễm mỡ độ 2-3.",
    summary: "Gan nhiễm mỡ có thể cải thiện ở nhiều người khi giảm đường, giảm tinh bột tinh chế, tăng rau và vận động đều.",
  },
  "dau-da-day": {
    canEat: "Có, nhưng món phải mềm, dễ tiêu, chia 5 bữa nhỏ thay 3 bữa lớn.",
    howMuch: "Mỗi bữa: 1 chén cơm mềm + 1 phần đạm nhỏ (trứng, cá hấp, đậu phụ). Không ăn quá no.",
    swapWith: "Cơm nát thay cơm khô. Cá hấp thay cá chiên. Trái cây không chua (chuối, đu đủ) thay cam, chanh.",
    whenDoctor: "Nếu đau nhiều, sụt cân không rõ nguyên nhân, hoặc đi ngoài phân đen — nội soi ngay.",
    summary: "Đau dạ dày: ăn ít một, nhai kỹ, không cay chua, không nằm ngay sau ăn.",
  },
  "beo-phi": {
    canEat: "Có, cần giảm 300-500 kcal/ngày, ưu tiên đạm và rau để no lâu.",
    howMuch: "Calo: nữ 1200-1500, nam 1500-1800 kcal/ngày. Tinh bột: 1 chén/bữa. Đạm: 20-25g/bữa.",
    swapWith: "Rau thay 1/2 tinh bột. Nước lọc thay nước ngọt. Hạt thay bánh kẹo.",
    whenDoctor: "Nếu BMI >35 có kèm bệnh nền, hoặc đã thất bại với nhiều chế độ ăn — cần can thiệp chuyên sâu.",
    summary: "Giảm cân lành mạnh: giảm từ từ, không nhịn bữa, tập thể dục 30 phút/ngày.",
  },
  "thieu-mau": {
    canEat: "Có, ăn thực phẩm giàu sắt kết hợp vitamin C để tăng hấp thu.",
    howMuch: "Thịt đỏ: 2-3 bữa 100g/tuần. Rau xanh đậm: 300g/ngày. Trứng: 3-4 quả/tuần.",
    swapWith: "Thịt bò thay thịt heo. Rau dền, rau ngót thay rau cải. Bổ sung cam/ổi sau bữa ăn nhiều sắt.",
    whenDoctor: "Nếu thiếu máu nặng (Hb <90 g/L) hoặc uống sắt 3 tháng không cải thiện — cần soi dạ dày.",
    summary: "Thiếu máu: ăn sắt + vitamin C. Uống sắt nếu bác sĩ chỉ định. Không tự ý uống sắt nếu chưa rõ nguyên nhân.",
  },
  "roi-loan-mo-mau": {
    canEat: "Có, tập trung vào: cá béo, chất xơ hòa tan, dầu thực vật. Hạn chế mỡ bão hòa, đường.",
    howMuch: "Chất béo bão hòa: dưới 7% năng lượng (~16g/ngày với 2000 kcal). Chất xơ: 25-30g/ngày.",
    swapWith: "Cá hồi/cá thu thay thịt đỏ. Dầu olive thay mỡ heo. Yến mạch thay gạo trắng. Bơ thay bơ/margarine.",
    whenDoctor: "Nếu LDL >4.1 mmol/L, hoặc triglyceride >5.6 mmol/L (nguy cơ viêm tụy), hoặc có tiền sử nhồi máu cơ tim.",
    summary: "Mỡ máu cao đáp ứng tốt với ăn uống: giảm mỡ bão hòa, tăng omega-3 và chất xơ.",
  },
  "loang-xuong": {
    canEat: "Có, cần canxi + vitamin D + vitamin K2 + đạm — 4 yếu tố không thể thiếu.",
    howMuch: "Canxi: 1000-1200mg/ngày (tương đương 3-4 ly sữa/ngày). Vitamin D: 800-2000 IU/ngày.",
    swapWith: "Sữa tươi thay sữa hạt (giàu canxi hơn). Rau xanh thay canxi từ sữa. Tắm nắng sáng để tổng hợp vitamin D.",
    whenDoctor: "Nếu đã gãy xương dù chỉ ngã nhẹ, hoặc T-score < -2.5 (loãng xương), hoặc tuổi >65.",
    summary: "Loãng xương không chỉ cần canxi — cần vitamin D, K2, đạm và vận động chịu lực.",
  },
  "benh-tim-mach": {
    canEat: "Có, chế độ ăn lành mạnh giúp giảm nguy cơ nhồi máu cơ tim và đột quỵ.",
    howMuch: "Muối: dưới 5g/ngày. Chất béo bão hòa: dưới 7% năng lượng. Chất xơ: 25-30g/ngày.",
    swapWith: "Cá béo 3 bữa/tuần thay thịt. Dầu olive thay mỡ. Rau thay 1/2 tinh bột.",
    whenDoctor: "Nếu có đau ngực, khó thở, phù chân — hoặc đã có tiền sử nhồi máu cơ tim, đột quỵ.",
    summary: "Tim mạch: giảm muối, tăng omega-3, tập thể dục đều đặn. Không hút thuốc.",
  },
  "dinh-duong-chay": {
    canEat: "Có, người ăn chay hoàn toàn có thể đủ chất nếu biết cách kết hợp.",
    howMuch: "Đạm: 1-1.2g/kg/ngày. Kết hợp gạo + đậu (đạm hoàn chỉnh). B12: bắt buộc bổ sung.",
    swapWith: "Đậu hũ, tempeh thay thịt. Sữa đậu nành bổ sung canxi thay sữa bò. Hạt, ngũ cốc nguyên hạt.",
    whenDoctor: "Nếu mệt mỏi kéo dài, thiếu máu, rụng tóc — cần xét nghiệm sắt, B12, vitamin D.",
    summary: "Ăn chay đúng cách: đa dạng, kết hợp gạo-đậu, bổ sung B12, kiểm tra máu định kỳ.",
  },
  "ung-thu": {
    canEat: "Có, dinh dưỡng tốt giúp chịu đựng hóa/xạ trị tốt hơn và phục hồi nhanh hơn.",
    howMuch: "Đạm: 1.2-2g/kg/ngày (cao hơn bình thường). Năng lượng: tăng thêm 300-500 kcal/ngày.",
    swapWith: "Sữa dinh dưỡng (Ensure/Prosure) giữa bữa nếu ăn ít. Súp, cháo thịt băm nếu khó nuốt.",
    whenDoctor: "Suy dinh dưỡng nặng (sụt >10% cân trong 3 tháng), hoặc không ăn được qua miệng.",
    summary: "Người ung thư cần ăn đủ đạm và năng lượng — không kiêng khem quá mức trừ khi có chỉ định.",
  },
  "tao-bon-ibs": {
    canEat: "Có, tăng chất xơ và nước là chìa khóa. Với IBS: thử Low FODMAP.",
    howMuch: "Chất xơ: 25-30g/ngày (tăng từ từ). Nước: 2-2.5 lít/ngày. Với IBS: thử 2 tuần Low FODMAP.",
    swapWith: "Rau luộc thay rau sống nếu đầy hơi. Chuối chín thay táo (ít FODMAP). Sữa chua thay sữa tươi.",
    whenDoctor: "Nếu sụt cân không rõ nguyên nhân, đi ngoài ra máu, hoặc táo bón >3 tuần không đỡ.",
    summary: "Táo bón: nước + chất xơ + vận động. IBS: thử Low FODMAP, ghi nhật ký ăn uống.",
  },
  "phu-nu-mang-thai": {
    canEat: "Có, cần nhiều hơn: folate, sắt, canxi, DHA. Không ăn sống, tái.",
    howMuch: "Năng lượng: thêm 300 kcal/ngày (tam cá nguyệt 2-3). Sắt: 27mg/ngày. Canxi: 1000mg/ngày. DHA: 200mg/ngày.",
    swapWith: "Cá nhỏ (cá basa, cá chép) thay cá lớn (tránh thủy ngân). Sữa bầu thay sữa thường.",
    whenDoctor: "Nếu nghén nặng không ăn được, tăng cân quá ít (<5kg suốt thai kỳ), hoặc có bệnh nền.",
    summary: "Mang thai: ăn đa dạng, đủ sắt-canxi-DHA, kiểm soát cân nặng, không ăn đồ sống/nướng cháy.",
  },
  "dinh-duong-tre-em": {
    canEat: "Có, trẻ em cần dinh dưỡng đầy đủ để phát triển thể chất và trí não.",
    howMuch: "Tùy tuổi: trẻ 1-3 tuổi: 1000-1300 kcal/ngày. 4-8 tuổi: 1400-1600 kcal. 9-13: 1800-2200 kcal.",
    swapWith: "Hạn chế bánh kẹo, nước ngọt. Thay bằng trái cây, sữa chua, các loại hạt.",
    whenDoctor: "Nếu trẻ suy dinh dưỡng (dưới -2SD chiều cao/cân nặng), béo phì, hoặc kén ăn quá mức.",
    summary: "Trẻ em: đa dạng thực phẩm, hạn chế đồ ngọt, khuyến khích ăn rau. Không ép ăn.",
  },
  "dinh-duong-nguoi-cao-tuoi": {
    canEat: "Có, người già cần chú ý đủ đạm (chống yếu cơ), canxi (chống loãng xương), B12.",
    howMuch: "Đạm: 1-1.2g/kg/ngày (người 50kg = 50-60g đạm). Canxi: 1200mg/ngày. Nước: 1.5-2 lít.",
    swapWith: "Thịt băm/cá dầm thay thịt nguyên miếng. Sữa thay một bữa nếu ăn ít. Cháo/súp tăng đạm.",
    whenDoctor: "Nếu sụt cân >5% trong 3 tháng, chán ăn kéo dài, yếu cơ nhiều (khó đứng dậy từ ghế).",
    summary: "Người già: tăng đạm mỗi bữa (trứng, sữa, thịt băm), nấu mềm, chia nhiều bữa nhỏ.",
  },
  "dinh-duong-sau-phau-thuat": {
    canEat: "Có, cần tăng đạm, vitamin C, kẽm để lành vết thương nhanh.",
    howMuch: "Đạm: 1.5-2g/kg/ngày (người 55kg = 80-110g đạm). Vitamin C: 200-500mg/ngày. Kẽm: 15-30mg/ngày.",
    swapWith: "Sữa dinh dưỡng giữa bữa. Cháo thịt băm trứng. Súp gà nấm. Nước cam/ổi sau bữa ăn.",
    whenDoctor: "Nếu vết mổ không lành, sốt, sụt cân nhiều sau mổ, hoặc không ăn được qua đường miệng.",
    summary: "Sau mổ: ăn giàu đạm (trứng, sữa, thịt băm) và vitamin C (ổi, cam, bông cải). Tránh đồ sống.",
  },
  "dinh-duong-viem-khop": {
    canEat: "Có, thực phẩm chống viêm giúp giảm đau. Omega-3, nghệ, gừng, vitamin D.",
    howMuch: "Cá béo 3 bữa/tuần. Nghệ: 1-2g/ngày (kèm tiêu đen để hấp thu). Vitamin D: 2000 IU/ngày.",
    swapWith: "Cá hồi/cá thu thay thịt đỏ. Dầu olive thay mỡ thực vật. Gừng tươi thay gia vị chế biến sẵn.",
    whenDoctor: "Nếu đau khớp nặng, sưng đỏ, cứng khớp buổi sáng kéo dài >30 phút.",
    summary: "Viêm khớp: ăn cá béo, nghệ, gừng. Giảm thịt đỏ, đường, đồ chế biến sẵn. Tập vận động nhẹ.",
  },
  "dinh-duong-suy-tim": {
    canEat: "Có, nhưng cần kiểm soát muối <1.5g/ngày và theo dõi lượng dịch.",
    howMuch: "Muối: dưới 1.5g/ngày (rất nghiêm ngặt). Nước: tùy chỉ định — thường 1-1.5 lít/ngày. Cân nặng mỗi ngày.",
    swapWith: "Pha loãng nước mắm 1:5. Dùng gia vị thơm thay muối. Canh nhạt + rau luộc không muối.",
    whenDoctor: "Nếu phù chân tăng, khó thở khi nằm, tăng cân >2kg trong 2 ngày — đi cấp cứu.",
    summary: "Suy tim: muối cực ít, cân mỗi ngày, báo bác sĩ nếu tăng cân đột ngột.",
  },
  "dot-quy-dinh-duong": {
    canEat: "Có, sau đột quỵ cần chế độ ăn giảm muối, tăng kali, omega-3. Chú ý nuốt khó.",
    howMuch: "Muối: dưới 5g/ngày (lý tưởng 2g). Kali: 3500-4700mg/ngày (rau, chuối, khoai tây). Chất xơ: 25g/ngày.",
    swapWith: "Thức ăn mềm thay thức ăn cứng nếu khó nuốt. Cá béo thay thịt. Rau củ nghiền thay rau nguyên miếng.",
    whenDoctor: "Ngay sau đột quỵ — cần đánh giá nuốt trước khi ăn. Sau đó tái khám định kỳ.",
    summary: "Sau đột quỵ: giảm muối, ăn mềm nếu khó nuốt, kiểm soát huyết áp và đường huyết.",
  },
  "trung-thuc-pham": {
    canEat: "Có, trứng là thực phẩm giàu dinh dưỡng, không gây hại tim mạch nếu ăn vừa phải.",
    howMuch: "Người khỏe: 1-2 quả/ngày. Người mỡ máu/đái tháo đường: 3-4 quả/tuần. Không cần bỏ lòng đỏ.",
    swapWith: "Trứng gà thả vườn (giàu omega-3 hơn). Lòng trắng trứng nếu cần thêm đạm mà ít béo.",
    whenDoctor: "Nếu đã bị nhồi máu cơ tim hoặc đặt stent — hỏi bác sĩ về lượng trứng phù hợp.",
    summary: "Trứng không gây hại tim mạch. Người khỏe ăn 1-2 quả/ngày là an toàn.",
  },
  "com-trang-tieu-duong": {
    canEat: "Có, người đái tháo đường VẪN ăn cơm trắng được. Chỉ cần giảm lượng và thay đổi cách ăn.",
    howMuch: "Mỗi bữa: 1 lưng chén cơm (khoảng 80-100g gạo chín), không quá 1.5 chén/ngày.",
    swapWith: "Trộn 50% gạo lứt + 50% gạo trắng. Hoặc thay 1 bữa cơm bằng khoai lang, yến mạch.",
    whenDoctor: "Nếu đường huyết sau ăn >13 mmol/L dù chỉ ăn 1 chén cơm.",
    summary: "Không cần bỏ cơm — chỉ cần giảm 1/2 lượng cũ và ăn rau trước cơm.",
  },
  "nuoc-ham-xuong-canxi": {
    canEat: "Có, nhưng đừng kỳ vọng nó bổ xương. Nước hầm xương có rất ít canxi.",
    howMuch: "Ăn được, nhưng canxi thực tế chỉ ~5-10mg/ly (sữa có 300mg/ly). Không thay thế sữa.",
    swapWith: "Sữa, sữa chua, cá nhỏ ăn cả xương (cá kho), đậu phụ, rau xanh đậm — giàu canxi hơn gấp 10-30 lần.",
    whenDoctor: "Nếu loãng xương — cần canxi từ thực phẩm và vitamin D, không từ nước hầm xương.",
    summary: "Nước hầm xương rất ít canxi. Canxi thực sự đến từ sữa, cá nhỏ, đậu phụ, rau xanh.",
  },
  "sua-ai-nen-uong": {
    canEat: "Có, hầu hết mọi người đều nên uống sữa. Người không dung nạp lactose chọn sữa không lactose.",
    howMuch: "Người lớn: 300-500ml/ngày (1.5-2 ly). Trẻ em: 500-700ml/ngày. Người già: 300-500ml/ngày.",
    swapWith: "Sữa tươi không đường (đạm 3.5g/100ml). Sữa đậu nành bổ sung canxi (nếu dị ứng sữa bò). Sữa chua (nếu đầy hơi).",
    whenDoctor: "Nếu đầy hơi, tiêu chảy sau uống sữa (có thể không dung nạp lactose) — hỏi bác sĩ.",
    summary: "Sữa tốt nhất cho người Việt: sữa tươi không đường. Sữa hạt không thay thế sữa bò về đạm và canxi.",
  },
};

export default qa;
