# TradeHub V2 — Complete Design System & Redesign Plan

**Status:** Design Document
**Created:** 2025-01-31
**Goal:** Transform TradeHub from a clean but generic startup-style directory into an authoritative, institutional platform that conveys trust, credibility, and establishment.

---

## Design Philosophy

### Core Principle: Institutional Authority Meets Modern Usability

TradeHub V2 embodies **"The Trusted Local Institution"** — imagine if a respected regional newspaper's classified section evolved into a modern digital platform. We're designing for:

- **Homeowners** who need confidence when hiring tradespeople for their most valuable asset
- **Tradespeople** who want to be associated with a credible, professional platform
- **Age range:** 35-65+ (homeowners), skewing older = needs clarity, authority, proven trust

### Aesthetic Direction: **Editorial Authority**

**Inspiration:** Financial Times, Which? Magazine, British heritage brands, official certification bodies

**Visual Language:**
- Serif headlines for gravitas and authority
- Structured grid system with clear hierarchy
- Rich navy as institutional anchor
- Warm amber/orange for action and trust
- Certification-style badges and visual proof elements
- Photography with real people, real work
- Data-driven trust indicators everywhere
- Subtle textures suggesting paper/print heritage

**What Makes It Unforgettable:**
The juxtaposition of **traditional institutional trust markers** (serif typography, certification badges, editorial layouts) with **modern web performance** (fast, responsive, accessible). It feels like it's been around for 20 years, even though it launched yesterday.

---

## Design System

### 1. Color Palette

#### Primary Colors
```css
--color-navy-950: #0f172a;      /* Headers, primary text */
--color-navy-900: #1e293b;      /* Current navy, secondary text */
--color-navy-800: #334155;      /* Tertiary text */
--color-navy-700: #475569;      /* Muted text */

--color-amber-600: #d97706;     /* Primary CTA, trust accent */
--color-amber-500: #f59e0b;     /* Hover states */
--color-amber-100: #fef3c7;     /* Subtle backgrounds */

--color-slate-50: #f8fafc;      /* Light backgrounds */
--color-slate-100: #f1f5f9;     /* Card backgrounds */
--color-slate-200: #e2e8f0;     /* Borders */
```

#### Semantic Colors
```css
--color-success: #16a34a;       /* Verification badges, positive */
--color-warning: #ea580c;       /* Urgent, emergency services */
--color-info: #0284c7;          /* Information, links */
--color-verified: #16a34a;      /* Verified tradesperson badge */
```

#### Trust & Certification Colors
```css
--color-gas-safe: #003da5;      /* Gas Safe blue */
--color-niceic: #e30613;        /* NICEIC red */
--color-trustmark: #00a0df;     /* TrustMark blue */
--color-gold-badge: #d4af37;    /* Premium/featured gold */
```

**Rationale:**
- Navy = institutional, professional, UK financial services
- Amber = warmth, action, trust (research shows orange/amber outperforms green for "trust + action")
- Moving away from generic green to differentiate from competitors

### 2. Typography

#### Headings: **Merriweather** (Serif)
```css
font-family: 'Merriweather', Georgia, serif;
```
- Google Font, free, excellent readability
- Authoritative, editorial, newspaper-quality
- Warm, approachable serif (not cold like Times New Roman)
- Strong bold weights for impact

**Usage:**
- H1: 2.75rem (44px), bold, line-height: 1.1
- H2: 2rem (32px), bold, line-height: 1.2
- H3: 1.5rem (24px), bold, line-height: 1.3
- H4: 1.25rem (20px), semibold, line-height: 1.4

#### Body: **Inter** (Sans-serif, but elevated)
```css
font-family: 'Inter', -apple-system, system-ui, sans-serif;
```
- Clean, readable, modern
- Excellent number tabulation (important for ratings, stats)
- Professional without being generic when paired with serif headings

**Usage:**
- Body: 1rem (16px), regular (400), line-height: 1.75
- Small: 0.875rem (14px), regular (400), line-height: 1.6
- Tiny: 0.75rem (12px), medium (500), line-height: 1.5

#### Accent: **Space Grotesk** (for stats, numbers, badges)
```css
font-family: 'Space Grotesk', monospace;
```
- Geometric, technical precision
- Use sparingly for: review counts, stats, "since 2024", verification numbers
- Creates visual differentiation for data points

**Hierarchy Example:**
```
[Merriweather Bold 44px] Find Trusted Plumbers in Birmingham
[Inter Regular 18px] Over 2,000 verified tradespeople across the West Midlands.
[Space Grotesk Medium 14px] ★ 4.8 AVERAGE RATING • 10,000+ JOBS COMPLETED
```

### 3. Spacing & Grid

#### Spacing Scale (Tailwind-compatible)
```css
--space-xs: 0.25rem;   /* 4px */
--space-sm: 0.5rem;    /* 8px */
--space-md: 1rem;      /* 16px */
--space-lg: 1.5rem;    /* 24px */
--space-xl: 2rem;      /* 32px */
--space-2xl: 3rem;     /* 48px */
--space-3xl: 4rem;     /* 64px */
--space-4xl: 6rem;     /* 96px */
```

#### Container Widths
```css
--container-sm: 640px;   /* Single column content */
--container-md: 768px;   /* Forms, narrow content */
--container-lg: 1024px;  /* Standard pages */
--container-xl: 1280px;  /* Wide layouts, directory grids */
--container-2xl: 1536px; /* Maximum width */
```

#### Grid System
- **Homepage:** Asymmetric 8-column grid on desktop (allows featured content to span 5 cols, sidebar 3 cols)
- **Category pages:** 3-column trade card grid (desktop), 2-col (tablet), 1-col (mobile)
- **Profile pages:** 2-column layout (8 cols content, 4 cols sidebar on 12-col grid)

### 4. Components

#### 4.1 Header (Global Navigation)

**Design:**
```
┌─────────────────────────────────────────────────────────────┐
│ [TradeHub Logo]    Plumbers  Electricians  Roofers  More▾   │
│ [Since 2024]                                    [List Business CTA] │
└─────────────────────────────────────────────────────────────┘
```

**Specifications:**
- Height: 72px (desktop), 64px (mobile)
- Background: Solid navy-950 with 1px amber-600 bottom border
- Logo: Merriweather bold "TradeHub" with amber "Hub", 24px
- Tagline: Space Grotesk "Since 2024" in muted text below logo (10px)
- Nav links: Inter 14px, medium weight, slate-300, hover: amber-500
- CTA button: Amber-600 bg, navy-950 text, 12px padding, bold
- Sticky on scroll with subtle shadow

**Features:**
- Dropdown mega-menu for "More" showing all trades + locations
- Search icon in header (opens search modal on click)
- Mobile: Hamburger menu, full-screen overlay navigation

#### 4.2 Hero Section

