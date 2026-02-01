# Design Notes - MJB Electrical Services

## Design Philosophy

**"Industrial Craftsman"** - A refined, authentic tradesperson aesthetic that avoids generic SaaS design patterns while maintaining a high-budget, professional feel.

## Color Palette

### Primary Colors
- **MJB Green** `#7CB342` - Brand color from logo, used for CTAs and accents
- **MJB Amber** `#FFA726` - Emergency/urgent actions, electrical energy theme

### Neutral Colors
- **MJB Dark** `#1a1f2e` - Deep charcoal for hero and footer backgrounds
- **MJB Slate** `#2d3748` - Secondary dark tone for gradients
- **White** `#FFFFFF` - Clean backgrounds for content sections
- **Gray 50-900** - Tailwind's gray scale for subtle elements

## Typography

### Font Pairing
- **Headings**: Outfit (600/700/800 weights)
  - Modern but grounded, geometric sans-serif
  - Used for section headings, service cards, CTA buttons

- **Body**: DM Sans (400/500/600/700 weights)
  - Clean, approachable, highly legible
  - Used for paragraphs, reviews, form labels

### Hierarchy
```
h1: 4xl-6xl (Outfit, bold)
h2: 4xl-5xl (Outfit, bold)
h3: 2xl-xl (Outfit, bold)
Body: base-xl (DM Sans, regular)
Small: sm-xs (DM Sans, medium)
```

## Visual Elements

### 1. Circuit Pattern Background
Subtle grid pattern in hero/footer sections to evoke electrical work without being literal.

```css
background-image: linear-gradient(90deg, rgba(124, 179, 66, 0.03) 1px, transparent 1px)
background-size: 40px 40px
```

### 2. Grain Texture
Ultra-subtle noise overlay (1.5% opacity) adds depth and prevents flat digital look.

### 3. Glow Effects
Green glow on primary CTAs creates visual hierarchy and draws attention to conversion points.

```css
box-shadow: 0 0 20px rgba(124, 179, 66, 0.3)
```

### 4. Motion Design
- **Philosophy**: Refined, not flashy. Professional craftsman, not tech startup.
- **Scroll animations**: Fade-in-up with staggered delays
- **Hover states**: Subtle scale transforms (1.05x max)
- **Page load**: Smooth staggered reveals for hero elements

## Layout Principles

### Mobile-First Approach
- 70%+ of visitors on phones (tradesperson customers)
- Thumb-reachable CTAs (bottom 1/3 of screen)
- Click-to-call as primary CTA
- Large touch targets (min 44px)

### Spacing System
- Generous white space between sections (py-20)
- Comfortable reading line length (max-w-3xl for paragraphs)
- Clear visual hierarchy with consistent padding

### Grid System
- Services: 1 column mobile, 2 columns desktop
- Reviews: 1 column mobile, 2-3 columns desktop
- Areas: Responsive 2-8 column grid

## Component Patterns

### Service Cards
- Icon emoji + bold heading
- Checkmark bullets for services list
- Hover effect: border color change + shadow
- Background: Light gray with subtle border

### Review Cards
- 5 gold stars at top
- Quote with quotation marks
- Customer name + postcode
- White background with border
- Hover: Lift effect with shadow

### CTA Buttons
- **Primary**: Green with glow effect
- **Emergency**: Amber (urgent/alert color)
- **Secondary**: White border, transparent background
- All include relevant icon (phone, arrow, etc.)

## Authenticity Markers

What makes this feel like a **real electrician**, not a generic template:

1. **Real Reviews** - Actual Checkatrade testimonials with postcodes
2. **Emergency Banner** - 24/7 callout prominently featured (real service)
3. **Local Focus** - Halesowen & West Midlands emphasized throughout
4. **Specific Services** - Detailed list (EICR, fuseboard, EV chargers) not just "electrical work"
5. **Professional Credentials** - 9.93/10 rating, 400+ reviews upfront
6. **Craftsman Typography** - Grounded fonts, not trendy/startup aesthetic
7. **Industrial Color Palette** - Green (electrical), amber (caution), dark grays

## Anti-Patterns (What We Avoided)

❌ Purple gradients on white backgrounds
❌ Inter/Roboto fonts (overused in SaaS)
❌ Abstract blob shapes
❌ Generic stock photos of electricians
❌ Overly corporate/stiff language
❌ Auto-playing videos
❌ Pop-ups and annoying modals
❌ Trendy but meaningless animations

## Accessibility

- ✅ WCAG AA color contrast ratios
- ✅ Semantic HTML structure
- ✅ Alt text for images
- ✅ Keyboard navigable
- ✅ Focus states on interactive elements
- ✅ Mobile-friendly touch targets

## Performance Optimizations

- Static site generation (fast first paint)
- WebP image format for logo
- Font display: swap (prevent FOIT)
- Minimal JavaScript (Framer Motion only where needed)
- Tailwind CSS purging (small CSS bundle)
- No external analytics/tracking bloat

## Future Enhancements

When client has more content:

1. **Photo Gallery** - Before/after work photos
2. **Video Testimonials** - Embedded customer reviews
3. **Live Availability** - "Available today" banner
4. **Service Area Map** - Interactive map of coverage
5. **Live Chat** - Business hours support widget
6. **Blog/Advice Section** - Electrical safety tips, DIY guidance

## Brand Voice

**Tone**: Professional but friendly. Confident tradesperson, not salesy.

**Style**: Direct, clear, jargon-free where possible. When technical terms are needed (EICR, fuseboard), they're explained through context.

**Examples**:
- ✅ "We aim to respond within 1 hour"
- ❌ "Rapid synergistic customer engagement"
- ✅ "Laid down dust covers... cleaned up after himself"
- ❌ "White-glove premium service experience"

## Technical Notes for Developers

- Built with Next.js 16 App Router
- Tailwind CSS 4 (latest version)
- Framer Motion for animations
- TypeScript for type safety
- Static export for hosting flexibility
- No backend required (form needs integration)

---

**Design Status**: ✅ Complete and production-ready
**Next Step**: Deploy to Vercel for client preview
