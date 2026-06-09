#!/usr/bin/env python3
"""Step 2: Update ban-do-benh.astro - add all missing disease articles."""
import re

with open('src/pages/ban-do-benh.astro', 'r', encoding='utf-8') as f:
    t = f.read()

# ===========================================
# 1) EXPAND da-lieu group (replace the 1-article group)
# ===========================================
old_da_lieu = """  {
    specialty: "da-lieu",
    id: "da-lieu",
    emoji: "🧴",
    name: "Vảy nến & bệnh da tự miễn",
    foundation: [
      { slug: "dinh-duong-benh-vay-nen-psoriasis", title: "Vảy nến — Ăn chống viêm giảm bong vảy", desc: "Bài nền tảng" },
    ],
    faq: null,
    menus: [],
  },"""

new_da_lieu = """  {
    specialty: "da-lieu",
    id: "da-lieu",
    emoji: "🧴",
    name: "Vảy nến • Eczema • Xơ cứng bì • Mề đay",
    foundation: [
      { slug: "dinh-duong-benh-vay-nen-psoriasis", title: "Vảy nến — Ăn chống viêm giảm bong vảy", desc: "Bài nền tảng" },
      { slug: "dinh-duong-eczema-viem-da-co-dia", title: "Eczema & Viêm da cơ địa — Giảm ngứa", desc: "Bài nền tảng" },
      { slug: "dinh-duong-xo-cung-bi", title: "Xơ cứng bì — Dinh dưỡng cho bệnh mô liên kết", desc: "Bài nền tảng" },
      { slug: "me-day-man-dinh-duong", title: "Mề đay mạn — Dinh dưỡng giảm ngứa", desc: "Bài nền tảng" },
    ],
    faq: null,
    menus: [],
  },"""

assert old_da_lieu in t, "ERROR: Could not find old da-lieu group"
t = t.replace(old_da_lieu, new_da_lieu)

# ===========================================
# 2) EXPAND ho-hap group (add viêm xoang, cảm cúm)
# ===========================================
old_ho_hap = """  {
    specialty: "ho-hap",
    id: "ho-hap",
    emoji: "🫁",
    name: "COPD • Hen suyễn • Viêm mũi dị ứng",
    foundation: [
      { slug: "dinh-duong-benh-phoi-copd", title: "Bệnh phổi (COPD & viêm phế quản mạn)", desc: "Bài nền tảng" },
      { slug: "dinh-duong-hen-suyen", title: "Hen suyễn — Ăn gì giảm viêm đường thở?", desc: "Bài nền tảng" },
      { slug: "dinh-duong-viem-mui-di-ung", title: "Viêm mũi dị ứng", desc: "Bài nền tảng" },
    ],
    faq: null,
    menus: [],
  },"""

new_ho_hap = """  {
    specialty: "ho-hap",
    id: "ho-hap",
    emoji: "🫁",
    name: "COPD • Hen suyễn • Viêm mũi • Viêm xoang",
    foundation: [
      { slug: "dinh-duong-benh-phoi-copd", title: "Bệnh phổi (COPD & viêm phế quản mạn)", desc: "Bài nền tảng" },
      { slug: "dinh-duong-hen-suyen", title: "Hen suyễn — Ăn gì giảm viêm đường thở?", desc: "Bài nền tảng" },
      { slug: "dinh-duong-viem-mui-di-ung", title: "Viêm mũi dị ứng", desc: "Bài nền tảng" },
      { slug: "dinh-duong-viem-xoang", title: "Viêm xoang — Dinh dưỡng giảm viêm", desc: "Bài nền tảng" },
      { slug: "om-sot-cam-cum", title: "Ốm sốt, cảm cúm — Ăn gì mau khỏi?", desc: "Bài nền tảng" },
    ],
    faq: null,
    menus: [],
  },"""

assert old_ho_hap in t, "ERROR: Could not find old ho-hap group"
t = t.replace(old_ho_hap, new_ho_hap)

# ===========================================
# 3) EXPAND huyet-hoc: add hemophilia & viêm mạch
# ===========================================
# Add a new group for hemophilia/viêm mạch under huyet-hoc, after lupus group

