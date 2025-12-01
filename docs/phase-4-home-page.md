# Phase 4: Home Page
## Build Hero, Stats, and Preview Sections

**Goal**: Create a compelling home page with hero section, stats/metrics display, and preview sections linking to other pages.

**Reference**: See Hero Section and Stats/Metrics Display in `design-analysis.md`.

**Prerequisites**: Phases 1-3 must be complete.

---

## Step 1: Create Hero Component

Create `components/sections/Hero.tsx`:

```typescript
export function Hero() {
  return (
    <section className="min-h-[80vh] flex items-center py-section-xl px-6">
      <div className="mx-auto max-w-container w-full">
        <div className="max-w-4xl">
          <h1 className="text-hero font-semibold text-neutral-900">
            We are the D. E. Shaw group
          </h1>
          <p className="mt-6 text-body-lg text-neutral-600 max-w-3xl">
            A global investment and technology development firm. Academic culture. Real-world challenges.
            The excitement of a startup with the resources of an industry leader.
          </p>
        </div>
      </div>
    </section>
  )
}
```

**Alternative - Centered layout:**

```typescript
export function Hero() {
  return (
    <section className="min-h-screen flex items-center py-section-xl px-6">
      <div className="mx-auto max-w-container w-full text-center">
        <h1 className="text-hero font-semibold text-neutral-900 mx-auto max-w-4xl">
          We are the D. E. Shaw group
        </h1>
        <p className="mt-6 text-body-lg text-neutral-600 mx-auto max-w-3xl">
          A global investment and technology development firm.
        </p>
      </div>
    </section>
  )
}
```

---

## Step 2: Create Stats Component

Create `components/sections/Stats.tsx`:

```typescript
interface Stat {
  value: string
  label: string
}

interface StatsProps {
  stats: Stat[]
}

export function Stats({ stats }: StatsProps) {
  return (
    <section className="py-section px-6 bg-neutral-50">
      <div className="mx-auto max-w-container">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-stat font-bold text-neutral-900">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-neutral-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

---

## Step 3: Create Preview Cards Component

Create `components/sections/PreviewCards.tsx`:

```typescript
import Link from 'next/link'
import { Card } from '@/components/ui/card'

interface PreviewCard {
  title: string
  description: string
  href: string
}

interface PreviewCardsProps {
  cards: PreviewCard[]
}

export function PreviewCards({ cards }: PreviewCardsProps) {
  return (
    <section className="py-section px-6">
      <div className="mx-auto max-w-container">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <Link key={index} href={card.href}>
              <Card className="border border-neutral-200 p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <h3 className="text-h3 font-semibold mb-3 text-neutral-900">
                  {card.title}
                </h3>
                <p className="text-body text-neutral-600">
                  {card.description}
                </p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
```

---

## Step 4: Update Home Page

Update `app/page.tsx`:

```typescript
import { Hero } from '@/components/sections/Hero'
import { Stats } from '@/components/sections/Stats'
import { PreviewCards } from '@/components/sections/PreviewCards'

const stats = [
  { value: '35+', label: 'Years of Evolution' },
  { value: '$81BN+', label: 'AUM' },
  { value: '6,400+', label: 'Employees Globally' },
  { value: '140+', label: 'Employee Locations' },
]

const previewCards = [
  {
    title: 'Who We Are',
    description: 'Learn about our mission, values, and the people behind our success.',
    href: '/about',
  },
  {
    title: 'What We Do',
    description: 'Discover our approach, services, and how we deliver value.',
    href: '/services',
  },
  {
    title: 'Contact Us',
    description: 'Get in touch with our team to learn more.',
    href: '/contact',
  },
]

export default function Home() {
  return (
    <>
      <Hero />
      <Stats stats={stats} />
      <PreviewCards cards={previewCards} />
    </>
  )
}
```

---

## Step 5: Add Scroll Indicator (Optional)

If you want a scroll indicator on the hero:

Create `components/sections/ScrollIndicator.tsx`:

```typescript
'use client'

import { ChevronDown } from 'lucide-react'

export function ScrollIndicator() {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    })
  }

  return (
    <button
      onClick={scrollToNext}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      aria-label="Scroll down"
    >
      <ChevronDown className="h-6 w-6 text-neutral-600" />
    </button>
  )
}
```

Add to Hero component:

```typescript
import { ScrollIndicator } from './ScrollIndicator'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center py-section-xl px-6">
      {/* ... hero content ... */}
      <ScrollIndicator />
    </section>
  )
}
```

---

## Step 6: Add Optional Background Image

If you want a background image on the hero:

```typescript
export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center py-section-xl px-6">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-neutral-900/40" />
        <img
          src="/images/hero-background.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      <div className="relative mx-auto max-w-container w-full">
        <div className="max-w-4xl">
          <h1 className="text-hero font-semibold text-white">
            We are the D. E. Shaw group
          </h1>
          <p className="mt-6 text-body-lg text-neutral-100 max-w-3xl">
            A global investment and technology development firm.
          </p>
        </div>
      </div>
    </section>
  )
}
```

**Note**: Use Next.js Image component for optimization:

```typescript
import Image from 'next/image'

