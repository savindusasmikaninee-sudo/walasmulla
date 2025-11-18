# Image Integration Examples

This file shows you exactly how to replace the placeholders with real images.

## Example 1: Simple Hero Image

### Current (Placeholder)
```html
<div class="image-placeholder">
  🌾 Main Hero Image Placeholder - Add your landscape photo here
</div>
```

### Replace With
```html
<img src="images/hero/walasmulla-hero.jpg" alt="Beautiful landscape view of Walasmulla's paddy fields" class="hero-image">
```

---

## Example 2: Image Card with Caption (Single)

### Current (Placeholder)
```html
<div class="image-card">
  <div class="image-placeholder" style="background: linear-gradient(135deg, #7eb069, #9bc47a);">
    🌾 Paddy Fields
  </div>
  <div class="image-card-caption">
    <h4>Golden Paddy Fields</h4>
    <p>Harvested rice fields in the golden season</p>
  </div>
</div>
```

### Replace With
```html
<div class="image-card">
  <img src="images/gallery/paddy-fields.jpg" alt="Golden paddy fields ready for harvest">
  <div class="image-card-caption">
    <h4>Golden Paddy Fields</h4>
    <p>Harvested rice fields in the golden season</p>
  </div>
</div>
```

---

## Example 3: Image Grid (Multiple Cards)

### Current (Placeholder)
```html
<div class="image-grid">
  <div class="image-card">
    <div class="image-placeholder" style="background: linear-gradient(135deg, #2d5f3f, #1a4d2e); aspect-ratio: 4/3;">
      🌉 Firefox Bridge
    </div>
    <div class="image-card-caption">
      <h4>Muruthawela Firefox Bridge</h4>
      <p>Scenic waterway crossing</p>
    </div>
  </div>
  <!-- More cards... -->
</div>
```

### Replace With
```html
<div class="image-grid">
  <div class="image-card">
    <img src="images/attractions/firefox-bridge.jpg" alt="Scenic Muruthawela Firefox Bridge over the waterway">
    <div class="image-card-caption">
      <h4>Muruthawela Firefox Bridge</h4>
      <p>Scenic waterway crossing</p>
    </div>
  </div>
  
  <div class="image-card">
    <img src="images/attractions/bibula-springs.jpg" alt="Natural water springs at Bibula">
    <div class="image-card-caption">
      <h4>Bibula Springs</h4>
      <p>Natural water sources</p>
    </div>
  </div>
  
  <div class="image-card">
    <img src="images/attractions/temple.jpg" alt="Sri Ashokaramaya Buddhist Temple">
    <div class="image-card-caption">
      <h4>Sri Ashokaramaya Temple</h4>
      <p>Spiritual center of community</p>
    </div>
  </div>
  
  <div class="image-card">
    <img src="images/attractions/village-tank.jpg" alt="Ancient village irrigation tank">
    <div class="image-card-caption">
      <h4>Ancient Village Tanks</h4>
      <p>Historic irrigation systems</p>
    </div>
  </div>
</div>
```

---

## Example 4: Full Page Example (index.html)

### Before
```html
<section>
  <div class="image-placeholder">
    🌾 Main Hero Image Placeholder - Add your landscape photo here
  </div>

  <h2>Welcome to Walasmulla</h2>
  <p>Walasmulla is a charming small town...</p>

  <div class="image-grid">
    <div class="image-card">
      <div class="image-placeholder" style="background: linear-gradient(135deg, #7eb069, #9bc47a);">
        🌾 Paddy Fields
      </div>
      <div class="image-card-caption">
        <h4>Golden Paddy Fields</h4>
        <p>Harvested rice fields in the golden season</p>
      </div>
    </div>
    <!-- More placeholder cards... -->
  </div>
</section>
```

### After
```html
<section>
  <img src="images/hero/walasmulla-landscape.jpg" alt="Scenic landscape of Walasmulla showing green fields and rural beauty" class="hero-image">

  <h2>Welcome to Walasmulla</h2>
  <p>Walasmulla is a charming small town...</p>

  <div class="image-grid">
    <div class="image-card">
      <img src="images/gallery/golden-paddy-fields.jpg" alt="Beautiful golden paddy fields during harvest season">
      <div class="image-card-caption">
        <h4>Golden Paddy Fields</h4>
        <p>Harvested rice fields in the golden season</p>
      </div>
    </div>
    
    <div class="image-card">
      <img src="images/gallery/rural-landscape.jpg" alt="Peaceful rural landscape of Walasmulla">
      <div class="image-card-caption">
        <h4>Rural Landscape</h4>
        <p>The scenic beauty of surrounding areas</p>
      </div>
    </div>
    
    <div class="image-card">
      <img src="images/gallery/golden-hour.jpg" alt="Stunning sunrise over the agricultural fields">
      <div class="image-card-caption">
        <h4>Golden Hour</h4>
        <p>Beautiful sunrise over the fields</p>
      </div>
    </div>
  </div>
</section>
```

---

## Image File Structure Recommendations