old_lupus_end = """  {
    specialty: "huyet-hoc",
    id: "lupus",
    emoji: "🦋",
    name: "Lupus ban đỏ & bệnh tự miễn",
    foundation: [
      { slug: "dinh-duong-lupus-ban-do", title: "Lupus ban đỏ hệ thống", desc: "Bài nền tảng" },
    ],
    faq: null,
    menus: [],
  },"""

new_lupus_end = """  {
    specialty: "huyet-hoc",
    id: "lupus",
    emoji: "🦋",
    name: "Lupus ban đỏ & bệnh tự miễn",
    foundation: [
      { slug: "dinh-duong-lupus-ban-do", title: "Lupus ban đỏ hệ thống", desc: "Bài nền tảng" },
    ],
    faq: null,
    menus: [],
  },
  {
    specialty: "huyet-hoc",
    id: "hemophilia",
    emoji: "🩸",
    name: "Rối loạn đông máu • Hemophilia • Viêm mạch",
    foundation: [
      { slug: "dinh-duong-benh-thien-sach-hemophilia", title: "Hemophilia — Dinh dưỡng bảo vệ khớp & cơ", desc: "Bài nền tảng" },
      { slug: "viem-mach-dinh-duong", title: "Viêm mạch — Dinh dưỡng giảm viêm mạch máu", desc: "Bài nền tảng" },
    ],
    faq: null,
    menus: [],
  },"""

assert old_lupus_end in t, "ERROR: Could not find old lupus_end group"
t = t.replace(old_lupus_end, new_lupus_end)

# ===========================================
# 4) NỘI TIẾT: add Addison & cường cận giáp
# ===========================================
# Add after tuyến giáp group

old_tuyen_giap_end = """  {
    specialty: "noi-tiet",
    id: "tuyen-giap",
    emoji: "🦋",
    name: "Tuyến giáp • Basedow • Suy giáp • PCOS",
    foundation: [
      { slug: "dinh-duong-basedow-cuong-giap", title: "Basedow & Cường giáp", desc: "Bài nền tảng" },
      { slug: "dinh-duong-suy-giap", title: "Suy giáp — Dinh dưỡng kém năng tuyến giáp", desc: "Bài nền tảng" },
      { slug: "dinh-duong-pcos-buong-trung-da-nang", title: "PCOS — Dinh dưỡng cải thiện nội tiết", desc: "Bài nền tảng" },
    ],
    faq: { href: "/hoi-dap#tuyen-giap", label: "Cường giáp có cần ăn nhiều hơn không?" },
    menus: [],
  },"""

new_tuyen_giap_end = """  {
    specialty: "noi-tiet",
    id: "tuyen-giap",
    emoji: "🦋",
    name: "Tuyến giáp • Basedow • Suy giáp • PCOS",
    foundation: [
      { slug: "dinh-duong-basedow-cuong-giap", title: "Basedow & Cường giáp", desc: "Bài nền tảng" },
      { slug: "dinh-duong-suy-giap", title: "Suy giáp — Dinh dưỡng kém năng tuyến giáp", desc: "Bài nền tảng" },
      { slug: "dinh-duong-pcos-buong-trung-da-nang", title: "PCOS — Dinh dưỡng cải thiện nội tiết", desc: "Bài nền tảng" },
    ],
    faq: { href: "/hoi-dap#tuyen-giap", label: "Cường giáp có cần ăn nhiều hơn không?" },
    menus: [],
  },
  {
    specialty: "noi-tiet",
    id: "thuong-than-can-giap",
    emoji: "🦋",
    name: "Tuyến thượng thận • Cận giáp",
    foundation: [
      { slug: "benh-addison-suy-thuong-than", title: "Addison — Suy thượng thận & chế độ ăn", desc: "Bài nền tảng" },
      { slug: "cuong-can-giap", title: "Cường cận giáp — Dinh dưỡng cân bằng canxi", desc: "Bài nền tảng" },
    ],
    faq: null,
    menus: [],
  },"""

assert old_tuyen_giap_end in t, "ERROR: Could not find old tuyen-giap group"
t = t.replace(old_tuyen_giap_end, new_tuyen_giap_end)

