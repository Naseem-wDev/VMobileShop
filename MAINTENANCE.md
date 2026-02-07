# 📚 Maintenance & Update Guide - Shigari Mobile Shop

This guide explains how to maintain and update your website after launch.

## 🔄 Regular Maintenance Tasks

### Daily
- Monitor WhatsApp messages from customers
- Check website performance (if hosted with monitoring)
- Verify payment system (if integrated)

### Weekly
- Update inventory if phone prices change
- Review customer inquiries
- Check for any error messages in console

### Monthly
- Update product stock status
- Review and update "Featured" phones if needed
- Check Google Search Console for indexing issues
- Update working hours if changes

### Quarterly
- Review analytics (Google Analytics)
- Update "Why Choose Us" testimonials/metrics if available
- Check SEO rankings
- Update social media links if changed

## 📱 How to Update Mobile Phones

### Add a New Mobile Phone

1. **Edit the data file**:
   ```bash
   Open: src/data/mobiles.ts
   ```

2. **Add new entry** before the last closing bracket:
   ```typescript
   {
     id: '22',  // Increment from highest ID
     brand: 'Samsung',
     model: 'Galaxy A16',
     price: 94999,
     image: 'https://images.unsplash.com/photo-...',
     ram: '8GB',
     storage: '128GB',
     camera: '50MP + 8MP',
     battery: '5000mAh',
     display: '6.7" AMOLED',
     processor: 'Helio G99',
     category: 'Budget'  // Options: 'Flagship', 'Mid-Range', 'Budget'
   },
   ```

3. **Save the file** and the website updates automatically in dev mode

4. **Get phone image**:
   - Use Unsplash (free stock photos)
   - Search for phone model
   - Copy image URL to `image` field

5. **Verify**: Refresh browser to see new phone appear

### Update Phone Price

1. Replace the old price number with new price:
   ```typescript
   price: 89999,  // Change this number
   ```

2. Save and verify the update appears

### Remove a Phone

1. Delete the entire phone object (from `{` to `},`)
2. Save the file
3. The phone disappears from website

### Add a New Brand

1. The website automatically detects new brands from phone data
2. Just add phones with a new brand name
3. They'll appear in the Brand filter automatically
4. Update [UpdateFeaturedBrands.tsx](src/components/FeaturedBrands.tsx) if you want to show them in the "Featured Brands" section

## 💬 How to Update Content

### Update Contact Information

**Phone Number (appears in 5 places):**
1. `src/components/Navigation.tsx` - Line: `https://wa.me/923355551234`
2. `src/components/HeroSection.tsx` - Line: `https://wa.me/923355551234`
3. `src/components/ContactUs.tsx` - All occurrences
4. `src/components/FloatingWhatsApp.tsx`
5. `src/components/Footer.tsx`

Replace `923355551234` with your WhatsApp number (format: country code + number without +)

**Email Address:**
1. `src/components/ContactUs.tsx` - Replace `info@shigarimobile.com`
2. `src/components/Footer.tsx` - Replace in email link

**Physical Address:**
1. `src/components/ContactUs.tsx` - Update the address section
2. `src/components/Footer.tsx` - Update footer address

### Update About Us Story

Edit `src/components/AboutUs.tsx`:
- Replace the company story text
- Update the founding year (currently "since 2015")
- Modify the vision statement

### Update Why Choose Us Points

Edit `src/components/WhyChooseUs.tsx`:
```typescript
const reasons = [
  {
    icon: '✓',
    title: 'Your New Title',
    description: 'Your new description here',
  },
  // ... more reasons
];
```

### Update Navigation Menu

Edit `src/components/Navigation.tsx` to add new sections or change existing names.

### Update Hero Section Text

Edit `src/components/HeroSection.tsx`:
- `hero-title` - Main heading
- `hero-subtitle` - Subheading
- `hero-slogan` - Tagline
- `hero-description` - Description text

## 🎨 How to Change Colors

All colors are in CSS variables at the top of `src/App.css`:

```css
:root {
  --primary-color: #001f3f;        /* Dark blue */
  --secondary-color: #1a472a;      /* Mountain green */
  --accent-color: #00a8e8;         /* Bright blue */
  --success-color: #10b981;        /* Green for success/buy buttons */
  --white: #ffffff;
  /* ... other colors */
}
```

To change:
1. Update the hex color code
2. All elements using that color variable update automatically

### Example Color Changes:
- **Dark blue to dark red**: `--primary-color: #8B0000;`
- **Mountain green to forest green**: `--secondary-color: #0B5F0B;`
- **Bright blue to purple**: `--accent-color: #8B00FF;`

## 🔤 How to Change Fonts

Fonts are loaded from Google Fonts in `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@600;700;800&display=swap" rel="stylesheet" />
```

Current fonts:
- **Inter** - Body text, descriptions
- **Poppins** - Headings (titles, sections)

To change:
1. Visit https://fonts.google.com/
2. Select new font
3. Copy the `<link>` tag
4. Replace the link in `index.html`
5. Update CSS in `src/App.css`:
   ```css
   body {
     font-family: 'NewFont', sans-serif;
   }
   ```

