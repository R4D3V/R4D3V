# R4D3V Portfolio - Architecture & Component Map

## 🏗️ Application Architecture

```
┌─────────────────────────────────────────────────┐
│         App.jsx (Route Manager)                 │
├─────────────────────────────────────────────────┤
│                                                 │
├─► Nav Component (Sticky Navigation)            │
│   ├─► Logo/Branding                            │
│   ├─► Navigation Links (7 routes)              │
│   ├─► Mobile Menu (Hamburger)                  │
│   └─► Social Icons (GitHub, Telegram, Insta)   │
│                                                 │
├─► Router / Pages                               │
│   ├─► Home (/)                                 │
│   ├─► About (/about)                           │
│   ├─► Services (/services)                     │
│   ├─► Projects (/projects)                     │
│   ├─► Testimonials (/testimonials)             │
│   ├─► Portfolio (/portfolio)                   │
│   └─► Contact (/contact)                       │
│                                                 │
├─► Footer Component                             │
│   ├─► Copyright Info                           │
│   ├─► Social Links                             │
│   └─► Scroll-to-top Button                     │
│                                                 │
└─────────────────────────────────────────────────┘
```

## 📄 Page Component Hierarchy

### Home Page (/)

```
Home/
├── Hero Section
│   ├── Animated Gradient Text
│   ├── Subheading
│   └── CTA Buttons (View Work, Get In Touch)
├── Dev Card Section
│   └── Daily Dev Card
└── Tech Stack
    ├── HTML Card
    ├── CSS Card
    ├── JavaScript Card
    ├── React Card
    ├── Tailwind CSS Card
    └── MERN Stack Card
```

### About Page (/about)

```
About/
├── Page Header
│   ├── Title
│   └── Subtitle
├── Journey Section
│   ├── Personal Story (left)
│   └── Stats Grid (right)
│       ├── Years Experience
│       ├── Projects Completed
│       ├── Happy Clients
│       └── Coffee Cups
├── Achievements Section
│   ├── 6 Achievement Cards (grid)
│   └── Each with icon, title, description
├── Philosophy Section
│   ├── User Centric
│   ├── Performance
│   └── Quality Code
└── CTA Section
    └── Get In Touch Button
```

### Services Page (/services)

```
Services/
├── Page Header
├── Services Grid
│   └── 6 Service Cards
│       ├── Icon
│       ├── Title
│       ├── Description
│       └── Feature List (4 items)
├── Skills Section
│   ├── Frontend (React, JS, HTML, CSS, Tailwind)
│   ├── Tools (Vite, Git, VS Code, Figma, npm)
│   └── Soft Skills (Communication, Problem Solving, etc)
├── Process Section
│   ├── Discovery (01)
│   ├── Design (02)
│   ├── Development (03)
│   └── Launch (04)
└── Pricing Section
    └── Discussion CTA
```

### Projects Page (/projects)

```
Projects/
├── Page Header
├── Filter Section
│   ├── All Projects
│   ├── Branding
│   ├── E-Commerce
│   ├── Service
│   └── Personal
├── Projects Grid
│   └── Multiple Project Cards
│       ├── Title
│       ├── Description
│       ├── Challenge Box
│       ├── Result Box
│       ├── Tech Tags
│       └── View Project Button
├── Stats Section
│   ├── 25+ Projects
│   ├── 50+ Clients
│   └── 500+ Hours
└── CTA Section
    └── Start Your Project Button
```

### Testimonials Page (/testimonials)

```
Testimonials/
├── Page Header
├── Testimonial Cards (6)
│   ├── Quote
│   ├── Star Rating
│   ├── Client Avatar
│   ├── Client Name
│   └── Client Title
├── Why Work With Me (6 cards)
│   ├── Speed
│   ├── Quality
│   ├── Communication
│   ├── Reliability
│   ├── Creativity
│   └── Results
├── Statistics Section
│   ├── 98% Satisfaction
│   ├── 50+ Clients
│   ├── 100+ Reviews
│   └── 3+ Years
└── CTA Section
    └── Get Started Button
```

### Portfolio Page (/portfolio)

```
Portfolio/
├── Page Header
├── Portfolio Grid
│   ├── REED-MEDIA Card (p1)
│   ├── REED-STORES Card (p2)
│   ├── SKILLS Service Card (p3)
│   └── R4D3V Card (p4)
└── CTA Section
    └── Lets Build Button
```

### Contact Page (/contact)

```
Contact/
├── Page Header
├── Contact Methods Grid (6 columns)
│   ├── Email Card
│   ├── Office Card
│   ├── Phone Card
│   ├── WhatsApp Card
│   ├── Instagram Card
│   └── Telegram Card
├── Navigation Section
│   └── My Work Button
└── Video Section
    └── Video Player (Glass Card)
```

## 🎨 Component & Style Hierarchy

### Global Classes (index.css)

