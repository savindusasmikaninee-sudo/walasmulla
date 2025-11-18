# Walasmulla Website - Professional File Structure

## 📁 Directory Structure

```
walasmulla/
├── index.html                 # Main homepage
├── assets/                    # All static assets
│   ├── css/
│   │   └── styles.css        # Main stylesheet
│   ├── js/
│   │   └── script.js         # Main JavaScript file
│   └── images/               # All image assets
│       ├── gallery/          # Photo gallery images (20 images)
│       ├── map/              # Map images
│       └── *.jpg/png         # Other page images
├── pages/                     # All internal pages
│   ├── about.html            # About page
│   ├── attractions.html      # Attractions page
│   ├── geoportal.html        # Geographic portal page
│   ├── culture.html          # Culture & population page
│   ├── landuse.html          # Land use & water page
│   ├── contact.html          # Contact page
│   └── population.html       # Legacy population page
├── docs/                      # Documentation files
│   ├── README.md
│   ├── COMPLETION_SUMMARY.md
│   ├── ENHANCEMENTS_SUMMARY.md
│   ├── CULTURE_PAGE_ADDITIONS.md
│   ├── IMAGE_EXAMPLES.md
│   ├── IMAGE_GUIDE.md
│   ├── INDEX.md
│   ├── INTEGRATION_CHECKLIST.md
│   └── QUICK_REFERENCE.md
├── .git/                      # Git version control
├── .github/                   # GitHub specific files
└── PROJECT_STRUCTURE.md       # This file

```

## 🔗 Path References

### From Root (index.html)
- CSS: `assets/css/styles.css`
- JS: `assets/js/script.js`
- Images: `assets/images/`
- Pages: `pages/`

### From Pages Folder
- CSS: `../assets/css/styles.css`
- JS: `../assets/js/script.js`
- Images: `../assets/images/`
- Root: `../index.html`
- Other pages: `about.html`, `culture.html`, etc.

## 📄 Page Navigation

All pages follow this navigation structure:
- **Home** → `/index.html`
- **About** → `/pages/about.html`
- **Attractions** → `/pages/attractions.html`
- **Geo Portal** → `/pages/geoportal.html`
- **Culture** → `/pages/culture.html` (includes population data)
- **Land & Water** → `/pages/landuse.html`
- **Contact** → `/pages/contact.html`

## 🖼️ Image Assets

### Gallery Images
Location: `assets/images/gallery/`
- 20 cultural photos from various events and celebrations
- Used in: Culture page photo gallery

### Map Images
Location: `assets/images/map/`
- Geographic map of Walasmulla area
- Used in: Geo Portal page

### Page Images
Location: `assets/images/`
- Hero images for each page
- Featured images for content sections

## 🎨 Styles & Scripts

### CSS
- **File**: `assets/css/styles.css`
- Contains all styling including:
  - Layout and responsive design
  - Navigation and header styles
  - Gallery and lightbox styles
  - Testimonials and cards
  - Geo portal specific styles

### JavaScript
- **File**: `assets/js/script.js`
- Features:
  - Mobile menu toggle
  - Smooth scrolling
  - Intersection observers
  - Gallery lightbox functionality
  - Statistics counter animations
  - Scroll-to-top button

## 🚀 Features

### Gallery Lightbox
- Click any gallery image to open fullscreen preview
- Navigate with arrow keys or buttons
- Close with ESC or close button
- Image counter display

### Responsive Design
- Mobile-first approach
- Breakpoints: 768px, 480px, 360px
- Touch-friendly navigation

### Accessibility
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Focus states

## 📝 Documentation

All project documentation is located in the `docs/` folder:
- Setup guides
- Enhancement summaries
- Image guidelines
- Integration checklists

## 🔧 Development

### Local Testing
To test locally, use a local web server:
```bash
# Using Python (if available)
python -m http.server 8000

# Using Node.js (if http-server is installed)
npx http-server

# Using PHP (if available)
php -S localhost:8000
```

Then open: `http://localhost:8000`

### File Editing
- HTML pages are in root and `pages/` folder
- CSS is in `assets/css/styles.css`
- JavaScript is in `assets/js/script.js`
- Images should be added to `assets/images/`

## 📦 Deployment

For deployment, upload the entire `walasmulla/` folder to your web server. Ensure:
- Maintain the folder structure
- All paths are relative (already configured)
- Server supports `.html` extensions

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

**Last Updated**: November 18, 2025
**Project**: Walasmulla Community Portal
**Structure Version**: 2.0 (Professional)
