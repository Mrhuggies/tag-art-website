# PORTFOLIO ASSET CHECKLIST

Use this document to track all assets needed for the portfolio. Check off items as you gather them.

---

## HOMEPAGE PROJECT CARDS

Each project needs TWO images:
1. **Static image** (placeholder-[name].jpg) — Shown by default
2. **GIF** (placeholder-[name].gif) — Shown on hover (3-4 second loop recommended)

### VisitLichfield
- [ ] `assets/images/placeholder-lichfield.jpg` — Hero card static (1200x800px recommended)
- [ ] `assets/gifs/placeholder-lichfield.gif` — Hover animation showing app in action

### Brixton Windmill
- [ ] `assets/images/placeholder-windmill.jpg` — Card static (800x1000px for tall card)
- [ ] `assets/gifs/placeholder-windmill.gif` — Hover animation

### Brixton Splat Tour
- [ ] `assets/images/placeholder-splat-tour.jpg` — Card static (1200x600px for wide card)
- [ ] `assets/gifs/placeholder-splat-tour.gif` — Hover animation

### TAG-art.co.uk
- [ ] `assets/images/placeholder-tagart.jpg` — Card static (800x600px for square card)
- [ ] `assets/gifs/placeholder-tagart.gif` — Hover animation

### 3D Shoe Viewer
- [ ] `assets/images/placeholder-shoe.jpg` — Card static (800x800px for accent card)
- [ ] `assets/gifs/placeholder-shoe.gif` — Hover animation

### Clay Bowl E-commerce
- [ ] `assets/images/placeholder-bowl.jpg` — Card static (800x800px)
- [ ] `assets/gifs/placeholder-bowl.gif` — Hover animation

### Spatial Captures
- [ ] `assets/images/placeholder-spatial.jpg` — Card static (600x600px for small card)
- [ ] `assets/gifs/placeholder-spatial.gif` — Hover animation

---

## PROJECT PAGE HERO IMAGES

Large hero images for each project page (1920x1080px or similar wide format)

- [ ] `assets/images/placeholder-lichfield-hero.jpg`
- [ ] `assets/images/placeholder-windmill-hero.jpg`
- [ ] `assets/images/placeholder-splat-tour-hero.jpg`
- [ ] `assets/images/placeholder-tagart-hero.jpg`
- [ ] `assets/images/placeholder-shoe-hero.jpg`
- [ ] `assets/images/placeholder-bowl-hero.jpg`
- [ ] `assets/images/placeholder-spatial-hero.jpg`

---

## VISITLICHFIELD PROJECT PAGE

- [ ] `assets/images/placeholder-lichfield-dashboard-1.jpg` — Tourist Dashboard screenshot
- [ ] `assets/images/placeholder-lichfield-dashboard-2.jpg` — Content Manager Dashboard screenshot
- [ ] `assets/images/placeholder-lichfield-dashboard-3.jpg` — Admin Dashboard screenshot
- [ ] `assets/images/placeholder-lichfield-blog.jpg` — Blog post preview image (for frosted "Coming Soon" card)

---

## BRIXTON WINDMILL PROJECT PAGE

- [ ] `assets/images/placeholder-windmill-aerial.jpg` — Aerial Gaussian splat view
- [ ] `assets/images/placeholder-windmill-360.jpg` — Ground-level 360 view screenshot

---

## BRIXTON SPLAT TOUR PROJECT PAGE

- [ ] `assets/images/placeholder-splat-stop-1.jpg` — Tour stop screenshot 1
- [ ] `assets/images/placeholder-splat-stop-2.jpg` — Tour stop screenshot 2

---

## TAG-ART.CO.UK PROJECT PAGE

- [ ] `assets/images/placeholder-tagart-blog.jpg` — Blog section screenshot
- [ ] `assets/images/placeholder-tagart-3d.jpg` — 3D Gallery section screenshot

---

## CREATIVE EXPERIMENTS PAGE (TAGart Tools)

- [ ] `assets/images/placeholder-3dviewer.jpg` — 3D Viewer tool screenshot
- [ ] `assets/images/placeholder-invoice.jpg` — Invoice Generator screenshot
- [ ] `assets/images/placeholder-pngconverter.jpg` — PNG Converter screenshot
- [ ] `assets/images/placeholder-imageconverter.jpg` — Image Converter screenshot
- [ ] `assets/images/placeholder-gradient.jpg` — Gradient Shift screenshot

---

## SPATIAL CAPTURES PAGE

- [ ] **Tower Bridge Gaussian Splat embed code** — Paste into `projects/spatial-captures.html`
- [ ] Additional SketchFab/Potree embeds as needed

---

## PROFILE PHOTO

- [x] `assets/images/me.jpg` — Already present, used on homepage and about section

---

## SOCIAL LINKS TO UPDATE

In `partials/footer.html`:
- [ ] LinkedIn URL (currently: placeholder)
- [ ] GitHub URL (currently: placeholder)

In `index.html` contact section:
- [ ] Email address (currently: hello@tag-art.co.uk)
- [ ] LinkedIn URL

---

## TO-DO BEYOND IMAGES

1. [ ] **Test locally** — Open `index.html` in browser, check all pages
2. [ ] **Run WebP converter** — `python3 convert_to_webp.py` after adding images
3. [ ] **Update embed codes** — Add your SketchFab/Potree embeds to spatial-captures.html
4. [ ] **Update social links** — Add your real LinkedIn and GitHub URLs
5. [ ] **Test on mobile** — Check responsive design
6. [ ] **Deploy** — Push to GitHub / upload to server

---

## RECOMMENDED IMAGE SPECIFICATIONS

| Type | Dimensions | Format | Notes |
|------|------------|--------|-------|
| Hero images | 1920x1080px | JPG → WebP | Compress to ~200KB |
| Card images | Varies by card | JPG → WebP | See sizes above |
| GIFs | Same as card | GIF | Keep under 2MB, 3-4 sec loop |
| Gallery images | 1200x750px | JPG → WebP | 16:10 aspect ratio |
| Tool previews | 800x500px | JPG → WebP | 16:10 aspect ratio |

---

## WEBP CONVERSION

After gathering all images, run:
```bash
cd /Users/thomashughes/Desktop/creative-technologist-portfolio
python3 convert_to_webp.py assets/images
```

Then update HTML files to use `.webp` instead of `.jpg` for better performance.

---

## GIF CREATION TIPS

For the hover effect GIFs:
1. **Screen record** your project in action (3-4 seconds)
2. **Convert to GIF** using tools like:
   - Gifski (Mac) — Best quality
   - ScreenToGif (Windows)
   - ezgif.com (Online)
3. **Optimize** to keep file size under 2MB
4. **Loop seamlessly** — start and end frames should match

---

## QUICK START ORDER

1. ✅ Homepage is ready — just needs images
2. Start with **homepage card images** — most visible
3. Then **hero images** for project pages
4. Add **gallery images** as you refine pages
5. GIFs last — hover effect works without them
