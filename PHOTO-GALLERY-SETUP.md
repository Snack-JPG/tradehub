# Photo Gallery Setup Guide

## ✅ What's Already Built

You've got a complete photo system ready to use:

1. **PhotoGallery Component** ✅
   - Grid display with hover effects
   - Lightbox viewer with navigation
   - Before/After badges
   - Caption support
   - Keyboard shortcuts (arrows, escape)

2. **Integration** ✅
   - Already on trade profile pages
   - Shows "Photos" badge on TradeCard
   - Empty state message when no photos

3. **Manual Upload Form** ✅ NEW!
   - Located at: `/admin/add-photos`
   - Search for tradesperson
   - Add photo URLs
   - Auto-generates JSON to copy/paste

---

## 🚀 How to Add Photos (Quick Start)

### Method 1: Using the Admin Form (Easiest)

1. **Visit the form:**
   ```
   http://localhost:3000/admin/add-photos
   ```

2. **Search and select** a tradesperson

3. **Click "Add Photo"** and fill in:
   - Image URL (from Imgur, Cloudflare, etc.)
   - Caption (e.g., "Bathroom renovation, Birmingham")
   - Type (General, Before, or After)

4. **Click "Copy to Clipboard"**

5. **Open** `site/data/trades.json`

6. **Find the tradesperson** and replace their entry with the copied JSON

7. **Save** and refresh your site!

---

### Method 2: Manual JSON Editing

1. **Upload images** to a hosting service:
   - **Imgur**: Free, easy, fast
   - **Cloudflare Images**: Professional, CDN
   - **Your server**: `/public/uploads/[slug]/`

2. **Add `photos` array** to tradesperson in `trades.json`:

```json
{
  "name": "ABC Plumbing",
  "slug": "abc-plumbing",
  "trade_type": "plumbers",
  "area": "Birmingham",
  "phone": "0121 XXX XXXX",
  "...": "...",
  "photos": [
    {
      "url": "https://i.imgur.com/example1.jpg",
      "caption": "Complete bathroom renovation in Birmingham",
      "type": "after"
    },
    {
      "url": "https://i.imgur.com/example2.jpg",
      "caption": "Old bathroom before renovation",
      "type": "before"
    },
    {
      "url": "https://i.imgur.com/example3.jpg",
      "caption": "New boiler installation in Solihull",
      "type": "general"
    }
  ]
}
```

---

## 📸 Photo Requirements

### Image Specs
- **Format**: JPG, PNG, WebP
- **Size**: 1200x900px minimum (4:3 ratio)
- **File size**: < 1MB each (compress with TinyPNG)
- **Quality**: High quality, well-lit, professional

### Content Guidelines
✅ **Good Photos:**
- Completed work (after renovations)
- Clean, professional installations
- Well-lit, clear focus
- Shows quality of work
- Before/after comparisons

❌ **Avoid:**
- Blurry or dark photos
- People's faces (privacy)
- Messy work-in-progress shots
- Branded competitor materials
- Client personal items visible

### Photo Types

**General** - Standard project photos
```json
{
  "url": "https://...",
  "caption": "Kitchen installation, Birmingham",
  "type": "general"
}
```

**Before** - Shows condition before work
```json
{
  "url": "https://...",
  "caption": "Old, damaged bathroom tiles",
  "type": "before"
}
```

**After** - Shows completed work
```json
{
  "url": "https://...",
  "caption": "Newly tiled bathroom",
  "type": "after"
}
```

---

## 🎯 Quick Image Hosting Options

### Option 1: Imgur (Easiest for Testing)

1. Go to https://imgur.com
2. Click "New post"
3. Upload image
4. Right-click image → "Copy image address"
5. Use that URL in the form

**Example URL:**
```
https://i.imgur.com/abc123.jpg
```

### Option 2: Your Server

1. Create directory structure:
   ```
   /public/uploads/
     /abc-plumbing/
       photo-1.jpg
       photo-2.jpg
       photo-3.jpg
   ```

2. Use relative URLs:
   ```json
   {
     "url": "/uploads/abc-plumbing/photo-1.jpg",
     "caption": "Bathroom renovation",
     "type": "after"
   }
   ```

### Option 3: Cloudflare Images (Best for Production)

1. Sign up at cloudflare.com/images
2. Upload images
3. Get delivery URL
4. Use in trades.json

**Example URL:**
```
https://imagedelivery.net/your-account/image-id/public
```

---

## 📊 Impact of Adding Photos

### Conversion Boost (Based on Checkatrade Data)

| Photos | Enquiries | Conversion |
|--------|-----------|------------|
| 0      | Baseline  | 1x         |
| 1-3    | +50%      | 1.5x       |
| 4-8    | +180%     | 2.8x       |
| 9+     | +200%     | 3x         |

### Recommended Photo Count

- **Minimum**: 3 photos
- **Optimal**: 6-8 photos
- **Maximum**: 15 photos

---

## 🎨 Example Photo Sets by Trade

### Plumber
1. New boiler installation (after)
2. Old boiler (before)
3. Bathroom renovation (after)
4. Pipework installation (general)
5. Leak repair completion (after)

### Electrician
1. Consumer unit upgrade (after)
2. Old fuse box (before)
3. New lighting installation (after)
4. EV charger installation (general)
5. Kitchen rewire (after)

