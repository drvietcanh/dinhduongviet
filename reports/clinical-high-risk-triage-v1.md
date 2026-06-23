# Clinical High Risk Triage v1

Date: 2026-06-23

Branch: `clinical-high-risk-triage-v1`

Base commit: `3117c15 chore: clean up reviewed comparison hub stash`

Tag created:

- `local-cleanup-so-sanh-stash-v1 -> 3117c15`

## Context

This report is based on `reports/tools-core-status-v6.md`.

Current status counts:

- `stable_v1`: 9
- `needs_spec`: 5
- `needs_qa_polish`: 13
- `stub_or_draft`: 2
- `clinical_high_risk`: 9
- total: 38

Current stable v1 tools:

1. `tinh-nhu-cau-dam`
2. `tinh-carb`
3. `tinh-gl-bua-an`
4. `nuoc-uong`
5. `khau-phan-viet-clinical` / **Đánh giá khẩu phần Việt**
6. `danh-gia-bua-an` / **Đánh giá bữa ăn** -- navigation hub only
7. `muc-tieu-dinh-duong` / **Mục tiêu dinh dưỡng** -- safe nutrition goal orientation only
8. `muc-tieu-can-nang` / **Mục tiêu cân nặng** -- safe weight goal orientation only
9. `so-sanh` / **So sánh dinh dưỡng** -- navigation hub only

The 9 `clinical_high_risk` routes are not ready for deploy as-is. They are all real routes with user-facing clinical or medication-facing content, not harmless empty stubs.

## Classification Rules

`P0_safety_patch`:

- Route has real user-facing logic or clinical tables.
- Output could be interpreted as treatment guidance, medication guidance, personal targets, or disease-specific nutrition advice.
- Should be patched before deploy.

`P1_spec_source_lock`:

- Route may be valuable but needs source-lock/spec before implementation.
- Current route is not immediately dangerous because it is a stub/hub or does not output strong personal clinical advice.

`P2_keep_stub_or_hub`:

- Should remain a safe hub/stub for now.
- Should not become a calculator in the current stage.

In this audit, all 9 `clinical_high_risk` routes are classified as `P0_safety_patch` because they are live routes with clinical output.

## 9 Clinical High Risk Tools

