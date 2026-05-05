# PS Gaming Store — UI Kit

The flagship UI kit for **Patrice Tossavi et Associés**, a PlayStation accessories e-commerce site.

## Screens included

1. **Home** — hero, featured drops, category grid, limited-edition rail
2. **PLP** (catalog) — filter rail, product grid, sort, breadcrumb
3. **PDP** (product detail) — gallery, color/variant picker, specs, add-to-cart
4. **Cart drawer** — line items, quantity, totals, promo
5. **Account** — orders, wishlist, profile

## Components

- `Header.jsx` — sticky top nav, search, cart, account
- `Footer.jsx` — bilingual links, newsletter, payment marks
- `ProductCard.jsx` — grid card with hover reveal
- `Hero.jsx` — carbon dark hero with parallax product
- `FilterRail.jsx` — left sidebar for PLP
- `Drawer.jsx` — slide-in cart drawer
- `Button.jsx` — all button variants
- `Badge.jsx` — sale, new, live drop
- `PSSymbol.jsx` — decorative cross/circle/square/triangle
- `data.js` — fake product catalog

## Run

Open `index.html`. The app is React + Babel inline. Click around — search, filter, hover product cards, add to cart, view product details, checkout flow.

## Stack

- React 18 (UMD) + Babel Standalone
- Lucide icons (CDN)
- Tokens from `../../colors_and_type.css`
