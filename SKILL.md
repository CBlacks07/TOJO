---
name: tossavi-design
description: Use this skill to generate well-branded interfaces and assets for Patrice Tossavi et Associés (PS gaming accessories e-commerce), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick reference

- **Tokens:** `colors_and_type.css` — paper `#F5F5F2`, ink `#2A2D34`, PS Blue `#0070D1`, Volt `#C6FF3D`, Carbon `#0E1014`.
- **Type:** Space Grotesk (display), Manrope (body), JetBrains Mono (eyebrows/prices/SKUs). All from Google Fonts.
- **Voice:** "Tu" form, FR primary with EN bilingual, direct gamer-aware copy, no emoji in product/checkout.
- **Iconography:** Lucide outline + four PS symbols (✕○□△) as decorative accents only.
- **Components:** see `ui_kits/store/` for ready-made JSX (Button, ProductCard, Header, Hero, CartDrawer, FilterRail, screens).
- **Assets:** logo SVG + JPEG in `assets/`; PS-symbol sprite at `assets/ps-symbols.svg`.