```
Glass Components
├── .glass-effect
│   ├── Blur: 20px
│   ├── Opacity: 8%
│   └── Border: rgba(255,255,255,0.25)
├── .glass-card
│   ├── Blur: 25px
│   ├── Opacity: 6%
│   ├── Padding: 2rem
│   └── Border radius: 24px
└── .glass-button
    ├── Blur: 15px
    ├── Opacity: 12%
    └── Padding: 0.75rem 1.5rem

Text Effects
├── .text-gradient
│   └── Linear gradient background
├── .text-glow
│   └── Text shadow: 20px white
└── .gradient-text
    └── 300% background size animation

Animation Classes
├── .animate-fade-in-*
├── .animate-scale-in
├── .animate-float
├── .animate-glow
├── .animate-shimmer
├── .animate-rotate-3d
├── .animate-pulse-glow
├── .stagger
└── .hover-lift
```

## 🔄 Animation Flow

### Page Load Animations

```
Component Mounts
    ↓
.animate-fade-in-up (0.6s)
    ↓
Element visible
    ↓
Hover triggers additional animations
    ↓
.hover-lift, .animate-float, etc.
```

### Stagger Animation

```
<div className="stagger">
  <div>1</div>  ← animation-delay: 0.1s
  <div>2</div>  ← animation-delay: 0.2s
  <div>3</div>  ← animation-delay: 0.3s
  <div>4</div>  ← animation-delay: 0.4s
  <div>5</div>  ← animation-delay: 0.5s
  <div>6</div>  ← animation-delay: 0.6s
</div>
```

## 🎯 State Management

### Navigation State

```
App.jsx
├── Route state (React Router)
├── Nav component
│   └── Mobile menu state (useState)
│       ├── Open
│       ├── Show links
│       └── Close on navigation
└── Footer (static)
```

### Projects Filtering (Projects page)

```
Projects.jsx
├── selectedCategory state
│   ├── "all" (default)
│   ├── "branding"
│   ├── "ecommerce"
│   ├── "service"
│   └── "personal"
└── Filtered projects array
    └── Based on selected category
```

## 📱 Responsive Breakpoints

```
Mobile (0-639px)
├── Full width layouts
├── Hamburger menu
├── 1 column grids
└── Stacked cards

Tablet (640-959px)
├── 2 column grids
├── Wider padding
├── Compact navigation
└── Side-by-side layouts

Desktop (960px+)
├── 3+ column grids
├── Full navigation visible
├── Optimized spacing
└── Advanced animations active
```

## 🎬 Animation Timing Reference

| Effect      | Duration | Easing      | Loop |
| ----------- | -------- | ----------- | ---- |
| fadeInUp    | 0.6s     | ease-out    | Once |
| fadeInDown  | 0.6s     | ease-out    | Once |
| fadeInLeft  | 0.6s     | ease-out    | Once |
| fadeInRight | 0.6s     | ease-out    | Once |
| scaleIn     | 0.5s     | ease-out    | Once |
| float       | 3s       | ease-in-out | ∞    |
| glow        | 3s       | ease-in-out | ∞    |
| shimmer     | 2s       | -           | ∞    |
| rotate3d    | 6s       | ease-in-out | ∞    |
| pulseGlow   | 2s       | ease-in-out | ∞    |
| gradient    | 15s      | ease        | ∞    |

## 🔗 Component Dependencies

```
App.jsx
├── depends on: React Router
├── imports: Nav, Footer, all Pages
└── provides: Routes context

Nav.jsx
├── depends on: React, React Router, useState
├── imports: Social icons
└── provides: Navigation, Mobile menu

Pages
├── Home depends on: Tech images
├── About depends on: achievement data
├── Services depends on: service data
├── Projects depends on: project data, useState
├── Testimonials depends on: testimonial data
├── Portfolio depends on: portfolio images
└── Contact depends on: contact icons, video

Footer.jsx
├── depends on: React Router
└── imports: Social icons
```

## 📊 CSS Architecture

```
index.css
├── Global Imports
│   ├── Google Fonts
│   └── Tailwind directives
├── Animations (13+ keyframes)
├── Glass Effects (3 classes)
├── Button Styles
├── Text Effects
├── Utility Classes
├── Responsive Classes
└── Scrollbar Styling
```

## 🎨 Color Palette Structure

```
Gradient Background
├── #667eea (Purple) - 0%
├── #764ba2 (Purple Dark) - 25%
├── #f093fb (Pink) - 50%
├── #4facfe (Blue) - 75%
└── #00f2fe (Cyan) - 100%

Glass Opacity Scale
├── 6% (darkest glass-card)
├── 8% (glass-effect)
├── 10% (glass-card hover)
├── 12% (glass-button)
├── 20% (glass-button hover)
└── 25% (glass-effect border)

Text Colors
├── White (#ffffff) - Primary
├── White 90% - Secondary
├── White 80% - Tertiary
└── White 60% - Tertiary Light
```

## 🚀 Performance Optimization

```
Code Splitting
├── Pages (lazy loaded by React Router)
├── Components (Nav, Footer reused)
└── Styles (CSS modules ready)

Build Optimization
├── Vite (fast builds)
├── Tree shaking
├── CSS purging via Tailwind
└── Image optimization

Runtime Optimization
├── GPU-accelerated animations
├── Efficient re-renders
├── Event delegation
└── Smooth scrolling
```

---

**This diagram shows the complete structure of your modern portfolio application.**
