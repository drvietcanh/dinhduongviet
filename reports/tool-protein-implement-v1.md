# Protein Requirement Implementation v1

Pham vi: `/cong-cu/tinh-nhu-cau-dam`.

## Thay doi da thuc hien

- Tao rule table tai `src/lib/protein-requirement.ts`.
- Cap nhat page `src/pages/cong-cu/tinh-nhu-cau-dam.astro` de dung rule table thay cho `CONDITIONS` hardcode trong inline script.
- Bo input `activity` vi truoc do duoc nhap nhung khong duoc dung. Tinh huong "Vận động vừa / tăng cơ" nay la profile rieng.
- Bien `amount` trong vi du thuc pham nay duoc hien thi ro: so "phan" tuong duong neu chi dung mon do.
- Advice gout da bo khuyen nghi uong 2-3 lit nuoc chung; warning ve purin/ruou/fructose/chuc nang than duoc lay tu rule table.

## Rule modes

| Mode | Xu ly |
|---|---|
| `auto` | Tinh khoang gram/ngay va hien chia bua/vi du tuong duong. |
| `caution` | Van tinh khoang tham khao, nhung badge va message canh bao ro rang. |
| `clinical_no_auto` | Khong tinh muc tieu ca nhan; chi hien canh bao, nguon va range nguon tham khao neu co. |

## Test cases

| # | Input | Expected | Ket qua tinh theo engine |
|---:|---|---|---|
| 1 | 60 kg, người khỏe | 48-60 g/ngày | `0.8-1.0 x 60 = 48-60 g/ngày`, mode `auto`. |
| 2 | 70 kg, vận động/tăng cơ | 84-140 g/ngày | `1.2-2.0 x 70 = 84-140 g/ngày`, mode `auto`. |
| 3 | 65 kg, CKD chưa lọc máu | Không auto-calc như người khỏe, hiện cảnh báo clinical | Mode `clinical_no_auto`; không sinh mục tiêu cá nhân, chỉ hiện range nguồn `0.55-0.8 g/kg/ngày`. |
| 4 | 55 kg, gout | Caution, nhấn mạnh purin/loại thực phẩm | `0.8-1.0 x 55 = 44-55 g/ngày`, mode `caution`, message nói gout không chỉ phụ thuộc tổng đạm. |
| 5 | 60 kg, thai kỳ/cho con bú | Clinical no auto/cần cá thể hóa | Mode `clinical_no_auto`; không khóa range g/kg cho engine tự phục vụ. |
| 6 | 50 kg, ung thư/suy dinh dưỡng | Clinical no auto/cần chuyên môn | Mode `clinical_no_auto`; chỉ hiện range nguồn tham khảo `1.0-1.5 g/kg/ngày`, không gọi là khuyến nghị cá nhân. |
| 7 | Cân nặng không hợp lệ | Báo lỗi thân thiện | `<20`, `>200`, rỗng/NaN đều hiện "Vui lòng nhập cân nặng từ 20 đến 200 kg." |

## Ghi chu an toan

- Cong cu chi la uoc tinh ban dau.
- Khong thay the tu van dinh duong ca the.
- CKD, loc mau, thai ky/cho con bu, ung thu/suy dinh duong can bac si/dinh duong vien.
- Gout phu thuoc loai thuc pham va purin, khong chi tong protein.
- Neu dang duoc dan han che dich/dam, khong tu thay doi khau phan theo cong cu.

## Khong thay doi

- Khong sua du lieu dinh duong.
- Khong sua `dist` thu cong.
- Khong deploy.
