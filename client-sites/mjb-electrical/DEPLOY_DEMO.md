# Deploy Demo Site for Cold Outreach

## 🎯 Current Status

✅ **Site is protected from search engines**
- noindex, nofollow, nocache meta tags added
- Won't appear in Google/Bing results
- Safe to deploy publicly for demo purposes

✅ **TradeHub backlink configured**
- Footer links to TradeHub (update URL in .env)
- Links open in new tab
- Ready to pass SEO juice when site goes live

## 🚀 Deploy to Vercel (Recommended)

### Step 1: Deploy

```bash
cd /Users/austin/Desktop/TradeHub/client-sites/mjb-electrical

# Deploy to Vercel
vercel --prod
```

**Follow prompts**:
- "Set up and deploy?" → **Yes**
- "Which scope?" → Your Vercel account
- "Link to existing project?" → **No**
- "What's your project's name?" → **mjb-electrical-demo**
- "In which directory is your code?" → **./** (press Enter)

You'll get a URL like: `https://mjb-electrical-demo.vercel.app`

### Step 2: Add Password Protection (Optional but Recommended)

1. Go to [vercel.com](https://vercel.com)
2. Find your project: `mjb-electrical-demo`
3. Settings → Deployment Protection
4. Enable "Password Protection"
5. Set password: `demo2026` (or your choice)

**Why**: Prevents random people from seeing it, but you can share the password in your outreach email.

### Step 3: Configure Environment Variables

In Vercel Dashboard:
1. Settings → Environment Variables
2. Add:
   - `NEXT_PUBLIC_TRADEHUB_URL` = `https://your-actual-tradehub-url.com/mjb-electrical`
3. Redeploy to apply

## 📧 Share the Demo

**In your outreach email**:
```
Preview: https://mjb-electrical-demo.vercel.app
Password: demo2026
```

## 🔄 When Client Signs On

### 1. Remove Search Engine Blocking

Edit `/app/layout.tsx`:

```typescript
// Change this:
robots: {
  index: false,
  follow: false,
  nocache: true,
},

// To this:
robots: {
  index: true,
  follow: true,
},
```

### 2. Deploy to Their Domain

Option A: **Custom Domain** (when they buy one)
- Vercel → Project Settings → Domains
- Add `www.mjbelectrical.com`
- Configure DNS (Vercel provides instructions)

Option B: **Subdomain** (temporary)
- Use Vercel subdomain: `mjb-electrical.vercel.app`
- Later migrate to custom domain

### 3. Remove Password Protection
- Vercel → Settings → Deployment Protection
- Disable password protection
- Site is now public

### 4. Submit to Search Engines
```bash
# Google Search Console
1. Add property: https://www.mjbelectrical.com
2. Verify ownership (DNS or HTML file)
3. Submit sitemap: https://www.mjbelectrical.com/sitemap.xml

# Bing Webmaster Tools
1. Add site
2. Verify ownership
3. Submit sitemap
```

## 🔗 TradeHub Backlink Strategy

### Current Setup:
- Footer has link to TradeHub
- Uses environment variable for URL
- Opens in new tab (good UX)

### To Maximize SEO Value:

**1. Create Specific TradeHub Landing Pages**:
```
https://tradehub.com/electricians/west-midlands
https://tradehub.com/electricians/halesowen
https://tradehub.com/profile/mjb-electrical-services
```

Each client site links to their specific profile → more relevant backlinks

**2. Vary Anchor Text** (Across Multiple Clients):
- "Listed on TradeHub"
- "Find us on TradeHub"
- "Verified TradeHub Professional"
- "TradeHub Member"
- "TradeHub Directory Listing"

Natural variation = better SEO

**3. Add Badge/Widget**:
Create a "Verified on TradeHub" badge image
- Link the image to TradeHub
- Increases click-through rate
- More link juice

**4. Track Referrals**:
Add UTM parameters:
```
https://tradehub.com/mjb-electrical?utm_source=mjb-site&utm_medium=footer
```

Track how many visitors come from client sites.

### Expected SEO Timeline:

**Week 1**: 1 client site goes live with backlink
- Minimal impact

**Month 3**: 10 client sites live
- TradeHub authority starts increasing
- Slight ranking improvements

**Month 6**: 30 client sites live
- Noticeable ranking boost
- TradeHub appears for more local searches

**Month 12**: 100 client sites live
- TradeHub dominates local trade searches
- High domain authority
- Organic traffic compounds

## 📊 Measuring Success

### For Each Client Site:

**Traffic**:
- Google Analytics: Organic visits
- Search Console: Impressions, clicks
- Goal: 500+ organic visits/month by month 6

**Conversions**:
- Phone calls (track with CallRail or similar)
- Form submissions
- Goal: 20-30 conversions/month

**Rankings**:
- Track keywords: "electrician Halesowen", "electrician near me"
- Goal: Position 1-3 within 6 months

### For TradeHub:

**Backlinks**:
- Track new backlinks from client sites
- Monitor with Ahrefs/SEMrush
- Goal: 50-100 quality backlinks by month 6

**Authority**:
- Domain Authority (Moz)
- Domain Rating (Ahrefs)
- Goal: Increase from current baseline

**Traffic**:
- Organic traffic to TradeHub
- Referral traffic from client sites
- Goal: 10x traffic within 12 months

## 💰 Monetization Models

### Model 1: Volume Play
- **Setup**: £500 one-time
- **Monthly**: £50/month
- **Target**: 100 clients
- **MRR**: £5,000/month
- **Annual**: £60,000

### Model 2: Premium
- **Setup**: £2,000 one-time
- **Monthly**: £150/month (includes SEO)
- **Target**: 30 clients
- **MRR**: £4,500/month
- **Annual**: £54,000

### Model 3: Annual Prepay
- **Annual**: £1,000/year
- **Setup**: £500 one-time
- **Target**: 50 clients
- **Year 1**: £75,000 (£50k annual + £25k setup)
- **Year 2**: £50,000 (renewals)

### Model 4: TradeHub Bundle
- **Setup**: £1,500
- **Monthly**: £100/month
- **Includes**: Website + TradeHub listing + SEO
- **Target**: 50 clients
- **MRR**: £5,000/month
- **Annual**: £60,000 + £75k setup = £135k

## 🎯 Next Steps

### Today:
- [ ] Deploy to Vercel
- [ ] Add password protection
- [ ] Test preview link
- [ ] Create outreach email list (100 electricians)

### This Week:
- [ ] Send 20 outreach emails per day
- [ ] Follow up on day 3
- [ ] Book demo calls
- [ ] Close first client

### This Month:
- [ ] Get 5 clients live
- [ ] Start seeing TradeHub backlinks
- [ ] Refine pitch based on feedback
- [ ] Expand to other trades (plumbers, builders)

### This Quarter:
- [ ] 30 clients live
- [ ] £3,000+ MRR
- [ ] Hire VA for outreach
- [ ] Build automation/templates
- [ ] TradeHub SEO improves measurably

---

## 🚨 Important Reminders

**DO NOT**:
❌ Deploy publicly without noindex tag
❌ Submit to search engines before client approval
❌ Use their business name in public marketing
❌ Build backlinks to demo site

**DO**:
✅ Keep demo private/password protected
✅ Remove noindex only after client signs
✅ Track all conversions and metrics
✅ Build quality backlinks when live
✅ Focus on value, not just sales

---

**Your site is ready to deploy and start generating clients!** 🚀

**Quick Deploy Command**:
```bash
vercel --prod
```

Then start sending outreach emails!
