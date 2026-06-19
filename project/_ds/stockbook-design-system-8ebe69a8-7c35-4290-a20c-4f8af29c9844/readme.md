# Stockbook Design System

**Stockbook** is a Vietnamese social-finance platform for individual investors ("mạng xã hội tài chính"). It combines a community feed of investment theses (luận điểm đầu tư), contributor trust signals (điểm tin cậy, xác thực chuyên gia), live market context (VN-Index, tickers, khối ngoại) and premium analytics entry points.

This project recreates Stockbook's design language as a working design system: tokens, webfonts, React components, and a UI kit of real product screens.

## Sources

- **Figma**: "Stockbook Design.fig" (attached to this project as a virtual filesystem). The library is organized Element-Plus-style: one page per component (Button, Input, Select, …), plus `Styles` (Typography / Color Guidance / Elevation), `Shape` (radius + spacing scales), `Icons`, and `Playground` (real feed/post/leaderboard compositions). Some spec frames carry the internal library name "EAERA".
- **Codebase**: `stock-design/` (attached read-only) — a Next.js 15 + React 19 + Tailwind v4 app rendering a mock Stockbook community feed (`src/features/HomeFeed`). Useful for product copy, domain types, and Lucide icon usage. Note: its `globals.css` carries an older **dark "trading terminal" theme (Roboto, amber primary)** that predates the Figma light system; the Figma file is the source of truth for this design system.

## The system in one paragraph

A light, dense, ink-on-white financial UI. Near-black neutral (`#0B0F13`/`#11161C`, a cool blue-tinted gray ramp) does the heavy lifting; **orange-red `#FF4500` is the brand color** (logos, brand moments, negative/"bearish" accents), **blue `#2B59C7` is the interactive color** (links, focus, selection), and green/red/yellow/sky carry market and feedback semantics. Type is **Geist** at small optical sizes (12–14px body, 32px page titles), numerals are tabular or **Geist Mono**. Surfaces are white cards with hairline alpha borders and very soft neutral shadows. Radius is generous on containers (12–20px), tight on controls (4–8px), pill on badges/chips.

---

## CONTENT FUNDAMENTALS

- **Language**: Vietnamese-first product copy; financial English loanwords are kept untranslated where the community uses them (`backlog`, `upside`, `Premium`, `Smart Screener`, `AI Market Brief`).
- **Casing**: sentence case everywhere — headings, buttons, tabs ("Khám phá", "Theo dõi", "Thêm chủ đề"). Never ALL-CAPS except tiny table headers.
- **Voice**: analytical, measured, third-person. Theses read like sell-side notes, not hype: "VCB cần tín hiệu rõ hơn từ tăng trưởng tín dụng trước khi bứt phá". Claims are hedged with conditions ("nếu giá quặng giữ ở vùng cao").
- **Sentiment vocabulary** (never "mua/bán" directly): `Tích cực` (bullish) · `Theo dõi` (neutral) · `Thận trọng` (bearish).
- **Trust language**: `Xác thực chuyên gia` (expert-verified), `Xác thực danh tính` (identity-verified), `Điểm tin cậy` (trust score), accuracy percentages.
- **Numbers**: Vietnamese formats — `135,000đ`, `18.6K tỷ`, `+0.72%`, `-214 tỷ`, `2N lượt xem` (N = nghìn), relative time `3 giờ trước`, `Hôm nay`.
- **Actions**: verb-first, short: `Theo dõi` / `Đang theo dõi`, `Khám phá`, `Đăng bài viết`.
- **Emoji**: none. Trust signals are rendered as components (badges, scores), never decorations.

## VISUAL FOUNDATIONS

