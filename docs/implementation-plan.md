# Implementation Plan
## Landing Page Development - React + Tailwind + Bun

---

## Technology Stack Decisions

### Framework: Next.js 15/16 (App Router)
**Decision: Use Next.js**

**Rationale:**
- **Best for SEO**: Server-side rendering (SSR) and static site generation (SSG) out of the box
- **Performance**: Built-in optimizations (image optimization, code splitting, automatic static optimization)
- **React Server Components**: Latest Next.js supports RSC for better performance
- **Industry standard**: Most popular React framework, excellent ecosystem and community
- **Deployment**: Seamless deployment on Vercel (made by Next.js creators)

---

### Styling: Tailwind CSS
**Decision: Use Tailwind CSS**

**Rationale:**
- **Still the best**: Most popular utility-first CSS framework (2025)
- **Rapid development**: Write styles directly in JSX without context switching
- **Performance**: Purges unused CSS automatically
- **Design system**: Easy to maintain consistent spacing, colors, typography
- **Ecosystem**: Massive community, plugins, and component libraries

**Component Library:**
- **shadcn/ui**: Copy-paste components built on Radix UI and Tailwind CSS
  - Not a dependency - components are copied into your project
  - Fully customizable and accessible
  - Beautiful, minimal design that matches our aesthetic
  - Built on Radix UI primitives for accessibility

**Verdict**: Tailwind CSS + shadcn/ui is the perfect combination for this project.

---

### Package Manager & Runtime: Bun
**Decision: Use Bun**

**Rationale:**
- **Speed**: 3-4x faster than npm/yarn for installs
- **All-in-one**: Runtime + package manager + bundler + test runner
- **Compatibility**: Drop-in replacement for Node.js
- **TypeScript**: Built-in TypeScript support
- **Growing adoption**: Increasingly popular in 2025

**Note**: Next.js works perfectly with Bun. Use `bun create next-app` or `bunx create-next-app`.

**Verdict**: Bun is faster and more modern. Use it.

---

### Build Tool: Next.js Built-in (Turbopack)
**Decision: Use Next.js built-in bundler (Turbopack)**

**Rationale:**
- **Next.js includes Turbopack**: Next.js 15 uses Turbopack by default (faster than Webpack)
- **No Vite needed**: Next.js has its own optimized build system
- **Bun compatibility**: Bun can run Next.js dev/build commands seamlessly

**Vite Alternative:**
- Vite is excellent for pure React apps, but Next.js has its own optimized system
- If using Vite, you'd lose Next.js SSR/SSG benefits

**Verdict**: Stick with Next.js built-in bundler. No need for Vite.

---

### Testing: Vitest or Jest
**Decision: Use Vitest**

**Rationale:**
- **Fast**: Uses Vite's transform pipeline (even faster than Jest)
- **EAPI compatible**: Same API as Jest, easy migration
- **TypeScript**: Native TypeScript support
- **Works with Bun**: Can use Bun's test runner or Vitest
- **React Testing Library**: Works seamlessly with RTL

**Alternative:**
- **Jest**: Still popular but slower
- **Bun test**: Bun has built-in test runner, but Vitest has better React ecosystem support

**Verdict**: Use Vitest for testing. It's faster and works great with React.

---

## Design Philosophy & Style Guide

**Reference**: See `design-analysis.md` for complete design analysis of D.E. Shaw, Millennium Management, and Stripe.

### Core Design Principles

We're building a **sophisticated, minimalist landing page** that prioritizes:
1. **Clarity** - Every element serves a purpose
2. **Professionalism** - Trustworthy and refined aesthetic
3. **Elegance** - Generous white space and refined typography
4. **Performance** - Fast loading is part of the experience

**Key mantra**: Less is more. Remove everything that doesn't add value.

---

## Color Palette & Theme

### Recommended Color Scheme

Based on the design analysis, we'll use a **monochromatic palette with minimal accent colors**:

```typescript
// tailwind.config.ts
colors: {
  // Primary text - near-black for high contrast
  primary: {
    DEFAULT: '#1A1A1A',  // Near-black (D.E. Shaw style)
    900: '#000000',     // Pure black for emphasis
  },

  // Neutral backgrounds - whites and off-whites
  neutral: {
    50: '#FAFAFA',      // Off-white background
    100: '#F5F5F5',     // Light gray background
    200: '#E5E5E5',     // Border color
    300: '#D4D4D4',     // Subtle dividers
    400: '#A3A3A3',     // Muted text
    500: '#737373',     // Secondary text
    600: '#525252',     // Body text (darker)
    700: '#404040',     // Headings
    800: '#262627',     // Dark text
    900: '#1A1A1A',     // Primary text
    950: '#0A0A0A',     // Pure black
  },

  // Accent color (use sparingly)
  accent: {
    DEFAULT: '#6366F1', // Subtle indigo (Stripe-inspired)
    50: '#EEF2FF',
    100: '#E0E7FF',
    500: '#6366F1',
    600: '#4F46E5',
  },

  // Semantic colors (minimal use)
  success: '#10B981',
  error: '#EF4444',
  warning: '#F59E0B',
}
```

### Color Usage Guidelines

- **Backgrounds**: Use `neutral-50` or `neutral-100` for sections, pure white (`white`) for main content areas
- **Text**: `neutral-900` for primary text, `neutral-500` for secondary/muted text
- **Borders**: `neutral-200` for subtle dividers
- **Accent**: Use `accent-500` sparingly - only for links, CTAs, or key highlights
- **High contrast**: Ensure WCAG AA compliance (4.5:1 ratio minimum)

### Dark Mode (Optional)

If implementing dark mode:
```typescript
dark: {
  neutral: {
    50: '#0A0A0A',
    100: '#1A1A1A',
    900: '#FAFAFA',
  }
}
```

---

## Typography System

### Font Selection

**Primary Font**: Inter (Google Fonts)
- Clean, modern sans-serif
- Excellent readability
- Professional appearance
- Used by Stripe and many modern sites

**Alternative Options**:
- Helvetica Neue (if licensing allows)
- Avenir (premium option)
- System font stack: `-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`

### Typography Scale

```typescript
// tailwind.config.ts
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],
  mono: ['JetBrains Mono', 'monospace'], // For code/technical content
},

fontSize: {
  // Hero section - massive, impactful
  'hero': ['4.5rem', {
    lineHeight: '1.1',
    letterSpacing: '-0.02em',
    fontWeight: '600'
  }], // 72px

  // Page titles
  'h1': ['3rem', {
    lineHeight: '1.2',
    letterSpacing: '-0.01em',
    fontWeight: '600'
  }], // 48px

  // Section headers
  'h2': ['2.25rem', {
    lineHeight: '1.3',
    fontWeight: '600'
  }], // 36px

  // Subsection headers
  'h3': ['1.5rem', {
    lineHeight: '1.4',
    fontWeight: '600'
  }], // 24px

  // Body text
  'body': ['1rem', {
    lineHeight: '1.6',
    fontWeight: '400'
  }], // 16px

  'body-lg': ['1.125rem', {
    lineHeight: '1.6',
    fontWeight: '400'
  }], // 18px

  // Small text / captions
  'small': ['0.875rem', {
    lineHeight: '1.5',
    fontWeight: '400'
  }], // 14px

  'xs': ['0.75rem', {
    lineHeight: '1.4',
    fontWeight: '400'
  }], // 12px

  // Stats/metrics - extra large numbers
  'stat': ['4rem', {
    lineHeight: '1',
    fontWeight: '700',
    letterSpacing: '-0.03em'
  }], // 64px
},

fontWeight: {
  light: '300',
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
},
```

### Typography Usage

- **Hero headlines**: `text-hero` (72px) - bold, impactful
- **Page titles**: `text-h1` (48px) - clear hierarchy
- **Section headers**: `text-h2` (36px) - organized content
- **Body text**: `text-body` or `text-body-lg` (16-18px) - readable
- **Uppercase text**: Add `tracking-wider` for letter spacing
- **Line length**: Max 75 characters (use `max-w-3xl` containers)

---

## Layout & Spacing System

### Container Widths

```typescript
// tailwind.config.ts
maxWidth: {
  'container': '1280px',    // Main content container
  'content': '1200px',      // Standard content width
  'narrow': '800px',        // Text-heavy content
  'wide': '1400px',         // Full-width sections
}
```

### Spacing Scale

