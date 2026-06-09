#!/usr/bin/env python3
"""Fix the reclassification properly using line-based editing."""

import re

with open('src/data/articles.ts', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Reclassification map (slug -> new specialty) — expanded
reclassify = {
    # → TIÊU HÓA
    "dau-da-day-nen-an-gi": "tieu-hoa",
    "day-bung-sau-an": "tieu-hoa",
    "o-nong-nong-rat-nguc": "tieu-hoa",
    "tao-bon-ibs": "tieu-hoa",
    "tieu-chay-o-nguoi-lon": "tieu-hoa",
    "tieu-chay-mat-nuoc": "tieu-hoa",
    "chat-xo": "tieu-hoa",
    "probiotic-va-duong-ruot": "tieu-hoa",
    "thuoc-chi-dinh-vitamin-k": "tieu-hoa",
    "sai-lam-gan-nhiem-mo-an-mo": "tieu-hoa",
    "thuc-don-gan-nhiem-mo": "tieu-hoa",
    "thuc-don-gan-nhiem-mo-ban-ron": "tieu-hoa",
    "thuc-don-gan-nhiem-mo-binh-dan": "tieu-hoa",
    "thuc-don-gan-nhiem-mo-nguoi-gia": "tieu-hoa",
    "thuc-don-da-day": "tieu-hoa",
    "thuc-don-da-day-ban-ron": "tieu-hoa",
    "thuc-don-da-day-binh-dan": "tieu-hoa",
    "thuc-don-da-day-nguoi-gia": "tieu-hoa",

    # → NỘI TIẾT
    "com-trang-tieu-duong": "noi-tiet",
    "tang-acid-uric": "noi-tiet",
    "sai-lam-tieu-duong-bo-com": "noi-tiet",
    "sai-lam-gout-chi-do-thit": "noi-tiet",
    "thuc-don-tieu-duong": "noi-tiet",
    "thuc-don-tieu-duong-ban-ron": "noi-tiet",
    "thuc-don-tieu-duong-binh-dan": "noi-tiet",
    "thuc-don-tieu-duong-nguoi-gia": "noi-tiet",
    "thuc-don-gout": "noi-tiet",
    "thuc-don-gout-ban-ron": "noi-tiet",
    "thuc-don-gout-binh-dan": "noi-tiet",
    "thuc-don-gout-nguoi-gia": "noi-tiet",
    "thuc-don-giam-can-kieu-viet": "noi-tiet",
    "canh-bao-hieu-lam-com-tieu-duong": "noi-tiet",
    "canh-bao-hieu-lam-gout-dam": "noi-tiet",
    "canh-bao-hieu-lam-giam-can-nhanh": "noi-tiet",
    "dung-tin-ngay-duong-phen": "noi-tiet",
    "dung-tin-ngay-mat-ong-tieu-duong": "noi-tiet",
    "dung-tin-ngay-gao-lut-tieu-duong": "noi-tiet",
    "dung-tin-ngay-nhin-an-giam-can": "noi-tiet",
    "dung-tin-ngay-trai-cay-thay-com": "noi-tiet",

    # → TIM MẠCH
    "che-do-dash-tang-huyet-ap": "tim-mach",
    "che-do-trung-hai-viem-khop-tim-mach": "tim-mach",
    "phu-chan-giam-muoi": "tim-mach",
    "muoi-duong-trong-thuc-pham": "tim-mach",
    "thuc-don-huyet-ap-ban-ron": "tim-mach",
    "thuc-don-huyet-ap-binh-dan": "tim-mach",
    "thuc-don-huyet-ap-nguoi-gia": "tim-mach",
    "thuc-don-tang-huyet-ap": "tim-mach",
    "thuc-don-mo-mau": "tim-mach",
    "sai-lam-an-nhat": "tim-mach",
    "canh-bao-hieu-lam-an-nhat-muoi": "tim-mach",
    "dung-tin-ngay-chanh-giam-mo-mau": "tim-mach",

    # → CƠ XƯƠNG KHỚP
    "canxi-xuong-chac-khoe": "co-xuong-khop",
    "nuoc-ham-xuong-canxi": "co-xuong-khop",
    "chuot-rut-thieu-chat": "co-xuong-khop",
    "canh-bao-hieu-lam-nuoc-ham-xuong": "co-xuong-khop",
    "sai-lam-loang-xuong-chi-canxi": "co-xuong-khop",

    # → HUYẾT HỌC
    "met-moi-thieu-chat": "huyet-hoc",
    "rung-toc-thieu-chat": "huyet-hoc",
    "sai-lam-thieu-mau-uong-sat": "huyet-hoc",
    "dinh-duong-thieu-ke-kem": "huyet-hoc",

    # → UNG THƯ
    "dinh-duong-cho-nguoi-kho-nuot": "ung-thu",
    "suy-dinh-duong-nguoi-benh": "ung-thu",

    # → THẦN KINH
    "thuc-pham-giac-ngu": "than-kinh",

    # → HÔ HẤP
    "om-sot-cam-cum": "ho-hap",

    # → PHỤ NỮ NHI
    "tao-bon-nguoi-cao-tuoi": "phu-nu-nhi",
    "an-tet-nguoi-benh": "phu-nu-nhi",
    "an-du-lich-benh-nen": "phu-nu-nhi",
    "mam-com-gia-dinh-benh-nen": "phu-nu-nhi",
    "an-ca-kip-truc": "phu-nu-nhi",
    "an-khuya-va-nhin-an-gian-doan": "phu-nu-nhi",
    "an-ngoai-hang-quan": "phu-nu-nhi",
    "thuc-don-tang-dam-nguoi-gay": "phu-nu-nhi",

    # → THẬN
    "canh-bao-hieu-lam-suy-than-kieng": "than-tiet-nieu",
}

# Build a set for faster lookup
reclass_map = reclassify

# Process line by line: find slug lines, remember current slug
# When we see 'specialty: "dinh-duong-tong-quat"', check if slug is in map
current_slug = None
modified = 0

for i, line in enumerate(lines):
    stripped = line.strip()
    
    # Detect slug
    if stripped.startswith('slug: "') and stripped.endswith('",'):
        current_slug = stripped.split('"')[1]
    
    # Detect specialty line for tổng quát
    if stripped.startswith('specialty: "dinh-duong-tong-quat"') and current_slug in reclass_map:
        new_spec = reclass_map[current_slug]
        lines[i] = f'    specialty: "{new_spec}",\n'
        modified += 1

print(f"Reclassified {modified} articles from tổng-quát to specific specialties")

if modified > 0:
    with open('src/data/articles.ts', 'w', encoding='utf-8') as f:
        f.writelines(lines)
    print("✅ Written")
else:
    print("No changes needed")
