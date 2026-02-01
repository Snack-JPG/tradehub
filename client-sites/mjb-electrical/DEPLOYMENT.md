# Deployment Guide - MJB Electrical Services

## Pre-Deployment Checklist

- [ ] Logo is in `/public/logo.webp`
- [ ] Phone number verified: `07941746878`
- [ ] All reviews from Checkatrade are accurate
- [ ] Areas served list is complete
- [ ] TradeHub listing URL is ready to link

## Deploy to Vercel (Recommended)

### Step 1: Create Vercel Account
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub (recommended) or email

### Step 2: Push Code to GitHub
```bash
cd /Users/austin/Desktop/TradeHub/client-sites/mjb-electrical

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: MJB Electrical Services website"

# Create GitHub repo and push
# (Follow GitHub's instructions for creating a new repo)
git remote add origin YOUR_GITHUB_REPO_URL
git branch -M main
git push -u origin main
```

### Step 3: Deploy on Vercel
1. Go to [vercel.com/new](https://vercel.com/new)
2. Click "Import Project"
3. Select your GitHub repository
4. Vercel will auto-detect Next.js settings
5. Click "Deploy"

**Deploy time**: ~2-3 minutes

You'll get a preview URL like: `mjb-electrical.vercel.app`

### Step 4: Add Custom Domain (When Client Pays)
1. In Vercel dashboard, go to Settings → Domains
2. Add custom domain (e.g., `mjbelectrical.co.uk`)
3. Follow DNS configuration instructions
4. SSL certificate is automatic (free)

## Alternative: Static HTML Export

If you need to host elsewhere (not Vercel):

```bash
# Build static export
npm run build

# Output will be in /out directory
# Upload /out to any static host (Netlify, GitHub Pages, AWS S3, etc.)
```

## Post-Deployment Tasks

### 1. Test the Site
- [ ] Click-to-call buttons work on mobile
- [ ] Form submission (once connected)
- [ ] All sections scroll smoothly
- [ ] Images load correctly
- [ ] Mobile responsive on all screen sizes

### 2. Performance Check
```bash
# Run Lighthouse audit
# In Chrome DevTools: Lighthouse tab → Generate Report
# Target: 90+ on all metrics
```

### 3. SEO Setup
- [ ] Submit sitemap to Google Search Console
- [ ] Verify phone number click tracking works
- [ ] Set up Google Analytics (optional)

### 4. Link TradeHub
- [ ] Update footer TradeHub link with actual listing URL
- [ ] Update TradeHub listing with backlink to new site

## Form Integration Options

The contact form currently doesn't submit. Choose one:

### Option A: FormSpree (Easiest)
```html
<!-- In app/page.tsx, update form tag -->
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option B: Vercel Functions
Create `/api/contact/route.ts` for custom form handling.

### Option C: Netlify Forms
Add `netlify` attribute to form tag if hosting on Netlify.

## Maintenance

### Update Reviews
Edit the `reviews` array in `app/page.tsx`:
```typescript
const reviews = [
  {
    name: 'Customer Name',
    review: 'Review text here...',
    location: 'Postcode'
  },
  // Add more...
]
```

### Update Services
Edit service categories in the `ServiceCard` components in `app/page.tsx`.

### Update Areas
Edit the `areas` array at the bottom of `app/page.tsx`.

## Troubleshooting

### Build Fails
```bash
# Clear cache and reinstall
rm -rf .next node_modules
npm install
npm run build
```

### Images Not Loading
- Check logo is at `/public/logo.webp`
- Verify file permissions

### Fonts Not Loading
- Check internet connection (Google Fonts CDN)
- Fonts are loaded in `app/globals.css`

## Support

For technical issues with this codebase, contact the developer who built this site.

For Vercel hosting issues: [vercel.com/support](https://vercel.com/support)