```typescript
spacing: {
  // Standard Tailwind scale
  '0': '0px',
  '1': '0.25rem',   // 4px
  '2': '0.5rem',    // 8px
  '4': '1rem',      // 16px
  '6': '1.5rem',    // 24px
  '8': '2rem',      // 32px
  '12': '3rem',     // 48px
  '16': '4rem',     // 64px
  '20': '5rem',     // 80px
  '24': '6rem',     // 96px
  '32': '8rem',     // 128px

  // Custom spacing for sections
  'section': '6rem',      // 96px - standard section spacing
  'section-lg': '8rem',   // 128px - large section spacing
  'section-xl': '12rem',  // 192px - hero section spacing
}
```

### Layout Guidelines

- **Section padding**: `py-section` (96px vertical) or `py-section-lg` (128px)
- **Content padding**: `px-6 md:px-8 lg:px-12` (responsive horizontal padding)
- **Max container width**: `max-w-container mx-auto` for main content
- **Grid gaps**: `gap-8` (32px) for card grids, `gap-12` (48px) for larger sections
- **Component spacing**: Use consistent spacing scale throughout

---

## Component-Specific Design Patterns

### Navigation Header

**Style**:
- Fixed/sticky header with `backdrop-blur-sm bg-white/95`
- Height: `h-16` (64px) or `h-20` (80px)
- Border: `border-b border-neutral-200`
- Logo: Left-aligned, `text-xl font-semibold`
- Nav links: `text-sm font-medium text-neutral-600 hover:text-neutral-900`
- Active state: `text-neutral-900` with subtle underline
- Mobile menu: Hamburger icon, slide-in drawer

**Example classes**:
```tsx
<header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur-sm">
  <nav className="mx-auto flex max-w-container items-center justify-between px-6 py-4">
    {/* Logo and nav items */}
  </nav>
</header>
```

### Hero Section

**Style**:
- Full-width section with `min-h-[80vh]` or `min-h-screen`
- Centered or left-aligned content
- Large headline: `text-hero font-semibold`
- Subheading: `text-body-lg text-neutral-600 mt-6`
- Generous padding: `py-section-xl px-6`
- Optional: Subtle background gradient or image

**Layout options**:
- **Centered**: `text-center mx-auto max-w-4xl`
- **Left-aligned**: `max-w-3xl` (D.E. Shaw style)
- **Split**: Image left, content right (50/50 grid)

### Stats/Metrics Display

**Style** (Millennium-inspired):
- Grid layout: `grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12`
- Large numbers: `text-stat font-bold text-neutral-900`
- Labels: `text-sm text-neutral-600 mt-2`
- Card style: Optional subtle border or background
- Spacing: `py-section` around section

**Example**:
```tsx
<div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
  <div>
    <div className="text-stat font-bold text-neutral-900">35+</div>
    <div className="mt-2 text-sm text-neutral-600">Years</div>
  </div>
  {/* More stats */}
</div>
```

### Feature/Service Cards

