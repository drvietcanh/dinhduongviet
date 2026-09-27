# UI editorial shell refresh — 2026-09-27

## Scope

- Global navigation and footer shell.
- Homepage hero and recipe feature surface.
- Tool-library cards.
- Reusable article and food cards.

## Direction applied

Clinical editorial: an opaque, full-width sticky header with one aligned content grid; flat surfaces; restrained borders and shadows; functional interaction only. This removes floating-pill navigation, glass blur, decorative gradients and scale-on-hover from the high-traffic shell.

The same rule now applies to reusable cards: specialty color remains a small structural marker, while the surface itself stays neutral and readable.

## Evidence

- `npx astro check`: 0 errors, 0 warnings, 0 hints.
- `npx --yes @21st-dev/cli review ... --json`: 0 deterministic findings.
- Browser check at 1440px and 390px: no horizontal overflow.
- Mobile menu reports `aria-expanded=true` when opened and locks background scrolling.
- Tool cards use opaque token-driven surfaces in both light and dark modes.
- Article cards render without gradient layers or layout-shifting hover transforms at 390px.
- Food, recipe and article detail surfaces now use flat token-driven backgrounds; mobile checks at 390px show no horizontal overflow.
- `npx astro check`: 659 files, 0 errors, 0 warnings, 0 hints.
- `npm run build`: completed 2,020 static pages and refreshed public/dist nutrition APIs.
- Article body, TOC, decision panel, table headers and related cards now use flat surfaces; semantic info/danger treatments remain intentionally distinct.
- Playwright mobile smoke test: BMI calculation returns 22.5 for 65 kg / 170 cm and both BMI and food-comparison tools stay at 390px without horizontal overflow.
- Responsive matrix check across homepage, BMI, food comparison and knowledge index: 360, 390, 768 and 1024px all match viewport width with no horizontal overflow.

## Follow-up scope

Apply the same removal of decorative glass/gradient treatment incrementally to remaining high-traffic list, article and food-detail templates, preserving their content hierarchy and medical safety copy.