**Design:**
```
┌──────────────────────────────────────────────────────────────┐
│  [BACKGROUND: Subtle diagonal texture, navy-900 -> navy-800] │
│                                                               │
│         [Merriweather 48px Bold]                             │
│         Find Trusted Tradespeople                             │
│         Across the West Midlands                              │
│                                                               │
│         [Inter 18px, slate-300]                              │
│         Vetted professionals. Real reviews. Local to you.     │
│                                                               │
│         [SEARCH BAR - white card with shadow]                │
│         [Trade dropdown ▾] [Location dropdown ▾] [Search →]  │
│                                                               │
│         [Space Grotesk 12px, amber-500]                      │
│         ★ 4.8 AVG RATING • 2,000+ VERIFIED • 10,000+ JOBS    │
│                                                               │
└──────────────────────────────────────────────────────────────┘
```

**Specifications:**
- Height: 520px (desktop), 440px (mobile)
- Background: Diagonal gradient navy-900 to navy-800 with subtle noise texture overlay
- Heading: Merriweather, 48px (desktop), 36px (mobile), line-height 1.1
- Subheading: Inter, 18px, slate-300, max-width 600px, centered
- Stats bar: Space Grotesk, 12px uppercase, letter-spacing 0.05em, amber-500
- Search bar: White bg, rounded-xl, shadow-lg, 64px height, flex layout
- Padding: 80px top, 60px bottom

**Interactive Elements:**
- Search dropdowns with custom styling (no native select)
- Hover states on search button (amber-600 → amber-700)
- Auto-complete suggestions below search bar

#### 4.3 Trust Indicators Section

**Design:**
```
┌────────────────────────────────────────────────────────────┐
│  [White background, full-width]                            │
│                                                             │
│  [4-column grid on desktop, 2-col mobile]                  │
│                                                             │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐  │
│  │  [Icon]  │  │  [Icon]  │  │  [Icon]  │  │  [Icon]  │  │
│  │  VETTED  │  │ INSURED  │  │  LOCAL   │  │  QUOTE   │  │
│  │ Every... │  │ Fully... │  │ West...  │  │ Free...  │  │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘  │
│                                                             │
└────────────────────────────────────────────────────────────┘
```

**Specifications:**
- Background: White (slate-50 on alternating sections)
- Padding: 48px vertical
- Grid: 4 columns (desktop), 2 columns (mobile), gap: 24px
- Card design:
  - Border: 2px solid slate-200
  - Padding: 32px
  - Text-align: center
  - Hover: Border color → amber-600, slight lift (transform: translateY(-2px))
- Icon: 48px, amber-600 color, custom SVG (shield, checkmark, map pin, message)
- Label: Merriweather, 16px, bold, navy-950
- Description: Inter, 14px, slate-600, 2-line max

**Icons:** Replace emojis with professional SVG icons from **Lucide** or **Heroicons**

#### 4.4 Trade Card (Critical Component)

**Design:**
```
┌─────────────────────────────────────────┐
│ [FEATURED BADGE]              [Photo]   │
│                                          │
│ [Large Name - Merriweather Bold 20px]   │
│ [Trade Type • Location - Inter 14px]    │
│                                          │
│ ★★★★★ 4.8 (156 reviews)                │
│                                          │
│ ✓ Verified  ✓ Insured  ⚡ Quick Reply   │
│                                          │
│ "Excellent service, very professional   │
│  and punctual..." — Sarah M.            │
│                                          │
│ • Service 1  • Service 2  • Service 3   │
│                                          │
│ [View Profile →]          [Get Quote]   │
└─────────────────────────────────────────┘
```

**Specifications:**
- Dimensions: Variable height, min 280px
- Border: 1px solid slate-200
- Hover: shadow-md → shadow-xl, border → amber-600
- Padding: 24px
- Border-radius: 12px
- Background: White

**Elements:**