**Style**:
- Card container: `border border-neutral-200 rounded-lg p-8`
- Hover: `hover:shadow-lg hover:-translate-y-1 transition-all duration-300`
- Icon/Image: Top of card, `mb-6`
- Title: `text-h3 font-semibold mb-3`
- Description: `text-body text-neutral-600`
- Grid: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`

### Buttons

**Primary Button**:
- Minimal style: `px-6 py-3 text-sm font-medium`
- Background: `bg-neutral-900 text-white`
- Hover: `hover:bg-neutral-800`
- No heavy shadows - keep it clean

**Secondary Button**:
- Outline style: `border border-neutral-900 text-neutral-900`
- Hover: `hover:bg-neutral-900 hover:text-white`

**Text Link**:
- `text-neutral-600 hover:text-neutral-900 underline-offset-4 hover:underline`
- Subtle underline on hover

### Forms

**Input Fields**:
- Border: `border border-neutral-200 rounded-md`
- Padding: `px-4 py-3`
- Focus: `focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent`
- Placeholder: `placeholder:text-neutral-400`
- Error state: `border-error-500`

**Form Layout**:
- Max width: `max-w-2xl`
- Spacing: `space-y-6` between fields
- Labels: `text-sm font-medium text-neutral-900 mb-2`

### Footer

**Style**:
- Background: `bg-neutral-50 border-t border-neutral-200`
- Multi-column: `grid grid-cols-2 md:grid-cols-4 gap-8`
- Links: `text-sm text-neutral-600 hover:text-neutral-900`
- Copyright: `text-xs text-neutral-500`
- Padding: `py-12 px-6`

---

## Animation & Interactions

### Micro-interactions

**Hover Effects**:
- Cards: `hover:shadow-lg hover:-translate-y-1 transition-all duration-300`
- Links: `hover:text-neutral-900 transition-colors duration-200`
- Buttons: `hover:bg-neutral-800 transition-colors duration-200`

**Transitions**:
- Use `transition-all duration-300` for smooth animations
- Keep durations short (200-300ms)
- Use `ease-in-out` for natural feel

**Scroll Animations** (Framer Motion):
- Fade in on scroll: `initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}`
- Stagger children: Use `staggerChildren` for lists
- Keep animations subtle - no flashy effects

### Smooth Scrolling

```css
/* globals.css */
html {
  scroll-behavior: smooth;
}
```

---

## Responsive Breakpoints

```typescript
// tailwind.config.ts (defaults)
screens: {
  'sm': '640px',   // Mobile landscape
  'md': '768px',   // Tablet
  'lg': '1024px',  // Desktop
  'xl': '1280px',  // Large desktop
  '2xl': '1536px', // Extra large
}
```

### Mobile-First Approach

- **Base styles**: Mobile (< 640px)
- **sm**: `@media (min-width: 640px)` - Mobile landscape
- **md**: `@media (min-width: 768px)` - Tablet
- **lg**: `@media (min-width: 1024px)` - Desktop
- **xl**: `@media (min-width: 1280px)` - Large desktop

**Responsive Patterns**:
- Navigation: Hamburger menu on mobile, horizontal on desktop
- Grids: 1 column mobile, 2-3 columns desktop
- Typography: Smaller on mobile, scale up on desktop
- Spacing: Reduce padding/margins on mobile

---

## Design Checklist

Reference the design analysis (`design-analysis.md`) and ensure:

- [ ] Clean, minimal navigation with sticky header
- [ ] Large, impactful hero section (72px headline)
- [ ] Generous white space throughout (96-128px section spacing)
- [ ] Consistent typography hierarchy (Inter font)
- [ ] Limited color palette (neutral grays + one accent)
- [ ] High contrast text (WCAG AA compliant)
- [ ] Card-based layouts for features/sections
- [ ] Stats/metrics display (64px numbers)
- [ ] Subtle hover effects (no heavy shadows)
- [ ] Responsive design (mobile-first)
- [ ] Smooth scrolling behavior
- [ ] Professional imagery (if used) - high quality, minimal
- [ ] Comprehensive footer with legal links

---

## Final Tech Stack

```
Framework:        Next.js 15/16 (App Router)
Styling:          Tailwind CSS
Components:       shadcn/ui
Package Manager:  Bun
Runtime:          Bun (or Node.js)
Testing:          Vitest + React Testing Library
Forms:            React Hook Form + Zod (validation)
Animations:       Framer Motion (optional, for subtle animations)
TypeScript:       Yes (recommended)
```

---

## Project Structure

```
huntersAndFarmers/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page
│   ├── about/
│   │   └── page.tsx             # About/Who We Are page
│   ├── services/                # What We Do/How We Work
│   │   └── page.tsx
│   └── contact/
│       └── page.tsx             # Contact page
├── components/
│   ├── ui/                      # Reusable UI components (shadcn/ui style)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── ...
│   ├── layout/
│   │   ├── Header.tsx           # Navigation
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Stats.tsx            # Metrics display
│   │   └── Contact.tsx
│   └── forms/
│       └── ContactForm.tsx
├── lib/
│   ├── utils.ts                 # Utility functions
│   └── constants.ts             # Site constants
├── public/
│   ├── images/
│   └── ...
├── styles/
│   └── globals.css              # Global styles + Tailwind directives
├── tests/
│   └── components/             # Component tests
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
├── vitest.config.ts
└── package.json
```

---

## Implementation Steps

### Phase 1: Project Setup

1. **Initialize Next.js project with Bun**
   ```bash
   bunx create-next-app@latest . --typescript --tailwind --app --no-src-dir
   ```

2. **Install core dependencies**
   ```bash
   bun add framer-motion react-hook-form zod @hookform/resolvers
   ```

3. **Install dev dependencies**
   ```bash
   bun add -d vitest @testing-library/react @testing-library/jest-dom @vitejs/plugin-react
   ```

4. **Configure Tailwind CSS**
   - Update `tailwind.config.ts` with custom theme (colors, spacing, typography)
   - Add custom fonts (Inter, Helvetica Neue, or similar)
   - Configure content paths

5. **Set up Vitest**
   - Create `vitest.config.ts`
   - Configure React Testing Library
   - Add test scripts to `package.json`

6. **Set up shadcn/ui**
   ```bash
   bunx shadcn-ui@latest init
   ```
   - Configure components directory (`components/ui`)
   - Install initial components: button, card, input, form, etc.
   - Components will be copied into your project for full customization

---

### Phase 2: Core Layout Components

**Design Reference**: See Navigation and Footer sections in `design-analysis.md`

1. **Header/Navigation**
   - **Style**: Fixed/sticky header with `backdrop-blur-sm bg-white/95`
   - **Height**: `h-16` (64px) with `border-b border-neutral-200`
   - **Layout**: Logo left, nav links center/right, Investor Login top-right
   - **Mobile**: Hamburger menu with slide-in drawer
   - **Links**: `text-sm font-medium text-neutral-600 hover:text-neutral-900`
   - **Active state**: Underline or `text-neutral-900`
   - **Smooth scroll**: Add scroll behavior for anchor links

2. **Footer**
   - **Background**: `bg-neutral-50 border-t border-neutral-200`
   - **Layout**: Multi-column grid (`grid-cols-2 md:grid-cols-4`)
   - **Sections**: About, Services, Contact, Legal
   - **Links**: `text-sm text-neutral-600 hover:text-neutral-900`
   - **Copyright**: `text-xs text-neutral-500`
   - **Spacing**: `py-12 px-6`

---

### Phase 3: Home Page

**Design Reference**: See Hero Section and Stats/Metrics Display in `design-analysis.md`

1. **Hero Section**
   - **Layout**: Full-width with `min-h-[80vh]` or `min-h-screen`
   - **Headline**: `text-hero font-semibold text-neutral-900` (72px)
   - **Subheading**: `text-body-lg text-neutral-600 mt-6` (18px)
   - **Alignment**: Centered (`text-center mx-auto max-w-4xl`) or left-aligned (`max-w-3xl`)
   - **Spacing**: `py-section-xl px-6` (192px vertical padding)
   - **CTA**: Minimal button style or no CTA (let content speak)
   - **Optional**: Subtle background gradient or high-quality image
   - **Scroll indicator**: Subtle arrow or "scroll" text if multi-section

2. **Stats/Metrics Section** (Millennium-inspired)
   - **Layout**: `grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12`
   - **Numbers**: `text-stat font-bold text-neutral-900` (64px, bold)
   - **Labels**: `text-sm text-neutral-600 mt-2`
   - **Spacing**: `py-section` around section
   - **Style**: Optional subtle border or background card
   - **Example**: "35+ Years", "$81BN+ AUM", "6,400+ Employees"

3. **Preview Sections**
   - **Layout**: Card-based grid (`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`)
   - **Cards**: `border border-neutral-200 rounded-lg p-8`
   - **Hover**: `hover:shadow-lg hover:-translate-y-1 transition-all duration-300`
   - **Content**: Brief preview text linking to About, Services pages
   - **Typography**: `text-h3` for titles, `text-body text-neutral-600` for descriptions

---

### Phase 4: About Page ("Who We Are")

**Design Reference**: See Content Sections and Typography in `design-analysis.md`

1. **Hero Section**
   - **Title**: `text-h1 font-semibold text-neutral-900` (48px)
   - **Introduction**: `text-body-lg text-neutral-600 mt-6 max-w-3xl`
   - **Spacing**: `py-section-lg` (128px vertical padding)

2. **Content Sections**
   - **Layout**: Max-width container (`max-w-content mx-auto`)
   - **Section spacing**: `py-section` between sections (96px)
   - **Headings**: `text-h2 font-semibold mb-6` (36px)
   - **Body text**: `text-body text-neutral-700 leading-relaxed`
   - **Sections**: Mission/Vision, Core Principles/Values, Team/Leadership, History/Timeline
   - **Dividers**: Subtle `border-t border-neutral-200` between sections

3. **Design Elements**
   - **White space**: Generous `py-section` spacing (96px)
   - **Typography**: Clear hierarchy with `text-h1`, `text-h2`, `text-body-lg`
   - **Line length**: Max 75 characters (`max-w-3xl` for text blocks)
   - **Visual breaks**: Subtle dividers or increased spacing

---

### Phase 5: Services Page ("What We Do / How We Work")

**Design Reference**: See Feature Cards and Component Patterns in `design-analysis.md`

1. **Hero Section**
   - **Title**: `text-h1 font-semibold text-neutral-900` (48px)
   - **Overview**: `text-body-lg text-neutral-600 mt-6 max-w-3xl`
   - **Spacing**: `py-section-lg` (128px vertical padding)

2. **Services/Features Grid**
   - **Layout**: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`
   - **Cards**: `border border-neutral-200 rounded-lg p-8`
   - **Hover**: `hover:shadow-lg hover:-translate-y-1 transition-all duration-300`
   - **Icon/Image**: Top of card, `mb-6`, simple line-style icons
   - **Title**: `text-h3 font-semibold mb-3` (24px)
   - **Description**: `text-body text-neutral-600`
   - **Spacing**: `py-section` around grid section

