# AtomiqWorks - Premium Digital Agency Portfolio

A modern, high-performance portfolio website for AtomiqWorks, a premium digital agency. Built with Next.js 14, TypeScript, Tailwind CSS v4, and Framer Motion.

![AtomiqWorks](./public/og-image.png)

## 🌟 Features

- **Modern Design System**: Clean, minimalist aesthetic with premium brand colors
- **Smooth Animations**: Subtle micro-interactions and scroll-based reveals using Framer Motion
- **Fully Responsive**: Mobile-first design that looks great on all devices
- **Performance Optimized**: Built with Core Web Vitals in mind
- **SEO Ready**: Proper meta tags, semantic HTML, and accessibility features
- **Type-Safe**: Full TypeScript coverage for robust development

## 🎨 Design Philosophy

The website embodies:
- **Minimalism**: Clean layouts with confident whitespace
- **Business Credibility**: Professional and trustworthy presentation
- **Innovation**: Modern layouts with futuristic touches
- **Trendy + Funky**: Creative elements that make the brand memorable

### Color Palette

- **Primary**: Muted Indigo (`#4f46e5`)
- **Secondary**: Soft Teal (`#2dd4bf`)
- **Highlight**: Soft Coral (`#fb7185`)
- **Base**: Off-white / Light Grey (`#f8fafc`)
- **Text**: Deep Slate (`#0f172a`)

## 🏗️ Project Structure

```
atomiq-website/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── FeaturedWork.tsx
│   │   │   ├── Capabilities.tsx
│   │   │   ├── Process.tsx
│   │   │   ├── TrustSignals.tsx
│   │   │   ├── Philosophy.tsx
│   │   │   └── Contact.tsx
│   │   └── ui/
│   │       └── Button.tsx
│   └── lib/
│       └── utils.ts
└── public/
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/atomiq-website.git
cd atomiq-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📦 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com/)

## 🌐 Sections

1. **Hero**: Bold headline with animated background and key metrics
2. **Featured Work**: Project showcase with filterable categories
3. **Capabilities**: Core services (Design, Engineering, Performance, Strategy)
4. **Process**: 4-step workflow (Discover → Design → Build → Scale)
5. **Trust Signals**: Client testimonials, logos, and technologies
6. **Philosophy**: Brand values and mission statement
7. **Contact**: Lead capture form with contact information
8. **Footer**: Site navigation and social links

## 🎯 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Bundle Size**: Minimal JS with code splitting

## 📝 Customization

### Update Brand Colors

Edit `src/app/globals.css`:

```css
@theme {
  --color-brand-primary: #your-color;
  --color-brand-secondary: #your-color;
  /* ... */
}
```

### Add New Sections

Create a new component in `src/components/sections/` and import it in `src/app/page.tsx`.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 📞 Contact

**AtomiqWorks**
- Email: hello@atomiqworks.com
- Phone: +1 (555) 123-4567
- Location: San Francisco, CA

---

Built with ❤️ by AtomiqWorks