# ===========================================
# 5) THẦN KINH: add trầm cảm
# ===========================================
old_than_kinh_end = """  {
    specialty: "than-kinh",
    id: "dot-quy",
    emoji: "🧠",
    name: "Đột quỵ • Alzheimer • Parkinson • Giấc ngủ",
    foundation: [
      { slug: "dot-quy-dinh-duong", title: "Dinh dưỡng dự phòng & phục hồi sau đột quỵ", desc: "Bài nền tảng" },
      { slug: "dinh-duong-alzheimer-sa-sut-tri-tue", title: "Alzheimer & Sa sút trí tuệ", desc: "Bài nền tảng" },
      { slug: "dinh-duong-parkinson", title: "Bệnh Parkinson", desc: "Bài nền tảng" },
      { slug: "thuc-pham-giac-ngu", title: "Ăn uống ảnh hưởng giấc ngủ thế nào?", desc: "Bài nền tảng" },
      { slug: "dinh-duong-thuc-khuya", title: "Dinh dưỡng cho người hay thức khuya", desc: "Bài nền tảng" },
    ],
    faq: null,
    menus: [],
  },"""

new_than_kinh_end = """  {
    specialty: "than-kinh",
    id: "dot-quy",
    emoji: "🧠",
    name: "Đột quỵ • Alzheimer • Parkinson • Giấc ngủ",
    foundation: [
      { slug: "dot-quy-dinh-duong", title: "Dinh dưỡng dự phòng & phục hồi sau đột quỵ", desc: "Bài nền tảng" },
      { slug: "dinh-duong-alzheimer-sa-sut-tri-tue", title: "Alzheimer & Sa sút trí tuệ", desc: "Bài nền tảng" },
      { slug: "dinh-duong-parkinson", title: "Bệnh Parkinson", desc: "Bài nền tảng" },
      { slug: "thuc-pham-giac-ngu", title: "Ăn uống ảnh hưởng giấc ngủ thế nào?", desc: "Bài nền tảng" },
      { slug: "dinh-duong-thuc-khuya", title: "Dinh dưỡng cho người hay thức khuya", desc: "Bài nền tảng" },
      { slug: "dinh-duong-tram-cam", title: "Trầm cảm — Dinh dưỡng kết nối ruột-não", desc: "Bài nền tảng" },
    ],
    faq: null,
    menus: [],
  },"""

assert old_than_kinh_end in t, "ERROR: Could not find old than-kinh group"
t = t.replace(old_than_kinh_end, new_than_kinh_end)

# ===========================================
# 6) THẬN: add thận IgA
# ===========================================
old_than_end = """  {
    specialty: "than-tiet-nieu",
    id: "than",
    emoji: "🫘",
    name: "Suy thận • Bệnh thận mạn (CKD)",
    foundation: [
      { slug: "suy-than", title: "Suy thận — Chế độ ăn cho người bệnh thận", desc: "Bài nền tảng" },
      { slug: "dinh-duong-benh-than-man-ckd", title: "Bệnh thận mạn (CKD)", desc: "Bài nền tảng" },
      { slug: "canh-bao-hieu-lam-suy-than-kieng", title: "Người suy thận không tự ý kiêng kali, phốt pho", desc: "Đừng tin ngay" },
      { slug: "phu-chan-giam-muoi", title: "Bị phù, suy thận — Có cần giảm muối?", desc: "Bài nền tảng" },
    ],
    faq: { href: "/hoi-dap#than", label: "Suy thận có phải kiêng đạm hoàn toàn?" },
    menus: [],
  },"""

new_than_end = """  {
    specialty: "than-tiet-nieu",
    id: "than",
    emoji: "🫘",
    name: "Suy thận • CKD • Thận IgA",
    foundation: [
      { slug: "suy-than", title: "Suy thận — Chế độ ăn cho người bệnh thận", desc: "Bài nền tảng" },
      { slug: "dinh-duong-benh-than-man-ckd", title: "Bệnh thận mạn (CKD)", desc: "Bài nền tảng" },
      { slug: "benh-than-iga-dinh-duong", title: "Bệnh thận IgA — Dinh dưỡng bảo vệ cầu thận", desc: "Bài nền tảng" },
      { slug: "canh-bao-hieu-lam-suy-than-kieng", title: "Người suy thận không tự ý kiêng kali, phốt pho", desc: "Đừng tin ngay" },
      { slug: "phu-chan-giam-muoi", title: "Bị phù, suy thận — Có cần giảm muối?", desc: "Bài nền tảng" },
    ],
    faq: { href: "/hoi-dap#than", label: "Suy thận có phải kiêng đạm hoàn toàn?" },
    menus: [],
  },"""

