# Quick Start Guide — EKH Painting & Decorating Website

Welcome to your new website! This guide will help you get it up and running.

## ⚡ Getting Started (5 minutes)

### What You Need
- A computer with internet access
- Basic comfort with the command line
- Node.js installed ([download here](https://nodejs.org/))

### Installation

1. **Open Terminal** (Mac) or Command Prompt (Windows)

2. **Navigate to the project folder:**
   \`\`\`bash
   cd /Users/austin/Desktop/TradeHub/client-sites/ekh-painting
   \`\`\`

3. **Install dependencies:**
   \`\`\`bash
   npm install
   \`\`\`
   *(This downloads all the required packages. Takes 2-3 minutes.)*

4. **Start the website locally:**
   \`\`\`bash
   npm run dev
   \`\`\`

5. **Open your browser** and go to:
   ```
   http://localhost:3000
   ```

**That's it!** Your website is now running locally. Any changes you make will show up instantly.

---

## 📸 Adding Your Photos (Most Important!)

The website has placeholder images that need to be replaced with real project photos.

### Where to Add Photos

#### 1. **Hero Background** (The big image at the top)
- **Location:** `src/app/page.tsx` around line 26
- **What to use:** Your absolute best project photo—a stunning finished room or dramatic before/after
- **Size:** At least 1920x1080 pixels
- **How:** Replace the gradient background with an `<img>` or Next.js `<Image>` component

#### 2. **About Section Photo**
- **Location:** `src/app/page.tsx` around line 136
- **What to use:** Photo of you and Nina at work, or a mid-project shot showing craftsmanship
- **Size:** 1200x900 pixels (4:3 aspect ratio)

#### 3. **Project Gallery** (6 photo slots)
- **Location:** `src/app/page.tsx` around line 266
- **What to use:**
  - Before/after pairs (powerful!)
  - Close-ups of detailed work
  - Full room transformations
  - Exterior painting projects
- **Size:** 800x600 pixels each (4:3 aspect ratio)

#### 4. **Contact Section Photo**
- **Location:** `src/app/page.tsx` around line 485
- **What to use:** Another finished project or you at work
- **Size:** 1200x900 pixels (4:3 aspect ratio)

### Finding the Right Spots in Code

Look for these comments in `src/app/page.tsx`:
- `{/* HERO IMAGE: Replace with client's best project photo */}`
- `{/* ABOUT IMAGE: Team photo or mid-project shot */}`
- `{/* GALLERY: Replace placeholders with client project photos */}`
- `{/* CONTACT IMAGE: Finished project photo or Glen at work */}`

---

## ✏️ Updating Text Content

All the main content is in one file: `src/app/page.tsx`

### Services (Line ~795)
Change the services offered, descriptions, or add new ones:
\`\`\`javascript
const services = [
  {
    title: 'Interior Painting',
    icon: <Home className="h-7 w-7" />,
    items: [
      'Living rooms, bedrooms, kitchens',
      'Feature walls & accent colours',
      // Add more here
    ],
  },
  // ...
];
\`\`\`

### Reviews (Line ~840)
Add more Google reviews:
\`\`\`javascript
const reviews = [
  {
    name: 'Customer Name',
    text: 'Review text goes here...',
  },
  // Add more reviews
];
\`\`\`

### Areas Served (Line ~856)
Update the list of areas you cover:
\`\`\`javascript
const areas = [
  'Sutton Coldfield',
  'Birmingham',
  // Add or remove areas
];
\`\`\`

---

## 🎨 Changing Colors

Colors are defined in `tailwind.config.ts`.

Current palette:
- **Sage Green:** `#2D5A4B` (primary brand color)
- **Cream:** `#F5E6C8` (background accents)
- **Gold:** `#D4A853` (highlights)

To change:
1. Open `tailwind.config.ts`
2. Find the `colors` section
3. Change the hex values
4. Save and refresh your browser

---

## 🚀 Deploying to the Internet

### Option 1: Vercel (Recommended — Free & Easy)

1. **Create a Vercel account:** [vercel.com](https://vercel.com)
2. **Push your code to GitHub** (create a repo if you don't have one)
3. **In Vercel dashboard:**
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js
   - Click "Deploy"
4. **Done!** Your site is live in ~2 minutes

### Option 2: Static Export (Any Host)

1. **Build the site:**
   \`\`\`bash
   npm run build
   \`\`\`

2. **Upload the `out` folder** to any web host:
   - Netlify
   - GitHub Pages
   - Your existing web hosting
   - Any static file host

---

## 📱 Testing on Mobile

**Before going live, test on real devices:**

1. **Get your local IP address:**
   \`\`\`bash
   npm run dev
   \`\`\`
   Look for: `Local: http://localhost:3000`

2. **Find your computer's IP:**
   - **Mac:** System Settings → Network → Your IP
   - **Windows:** `ipconfig` in Command Prompt

3. **On your phone's browser, go to:**
   \`\`\`
   http://YOUR-IP-ADDRESS:3000
   \`\`\`

4. **Test:**
   - Click all buttons (especially phone and WhatsApp)
   - Fill out the contact form
   - Check that everything looks good

---

## ⚙️ Connecting the Contact Form

Right now, the contact form doesn't send emails. You need to connect it to a service.

### Recommended: Formspree (Free)

1. **Create account:** [formspree.io](https://formspree.io)
2. **Create a new form** and get your endpoint URL
3. **In `src/app/page.tsx` (line ~495):**
   \`\`\`jsx
   <form action="YOUR-FORMSPREE-URL" method="POST" className="...">
   \`\`\`
4. **Save and test!**

### Alternative: Basin, EmailJS, or custom backend

All work similarly—get an endpoint URL and update the form action.

---

## 🔍 SEO Setup (Before Launch)

### 1. Update Domain References

Replace `https://ekhpainting.com` with your actual domain in:
- `public/robots.txt`
- `public/sitemap.xml`
- `public/llms.txt`

### 2. Google Search Console

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add your website
3. Verify ownership (follow Google's instructions)
4. Submit your sitemap: `https://yoursite.com/sitemap.xml`

### 3. Google Analytics (Optional)

1. Create account: [analytics.google.com](https://analytics.google.com)
2. Get your tracking ID
3. Add it to `src/app/layout.tsx` (instructions in Google Analytics)

---

## 📞 WhatsApp Button

The floating WhatsApp button is already set up with:
- **Phone number:** 07380 906902
- **Pre-filled message:** "Hi Glen, I found you on Google and I'm looking for a quote for painting/decorating work."

To change the message:
1. Open `src/components/WhatsAppButton.tsx`
2. Find line 6
3. Change the text in quotes
4. Save

---

## ❓ Common Questions

### Q: How do I stop the development server?
**A:** Press `Ctrl + C` in the terminal

### Q: I made changes but don't see them
**A:**
1. Make sure you saved the file
2. Check the terminal for errors
3. Try refreshing the browser (Cmd+R or Ctrl+R)

### Q: Can I change the fonts?
**A:** Yes! Edit `src/app/layout.tsx` and change the font imports. [Browse Google Fonts](https://fonts.google.com)

### Q: The site looks broken after I made changes
**A:**
1. Check the terminal for error messages
2. Undo your last change
3. Restart the dev server: `npm run dev`

### Q: How do I add a new section?
**A:** You'll need to edit `src/app/page.tsx`. Copy an existing section and modify it. If you're not comfortable with this, ask your developer.

---

## 🆘 Getting Help

1. **Check the README.md** for detailed documentation
2. **Read DESIGN-NOTES.md** for design philosophy and tips
3. **Contact your developer** if you need custom changes
4. **Next.js docs:** [nextjs.org/docs](https://nextjs.org/docs)

---

## ✅ Pre-Launch Checklist

Before going live, make sure you've:

- [ ] Replaced all placeholder images with real photos
- [ ] Added more Google reviews to the reviews section
- [ ] Updated the domain in robots.txt and sitemap.xml
- [ ] Connected the contact form to an email service
- [ ] Tested all buttons (phone, WhatsApp, form submit)
- [ ] Tested on mobile devices (iPhone and Android)
- [ ] Set up Google Search Console
- [ ] Added Google Analytics (optional)
- [ ] Updated the TradeHub listing link in the footer
- [ ] Checked that all text is accurate and spell-checked

---

**Ready to launch?** Deploy to Vercel and share your new website with customers!

**Need changes?** All the code is well-organized and commented—your developer can easily make modifications.

**Questions?** Refer to README.md or contact your developer.

---

Good luck with your new website! 🎨✨
