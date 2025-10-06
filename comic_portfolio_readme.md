# 🎨 Comic Portfolio Website

A custom-built portfolio and e-commerce website for a professional comic book artist, featuring a clean design, webcomic galleries, and integrated shop functionality.

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Stripe](https://img.shields.io/badge/Stripe-626CD9?style=for-the-badge&logo=Stripe&logoColor=white)

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Development Timeline](#development-timeline)
- [Roadmap](#roadmap)
- [License](#license)

---

## 🎯 About

This project is a fully custom portfolio website built for a comic book artist to showcase their work and sell their comics online. Unlike template-based solutions like Squarespace, this site offers:

- **Complete design freedom** - tailored to the artist's unique style
- **Better performance** - lightweight and optimized
- **Cost savings** - one-time build cost vs. recurring monthly fees
- **Full ownership** - complete control over code and content

Built as a learning project by a Computer Science student, this website demonstrates modern web development practices while delivering professional results.

---

## ✨ Features

### Current Features
- 📱 **Responsive Design** - works seamlessly on desktop, tablet, and mobile
- 🖼️ **Full-Width Banner** - striking hero image with artist branding
- 🧭 **Navigation System** - clean, intuitive site navigation with React Router
- 🔗 **Social Integration** - links to artist's social media profiles

### Coming Soon
- 🎨 **Webcomic Galleries** - organized display of comic series and artwork
- 📰 **News Section** - blog-style updates and announcements
- ✍️ **Writing Portfolio** - showcase of written work
- 🛒 **E-Commerce Shop** - Stripe-integrated store for comic sales
- 📧 **Contact Form** - direct communication with the artist
- 📚 **Archive System** - organized catalog of past work
- 👥 **Fae Ring Collective** - collaborative artist showcase

---

## 🛠️ Tech Stack

**Frontend:**
- React 18 - Component-based UI library
- Vite - Next-generation frontend tooling
- React Router DOM - Client-side routing

**Styling:**
- CSS3 - Custom styling
- Responsive design principles

**Payment Processing (Planned):**
- Stripe - Secure payment handling
- Stripe React Components

**Deployment:**
- Netlify/Vercel - Free hosting with CI/CD

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/comic-portfolio.git
   cd comic-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   Navigate to http://localhost:5173
   ```

### Build for Production

```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
comic-portfolio/
├── public/
│   └── images/
│       ├── comics/          # Comic artwork
│       ├── products/        # Product images for shop
│       └── general/         # Banner, logos, misc images
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ComicCard.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ImageGallery.jsx
│   │   ├── NewsCard.jsx
│   │   └── Cart.jsx
│   ├── pages/              # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Webcomics.jsx
│   │   ├── News.jsx
│   │   ├── Writing.jsx
│   │   ├── Shop.jsx
│   │   ├── Contact.jsx
│   │   ├── FaeRingCollective.jsx
│   │   └── Archive.jsx
│   ├── data/               # Static data files
│   │   ├── comics.js
│   │   ├── products.js
│   │   ├── news.js
│   │   └── writing.js
│   ├── context/            # React context providers
│   │   └── CartContext.jsx
│   ├── App.jsx             # Main app component
│   ├── App.css             # Global styles
│   └── main.jsx            # Entry point
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

---

## 📅 Development Timeline

### Phase 1: Portfolio Foundation (6-8 weeks)
- ✅ Project setup and structure
- ✅ Navigation and routing
- ✅ Banner and branding
- ⏳ Page layouts and components
- ⏳ Content integration
- ⏳ Responsive design
- ⏳ Initial deployment

### Phase 2: E-Commerce Integration (2-4 weeks)
- ⏳ Stripe setup
- ⏳ Shopping cart functionality
- ⏳ Product catalog
- ⏳ Checkout process
- ⏳ Order management

---

## 🗺️ Roadmap

- [ ] Complete all page layouts and content
- [ ] Implement webcomic gallery with lightbox
- [ ] Add news/blog functionality
- [ ] Build contact form with email integration
- [ ] Integrate Stripe for payments
- [ ] Add shopping cart system
- [ ] Implement product management
- [ ] SEO optimization
- [ ] Performance optimization
- [ ] Add loading states and error handling
- [ ] Create admin panel for content updates (future)

---

## 💡 Why This Approach?

**Cost Comparison:**
- Squarespace: $192-588/year (ongoing)
- This custom site: One-time build + ~$15/year for domain

**Benefits:**
- Full creative control
- Better performance and SEO
- No platform lock-in
- Learning opportunity
- Portfolio piece for developer

---

## 📝 License

This project is built for a private client. All artwork and content belongs to the artist.

Code structure available for educational purposes.

---

## 🤝 Contributing

This is a client project and not open for contributions. However, feel free to use the structure as inspiration for your own projects!

---

## 📬 Contact

**Developer:** Benjamin Silva
- GitHub: [@bssilva06](https://github.com/bssilva06)
- Email: bsabinosilva22@gmail.com

**Artist/Client:** Luis Castillo Silva
- Portfolio: [\[Artist Website\]](https://theeluisifer.itch.io/)
- Social: [Artist Social Links]

---

**Built with ❤️ and lots of ☕ by a CS student learning web development**