3. **Process/Approach Section** (optional)
   - **Layout**: Vertical timeline or numbered steps
   - **Numbers**: Large, bold numbers with `text-stat` or custom size
   - **Content**: `text-body-lg` for descriptions
   - **Spacing**: `py-section` between steps

4. **Technology Stack** (if applicable)
   - **Layout**: Grid of logos or text list
   - **Style**: Minimal, clean presentation
   - **Typography**: `text-small text-neutral-600`

---

### Phase 6: Contact Page

**Design Reference**: See Forms and Interactive Elements in `design-analysis.md`

1. **Contact Form**
   - **Layout**: `max-w-2xl` container, `space-y-6` between fields
   - **Inputs**: `border border-neutral-200 rounded-md px-4 py-3`
   - **Focus**: `focus:outline-none focus:ring-2 focus:ring-neutral-900`
   - **Labels**: `text-sm font-medium text-neutral-900 mb-2`
   - **Validation**: React Hook Form + Zod, error states with `border-error-500`
   - **Submit button**: Primary button style (`bg-neutral-900 text-white`)
   - **Success/error**: Subtle toast notifications or inline messages

2. **Contact Information**
   - **Layout**: Side-by-side with form or separate section
   - **Typography**: `text-body-lg` for content
   - **Spacing**: `py-section` around section
   - **Items**: Address, Phone, Email, Office hours
   - **Icons**: Simple line-style icons (optional)

