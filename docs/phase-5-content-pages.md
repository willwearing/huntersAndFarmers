# Phase 5: Content Pages
## Build About and Services Pages

**Goal**: Create the About (Who We Are) and Services (What We Do) pages with proper content structure and styling.

**Reference**: See Content Sections, Feature Cards, and Typography in `design-analysis.md`.

**Prerequisites**: Phases 1-4 must be complete.

---

## Step 1: Create About Page

Create `app/about/page.tsx`:

```typescript
export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="py-section-lg px-6">
        <div className="mx-auto max-w-content">
          <h1 className="text-h1 font-semibold text-neutral-900">
            Who We Are
          </h1>
          <p className="mt-6 max-w-3xl text-body-lg text-neutral-600">
            We are a global investment and technology development firm.
            Academic culture. Real-world challenges. The excitement of a startup
            with the resources of an industry leader.
          </p>
        </div>
      </section>

      <section className="py-section px-6 border-t border-neutral-200">
        <div className="mx-auto max-w-content">
          <h2 className="text-h2 font-semibold mb-6 text-neutral-900">
            Our Mission
          </h2>
          <p className="max-w-3xl text-body text-neutral-700 leading-relaxed">
            Our mission is to deliver exceptional results for our clients through
            innovative approaches, rigorous analysis, and a commitment to excellence.
            We combine academic rigor with real-world expertise to solve complex challenges.
          </p>
        </div>
      </section>

      <section className="py-section px-6 border-t border-neutral-200">
        <div className="mx-auto max-w-content">
          <h2 className="text-h2 font-semibold mb-6 text-neutral-900">
            Core Principles
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-h3 font-semibold mb-3 text-neutral-900">
                Excellence
              </h3>
              <p className="max-w-3xl text-body text-neutral-700 leading-relaxed">
                We strive for excellence in everything we do, setting high standards
                and continuously improving our processes and outcomes.
              </p>
            </div>
            <div>
              <h3 className="text-h3 font-semibold mb-3 text-neutral-900">
                Innovation
              </h3>
              <p className="max-w-3xl text-body text-neutral-700 leading-relaxed">
                We embrace innovation and new technologies to stay ahead of the curve
                and deliver cutting-edge solutions.
              </p>
            </div>
            <div>
              <h3 className="text-h3 font-semibold mb-3 text-neutral-900">
                Integrity
              </h3>
              <p className="max-w-3xl text-body text-neutral-700 leading-relaxed">
                We conduct our business with the highest ethical standards, building
                trust through transparency and accountability.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
```

---

## Step 2: Create Services Page

Create `app/services/page.tsx`:

```typescript
import { Card } from '@/components/ui/card'

const services = [
  {
    title: 'Investment Approach',
    description: 'Our systematic approach combines quantitative analysis with fundamental research to identify opportunities.',
  },
  {
    title: 'Technology',
    description: 'We leverage cutting-edge technology and data science to drive decision-making and optimize performance.',
  },
  {
    title: 'Risk Management',
    description: 'Comprehensive risk management frameworks ensure we protect capital while pursuing opportunities.',
  },
  {
    title: 'Entrepreneurship',
    description: 'We foster an entrepreneurial culture that encourages innovation and creative problem-solving.',
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <section className="py-section-lg px-6">
        <div className="mx-auto max-w-content">
          <h1 className="text-h1 font-semibold text-neutral-900">
            What We Do
          </h1>
          <p className="mt-6 max-w-3xl text-body-lg text-neutral-600">
            We deliver exceptional results through a combination of innovative approaches,
            rigorous analysis, and cutting-edge technology.
          </p>
        </div>
      </section>

      <section className="py-section px-6 border-t border-neutral-200">
        <div className="mx-auto max-w-container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border border-neutral-200 p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <h3 className="text-h3 font-semibold mb-3 text-neutral-900">
                  {service.title}
                </h3>
                <p className="text-body text-neutral-600">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-section px-6 border-t border-neutral-200">
        <div className="mx-auto max-w-content">
          <h2 className="text-h2 font-semibold mb-6 text-neutral-900">
            How We Work
          </h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-900 text-white text-h3 font-bold">
                  1
                </div>
              </div>
              <div>
                <h3 className="text-h3 font-semibold mb-2 text-neutral-900">
                  Research & Analysis
                </h3>
                <p className="text-body text-neutral-700 leading-relaxed">
                  We begin with comprehensive research and rigorous analysis to understand
                  the landscape and identify opportunities.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-900 text-white text-h3 font-bold">
                  2
                </div>
              </div>
              <div>
                <h3 className="text-h3 font-semibold mb-2 text-neutral-900">
                  Strategy Development
                </h3>
                <p className="text-body text-neutral-700 leading-relaxed">
                  We develop tailored strategies that align with client objectives and
                  market conditions.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-900 text-white text-h3 font-bold">
                  3
                </div>
              </div>
              <div>
                <h3 className="text-h3 font-semibold mb-2 text-neutral-900">
                  Execution & Monitoring
                </h3>
                <p className="text-body text-neutral-700 leading-relaxed">
                  We execute with precision and continuously monitor performance, making
                  adjustments as needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
```