| # | Slug | Display name | Route | Current status | Route type | Form / interaction | Engine | Source-lock | Personal / clinical output | Main risk | Priority | Suggested direction |
|---|------|--------------|-------|----------------|------------|--------------------|--------|-------------|----------------------------|-----------|----------|---------------------|
| 1 | `chi-so-gi` | Chỉ số đường huyết (GI) thực phẩm Việt | `/cong-cu/chi-so-gi/` | `clinical_high_risk` | real route | search/filter table | inline JS table | no dedicated source-lock; inline source labels only | GI/GL values, replacement suggestions, diabetes-facing wording | hardcoded GI/GL table, "An toàn", diabetes interpretation without source-lock/safety gate | `P0_safety_patch` | turn into safe lookup with source notes, remove "an toàn" wording, no diabetes-specific replacement claims until source-lock |
| 2 | `dia-an-lanh-manh` | Đĩa ăn lành mạnh | `/cong-cu/dia-an-lanh-manh/` | `clinical_high_risk` | real route | disease selector | inline JS disease table | no | disease-specific plate advice for diabetes, hypertension, gout, kidney disease, fatty liver, GERD, elderly, weight loss | hardcoded disease advice; CKD/kali/protein; gout water target; weight loss kcal deficit; disease prescriptions | `P0_safety_patch` | replace disease calculator with safety-gated orientation or navigation hub; remove disease macro/plate targets |
| 3 | `dinh-duong-thai-ky` | Dinh dưỡng thai kỳ | `/cong-cu/dinh-duong-thai-ky/` | `clinical_high_risk` | real route | pregnancy/lactation form | inline JS calculator | no; names WHO/Viện Dinh dưỡng/ACOG but no source-lock table | BMI-based pregnancy weight gain, kcal, protein, iron, calcium, folate, DHA, fiber, vitamin D numeric targets | BMR/calorie formula, IOM weight gain targets, micronutrient targets and pregnancy advice without source-lock or safety gating | `P0_safety_patch` | convert to safe pregnancy orientation/hub; no personal kcal/micronutrient targets until source-lock |
| 4 | `nhu-cau-dinh-duong-tre-em` | Nhu cầu dinh dưỡng trẻ em | `/cong-cu/nhu-cau-dinh-duong-tre-em/` | `clinical_high_risk` | real route | child age/sex/weight/height/activity form | inline JS calculator | no; names WHO/Viện Dinh dưỡng but no source-lock table | pediatric growth assessment, kcal, protein, fat, carb, micronutrient targets, feeding guidance | pediatric diagnosis-like labels, hardcoded kcal/kg and micronutrient targets, no source-lock/safety gate | `P0_safety_patch` | safety patch to pediatric orientation or clinical_no_auto; no child numeric targets until full pediatric source-lock |
| 5 | `nuoc-muoi-mon-an` | Tra nhanh lượng muối trong món ăn | `/cong-cu/nuoc-muoi-mon-an/` | `clinical_high_risk` | real route | search/filter food salt table | inline JS table | no | salt estimates and sodium/salt limit table for healthy, hypertension, heart failure, kidney disease | disease-specific salt targets for hypertension, heart failure, CKD; no source-lock; could be read as restriction prescription | `P0_safety_patch` | keep food-salt lookup only; remove disease-specific targets or gate as clinical_no_auto |
| 6 | `theo-doi-duong-huyet` | Theo dõi đường huyết | `/cong-cu/theo-doi-duong-huyet/` | `clinical_high_risk` | real route | glucose diary, chart, localStorage | inline JS | no | fasting/post-meal/HbA1c target cards, labels, emergency threshold wording | diabetes thresholds, "mục tiêu" cards, alert labels, emergency advice without source-lock or individualized safety | `P0_safety_patch` | convert to neutral logging tool; remove personal targets/diagnostic labels; add ask-clinician wording |
| 7 | `theo-doi-suc-khoe` | Theo dõi sức khỏe | `/cong-cu/theo-doi-suc-khoe/` | `clinical_high_risk` | real route | health diary, goal settings, chart, CSV export | inline JS | no | user-set targets for weight, BP, glucose, waist, HbA1c, LDL | multiple clinical metrics, personal goal lines, BP/glucose/A1c/LDL targets could be interpreted as treatment targets | `P0_safety_patch` | keep diary/export only; remove default clinical targets and "mục tiêu cá nhân" until source-lock/safety gate |
| 8 | `tuong-tac-thuoc` | Tương tác Thuốc & Thực phẩm | `/cong-cu/tuong-tac-thuoc/` | `clinical_high_risk` | real route | drug search, interaction cards | inline JS database | no; inline source names only | severity levels, mechanism, action advice for warfarin, metformin, statin, ACEi, diuretics, levothyroxine, antibiotics, NSAIDs, PPI, CCB | medication-facing advice, "tránh hoàn toàn", "an toàn", dose-like action, high-risk drug classes without source/date/severity taxonomy | `P0_safety_patch` | turn into medication safety hub or locked reference with source/date; remove action directives unless sourced and reviewed |
| 9 | `tuong-tac-thuoc-thuc-pham` | Tương tác thuốc - thực phẩm | `/cong-cu/tuong-tac-thuoc-thuc-pham/` | `clinical_high_risk` | real route | drug selector | inline JS database | no | do/avoid lists and tips for metformin, insulin, levothyroxine, warfarin, statin, allopurinol, furosemide, ACEi, corticosteroid, supplements, NSAIDs, PPI, antibiotics | medication action advice, insulin timing, diuretic/kali advice, "không tự ý" warnings mixed with specific behavioral instructions | `P0_safety_patch` | highest-priority safety patch; reduce to "ask pharmacist/doctor" guidance or source-locked medication reference |