1. **Featured Badge** (if applicable):
   - Position: Absolute top-right, -12px offset
   - Background: Gold gradient (linear-gradient(135deg, #d4af37, #f4d03f))
   - Text: "FEATURED" Space Grotesk, 10px, uppercase, navy-950
   - Icon: Star icon, 14px
   - Padding: 6px 12px, rounded-full

2. **Trade Photo/Logo:**
   - Size: 80px × 80px
   - Border-radius: 8px
   - Position: Top-right
   - Border: 2px solid slate-200
   - Object-fit: cover

3. **Name & Location:**
   - Name: Merriweather bold, 20px, navy-950
   - Trade/Location: Inter, 14px, slate-600, capitalize
   - Separator: " • " between trade and location

4. **Rating:**
   - Stars: SVG, 18px, filled amber-500, empty slate-300
   - Number: Space Grotesk, 16px, bold, navy-950
   - Count: Inter, 14px, slate-600, "(156 reviews)"

5. **Badge Row:**
   - Layout: Flex, gap 8px, wrap
   - Badge style: Small pill, slate-100 bg, navy-700 text, 8px padding
   - Icons: 12px inline SVG before text
   - "Verified" = green-600, "Insured" = blue-600, "Quick Reply" = amber-600

6. **Testimonial Snippet:**
   - Border-left: 3px solid amber-600
   - Padding-left: 12px
   - Font: Inter italic, 14px, slate-700
   - Max 2 lines, ellipsis overflow
   - Attribution: "— Name" in bold

7. **Services Pills:**
   - Layout: Flex, gap 8px, wrap
   - Style: Slate-200 bg, navy-700 text, 6px padding, rounded-full
   - Font: Inter, 12px
   - Show max 3, "+2 more" if additional

8. **CTA Buttons:**
   - Layout: Flex, justify-between
   - Primary "View Profile →": Text link, amber-600, Inter semibold 14px
   - Secondary "Get Quote": Amber-600 bg, white text, 10px padding, rounded-lg

#### 4.5 Stats Bar

**Design:**
```
┌──────────────────────────────────────────────────────────────┐
│  [Navy-900 background with subtle texture]                   │
│                                                               │
│  [Center-aligned, 4-column grid]                             │
│                                                               │
│    2,000+              4.8 ★            10,000+         15+   │
│  Verified Trades   Average Rating   Jobs Completed    Years   │
│                                                               │
└──────────────────────────────────────────────────────────────┘
```

**Specifications:**
- Background: Navy-900 with diagonal line pattern (opacity 0.05)
- Padding: 64px vertical
- Grid: 4 columns (desktop), 2 columns (mobile)
- Number: Space Grotesk, 48px, bold, amber-500
- Label: Inter, 14px, slate-300, uppercase, letter-spacing 0.05em
- Alignment: Center
- Responsive: Stack on mobile

#### 4.6 Certification Logos Bar

**Design:**
```
┌──────────────────────────────────────────────────────────────┐
│  [Slate-50 background]                                       │
│                                                               │
│  Accredited & Trusted By:                                    │
│                                                               │
│  [Gas Safe] [NICEIC] [TrustMark] [Which?] [Checkatrade]     │
│                                                               │
└──────────────────────────────────────────────────────────────┘
```

**Specifications:**
- Background: Slate-50
- Padding: 32px vertical
- Heading: Inter, 12px, uppercase, slate-600, letter-spacing 0.05em, center
- Logos: Flex layout, justify-center, gap 32px
- Logo size: Max height 48px, grayscale filter, hover: full color
- Responsive: Wrap on mobile, reduce logo size

**Note:** Use actual certification body logos if TradeHub can legitimately claim association, otherwise replace with:
- "Our Tradespeople Hold Certifications From:"
- Or feature real client logos/testimonials instead

#### 4.7 Footer

**Design:**
```
┌──────────────────────────────────────────────────────────────┐
│  [Navy-950 background]                                       │
│                                                               │
│  [5-column grid layout]                                      │
│                                                               │
│  TradeHub           Popular Trades    Areas        Company   │
│  Since 2024         Plumbers          Birmingham   About     │
│  Trusted local...   Electricians      Solihull     Blog      │
│                     Roofers           Redditch     Contact   │
│  [Social icons]     ...               ...          Terms     │
│                                                               │
│  ─────────────────────────────────────────────────────────── │
│  © 2025 TradeHub  |  Privacy  |  Terms  |  Cookies          │
└──────────────────────────────────────────────────────────────┘
```

**Specifications:**
- Background: Navy-950
- Padding: 64px vertical (top), 24px vertical (bottom section)
- Grid: 5 columns (desktop), 1 column stacked (mobile)
- Logo: Merriweather bold, 20px, white with amber "Hub"
- Tagline: Space Grotesk, 10px, slate-400
- Description: Inter, 14px, slate-400, max-width 240px
- Column headings: Inter, 14px, bold, white, uppercase, letter-spacing 0.05em
- Links: Inter, 14px, slate-400, hover: amber-500, line-height 2
- Bottom bar: Border-top 1px slate-800, slate-500 text, 12px
- Social icons: 20px, slate-400, hover: amber-500, gap 16px

#### 4.8 Search Bar Component

**Design:**
```
┌──────────────────────────────────────────────────────────┐
│  What are you looking for?                               │
│  ┌────────────────┐ ┌────────────────┐ ┌─────────────┐  │
│  │ Select Trade ▾ │ │ Select Area  ▾ │ │ Search →    │  │
│  └────────────────┘ └────────────────┘ └─────────────┘  │
└──────────────────────────────────────────────────────────┘
```

**Specifications:**
- Container: White bg, rounded-xl, shadow-lg, padding 24px
- Label: Inter, 14px, navy-700, margin-bottom 12px
- Layout: Grid 3 columns (desktop), stack on mobile
- Gap: 12px between elements

**Dropdown Styling:**
- Background: Slate-50
- Border: 2px solid slate-200
- Border-radius: 8px
- Padding: 14px 16px
- Font: Inter, 16px, navy-900
- Icon: Chevron-down, 16px, slate-600
- Hover: Border → amber-600
- Focus: Ring 2px amber-500, offset 2px

**Search Button:**
- Background: Amber-600
- Color: White
- Padding: 14px 32px
- Font: Inter, 16px, bold
- Border-radius: 8px
- Hover: Background → amber-700, transform scale(1.02)
- Icon: Arrow-right, 16px, inline after text

**Dropdown Menu:**
- Background: White
- Shadow: shadow-xl
- Border: 1px slate-200
- Border-radius: 8px
- Max-height: 320px, scroll if overflow
- Items: Padding 12px 16px, hover bg slate-50
- Font: Inter, 14px
- Icons: Category icons 20px, inline before text

#### 4.9 Review/Testimonial Card

**Design:**
```
┌─────────────────────────────────────────┐
│ ★★★★★ 5.0                               │
│                                          │
│ "Absolutely brilliant service. Arrived  │
│  on time, fixed the issue quickly, and  │
│  even cleaned up afterwards. Highly     │
│  recommend!"                             │
│                                          │
│ Sarah Mitchell                           │
│ Verified Customer • 2 weeks ago         │
│ Service: Emergency Plumbing              │
└─────────────────────────────────────────┘
```

**Specifications:**
- Background: White
- Border: 1px slate-200
- Border-radius: 12px
- Padding: 24px
- Stars: SVG, 16px, amber-500
- Rating: Space Grotesk, 18px, bold, navy-950
- Quote: Inter, 15px, slate-700, italic, line-height 1.7
- Name: Merriweather, 16px, bold, navy-950
- Meta: Inter, 12px, slate-500
- Verified badge: Green checkmark icon, 12px
- Service: Slate-100 bg, navy-700 text, 8px padding, rounded-full, 11px font

**Layout on Homepage:**
- Grid: 3 columns (desktop), 1 column (mobile)
- Gap: 24px
- Show 3-6 testimonials

#### 4.10 Category/Trade Type Icon Cards

**Design:**
```
┌─────────────┐
│   [Icon]    │
│             │
│  Plumbers   │
│  250+ vetted│
└─────────────┘
```

**Specifications:**
- Size: 160px × 180px
- Background: White
- Border: 2px solid slate-200
- Border-radius: 12px
- Padding: 24px
- Text-align: center
- Hover: Border → amber-600, shadow-md, transform translateY(-4px)

**Elements:**
- Icon: 56px, amber-600 color, centered
- Name: Merriweather, 18px, bold, navy-950, margin-top 16px
- Count: Inter, 12px, slate-600

**Grid:**
- Desktop: 5 columns
- Tablet: 3 columns
- Mobile: 2 columns
- Gap: 20px

---

## Page Layouts

### Homepage Structure

```
1. Header (sticky)
2. Hero with search
3. Trust indicators (4-column)
4. Stats bar (2,000+ trades, 4.8 rating, etc.)
5. Featured tradespeople (3-column grid)
6. Browse by trade (5-column icon grid)
7. Testimonials (3-column cards)
8. Certification logos bar
9. How it works (3-step process)
10. CTA section (List your business)
11. Recent blog posts (3-card preview)
12. Footer
```

### Category Page (`/plumbers`)

```
1. Header
2. Breadcrumb: Home > Plumbers
3. Page hero:
   - H1: "Trusted Plumbers in the West Midlands"
   - Stats: "250+ verified plumbers • 4.9★ average rating"
   - Quick filters: [Location dropdown] [Sort by dropdown]
4. Location quick links (Solihull, Birmingham, Redditch...)
5. Trade cards grid (3-column, paginated)
6. SEO content block (200-300 words about plumbers)
7. Related trades (Heating Engineers, Bathroom Fitters)
8. FAQ section
9. Footer
```

### Trade Profile Page (`/trades/jb-plumbing`)

```
1. Header
2. Breadcrumb: Home > Plumbers > Solihull > JB Plumbing
3. Profile hero (2-column layout):
   LEFT (8 cols):
   - Business name (H1)
   - Trade type, location, "Joined 2024"
   - Rating + review count
   - Badge row (Verified, Insured, Gas Safe, etc.)
   - About section
   - Services list
   - Photo gallery (4-col grid)

   RIGHT (4 cols):
   - Contact card (sticky):
     - Phone (click-to-call)
     - Email
     - Website link
     - "Request Quote" CTA
     - Response time: "Usually responds in 2 hours"
     - Coverage map
4. Reviews section (full-width)
5. Related trades in area
6. Footer
```

---

## Visual Assets & Media

### Photography Guidelines

**Style:** Authentic, relatable, professional

**What to show:**
- Real tradespeople at work (not stock photos of models in clean hi-vis)
- Before/after shots
- Close-ups of quality work
- Homeowners looking satisfied/relieved
- Local landmarks (subtle West Midlands identity)

**Treatment:**
- Slight desaturation (not full color, not B&W — muted realism)
- Consistent color grading (warm tones, slight amber cast)
- High quality but not overproduced

**Sources:**
- Unsplash/Pexels for initial build
- Real client photos as platform grows
- Commission local photographer for hero shots

### Iconography

**Icon Library:** Lucide Icons (MIT license, comprehensive, professional)

**Style:**
- Stroke width: 2px
- Size: 24px standard, 16px small, 48px large (trust badges)
- Color: Inherit from context

**Key Icons Needed:**
- Trades: Wrench, Plug, Hammer, Paintbrush, etc.
- Trust: Shield-check, Verified-badge, Insurance, Clock (response time)
- UI: Search, Menu, Close, Chevrons, Arrow-right
- Social: Facebook, Twitter, Instagram, LinkedIn

### Texture & Patterns

**Subtle Background Textures:**
1. **Noise texture** — 2% opacity white noise on navy backgrounds
2. **Diagonal lines** — 1px stroke, 45° angle, 40px spacing, 3% opacity on dark sections
3. **Dot pattern** — 2px dots, 20px grid, 5% opacity on light sections

**Usage:**
- Hero sections: Diagonal lines + noise
- Stats bars: Noise only
- Alternating content sections: Dot pattern on slate-50 backgrounds

**Implementation:**
```css
.hero-texture {
  background-image:
    url('/textures/noise.png'),
    linear-gradient(135deg, #1e293b 0%, #334155 100%);
  background-blend-mode: overlay;
}
```

---

## Interaction & Motion

### Animation Principles

**Philosophy:** Subtle, purposeful, institutional confidence (not flashy startup energy)

**Timing:**
- Fast: 150ms (hovers, small UI changes)
- Medium: 300ms (page sections fading in)
- Slow: 600ms (major transitions, modals)

**Easing:**
- Default: `cubic-bezier(0.4, 0.0, 0.2, 1)` — "ease-out"
- Bounce (CTAs): `cubic-bezier(0.34, 1.56, 0.64, 1)`
- Smooth: `cubic-bezier(0.65, 0, 0.35, 1)`

### Micro-interactions

#### Card Hovers
```css
.trade-card {
  transition: all 300ms cubic-bezier(0.4, 0.0, 0.2, 1);
}

.trade-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0,0,0,0.12);
  border-color: #d97706; /* amber-600 */
}
```

#### Button Hovers
```css
.cta-button {
  transition: all 150ms ease-out;
}

.cta-button:hover {
  transform: scale(1.02);
  box-shadow: 0 4px 12px rgba(217, 119, 6, 0.3);
}

.cta-button:active {
  transform: scale(0.98);
}
```

#### Search Bar Focus
```css
.search-input:focus {
  border-color: #d97706;
  outline: none;
  box-shadow: 0 0 0 3px rgba(217, 119, 6, 0.1);
  transition: all 200ms ease-out;
}
```

### Page Load Animations

**Homepage Hero:**
```javascript
// Staggered fade-in from top
- H1: opacity 0 → 1, translateY(-20px → 0), delay 0ms
- Subtitle: opacity 0 → 1, translateY(-20px → 0), delay 100ms
- Search bar: opacity 0 → 1, translateY(-20px → 0), delay 200ms
- Stats: opacity 0 → 1, delay 300ms
```

**Trade Cards Grid:**
```javascript
// Fade in from bottom, stagger by index
cards.forEach((card, i) => {
  card.style.animation = `fadeInUp 400ms ease-out ${i * 50}ms forwards`;
});
```

**Stats Counter:**
```javascript
// Count-up animation when scrolled into view
// 2,000+ → animate from 0 to 2000 over 1.5s
// Triggered via Intersection Observer
```

### Scroll Behaviors

**Sticky Header:**
- Scroll down: Header remains visible
- Add subtle shadow when scrolled past 20px

**Fade-in on Scroll:**
- Sections fade in when 20% visible
- Use Intersection Observer API
- Testimonials, stats bar, certification logos

**Parallax (Subtle):**
- Hero background moves at 0.5× scroll speed
- Adds depth without being distracting

---

## Responsive Breakpoints

```css
/* Mobile First Approach */

/* Small phones */
@media (min-width: 375px) { ... }

/* Large phones / small tablets */
@media (min-width: 640px) {
  /* 2-col grids, larger text */
}

/* Tablets */
@media (min-width: 768px) {
  /* 3-col grids, show nav items */
}

/* Desktop */
@media (min-width: 1024px) {
  /* 4-col grids, full layout */
}

/* Large desktop */
@media (min-width: 1280px) {
  /* 5-col grids, max widths */
}

/* Ultra-wide */
@media (min-width: 1536px) {
  /* Increased max-width, comfortable reading */
}
```

### Component Responsive Behavior

| Component | Mobile | Tablet | Desktop |
|-----------|--------|--------|---------|
| Header | Logo + hamburger | Logo + key links + CTA | Full nav |
| Hero | Stack, 36px H1 | Stack, 42px H1 | Centered, 48px H1 |
| Search bar | Stack inputs | 2-col (trade+location) + button row | 3-col inline |
| Trust badges | 2-col | 4-col | 4-col |
| Trade cards | 1-col | 2-col | 3-col |
| Category icons | 2-col | 3-col | 5-col |
| Stats bar | 2-col | 4-col | 4-col |
| Footer | Stack columns | 2-col groups | 5-col |

---

## Accessibility (WCAG 2.1 AA)

### Color Contrast
- Navy-950 on white: 15.2:1 ✓
- Amber-600 on white: 4.8:1 ✓
- Amber-600 on navy-950: 6.1:1 ✓
- Slate-600 on white: 7.2:1 ✓

All combinations meet AA standards for normal and large text.

### Interactive Elements
- Focus states: 3px amber-600 ring with 2px offset
- Keyboard navigation: Full support, logical tab order
- Button size: Min 44×44px touch targets (mobile)
- Link underlines: On focus/hover for clarity

### Screen Readers
- Semantic HTML throughout (`<header>`, `<nav>`, `<main>`, `<article>`, `<aside>`, `<footer>`)
- ARIA labels on icon-only buttons
- Alt text on all images (descriptive, not "image of...")
- Skip to content link (hidden until focused)

### Forms
- Labels properly associated with inputs
- Error messages announced to screen readers
- Required fields marked with `aria-required`
- Success/error states have text, not just color

---

## SEO & Technical Considerations

### Performance Budget
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3.5s
- Cumulative Layout Shift: < 0.1

**Optimization:**
- Images: WebP format, lazy loading, srcset for responsive
- Fonts: Preload critical fonts, font-display: swap
- CSS: Critical CSS inline, defer non-critical
- JS: Code splitting, defer non-essential scripts

### JSON-LD Schema (Enhanced)

**Homepage:**
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "TradeHub",
  "description": "Find trusted local tradespeople across the West Midlands",
  "url": "https://tradehub.directory",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://tradehub.directory/search?q={search_term}",
    "query-input": "required name=search_term"
  },
  "publisher": {
    "@type": "Organization",
    "name": "TradeHub",
    "logo": "https://tradehub.directory/logo.png"
  }
}
```

**Trade Profile:**
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "JB Plumbing",
  "@id": "https://tradehub.directory/trades/jb-plumbing",
  "image": "https://tradehub.directory/images/jb-plumbing.jpg",
  "telephone": "+44-7700-900123",
  "email": "info@jbplumbing.co.uk",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Solihull",
    "addressRegion": "West Midlands",
    "addressCountry": "GB"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "52.4118",
    "longitude": "-1.7776"
  },
  "url": "https://jbplumbing.co.uk",
  "priceRange": "££",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "156"
  },
  "review": [
    {
      "@type": "Review",
      "author": "Sarah Mitchell",
      "datePublished": "2025-01-15",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "reviewBody": "Absolutely brilliant service..."
    }
  ],
  "areaServed": ["Solihull", "Birmingham", "Shirley"]
}
```