---

## Step 3: Add Page Metadata

Update both pages with proper metadata:

**About page** (`app/about/page.tsx`):

```typescript
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | Your Site Name',
  description: 'Learn about our mission, values, and the people behind our success.',
}

export default function AboutPage() {
  // ... component code
}
```

**Services page** (`app/services/page.tsx`):

```typescript
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services | Your Site Name',
  description: 'Discover our approach, services, and how we deliver value.',
}

export default function ServicesPage() {
  // ... component code
}
```

---

## Step 4: Create Reusable Section Component (Optional)

To reduce repetition, create a reusable section component:

Create `components/sections/Section.tsx`:

```typescript
import { cn } from '@/lib/utils'

interface SectionProps {
  children: React.ReactNode
  className?: string
  containerClassName?: string
  withBorder?: boolean
}

export function Section({
  children,
  className,
  containerClassName,
  withBorder = false,
}: SectionProps) {
  return (
    <section
      className={cn(
        'py-section px-6',
        withBorder && 'border-t border-neutral-200',
        className
      )}
    >
      <div className={cn('mx-auto max-w-content', containerClassName)}>
        {children}
      </div>
    </section>
  )
}
```

Use it in pages:

```typescript
import { Section } from '@/components/sections/Section'

<Section>
  <h2 className="text-h2 font-semibold mb-6">Our Mission</h2>
  <p className="max-w-3xl text-body text-neutral-700">
    Content here...
  </p>
</Section>
```

---

## Step 5: Add Icons to Services (Optional)

Install lucide-react if not already installed:

```bash
bun add lucide-react
```

Add icons to service cards:

```typescript
import { TrendingUp, Code, Shield, Lightbulb } from 'lucide-react'

const services = [
  {
    title: 'Investment Approach',
    description: '...',
    icon: TrendingUp,
  },
  {
    title: 'Technology',
    description: '...',
    icon: Code,
  },
  {
    title: 'Risk Management',
    description: '...',
    icon: Shield,
  },
  {
    title: 'Entrepreneurship',
    description: '...',
    icon: Lightbulb,
  },
]

// In component:
<Card>
  <Icon className="mb-6 h-8 w-8 text-neutral-600" />
  <h3>...</h3>
  <p>...</p>
</Card>
```

---

## Checklist

- [ ] About page created with proper structure
- [ ] About page has hero section with title and intro
- [ ] About page has content sections (Mission, Principles, etc.)
- [ ] Services page created with proper structure
- [ ] Services page has hero section
- [ ] Services page has service cards grid
- [ ] Services page has "How We Work" section with numbered steps
- [ ] Page metadata added for SEO
- [ ] Responsive design works on all breakpoints
- [ ] Typography hierarchy is correct
- [ ] Spacing is consistent (py-section, py-section-lg)
- [ ] Icons added to services (optional)
- [ ] Reusable Section component created (optional)

---

## Design Guidelines

### Page Structure
- **Hero**: `py-section-lg` (128px padding), `text-h1` title
- **Sections**: `py-section` (96px padding), `border-t border-neutral-200` dividers
- **Container**: `max-w-content` (1200px) for text-heavy content
- **Headings**: `text-h2` (36px) for section headers, `text-h3` (24px) for subsections

### Content Sections
- **Line length**: Max 75 characters (`max-w-3xl`)
- **Body text**: `text-body text-neutral-700 leading-relaxed`
- **Spacing**: `space-y-6` or `space-y-8` between items

### Service Cards
- **Layout**: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`
- **Cards**: `border border-neutral-200 rounded-lg p-8`
- **Hover**: `hover:shadow-lg hover:-translate-y-1 transition-all duration-300`

---

## Next Steps

Once Phase 5 is complete, proceed to **Phase 6: Contact Page** (`phase-6-contact.md`) to build the contact form and contact information.

---

## Troubleshooting

**Issue**: Content too wide on large screens
- **Solution**: Use `max-w-content` or `max-w-3xl` for text blocks

**Issue**: Sections too close together
- **Solution**: Ensure `py-section` (96px) spacing between sections

**Issue**: Service cards not aligning properly
- **Solution**: Check grid classes and ensure cards have consistent height

