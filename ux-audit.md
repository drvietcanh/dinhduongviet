# Báo cáo cải thiện UI — Dinh dưỡng Việt

## Hiện trạng
- ✅ CSS custom properties (good)
- ✅ Dark mode
- ✅ Responsive cơ bản
- ✅ Google Fonts (Inter + Noto Sans)
- ✅ Cards có hover shadow
- ✅ Sticky nav
- ✅ Footer layout

## 🎯 Đề xuất cải tiến (Làm ngay — mỗi mục < 30 phút)

### 1. 🎨 Màu sắc — Hiện đại hơn

| Hiện tại | Vấn đề | Đề xuất |
|----------|--------|---------|
| `--brand: #1b5e20` | Xanh quá tối, kém hiện đại | Giữ làm accent nhưng dùng gradient mềm, thêm màu phụ |
| `--card: #ffffff` | Trắng trơn, thiếu depth | Thêm shadow nhẹ mặc định, border mỏng hơn |
| `--bg-soft: #f8faf9` | Gần như trùng bg | Chuyển sang warm gray nhẹ (#f5f7f6) |

### 2. 🔝 Navigation — Cần nâng cấp
- **Thiếu search bar** trên nav (không phải ai cũng biết /tim-kiem)
- **Thiếu hamburger menu** trên mobile — nav links rất dài
- **Logo "🇻🇳 Dinh dưỡng Việt"** — emoji flag không hiển thị đẹp trên mọi nền tảng

### 3. 📱 Responsive — Còn yếu
- **768px** mới break — cần break sớm hơn (600px)
- **480px** nav links chữ quá nhỏ (0.75rem)
- **Footer** cột chồng lên không đẹp ở mobile

### 4. 🃏 Cards — Thiếu personality
- Card hiện chỉ có border + hover shadow
- Thiếu avatar/biểu tượng động
- Thiếu color accent cho từng loại card (tool card màu khác food card)

### 5. ⚡ Micro-interactions — Gần như không có
- Không có loading spinner / skeleton ngoại trừ 1 skeleton generic
- Không có transition khi hover (ngoài box-shadow)
- Không có page transition (instant navigation)

### 6. 🖼️ Typography — Có thể đẹp hơn
- `h2` luôn màu xanh brand → hơi nhàm
- Thiếu `letter-spacing` cho heading
- Line-height chung 1.6 đang ổn nhưng thiếu variety

### 7. 🔍 Search UX — Cần cải thiện
- `/tim-kiem` riêng biệt, không có search bar nổi trên mọi trang
- Tool search trong từng tool OK nhưng không đồng bộ

---

## ✅ Priority — Làm ngay (tối nay)

| # | Thay đổi | Effort | Impact |
|:-:|----------|:------:|:------:|
| 1 | **Search bar trên nav** — input nhỏ bên cạnh theme toggle | 15 min | ⭐⭐⭐⭐⭐ |
| 2 | **Hamburger menu** mobile (thay cho nav links dài) | 20 min | ⭐⭐⭐⭐ |
| 3 | **Card improvements** — shadow nhẹ mặc định, border-radius nhất quán | 10 min | ⭐⭐⭐ |
| 4 | **Micro-animations** — fade-in, smooth transitions, toast messages | 20 min | ⭐⭐⭐⭐ |
| 5 | **Hero section homepage** — gradient nền, bố cục hiện đại hơn | 15 min | ⭐⭐⭐⭐⭐ |
| 6 | **Logo** thay emoji bằng SVG inline | 10 min | ⭐⭐ |

---

## ⏭️ Làm sau (ngày mai)

| # | Thay đổi | Effort |
|:-:|----------|:------:|
| 7 | Loading spinner component | 15 min |
| 8 | Skeleton loading cho food/recipe cards | 20 min |
| 9 | Color-coded tool cards | 15 min |
| 10 | Smooth anchor scroll | 5 min |

---

## Chi phí tổng: ~2 tiếng cho tất cả

**Anh muốn làm những mục nào?** Gợi ý: làm 1→6 (tối đa impact), để 7→10 sau.