## Detailed Findings

### `chi-so-gi`

Route file: `src/pages/cong-cu/chi-so-gi.astro`

Current behavior:

- Real lookup route, not redirect.
- Search/filter table populated from inline JavaScript.
- Shows GI category cards and GI/GL values.
- Gives replacement suggestions for individual foods.

Risk details:

- User-facing text includes `An toàn` for low GI.
- Some entries state food is `phù hợp người tiểu đường`.
- Source labels are broad inline names (`University of Sydney GI Database`, `Harvard Health`, `ADA`) but no project source-lock with row-level provenance.
- GI/GL values and suggestions can influence diabetes food choices.

Suggested patch:

- Remove "an toàn" and diabetes-safe claims.
- Keep as a cautious lookup only, or convert to hub until source-lock exists.
- Add row/source provenance before any stable path.

### `dia-an-lanh-manh`

Route file: `src/pages/cong-cu/dia-an-lanh-manh.astro`

Current behavior:

- Real route with disease selector.
- Changes plate proportions and notes by selected disease/profile.
- Uses hardcoded inline disease table.

Risk details:

- Diabetes, hypertension, gout, kidney disease, fatty liver, GERD, elderly, and weight-loss advice are mixed in one calculator.
- CKD text references protein, potassium, phosphorus concerns.
- Weight loss mode includes `Giảm 300-500 kcal/ngày`.
- Gout mode includes `Uống 2-3 lít nước/ngày`, which is unsafe for fluid-restricted users.
- No red flag gate for CKD, dialysis, heart failure, pregnancy, frailty, or medication complexity.

Suggested patch:

- Replace disease selector with safe orientation or hub.
- Do not output disease-specific plate targets in v1.
- Route could link to stable tools (`khau-phan-viet-clinical`, `muc-tieu-dinh-duong`, `nuoc-uong`) with careful wording.

### `dinh-duong-thai-ky`

Route file: `src/pages/cong-cu/dinh-duong-thai-ky.astro`

Current behavior:

- Real calculator route.
- Inputs: pre-pregnancy weight, height, age, stage.
- Calculates BMI, recommended weight gain, BMR-derived calorie need, and nutrient targets.

Risk details:

- Pregnancy/lactation is a high-risk population.
- Uses BMR and multiplier logic without project source-lock.
- Outputs kcal/day, protein, iron, calcium, folate, DHA, fiber, and vitamin D numbers.
- Uses IOM-style weight gain ranges but no source-lock table or scope limitations.
- No red flags for high-risk pregnancy, GDM, hypertension/preeclampsia, multiple pregnancy, underweight, eating disorder, severe nausea/vomiting, anemia, kidney disease, or other clinical complexity.

Suggested patch:

- Before deploy, convert to educational pregnancy nutrition hub or `clinical_no_auto` page.
- Do not show personal numeric targets until source-lock and clinical review.

### `nhu-cau-dinh-duong-tre-em`

Route file: `src/pages/cong-cu/nhu-cau-dinh-duong-tre-em.astro`

Current behavior:

- Real pediatric calculator route.
- Inputs: sex, age band, weight, height, activity.
- Outputs growth assessment, kcal, macro, micronutrient targets, feeding guidance, and sample meals.

Risk details:

- Pediatric needs are high risk and age-specific.
- Uses hardcoded expected weight/height and nutrient tables.
- Outputs diagnosis-like labels such as severe malnutrition, overweight, obesity.
- Calculates energy as weight x kcal/kg x activity.
- No source-lock or pediatric safety gate.

Suggested patch:

- Convert to pediatric education hub or safe orientation.
- Avoid diagnostic labels and numeric child targets until pediatric source-lock and review.

