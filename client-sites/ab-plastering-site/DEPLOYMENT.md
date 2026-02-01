# Deployment Guide - A.B Plastering & Rendering

## Quick Start

The site is now built and ready to deploy. The production files are in the `out/` directory.

## Development Server

```bash
npm run dev
```
Then open http://localhost:3001 (or http://localhost:3000 if available)

## Production Build

```bash
npm run build
```

This creates static files in the `out/` directory ready for deployment.

## Deployment Options

### Option 1: Vercel (Recommended - Free & Fast)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: A.B Plastering website"
   git remote add origin [your-github-repo-url]
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to https://vercel.com
   - Sign in with GitHub
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js and deploy
   - You'll get a live URL instantly (e.g., `ab-plastering.vercel.app`)

3. **Add Custom Domain**
   - In Vercel dashboard, go to Settings → Domains
   - Add your custom domain (e.g., `abplastering.co.uk`)
   - Follow DNS instructions to point domain to Vercel
   - SSL certificate is automatic and free

### Option 2: Netlify (Also Free)

1. **Push to GitHub** (same as above)

2. **Deploy to Netlify**
   - Go to https://netlify.com
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub and select your repo
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `out`
   - Click "Deploy"

### Option 3: Traditional Web Host (cPanel, etc.)

1. **Build locally**
   ```bash
   npm run build
   ```

2. **Upload the `out/` directory**
   - Use FTP/SFTP to upload everything in the `out/` folder
   - Upload to your `public_html` or `www` directory
   - That's it! The site is live.

## Before Going Live - Checklist

### 1. Update Domain References
Replace `[domain]` in these files with your actual domain:

- `/public/robots.txt` - Update sitemap URL
- `/public/sitemap.xml` - Update domain
- `/public/llms.txt` - Update website URL
- `components/Footer.tsx` - Update TradeHub listing URL

### 2. Add Client Photos
Replace placeholder images in:

- `components/Hero.tsx` - Add hero background image
- `components/About.tsx` - Add photo of Adam or finished work
- `components/Gallery.tsx` - Add 6 before/after photos
- `components/Contact.tsx` - Add contact section image

To add images:
1. Place images in `/public/images/` folder
2. Update components to use them instead of placeholders

### 3. Configure Contact Form
The contact form currently only logs to console. To make it work:

**Option A: Use a form service (easiest)**
- [Formspree](https://formspree.io) - Free tier available
- [Web3Forms](https://web3forms.com) - Free, no sign-up
- Update the form's `onSubmit` handler in `components/Contact.tsx`

**Option B: Add email backend**
- Use EmailJS, SendGrid, or your own API endpoint
- Update form submission logic in `components/Contact.tsx`

### 4. Test on Mobile
- The site is mobile-first but test on real devices
- Check click-to-call links work
- Verify WhatsApp button functions correctly

### 5. SEO Final Checks
- Verify all meta tags are correct in `app/layout.tsx`
- Check Schema.org JSON-LD data
- Submit sitemap to Google Search Console

## Post-Deployment

### Add Google Analytics (Optional)
1. Get tracking ID from Google Analytics
2. Add to `app/layout.tsx` in the `<head>` section

### Monitor Performance
- Use Google PageSpeed Insights
- Check mobile usability in Google Search Console
- Monitor form submissions

### Update Content
To update reviews, services, or any text:
1. Edit the component files in `/components/`
2. Run `npm run build`
3. Re-deploy (Vercel/Netlify auto-deploy on git push)

## Support

For issues or questions:
- Check Next.js docs: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Framer Motion: https://www.framer.com/motion/

---

Built with premium craftsmanship. Ready to showcase Adam's perfect 5-star standard.