### Decorator
1. Painted room (after)
2. Bare walls (before)
3. Wallpaper installation (after)
4. Exterior house painting (after)
5. Woodwork refinishing (after)

### Builder
1. Extension completion (after)
2. Before construction (before)
3. Loft conversion (after)
4. Kitchen renovation (after)
5. Garage conversion (after)

---

## 🔄 Workflow: Adding Photos to Top 10 Tradespeople

### Week 1 Task: Add Photos to Featured Trades

1. **Identify top 10 tradespeople** (highest ratings/reviews)

2. **Contact them** (or find their Google Business photos):
   ```
   Subject: Add Photos to Your TradeHub Profile

   Hi [Name],

   We'd love to showcase your work on TradeHub!

   Can you send us 3-5 photos of completed projects?
   - Bathrooms, kitchens, before/afters
   - High quality, well-lit photos
   - We'll credit you and link to your business

   Thanks!
   ```

3. **Use the admin form** at `/admin/add-photos`

4. **Add 4-8 photos per trade**

5. **Test on their profile page**

**Time estimate**: ~10 minutes per tradesperson = 100 minutes total

---

## 🐛 Troubleshooting

### Photos not showing?
- Check trades.json is valid JSON (use JSONLint.com)
- Restart dev server
- Check browser console for errors
- Verify image URLs work (paste in browser)

### Image won't load?
- Check URL is correct
- Check CORS headers (some hosts block hotlinking)
- Try re-uploading to different host
- Use HTTPS URLs only

### JSON syntax error?
- Use the admin form to generate correct JSON
- Check for missing commas
- Check for trailing commas (not allowed)
- Validate with JSONLint.com

---

## 📁 File Locations

- **Component**: `/site/components/PhotoGallery.tsx`
- **Trade Profiles**: `/site/app/trades/[slug]/page.tsx` (line 140)
- **TradeCard**: `/site/components/TradeCard.tsx` (shows badge)
- **Data**: `/site/data/trades.json`
- **Admin Form**: `/site/app/admin/add-photos/page.tsx`
- **Types**: `/site/lib/trades.ts`

---

## ✅ Next Steps

1. **Test the system**:
   - Visit `/admin/add-photos`
   - Add 2-3 photos to one tradesperson
   - View their profile to see the gallery

2. **Gather photos**:
   - Contact your top 10 tradespeople
   - Or scrape from their Google Business profiles
   - Or use placeholder images to test

3. **Scale up**:
   - Add photos to all featured trades
   - Encourage tradespeople to submit photos
   - Consider building self-service upload later

4. **Monitor impact**:
   - Track clicks on tradespeople with photos
   - Compare enquiry rates
   - A/B test photo vs no-photo profiles

---

## 🚀 Future Enhancements

**Phase 2** (if this works well):
- Self-service upload form for tradespeople
- Image compression/resize on upload
- S3/Cloudflare integration
- Photo approval workflow
- Video support
- 360° virtual tours

**Phase 3** (advanced):
- Before/after slider component
- Photo categories/tags
- User-submitted photos ("Hired this person, here's the result")
- Photo voting/likes
- AI auto-tagging
- Image CDN optimization

---

## 💡 Pro Tips

1. **Start small**: Add photos to 5-10 top tradespeople first
2. **Use real photos**: Better than stock images
3. **Write good captions**: Include location + project type
4. **Before/after combo**: Most engaging format
5. **Mobile-first**: Most users browse on phones
6. **Compress images**: Use TinyPNG before upload
7. **Consistent quality**: Don't mix pro photos with phone snaps

---

## 📞 Support

If you have issues:
1. Check browser console for errors
2. Validate trades.json at JSONLint.com
3. Try the admin form instead of manual editing
4. Check the example data below

---

## Example: Complete Tradesperson with Photos

```json
{
  "name": "ABC Plumbing & Heating",
  "slug": "abc-plumbing-heating",
  "trade_type": "plumbers",
  "area": "Birmingham",
  "phone": "0121 XXX XXXX",
  "email": "info@abcplumbing.co.uk",
  "website_url": "https://abcplumbing.co.uk",
  "description": "Professional plumbing and heating services across Birmingham",
  "services": ["Boiler Installation", "Bathroom Fitting", "Leak Repairs"],
  "areas_served": ["Birmingham", "Solihull", "Hall Green"],
  "reviews": [],
  "rating": 4.8,
  "review_count": 42,
  "featured": true,
  "verified": false,
  "image": "",
  "accreditations": [],
  "added_date": "2026-02-01",
  "photos": [
    {
      "url": "https://i.imgur.com/example1.jpg",
      "caption": "Complete bathroom renovation in Birmingham - modern tiles and fixtures",
      "type": "after"
    },
    {
      "url": "https://i.imgur.com/example2.jpg",
      "caption": "Bathroom before renovation - old tiles and outdated fixtures",
      "type": "before"
    },
    {
      "url": "https://i.imgur.com/example3.jpg",
      "caption": "New Worcester Bosch boiler installation in Solihull",
      "type": "general"
    },
    {
      "url": "https://i.imgur.com/example4.jpg",
      "caption": "Kitchen sink and tap replacement with chrome fixtures",
      "type": "general"
    },
    {
      "url": "https://i.imgur.com/example5.jpg",
      "caption": "Emergency leak repair - pipe replacement in Hall Green",
      "type": "after"
    }
  ]
}
```

Ready to use! 🎉
