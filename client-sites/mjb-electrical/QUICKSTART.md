# Quick Start Guide

## View the Site Now

The development server is already running! Open your browser:

**👉 http://localhost:3000**

## Deploy to Vercel (2 Minutes)

```bash
# Install Vercel CLI (one-time)
npm i -g vercel

# Deploy
cd /Users/austin/Desktop/TradeHub/client-sites/mjb-electrical
vercel
```

Follow the prompts:
1. "Set up and deploy?" → **Yes**
2. "Which scope?" → Choose your account
3. "Link to existing project?" → **No**
4. "What's your project's name?" → **mjb-electrical** (or custom)
5. "In which directory is your code located?" → **./** (press Enter)

**Done!** You'll get a live URL like: `mjb-electrical.vercel.app`

## Make Changes

All content is in one file: `/app/page.tsx`

**Update phone number:**
```typescript
// Find and replace throughout file
07941746878 → NEW_NUMBER
```

**Update colors:**
Edit `/app/globals.css`:
```css
@theme {
  --color-mjb-green: #7CB342;  /* Change this */
  --color-mjb-amber: #FFA726;  /* Change this */
}
```

**Add/remove services:**
Edit the `ServiceCard` components in `/app/page.tsx`

**Update reviews:**
Edit the `reviews` array at bottom of `/app/page.tsx`

## Connect Contact Form

The form doesn't submit yet. Quick options:

### Option A: FormSpree (Easiest)
1. Go to [formspree.io](https://formspree.io)
2. Create free account
3. Create new form
4. Copy your form ID
5. In `/app/page.tsx`, update form tag:
```tsx
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option B: Netlify Forms
If deploying to Netlify instead of Vercel, just add:
```tsx
<form netlify>
```

## Stop Dev Server

```bash
# Find the process
lsof -ti:3000

# Kill it
kill -9 $(lsof -ti:3000)
```

## Rebuild After Changes

```bash
npm run build
```

## Common Issues

**Port 3000 in use?**
```bash
kill -9 $(lsof -ti:3000)
npm run dev
```

**Build fails?**
```bash
rm -rf .next node_modules
npm install
npm run build
```

**Images not loading?**
- Check logo exists at `/public/logo.webp`

## File Overview

- **`/app/page.tsx`** - Main page (edit this for content)
- **`/app/globals.css`** - Styles and colors
- **`/public/logo.webp`** - Logo image
- **`/package.json`** - Dependencies
- **`/BRIEF.md`** - Original requirements (reference only)

## What's Next?

1. ✅ View at http://localhost:3000
2. ✅ Make any tweaks needed
3. ✅ Deploy to Vercel
4. ✅ Share preview URL with client
5. ⏳ Connect form submission
6. ⏳ Add custom domain when ready
7. ⏳ Update TradeHub link in footer

---

**Need help?** Check:
- `README.md` - Full technical docs
- `DEPLOYMENT.md` - Detailed deployment guide
- `DESIGN_NOTES.md` - Design system reference
