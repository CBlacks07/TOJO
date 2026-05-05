# Patrice Tossavi et Associés — Design System

> **Gaming accessories e-commerce.** Where premium retail meets gaming culture.

A bilingual (FR/EN) design system for **PATRICE TOSSAVI ET ASSOCIÉS**, a marketplace selling everything PlayStation: controllers, headsets, charging stands, racing wheels, branded merch (gourdes, hoodies, mugs), arcade sticks, physical games, and PSN cards.

The brand is a study in contrast: a **minimal, premium retail shell** (the Tossavi logo's quiet confidence) with **gaming-energy accents** (PlayStation blue, electric volt-green, the four PS symbols ✕○□△). Clean by default, loud on demand.

---

## Sources

- **Logo:** `assets/logo-original.jpeg` — provided by user (WhatsApp upload, 2026-05-03). Vectorized to `assets/logo-mark.svg` and `assets/logo-lockup.svg`.
- **Brand brief:** transcribed from user questionnaire — light/premium e-commerce baseline, PS blue accent, mix outline + PS-symbol iconography, very animated, all categories of PS accessories.
- **No codebase or Figma was provided.** All UI, components, and screens in this system are original interpretations of the brief, anchored to the logo's visual language.

---

## Content Fundamentals

### Voice & Tone

The brand speaks **two registers** depending on context:

| Surface | Register | Example |
|---|---|---|
| Marketing / Hero | Hype-confident | *"Level up your setup."* / *"Élève ton setup au niveau supérieur."* |
| Product / Catalog | Direct, informative | *"DualSense Edge — Manette pro, sur-mesure."* |
| Checkout / Account | Calm, trustworthy | *"Commande confirmée. On s'occupe du reste."* |
| Empty / Error states | Warm, gamer-aware | *"Rien dans le panier. Va chercher du loot."* |

### Rules of writing

- **Bilingual FR/EN by default.** French primary; English available via toggle.
- **"Tu" not "vous"** in marketing and product copy — gaming culture is informal. **"Vous"** is used in legal, payment confirmation, and customer service to signal seriousness around money.
- **Verbs first, no fluff.** *"Ajouter au panier"* not *"Cliquez ici pour ajouter au panier"*.
- **Numbers are tabular.** Always use `font-variant-numeric: tabular-nums` for prices, stock counts, ratings.
- **Currency is `€` suffix, French style:** `89,90 €` (comma decimal, space before €).
- **No emoji in product/checkout flows.** Emoji only in social posts or empty states. Use the PS symbols (✕○□△) as decorative accents instead.
- **Casing:** Sentence case for body. UPPERCASE only for eyebrows, badges (`NEW`, `−20%`, `LIVE`), and the logo lockup.

### Power words

`Setup` · `Loot` · `Drop` · `Squad` · `Run` · `Pro` · `Edge` · `GG` (sparingly) · `Sur-mesure` · `Édition limitée`

### Avoid

- Generic e-com platitudes ("The best products at the best prices")
- Cringe gamer-speak ("Pwn the competition")
- Excessive exclamation marks
- "Click here", "Cliquez ici"

---

## Visual Foundations

### Palette

The system is built on a **warm-cool charcoal on off-white paper** (`#2A2D34` on `#F5F5F2`), pulled directly from the logo. Accent is **PlayStation blue (`#0070D1`)**, used only for primary actions and brand moments. **Volt green (`#C6FF3D`)** is the electric secondary, reserved for "live", "new drop", or limited-edition badges. The four **PS symbol colors** (cross blue, circle red, square pink, triangle green) appear only as decorative micro-accents — never as UI states.

A **carbon dark** surface (`#0E1014`) is used for hero blocks, product spotlights, and the limited-edition section, to create dramatic contrast against the off-white default.

### Typography

- **Display:** Space Grotesk — geometric, slightly tech, used for H1–H3, prices, big numbers
- **Body:** Manrope — humanist sans, premium e-commerce default
- **Mono:** JetBrains Mono — eyebrows, SKUs, specs, sizes

> ⚠️ **Font substitution flag:** No custom brand fonts were provided. Both Space Grotesk and Manrope are loaded from Google Fonts as best-fit defaults. If you have proprietary brand fonts, drop the `.woff2` files into `fonts/` and update `colors_and_type.css`.

### Backgrounds

- **Default:** flat `--paper` (`#F5F5F2`). Never gradient backgrounds on full pages.
- **Hero blocks:** flat `--carbon` with a single full-bleed product photo on the right, or a subtle film-grain overlay (optional `background-image: url('assets/grain.svg')`).
- **Product cards:** flat `--paper-2` square photo wells. No drop shadow on the photo itself.
- **NO bluish-purple gradients. NO faux-3D card stacks.**

### Animation

- **Easing:** `--ease-out` (cubic-bezier(0.22, 1, 0.36, 1)) for almost everything. `--ease-spring` for "add to cart" success bumps. `--ease-snap` for hover-state state changes.
- **Durations:** 140ms (hover), 240ms (page chrome), 480ms (modal/drawer entry).
- **Hero parallax:** product image translates `-20px` on scroll-progress 0→1.
- **Hover on product card:** image scales `1.04` over 480ms ease-out, price slides up to reveal "Ajouter au panier".
- **Press states:** `scale(0.97)` over 100ms.

### Hover & press

- **Buttons:** background darkens to `--ps-blue-d` on hover; `scale(0.97)` on press. Outline buttons fill with ink on hover.
- **Links:** underline appears under text via `text-underline-offset: 4px` on hover. No color change.
- **Cards:** `box-shadow` lifts from `--sh-1` to `--sh-3`, image scales 1.04, hidden CTA fades in from below.

### Borders & corners

- **Radii are mostly sharp.** Buttons are squared (`--r-0` or `--r-2`). Product cards are `--r-3` (8px). Chips/pills use `--r-pill`. **No bubbly 16px+ rounding.**
- **Borders** are 1px `--line` (`#D9D8D2`) by default. Bold rules use 2px `--ink`.

### Shadows

A 4-step elevation system:
- `--sh-1` resting cards
- `--sh-2` hover cards
- `--sh-3` floating chrome (search, drawer)
- `--sh-4` modals

Plus two **glow** variants for gaming moments: `--sh-glow-blue` (focus rings) and `--sh-glow-volt` (limited-edition CTAs).

### Imagery vibe

- **Cool-neutral product photography** on `--paper-2` squares. No heavy color grading.
- **Lifestyle shots** are warm and natural — gamer in their setup, controller in hand, no artificial RGB lighting.
- **No stock-photo handshake/laptop imagery.** Real product, real context.

### Layout

- 12-column grid, 24px gutter, max-width 1280px (or 1440px for hero rails).
- Product grid: 4 cols desktop, 2 tablet, 1 mobile.
- **Sticky chrome:** header (`72px`), filter rail on PLP (left, `280px`).
- Generous vertical rhythm — sections separated by `--sp-24` (96px).

### Transparency & blur

Used sparingly: only on the **sticky header** (`backdrop-filter: blur(12px)` over `rgba(245,245,242,0.8)`) and the **mini-cart drawer scrim** (`rgba(14,16,20,0.4)`). Never on cards or product imagery.

---

## Iconography

**Two-system approach:**

1. **UI icons** — **Lucide** (outline, 1.75 stroke). Loaded via CDN in UI kits. Used for nav, search, cart, account, filters, sort, etc.
2. **PlayStation symbols** — `✕ ○ □ △` (cross, circle, square, triangle). Custom SVG sprites in `assets/ps-symbols.svg`. Used as **decorative micro-accents only** — never as functional UI affordances. They appear in hero typography, section dividers, loading states, and the loyalty-points icon.

> ⚠️ **Substitution flag:** Lucide is a best-fit CDN substitute. If the brand has proprietary icons, swap them in `assets/icons/`.

**Emoji:** not used in product/checkout. Reserved for social/marketing only.
**Unicode:** used for the four PS symbols and currency only.

---

## Spacing & Sizing

A **4-based scale** (`--sp-1` = 4px through `--sp-32` = 128px). Component padding leans on `--sp-3` / `--sp-4` / `--sp-6`. Section padding uses `--sp-16` / `--sp-24`.

Hit targets: **minimum 44px** on mobile, 36px desktop chrome. Buttons default to 48px (`--sp-12`).

---

## Index — what's in this system

| Path | What |
|---|---|
| `README.md` | This file |
| `SKILL.md` | Cross-compatible Agent Skill manifest |
| `colors_and_type.css` | Single source of truth for tokens |
| `assets/` | Logo (jpeg + svg), PS-symbol sprite, sample product placeholders |
| `preview/` | Design-system cards (Type, Colors, Spacing, Components, Brand) |
| `ui_kits/store/` | The PS Gaming Store UI kit — 5 screens, JSX components, interactive index.html |

---

## What's working / what to iterate

The system is **complete and self-consistent** but reflects creative interpretation of the brief — there's no source codebase or Figma to anchor it. The biggest open questions are below.

## Caveats

- Logo is hand-vectorized from a JPEG. If you have the original vector (`.ai`, `.svg`, `.pdf`), drop it into `assets/` and replace `logo-mark.svg`.
- No proprietary fonts provided — Google Fonts substitutions are flagged above.
- Product photography is placeholder-only. Real lifestyle and pack-shots needed for production.
- The "Patrice Tossavi et associés" name reads as a **professional-services / consultancy** name; the gaming positioning is a creative interpretation of the user's brief. Confirm direction before going to print.
#   T O J O  
 #   T O J O  
 