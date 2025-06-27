
# Restaurant Template Asset Requirements

## Overview
This guide outlines all image and asset requirements for customizing the restaurant template. Following these specifications ensures optimal display across all devices and platforms.

## Required Assets Checklist

### Essential Assets (Required)
- [ ] Restaurant Logo (PNG, transparent background)
- [ ] Hero/Banner Image (JPG/PNG, high resolution)
- [ ] Favicon (PNG, multiple sizes)
- [ ] Food Photography Collection (8-12 images minimum)

### Optional Assets  
- [ ] Restaurant exterior photo
- [ ] Interior/dining room photos
- [ ] Staff or chef photos
- [ ] Social media cover images

## Detailed Asset Specifications

### 1. Restaurant Logo
**Purpose**: Header navigation, footer, social media
**Requirements**:
- Format: PNG with transparent background
- Dimensions: 400x160px minimum (maintain aspect ratio)
- File size: Under 100KB
- File name: `logo.png`
- Upload location: `public/lovable-uploads/`

**Design Guidelines**:
- Should be readable at small sizes (mobile navigation)
- Avoid fine details that disappear when scaled down
- Ensure good contrast against white and dark backgrounds
- Consider horizontal layout for header placement

### 2. Hero/Banner Image
**Purpose**: Main homepage banner background
**Requirements**:
- Format: JPG (preferred) or PNG
- Dimensions: 1920x1080px minimum (16:9 aspect ratio)
- File size: Under 500KB (optimized for web)
- File name: `hero-image.png` or `hero-image.jpg`
- Upload location: `public/lovable-uploads/`

**Content Guidelines**:
- Should represent your restaurant's atmosphere
- Can be: signature dish, dining room, food preparation, or exterior
- Avoid text overlays (text will be added programmatically)
- Ensure good contrast for white text overlay
- Professional photography recommended

### 3. Favicon Collection
**Purpose**: Browser tabs, bookmarks, mobile home screen
**Requirements**:
- Format: PNG
- Sizes needed: 32x32px, 192x192px, 512x512px
- File names: `favicon-32.png`, `favicon-192.png`, `favicon-512.png`
- Upload location: `public/lovable-uploads/`

**Design Guidelines**:
- Simple, recognizable symbol or letter
- Should work well at very small sizes
- Usually derived from logo but simplified
- High contrast and bold shapes work best

### 4. Food Photography Collection
**Purpose**: Photo gallery, menu sections, social proof
**Requirements**:
- Format: JPG (preferred for photos)
- Dimensions: 1200x900px minimum (4:3 aspect ratio)
- File size: 150-300KB each (web optimized)
- Quantity: 8-12 diverse photos minimum
- Upload location: `public/lovable-uploads/`

**Naming Convention**:
Use descriptive filenames that include category and item:
- `pizza-margherita.jpg`
- `pasta-lasagna-classic.jpg`
- `appetizer-garlic-bread.jpg`
- `salad-caesar-fresh.jpg`
- `dessert-tiramisu-slice.jpg`
- `dining-room-interior.jpg`
- `kitchen-pizza-oven.jpg`

**Content Guidelines**:
- Showcase your best dishes
- Include variety: pizzas, pastas, appetizers, desserts
- Professional lighting and composition
- Avoid busy backgrounds
- Show generous portions
- Include some lifestyle shots (dining experience)

### 5. Optional Restaurant Photos

#### Exterior Photo
- Purpose: Contact page, about section
- Dimensions: 1200x800px minimum
- Shows storefront, signage, street view
- File name: `restaurant-exterior.jpg`

#### Interior Photos
- Purpose: About page, ambiance showcase
- Dimensions: 1200x800px minimum  
- Show dining room, atmosphere, decor
- File names: `interior-dining.jpg`, `interior-kitchen.jpg`

## Image Optimization Guidelines

### File Size Optimization
- Hero images: Under 500KB
- Food photos: 150-300KB each
- Logo: Under 100KB
- Favicons: Under 50KB each

### Quality Settings
- JPG: 80-85% quality for photos
- PNG: Use for logos and graphics with transparency
- Avoid over-compression that creates artifacts

### Tools for Optimization
- **Online**: TinyPNG, ImageOptim, Squoosh
- **Desktop**: Photoshop, GIMP, Preview (Mac)
- **Batch processing**: ImageMagick, Automator scripts

## Upload Process

### Step 1: Prepare Assets
1. Rename files according to conventions above
2. Optimize file sizes
3. Verify dimensions meet requirements
4. Check image quality and clarity

### Step 2: Upload to Project
1. Place files in `public/lovable-uploads/` directory
2. Verify file paths in configuration files
3. Update `restaurantConfig.ts` with new file paths
4. Test display on both desktop and mobile

### Step 3: Update Configuration
Update these files with your new asset paths:
- `src/config/restaurantConfig.ts`
- `index.html` (favicon links)
- Photo gallery component (if using custom photos)

## Quality Checklist

Before finalizing assets, verify:
- [ ] All images display correctly on mobile devices
- [ ] File sizes are optimized for fast loading  
- [ ] Logo is readable at small sizes
- [ ] Hero image has good contrast for text overlay
- [ ] Food photos are appetizing and well-lit
- [ ] Favicon displays correctly in browser tabs
- [ ] All file paths are correct in configuration files

## Stock Photo Alternatives

If professional photography isn't available:
- **Unsplash**: Free high-quality food photography
- **Pexels**: Free stock photos including restaurant images
- **Adobe Stock**: Premium food photography options

Search terms: "italian pizza", "pasta dishes", "restaurant interior", "food photography"

## Common Issues & Solutions

### Large File Sizes
- Use online compression tools
- Adjust quality settings in image editor
- Consider WebP format for modern browsers

### Poor Mobile Display
- Test responsive behavior
- Ensure minimum dimensions are met
- Check aspect ratios match requirements

### Logo Display Issues
- Verify transparent background
- Test on light and dark backgrounds
- Ensure adequate padding/margins

---

Following these asset requirements ensures your restaurant website will look professional and load quickly across all devices.