assert old_than_end in t, "ERROR: Could not find old than group"
t = t.replace(old_than_end, new_than_end)

# ===========================================
# 7) TIÊU HÓA: add Wilson, đau dạ dày nên ăn gì, vitamin K, tiêu chảy
# ===========================================
# Add Wilson to gan group
old_gan_end = """  {
    specialty: "tieu-hoa",
    id: "gan",
    emoji: "🫁",
    name: "Gan nhiễm mỡ • Men gan cao • Viêm gan • Xơ gan",
    foundation: [
      { slug: "gan-nhiem-mo", title: "Gan nhiễm mỡ — Ăn gì, kiêng gì?", desc: "Bài nền tảng" },
      { slug: "men-gan-cao", title: "Men gan cao — Nên ăn gì, kiêng gì?", desc: "Bài nền tảng" },
      { slug: "dinh-duong-viem-gan", title: "Dinh dưỡng bảo vệ gan — Viêm gan", desc: "Bài nền tảng" },
      { slug: "dinh-duong-xo-gan", title: "Xơ gan — dinh dưỡng kéo dài bù trừ", desc: "Bài nền tảng" },
      { slug: "sai-lam-gan-nhiem-mo-an-mo", title: "Gan nhiễm mỡ không chỉ do ăn mỡ", desc: "Hiểu đúng" },
      { slug: "gan-nhiem-mo-nguoi-gay", title: "Gan nhiễm mỡ ở người gầy", desc: "Hiểu đúng" },
      { slug: "canh-bao-hieu-lam-gan-bo-gan", title: "Gan nhiễm mỡ không phải cứ uống thuốc bổ gan", desc: "Đừng tin ngay" },
      { slug: "dinh-duong-viem-tuy", title: "Viêm tụy — Dinh dưỡng giúp tụy nghỉ ngơi", desc: "Bài nền tảng" },
    ],
    faq: { href: "/hoi-dap#gan", label: "Gan nhiễm mỡ có phải do ăn mỡ?" },
    menus: [
      { slug: "thuc-don-gan-nhiem-mo", title: "Thực đơn cơ bản" },
      { slug: "thuc-don-gan-nhiem-mo-ban-ron", title: "Bản đi làm" },
      { slug: "thuc-don-gan-nhiem-mo-binh-dan", title: "Bản bình dân" },
      { slug: "thuc-don-gan-nhiem-mo-nguoi-gia", title: "Bản người lớn tuổi" },
    ],
  },"""

new_gan_end = """  {
    specialty: "tieu-hoa",
    id: "gan",
    emoji: "🫁",
    name: "Gan nhiễm mỡ • Men gan cao • Viêm gan • Xơ gan",
    foundation: [
      { slug: "gan-nhiem-mo", title: "Gan nhiễm mỡ — Ăn gì, kiêng gì?", desc: "Bài nền tảng" },
      { slug: "men-gan-cao", title: "Men gan cao — Nên ăn gì, kiêng gì?", desc: "Bài nền tảng" },
      { slug: "dinh-duong-viem-gan", title: "Dinh dưỡng bảo vệ gan — Viêm gan", desc: "Bài nền tảng" },
      { slug: "dinh-duong-xo-gan", title: "Xơ gan — dinh dưỡng kéo dài bù trừ", desc: "Bài nền tảng" },
      { slug: "benh-wilson-dinh-duong", title: "Bệnh Wilson — Dinh dưỡng hạn chế đồng", desc: "Bài nền tảng" },
      { slug: "sai-lam-gan-nhiem-mo-an-mo", title: "Gan nhiễm mỡ không chỉ do ăn mỡ", desc: "Hiểu đúng" },
      { slug: "gan-nhiem-mo-nguoi-gay", title: "Gan nhiễm mỡ ở người gầy", desc: "Hiểu đúng" },
      { slug: "canh-bao-hieu-lam-gan-bo-gan", title: "Gan nhiễm mỡ không phải cứ uống thuốc bổ gan", desc: "Đừng tin ngay" },
      { slug: "dinh-duong-viem-tuy", title: "Viêm tụy — Dinh dưỡng giúp tụy nghỉ ngơi", desc: "Bài nền tảng" },
    ],
    faq: { href: "/hoi-dap#gan", label: "Gan nhiễm mỡ có phải do ăn mỡ?" },
    menus: [
      { slug: "thuc-don-gan-nhiem-mo", title: "Thực đơn cơ bản" },
      { slug: "thuc-don-gan-nhiem-mo-ban-ron", title: "Bản đi làm" },
      { slug: "thuc-don-gan-nhiem-mo-binh-dan", title: "Bản bình dân" },
      { slug: "thuc-don-gan-nhiem-mo-nguoi-gia", title: "Bản người lớn tuổi" },
    ],
  },"""

