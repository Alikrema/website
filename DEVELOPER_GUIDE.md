# Developer Guide - Ali Krema Portfolio

## Table of Contents
1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Getting Started](#getting-started)
4. [Project Structure](#project-structure)
5. [Development Workflow](#development-workflow)
6. [Architecture](#architecture)
7. [Content Management](#content-management)
8. [Styling Guide](#styling-guide)
9. [Image Optimization](#image-optimization)
10. [Deployment](#deployment)
11. [Troubleshooting](#troubleshooting)

---

## Project Overview

This is a personal portfolio website built with Eleventy (11ty), a simple yet powerful static site generator. The site showcases:
- Professional profile and tech stack
- Personal biography ("Lore" page)
- Blog with technical articles
- Contact information and resume

**Key Features:**
- Static site generation for optimal performance
- Responsive image optimization
- Syntax highlighting for code snippets
- Interactive JavaScript effects
- GitHub Pages deployment via CI/CD

---

## Technology Stack

### Core Framework
- **Eleventy (11ty)** v3.1.0 - Static site generator
- **Node.js** - Runtime environment
- **Nunjucks** - Templating engine

### Plugins
- `@11ty/eleventy-img` - Image optimization and responsive image generation
- `@11ty/eleventy-plugin-syntaxhighlight` - Code syntax highlighting (Prism.js)
- `eleventy-plugin-reading-time` - Reading time calculation for blog posts

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - No preprocessor, pure CSS (1,392 lines)
- **Vanilla JavaScript** - No framework, 161 lines of interactive features
- **Luxon** - Date/time formatting library

### Deployment
- **GitHub Actions** - CI/CD pipeline
- **GitHub Pages** - Static hosting

---

## Getting Started

### Prerequisites
- Node.js 20.x or higher
- npm (comes with Node.js)
- Git

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd portfolio

# Install dependencies
npm install

# Run development server with live reload
npm run build:dev

# The site will be available at http://localhost:8080
```

### Available Commands

```bash
# Development server with hot reload
npm run build:dev

# Production build
npm run build

# Optimize hero images separately
npm run optimize-hero-images
```

---

## Project Structure

```
portfolio/
├── pages/                          # Content source directory (Eleventy input)
│   ├── index.html                 # Home page
│   ├── about.md                   # About/Lore page
│   ├── blog.md                    # Blog listing page
│   ├── contact.md                 # Contact page
│   ├── posts/                     # Blog post collection
│   │   └── *.md                   # Individual blog posts
│   └── _includes/                 # Reusable templates
│       ├── base.njk               # Master layout
│       ├── blog-post.njk          # Blog post layout
│       ├── blog-post-standalone.njk
│       └── timeline-item.njk      # Timeline component macro
│
├── css/                           # Stylesheets
│   ├── style.css                 # Main stylesheet
│   └── prism.css                 # Syntax highlighting styles
│
├── js/                            # Client-side JavaScript
│   └── main.js                   # Interactive features
│
├── assets/                        # Static assets
│   ├── img/                       # Images
│   │   ├── tech/                  # Technology stack icons
│   │   ├── lore/                  # About page images
│   │   └── [various images]      # Hero, nav icons, favicon
│   └── documents/                # Documents
│       └── resume.pdf
│
├── _site/                        # Build output (generated, git-ignored)
│
├── .github/workflows/            # CI/CD configuration
│   └── deploy.yml
│
├── .eleventy.js                  # Eleventy configuration
├── .eleventy.img.config.js       # Image optimization config
├── package.json                  # Dependencies and scripts
└── .gitignore                    # Git ignore rules
```

### Important Directories

| Directory | Purpose |
|-----------|---------|
| `pages/` | Source content (Markdown and HTML files) |
| `pages/_includes/` | Nunjucks templates and reusable components |
| `_site/` | Generated static site (do not edit manually) |
| `assets/` | Static assets copied to output during build |
| `css/` | Stylesheets (copied to output) |
| `js/` | Client-side JavaScript (copied to output) |

---

## Development Workflow

### 1. Starting Development

```bash
# Always run the development server with:
npm run build:dev
```

This command:
1. Optimizes hero images
2. Starts Eleventy with live reload
3. Watches for file changes
4. Auto-rebuilds on save

### 2. Making Changes

**Content Changes** (`pages/*.md`, `pages/*.html`):
- Edit Markdown or HTML files in `pages/`
- Save the file
- Browser auto-refreshes with changes

**Template Changes** (`pages/_includes/*.njk`):
- Edit Nunjucks templates
- Save the file
- All pages using that template rebuild automatically

**Style Changes** (`css/style.css`):
- Edit CSS directly
- Changes reflect immediately

**JavaScript Changes** (`js/main.js`):
- Edit vanilla JavaScript
- Browser auto-refreshes

### 3. Adding New Content

#### Adding a New Page

1. Create file in `pages/` (e.g., `pages/projects.md`)
2. Add front matter:

```yaml
---
title: "Projects"
layout: "base.njk"
permalink: "/projects/index.html"
---

Your content here...
```

3. Save and view at `http://localhost:8080/projects/`

#### Adding a New Blog Post

1. Create file in `pages/posts/` (e.g., `pages/posts/my-new-post.md`)
2. Add front matter:

```yaml
---
title: "My New Post"
layout: "blog-post-standalone.njk"
date: 2025-10-23
tags: ["post", "technology", "tutorial"]
permalink: "/blog/my-new-post/index.html"
---

Your blog post content here...
```

3. Save and view at `http://localhost:8080/blog/my-new-post/`
4. Post automatically appears in blog listing at `/blog/`

### 4. Testing Before Deployment

```bash
# Build for production
npm run build

# Verify output in _site/ directory
# Check for broken links, images, etc.
```

---

## Architecture

### Eleventy Configuration (`.eleventy.js`)

**Input/Output Directories:**
- Input: `pages/`
- Output: `_site/`

**Key Features:**

```javascript
{
  templateFormats: ["md", "njk", "html"],
  markdownTemplateEngine: "njk",
  htmlTemplateEngine: "njk"
}
```

**Custom Filters:**

| Filter | Usage | Purpose |
|--------|-------|---------|
| `readableDate` | `{{ date \| readableDate }}` | Format as "Oct 23, 2025" |
| `htmlDateString` | `{{ date \| htmlDateString }}` | ISO date format for HTML |
| `readingTime` | `{{ content \| readingTime }}` | Calculate reading time (200 words/min) |

**Plugins Registered:**
1. Reading time plugin
2. Syntax highlighting plugin
3. Image optimization shortcode

**Passthrough Copy:**
- `css/` → `_site/css/`
- `js/` → `_site/js/`
- `assets/` → `_site/assets/`

### Template Hierarchy

```
base.njk (Master Layout)
├── Navigation
├── {{ content }} (injected here)
└── Footer

blog-post-standalone.njk (extends base.njk)
├── Post metadata (title, date, reading time)
├── {{ content }} (markdown content)
└── References section (if present)
```

### Nunjucks Macros

**Timeline Item Macro** (`timeline-item.njk:1`):

```njk
{% macro timelineItem(date, title, description, imageSrc, tagText, tagIconSrc) %}
  <!-- Reusable timeline component -->
{% endmacro %}
```

Usage:
```njk
{% from "timeline-item.njk" import timelineItem %}
{{ timelineItem("2020-2025", "Job Title", "Description", "/path/img.jpg", "Work", "/icon.svg") }}
```

### JavaScript Architecture (`js/main.js`)

**Features:**
1. **Hero Image Hover** - Swaps clean.jpeg ↔ messy.jpeg on hover
2. **Typing Effect** - Animated text rotation on home page
3. **Spotlight Effect** - Cursor-following gradient on hero image
4. **Navigation Icons** - Hover state image swaps with preloading

**Code Structure:**
- Event listeners attached on `DOMContentLoaded`
- Page-specific logic (home page only for typing/spotlight)
- Image preloading to prevent flicker
- Vanilla JavaScript, no dependencies

---

## Content Management

### Front Matter Reference

**Standard Page:**
```yaml
---
title: "Page Title"              # Required
layout: "base.njk"               # Required
permalink: "/path/index.html"    # Optional (auto-generated if omitted)
---
```

**Blog Post:**
```yaml
---
title: "Post Title"              # Required
layout: "blog-post-standalone.njk"  # Required
date: 2025-10-23                 # Required (YYYY-MM-DD)
tags: ["post", "tag1", "tag2"]   # Required (must include "post")
permalink: "/blog/post-slug/index.html"  # Optional
readingTime: "5 min read"        # Optional (auto-calculated if omitted)
---
```

### Collections

**Post Collection:**
- All files in `pages/posts/` with `"post"` tag
- Accessed via `collections.post` in templates
- Automatically sorted by date (newest first)

**Usage in Templates:**
```njk
{% for post in collections.post %}
  <h2>{{ post.data.title }}</h2>
  <time>{{ post.date | readableDate }}</time>
{% endfor %}
```

### Writing Blog Posts

**Markdown Syntax:**
- Standard Markdown supported
- Code blocks with syntax highlighting
- Images via shortcode for optimization

**Code Block Example:**
````markdown
```javascript
function hello() {
  console.log("Hello, world!");
}
```
````

**Image Example:**
```njk
{% image "assets/img/my-image.jpg", "Alt text", "(min-width: 30em) 50vw, 100vw" %}
```

---

## Styling Guide

### CSS Architecture (`css/style.css:1`)

**Organization:**
1. CSS Reset & Global Styles
2. Typography
3. Layout (Flexbox/Grid)
4. Components
   - Hero section
   - Timeline items
   - Blog posts
   - Contact section
   - Navigation
5. Responsive Media Queries

### Color Scheme

```css
--background: #FAF9F6;  /* Off-white cream */
--text: #4A3B31;        /* Dark brown */
--accent: /* Define as needed */
```

### Typography

```css
font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
line-height: 1.6;
font-size: 16px; /* Base */
```

### Responsive Breakpoints

```css
/* Mobile */
@media (max-width: 600px) {
  /* Smaller spacing, 32px tech icons */
}

/* Desktop (default) */
/* 48px tech icons, full layout */
```

### Adding Custom Styles

1. Open `css/style.css`
2. Add new rules in appropriate section
3. Follow existing naming conventions
4. Test responsiveness at mobile widths
5. Save and verify in browser

---

## Image Optimization

### Automatic Optimization

**Using the Image Shortcode:**

```njk
{% image "path/to/image.jpg", "Alt text description", "(min-width: 30em) 50vw, 100vw" %}
```

This generates:
- Multiple responsive widths: [300, 600, 900, 1200, auto]
- Multiple formats: WebP + original (JPEG/PNG)
- Output: `_site/assets/img/optimized/`
- Lazy loading attributes

### Manual Pre-optimization (`.eleventy.img.config.js`)

**Hero Images:**
- Width strategy: [800, 1200, auto]
- Formats: WebP, JPEG/PNG (preserves transparency)

**Navigation Icons:**
- Width strategy: [50, 100, auto]
- Formats: WebP, PNG (for transparency)

**Running Manual Optimization:**
```bash
npm run optimize-hero-images
```

### Image Organization

```
assets/img/
├── tech/           # Technology logos (display at 48px)
├── lore/           # About page images
├── clean.jpeg      # Hero image (default)
├── messy.jpeg      # Hero image (hover state)
├── home.png        # Nav icon (default)
├── home-open.png   # Nav icon (hover)
├── [etc...]        # Other nav icons with pairs
└── [favicons]      # Various sizes/formats
```

### Best Practices

1. **Source Images:**
   - Use high-quality originals
   - Place in `assets/img/`
   - Use descriptive filenames

2. **File Formats:**
   - JPEG for photos
   - PNG for logos/icons with transparency
   - SVG for simple vector graphics (not optimized by plugin)

3. **Responsive Images:**
   - Always use the `{% image %}` shortcode for automatic optimization
   - Provide meaningful alt text for accessibility
   - Define appropriate sizes attribute for responsive behavior

4. **Performance:**
   - Optimized images automatically lazy load
   - WebP format generated for modern browsers
   - Fallback to JPEG/PNG for older browsers

---

## Deployment

### Automatic Deployment (GitHub Actions)

**Trigger:**
- Push to `master` branch
- Manual workflow dispatch

**Process:**
1. Checkout repository
2. Setup Node.js 20
3. Install dependencies (`npm ci`)
4. Run build (`npm run build`)
5. Create CNAME file (www.alikrema.com)
6. Upload artifact
7. Deploy to GitHub Pages

**Configuration:** `.github/workflows/deploy.yml`

### Manual Deployment

```bash
# 1. Build for production
npm run build

# 2. Verify _site/ directory contents
ls -la _site/

# 3. Push to master (triggers CI/CD)
git add .
git commit -m "Your commit message"
git push origin master

# 4. Check GitHub Actions for deployment status
# https://github.com/your-username/portfolio/actions
```

### Custom Domain Setup

The site is configured for `www.alikrema.com`:
- CNAME file automatically created during deployment
- Configure DNS with your domain provider to point to GitHub Pages
- GitHub Pages handles SSL/TLS certificates

### Deployment Checklist

Before deploying:
- [ ] Test locally with `npm run build:dev`
- [ ] Verify all links work
- [ ] Check images load correctly
- [ ] Test on mobile viewport
- [ ] Run production build (`npm run build`)
- [ ] Verify `_site/` output
- [ ] Commit and push to master

---

## Troubleshooting

### Common Issues

**1. Build Fails with Image Errors**

*Symptom:* Eleventy build fails with image optimization errors

*Solution:*
```bash
# Clear _site directory
rm -rf _site

# Re-run optimization
npm run optimize-hero-images

# Try build again
npm run build
```

**2. Live Reload Not Working**

*Symptom:* Changes don't appear in browser automatically

*Solution:*
- Hard refresh browser (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
- Restart development server
- Check terminal for errors
- Ensure file is in watched directory (`pages/`, `css/`, `js/`)

**3. Blog Post Not Appearing in Listing**

*Symptom:* New blog post doesn't show in `/blog/`

*Solution:*
- Verify front matter includes `"post"` tag:
  ```yaml
  tags: ["post", "other-tags"]
  ```
- Check date format is correct: `YYYY-MM-DD`
- Ensure file is in `pages/posts/` directory
- Restart development server

**4. Styles Not Applying**

*Symptom:* CSS changes not visible

*Solution:*
- Clear browser cache
- Hard refresh (Cmd+Shift+R / Ctrl+Shift+R)
- Check CSS file is in `css/` directory
- Verify `base.njk` links to stylesheet correctly
- Check browser console for 404 errors

**5. Images Not Loading**

*Symptom:* Images show broken icon

*Solution:*
- Verify image path is correct (relative to `assets/img/`)
- Check image file exists in `assets/img/`
- Run `npm run optimize-hero-images` for hero images
- Check `_site/assets/img/` contains the image after build
- Verify passthrough copy in `.eleventy.js`

**6. JavaScript Features Not Working**

*Symptom:* Typing effect, hover effects, or spotlight not working

*Solution:*
- Open browser console (F12) and check for errors
- Verify `js/main.js` is loaded (Network tab)
- Check `base.njk` includes script tag:
  ```html
  <script src="/js/main.js"></script>
  ```
- Ensure IDs/classes in HTML match those in JavaScript

### Debugging Tips

**Enable Verbose Logging:**
```bash
DEBUG=Eleventy* npx @11ty/eleventy
```

**Check Eleventy Version:**
```bash
npx @11ty/eleventy --version
```

**Validate Nunjucks Syntax:**
- Nunjucks errors show in terminal during build
- Look for line numbers in error messages
- Check for unclosed tags, missing quotes, typos

**Test Production Build:**
```bash
# Build for production
npm run build

# Serve _site directory locally to test
npx http-server _site
```

### Getting Help

- **Eleventy Documentation:** https://www.11ty.dev/docs/
- **Nunjucks Documentation:** https://mozilla.github.io/nunjucks/
- **GitHub Issues:** Check repository issues for similar problems

---

## Additional Resources

### Useful Eleventy Concepts

**Layouts:**
- Templates that wrap content
- Use `layout: "template-name.njk"` in front matter
- Can be chained (layout extends another layout)

**Permalinks:**
- Control output URL structure
- Default: mirrors input file structure
- Custom: `permalink: "/custom/path/index.html"`

**Data Cascade:**
- Front matter > Directory data > Template data > Global data
- Use `{{ variable }}` to access data in templates

**Filters:**
- Transform data in templates
- Syntax: `{{ value | filterName }}`
- Custom filters defined in `.eleventy.js`

### Performance Optimization Tips

1. **Images:**
   - Always use optimized images
   - Provide appropriate sizes attribute
   - Lazy load off-screen images (automatic)

2. **CSS:**
   - Minimize unused styles
   - Consider critical CSS for above-the-fold content
   - Use efficient selectors

3. **JavaScript:**
   - Keep bundle small (currently 161 lines)
   - Load scripts at end of body (done)
   - Avoid blocking render

4. **Build:**
   - Use production build for deployment
   - Eleventy outputs static HTML (fast!)
   - No runtime dependencies

### Accessibility

- Use semantic HTML elements
- Provide alt text for all images
- Ensure sufficient color contrast
- Test keyboard navigation
- Use ARIA labels where appropriate

### SEO Considerations

- Add meta descriptions to pages
- Use semantic heading hierarchy (h1 → h2 → h3)
- Create sitemap.xml (Eleventy plugin available)
- Optimize page titles
- Use descriptive permalinks

---

## Summary

This portfolio is built with:
- **Simple architecture** - Static site generation, no complex build tools
- **Performance-first** - Optimized images, minimal JavaScript, static output
- **Developer-friendly** - Live reload, clear structure, easy to extend
- **Modern workflow** - CI/CD deployment, version control, responsive design

**Key Commands to Remember:**
```bash
npm run build:dev      # Development server
npm run build          # Production build
git push origin master # Deploy (automatic via GitHub Actions)
```

**File Structure Summary:**
- Content: `pages/`
- Templates: `pages/_includes/`
- Styles: `css/`
- Scripts: `js/`
- Assets: `assets/`
- Output: `_site/` (generated)
- Config: `.eleventy.js`

For questions or issues, refer to the [Troubleshooting](#troubleshooting) section or consult the Eleventy documentation.

Happy coding! 🚀