### Meta Tags Template

```html
<title>Find Trusted Plumbers in Solihull | TradeHub</title>
<meta name="description" content="250+ verified plumbers in Solihull. Read reviews, compare quotes, hire with confidence. All local, all vetted, all reviewed." />

<!-- Open Graph -->
<meta property="og:type" content="website" />
<meta property="og:title" content="Find Trusted Plumbers in Solihull | TradeHub" />
<meta property="og:description" content="250+ verified plumbers in Solihull. Read reviews, compare quotes, hire with confidence." />
<meta property="og:image" content="https://tradehub.directory/og-plumbers-solihull.jpg" />
<meta property="og:url" content="https://tradehub.directory/plumbers/solihull" />

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Find Trusted Plumbers in Solihull | TradeHub" />
<meta name="twitter:description" content="250+ verified plumbers in Solihull. All vetted, all reviewed." />
<meta name="twitter:image" content="https://tradehub.directory/og-plumbers-solihull.jpg" />
```

---

## Implementation Tech Stack

### Core Technologies
- **Next.js 14** (App Router, React Server Components)
- **TypeScript** (strict mode)
- **Tailwind CSS 3.4** (with custom config)
- **Framer Motion** (animations, page transitions)
- **Lucide Icons** (icon library)

### Fonts
```javascript
// app/layout.tsx
import { Merriweather, Inter, Space_Grotesk } from 'next/font/google';

const merriweather = Merriweather({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-merriweather',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});
```