assert old_gan_end in t, "ERROR: Could not find old gan group"
t = t.replace(old_gan_end, new_gan_end)

# Add to da-day group: "đau dạ dày nên ăn gì"
old_da_day_end = """  {
    specialty: "tieu-hoa",
    id: "da-day",
    emoji: "😣",
    name: "Dạ dày • Trào ngược • Viêm loét",
    foundation: [
      { slug: "dau-da-day", title: "Đau dạ dày — Thực đơn cho người viêm loét", desc: "Bài nền tảng" },
      { slug: "dinh-duong-da-day-trao-nguoc", title: "Trào ngược dạ dày thực quản (GERD)", desc: "Bài nền tảng" },
      { slug: "dinh-duong-benh-da-day-nen-an-gi", title: "Đau dạ dày — Ăn gì để nhanh lành?", desc: "Bài nền tảng" },
      { slug: "trao-nguoc-da-day", title: "Trào ngược — nên ăn gì, kiêng gì?", desc: "Bài nền tảng" },
      { slug: "trao-nguoc-ban-dem", title: "Trào ngược ban đêm", desc: "Bài chuyên sâu" },
      { slug: "day-bung-sau-an", title: "Hay đầy bụng sau ăn", desc: "Bài nền tảng" },
      { slug: "o-nong-nong-rat-nguc", title: "Ợ nóng, nóng rát ngực — 5 thói quen cần sửa", desc: "Bài nền tảng" },
    ],
    faq: { href: "/hoi-dap#da-day", label: "Đau dạ dày có cần kiêng chua?" },
    menus: [
      { slug: "thuc-don-da-day", title: "Thực đơn mềm" },
      { slug: "thuc-don-da-day-ban-ron", title: "Bản đi làm" },
      { slug: "thuc-don-da-day-binh-dan", title: "Bản bình dân" },
      { slug: "thuc-don-da-day-nguoi-gia", title: "Bản người lớn tuổi" },
    ],
  },"""

# Already has "dinh-duong-benh-da-day-nen-an-gi" - great

# Add to dai-trang group: vitamin K, tiêu chảy
old_dai_trang_end = """  {
    specialty: "tieu-hoa",
    id: "dai-trang",
    emoji: "🔬",
    name: "Viêm đại tràng • IBS • Táo bón",
    foundation: [
      { slug: "viem-dai-trang-tieu-hoa", title: "Viêm đại tràng — Ăn sao cho đỡ đầy bụng?", desc: "Bài nền tảng" },
      { slug: "dinh-duong-hoi-chung-tieu-hoa-ibs", title: "Hội chứng ruột kích thích (IBS)", desc: "Bài nền tảng" },
      { slug: "tao-bon-ibs", title: "Táo bón & IBS", desc: "Bài nền tảng" },
      { slug: "dinh-duong-benh-tri", title: "Dinh dưỡng cho người bị bệnh trĩ", desc: "Bài nền tảng" },
      { slug: "probiotic-va-duong-ruot", title: "Probiotic & Prebiotic — Lợi khuẩn đường ruột", desc: "Bài nền tảng" },
    ],
    faq: { href: "/hoi-dap#tieu-hoa", label: "Táo bón có phải chỉ do thiếu rau?" },
    menus: [],
  },"""