3. **Map** (optional)
   - **Style**: Embedded Google Maps with minimal styling
   - **Size**: Full-width or constrained container
   - **Border**: `border border-neutral-200 rounded-lg`

---

### Phase 7: Styling & Polish

**Design Reference**: See all sections in `design-analysis.md` - this phase implements the complete design system

1. **Typography Implementation**
   - Import Inter font using `next/font/google`
   - Configure in `tailwind.config.ts` with custom font sizes
   - Set up font variables in root layout
   - Apply typography classes throughout components
   - Test line lengths and readability

2. **Color System Implementation**
   - Add complete color palette to Tailwind config (see Design Philosophy section)
   - Use neutral grays for backgrounds and text
   - Apply accent color sparingly (links, CTAs)
   - Ensure WCAG AA contrast compliance
   - Test color combinations

3. **Spacing System Implementation**
   - Apply consistent spacing scale (`py-section`, `gap-8`, etc.)
   - Use generous padding around sections (96-128px)
   - Maintain consistent component spacing
   - Test spacing on all breakpoints

4. **Animations & Interactions**
   - Add hover effects to cards, buttons, links
   - Implement smooth scroll behavior
   - Add fade-in animations with Framer Motion (optional, keep subtle)
   - Test all interactions for smoothness
   - Ensure animations don't distract from content

5. **Responsive Design Polish**
   - Test all breakpoints (mobile, tablet, desktop)
   - Adjust typography sizes for mobile
   - Optimize grid layouts for each breakpoint
   - Test navigation on mobile (hamburger menu)
   - Verify touch targets are 44x44px minimum

---

### Phase 8: Performance & SEO

1. **Next.js Optimizations**
   - Image optimization (next/image)
   - Automatic code splitting
   - Static generation where possible
   - Metadata API for SEO

2. **Performance**
   - Lazy load below-fold content
   - Optimize fonts (next/font)
   - Minimize JavaScript bundle
   - Enable compression

3. **SEO**
   - Meta tags (title, description, OG tags)
   - Structured data (JSON-LD)
   - Sitemap generation
   - robots.txt

