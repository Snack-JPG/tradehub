# Deployment Checklist — EKH Painting & Decorating

Use this checklist before deploying the website to ensure everything is ready for launch.

---

## 📋 Pre-Deployment Checklist

### Content Verification

- [ ] **All placeholder images replaced** with real project photos
  - [ ] Hero background image
  - [ ] About section photo
  - [ ] 6 gallery images
  - [ ] Contact section image

- [ ] **Contact information verified**
  - [ ] Phone number: 07380 906902
  - [ ] WhatsApp link working
  - [ ] Address: 63 Elizabeth Rd, Sutton Coldfield, Birmingham B73 5AP

- [ ] **Reviews section updated**
  - [ ] At least 3 real Google reviews present
  - [ ] More reviews added beyond the initial 3
  - [ ] Review count accurate (50+)

- [ ] **Services accurate**
  - [ ] All services listed are offered
  - [ ] Descriptions are accurate
  - [ ] No outdated information

- [ ] **Areas served correct**
  - [ ] All listed areas are actually served
  - [ ] No missing coverage areas

---

### Technical Setup

- [ ] **Domain configured**
  - [ ] Custom domain purchased
  - [ ] DNS records updated
  - [ ] SSL certificate active (HTTPS)

- [ ] **SEO files updated**
  - [ ] `robots.txt` has correct domain
  - [ ] `sitemap.xml` has correct domain
  - [ ] `llms.txt` has correct domain and info

- [ ] **Contact form functional**
  - [ ] Form connected to email service (Formspree/Basin/EmailJS)
  - [ ] Test submission works
  - [ ] Email notifications arrive
  - [ ] Auto-reply configured (optional)

- [ ] **Analytics installed**
  - [ ] Google Analytics 4 tracking code added
  - [ ] Google Search Console verified
  - [ ] Initial test pageview recorded

- [ ] **Social meta tags**
  - [ ] Open Graph image added (1200x630px)
  - [ ] OG title and description updated
  - [ ] Twitter card meta tags (optional)

---

### Testing — Desktop

- [ ] **Chrome**
  - [ ] All sections load correctly
  - [ ] Animations play smoothly
  - [ ] Forms work
  - [ ] All links clickable

- [ ] **Firefox**
  - [ ] Same as Chrome tests

- [ ] **Safari**
  - [ ] Same as Chrome tests

- [ ] **Edge**
  - [ ] Same as Chrome tests

---

### Testing — Mobile

- [ ] **iOS Safari (iPhone)**
  - [ ] Site loads and displays correctly
  - [ ] Click-to-call works (phone number)
  - [ ] WhatsApp button opens WhatsApp app
  - [ ] Form can be filled out
  - [ ] All buttons easily tappable
  - [ ] Text readable without zooming

- [ ] **Chrome Mobile (Android)**
  - [ ] Same as iOS tests

- [ ] **Landscape orientation**
  - [ ] Site still looks good rotated
  - [ ] No layout breaks

---

### Performance & Accessibility

- [ ] **Lighthouse Audit Run**
  - [ ] Performance score > 90
  - [ ] Accessibility score > 95
  - [ ] Best Practices score > 90
  - [ ] SEO score > 95

- [ ] **Image optimization**
  - [ ] All images compressed (use TinyPNG or similar)
  - [ ] Images served in WebP format where possible
  - [ ] Alt text added to all images

- [ ] **Load time**
  - [ ] Homepage loads in < 3 seconds on 3G
  - [ ] First Contentful Paint < 1.5s

- [ ] **Accessibility checks**
  - [ ] All interactive elements keyboard accessible
  - [ ] Color contrast meets WCAG AA standards
  - [ ] Screen reader friendly (test with VoiceOver/NVDA)

---

### Security & Privacy

- [ ] **HTTPS enabled**
  - [ ] All pages load over HTTPS
  - [ ] No mixed content warnings

- [ ] **Privacy policy** (optional but recommended)
  - [ ] Privacy policy page created
  - [ ] Contact form mentions data usage
  - [ ] GDPR compliance if serving EU visitors

- [ ] **No exposed secrets**
  - [ ] No API keys in frontend code
  - [ ] No sensitive data in public files

---

### SEO Optimization

- [ ] **Google Search Console**
  - [ ] Site verified
  - [ ] Sitemap submitted
  - [ ] No crawl errors

- [ ] **Google Business Profile**
  - [ ] Business listing claimed
  - [ ] Website link added
  - [ ] Photos uploaded
  - [ ] Reviews linked

- [ ] **Local SEO**
  - [ ] NAP (Name, Address, Phone) consistent everywhere
  - [ ] Schema markup includes local business info
  - [ ] Google Maps embedded (optional)

- [ ] **Meta tags verified**
  - [ ] Title tag under 60 characters
  - [ ] Meta description under 160 characters
  - [ ] Keywords relevant and natural

---

### External Integrations

