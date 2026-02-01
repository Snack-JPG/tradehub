# Demo Site - Cold Outreach Strategy

## ⚠️ IMPORTANT: This is a Demo/Pitch Site

**Purpose**: Cold outreach to MJB Electrical Services to offer website + hosting services

## 🚫 DO NOT (Before Client Signs On):

1. **Don't Deploy Publicly with Their Branding**
   - Risk: They could find it and be upset you used their business name without permission
   - Risk: Legal issues around unauthorized use of business identity
   - Risk: Creates duplicate content if they already have a site

2. **Don't Submit to Search Engines**
   - Don't add to Google Search Console
   - Don't submit sitemap to Google/Bing
   - Don't build backlinks to this demo

3. **Don't Index the Site**
   - Add password protection to Vercel preview
   - Or use `noindex` meta tag temporarily
   - Keep it private until they sign

## ✅ DO (Right Now):

### 1. Deploy to Private Vercel Preview
```bash
vercel --prod
# Then set password protection in Vercel dashboard
```

**Settings → Deployment Protection → Password Protection**

This lets you show them a live preview without it being public.

### 2. Prepare Your Pitch

**Email Template**:
```
Subject: New Website Ready for MJB Electrical Services

Hi [Name],

I noticed MJB Electrical Services has an incredible reputation (9.93/10 on Checkatrade!) but may not have a website that reflects that quality.

I've built a professional website for you as a demonstration:
[Private Preview Link]
Password: [password]

What's included:
✅ Mobile-first design (70% of searches are on phones)
✅ Click-to-call buttons optimized for conversions
✅ Your real Checkatrade reviews featured
✅ SEO configured for "electrician Halesowen"
✅ 24/7 emergency callout CTAs
✅ Fast loading (90+ Lighthouse score)

Hosting + Domain: £XX/month or £XXX/year
One-time setup: £XXX
Maintenance: £XX/month (optional)

The site is ready to go live immediately. Interested in seeing it in action?

Best,
[Your Name]
TradeHub
```

### 3. Create Pricing Packages

**Package 1: Website Only**
- One-time: £1,500-2,500
- Includes: Full site, deployment, training
- They handle hosting (Vercel free tier)

**Package 2: Website + Hosting**
- Setup: £1,000-1,500
- Monthly: £50-100/month
- Includes: Hosting, domain, SSL, updates

**Package 3: Full Service**
- Setup: £1,500-2,500
- Monthly: £150-250/month
- Includes: Hosting, domain, SEO work, content updates, review management

**TradeHub Integration Fee**:
- List them on TradeHub: Free (you get backlink)
- Or charge £200-500 one-time for featured listing

### 4. Add Password Protection (Temporary)

Update the site with noindex while it's a demo:

**Add to `/app/layout.tsx`**:
```typescript
// In metadata object, add:
robots: {
  index: false,
  follow: false,
}
```

Or deploy to Vercel with password protection enabled.

### 5. Prepare Demo Walkthrough

**Screen Recording** or **Live Demo**:
1. Show mobile version first (most important)
2. Click the phone number (shows it works)
3. Scroll through reviews (social proof)
4. Show services section (comprehensive)
5. Fill out contact form (capture leads)
6. Show backend/admin (easy to update)

**Highlight**:
- "This took 8 hours to build custom for you"
- "Already optimized for Google"
- "Your Checkatrade reviews are featured"
- "Can go live in 24 hours"

## 🎯 TradeHub Backlink Strategy

**Current Setup**:
Footer has: "Listed on TradeHub" → links to TradeHub listing

**After They Sign**:
1. Site goes live on their domain
2. TradeHub gets a high-quality backlink from their domain
3. Their site links to TradeHub listing
4. Win-win: They get traffic from TradeHub, you get SEO juice

**To Maximize TradeHub SEO**:
- Get 10-20 client sites linking back to TradeHub
- Each with anchor text: "Listed on TradeHub" or "Find us on TradeHub"
- This builds TradeHub's domain authority
- TradeHub ranks higher for "find electrician" searches

## 🚀 After They Sign On