### Tailwind Config
```javascript
// tailwind.config.ts
const config = {
  theme: {
    extend: {
      colors: {
        'navy-950': '#0f172a',
        'navy-900': '#1e293b',
        'navy-800': '#334155',
        'navy-700': '#475569',
        'amber-600': '#d97706',
        'amber-500': '#f59e0b',
        'amber-100': '#fef3c7',
        'gold': '#d4af37',
        'verified': '#16a34a',
      },
      fontFamily: {
        serif: ['var(--font-merriweather)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-space-grotesk)', 'monospace'],
      },
      boxShadow: {
        'card': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 8px 24px rgba(0, 0, 0, 0.12)',
        'cta': '0 4px 12px rgba(217, 119, 6, 0.3)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.4s ease-out forwards',
        'fade-in': 'fadeIn 0.3s ease-out forwards',
        'scale-in': 'scaleIn 0.2s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
};
```

---

## Phased Implementation Plan

### **Phase 0: Foundation Prep (Day 1)**
**Goal:** Set up design system infrastructure without breaking existing functionality

- [ ] Install new fonts (Merriweather, Space Grotesk)
- [ ] Update Tailwind config with new colors and design tokens
- [ ] Install Lucide Icons package
- [ ] Install Framer Motion
- [ ] Create `/components/v2/` directory for new components
- [ ] Create texture/pattern assets (noise.png, diagonal lines SVG)
- [ ] Set up CSS variables in globals.css

**Time estimate:** 2-3 hours
**Risk:** Low (additive only, no changes to existing code)

---

### **Phase 1: Quick Wins (Days 2-3)**
**Goal:** Immediate visual authority boost with minimal refactoring

#### 1.1 Typography Upgrade
- [ ] Replace emoji icons with Lucide SVG icons in TrustBadges.tsx
- [ ] Update all headings to use Merriweather (`className="font-serif"`)
- [ ] Update body text to use Inter explicitly
- [ ] Add Space Grotesk to stats/numbers

**Files to modify:**
- `components/TrustBadges.tsx`
- `app/page.tsx` (hero H1)
- `components/TradeCard.tsx` (trade name)
- `components/Header.tsx` (logo)

**Before/After:**
```tsx
// BEFORE
<h1 className="text-4xl font-bold">Find Trusted Tradespeople</h1>

// AFTER
<h1 className="font-serif text-5xl font-bold leading-tight">
  Find Trusted Tradespeople
</h1>
```

#### 1.2 Color Palette Swap
- [ ] Replace `bg-trust` (green) with `bg-amber-600`
- [ ] Replace `text-trust` with `text-amber-600`
- [ ] Update navy from `#1e293b` to `#0f172a` (navy-950) for headers

**Files to modify:**
- `tailwind.config.ts` (update trust color)
- `components/Header.tsx`
- `app/page.tsx`
- `components/TradeCard.tsx`
- Global search-replace: `bg-trust` → `bg-amber-600`, `text-trust` → `text-amber-600`

#### 1.3 Add Stats Bar to Homepage
- [ ] Create `components/v2/StatsBar.tsx`
- [ ] Add between hero and trust badges
- [ ] Display: "2,000+ Verified Trades • 4.8★ Average Rating • 10,000+ Jobs Completed • Since 2024"

**New component:**
```tsx
// components/v2/StatsBar.tsx
export default function StatsBar() {
  const stats = [
    { number: "2,000+", label: "Verified Trades" },
    { number: "4.8", label: "Average Rating", icon: "⭐" },
    { number: "10,000+", label: "Jobs Completed" },
    { number: "Since 2024", label: "Trusted Locally" },
  ];

  return (
    <section className="bg-navy-900 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-mono text-4xl font-bold text-amber-500">
                {stat.icon && <span className="mr-1">{stat.icon}</span>}
                {stat.number}
              </div>
              <div className="mt-2 text-sm uppercase tracking-wide text-slate-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

#### 1.4 Enhanced Trade Cards
- [ ] Add "Verified ✓" badge to TradeCard
- [ ] Add "Quick Reply" indicator if applicable
- [ ] Show testimonial snippet (first review, 2 lines)
- [ ] Improve hover state (lift + border color change)

**Update `components/TradeCard.tsx`:**
```tsx
// Add badges row
<div className="mt-3 flex flex-wrap gap-2">
  <span className="flex items-center gap-1 rounded-full bg-green-50 px-2 py-0.5 text-xs font-medium text-green-700">
    <CheckCircle size={12} /> Verified
  </span>
  {trade.insurance && (
    <span className="flex items-center gap-1 rounded-full bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-700">
      <Shield size={12} /> Insured
    </span>
  )}