- **Color vibe**: white pages, ink-near-black text (`--text-primary: #0B0F13`), cool gray support. One saturated hue at a time: orange = brand, blue = interactive, green/red = market up/down. Subtle tinted fills are always the hue at ~8% alpha (`--surface-*-subtle`), never pastel solids.
- **Primary actions are dark, not colored**: the default filled button is near-black (`--action-primary`); colored buttons exist only for `danger` (red) and `interactive` (blue) intents.
- **Type**: Geist; 5-role ramp (Display / Headline / Title / Label / Body) × (lg/md/sm) × (regular/emphasized-600). Body is 14/20, dense UI text is 12/16, page titles 32/40. Market numerals: tabular figures, often Geist Mono. See `tokens/typography.css` (`.typo-*` classes).
- **Spacing**: 4px base; cards pad 16–24px; control paddings follow height (lg→12px, md→8px, xs→4px).
- **Radius**: size scale none/4/8/12/16/20/28/32/48/full. Controls: 24px-high→4, 32px→8, 40px→12. Cards 12–20. Pills/badges/avatars full.
- **Borders**: hairline `rgba(17,22,28,.1216)` (`--border-default`), usually drawn as an **inset box-shadow** rather than a border. Subtle dividers at `.0784`.
- **Shadows**: 4-level neutral-ink elevation (`--elevation-1..4`), each paired with the hairline inset border (`--card-shadow`, `--popover-shadow`, `--dialog-shadow`). No colored glows. Inner shadow for wells.
- **Backgrounds**: flat white or `--gray-50`; no gradients, no textures, no full-bleed photography in the product UI. Imagery appears only as user content inside post cards.
- **Hover**: neutral alpha wash `--action-subtle-hover` (4% ink) on ghost/listed items; filled buttons lighten one step. **Press**: darken one step. No scale transforms.
- **Focus**: 2px offset blue ring (`--focus-ring`); error fields swap the hairline for a 1px red inset.
- **Motion**: quick and quiet — 120–260ms, `--ease-out` (cubic-bezier(.22,1,.36,1)); fades and small translates; no bounces.
- **Cards**: white, radius 12–16, `--card-shadow` (hairline + level-1), 16–24 padding. Elevated overlays climb the elevation ramp.
- **Transparency/blur**: essentially none — overlays use a 48% ink scrim, surfaces stay opaque.
- **Market color rules**: green up / red down / yellow reference, applied to text & icons only — never as backgrounds except the ~8% subtle fills.

## ICONOGRAPHY

- **System**: [Lucide](https://lucide.dev) — confirmed both in Figma (icon components are named `LockKeyhole`, `ArrowBigUp/Down`, etc.) and in the codebase (`lucide-react`). Stroke 2px, sized 16/20/24 (`sm/md/lg` icon components in Figma).
- **Usage in this system**: components render inline Lucide-path SVGs copied from the set (`assets/icons/` + `components/core/Icon.jsx`); prototypes may also load `lucide` from CDN.
- **Color**: icons inherit text color tokens (`--icon-primary/-tertiary/-on-action`…).
- **No emoji, no unicode glyph icons.** Rank/verification marks are dedicated components (dark pill + icon), not glyphs.
- **Brand marks**: the product lockup is a chart-column glyph on an ink rounded square + "Stockbook" wordmark; the mascot is an ink-black ninja with a brand-orange antenna (`assets/stockbook-mascot.png`). Ticker logos (e.g. FPT) appear as tiny rounded squares beside symbols; placeholder gray blocks are used when a real logo is unavailable.

---

## Index

| Path | What |
|---|---|
| `styles.css` | Global CSS entry (imports everything below) |
| `tokens/` | `colors.css`, `typography.css`, `spacing.css`, `elevation.css`, `fonts.css`, `base.css` |
| `figma/fig-tokens.css` | Full machine-generated Figma variables (incl. dark theme under `[data-theme="dark"]`) |
| `guidelines/` | Foundation specimen cards (Design System tab) + `figma-notes.md` (extracted component specs) |
| `assets/` | `stockbook-mascot.png` — ninja mascot (ink + brand orange) from the Figma Playground |
| `components/core/` | Button, IconButton, Icon, Spinner |
| `components/forms/` | Input, TextArea, Select, Checkbox, Radio, Switch |
| `components/data/` | Tag, Badge, Avatar, Progress, Skeleton, Table |
| `components/navigation/` | Tabs, Segmented, Breadcrumb |
| `components/feedback/` | Dialog, Message, Tooltip, Empty |
| `components/stockbook/` | VotePill, TickerChip, FollowButton, VerifiedBadge, RankBadge, PostCard, MarketStat |
| `ui_kits/stockbook/` | Community feed screen recreation (interactive) |
| `SKILL.md` | Agent-skill entry point |

### Caveats

- **Fonts**: no binaries were in the sources; Geist + Geist Mono are loaded from Google Fonts (same family the design uses, so fidelity is exact).
- The Figma **dark theme** exists in `figma/fig-tokens.css` (`[data-theme="dark"]`) but the curated layer + components target the light product theme.
- The codebase's dark trading theme (`stock-design/src/app/globals.css`) is documented but intentionally not reproduced.
