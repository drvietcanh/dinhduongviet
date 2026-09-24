<!-- Generated context mirrored from .21st/design.json. Edit decisions in design.json first. -->
# Project Design Context

## Project

- Name: Dinh dưỡng Việt
- Product type: Vietnamese nutrition knowledge and self-management reference
- Stack: Astro
- Color mode: light and dark
- Density: comfortable

## Visual direction

- Clinical editorial: calm, content-first and non-diagnostic.
- Existing green semantic tokens on flat card and soft-background surfaces.
- Existing self-hosted sans-serif with at least 16px form text on mobile.
- 4px/8px spacing rhythm, 12px controls and 18–22px section radii.
- Functional 180–250ms transitions with reduced-motion support.

## Constraints

### Must

- Reuse existing Astro components and semantic design tokens.
- Keep health guidance calm, explicit and non-diagnostic.
- Maintain visible keyboard focus and 44px mobile touch targets.
- Support 360px through large desktop without horizontal overflow.

### Avoid

- Decorative glassmorphism and excessive gradients.
- Emoji as primary structural icons.
- Dense walls of equal-priority cards.
- Medical claims inferred from a single locally stored measurement.

## Decisions

- Homepage: search-first hero, restrained surfaces, SVG icon language, progressive disclosure and fewer high-priority choices on mobile.
- Site-wide shell, articles, food library and forms: flat token-driven surfaces, stable hover states, SVG controls, skip navigation, explicit control state, 44px mobile targets, 16px mobile form text and global reduced-motion handling.
