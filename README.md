# Professional Portfolio Website

A modern, responsive portfolio website showcasing your writing, development, and design work. Built with React, Vite, Tailwind CSS, and Framer Motion for smooth animations.

## Features

✨ **Modern Design**
- Dark theme with electric cyan accents
- Responsive design (mobile, tablet, desktop)
- Smooth scroll animations and interactions
- Professional typography with Poppins and Inter fonts

📱 **Complete Sections**
- Hero section with animated background
- About me section
- Services showcase (Writing, Development, Design)
- Skills with progress bars
- Featured projects gallery
- Why hire me section
- Tools and technologies
- Workflow timeline
- Testimonials (template ready)
- FAQ accordion
- Contact section with multiple channels
- Footer

🚀 **Performance**
- Fast loading with Vite
- Optimized images and assets
- Smooth animations respecting user preferences
- SEO-friendly structure

## Tech Stack

- **Frontend**: React 19 with TypeScript
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Poppins (display) + Inter (body)

## Getting Started

### Prerequisites
- Node.js 16+
- pnpm (recommended) or npm

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm run dev

# Build for production
pnpm run build

# Preview production build
pnpm run preview
```

The site will be available at `http://localhost:3000`

## Project Structure

```
portfolio-website/
├── client/
│   ├── public/              # Static files
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   │   ├── Header.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── ServicesSection.tsx
│   │   │   ├── SkillsSection.tsx
│   │   │   ├── ProjectsSection.tsx
│   │   │   ├── WhyHireSection.tsx
│   │   │   ├── ToolsSection.tsx
│   │   │   ├── WorkflowSection.tsx
│   │   │   ├── TestimonialsSection.tsx
│   │   │   ├── FAQSection.tsx
│   │   │   ├── ContactSection.tsx
│   │   │   └── Footer.tsx
│   │   ├── pages/           # Page components
│   │   │   └── Home.tsx
│   │   ├── App.tsx          # Main app component
│   │   ├── main.tsx         # Entry point
│   │   └── index.css        # Global styles
│   └── index.html
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.ts
├── package.json
└── GITHUB_PAGES_SETUP.md    # Deployment guide
```

## Customization

### Update Your Information

1. **Header Navigation** (`client/src/components/Header.tsx`)
   - Update navigation links
   - Add your logo

2. **Hero Section** (`client/src/components/HeroSection.tsx`)
   - Change headline and description
   - Update CTA buttons

3. **Contact Section** (`client/src/components/ContactSection.tsx`)
   - Add your email, LinkedIn, GitHub, WhatsApp links
   - Update contact information

4. **Footer** (`client/src/components/Footer.tsx`)
   - Update your name
   - Add copyright year

5. **Projects** (`client/src/components/ProjectsSection.tsx`)
   - Replace project titles and descriptions
   - Update project links

### Customize Colors

Edit `client/src/index.css` to change the color scheme:

```css
:root {
  --background: #0F172A;      /* Deep navy */
  --foreground: #F8FAFC;      /* Off-white */
  --primary: #2563EB;         /* Blue */
  --accent: #38BDF8;          /* Cyan */
  --card: #1E293B;            /* Lighter navy */
}
```

### Customize Fonts

Update Google Fonts in `client/index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;700&display=swap" rel="stylesheet" />
```

Then update CSS variables in `client/src/index.css`.

## Deployment

### GitHub Pages

See [GITHUB_PAGES_SETUP.md](./GITHUB_PAGES_SETUP.md) for detailed instructions.

Quick start:
```bash
# Build for production
pnpm run build

# The dist/public folder is ready to deploy
```

### Other Platforms

The `dist/public` folder can be deployed to:
- Vercel
- Netlify
- Firebase Hosting
- AWS S3
- Any static hosting service

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Tips

1. **Optimize Images**: Use compressed formats (WebP)
2. **Lazy Load**: Images load only when needed
3. **Code Splitting**: Vite automatically splits code
4. **Caching**: Static assets are cached by browsers

## Accessibility

- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Color contrast compliance (WCAG AA)
- Respects `prefers-reduced-motion` setting

## SEO

- Semantic HTML tags
- Meta descriptions
- Open Graph tags (ready to add)
- Structured data (ready to add)
- Mobile-friendly responsive design

## Scripts

```bash
# Development
pnpm run dev          # Start dev server
pnpm run check        # Type check

# Production
pnpm run build        # Build for production
pnpm run preview      # Preview production build

# Code Quality
pnpm run format       # Format code with Prettier
```

## Troubleshooting

**Images not showing?**
- Images are stored in `/manus-storage/` and will load automatically
- No local image paths are used

**Styles not applying?**
- Clear browser cache (Ctrl+Shift+Delete)
- Restart dev server: `pnpm run dev`

**Build fails?**
- Delete `node_modules` and `pnpm-lock.yaml`
- Run `pnpm install` again
- Check Node.js version: `node --version`

## License

This project is open source and available under the MIT License.

## Support

For issues or questions:
1. Check the [Vite documentation](https://vitejs.dev)
2. Review [React documentation](https://react.dev)
3. Check [Tailwind CSS docs](https://tailwindcss.com)

## Next Steps

1. **Customize Content**: Update all sections with your information
2. **Add Real Projects**: Replace project placeholders with your work
3. **Setup Contact**: Connect your email service or form handler
4. **Deploy**: Follow the GitHub Pages guide to go live
5. **Monitor**: Set up analytics to track visitors

---

**Built with ❤️ using React, Tailwind CSS, and modern web technologies.**