new_dai_trang_end = """  {
    specialty: "tieu-hoa",
    id: "dai-trang",
    emoji: "🔬",
    name: "Viêm đại tràng • IBS • Táo bón • Tiêu chảy",
    foundation: [
      { slug: "viem-dai-trang-tieu-hoa", title: "Viêm đại tràng — Ăn sao cho đỡ đầy bụng?", desc: "Bài nền tảng" },
      { slug: "dinh-duong-hoi-chung-tieu-hoa-ibs", title: "Hội chứng ruột kích thích (IBS)", desc: "Bài nền tảng" },
      { slug: "tao-bon-ibs", title: "Táo bón & IBS", desc: "Bài nền tảng" },
      { slug: "dinh-duong-benh-tri", title: "Dinh dưỡng cho người bị bệnh trĩ", desc: "Bài nền tảng" },
      { slug: "probiotic-va-duong-ruot", title: "Probiotic & Prebiotic — Lợi khuẩn đường ruột", desc: "Bài nền tảng" },
      { slug: "thuoc-chi-dinh-vitamin-k", title: "Thuốc chỉ định vitamin K & chế độ ăn", desc: "Bài nền tảng" },
      { slug: "tieu-chay-o-nguoi-lon", title: "Tiêu chảy ở người lớn — Bù nước & phục hồi", desc: "Bài nền tảng" },
      { slug: "tieu-chay-mat-nuoc", title: "Tiêu chảy mất nước — Dinh dưỡng bù điện giải", desc: "Bài nền tảng" },
    ],
    faq: { href: "/hoi-dap#tieu-hoa", label: "Táo bón có phải chỉ do thiếu rau?" },
    menus: [],
  },"""

assert old_dai_trang_end in t, "ERROR: Could not find old dai-trang group"
t = t.replace(old_dai_trang_end, new_dai_trang_end)

# ===========================================
# 8) TIM MẠCH: add "sau nhồi máu cơ tim"
# ===========================================
old_tim_mach_end = """  {
    specialty: "tim-mach",
    id: "mo-mau-suy-tim",
    emoji: "❤️",
    name: "Mỡ máu • Suy tim • Bệnh mạch vành",
    foundation: [
      { slug: "roi-loan-mo-mau", title: "Rối loạn mỡ máu — Ăn gì để giảm mỡ máu?", desc: "Bài nền tảng" },
      { slug: "benh-tim-mach", title: "Dinh dưỡng cho người bệnh tim mạch", desc: "Bài nền tảng" },
      { slug: "dinh-duong-suy-tim", title: "Suy tim — Ăn gì để tim khỏe?", desc: "Bài nền tảng" },
      { slug: "che-do-trung-hai-viem-khop-tim-mach", title: "Chế độ ăn Địa Trung Hải cho tim mạch", desc: "Chế độ ăn" },
      { slug: "thuc-don-mo-mau", title: "Thực đơn 1 ngày cho người mỡ máu cao", desc: "Thực đơn" },
    ],
    faq: { href: "/hoi-dap#tim-mach", label: "Mỡ máu có phải do ăn mỡ không?" },
    menus: [],
  },"""

new_tim_mach_end = """  {
    specialty: "tim-mach",
    id: "mo-mau-suy-tim",
    emoji: "❤️",
    name: "Mỡ máu • Suy tim • Nhồi máu cơ tim",
    foundation: [
      { slug: "roi-loan-mo-mau", title: "Rối loạn mỡ máu — Ăn gì để giảm mỡ máu?", desc: "Bài nền tảng" },
      { slug: "benh-tim-mach", title: "Dinh dưỡng cho người bệnh tim mạch", desc: "Bài nền tảng" },
      { slug: "dinh-duong-suy-tim", title: "Suy tim — Ăn gì để tim khỏe?", desc: "Bài nền tảng" },
      { slug: "dinh-duong-sau-nhau-mau-co-tim", title: "Sau nhồi máu cơ tim — Phục hồi & dự phòng", desc: "Bài nền tảng" },
      { slug: "che-do-trung-hai-viem-khop-tim-mach", title: "Chế độ ăn Địa Trung Hải cho tim mạch", desc: "Chế độ ăn" },
      { slug: "thuc-don-mo-mau", title: "Thực đơn 1 ngày cho người mỡ máu cao", desc: "Thực đơn" },
    ],
    faq: { href: "/hoi-dap#tim-mach", label: "Mỡ máu có phải do ăn mỡ không?" },
    menus: [],
  },"""

assert old_tim_mach_end in t, "ERROR: Could not find old tim-mach group"
t = t.replace(old_tim_mach_end, new_tim_mach_end)

