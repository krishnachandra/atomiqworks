# AtomiqWorks Animated Logo Component 🌍⚛️

A premium, production-ready React component featuring an animated atomic logo with a globe center and orbiting atoms. Built with **pure CSS animations** for maximum performance and zero JavaScript overhead.

---

## ✨ Features

- 🌐 **Globe center** with subtle grid lines and continent hints
- ⚛️ **Three orbiting atoms** (Teal, Orange, Lime) with smooth 3D rotations
- 🎨 **Premium design** with gradient effects and soft glows
- 📱 **Fully responsive** with automatic scaling
- ⚡ **Zero JavaScript** - pure CSS animations
- 🎯 **Type-safe** with TypeScript
- 🔧 **Customizable** size and brand name display

---

## 🚀 Quick Start

### Basic Usage

```tsx
import AtomiqLogo from '@/components/ui/AtomiqLogo';

export default function MyPage() {
  return (
    <div>
      <AtomiqLogo />
    </div>
  );
}
```

### With Brand Name

```tsx
<AtomiqLogo size={400} showBrandName />
```

### Custom Size

```tsx
<AtomiqLogo size={200} />
```

### In Hero Section

```tsx
<div className="flex flex-col items-center justify-center min-h-screen">
  <AtomiqLogo size={500} showBrandName className="mb-12" />
  <h2 className="text-2xl">Welcome to AtomiqWorks</h2>
</div>
```

---

## 📖 Component API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number` | `300` | Logo size in pixels (scales proportionally) |
| `showBrandName` | `boolean` | `false` | Display "AtomiqWorks" text below logo |
| `className` | `string` | `''` | Additional CSS classes for styling |

---

## 🎨 Customization

### Change Logo Size

The logo scales proportionally based on the `size` prop:

```tsx
<AtomiqLogo size={600} />  {/* Large */}
<AtomiqLogo size={300} />  {/* Default */}
<AtomiqLogo size={150} />  {/* Small */}
```

### Modify Colors

Edit the CSS in `globals.css`:

```css
/* Globe Color */
.globe {
  background: linear-gradient(135deg, #4a5f7a 0%, #5c7396 50%, #4a5f7a 100%);
}

/* Atom Colors */
.atom-1 { background: linear-gradient(135deg, #20E3B2, #29ffc6); } /* Teal */
.atom-2 { background: linear-gradient(135deg, #FF6B6B, #ff8787); } /* Orange */
.atom-3 { background: linear-gradient(135deg, #9EE493, #b5f1a9); } /* Lime */
```

### Adjust Animation Speed

Modify orbit rotation speeds in `globals.css`:

```css
/* Faster rotation: reduce duration */
.orbit-1 { animation: orbit-rotate-1 5s linear infinite; }

/* Slower rotation: increase duration */
.orbit-2 { animation: orbit-rotate-2 12s linear infinite; }
```

### Change Globe Breathing Effect

```css
@keyframes globe-breathe {
  /* Adjust duration for slower/faster breathing */
  /* Current: 8s, Try: 4s (faster) or 12s (slower) */
}
```

---

## 🎬 Animation Details

| Element | Animation | Duration | Type |
|---------|-----------|----------|------|
| **Globe** | Breathing (scale + glow) | 8s | Ease-in-out, infinite |
| **Orbit 1** (Teal) | 3D rotation | 8s | Linear, infinite |
| **Orbit 2** (Orange) | 3D rotation | 9s | Linear, infinite (offset -3s) |
| **Orbit 3** (Lime) | 3D rotation | 7s | Linear, infinite (offset -1.5s) |

---

## 📱 Responsive Behavior

The logo automatically scales on different screen sizes:

- **Desktop** (>768px): 300px (configurable)
- **Tablet** (≤768px): 200px
- **Mobile** (≤480px): 150px

Override with custom `size` prop if needed.

---

## 🛠 Technical Implementation

### File Structure

```
src/
├── components/
│   └── ui/
│       └── AtomiqLogo.tsx      # React component
└── app/
    └── globals.css              # CSS animations
```

### How It Works

1. **Component** (`AtomiqLogo.tsx`):
   - Accepts props for size and brand name
   - Uses CSS custom properties for dynamic sizing
   - Renders semantic HTML structure

2. **Animations** (`globals.css`):
   - Pure CSS `@keyframes` for smooth motion
   - 3D transforms with `rotateY()` and `rotateZ()`
   - No JavaScript = better performance

3. **Styling**:
   - CSS variables for easy theming
   - Gradient backgrounds for depth
   - Box-shadows for premium glow effects

---

## 🎯 Use Cases

### Hero Section
```tsx
<section className="flex items-center justify-center min-h-screen bg-slate-900">
  <AtomiqLogo size={500} showBrandName />
</section>
```

### Loading Screen
```tsx
<div className="fixed inset-0 flex items-center justify-center bg-black/90 z-50">
  <AtomiqLogo size={300} />
</div>
```

### About Page
```tsx
<div className="text-center py-20">
  <AtomiqLogo size={250} className="mx-auto mb-8" />
  <h1>About AtomiqWorks</h1>
</div>
```

### Navbar (Small)
```tsx
<nav className="flex items-center gap-4 p-4">
  <AtomiqLogo size={50} />
  <span className="font-bold">AtomiqWorks</span>
</nav>
```

---

## 🔧 Performance Notes

- **CPU-efficient**: Pure CSS animations use GPU acceleration
- **No JavaScript overhead**: Zero runtime performance cost
- **Optimized rendering**: Uses `transform` and `opacity` for smooth 60fps animations
- **Small bundle size**: Only ~5KB of CSS

---

## 🚨 Browser Support

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile browsers (iOS/Android)

All modern browsers with CSS3 animation support.

---

## 📄 License

Part of the AtomiqWorks brand assets. For internal use.

---

## 🤝 Contributing

To modify the logo:
1. Edit `AtomiqLogo.tsx` for structure changes
2. Edit `globals.css` for visual/animation changes
3. Test on multiple screen sizes
4. Update this README if adding new props

---

## 💡 Tips

1. **Dark backgrounds work best** - the glow effects shine on dark surfaces
2. **Give it space** - ensure adequate padding around the logo
3. **Don't over-use** - one animated instance per page is recommended for performance
4. **Prefers-reduced-motion**: Consider adding motion-safe variants for accessibility

---

**Created with ⚛️ by AtomiqWorks**
