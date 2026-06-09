# Protein Requirement QA Polish v1

Pham vi: `/cong-cu/tinh-nhu-cau-dam/`.

Muc tieu: QA engine, QA UI preview, polish nhe wording/layout ma khong doi range cong thuc.

## Ket luan ngan

- Rule table khop `reports/tool-protein-source-lock-v1.md`.
- Range protein nam tap trung trong `src/lib/protein-requirement.ts`; khong them range cong thuc rai rac trong page.
- Them test script `npm run test:protein`.
- UI preview pass cac case toi thieu.
- Khong sua du lieu dinh duong.
- Khong doi range cong thuc.
- Cong cu da du tot de lam mau cho cac tool clinical tiep theo, voi dieu kien tiep tuc giu pattern source-lock -> rule table -> engine test -> UI QA.

## Engine QA

Script: `scripts/test-protein-requirement.mjs`.

| Case | Expected | Result |
|---|---|---|
| 60 kg, `healthy` | `48-60 g/ngay`, mode `auto` | pass |
| 70 kg, `active_muscle` | `84-140 g/ngay`, mode `auto` | pass |
| 65 kg, `ckd_nondialysis` | `clinical_no_auto`, khong target ca nhan | pass |
| 65 kg, `dialysis` | `clinical_no_auto`, khong target ca nhan | pass |
| 55 kg, `gout` | `44-55 g/ngay`, mode `caution`, message co purin/loai thuc pham | pass |
| 60 kg, `pregnancy_lactation` | `clinical_no_auto` | pass |
| 50 kg, `cancer_malnutrition` | `clinical_no_auto` | pass |
| Can nang `0`, am, rong/NaN, vo cuc, >200 | loi than thien | pass |

## UI QA preview

Preview route: `/cong-cu/tinh-nhu-cau-dam/`.

| Case | Badge | Result UI | Meal/food cards | Note |
|---|---|---|---|---|
| 60 kg, nguoi khoe | Tu dong tinh | `48-60 g` | hien | De hieu, co canh bao benh nen/an theo chi dinh |
| 70 kg, van dong/tang co | Tu dong tinh | `84-140 g` | hien | Noi ro chi cho nguoi khong co benh than/gan |
| 55 kg, gout | Tham khao co canh bao | `44-55 g` | hien | Khong khuyen uong nuoc chung; nhan manh purin/ruou/fructose/chuc nang than |
| 65 kg, CKD chua loc | Can ca the hoa lam sang | Khong tu dong tinh muc tieu ca nhan | an | Chi hien khoang nguon tham khao |
| 65 kg, loc mau | Can ca the hoa lam sang | Khong tu dong tinh muc tieu ca nhan | an | Tach ro voi CKD chua loc |
| 60 kg, thai ky/cho con bu | Can ca the hoa lam sang | Khong tu dong tinh muc tieu ca nhan | an | Can san khoa/dinh duong vien |
| 50 kg, ung thu/suy dinh duong | Can ca the hoa lam sang | Khong tu dong tinh muc tieu ca nhan | an | Can danh gia dinh duong/refeeding/muc tieu dieu tri |
| Input sai | Hien loi | An ket qua cu | an | Loi: `Vui long nhap can nang tu 20 den 200 kg.` |

## Polish da thuc hien

- Them `calculateProteinRequirement` trong engine de test truc tiep.
- Dua gioi han can nang thanh hang so engine: `PROTEIN_WEIGHT_MIN_KG`, `PROTEIN_WEIGHT_MAX_KG`.
- Page dung hang so can nang tu engine, tranh lap magic number.
- Format don vi UI thanh `48-60 g` thay vi `48-60g`.
- Doi wording `Range nguon` thanh `Khoang nguon tham khao`.
- Khi input can nang sai, xoa noi dung ket qua cu va an result section.
- Doi cac wording `Range` con sot trong engine sang tieng Viet.

## Rui ro con lai

- Tool van chi dung can nang hien tai; chua co can nang ly tuong/hieu chinh cho beo phi nang, phu, thai ky.
- Mot so nhom `caution` nhu giam can, nguoi cao tuoi, an chay van can source lock manh hon neu muon nang len clinical-grade.
- Thai ky/cho con bu chua khoa range g/kg de tinh tu dong.
- UI note lam sang hoi dai nhung chap nhan duoc vi muc tieu an toan; co the tach thanh expandable details o vong UX sau.

## Quyet dinh

Cong cu du lam mau cho tool clinical tiep theo:

1. Co report source-lock truoc khi code.
2. Rule table tap trung trong `src/lib`.
3. Engine co test rieng.
4. UI tach `auto`, `caution`, `clinical_no_auto`.
5. Nhom clinical khong tu dong dua khuyen nghi ca nhan.