# ===========================================
# 9) UNG THƯ: add ung thư vú, ung thư đại tràng
# ===========================================
old_ung_thu_end = """  {
    specialty: "ung-thu",
    id: "ung-thu",
    emoji: "🎗️",
    name: "Ung thư — Dinh dưỡng hỗ trợ",
    foundation: [
      { slug: "ung-thu", title: "Dinh dưỡng cho người bệnh ung thư", desc: "Bài nền tảng" },
      { slug: "suy-dinh-duong-nguoi-benh", title: "Suy dinh dưỡng người bệnh — Nhận biết & can thiệp", desc: "Bài nền tảng" },
      { slug: "dinh-duong-sau-phau-thuat", title: "Dinh dưỡng sau phẫu thuật — Ăn gì để mau lành?", desc: "Bài nền tảng" },
      { slug: "dinh-duong-cho-nguoi-kho-nuot", title: "Dinh dưỡng cho người khó nuốt", desc: "Bài nền tảng" },
    ],
    faq: { href: "/hoi-dap#ung-thu", label: "Bị ung thư có nên kiêng đường?" },
    menus: [],
  },"""

new_ung_thu_end = """  {
    specialty: "ung-thu",
    id: "ung-thu",
    emoji: "🎗️",
    name: "Ung thư — Dinh dưỡng hỗ trợ",
    foundation: [
      { slug: "ung-thu", title: "Dinh dưỡng cho người bệnh ung thư", desc: "Bài nền tảng" },
      { slug: "dinh-duong-ung-thu-vu", title: "Ung thư vú — Dinh dưỡng trước & sau điều trị", desc: "Bài nền tảng" },
      { slug: "dinh-duong-ung-thu-dai-trang", title: "Ung thư đại tràng — Dinh dưỡng trước & sau mổ", desc: "Bài nền tảng" },
      { slug: "suy-dinh-duong-nguoi-benh", title: "Suy dinh dưỡng người bệnh — Nhận biết & can thiệp", desc: "Bài nền tảng" },
      { slug: "dinh-duong-sau-phau-thuat", title: "Dinh dưỡng sau phẫu thuật — Ăn gì để mau lành?", desc: "Bài nền tảng" },
      { slug: "dinh-duong-cho-nguoi-kho-nuot", title: "Dinh dưỡng cho người khó nuốt", desc: "Bài nền tảng" },
    ],
    faq: { href: "/hoi-dap#ung-thu", label: "Bị ung thư có nên kiêng đường?" },
    menus: [],
  },"""

assert old_ung_thu_end in t, "ERROR: Could not find old ung-thu group"
t = t.replace(old_ung_thu_end, new_ung_thu_end)

# ===========================================
# 10) PHỤ NỮ & NHI: add mãn kinh, trẻ biếng ăn
# ===========================================
# Add mãn kinh - new group after tre-em
old_tre_em_end = """  {
    specialty: "phu-nu-nhi",
    id: "tre-em",
    emoji: "🧒",
    name: "Dinh dưỡng trẻ em & thanh thiếu niên",
    foundation: [
      { slug: "dinh-duong-tre-em", title: "Dinh dưỡng cho trẻ em & thanh thiếu niên", desc: "Bài nền tảng" },
    ],
    faq: null,
    menus: [],
  },
];"""

new_tre_em_end = """  {
    specialty: "phu-nu-nhi",
    id: "tre-em",
    emoji: "🧒",
    name: "Dinh dưỡng trẻ em & thanh thiếu niên",
    foundation: [
      { slug: "dinh-duong-tre-em", title: "Dinh dưỡng cho trẻ em & thanh thiếu niên", desc: "Bài nền tảng" },
      { slug: "dinh-duong-tre-bieng-an-suy-dinh-duong", title: "Trẻ biếng ăn, suy dinh dưỡng — Phục hồi", desc: "Bài nền tảng" },
    ],
    faq: null,
    menus: [],
  },
  {
    specialty: "phu-nu-nhi",
    id: "ma-kinh",
    emoji: "👩",
    name: "Mãn kinh — Dinh dưỡng phụ nữ trung niên",
    foundation: [
      { slug: "dinh-duong-ma-kinh", title: "Mãn kinh — Giảm bốc hỏa, bảo vệ xương & tim mạch", desc: "Bài nền tảng" },
    ],
    faq: null,
    menus: [],
  },
];"""

assert old_tre_em_end in t, "ERROR: Could not find old tre-em group"
t = t.replace(old_tre_em_end, new_tre_em_end)

# ===========================================
# WRITE
# ===========================================
with open('src/pages/ban-do-benh.astro', 'w', encoding='utf-8') as f:
    f.write(t)

print("✅ ban-do-benh.astro updated with all missing disease articles!")