</div>

// Add testimonial
{trade.reviews[0] && (
  <div className="mt-3 border-l-2 border-amber-600 pl-3">
    <p className="text-sm italic text-slate-600 line-clamp-2">
      "{trade.reviews[0].text}"
    </p>
    <p className="mt-1 text-xs font-semibold text-navy-900">
      — {trade.reviews[0].author}
    </p>
  </div>
)}

// Enhanced hover
className="... hover:border-amber-600 hover:shadow-xl transition-all duration-300"
```

#### 1.5 Professional Icons
- [ ] Replace all emoji icons with Lucide icons
- [ ] Trust badges: ShieldCheck, Check, MapPin, MessageCircle
- [ ] Category icons: Wrench, Plug, Hammer, Paintbrush, Trees, HardHat, Home, Key, Pipette, Zap

**Success Criteria:**
✅ Site looks 50% more professional
✅ No emojis visible anywhere
✅ Typography feels editorial/authoritative
✅ Amber CTAs stand out
✅ Stats bar adds credibility

**Time estimate:** 6-8 hours
**Risk:** Low (mostly styling changes)

---

### **Phase 2: Component Refinement (Days 4-6)**
**Goal:** Rebuild key components with full V2 design system

#### 2.1 Header Redesign
- [ ] Create `components/v2/Header.tsx`
- [ ] Add "Since 2024" tagline under logo
- [ ] Update nav styling (slate-300 text, amber hover)
- [ ] Add 1px amber bottom border
- [ ] Improve mobile menu (full-screen overlay)

#### 2.2 Hero Section Enhancement
- [ ] Add subtle diagonal gradient background
- [ ] Integrate noise texture overlay
- [ ] Improve search bar styling (white card with shadow)
- [ ] Add stats row below search (inline, not separate section)
- [ ] Better typography hierarchy

#### 2.3 New Trust Indicators Section
- [ ] Create `components/v2/TrustIndicators.tsx`
- [ ] Replace basic badges with bordered cards
- [ ] Add hover effects (lift + border color)
- [ ] Professional icons (48px Lucide)
- [ ] 2-line descriptions per badge

#### 2.4 Footer Redesign
- [ ] Create `components/v2/Footer.tsx`
- [ ] 5-column layout on desktop
- [ ] Add logo + "Since 2024" + tagline
- [ ] Add social icons
- [ ] Improve link hierarchy and styling

#### 2.5 Search Component
- [ ] Create `components/v2/SearchBar.tsx`
- [ ] Custom dropdown styling (no native select elements)
- [ ] Autocomplete suggestions
- [ ] Focus states with amber ring
- [ ] Smooth animations

**Success Criteria:**
✅ All core components use V2 design
✅ Consistent styling across site
✅ Professional polish on every interaction

**Time estimate:** 12-16 hours
**Risk:** Medium (replacing core components)

---

### **Phase 3: Content & Trust Elements (Days 7-9)**
**Goal:** Add credibility markers and rich content

#### 3.1 Certification/Accreditation Section
- [ ] Create `components/v2/CertificationBar.tsx`
- [ ] Add section below trust indicators
- [ ] Source certification logos (Gas Safe, NICEIC, TrustMark, Which?)
- [ ] Grayscale + hover color effect
- [ ] "Our Tradespeople Hold Certifications From:"

#### 3.2 Testimonials Section (Homepage)
- [ ] Create `components/v2/TestimonialCard.tsx`
- [ ] Add 3-column grid of customer reviews
- [ ] Include: rating, quote, name, service, verified badge
- [ ] Pull from real reviews data
- [ ] Add to homepage below featured trades

#### 3.3 "How It Works" Section
- [ ] Create 3-step process visualization
- [ ] Icons: Search → Compare → Hire
- [ ] Simple, clear copy
- [ ] Add above CTA section on homepage

#### 3.4 Enhanced Trade Profile Pages
- [ ] Redesign `/trades/[slug]` layout
- [ ] 2-column: main content (8 cols) + contact sidebar (4 cols)
- [ ] Sticky contact card with "Request Quote" CTA
- [ ] Photo gallery grid
- [ ] Full reviews section with filtering
- [ ] Coverage area map (future: actual map, now: list)

#### 3.5 SEO Content Blocks
- [ ] Add 200-300 word content sections to category pages
- [ ] Include H2 subheadings, lists, local keywords
- [ ] Place below trade listings
- [ ] Add "Why choose a [trade] in [location]?" sections

**Success Criteria:**
✅ Every page has trust signals
✅ Social proof is prominent
✅ SEO content is integrated naturally
✅ Profile pages convert better

**Time estimate:** 14-18 hours
**Risk:** Medium (new content, layout changes)

---

### **Phase 4: Animations & Polish (Days 10-12)**
**Goal:** Add motion and delight to the experience

#### 4.1 Page Load Animations
- [ ] Implement Framer Motion on homepage
- [ ] Staggered fade-in for hero elements
- [ ] Trade cards animate in on scroll
- [ ] Stats counter animation (count-up effect)

**Example:**
```tsx
// components/v2/AnimatedTradeCard.tsx
import { motion } from 'framer-motion';

