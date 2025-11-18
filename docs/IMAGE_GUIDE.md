# Image Integration Guide for Walasmulla Website

## Overview
Your website has been enhanced with image placeholders and image gallery support. This guide explains how to add your actual images to make the site beautiful.

## What Was Added

### CSS Image Styling
- **Image grids** - Responsive grid layouts for multiple images
- **Image cards** - Hovering effect with captions that appear on hover
- **Hero images** - Large full-width images at the top of pages
- **Image placeholders** - Colored placeholders showing where images should go
- **Hover animations** - Smooth scaling and brightness effects

### Updated Pages

1. **index.html** - Home page
   - Hero image placeholder at the top
   - Gallery of 3 image cards (Paddy Fields, Rural Landscape, Sunrise)

2. **attractions.html** - Attractions page
   - Header image placeholder
   - Gallery of 4 attraction images
   - Clock tower image placeholder
   - Gallery of 4 clock tower related images
   - Market scene placeholder

3. **about.html** - About page
   - Header image placeholder
   - Gallery of 4 location/geography images

4. **culture.html** - Culture page
   - Festival events header image
   - Gallery of 4 festival/celebration images
   - Cultural arts/traditions image

## How to Add Your Images

### Step 1: Create Images Directory Structure
```
images/
  ├── hero/
  ├── attractions/
  ├── about/
  ├── culture/
  └── gallery/
```

### Step 2: Add Images to the Project
1. Place your images in the `images/` folder (or subdirectories as organized above)
2. Use common formats: JPG, PNG, or WebP
3. Recommended sizes:
   - Hero images: 1200×600px or wider
   - Card images: 400×300px minimum
   - Gallery images: 500×500px or larger

### Step 3: Replace Placeholders with Real Images

#### Home Page (index.html)
Find the `.image-placeholder` divs and replace them:

```html
<!-- Replace this: -->
<div class="image-placeholder">
  🌾 Main Hero Image Placeholder
</div>

<!-- With this: -->
<img src="images/hero/walasmulla-landscape.jpg" alt="Walasmulla landscape" class="hero-image">
```

For image cards, replace:
```html
<!-- Replace this section: -->
<div class="image-card">
  <div class="image-placeholder">🌾 Paddy Fields</div>
  <div class="image-card-caption">...</div>
</div>

<!-- With this: -->
<div class="image-card">
  <img src="images/gallery/paddy-fields.jpg" alt="Paddy Fields">
  <div class="image-card-caption">
    <h4>Golden Paddy Fields</h4>
    <p>Harvested rice fields in the golden season</p>
  </div>
</div>
```

#### Attractions Page (attractions.html)
Replace similar placeholders with images of:
- Muruthawela Firefox Bridge
- Bibula springs
- Sri Ashokaramaya Temple
- Village tanks
- Katuwana Clock Tower
- Local markets

#### About Page (about.html)
Add images showing:
- Location/map overview
- Transportation infrastructure
- Commerce/markets
- Educational facilities

#### Culture Page (culture.html)
Add images of:
- Festival celebrations (Katina Perahera, Vesak, etc.)
- Traditional arts and crafts
- Community gatherings

## HTML Structure for Images

### Simple Image Tag
```html
<img src="images/photo.jpg" alt="Description" class="hero-image">
```

### Image with Caption
```html
<div class="image-card">
  <img src="images/photo.jpg" alt="Description">
  <div class="image-card-caption">
    <h4>Title</h4>
    <p>Description text</p>
  </div>
</div>
```

### Image Grid
```html
<div class="image-grid">
  <div class="image-card">
    <img src="images/photo1.jpg" alt="Alt text">
    <div class="image-card-caption">...</div>
  </div>
  <!-- More cards... -->
</div>
```

## CSS Classes Reference

| Class | Purpose |
|-------|---------|
| `.hero-image` | Large banner images at page top |
| `.image-grid` | Responsive grid container for images |
| `.image-card` | Individual image card with hover effects |
| `.image-card-caption` | Caption overlay that appears on hover |
| `.gallery-item` | Simple gallery item with hover zoom |
| `.image-with-text` | Image with text side-by-side layout |
| `.image-placeholder` | Temporary colored placeholder |

## Recommended Image Sizes

- **Hero images**: 1200-1600px width, 500-600px height (aspect ratio ~2:1)
- **Gallery cards**: 300-500px square or 400-600px wide
- **Small thumbnails**: 200-300px
- **Mobile optimized**: Keep under 1MB per image

## Image Alt Text Best Practices

Always include descriptive alt text for accessibility:

```html
<!-- Good -->
<img src="paddy-fields.jpg" alt="Golden rice paddy fields during harvest season in Walasmulla">

<!-- Avoid -->
<img src="photo.jpg" alt="image">
```

## Performance Tips

1. **Compress images** before uploading (use TinyPNG, ImageOptim, or similar)
2. **Use WebP format** for modern browsers (with JPG fallback)
3. **Lazy loading** - Add `loading="lazy"` attribute for better performance
4. **Responsive images** - Consider using `srcset` for different screen sizes

Example with lazy loading:
```html
<img src="images/photo.jpg" alt="Description" class="hero-image" loading="lazy">
```

## Browser Support

All CSS image features work in:
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Troubleshooting

**Images not showing?**
- Check file paths are correct relative to HTML file location
- Verify image file exists and isn't corrupted
- Check browser console for error messages
- Ensure alt text is provided

**Images look blurry?**
- Use high-resolution images (2x size for Retina displays)
- Check if image is being stretched beyond natural size

**Hover effects not working?**
- Ensure `image-card` class is used on the container
- Check if CSS file is loaded properly

## Next Steps

1. Create high-quality images of Walasmulla
2. Organize images in the `images/` folder
3. Replace placeholder elements with real image tags
4. Test on different devices to ensure responsiveness
5. Optimize images for web before final deployment

## Questions?

If you need to modify styles for images or add more galleries, all CSS is in `styles.css`. Look for sections starting with `/* Image and Gallery Styles */`.

Happy adding images! 📸