```
images/
├── hero/
│   ├── walasmulla-landscape.jpg
│   ├── attractions-header.jpg
│   ├── about-header.jpg
│   └── culture-header.jpg
├── gallery/
│   ├── golden-paddy-fields.jpg
│   ├── rural-landscape.jpg
│   ├── golden-hour.jpg
│   └── (more general gallery images)
├── attractions/
│   ├── firefox-bridge.jpg
│   ├── bibula-springs.jpg
│   ├── temple.jpg
│   ├── village-tank.jpg
│   ├── clock-tower.jpg
│   └── local-market.jpg
├── about/
│   ├── location-map.jpg
│   ├── transport-road.jpg
│   ├── market-commerce.jpg
│   └── school-education.jpg
└── culture/
    ├── katina-perahera.jpg
    ├── perahera-procession.jpg
    ├── vesak-festival.jpg
    ├── new-year-celebration.jpg
    └── traditional-crafts.jpg
```

---

## Quick Find and Replace Guide

### For Each Page, Find and Replace These:

**index.html Placeholders:**
1. `🌾 Main Hero Image Placeholder` → `images/hero/walasmulla-landscape.jpg`
2. `🌾 Paddy Fields` → `images/gallery/golden-paddy-fields.jpg`
3. `🏞️ Rural Landscape` → `images/gallery/rural-landscape.jpg`
4. `🌅 Sunrise/Sunset` → `images/gallery/golden-hour.jpg`

**attractions.html Placeholders:**
1. `🌉 Attractions Gallery Header` → `images/hero/attractions-header.jpg`
2. `🌉 Firefox Bridge` → `images/attractions/firefox-bridge.jpg`
3. `💧 Water Springs` → `images/attractions/bibula-springs.jpg`
4. `🛕 Temple` → `images/attractions/temple.jpg`
5. `🏛️ Village Tank` → `images/attractions/village-tank.jpg`
6. `🕐 Clock Tower Image` → `images/attractions/clock-tower.jpg`
7. `🏪 Local Market` → `images/attractions/local-market.jpg`

**about.html Placeholders:**
1. `📍 About Walasmulla` → `images/hero/about-header.jpg`
2. Location card image → `images/about/location-overview.jpg`
3. Transport card image → `images/about/transport-infrastructure.jpg`
4. Commerce card image → `images/about/marketplace.jpg`
5. Education card image → `images/about/educational-facilities.jpg`

**culture.html Placeholders:**
1. `🎊 Cultural Events Header` → `images/hero/culture-header.jpg`
2. `🎊 Katina` → `images/culture/katina-perahera.jpg`
3. `🎭 Perahera` → `images/culture/siththangallene-perahera.jpg`
4. `🏮 Vesak` → `images/culture/vesak-festival.jpg`
5. `🎉 New Year` → `images/culture/new-year-celebration.jpg`
6. `🎨 Cultural Arts` → `images/culture/traditional-crafts.jpg`

---

## Image Src Attributes - Complete Examples

### Absolute Path (if images hosted externally)
```html
<img src="https://example.com/images/photo.jpg" alt="Description">
```

### Relative Path (recommended - images in project folder)
```html
<!-- From root directory (where HTML files are) -->
<img src="images/photo.jpg" alt="Description">

<!-- From subdirectory (inside images/) -->
<img src="images/hero/photo.jpg" alt="Description">
<img src="images/attractions/photo.jpg" alt="Description">
```

---

## Best Alt Text Examples

### Good Alt Text (Descriptive & Helpful)
```html
<img src="images/paddy-fields.jpg" alt="Vast golden rice paddy fields during harvest season in Walasmulla with traditional farmer walking">
<img src="images/temple.jpg" alt="Sri Ashokaramaya Buddhist temple with ornate architecture and traditional design">
<img src="images/festival.jpg" alt="Community celebrating Vesak festival with colorful lanterns and decorations">
```

### Poor Alt Text (Avoid These)
```html
<img src="images/photo1.jpg" alt="image">  <!-- ❌ Not descriptive -->
<img src="images/photo2.jpg" alt="">       <!-- ❌ Missing alt text -->
<img src="images/photo3.jpg" alt="pic">   <!-- ❌ Too vague -->
```

---

## Testing Checklist

After replacing placeholders:

- [ ] All images load without broken image icons
- [ ] Images display at proper sizes
- [ ] Captions appear on hover (desktop)
- [ ] Gallery grids respond to screen size
- [ ] Mobile view looks good (phones/tablets)
- [ ] Alt text is present on all images
- [ ] File paths are correct
- [ ] Image files aren't corrupted

---

## CSS Classes for Images

If you want to add more styling or use different layouts:

```css
.hero-image          /* Large top images */
.image-grid          /* Multi-column grid layout */
.image-card          /* Individual card with hover effect */
.image-card-caption  /* Overlay text on image cards */
.gallery-item        /* Simple gallery item */
.image-with-text     /* Image with text side-by-side */
.image-placeholder   /* Temporary placeholder (remove before launch) */
```

---

## Troubleshooting Tips

**Image path issues:**
```
If images are in:        Use path:
images/photo.jpg         images/photo.jpg
images/hero/photo.jpg    images/hero/photo.jpg
images/gallery/photo.jpg images/gallery/photo.jpg
```

**Image won't display:**
1. Check file path is correct
2. Verify image file exists
3. Check filename case sensitivity (photo.jpg ≠ Photo.jpg on some systems)
4. Ensure alt attribute is present
5. Test in different browser
6. Check browser console for errors

**Image looks fuzzy:**
- Use original high-resolution images (don't upscale)
- For Retina displays, use 2x resolution images

---

## Ready to Go!

You now have everything you need to transform your website with beautiful images. Just:

1. Collect or create images
2. Place them in the `images/` folder
3. Replace placeholder code with image tags
4. Test and deploy!

Good luck! 📸✨