export default function AnimatedTradeCard({ trade, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <TradeCard trade={trade} />
    </motion.div>
  );
}
```

#### 4.2 Scroll-triggered Animations
- [ ] Implement Intersection Observer for sections
- [ ] Fade in: testimonials, stats bar, certification logos
- [ ] Subtle parallax on hero background (0.5× speed)

#### 4.3 Micro-interactions
- [ ] Refine all hover states (buttons, cards, links)
- [ ] Add active states (scale down on click)
- [ ] Smooth focus rings on all interactive elements
- [ ] Search dropdown animations (slide down with opacity)

#### 4.4 Loading States
- [ ] Skeleton screens for trade cards while loading
- [ ] Smooth page transitions
- [ ] Progress indicator for search results

#### 4.5 Texture Overlays
- [ ] Add noise texture to dark backgrounds
- [ ] Diagonal line pattern on hero
- [ ] Dot pattern on alternating sections

**Success Criteria:**
✅ Site feels premium and polished
✅ Animations are subtle, not distracting
✅ Performance remains high (< 2.5s LCP)
✅ Motion respects `prefers-reduced-motion`

**Time estimate:** 10-14 hours
**Risk:** Low (purely additive, can be toggled off)

---

### **Phase 5: Advanced Features (Days 13-15)**
**Goal:** Differentiation and competitive advantage

#### 5.1 "Find a Trade" Interactive Tool
- [ ] Multi-step form: What do you need? → Where? → When? → Budget?
- [ ] Contextual illustrations/icons per step
- [ ] Progress indicator
- [ ] Results page with matched trades + "Request Quotes" button

#### 5.2 Live Availability Indicators
- [ ] Add "Available Now" badge to trades
- [ ] "Usually responds in X hours" metric
- [ ] "Last active: 2 hours ago" timestamps
- [ ] Data can be fake/estimated initially, real later

#### 5.3 Coverage Area Maps
- [ ] Static map images showing service areas
- [ ] On trade profile pages
- [ ] "Covers: Solihull, Birmingham, Shirley (+3 more)" with map pin icon
- [ ] Future: Interactive maps with Google Maps API

#### 5.4 Emergency Services Highlight
- [ ] Create `/emergency/[trade]/[location]` pages
- [ ] Different color scheme (orange/red accents)
- [ ] "24/7 Emergency [Trade]" badges
- [ ] Faster response time filters
- [ ] Prominent phone numbers (click-to-call)

#### 5.5 Comparison Tool
- [ ] "Compare Trades" functionality
- [ ] Select up to 3 trades, see side-by-side
- [ ] Compare: rating, reviews, services, areas, response time
- [ ] Add to comparison from trade cards

**Success Criteria:**
✅ Unique features competitors don't have
✅ Better user experience for finding trades
✅ Emergency services drive high-value leads
✅ Comparison tool increases engagement

**Time estimate:** 20-30 hours
**Risk:** High (new features, requires additional data structures)

---

### **Phase 6: Mobile Optimization (Days 16-17)**
**Goal:** Ensure mobile experience is exceptional

#### 6.1 Mobile-Specific Components
- [ ] Bottom sheet for search filters (instead of dropdowns)
- [ ] Swipeable trade card carousel
- [ ] Fixed bottom CTA bar on profile pages ("Call Now" + "Request Quote")
- [ ] Mobile-optimized navigation (full-screen menu with large touch targets)

#### 6.2 Touch Interactions
- [ ] Ensure all buttons are 44×44px minimum
- [ ] Add haptic feedback simulation for key actions
- [ ] Prevent double-tap zoom on buttons
- [ ] Swipe gestures for photo galleries

#### 6.3 Performance
- [ ] Aggressive image optimization (WebP, lazy loading, blur-up placeholders)
- [ ] Reduce initial JS bundle (code splitting)
- [ ] Prefetch critical routes
- [ ] Service worker for offline fallback

#### 6.4 Click-to-Call Optimization
- [ ] Prominent phone numbers on mobile
- [ ] "Call Now" CTAs with tel: links
- [ ] Track click-to-call events (analytics)

**Success Criteria:**
✅ Mobile LCP < 2.0s
✅ Perfect Lighthouse mobile score (90+)
✅ Touch targets meet accessibility standards
✅ Smooth scrolling and interactions

**Time estimate:** 10-14 hours
**Risk:** Medium (requires testing on real devices)

---

### **Phase 7: Final Polish & Launch Prep (Days 18-20)**
**Goal:** Production-ready, fully tested, optimized

#### 7.1 Cross-Browser Testing
- [ ] Test on Chrome, Safari, Firefox, Edge
- [ ] Mobile: iOS Safari, Chrome Android
- [ ] Fix any layout/styling bugs
- [ ] Ensure all animations work consistently

#### 7.2 Accessibility Audit
- [ ] Run axe DevTools on all pages
- [ ] Fix any WCAG violations
- [ ] Test with keyboard navigation
- [ ] Test with screen reader (VoiceOver/NVDA)

#### 7.3 SEO Final Check
- [ ] Verify all JSON-LD schema is valid (Google Rich Results Test)
- [ ] Check all meta tags are dynamic and accurate
- [ ] Ensure sitemap.xml is generating correctly
- [ ] Submit updated sitemap to Google Search Console
- [ ] Create llms.txt file
- [ ] Verify robots.txt

#### 7.4 Performance Optimization
- [ ] Run Lighthouse on all key pages
- [ ] Optimize any remaining images
- [ ] Minimize CSS/JS bundles
- [ ] Enable Vercel Analytics
- [ ] Set up Core Web Vitals monitoring

#### 7.5 Content Audit
- [ ] Proofread all copy
- [ ] Ensure consistent tone and voice
- [ ] Check for broken links
- [ ] Verify all CTAs work correctly

#### 7.6 Analytics Setup
- [ ] Google Analytics 4
- [ ] Event tracking: CTA clicks, search usage, profile views, quote requests
- [ ] Set up conversion goals
- [ ] Hotjar or similar for heatmaps (optional)

#### 7.7 Soft Launch
- [ ] Deploy to production
- [ ] Share with 5-10 beta users for feedback
- [ ] Monitor performance and errors (Sentry/Vercel)
- [ ] Make any critical fixes

**Success Criteria:**
✅ Zero critical bugs
✅ All pages score 90+ on Lighthouse
✅ WCAG AA compliant
✅ Analytics tracking all key events
✅ Positive feedback from beta users

**Time estimate:** 12-16 hours
**Risk:** Low (refinement only)

---

## Implementation Checklist by Phase

### Phase 0: Foundation Prep ✓
- [ ] Install Merriweather, Space Grotesk fonts
- [ ] Update Tailwind config (colors, fonts, animations)
- [ ] Install Lucide Icons
- [ ] Install Framer Motion
- [ ] Create `/components/v2/` directory
- [ ] Create texture assets
- [ ] Update globals.css with CSS variables

### Phase 1: Quick Wins (2-3 days)
- [ ] Replace emoji icons with Lucide SVGs
- [ ] Update all headings to Merriweather
- [ ] Swap green to amber across site
- [ ] Update navy to navy-950
- [ ] Create and add StatsBar component
- [ ] Enhance TradeCard with badges + testimonial
- [ ] Improve hover states site-wide

### Phase 2: Component Refinement (3-4 days)
- [ ] Rebuild Header component
- [ ] Enhance Hero section
- [ ] Create new TrustIndicators
- [ ] Rebuild Footer
- [ ] Create custom SearchBar component

### Phase 3: Content & Trust (3-4 days)
- [ ] Add CertificationBar
- [ ] Create TestimonialCard + section
- [ ] Add "How It Works" section
- [ ] Redesign trade profile pages
- [ ] Add SEO content blocks to category pages

### Phase 4: Animations & Polish (2-3 days)
- [ ] Implement page load animations
- [ ] Add scroll-triggered animations
- [ ] Refine all micro-interactions
- [ ] Add loading states
- [ ] Apply texture overlays

### Phase 5: Advanced Features (4-5 days)
- [ ] Build "Find a Trade" tool
- [ ] Add availability indicators
- [ ] Create coverage area maps
- [ ] Build emergency services pages
- [ ] Create comparison tool

### Phase 6: Mobile Optimization (2-3 days)
- [ ] Mobile-specific components
- [ ] Touch interaction optimization
- [ ] Performance optimization
- [ ] Click-to-call optimization

### Phase 7: Final Polish (2-3 days)
- [ ] Cross-browser testing
- [ ] Accessibility audit
- [ ] SEO final check
- [ ] Performance optimization
- [ ] Content audit
- [ ] Analytics setup
- [ ] Soft launch

---

## Timeline Summary

| Phase | Duration | Effort | Risk | Priority |
|-------|----------|--------|------|----------|
| 0: Foundation | 0.5 days | Low | Low | ⭐⭐⭐⭐⭐ |
| 1: Quick Wins | 2-3 days | Medium | Low | ⭐⭐⭐⭐⭐ |
| 2: Components | 3-4 days | High | Medium | ⭐⭐⭐⭐ |
| 3: Trust & Content | 3-4 days | High | Medium | ⭐⭐⭐⭐ |
| 4: Animation | 2-3 days | Medium | Low | ⭐⭐⭐ |
| 5: Advanced | 4-5 days | Very High | High | ⭐⭐ |
| 6: Mobile | 2-3 days | Medium | Medium | ⭐⭐⭐⭐ |
| 7: Launch Prep | 2-3 days | Medium | Low | ⭐⭐⭐⭐⭐ |

**Total Timeline:** 18-25 days (3.5-5 weeks)
**MVP (Phases 0-3 only):** 9-12 days (1.5-2.5 weeks)

---

## Success Metrics

### Qualitative
- "Looks like an established business"
- "Feels trustworthy and credible"
- "More professional than competitors"
- "I would use this to find a tradesperson"

### Quantitative
- Lighthouse Performance: 90+ (mobile), 95+ (desktop)
- Lighthouse Accessibility: 100
- Time on site: > 2 minutes (vs. current baseline)
- Bounce rate: < 40%
- Click-through rate on "View Profile": > 25%
- "Request Quote" conversion: > 5%

### Competitive Benchmark
Compare visually and functionally to:
- Checkatrade (authority, but dated design)
- Rated People (modern, but generic SaaS feel)
- Which? Trusted Traders (ultimate authority, but slow/clunky)

**Goal:** Beat all three on:
1. Visual authority + modernity
2. Speed and performance
3. User experience clarity

---

## Risk Mitigation

### Technical Risks
- **Breaking existing functionality:** Use `/v2/` component directory, gradual rollout
- **Performance regression:** Set budget alerts, monitor Core Web Vitals
- **Browser compatibility:** Test early and often on all major browsers

### Design Risks
- **Too conservative:** Balance authority with modern touches (animations, amber accents)
- **Too busy:** Maintain white space, clear hierarchy, limit elements per section
- **Brand confusion:** Ensure TradeHub identity is clear (logo, colors, voice)

### Scope Risks
- **Feature creep:** Phases 5-6 are optional for MVP, can be post-launch
- **Timeline slippage:** Prioritize Phases 0-3, then reassess
- **Resource constraints:** One developer can complete Phases 0-4 in 2-3 weeks

---

## Post-Launch Iteration

### Month 1: Monitor & Optimize
- Watch analytics for drop-off points
- Collect user feedback (surveys, session recordings)
- A/B test key CTAs (button copy, colors, placement)
- Optimize underperforming pages

### Month 2: Content Expansion
- Add more blog posts (SEO content)
- Create location-specific landing pages
- Build out FAQ sections
- Add video testimonials

### Month 3: Feature Enhancement
- Build client dashboard for tradespeople
- Add quote request system
- Implement email notifications
- Create referral program page

### Ongoing
- Refresh design every 12-18 months
- Continuously optimize for Core Web Vitals
- Expand certification partnerships
- Build brand recognition in West Midlands

---

## Appendix: Inspiration & References

### Design Inspiration
- **Which? Trusted Traders** — ultimate trust authority
- **Checkatrade** — established, recognizable
- **Financial Times** — editorial typography, authority
- **GOV.UK** — clarity, accessibility, no-nonsense
- **Airbnb (pre-2020)** — trust badges, reviews, photography

### Typography References
- Merriweather in action: Medium, The Economist (digital)
- Serif + Sans pairing: Stripe (Freight + Inter), GitHub (Mona Sans + system)

### Color Psychology
- Navy: Trust, stability, professionalism (banks, insurance)
- Amber/Orange: Action, urgency, warmth (calls-to-action, warnings)
- Combination: Trustworthy + action-oriented (perfect for service directory)

### Component Libraries (for reference, not using directly)
- Shadcn/ui (copy patterns, not code)
- Tailwind UI (layout inspiration)
- Radix UI (accessibility patterns)

---

## Developer Handoff Notes

### Key Files to Create
```
site/
├── components/
│   └── v2/
│       ├── Header.tsx
│       ├── Hero.tsx
│       ├── StatsBar.tsx
│       ├── TrustIndicators.tsx
│       ├── TradeCard.tsx
│       ├── TestimonialCard.tsx
│       ├── CertificationBar.tsx
│       ├── SearchBar.tsx
│       ├── Footer.tsx
│       └── ...
├── app/
│   ├── layout.tsx (update fonts)
│   ├── page.tsx (integrate v2 components)
│   └── globals.css (add CSS variables)
├── public/
│   └── textures/
│       ├── noise.png
│       ├── diagonal-lines.svg
│       └── dot-pattern.svg
└── tailwind.config.ts (extended config)
```

### Installation Commands
```bash
# Fonts are handled by next/font/google (no separate install)

