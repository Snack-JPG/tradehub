# Visual Design Reference — EKH Painting & Decorating

This document describes the visual aesthetic of the website so you can understand the design decisions and maintain consistency when adding content.

---

## 🎨 Overall Aesthetic

**Style:** Editorial Craftsmanship
**Inspiration:** Kinfolk magazine, Farrow & Ball, high-end interior design studios
**Feeling:** Warm, personal, premium, trustworthy—but not corporate or sterile

Think of the website as a **digital magazine spread** rather than a typical tradesperson site.

---

## Color Palette Breakdown

### Primary: Deep Sage Green
**Hex:** `#2D5A4B`
**RGB:** 45, 90, 75
**Feel:** Natural, calming, professional, trustworthy

**Used for:**
- Main navigation and headings
- Primary buttons (CTAs)
- Icons and accents
- Footer background

**Why this color?**
Sage green evokes the feeling of a freshly painted room with natural light. It's sophisticated without being cold, professional without being corporate. It suggests quality and craftsmanship.

---

### Secondary: Warm Cream/Beige
**Light Cream:** `#FAFAF5` (backgrounds)
**Mid Cream:** `#F5E6C8` (accents)
**Rich Cream:** `#D4A853` (gold highlights)

**Feel:** Warm, inviting, premium, comfortable

**Used for:**
- Page backgrounds
- Card backgrounds
- Button accents
- Decorative borders

**Why this color?**
Cream tones suggest warmth and quality finishes. Like a perfectly painted wall in soft natural light. It creates a welcoming atmosphere and pairs beautifully with sage green.

---

### Accent: Soft Gold
**Hex:** `#D4A853`
**Feel:** Premium, quality craftsmanship

**Used sparingly for:**
- Star ratings
- Decorative underlines
- Hover states
- Small highlights

---

## Typography System

### Display Font: Crimson Pro (Serif)
**Use:** All headings (H1, H2, H3, H4)
**Weights:** Regular (400), Semi-Bold (600), Bold (700)
**Character:** Editorial, refined, classic

**Why Crimson Pro?**
- Highly readable at large sizes
- Has a traditional "craftsman" quality
- Feels premium and magazine-like
- Distinctive without being overly decorative

**Headings sizes:**
- **H1 (Hero):** 72-96px — Bold, commanding presence
- **H2 (Sections):** 40-48px — Clear hierarchy
- **H3 (Cards):** 24-28px — Readable at a glance

---

### Body Font: Inter (Sans-Serif)
**Use:** All body text, buttons, small labels
**Weight:** Regular (400)
**Character:** Clean, modern, neutral

**Why Inter?**
- Exceptional readability on screens
- Neutral enough to let content shine
- Pairs beautifully with Crimson Pro
- Optimized for digital interfaces

**Body sizes:**
- **Paragraph text:** 16-18px
- **Small text:** 14px
- **Buttons:** 16-18px

---

## Spacing Philosophy

### Generous Breathing Room

The design uses **large spacing** to feel premium and uncluttered:

**Section padding:**
- Desktop: 96px top/bottom (6rem)
- Mobile: 64px top/bottom (4rem)

**Element spacing:**
- Headings to body: 24px (1.5rem)
- Between paragraphs: 16px (1rem)
- Between cards: 32px (2rem)

**Why generous spacing?**
White space = luxury. It makes content easier to read and gives the site a premium, editorial feel rather than a cramped, template-like appearance.

---

## Visual Elements

### Subtle Textures

The design includes barely-visible textures that add depth without being distracting:

1. **Paint Texture** (`.paint-texture`)
   - Very subtle vertical lines suggesting brush strokes
   - Used on white backgrounds
   - Opacity: 2% — almost invisible but adds character

2. **Grain Texture** (`.grain`)
   - Fine noise overlay
   - Used on dark sage backgrounds
   - Adds organic, hand-crafted feeling

3. **Gradient Backgrounds**
   - Soft transitions between sage tones
   - Used in hero and footer
   - Creates depth and visual interest

---

## Component Styles

### Buttons

**Primary Button** (Main CTAs)
- Background: Warm cream (`#D4A853`)
- Text: Deep sage
- Shape: Fully rounded (`rounded-full`)
- Padding: Large and clickable
- Hover: Slight scale-up (1.05x) + shadow

**Secondary Button** (Ghost style)
- Background: Transparent with white/10% tint
- Border: Cream with low opacity
- Text: Cream white
- Hover: Background becomes more opaque

---

### Cards

**Service Cards:**
- Border: 2px sage green (light)
- Background: Subtle cream gradient
- Rounded corners: 16px (`rounded-2xl`)
- Padding: 32px
- Hover: Border darkens, shadow appears, icon scales up

**Review Cards:**
- Background: Cream 50
- Border: 2px sage green (light)
- Rounded corners: 16px
- Stars: Gold fill
- Hover: Border darkens, shadow appears

---

### Icons

**Icon style:**
- Lucide React icons (clean, consistent)
- Size: 20-28px for UI, 48-64px for feature icons
- Color: Match surrounding text or use sage/cream
- Background circles: Sage green with cream icons

**Icon usage:**
- Trust badges (star, clock, shield)
- Service categories (paintbrush, home, wallpaper)
- Contact methods (phone, mail, map pin)
- Decorative placeholders (sparkles)

---

## Photography Guidelines

### Image Style Recommendations

When adding real project photos, follow these guidelines for consistency:

**Color grading:**
- **Warm tones** — Avoid overly cool/blue images
- **Natural lighting** — Show rooms in natural daylight when possible
- **Soft shadows** — Not harsh or blown-out

**Composition:**
- **Clean and uncluttered** — Showcase the paintwork, not messy rooms
- **Wide shots for rooms** — Show the transformation
- **Close-ups for details** — Highlight craftsmanship

**What to photograph:**
- Freshly painted walls (clean, crisp lines)
- Before/after comparisons (powerful social proof)
- Work in progress (humanizes the process)
- Glen and Nina at work (personal touch)

---

## Animation Philosophy

### Slow and Luxurious

Animations should feel **deliberate and premium**, not rushed or gimmicky.

**Duration guidelines:**
- Fade ins: 0.6-0.8 seconds
- Slides: 0.6 seconds
- Scales/hovers: 0.3 seconds
- Page load stagger: 0.1s delay between elements

**Animation types used:**

1. **Fade In Up** (Hero, section headings)
   - Starts 20px below, fades in and slides up
   - Creates elegant reveal

2. **Stagger Children** (Service cards, reviews)
   - Each card reveals 0.1s after the previous
   - Creates wave effect

3. **Scale on Hover** (Buttons, cards)
   - Subtle 1.05-1.1x growth
   - Feels interactive and responsive

4. **Floating** (WhatsApp button)
   - Gentle up-and-down motion
   - Draws attention without being annoying

---

## Layout Patterns

### Asymmetric Balance

The design avoids rigid 50/50 splits and instead uses **asymmetric balance**:

**About Section:**
- Image: 45% width
- Content: 55% width
- Offset alignment creates visual interest

**Contact Section:**
- Form: Larger (60%)
- Info + image: Smaller (40%)
- Emphasizes the form as primary action

**Gallery:**
- Uniform grid, but staggered reveal
- Creates rhythm without rigidity

---

## Responsive Behavior

### Mobile-First Approach

The site is designed for mobile first, then enhanced for larger screens.

**Mobile (< 768px):**
- Single column layouts
- Larger text (18px minimum body)
- Bigger touch targets (minimum 44x44px)
- WhatsApp button: 55px diameter
- Stacked sections

**Tablet (768px - 1024px):**
- Two-column grids where appropriate
- Service cards: 2 columns
- Reviews: 2 columns

**Desktop (> 1024px):**
- Three-column grids for cards
- Asymmetric two-column layouts
- Maximum content width: 1280px
- Centered with side margins

---

## Visual Hierarchy

### How the Eye Flows

The design guides visitors through a clear path:

1. **Hero** — Massive "EKH" logo grabs attention
2. **Headline** — Clear value proposition
3. **5-star badge** — Immediate social proof
4. **CTA buttons** — Call to action
5. **Scroll down** — Gradient suggests more content below

Each section follows this pattern:
- **Heading** — What this section is about
- **Subtext** — Supporting explanation
- **Content** — Cards, reviews, images
- **Visual accent** — Gold underline or decorative element

---

## Branding Elements

### Logo/Wordmark

**Style:** Text-based (no graphic logo)
- **"EKH"** — Large, bold, serif
- **"Painting & Decorating"** — Smaller, uppercase, sans-serif, letterspaced

**Placement:**
- Hero: Center, very large (96px+)
- Footer: Smaller (24px)

**Why text-based?**
Glen doesn't have a logo yet, so the wordmark IS the logo. Large serif letters feel established and premium.

---

### Decorative Accents

**Gold Underlines:**
- Small accent bars under headings
- 60px wide, 4px thick
- Gradient from gold to transparent
- Suggests a brush stroke

**Border Treatments:**
- 2px borders in sage green
- Rounded corners (8-16px)
- Subtle shadows on hover
- Never harsh or heavy

---

## Mood Board Reference

If you're gathering photos or designing new elements, use these references:

**Magazine Aesthetics:**
- Kinfolk Magazine (editorial layouts)
- Cereal Magazine (travel/lifestyle)
- Monocle (premium publication)

**Interior Design Brands:**
- Farrow & Ball (paint company site)
- Little Greene (sophisticated color)
- Neptune (furniture—warm, classic)

**Color Inspiration:**
- Sage painted rooms in natural light
- Warm cream walls at golden hour
- Earthy, natural palettes

**NOT like this:**
- Bright primary colors
- Corporate blue/grey
- Harsh black and white
- Generic stock photos
- Template-like layouts

---

## Quality Checklist

When adding content or making changes, ask:

- [ ] Does this feel **warm and personal** (not corporate)?
- [ ] Is there enough **breathing room** around elements?
- [ ] Do the **colors match** the sage/cream palette?
- [ ] Are **fonts consistent** (Crimson for headings, Inter for body)?
- [ ] Are **images warm-toned** and well-lit?
- [ ] Do **animations feel smooth** and not rushed?
- [ ] Is it **mobile-friendly** and easy to tap?
- [ ] Does the **hierarchy guide** the eye naturally?

---

## Final Thoughts

This design isn't about flashy effects or trendy styles. It's about creating a **warm, trustworthy, premium** experience that reflects Glen and Nina's craftsmanship.

Every design choice—from the generous spacing to the warm cream tones to the flowing animations—is intentional and serves the goal of making visitors feel:

1. **This is a quality service** (premium aesthetics)
2. **These are real people** (personal language, human photos)
3. **I can trust them** (reviews, clear contact info)
4. **I should call now** (prominent CTAs)

Maintain this aesthetic, and the site will continue to work beautifully for years to come.