## 📸 How to Add/Update Logo

Replace the logo at: `public/gb-logo.svg`

The SVG file contains the custom GB logo. You can:
1. Edit the SVG directly (change colors, text, shapes)
2. Replace with a PNG image (convert SVG reference)
3. Update in `index.html` and `Navigation.tsx` if needed

## 🖼️ How to Add Images

### Hero Image
```typescript
// In HeroSection.tsx
<img src="https://images.unsplash.com/photo-XXXXX" alt="Featured Mobile" />
```

### Product Images
```typescript
// In mobiles.ts
image: 'https://images.unsplash.com/photo-XXXXX',
```

**Free Image Resources:**
- Unsplash: https://unsplash.com (search "smartphone")
- Pexels: https://pexels.com (search "mobile")
- Pixabay: https://pixabay.com

## 🚀 Deployment Updates

After making changes:

### For Localhost Testing:
```bash
npm run dev
# Website auto-refreshes with changes
```

### For Production Deployment:

**GitHub Pages:**
```bash
npm run build
git add .
git commit -m "Update: [describe changes]"
git push
# GitHub Actions auto-deploys
```

**Netlify:**
```bash
npm run build
# Auto-deploys on push if connected
```

**Manual Netlify Deploy:**
```bash
netlify deploy --prod --dir=dist
```

## ✅ Testing Checklist After Updates

- [ ] Website loads without errors
- [ ] All links work (WhatsApp, forms, navigation)
- [ ] New products appear correctly
- [ ] Images load properly
- [ ] Mobile view looks good (test at 375px width)
- [ ] Contact form submits successfully
- [ ] Prices display correctly in PKR
- [ ] Filters work (search, category, brand, price)

## 🔍 Where to Find Things

```
src/
├── data/
│   └── mobiles.ts           ← 📱 Add/update phones here
├── components/
│   ├── Navigation.tsx       ← 🔝 Header, contact links
│   ├── HeroSection.tsx      ← 🎯 Main hero, headline
│   ├── MobilesSection.tsx   ← 💳 Products, filters
│   ├── WhyChooseUs.tsx      ← ⭐ Trust points
│   ├── AboutUs.tsx          ← 📖 Company story
│   ├── ContactUs.tsx        ← 📞 Contact form, map
│   ├── FloatingWhatsApp.tsx ← 💬 Chat button
│   └── Footer.tsx           ← 🔗 Links, copyright
├── App.tsx                  ← 🎨 Main app (filters logic)
├── App.css                  ← 🎨 Colors, fonts, styling
└── index.css                ← 📄 Base styles

public/
├── gb-logo.svg              ← 🏔️ Logo
├── sitemap.xml              ← 🗺️ SEO sitemap
└── robots.txt               ← 🤖 Search engine rules

index.html                   ← 📝 Meta tags, SEO
```

## 🐛 Troubleshooting

### Website shows blank page
- Try `npm run dev` and check console for errors
- Look for red errors in browser DevTools (F12)
- Check that all syntax is correct in edited files

### WhatsApp links don't work
- Verify phone number format: `923355551234` (no +, no spaces)
- Test on actual phone, not just browser
- Try the link manually: `https://wa.me/923355551234`

### Images don't load
- Check if image URL is correct
- Verify HTTPS (most image hosts require https://)
- Try in private/incognito mode
- Search for different image if URL broken

### Styles look wrong
- Clear browser cache (Ctrl+Shift+Delete)
- In dev: try stopping and restarting `npm run dev`
- Check that CSS variable was updated correctly

### New mobile not appearing
- Verify JSON syntax is correct (no missing commas)
- Check category spelling: exactly 'Flagship', 'Mid-Range', or 'Budget'
- Save file and refresh browser
- Check browser console (F12) for errors

## 📞 Support Resources

**For Questions:**
- React documentation: https://react.dev
- Vite documentation: https://vitejs.dev
- CSS variables: https://developer.mozilla.org/en-US/docs/Web/CSS/--*
- WhatsApp Business: https://www.whatsapp.com/business

## 🔐 Security Notes

- Never hardcode sensitive information in public code
- If adding payment: use secure payment gateways
- Validate all form inputs on backend
- Use HTTPS for all connections
- Keep comments that explain "why" not "what"

## 📈 Performance Tips

- Keep images under 1MB (compress before using)
- Limit to necessary fonts (currently 2)
- Use `@media` queries for mobile optimization
- Test on slow 3G to verify acceptable loading
- Monitor lighthouse score: https://PageSpeed.Insights.dev

## 📚 File Size Reference

Current production build:
- HTML: 1.63 KB
- CSS: 20.01 KB (4.34 KB gzipped)
- JavaScript: 221.26 KB vendor + app (63.98 KB gzipped)
- Total: ~242 KB uncompressed (~68 KB gzipped)

---

**Last Updated**: February 2026
**Version**: 1.0.0 Maintenance Guide
