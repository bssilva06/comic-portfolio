# Images Directory

This folder contains all the images for the comic portfolio website.

## Structure:

- **`/comics/`** - Comic panels, webcomic pages, and comic-related images
- **`/products/`** - Product photos for the shop (book covers, merchandise, etc.)
- **`/news/`** - Images for news articles and blog posts
- **`/writing/`** - Images related to writing portfolio pieces
- **`/gallery/`** - Gallery and archive images
- **`/banners/`** - Hero banners, header images, and promotional graphics

## Usage:

Images in this folder can be referenced in your code using absolute paths:

```javascript
// Example in data files
coverImage: "/images/comics/my-comic-cover.jpg";
productImage: "/images/products/book-1.jpg";
bannerImage: "/images/banners/hero-banner.jpg";
```

## Important Notes:

⚠️ **These images are NOT committed to GitHub** (protected by `.gitignore`)

- This protects your artwork from being publicly downloadable
- You'll need to manually transfer these images between computers
- Images will be uploaded directly to your hosting service (Netlify/Vercel)

## File Naming Best Practices:

- Use lowercase with hyphens: `my-comic-page-1.jpg`
- Be descriptive: `winter-knight-cover.jpg` instead of `img1.jpg`
- Include sequence numbers for pages: `page-01.jpg`, `page-02.jpg`
