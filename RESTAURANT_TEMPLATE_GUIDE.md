
# Restaurant Website Template Guide

## Overview
This template is based on the successful House of Lasagna & Pizza website and is designed for pizza restaurants using external ordering systems. The template provides a professional marketing website that drives traffic to your existing 3rd party ordering system.

## Template Features
- ✅ Mobile-first responsive design
- ✅ External ordering system integration
- ✅ SEO optimized with local business schema
- ✅ Social media integration
- ✅ Photo gallery with optimized images
- ✅ Professional Italian restaurant styling
- ✅ Google Analytics ready

## Quick Start Checklist

### 1. Gather Required Information
Before starting customization, collect:
- [ ] Business name and tagline
- [ ] Complete address and phone number
- [ ] Operating hours
- [ ] Service areas (neighborhoods you deliver to)
- [ ] External ordering system URL
- [ ] Social media accounts (Instagram, etc.)
- [ ] Logo files (PNG format, transparent background)
- [ ] Hero image (landscape, high resolution)
- [ ] Food photography (minimum 8-12 high-quality photos)

### 2. Update Business Configuration
Edit the file `src/config/restaurantConfig.ts` with your restaurant's information:

```typescript
// Example configuration
export const restaurantConfig = {
  businessName: "Your Pizza Place Name",
  tagline: "Authentic Italian Pizza & More",
  phone: "(XXX) XXX-XXXX",
  address: {
    street: "123 Your Street",
    city: "Your City",
    province: "ON",
    postalCode: "X1X 1X1"
  },
  // ... see full config template below
};
```

### 3. Replace Images
Upload your restaurant's images to the `public/lovable-uploads/` directory:
- `hero-image.png` - Main banner image
- `logo.png` - Restaurant logo
- `favicon.png` - Browser tab icon
- Food photos for gallery (see naming convention below)

### 4. Update External URLs
Replace these URLs throughout the codebase:
- Menu ordering system URL
- Social media links
- Contact form destinations (if applicable)

### 5. Customize Colors & Branding
Update the color scheme in `tailwind.config.ts` to match your brand colors.

## Detailed Customization Steps

### Business Information Update
All business-specific information is centralized in configuration files. Update these key areas:

1. **Restaurant Config** (`src/config/restaurantConfig.ts`)
2. **SEO Meta Data** (`index.html`)
3. **JSON Data Files** (`public/*.json`)

### Image Requirements & Specifications

#### Logo Requirements
- Format: PNG with transparent background
- Size: 200x80px minimum, scalable vector preferred
- File name: `logo.png`
- Usage: Header navigation and footer

#### Hero Image Requirements  
- Format: JPG or PNG
- Size: 1920x1080px minimum (16:9 aspect ratio)
- File name: `hero-image.png`
- Content: Should showcase restaurant ambiance or signature dish
- Quality: High resolution, professionally shot preferred

#### Food Photography Requirements
- Format: JPG
- Size: 800x600px minimum (4:3 aspect ratio)
- Quantity: 8-12 diverse food photos
- Naming convention: `food-[category]-[item].jpg`
  - Example: `food-pizza-margherita.jpg`
  - Example: `food-pasta-lasagna.jpg`
  - Example: `food-appetizer-wings.jpg`

#### Favicon Requirements
- Format: PNG
- Size: 32x32px and 192x192px versions
- File name: `favicon.png`
- Should be simple, recognizable at small sizes

### Color Theme Customization

The template uses Italian-inspired colors that can be customized:

```css
/* Primary brand colors */
--italian-red: #B71C1C;    /* Main accent color */
--italian-green: #2E7D32;  /* Secondary accent */
--italian-gold: #F57F17;   /* Highlight color */
--cream: #FFFEF7;          /* Background color */
```

### URL Configuration

Update these external service URLs:

1. **Menu/Ordering System**: Replace `https://houseoflasagna.ca/?p=menu`
2. **Account Creation**: Replace `https://houseoflasagna.ca/?p=createaccount`  
3. **Sign In**: Replace `https://houseoflasagna.ca/?p=signin`
4. **Social Media**: Replace Instagram URL

### Geographic Customization

Update service areas and local neighborhoods in:
- Homepage service areas section
- SEO schema markup
- Contact page delivery information

## File-by-File Customization Guide

### Critical Files to Update

1. **`index.html`** - SEO meta tags, business schema, analytics
2. **`src/pages/Index.tsx`** - Main homepage content
3. **`src/components/Header.tsx`** - Navigation and contact info
4. **`public/site_info.json`** - Business information
5. **`public/contact.json`** - Contact details
6. **`public/content.json`** - Page content and copy

### Optional Files to Customize

1. **`src/pages/About.tsx`** - Restaurant story and background
2. **`src/pages/Contact.tsx`** - Extended contact information
3. **`src/components/PhotoGallery.tsx`** - Food photography showcase

## Testing Checklist

Before going live, verify:

- [ ] All business information is updated
- [ ] Phone numbers are clickable and correct
- [ ] External ordering links work properly
- [ ] Images display correctly on mobile and desktop
- [ ] SEO meta tags reflect new business
- [ ] Google Analytics tracking code is updated
- [ ] Social media links are functional
- [ ] Contact information is accurate
- [ ] Service areas are correct for your location

## SEO Optimization

The template includes:
- Local business schema markup
- Optimized meta descriptions
- Geographic targeting
- Mobile-first indexing
- Fast loading performance

Update the following for SEO:
1. Page titles and descriptions
2. Business schema in `index.html`
3. Local keywords and service areas
4. Image alt tags

## Deployment Notes

This template works with:
- Static hosting services (Netlify, Vercel, etc.)
- Traditional web hosting
- Content delivery networks (CDNs)

No backend or database required - it's a pure frontend marketing site.

## Support & Maintenance

The template is designed to be:
- Easy to update with new photos
- Simple to modify business hours
- Straightforward to add new service areas
- Quick to update contact information

## Success Metrics

Track these KPIs for your restaurant website:
- External order link clicks
- Phone call conversions
- Social media engagement
- Mobile vs desktop usage
- Local search visibility

---

This template has been successfully tested with House of Lasagna & Pizza and is ready for replication across multiple restaurant locations.
