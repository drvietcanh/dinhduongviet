raw = open(r'D:\openclaw\apps\dinh-duong-viet\src\pages\cong-cu\tra-cuu-thuc-pham-viet.astro', encoding='utf-8').read()

# Find fetch calls and add lazy loading logic
scripts_part = ""
if "fetch(\"/api/vietnam-foods.json\")" in raw and "fetch(\"/api/vietnam-nutrients.json\")" in raw:
    scripts_part = """
<script is:inline>
  (function() {
    var payloadEl = document.getElementById('search-payload'); // Assuming search payload is loaded lazily
    var nutrientsData = null;
    var foodsData = null;

    async function loadNutrientData() {
      if (nutrientsData) return nutrientsData;
      const res = await fetch('/api/vietnam-nutrients.json');
      nutrientsData = await res.json();
      return nutrientsData;
    }

    async function loadFoodData() {
      if (foodsData) return foodsData;
      const res = await fetch('/api/vietnam-foods.json');
      foodsData = await res.json();
      return foodsData;
    }

    // Trigger data load on search input focus or chip click
    var searchInput = document.querySelector('.ac-input');
    var searchWrapper = searchInput.closest('.ac-search-wrapper');
    var searchChips = searchWrapper.closest('.autocomplete-search').querySelectorAll('.ac-chip');

    if (searchInput) {
      searchInput.addEventListener('focus', loadNutrientData); // Load on focus
      searchInput.addEventListener('input', loadNutrientData); // Load on input
    }
    searchChips.forEach(chip => chip.addEventListener('click', loadNutrientData));

    // Also load food data when searching
    if (searchInput) {
      searchInput.addEventListener('focus', loadFoodData);
      searchInput.addEventListener('input', loadFoodData);
    }
    searchChips.forEach(chip => chip.addEventListener('click', loadFoodData));

  })();
</script>
"""

# Replace existing script or insert new one
start_script = raw.find('<script is:inline>')
end_script = raw.find('</script>', start_script)

if start_script != -1 and end_script != -1:
    raw = raw[:start_script] + scripts_part + raw[end_script+9:]
else:
    # If no script tag, insert at end before </BaseLayout>
    end_base = raw.rfind('</BaseLayout>')
    if end_base != -1:
        raw = raw[:end_base] + scripts_part + raw[end_base:]
    else:
        raw += scripts_part # fallback

open(r'D:\openclaw\apps\dinh-duong-viet\src\pages\cong-cu\tra-cuu-thuc-pham-viet.astro', 'w', encoding='utf-8').write(raw)
print('Lazy load script added to tra-cuu-thuc-pham-viet.astro')
