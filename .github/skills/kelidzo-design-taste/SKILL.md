---
name: kelidzo-design-taste
description: Design system and frontend taste rules for the Kelidzo website — a cultural editorial studio site (Culture, Community, Creativity, Conversation, Opportunity). Use this skill whenever writing, editing, or reviewing ANY frontend code for Kelidzo — components, pages, layouts, CSS, Tailwind config, or copy placement — even if the person doesn't say "design" or "style." Also use it when scaffolding new pages/components, when a generated screen looks generic or off-brand, or when asked to match thenativemag.com or marmaladecollective.com layout patterns. This skill exists specifically to stop the agent from defaulting to generic AI-slop UI (neon/pastel colors, default sans-serif everywhere, floating cards, oversized rounded corners, boilerplate spacing) on this project.
---

# Kelidzo Design Taste

Kelidzo is a cultural editorial studio celebrating, documenting, and connecting African and Black stories, people, and communities (Western Canada + global diaspora). The brand is warm, thoughtful, confident-never-superior, and archival — like a well-kept dossier, not a startup landing page. Every frontend decision on this project should be checked against that identity before it's checked against generic best practice.

**Iron Law: if a component you're about to generate would look at home on a generic SaaS landing page, it's wrong for Kelidzo. Stop and re-derive it from the tokens and motifs below.**

## 1. Design Tokens (use these as CSS variables / Tailwind theme extension — never hardcode hex values inline)

```css
:root {
  --color-cream: #FAF5EA;       /* primary background */
  --color-cream-deep: #F0E4CB;  /* section/card background */
  --color-ink: #1E1712;         /* primary body text, dark UI */
  --color-ink-deep: #170e07;    /* darkest punctuation sections */
  --color-brown: #4A2E18;       /* accent, secondary text */
  --color-brown-deep: #2A1A0E;  /* dark cards, overlays */
  --color-gold: #C68A1F;        /* highlights, links, tags */
  --color-gold-bright: #dba332; /* hover/active states */

  --font-display: 'Fraunces', serif;        /* headlines, hero statements */
  --font-body: 'Work Sans', sans-serif;     /* paragraphs, descriptions */
  --font-label: 'Space Mono', monospace;    /* eyebrows, folio numbers, tags, buttons */
}
```

**Hard rule:** gold is the only bright accent in the whole palette. If a component needs a second bright color to feel "done," that's a signal to remove something rather than add a color.

## 2. Anti-Slop Bans (do not do these on this project, ever)

- No neon or pastel colors of any kind — not even for error/success states (use ink/brown-deep for errors, gold for success/active).
- No default system sans-serif for headlines — Fraunces only for anything headline-weight.
- No floating drop-shadow cards with large border-radius (>8px) — Kelidzo's card language is flat, bordered, or framed, not "glassy."
- No generic hero pattern of centered headline + centered subhead + centered button on a gradient — see Section 4 for the actual hero pattern.
- No icon-grid "features" section (the three-icons-in-a-row SaaS pattern) — use pill tags and folio-numbered rails instead.
- No stock "diverse team" or agency-style photography placeholders — use warm portrait / documentary-style image descriptions even in placeholder/alt text.
- No unstyled browser-default form inputs — inputs get the same monospace-label, bordered treatment as buttons.

## 3. Recurring Motifs (apply site-wide, every page, not just the homepage)

- **Folio numbering** — every major section/page carries a small printed-dossier-style number (e.g. `04 / 11`), auto-incrementing per template rather than hardcoded.
- **Pill tags** — bordered pills for categories everywhere (never inline comma-separated lists).
- **Flow chains** — arrow-connected labeled steps for journeys (horizontal desktop, vertical mobile).
- **Stamp buttons** — short, all-caps, `--font-label`, styled like a rubber stamp: solid fill for primary, outline for secondary.
- **Dark punctuation sections** — full-bleed `--color-ink` / `--color-brown-deep` sections used sparingly, only at high-conviction moments (Community CTA, Studio intro).
- **Browser-chrome frame** — reserved ONLY for Studio/Selected Work screenshots, never used elsewhere.
- **Byline block** — small circular author avatar + name on every story/article card, styled in `--font-label`.

## 4. Layout Patterns (borrowed structure, not visual style, from two reference sites)

From **thenativemag.com** — use for the **Homepage**:
- Two-tier nav: a slim utility row (socials, search, newsletter) above the main nav row.
- Hero and Featured Stories as **stacked cover-story blocks**: large Fraunces headline + one-line dek + "Read more" link, over a full-bleed image — not a single centered hero.
- The rest of the homepage (pillars, Community, Opportunities, Programmes, Studio, Archive) is a **vertically stacked sequence of distinct rails**, each with its own heading and row of cards — density over one long undifferentiated scroll.

From **marmaladecollective.com** — use for **Stories index, Archive, and any listing/feed page**:
- Single-column, full-width feed cards: image, byline block, pill tag, Fraunces headline, excerpt. Generous whitespace between entries — not a tight grid.
- Inline email capture directly in a hero, not only at the page bottom.
- A "Recommended"-style module of smaller thumbnail cards, and (where relevant) a "meet the contributors" module of stacked avatars.

Kelidzo's own tokens and motifs (Section 1–3) sit on top of both structures — the reference sites are borrowed for pacing and information density only, never for color or type.

## 5. Component Checklist (verify these exist and follow the rules above before considering a page "done")

- Header: two-tier nav, "Work With Kelidzo" CTA visually distinct from main nav links
- Footer: four link columns (Explore / Kelidzo / Connect / Legal) + socials
- Story Card: image, byline (avatar+name), pill tag, Fraunces title, excerpt
- Pillar Tile: one of Culture / Community / Creativity / Conversation / Opportunity, one-line description
- Opportunity Card: title, type pill, deadline (prominent, monospace), org
- Programme Card: title, type pill, date/time, format
- Archive Card: mixed type (interview/photo/story/event), place/year/topic tags
- Newsletter Signup: full variant (homepage) + compact variant (footer)
- Flow Chain: horizontal desktop / vertical mobile, arrow-connected steps
- Stamp Button: primary (filled) and secondary (outline) variants

## 6. Voice Rules for UI Copy

- Buttons read like a decision, not a request: "Step Into Kelidzo," not "Learn More" or "Get Started."
- Never possessive/exclusionary language — invites without implying ownership of a shared culture.
- No generic agency/startup phrasing anywhere: avoid "Our Solutions," "Get Started Today," "Trusted By," etc.
- The Creative Studio section/page must never outrank the editorial identity — visually (less nav weight, appears after cultural sections) or tonally (no agency-pitch language).

## 7. When You're Unsure

If a generated component doesn't clearly map to Section 5's checklist or Section 1's tokens, don't invent a new pattern — ask which existing motif (pill tag, rail, flow chain, stamp button, dark punctuation section) it should reuse instead of introducing something new. Kelidzo's whole visual identity depends on a small, consistent set of moves repeated everywhere, not variety.