4. **Accessibility**
   - Semantic HTML
   - ARIA labels where needed
   - Keyboard navigation
   - Focus indicators
   - Color contrast (WCAG AA)

---

### Phase 9: Testing

1. **Component Tests**
   - Test key components (Header, Footer, Forms)
   - Test user interactions
   - Test responsive behavior

2. **Integration Tests**
   - Test form submission
   - Test navigation
   - Test page routing

3. **E2E Tests** (optional)
   - Use Playwright or Cypress
   - Test critical user flows

---

### Phase 10: Deployment

1. **Pre-deployment Checklist**
   - [ ] All pages functional
   - [ ] Responsive on all devices
   - [ ] Performance optimized
   - [ ] SEO metadata complete
   - [ ] Accessibility checked
   - [ ] Tests passing
   - [ ] No console errors

2. **Deployment Options**
   - **Vercel** (recommended): Best Next.js integration
   - **Netlify**: Good alternative
   - **Self-hosted**: Docker + any Node.js host

3. **Post-deployment**
   - Monitor performance (Core Web Vitals)
   - Set up analytics (optional)
   - Monitor error tracking

---

## Complete Tailwind Configuration

### Full tailwind.config.ts Example

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1A1A1A',
          900: '#000000',
        },
        neutral: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262627',
          900: '#1A1A1A',
          950: '#0A0A0A',
        },
        accent: {
          DEFAULT: '#6366F1',
          50: '#EEF2FF',
          100: '#E0E7FF',
          500: '#6366F1',
          600: '#4F46E5',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      fontSize: {
        hero: ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '600' }],
        h1: ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
        h2: ['2.25rem', { lineHeight: '1.3', fontWeight: '600' }],
        h3: ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }],
        body: ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        small: ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
        xs: ['0.75rem', { lineHeight: '1.4', fontWeight: '400' }],
        stat: ['4rem', { lineHeight: '1', fontWeight: '700', letterSpacing: '-0.03em' }],
      },
      maxWidth: {
        container: '1280px',
        content: '1200px',
        narrow: '800px',
        wide: '1400px',
      },
      spacing: {
        section: '6rem',
        'section-lg': '8rem',
        'section-xl': '12rem',
      },
    },
  },
  plugins: [],
}

export default config
```

### Font Setup (app/layout.tsx)

```typescript
import { Inter } from 'next/font/google'
import { JetBrains_Mono } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
```

---

## Package.json Scripts

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:coverage": "vitest --coverage"
  }
}
```

---

## Key Dependencies

### Production
- `next` - React framework
- `react` & `react-dom` - React library
- `tailwindcss` - CSS framework
- `@radix-ui/*` - UI primitives (installed via shadcn/ui)
- `class-variance-authority` - For component variants (shadcn/ui)
- `clsx` & `tailwind-merge` - Class name utilities (shadcn/ui)
- `framer-motion` - Animations (optional)
- `react-hook-form` - Form handling
- `zod` - Schema validation
- `@hookform/resolvers` - Zod resolver for RHF

### Development
- `typescript` - Type safety
- `@types/node` & `@types/react` - TypeScript types
- `vitest` - Testing framework
- `@testing-library/react` - React testing utilities
- `@testing-library/jest-dom` - DOM matchers
- `eslint` & `eslint-config-next` - Linting

---

## Performance Targets

- **Lighthouse Score**: 90+ across all categories
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Time to Interactive**: < 3.5s
- **Cumulative Layout Shift**: < 0.1

---

## Next Steps

1. Review and approve this plan
2. Set up the project structure
3. Begin Phase 1 (Project Setup)
4. Iterate through phases, testing as you go
5. Deploy and monitor

---

## Notes

- **Bun compatibility**: Next.js works great with Bun. Use `bun` commands instead of `npm`.
- **TypeScript**: Highly recommended for type safety and better DX.
- **shadcn/ui**: We're using shadcn/ui for all UI components. Components are copied into the project, so you can customize them as needed. Start with button, card, input, form components.
- **TanStack Query**: Only add if you need dynamic data fetching (likely not needed for static landing page).
- **Animations**: Keep them subtle. Framer Motion is optional but recommended for polish.

---

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Bun Documentation](https://bun.sh/docs)
- [Vitest Documentation](https://vitest.dev/)
- [React Hook Form](https://react-hook-form.com/)
- [shadcn/ui](https://ui.shadcn.com/)

