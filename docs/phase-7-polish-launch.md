# Phase 7: Polish & Launch
## Final Polish, Optimization, Testing, and Deployment

**Goal**: Polish the site, optimize performance, add SEO, test everything, and deploy to production.

**Reference**: See Performance & UX, Accessibility sections in `design-analysis.md`.

**Prerequisites**: Phases 1-6 must be complete.

---

## Part 1: Animations & Micro-interactions

### Step 1: Add Hover Effects

Ensure all interactive elements have hover effects:

- **Cards**: `hover:shadow-lg hover:-translate-y-1 transition-all duration-300`
- **Links**: `hover:text-neutral-900 transition-colors duration-200`
- **Buttons**: `hover:bg-neutral-800 transition-colors duration-200`

### Step 2: Add Scroll Animations (Optional)

Install Framer Motion if not already installed:

```bash
bun add framer-motion
```

Add fade-in animations to sections:

```typescript
'use client'

import { motion } from 'framer-motion'

export function Section({ children }: { children: React.ReactNode }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.section>
  )
}
```

**Keep animations subtle** - no flashy effects.

---

## Part 2: Responsive Design Polish

### Step 1: Test All Breakpoints

Test on:
- Mobile (< 640px)
- Tablet (768px - 1024px)
- Desktop (> 1024px)

### Step 2: Adjust Typography for Mobile

Update hero text to be responsive:

```typescript
<h1 className="text-4xl md:text-hero font-semibold">
```

### Step 3: Optimize Grid Layouts

Ensure grids stack properly on mobile:

```typescript
grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
```

### Step 4: Verify Touch Targets

All interactive elements should be at least 44x44px on mobile.

---

## Part 3: Performance Optimization

### Step 1: Optimize Images

Use Next.js Image component:

```typescript
import Image from 'next/image'

<Image
  src="/images/hero.jpg"
  alt="Description"
  width={1200}
  height={800}
  priority // for above-fold images
  placeholder="blur" // optional
/>
```

### Step 2: Optimize Fonts

Fonts are already optimized with `next/font/google` and `display: 'swap'`.

### Step 3: Lazy Load Components

Lazy load below-fold components:

```typescript
import dynamic from 'next/dynamic'

const Stats = dynamic(() => import('@/components/sections/Stats'), {
  ssr: false,
})
```

### Step 4: Check Bundle Size

```bash
bun run build
```

Check `.next/analyze` or use `@next/bundle-analyzer`.

---

## Part 4: SEO Implementation

### Step 1: Update Metadata

Update `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: {
    default: 'Your Site Name',
    template: '%s | Your Site Name',
  },
  description: 'Your site description',
  keywords: ['keyword1', 'keyword2'],
  authors: [{ name: 'Your Name' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yoursite.com',
    siteName: 'Your Site Name',
    title: 'Your Site Name',
    description: 'Your site description',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Your Site Name',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your Site Name',
    description: 'Your site description',
    images: ['/og-image.jpg'],
  },
}
```

### Step 2: Add Structured Data

Create `lib/structured-data.ts`:

```typescript
export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Your Site Name',
    url: 'https://yoursite.com',
    logo: 'https://yoursite.com/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-234-567-8900',
      contactType: 'customer service',
    },
  }
}
```

Add to layout:

```typescript
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(getOrganizationSchema()),
  }}
/>
```

### Step 3: Create Sitemap

Create `app/sitemap.ts`:

```typescript
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://yoursite.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://yoursite.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://yoursite.com/services',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://yoursite.com/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}
```

### Step 4: Create robots.txt

Create `app/robots.ts`:

```typescript
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: 'https://yoursite.com/sitemap.xml',
  }
}
```

---

## Part 5: Accessibility

### Step 1: Semantic HTML

Ensure all components use semantic HTML:
- `<header>`, `<nav>`, `<main>`, `<footer>`
- `<section>`, `<article>`, `<aside>`
- Proper heading hierarchy (h1 → h2 → h3)

### Step 2: ARIA Labels

Add ARIA labels where needed:

```typescript
<button aria-label="Toggle menu">
<nav aria-label="Main navigation">
```

### Step 3: Keyboard Navigation

Test keyboard navigation:
- Tab through all interactive elements
- Enter/Space activate buttons
- Escape closes modals/menus

### Step 4: Focus Indicators

Ensure focus indicators are visible:

```css
/* Already handled by Tailwind focus:ring-2 */
```

### Step 5: Color Contrast