### Immediately:
1. Remove password protection
2. Change robots.txt to allow indexing:
   ```typescript
   robots: {
     index: true,
     follow: true,
   }
   ```
3. Deploy to their custom domain
4. Submit to Google Search Console
5. Set up Google Business Profile (if they don't have it)
6. Connect contact form to their email

### Week 1:
1. Set up Google Analytics
2. Enable call tracking
3. Monitor conversions
4. Fix any issues

### Month 1:
1. Add blog section (if in package)
2. Create service pages
3. Start building citations
4. Get Google reviews

## 💡 Pitch Angles

**Angle 1: "You're Leaving Money on the Table"**
- "You have 400+ reviews but no website to show them"
- "70% of people search online before calling"
- "Your competitors with websites are getting those calls"

**Angle 2: "Risk-Free Trial"**
- "Site is already built - you can see exactly what you're getting"
- "No upfront design process, it's done"
- "Go live in 24 hours or walk away"

**Angle 3: "TradeHub Partnership"**
- "Free listing on TradeHub directory"
- "We promote you through our network"
- "Package deal: website + directory listing"

**Angle 4: "Done-For-You SEO"**
- "Already optimized for 'electrician Halesowen'"
- "Schema markup configured (shows stars in Google)"
- "Mobile-first design (Google's priority)"

## 📊 Competitor Analysis

**Before Reaching Out**:
1. Check if they have a website already
   - Google: "MJB Electrical Services Halesowen"
   - If yes: Your site needs to be MUCH better
   - If no: Easy pitch

2. Check their competitors' sites
   - Find 2-3 local electricians
   - Note what they're doing wrong
   - Emphasize what you do better

3. Screenshot their Checkatrade profile
   - Show them you've done research
   - "I saw your 9.93 rating - incredible!"

## ⚡ Quick Conversion Tips

**Make It Easy to Say Yes**:
1. Offer first month free
2. Money-back guarantee
3. "Try it for 30 days, cancel anytime"
4. No long-term contract
5. Show ROI: "If you get 2 extra jobs/month, this pays for itself"

**Objection Handling**:
- "Too expensive" → Show cost per lead (£50/month ÷ 10 leads = £5 per lead)
- "I don't need it" → Show competitor sites ranking above them
- "I'll think about it" → Limited time offer, site is ready NOW
- "I can build it myself" → "Of course! But do you have time? It's ready today."

## 🎁 Value-Adds to Close Deal

**Throw in for free**:
- Google Business Profile setup/optimization
- First 3 months of blog posts
- Professional email setup (name@mjbelectrical.com)
- Social media graphics (logo, cover photos)
- QR code for van/business cards

## 📈 Upsell Opportunities

**After 3 Months**:
- SEO package (£200/month)
- Blog writing service (£100/post)
- Google Ads management (£300/month + ad spend)
- Review generation system (£50/month)
- Booking system integration (£500 setup + £30/month)

## 🔒 Protect Your Work

**Before Showing**:
1. Watermark the demo (optional)
2. Keep source code private
3. Don't give them access to GitHub
4. Only share preview link, not source

**After They Sign**:
1. Transfer on their payment
2. Deploy to domain in your Vercel account (keeps control)
3. Monthly billing = ongoing access
4. If they stop paying, pause the site

## ✅ Pre-Outreach Checklist

- [ ] Site builds successfully
- [ ] Deploy to Vercel with password protection
- [ ] Test all links and forms
- [ ] Mobile responsive on all screen sizes
- [ ] Replace placeholder TradeHub link with real one
- [ ] Screenshot the site for email
- [ ] Prepare pricing packages
- [ ] Research their current online presence
- [ ] Write personalized outreach email
- [ ] Set up Calendly for demo call
- [ ] Prepare contract/agreement
- [ ] Have payment link ready (Stripe)

## 🎯 Success Metrics

**Good Response Rate**: 10-20% reply rate
**Conversion**: 2-5% close rate
**Target**: 1 client per 50 outreaches

**If you send to 100 electricians**:
- 10-20 will reply
- 2-5 will become clients
- Revenue: £2,000-10,000 (depending on package)

---

**Remember**: This is THEIR business. Show respect, show value, make it easy to say yes.