### `nuoc-muoi-mon-an`

Route file: `src/pages/cong-cu/nuoc-muoi-mon-an.astro`

Current behavior:

- Real salt lookup route.
- Search list with hardcoded salt ranges for Vietnamese dishes.
- Summary table includes daily salt limits for healthy adults, hypertension, heart failure, and kidney disease.

Risk details:

- Food salt estimates are unsourced and hardcoded.
- Disease-specific targets (`Tăng huyết áp`, `Suy tim, suy thận`) can be interpreted as treatment instructions.
- No safety gate for CKD, dialysis, heart failure/fluid restriction, cirrhosis/ascites, diuretics, or hyponatremia.

Suggested patch:

- Keep only approximate food lookup with clear source status, or hold as draft.
- Remove disease-specific target table until source-lock and clinical gate exist.

### `theo-doi-duong-huyet`

Route file: `src/pages/cong-cu/theo-doi-duong-huyet.astro`

Current behavior:

- Real logging route with localStorage.
- Inputs glucose readings and notes.
- Shows target cards, chart, diary table, and classification labels.

Risk details:

- User-facing target cards include fasting, post-meal, bedtime, and HbA1c goals.
- Labels readings as good/high/very high/hypoglycemia.
- Safety note includes emergency thresholds.
- No source-lock, no diabetes subtype/medication/pregnancy/frailty context, no clinician-set target model.

Suggested patch:

- Keep diary/logging behavior only.
- Remove default clinical target cards and diagnostic-style labels.
- Add "use targets from your clinician" wording.

### `theo-doi-suc-khoe`

Route file: `src/pages/cong-cu/theo-doi-suc-khoe.astro`

Current behavior:

- Real multi-metric health tracking route.
- Tracks weight, blood pressure, glucose, waist, HbA1c, LDL, triglyceride.
- Lets users set personal goals and draws goal lines on chart.

Risk details:

- Multiple clinical metrics are mixed without source-lock or safety gate.
- Default goal values exist for BP, glucose, HbA1c, and LDL.
- The phrase "Mục tiêu cá nhân" risks suggesting treatment targets.
- No differentiation by age, pregnancy, CKD, diabetes medication, cardiovascular risk, or clinician-set targets.

Suggested patch:

- Keep as neutral diary/export surface.
- Remove default clinical goal values and goal lines.
- If goals remain, require wording that they must be clinician-provided.

### `tuong-tac-thuoc`

Route file: `src/pages/cong-cu/tuong-tac-thuoc.astro`

Current behavior:

- Real medication-food interaction search.
- Shows severity, mechanism, and action cards.
- Inline database covers anticoagulants, diabetes drugs, statins, BP drugs, diuretics, thyroid drugs, antibiotics, NSAIDs, PPIs, and CCBs.

Risk details:

- Medication-facing output is high stakes.
- Some action text is strong (`Tránh hoàn toàn`, `Tránh`, `An toàn`, `liều ... an toàn`).
- Source names appear in comments/text, but no source-lock, date, interaction severity taxonomy, or review trail.
- No distinction between drug subclasses and patient context.

Suggested patch:

- Turn into a medication safety hub or "ask pharmacist/doctor" reference surface.
- Keep only general safety framing until source-lock and clinical/pharmacy review.

### `tuong-tac-thuoc-thuc-pham`

Route file: `src/pages/cong-cu/tuong-tac-thuoc-thuc-pham.astro`

Current behavior:

- Real drug selector route.
- Shows do/avoid/tip lists.
- Covers metformin, insulin, levothyroxine, warfarin, statin, allopurinol, furosemide, ACE inhibitor, corticosteroid, supplements, NSAIDs, PPI, antibiotics.

Risk details:

- Includes insulin timing and meal advice.
- Includes diuretic/potassium guidance.
- Includes "do/avoid" medication behavior lists that could be read as instructions.
- No source-lock, update date, or medication review taxonomy.