<Image
  src="/images/hero-background.jpg"
  alt=""
  fill
  className="object-cover"
  priority
/>
```

---

## Step 7: Add Animations (Optional)

Add subtle fade-in animations with Framer Motion:

```typescript
'use client'

import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="min-h-screen flex items-center py-section-xl px-6">
      <div className="mx-auto max-w-container w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <h1 className="text-hero font-semibold text-neutral-900">
            We are the D. E. Shaw group
          </h1>
          <p className="mt-6 text-body-lg text-neutral-600 max-w-3xl">
            A global investment and technology development firm.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
```

---

## Checklist

- [ ] Hero component created with large headline
- [ ] Hero has proper spacing (`py-section-xl`)
- [ ] Stats component created with grid layout
- [ ] Stats display large numbers (64px) with labels
- [ ] Preview cards component created
- [ ] Cards have hover effects (lift and shadow)
- [ ] Home page integrates all sections
- [ ] Responsive design works (mobile, tablet, desktop)
- [ ] Scroll indicator added (optional)
- [ ] Animations added (optional)
- [ ] Background image added (optional)

---

## Design Guidelines

### Hero Section
- **Height**: `min-h-[80vh]` or `min-h-screen`
- **Headline**: `text-hero font-semibold` (72px)
- **Subheading**: `text-body-lg text-neutral-600` (18px)
- **Spacing**: `py-section-xl` (192px vertical padding)
- **Alignment**: Left-aligned or centered

### Stats Section
- **Layout**: `grid grid-cols-2 md:grid-cols-4`
- **Numbers**: `text-stat font-bold` (64px)
- **Labels**: `text-sm text-neutral-600`
- **Background**: Optional `bg-neutral-50`
- **Spacing**: `py-section` (96px)

### Preview Cards
- **Layout**: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`
- **Cards**: `border border-neutral-200 rounded-lg p-8`
- **Hover**: `hover:shadow-lg hover:-translate-y-1 transition-all duration-300`
- **Title**: `text-h3 font-semibold` (24px)
- **Description**: `text-body text-neutral-600`

---

## Next Steps

Once Phase 4 is complete, proceed to **Phase 5: Content Pages** (`phase-5-content-pages.md`) to build the About and Services pages.

---

## Troubleshooting

**Issue**: Hero text too large on mobile
- **Solution**: Add responsive text sizes: `text-4xl md:text-hero`

**Issue**: Stats grid breaks on mobile
- **Solution**: Ensure `grid-cols-2` is set for mobile, `md:grid-cols-4` for desktop

**Issue**: Cards not hovering properly
- **Solution**: Make sure Card component accepts className prop and passes it through