Verify WCAG AA compliance (4.5:1 ratio):
- Text on backgrounds
- Links
- Buttons

Use tools like WebAIM Contrast Checker.

---

## Part 6: Testing

### Step 1: Component Tests

Create tests for key components:

Create `tests/components/Header.test.tsx`:

```typescript
import { render, screen } from '@testing-library/react'
import { Header } from '@/components/layout/Header'

describe('Header', () => {
  it('renders navigation links', () => {
    render(<Header />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
  })
})
```

### Step 2: Form Tests

Test form validation:

```typescript
import { render, screen, fireEvent } from '@testing-library/react'
import { ContactForm } from '@/components/forms/ContactForm'

describe('ContactForm', () => {
  it('shows validation errors for empty fields', async () => {
    render(<ContactForm />)
    fireEvent.click(screen.getByText('Send Message'))
    expect(await screen.findByText(/name must be/i)).toBeInTheDocument()
  })
})
```

### Step 3: Integration Tests

Test page routing and navigation.

### Step 4: E2E Tests (Optional)

Set up Playwright or Cypress for E2E tests.

---

## Part 7: Deployment

### Step 1: Pre-deployment Checklist

- [ ] All pages functional
- [ ] Responsive on all devices
- [ ] Performance optimized
- [ ] SEO metadata complete
- [ ] Accessibility checked
- [ ] Tests passing
- [ ] No console errors
- [ ] Images optimized
- [ ] Fonts loading correctly

### Step 2: Deploy to Vercel

**Option 1: Vercel CLI**

```bash
bun add -g vercel
vercel
```

**Option 2: GitHub Integration**

1. Push code to GitHub
2. Connect repo to Vercel
3. Vercel auto-deploys

**Option 3: Vercel Dashboard**

1. Go to vercel.com
2. Import project
3. Configure settings
4. Deploy

### Step 3: Environment Variables

Set environment variables in Vercel dashboard if needed:
- API keys
- Database URLs
- Email service keys

### Step 4: Custom Domain

Configure custom domain in Vercel settings.

---

## Part 8: Post-Deployment

### Step 1: Monitor Performance

- Check Core Web Vitals
- Monitor Lighthouse scores
- Use Vercel Analytics (optional)

### Step 2: Set Up Error Tracking

Use Sentry or similar:

```bash
bun add @sentry/nextjs
```

### Step 3: Set Up Analytics (Optional)

Add Google Analytics or Plausible:

```typescript
// app/layout.tsx
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
/>
```

---

## Performance Targets

- **Lighthouse Score**: 90+ across all categories
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Time to Interactive**: < 3.5s
- **Cumulative Layout Shift**: < 0.1

---

## Checklist

### Animations
- [ ] Hover effects on all interactive elements
- [ ] Scroll animations added (optional, keep subtle)
- [ ] Transitions smooth and not distracting

### Responsive
- [ ] Mobile design tested and polished
- [ ] Tablet design tested and polished
- [ ] Desktop design tested and polished
- [ ] Typography scales properly
- [ ] Touch targets are 44x44px minimum

### Performance
- [ ] Images optimized with next/image
- [ ] Fonts optimized
- [ ] Bundle size checked
- [ ] Lazy loading implemented where appropriate

### SEO
- [ ] Metadata added to all pages
- [ ] Open Graph tags added
- [ ] Twitter cards added
- [ ] Structured data added
- [ ] Sitemap created
- [ ] robots.txt created

### Accessibility
- [ ] Semantic HTML used
- [ ] ARIA labels added
- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] Color contrast verified

### Testing
- [ ] Component tests written
- [ ] Form tests written
- [ ] Integration tests written
- [ ] E2E tests written (optional)
- [ ] All tests passing

### Deployment
- [ ] Pre-deployment checklist complete
- [ ] Deployed to Vercel
- [ ] Environment variables set
- [ ] Custom domain configured
- [ ] Performance monitored
- [ ] Error tracking set up

---

## Troubleshooting

**Issue**: Lighthouse score low
- **Solution**: Optimize images, reduce JavaScript bundle, use code splitting

**Issue**: SEO not working
- **Solution**: Check metadata is exported correctly, verify sitemap.xml is accessible

**Issue**: Build fails
- **Solution**: Check for TypeScript errors, missing dependencies, environment variables

**Issue**: Deploy fails
- **Solution**: Check build logs, verify all dependencies are in package.json

---

## Congratulations!

Your landing page is now complete and deployed. Monitor performance, gather feedback, and iterate as needed.

