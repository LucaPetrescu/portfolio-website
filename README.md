# 🎬 Cinematic Travel Photographer Portfolio

A premium cinematic travel photography portfolio built with React 18, Vite, TypeScript, and Tailwind CSS.

---

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
src/
  assets/
    images/
      places/
        morocco/       ← Drop Morocco photos here
        turkey/        ← Drop Turkey photos here
        prague/        ← etc.
        belgium/
        poland/
        paris/
        greece/
      portraits/       ← Drop portrait photos here
      street/          ← Drop street photos here
      gear/            ← Drop gear photos here
    videos/
  components/          ← Reusable UI components
  layout/              ← Page layout wrappers
  pages/               ← Route-level page components
  data/                ← Portfolio & gear configuration (EDIT THESE)
  hooks/               ← Custom React hooks
  utils/
  styles/              ← Global CSS
  App.tsx              ← Routes
  main.tsx             ← Entry point
```

---

## 🖼️ How to Add New Images

1. **Drop your image** into the appropriate folder:
   - `src/assets/images/places/morocco/my-photo.jpg`
   - `src/assets/images/portraits/my-portrait.jpg`
   - etc.

2. **Update the data file** in `src/data/portfolio.ts`:

```ts
{
  id: 'morocco-5',
  title: 'Sunset Over the Souks',
  location: 'Morocco',
  category: 'places',
  subcategory: 'morocco',
  image: '/assets/images/places/morocco/my-photo.jpg',  // ← your file
  alt: 'Description of the image',
  year: 2024,
  aspectRatio: 'portrait',  // 'portrait' | 'landscape' | 'square'
}
```

That's it. No component edits needed.

---

## 🌍 How to Add New Locations

1. Create a new folder: `src/assets/images/places/iceland/`
2. Drop your images into it
3. In `src/data/portfolio.ts`, add items with `subcategory: 'iceland'`
4. In `src/pages/portfolio/PlacesPage.tsx`, add `'Iceland'` to the `categories` array

---

## 🔄 How to Update Portfolio Data

All portfolio configuration lives in two files:

- **`src/data/portfolio.ts`** — Places, Portraits, Street photos, Featured Destinations, Hero image
- **`src/data/gear.ts`** — Camera gear items

Simply edit these files. No component changes required.

### Changing the Hero Image

In `src/data/portfolio.ts`, update:

```ts
export const heroImage = '/assets/images/places/paris/hero.jpg';
```

### Changing Featured Destinations on Home

In `src/data/portfolio.ts`, update the `featuredDestinations` array.

---

## 📷 How to Replace Gear Images

1. Drop your gear image: `src/assets/images/gear/nikon-d750.jpg`
2. In `src/data/gear.ts`, update the `image` field:

```ts
image: '/assets/images/gear/nikon-d750.jpg',
```

---

## 🌙 How Dark Mode Works

- **Default**: Dark mode is enabled by default.
- **Toggle**: Click the sun/moon icon in the navbar.
- **Persistence**: Your preference is saved in `localStorage` and persists across sessions.
- **Theme variables**: Colors are defined as CSS custom properties in `src/styles/globals.css`.

To customize colors, edit the `:root` (dark) and `.light` variables in `globals.css`.

---

## 🎨 Customizing the Design

### Colors
Edit CSS variables in `src/styles/globals.css`:
```css
:root {
  --gold: #e09a12;       /* Accent color */
  --bg-primary: #0a0a0a; /* Main background */
  ...
}
```

### Fonts
Fonts are loaded from Google Fonts in `index.html`. To change them:
1. Update the Google Fonts link in `index.html`
2. Update `tailwind.config.js` `fontFamily` section

---

## 🧩 Reusable Components

| Component | Description |
|-----------|-------------|
| `Navbar` | Transparent → solid on scroll, dark mode toggle |
| `MobileMenu` | Animated slide-in drawer |
| `DarkModeToggle` | Sun/Moon icon toggle |
| `Footer` | Links, social icons |
| `HeroSection` | Fullscreen cinematic hero with parallax bg |
| `CinematicImageCard` | Masonry image card with hover overlay |
| `MasonryGrid` | CSS columns masonry layout |
| `GearCard` | Camera gear card with specs and hover |
| `PageHeader` | Eyebrow + title + subtitle block |
| `SectionContainer` | Scroll-reveal section wrapper |
| `ContactForm` | Validated contact form with mock submit |
| `ScrollToTop` | Auto-scroll to top on route change |

---

## 📄 Pages & Routes

| Route | Page |
|-------|------|
| `/` | Home |
| `/about` | About / Biography |
| `/portfolio/places` | Places gallery |
| `/portfolio/portraits` | Portraits gallery |
| `/portfolio/street` | Street photography |
| `/gear` | Camera gear |
| `/contact` | Contact form |

---

## ⚡ Performance Notes

- Images are lazy-loaded via `loading="lazy"`
- Fonts are preconnected via `<link rel="preconnect">`
- Animations use CSS transforms (GPU-accelerated)
- Scroll reveal uses `IntersectionObserver` (no scroll event listeners)
