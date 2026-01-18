# ⚡ R4D3V Portfolio - Quick Start Guide

## 🚀 Get Up and Running in 5 Minutes

### Step 1: Install Dependencies (1 minute)

```bash
cd /path/to/R4D3V
pnpm install
```

### Step 2: Start Development Server (30 seconds)

```bash
pnpm run dev
```

Then open: `http://localhost:5173`

### Step 3: Customize Your Info (3 minutes)

#### Edit These Files:

1. **About Page** - `src/pages/about.jsx`
   - Update stats (Years, Projects, Clients, Coffee)
   - Edit personal story in the "My Journey" section
   - Modify achievements and philosophy

2. **Services Page** - `src/pages/services.jsx`
   - Change service icons (emojis)
   - Update service titles and descriptions
   - Modify skill categories

3. **Projects Page** - `src/pages/projects.jsx`
   - Add your actual projects
   - Update case studies
   - Change project links
   - Modify tech stack tags

4. **Testimonials Page** - `src/pages/testimonials.jsx`
   - Add client testimonials
   - Update client names and titles
   - Change emoji avatars

### Step 4: Update Brand Colors (1 minute)

Edit `src/index.css` around line 20:

```css
body {
  background: linear-gradient(
    135deg,
    #YOUR_COLOR1 0%,
    #YOUR_COLOR2 25%,
    #YOUR_COLOR3 50%,
    #YOUR_COLOR4 75%,
    #YOUR_COLOR5 100%
  );
}
```

### Step 5: Build for Production (1 minute)

```bash
pnpm run build
```

## 📱 Key Navigation

| Page         | URL             | Key Content       |
| ------------ | --------------- | ----------------- |
| Home         | `/`             | Hero + Tech Stack |
| About        | `/about`        | Story + Stats     |
| Services     | `/services`     | Services + Skills |
| Projects     | `/projects`     | Case Studies      |
| Testimonials | `/testimonials` | Client Feedback   |
| Contact      | `/contact`      | Contact Methods   |

## 🎨 Quick Customization Checklist

```
[ ] Update your name in home hero
[ ] Change personal story in about.jsx
[ ] Add your actual projects
[ ] Update client testimonials
[ ] Change gradient colors in index.css
[ ] Update social media links in nav.jsx
[ ] Add your email in contact form
[ ] Deploy to hosting platform
```

## 🎬 Using Animations

### Add to Any Element:

```jsx
{
  /* Fade in from bottom */
}
<div className="animate-fade-in-up">Your content</div>;

{
  /* Scale up */
}
<div className="animate-scale-in">Your content</div>;

{
  /* Floating effect */
}
<div className="animate-float">Your content</div>;

{
  /* Card with hover lift */
}
<div className="glass-card hover-lift">Your content</div>;

{
  /* Staggered list items */
}
<div className="stagger">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>;
```

## 📁 File Quick Reference

```
src/
├── pages/
│   ├── home.jsx          ← Hero + Tech Stack
│   ├── about.jsx         ← Edit story & stats
│   ├── services.jsx      ← Edit services
│   ├── projects.jsx      ← Edit projects
│   ├── testimonials.jsx  ← Edit testimonials
│   ├── portfolio.jsx     ← Original portfolio
│   └── contact.jsx       ← Contact methods
├── components/
│   ├── nav.jsx           ← Navigation links
│   └── footer.jsx        ← Footer
├── index.css             ← Colors & animations
└── App.jsx               ← Routes
```

## 🎯 Most Commonly Edited Files

### 1. Update Stats (about.jsx)

```jsx
const stats = [
  { label: "Years Experience", value: "3+" }, // ← Change here
  { label: "Projects Completed", value: "25+" },
  { label: "Happy Clients", value: "50+" },
  { label: "Cups of Coffee", value: "500+" },
];
```

### 2. Add Projects (projects.jsx)

```jsx
const projects = [
  {
    id: "p1",
    title: "Your Project Name",
    category: "category-name",
    description: "Short description",
    link: "https://your-project-url.com",
    caseStudy: {
      challenge: "What was the challenge?",
      solution: "How did you solve it?",
      result: "What was the outcome?",
      tech: ["Tech1", "Tech2"],
      duration: "3 months",
    },
  },
];
```

### 3. Add Testimonials (testimonials.jsx)

```jsx
const testimonials = [
  {
    name: "Client Name",
    title: "Client Title",
    image: "👨‍💼", // Change emoji
    content: "Their quote about you",
    rating: 5,
  },
];
```

### 4. Change Colors (index.css)

```css
body {
  background: linear-gradient(
    135deg,
    #ff0000 0%,
    /* Red */ #00ff00 25%,
    /* Green */ #0000ff 50%,
    /* Blue */ #ffff00 75%,
    /* Yellow */ #ff00ff 100% /* Magenta */
  );
}
```

## 🚀 Deploy to Production

### Option 1: Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Option 2: Netlify

```bash
# Build first
pnpm run build

# Deploy dist folder to Netlify
# Or connect GitHub repo to Netlify dashboard
```

### Option 3: GitHub Pages

```bash
# Update vite.config.js
export default {
  base: '/your-repo-name/',
  // ...
}

# Build and deploy
pnpm run build
# Push dist folder to gh-pages branch
```

## 🔧 Troubleshooting

### Dev server won't start?

```bash
# Kill any existing process
pkill -f "vite"

# Clear cache
rm -rf node_modules/.vite

# Try again
pnpm run dev
```

### Styles not showing?

```bash
# Tailwind cache issue
rm -rf .tailwindcss-cache

# Rebuild
pnpm run build
```

### Animation not working?

- Check class name is spelled correctly
- Verify CSS is imported in index.css
- Clear browser cache (Ctrl+Shift+Delete)

## 📞 Quick Links

- **Home Page**: `/`
- **Docs**: `README_MODERN.md`
- **Animations**: `ANIMATION_GUIDE.md`
- **Advanced Setup**: `CUSTOMIZATION_GUIDE.md`
- **Full Architecture**: `ARCHITECTURE.md`

## ⭐ Before You Go Live

- [ ] Update all personal information
- [ ] Add actual projects
- [ ] Include real testimonials
- [ ] Test on mobile devices
- [ ] Set up form backend
- [ ] Add Google Analytics
- [ ] Configure custom domain
- [ ] Set up SSL certificate
- [ ] Optimize images
- [ ] Test all links

## 🎉 You're Ready!

Your modern portfolio is now ready to showcase your work. Make it yours and launch it! 🚀

---

**Need more detailed help?** Check out the other documentation files:

- `README_MODERN.md` - Complete guide
- `CUSTOMIZATION_GUIDE.md` - Advanced customization
- `ANIMATION_GUIDE.md` - Animation reference
