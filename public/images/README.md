# Images Directory

This folder contains all the images for the comic portfolio website.

## Folder Structure:

- **`/comics/`** - Comic panels, webcomic pages, and comic-related images
- **`/products/`** - Product photos for the shop (book covers, merchandise, etc.)
- **`/news/`** - Images for news articles and blog posts
- **`/writing/`** - Images related to writing portfolio pieces
- **`/gallery/`** - Gallery and archive images
- **`/banners/`** - Hero banners, header images, and promotional graphics

## Usage in Code:

Images in this folder are referenced using absolute paths:

```javascript
// Example in data files
coverImage: "/images/comics/my-comic-cover.jpg";
productImage: "/images/products/book-1.jpg";
bannerImage: "/images/banners/hero-banner.jpg";
```

## Important Notes:

⚠️ **Image files are NOT included in this repository** (protected by `.gitignore`)

- The folder structure is maintained for organizational purposes
- Actual image files are stored locally and on the hosting service
- Images are protected from unauthorized downloading and distribution
- Only `.gitkeep` and documentation files are tracked in version control

## File Naming Conventions:

- Lowercase with hyphens: `my-comic-page-1.jpg`
- Descriptive names: `winter-knight-cover.jpg` instead of `img1.jpg`
- Sequential numbering for pages: `page-01.jpg`, `page-02.jpg`