- [ ] **WhatsApp**
  - [ ] Phone number correct (447380906902)
  - [ ] Pre-filled message appropriate
  - [ ] Opens WhatsApp app on mobile
  - [ ] Opens WhatsApp Web on desktop

- [ ] **TradeHub**
  - [ ] Listing link added to footer
  - [ ] Backlink from TradeHub to new site

- [ ] **Google Reviews**
  - [ ] Link to Google Business Profile review page
  - [ ] "Leave a Review" button added (optional)

---

### Content Quality

- [ ] **Spelling and grammar**
  - [ ] All text proofread
  - [ ] No typos or errors
  - [ ] Professional tone consistent

- [ ] **Photos**
  - [ ] High quality (not blurry or pixelated)
  - [ ] Well-lit and professional
  - [ ] Showcase best work
  - [ ] Before/after pairs included

- [ ] **Call-to-actions clear**
  - [ ] "Call Glen" button prominent
  - [ ] WhatsApp easily accessible
  - [ ] Contact form visible

---

### Legal & Compliance

- [ ] **Terms of Service** (optional)
  - [ ] T&C page created
  - [ ] Linked in footer

- [ ] **Cookie consent** (if using tracking)
  - [ ] Cookie banner added (if EU visitors)
  - [ ] Compliant with GDPR/CCPA

- [ ] **Copyright notice**
  - [ ] Footer has "© 2026 EKH Painting & Decorating"
  - [ ] All rights reserved statement

---

## 🚀 Deployment Steps

### Option 1: Vercel (Recommended)

1. **Create GitHub repository**
   \`\`\`bash
   git init
   git add .
   git commit -m "Initial commit - EKH website"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   \`\`\`

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repo
   - Vercel auto-detects Next.js
   - Click "Deploy"
   - Wait 2-3 minutes

3. **Configure custom domain**
   - In Vercel dashboard, go to Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed by Vercel
   - Wait for DNS propagation (up to 24 hours)

4. **Test live site**
   - Visit your new domain
   - Run through all checklist items again

---

### Option 2: Static Export (Any Host)

1. **Build the site**
   \`\`\`bash
   npm run build
   \`\`\`

2. **Test the build locally**
   \`\`\`bash
   npx serve out
   \`\`\`
   Visit `http://localhost:3000`

3. **Upload to hosting**
   - Upload the entire `out` folder
   - Set up custom domain
   - Configure HTTPS

4. **Test live site**
   - Visit your new domain
   - Run through all checklist items again

---

## 📊 Post-Deployment Tasks

### Week 1
- [ ] Monitor Google Search Console for crawl errors
- [ ] Check Google Analytics for traffic
- [ ] Test contact form submissions
- [ ] Verify all CTAs working
- [ ] Ask friends/family to test on their devices

### Month 1
- [ ] Review Analytics data
- [ ] Check which pages get the most traffic
- [ ] Optimize based on user behavior
- [ ] Add more project photos to gallery
- [ ] Update reviews section with new Google reviews

### Ongoing
- [ ] Add new photos quarterly
- [ ] Update reviews as they come in
- [ ] Monitor site speed
- [ ] Check for broken links
- [ ] Keep content fresh

---

## 🆘 Troubleshooting Common Issues

### Issue: Form submissions not arriving
**Fix:**
- Check email service (Formspree) spam folder
- Verify form action URL is correct
- Test with a different email address

### Issue: WhatsApp button not working on iPhone
**Fix:**
- Verify phone number format (no spaces: 447380906902)
- Check that WhatsApp is installed
- Try on a different device

### Issue: Site is slow
**Fix:**
- Compress images (use TinyPNG)
- Check Lighthouse report for suggestions
- Consider using a CDN

### Issue: SEO not improving
**Fix:**
- Give it time (3-6 months for new sites)
- Ensure Google Search Console is set up
- Add more content (blog posts, case studies)
- Get backlinks from TradeHub and local directories

---

## 📱 Launch Day Announcement

Once deployed, announce on:

- [ ] **Google Business Profile** — Post about new website
- [ ] **TradeHub listing** — Update with website URL
- [ ] **Email signature** — Add website link
- [ ] **Invoices/quotes** — Add website footer
- [ ] **Business cards** — Print with new website (if applicable)
- [ ] **Local directories** — Update listings with website
- [ ] **Friends & family** — Share the news!

---

## ✅ Final Sign-Off

Before marking the project as complete:

- [ ] Client has reviewed and approved the site
- [ ] All feedback incorporated
- [ ] Payment processed (if applicable)
- [ ] Login credentials shared (if needed)
- [ ] Maintenance plan discussed
- [ ] Future update process explained

---

**Congratulations!** 🎉

Your new website is live and ready to bring in customers. Remember to keep it updated with fresh photos and new reviews.

**Next steps:**
1. Monitor analytics
2. Respond to form submissions promptly
3. Keep adding great project photos
4. Share the website with every customer

Good luck! 🚀