Suggested patch:

- Highest priority to patch before deploy.
- Convert to medication safety orientation/hub or source-lock before showing action guidance.
- Keep "do not change medication without clinician/pharmacist" as primary message.

## P0 Priority Order

All 9 current `clinical_high_risk` routes should be considered P0 before deploy because each is a real route with user-facing clinical output.

Suggested patch order:

1. `tuong-tac-thuoc-thuc-pham`
   - Medication instructions with insulin, furosemide, ACE inhibitors, steroids, antibiotics, NSAIDs.
   - Highest risk if interpreted as medication management advice.
2. `tuong-tac-thuoc`
   - Medication search with severity/action cards and broad drug classes.
   - Needs pharmacy-style source-lock and action taxonomy.
3. `nhu-cau-dinh-duong-tre-em`
   - Pediatric calculator with growth labels and numeric kcal/macro/micronutrient targets.
   - Pediatric targets should not remain active without source-lock and review.
4. `dinh-duong-thai-ky`
   - Pregnancy/lactation calculator with weight gain, kcal, protein, and micronutrient targets.
   - High-risk population and no safety gate.
5. `theo-doi-duong-huyet`
   - Diabetes target cards and reading labels.
   - Needs neutral diary mode before deploy.
6. `theo-doi-suc-khoe`
   - Multiple clinical metrics and user-set target lines.
   - Should become a neutral tracker or clinician-target-only tool.
7. `dia-an-lanh-manh`
   - Disease table with kidney, gout, hypertension, diabetes, weight-loss logic.
   - Should become hub/orientation instead of disease-specific prescription surface.
8. `nuoc-muoi-mon-an`
   - Disease-specific salt targets for hypertension, heart failure, and kidney disease.
   - Can be patched to approximate food lookup first.
9. `chi-so-gi`
   - GI/GL lookup with diabetes-facing claims and "An toàn" wording.
   - Lower P0 than medication/pediatric/pregnancy, but still needs safety wording/source-lock before deploy.

## Tools Not to Touch First

No `clinical_high_risk` route should be promoted or polished toward stable before its safety patch/spec/source-lock path is defined.

Routes that should not be expanded into calculators soon:

- `dinh-duong-thai-ky`
- `nhu-cau-dinh-duong-tre-em`
- `tuong-tac-thuoc`
- `tuong-tac-thuoc-thuc-pham`

Routes that could be temporarily converted to safer hub/orientation surfaces:

- `dia-an-lanh-manh`
- `theo-doi-duong-huyet`
- `theo-doi-suc-khoe`

Routes that could keep limited lookup behavior after removing disease-specific target wording:

- `nuoc-muoi-mon-an`
- `chi-so-gi`

## Wording Scan Notes

The requested wording/risk scan found user-facing or rendered-source occurrences in route files for:

- `insulin`
- `lợi tiểu`
- `kali`
- `kcal`
- `suy thận`
- `suy tim`
- `thai kỳ`
- `BMR` in code comments for `dinh-duong-thai-ky`
- disease-specific salt targets in `nuoc-muoi-mon-an`
- medication action guidance in both medication routes

Some terms appear only in inline code/comments, but much of the surrounding text is rendered into user-facing output through JavaScript.

## No Code Changes

This round did not modify:

- route UI
- engine logic
- formulas
- nutrition data
- `dist`

No deploy was performed.

## Recommendation for Next Round

Next round should handle:

1. `tool-tuong-tac-thuoc-thuc-pham-safety-patch-v1`

Reason:

- It includes insulin timing, diuretic/potassium advice, steroid/antibiotic/NSAID advice, and do/avoid lists.
- It is medication-facing, active, and easy for users to misread as treatment instructions.
- A safety patch can reduce it to a medication safety orientation/hub without needing new formulas or data.

Do not deploy while any P0 route remains in its current calculator/action-guidance form.
