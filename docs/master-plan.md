# Master Plan
## Landing Page Development - React + Tailwind + Bun

**Reference Documents:**
- `design-analysis.md` - Complete design analysis of D.E. Shaw, Millennium Management, and Stripe
- `phase-1-setup.md` - Project initialization and tooling setup
- `phase-2-design-system.md` - Design system foundation (colors, typography, spacing)
- `phase-3-layout.md` - Core layout components (Header, Footer)
- `phase-4-home-page.md` - Home page implementation
- `phase-5-content-pages.md` - About and Services pages
- `phase-6-contact.md` - Contact page with form
- `phase-7-polish-launch.md` - Polish, optimization, testing, and deployment

---

## Project Overview

Building a **sophisticated, minimalist landing page** inspired by D.E. Shaw, Millennium Management, and Stripe. The site will have a professional, refined aesthetic with generous white space, elegant typography, and subtle interactions.

**Key Pages:**
- Home
- About (Who We Are)
- Services (What We Do / How We Work)
- Contact

---

## Technology Stack

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

### Why This Stack?

- **Next.js**: Best for SEO with SSR/SSG, excellent performance optimizations
- **Tailwind CSS**: Rapid development, consistent design system
- **shadcn/ui**: Beautiful, accessible components that match our aesthetic
- **Bun**: Fastest package manager and runtime
- **Vitest**: Fast testing framework with great React support

---

## Design Philosophy

**Core Principles:**
1. **Clarity** - Every element serves a purpose
2. **Professionalism** - Trustworthy and refined aesthetic
3. **Elegance** - Generous white space and refined typography
4. **Performance** - Fast loading is part of the experience

**Key Mantra**: Less is more. Remove everything that doesn't add value.

**Reference**: See `design-analysis.md` for complete design analysis.

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
│   ├── ui/                      # Reusable UI components (shadcn/ui)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── ...
│   ├── layout/
│   │   ├── Header.tsx           # Navigation
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Stats.tsx            # Metrics display
│   │   └── ...
│   └── forms/
│       └── ContactForm.tsx
├── lib/
│   ├── utils.ts                 # Utility functions
│   └── constants.ts             # Site constants
├── public/
│   └── images/
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

## Implementation Phases

### Phase 1: Project Setup
**File**: `phase-1-setup.md`

Initialize the repository, install dependencies, and configure all tools:
- Next.js project initialization with Bun
- Install core dependencies (Framer Motion, React Hook Form, Zod)
- Set up Vitest for testing
- Configure shadcn/ui
- Basic project structure

**Deliverable**: Working Next.js project with all tools configured

---

### Phase 2: Design System Foundation
**File**: `phase-2-design-system.md`

Establish the complete design system before building components:
- Complete Tailwind configuration
- Color palette (neutral grays + accent)
- Typography system (Inter font, custom sizes)
- Spacing system (section spacing, grid gaps)
- Font setup with next/font

**Deliverable**: Complete design system ready to use

---

### Phase 3: Core Layout
**File**: `phase-3-layout.md`

Build the shell of the site:
- Header/Navigation component (sticky, mobile menu)
- Footer component (multi-column, links)
- Root layout setup
- Navigation routing

**Deliverable**: Site shell with navigation working

---

### Phase 4: Home Page
**File**: `phase-4-home-page.md`

Build the main landing page:
- Hero section (large headline, minimal copy)
- Stats/Metrics section (Millennium-inspired)
- Preview sections (cards linking to About/Services)

**Deliverable**: Complete home page

---

### Phase 5: Content Pages
**File**: `phase-5-content-pages.md`

Build About and Services pages:
- About page (Who We Are) - Mission, Values, Principles
- Services page (What We Do) - Feature cards, process section

**Deliverable**: About and Services pages complete

---

### Phase 6: Contact Page
**File**: `phase-6-contact.md`

Build the contact page:
- Contact form (React Hook Form + Zod validation)
- Contact information display
- Form submission handling
- Optional map integration

**Deliverable**: Functional contact page with form

---

### Phase 7: Polish & Launch
**File**: `phase-7-polish-launch.md`

Final polish and deployment:
- Animations and micro-interactions
- Responsive design refinement
- Performance optimization
- SEO implementation
- Accessibility audit
- Testing (component, integration, E2E)
- Deployment to Vercel

**Deliverable**: Production-ready site deployed

---

## Design System Overview

### Color Palette
- **Neutral grays**: `neutral-50` through `neutral-950` for backgrounds and text
- **Accent**: `accent-500` (#6366F1) used sparingly for links/CTAs
- **High contrast**: WCAG AA compliant

### Typography
- **Font**: Inter (Google Fonts)
- **Hero**: 72px, semibold
- **H1**: 48px, semibold
- **H2**: 36px, semibold
- **Body**: 16-18px, regular
- **Stats**: 64px, bold

### Spacing
- **Section spacing**: 96px (standard), 128px (large), 192px (hero)
- **Container width**: 1280px max
- **Grid gaps**: 32px (cards), 48px (sections)

### Components
- **Cards**: Subtle borders, hover lift effect
- **Buttons**: Minimal styling, no heavy shadows
- **Forms**: Clean inputs with subtle borders
- **Navigation**: Sticky header, mobile hamburger menu

---

## Performance Targets

- **Lighthouse Score**: 90+ across all categories
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Time to Interactive**: < 3.5s
- **Cumulative Layout Shift**: < 0.1

---

## Key Dependencies

### Production
- `next` - React framework
- `react` & `react-dom` - React library
- `tailwindcss` - CSS framework
- `@radix-ui/*` - UI primitives (via shadcn/ui)
- `framer-motion` - Animations
- `react-hook-form` - Form handling
- `zod` - Schema validation

### Development
- `typescript` - Type safety
- `vitest` - Testing framework
- `@testing-library/react` - React testing utilities
- `eslint` & `eslint-config-next` - Linting

---

## Getting Started

1. **Start with Phase 1**: Follow `phase-1-setup.md` to initialize the project
2. **Work sequentially**: Each phase builds on the previous one
3. **Reference design analysis**: Check `design-analysis.md` for design guidance
4. **Test as you go**: Run tests after each phase

---

## Notes

- **Bun compatibility**: Next.js works great with Bun. Use `bun` commands instead of `npm`.
- **TypeScript**: Highly recommended for type safety and better DX.
- **shadcn/ui**: Components are copied into the project, so you can customize them as needed.
- **Animations**: Keep them subtle. Framer Motion is optional but recommended for polish.
- **Design reference**: Always refer to `design-analysis.md` when implementing design elements.

---

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Bun Documentation](https://bun.sh/docs)
- [Vitest Documentation](https://vitest.dev/)
- [React Hook Form](https://react-hook-form.com/)
- [shadcn/ui](https://ui.shadcn.com/)

