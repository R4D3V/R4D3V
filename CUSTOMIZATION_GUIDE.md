# R4D3V Portfolio - Implementation & Customization Guide

## 🛠️ How to Customize Your Portfolio

### 1. Update Personal Information

#### In `src/pages/about.jsx`

```jsx
const stats = [
  { label: "Years Experience", value: "3+" }, // Change these
  { label: "Projects Completed", value: "25+" },
  // ...
];

const achievements = [
  {
    icon: "🚀", // Change emoji
    title: "Performance First",
    description: "Your custom description here",
  },
  // ...
];
```

#### In `src/pages/services.jsx`

```jsx
const services = [
  {
    icon: "💻",  // Change emoji
    title: "Web Development",
    description: "Update with your services",
    features: ["Feature 1", "Feature 2", ...],
  },
];
```

#### In `src/pages/testimonials.jsx`

```jsx
const testimonials = [
  {
    name: "Client Name",
    title: "Client Title",
    image: "👨‍💼", // Change emoji
    content: "Their testimonial here",
    rating: 5,
  },
];
```

### 2. Add Your Projects

#### In `src/pages/projects.jsx`

```jsx
const projects = [
  {
    id: "p1",
    title: "Project Name",
    category: "category-name", // branding, ecommerce, service, personal
    description: "Short description",
    link: "https://project-url.com",
    caseStudy: {
      challenge: "What was the challenge?",
      solution: "How did you solve it?",
      result: "What was the outcome?",
      tech: ["Tech 1", "Tech 2", "Tech 3"],
      duration: "3 months",
    },
  },
];
```

### 3. Customize Colors

#### In `src/index.css`

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
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
```

### 4. Adjust Animation Speed

#### Modify animation durations in `src/index.css`

```css
/* Change 3s to your preferred speed */
.animate-float {
  animation: float 3s ease-in-out infinite; /* Slower: 5s, Faster: 1s */
}

/* Change 0.6s to your preferred speed */
.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out; /* Slower: 1s, Faster: 0.3s */
}

/* Change 15s for background gradient */
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
body {
  animation: gradient 15s ease infinite; /* Slower: 30s, Faster: 8s */
}
```

### 5. Add New Pages

#### Create a new page file, e.g., `src/pages/blog.jsx`:

```jsx
import { Link } from "react-router-dom";

function Blog() {
  return (
    <div className="container mx-auto w-full px-4 py-12">
      <div className="text-center mb-16 animate-fade-in-up">
        <h1 className="text-5xl font-bold text-gradient mb-6">Blog</h1>
        <p className="text-xl max-w-2xl mx-auto">
          My thoughts and insights on web development
        </p>
      </div>

      {/* Your content here */}
    </div>
  );
}

export default Blog;
```

#### Update `src/App.jsx`:

```jsx
import Blog from "./pages/blog";

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        {/* ... existing routes ... */}
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </>
  );
};
```

#### Update `src/components/nav.jsx`:

```jsx
const navLinks = [
  // ... existing links ...
  { path: "/blog", label: "Blog" },
  // ... more links ...
];
```

### 6. Use Animation Classes

#### In your components:

```jsx
{
  /* Fade in from bottom */
}
<div className="animate-fade-in-up">Content fades in from below</div>;

{
  /* Fade in from top */
}
<div className="animate-fade-in-down">Content fades in from above</div>;

{
  /* Scale animation on load */
}
<div className="animate-scale-in">Content scales up on load</div>;

{
  /* Floating effect */
}
<div className="animate-float">Content floats up and down</div>;

{
  /* Staggered children animations */
}
<div className="stagger">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>;

{
  /* Hover lift effect */
}
<div className="glass-card hover-lift">Card lifts on hover</div>;

{
  /* Float on hover */
}
<div className="group-hover:animate-float">Floats when parent is hovered</div>;
```

### 7. Modify Section Headings

```jsx
{
  /* Styled heading with underline */
}
<h2 className="text-4xl font-bold text-center text-gradient mb-12 section-heading">
  Section Title
</h2>;
```

### 8. Contact Form Enhancement

#### In `src/pages/contact.jsx`, add form handling:

```jsx
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };

  return (
    <div className="container mx-auto w-full px-4 py-12">
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
        <input
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="glass-effect w-full mb-4 p-4 rounded-lg"
        />
        {/* More form fields */}
      </form>
    </div>
  );
}
```

### 9. Add New Animation

#### Create custom animation in `src/index.css`:

```css
@keyframes customAnimation {
  0% {
    opacity: 0;
    transform: translateY(20px) rotateX(20deg);
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
    transform: translateY(0) rotateX(0deg);
  }
}

.animate-custom {
  animation: customAnimation 0.8s ease-out;
}
```

### 10. Responsive Customization

```jsx
{
  /* Hide on mobile, show on desktop */
}
<div className="hidden lg:block">Desktop only content</div>;

{
  /* Responsive grid */
}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Cards */}
</div>;

{
  /* Responsive text */
}
<h1 className="text-2xl md:text-4xl lg:text-5xl">Responsive Heading</h1>;
```

## 🎨 Color Palette Guide

### Primary Colors (from gradient)

- Purple: `#667eea`
- Pink: `#f093fb`
- Blue: `#4facfe`
- Cyan: `#00f2fe`

### Glass Opacity Values

- Darkest: `rgba(255, 255, 255, 0.06)` - `.glass-card`
- Dark: `rgba(255, 255, 255, 0.08)` - `.glass-effect`
- Medium: `rgba(255, 255, 255, 0.12)` - Button hover
- Light: `rgba(255, 255, 255, 0.25)` - Border

### Text Colors

- White: `#ffffff`
- White 90%: `rgba(255, 255, 255, 0.9)`
- White 80%: `rgba(255, 255, 255, 0.8)`
- White 60%: `rgba(255, 255, 255, 0.6)`

## 🚀 Performance Tips

1. **Reduce animation count** on lower-end devices
2. **Use `will-change`** CSS for performance:

   ```css
   .animate-expensive {
     will-change: transform;
     animation: expensiveAnimation 2s;
   }
   ```

3. **Debounce scroll events** when adding scroll animations
4. **Use `transform` and `opacity`** instead of other properties
5. **Avoid animating large elements** at once

## 📱 Mobile Optimization

```jsx
{
  /* Only show animations on larger screens */
}
<div className="hidden lg:block animate-fade-in-up">
  Animation on desktop only
</div>;

{
  /* Simplify animations on mobile */
}
<div className="animate-fade-in-up md:hover-lift">
  Simple fade, complex hover only on desktop
</div>;
```

## 🔗 External Resources

- [Tailwind CSS Docs](https://tailwindcss.com)
- [React Router Docs](https://reactrouter.com)
- [CSS Animations Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/animation)
- [Web Performance](https://web.dev/performance/)

## 📞 Support & Troubleshooting

### Animation not playing?

1. Check class names match exactly
2. Verify CSS is imported (`@import` in `index.css`)
3. Clear browser cache (Ctrl+Shift+Delete)

### Page not loading?

1. Check import statements in `App.jsx`
2. Verify file paths are correct
3. Run `pnpm run build` to check for errors

### Styles not applying?

1. Check Tailwind class names
2. Verify responsive breakpoints (mobile first)
3. Check specificity of CSS rules

---

**Last Updated**: January 18, 2026
**Version**: 2.0 - Modern Portfolio