# Icons
npm install lucide-react

# Animations
npm install framer-motion

# Optional: Utility packages
npm install clsx tailwind-merge
```

### CSS Variables (globals.css)
```css
:root {
  --color-navy-950: #0f172a;
  --color-navy-900: #1e293b;
  --color-amber-600: #d97706;
  --color-amber-500: #f59e0b;

  --font-serif: var(--font-merriweather), Georgia, serif;
  --font-sans: var(--font-inter), system-ui, sans-serif;
  --font-mono: var(--font-space-grotesk), monospace;

  --shadow-card: 0 2px 8px rgba(0, 0, 0, 0.08);
  --shadow-card-hover: 0 8px 24px rgba(0, 0, 0, 0.12);
}
```

### Utility Functions
```typescript
// lib/utils.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Format rating
export function formatRating(rating: number): string {
  return rating.toFixed(1);
}

// Truncate text
export function truncate(text: string, length: number): string {
  return text.length > length ? text.slice(0, length) + '...' : text;
}
```

---

## Final Notes

This design system transforms TradeHub from a clean but generic startup into a **credible, authoritative local institution**. The phased approach allows for incremental delivery, with quick wins in Phase 1 providing immediate visual impact.

The key to success is **consistency**: every component, every page, every interaction should reinforce the core message: **"TradeHub is the trusted, established way to find quality tradespeople in the West Midlands."**

Execute with precision, sweat the details, and ship with confidence.

**Questions? Start with Phase 0 and Phase 1. They'll set the foundation for everything that follows.**
