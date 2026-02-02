# Deployment Guide - CHM Heating Services

## Pre-Deployment Checklist

- [x] Website built and tested locally
- [x] SEO metadata configured
- [x] Schema.org markup added
- [x] llms.txt file created
- [x] Robots.txt and sitemap configured
- [ ] Domain purchased/configured (chmheating.co.uk)
- [ ] Logo image added (if available)
- [ ] Favicon customized (currently using placeholder)

## Vercel Deployment (Recommended)

### Step 1: Push to GitHub

```bash
cd /Users/austin/Desktop/TradeHub/client-sites/chm-heating-services
git init
git add .
git commit -m "Initial commit: CHM Heating Services website"
git branch -M main
git remote add origin [YOUR_GITHUB_REPO_URL]
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel will auto-detect Next.js settings
5. Click "Deploy"

### Step 3: Configure Custom Domain

1. In Vercel project settings, go to "Domains"
2. Add custom domain: `chmheating.co.uk`
3. Follow DNS configuration instructions:
   - Add A record pointing to Vercel's IP
   - Or add CNAME record pointing to `cname.vercel-dns.com`
4. Wait for DNS propagation (can take up to 48 hours)

### Environment Variables

No environment variables required for this static site.

## Alternative Deployment: Netlify

### Option 1: GitHub Integration

1. Push code to GitHub (see Step 1 above)
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import existing project"
4. Connect to GitHub and select repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Deploy

### Option 2: Netlify CLI

```bash
npm install -g netlify-cli
cd /Users/austin/Desktop/TradeHub/client-sites/chm-heating-services
netlify init
netlify deploy --prod
```

## Alternative Deployment: Traditional Hosting

For traditional hosting (cPanel, shared hosting):

```bash
# Build the site
npm run build

# Export static version (requires next.config.ts modification)
# Add: output: 'export'
npm run build
```

Then upload the `out` folder to your hosting via FTP.

**Note**: For full Next.js features, use Vercel or Netlify.

## DNS Configuration

### For chmheating.co.uk

**Option A: Using Vercel DNS**
- Point nameservers to Vercel
- Vercel handles all DNS records

**Option B: Using Existing DNS Provider**
- Add A record: `@` → Vercel IP (provided in dashboard)
- Add CNAME record: `www` → `cname.vercel-dns.com`

### Recommended DNS Settings

```
Type    Name    Value                           TTL
A       @       76.76.21.21                     3600
CNAME   www     cname.vercel-dns.com           3600
```

## SSL Certificate

Both Vercel and Netlify provide free automatic SSL certificates via Let's Encrypt. No configuration needed.

## Post-Deployment Tasks

### 1. Google Search Console

1. Visit [search.google.com/search-console](https://search.google.com/search-console)
2. Add property: `https://chmheating.co.uk`
3. Verify ownership (use DNS or HTML file method)
4. Submit sitemap: `https://chmheating.co.uk/sitemap.xml`

### 2. Google Business Profile

Update Google Business Profile with website URL:
1. Go to [business.google.com](https://business.google.com)
2. Edit business information
3. Add website: `https://chmheating.co.uk`

### 3. Monitor Performance

- Use Google PageSpeed Insights to check performance
- Monitor Google Search Console for indexing issues
- Check Google Analytics (if installed)

### 4. Test All Features

- [ ] Test phone number click-to-call on mobile
- [ ] Verify all anchor links work (#services, #contact, etc.)
- [ ] Check mobile responsiveness on real devices
- [ ] Test page load speed
- [ ] Verify schema markup with [schema.org validator](https://validator.schema.org/)

## Ongoing Maintenance

### Update Reviews

When new Google reviews come in, update in `app/page.tsx` at line ~23:

```typescript
const reviews = [
  // Add new reviews here
];
```

### SEO Updates

Update metadata in `app/layout.tsx` if needed.

## Support

For deployment issues:
- Vercel: [vercel.com/docs](https://vercel.com/docs)
- Netlify: [docs.netlify.com](https://docs.netlify.com)
- Next.js: [nextjs.org/docs](https://nextjs.org/docs)

## Cost Estimate

- **Vercel Free Tier**: Perfect for this site (includes SSL, CDN, analytics)
- **Netlify Free Tier**: Also suitable (100GB bandwidth/month)
- **Domain**: £10-15/year for .co.uk
- **Total**: ~£15/year (just the domain cost)

---

**Ready to deploy!** 🚀
