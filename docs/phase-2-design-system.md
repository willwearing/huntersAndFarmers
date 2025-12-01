# Phase 2: Design System Foundation
## Configure Colors, Typography, and Spacing

**Goal**: Establish the complete design system before building components. This ensures consistency across all pages.

**Reference**: See `design-analysis.md` for design inspiration and `master-plan.md` for design system overview.

---

## Step 1: Complete Tailwind Configuration

Update `tailwind.config.ts` with the full design system:

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
        success: '#10B981',
        error: '#EF4444',
        warning: '#F59E0B',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      fontSize: {
        hero: ['4.5rem', {
          lineHeight: '1.1',
          letterSpacing: '-0.02em',
          fontWeight: '600'
        }],
        h1: ['3rem', {
          lineHeight: '1.2',
          letterSpacing: '-0.01em',
          fontWeight: '600'
        }],
        h2: ['2.25rem', {
          lineHeight: '1.3',
          fontWeight: '600'
        }],
        h3: ['1.5rem', {
          lineHeight: '1.4',
          fontWeight: '600'
        }],
        'body-lg': ['1.125rem', {
          lineHeight: '1.6',
          fontWeight: '400'
        }],
        body: ['1rem', {
          lineHeight: '1.6',
          fontWeight: '400'
        }],
        small: ['0.875rem', {
          lineHeight: '1.5',
          fontWeight: '400'
        }],
        xs: ['0.75rem', {
          lineHeight: '1.4',
          fontWeight: '400'
        }],
        stat: ['4rem', {
          lineHeight: '1',
          fontWeight: '700',
          letterSpacing: '-0.03em'
        }],
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

---

## Step 2: Set Up Fonts

Update `app/layout.tsx` to import and configure fonts:

```typescript
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Your Site Name',
  description: 'Your site description',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
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

## Step 3: Update Global Styles

Update `app/globals.css` (or `styles/globals.css`):

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }

  body {
    @apply bg-white text-neutral-900;
  }
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}
```

---

## Step 4: Create Design Tokens File (Optional)

Create `lib/design-tokens.ts` for easy reference:

```typescript
export const designTokens = {
  colors: {
    primary: '#1A1A1A',
    neutral: {
      50: '#FAFAFA',
      100: '#F5F5F5',
      200: '#E5E5E5',
      900: '#1A1A1A',
    },
    accent: '#6366F1',
  },
  spacing: {
    section: '6rem',
    sectionLarge: '8rem',
    sectionXLarge: '12rem',
  },
  typography: {
    hero: '4.5rem',
    h1: '3rem',
    h2: '2.25rem',
    h3: '1.5rem',
    body: '1rem',
    bodyLarge: '1.125rem',
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
}
```

---

## Step 5: Test Design System

Create a test page to verify the design system works:

Create `app/test-design/page.tsx`:

```typescript
export default function TestDesignPage() {
  return (
    <div className="min-h-screen py-section-xl px-6">
      <div className="mx-auto max-w-container">
        <h1 className="text-hero font-semibold text-neutral-900 mb-6">
          Design System Test
        </h1>

        <div className="space-y-section">
          <section>
            <h2 className="text-h2 font-semibold mb-4">Typography</h2>
            <p className="text-hero font-semibold">Hero (72px)</p>
            <p className="text-h1 font-semibold">H1 (48px)</p>
            <p className="text-h2 font-semibold">H2 (36px)</p>
            <p className="text-h3 font-semibold">H3 (24px)</p>
            <p className="text-body-lg">Body Large (18px)</p>
            <p className="text-body">Body (16px)</p>
            <p className="text-small">Small (14px)</p>
            <p className="text-stat font-bold">Stat (64px)</p>
          </section>

          <section>
            <h2 className="text-h2 font-semibold mb-4">Colors</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-neutral-50 p-4 border border-neutral-200">
                <p className="text-xs">neutral-50</p>
              </div>
              <div className="bg-neutral-100 p-4 border border-neutral-200">
                <p className="text-xs">neutral-100</p>
              </div>
              <div className="bg-neutral-900 p-4 text-white">
                <p className="text-xs">neutral-900</p>
              </div>
              <div className="bg-accent-500 p-4 text-white">
                <p className="text-xs">accent-500</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-h2 font-semibold mb-4">Spacing</h2>
            <div className="space-y-4">
              <div className="bg-neutral-100 p-section border border-neutral-200">
                <p>Section spacing (96px)</p>
              </div>
              <div className="bg-neutral-100 p-section-lg border border-neutral-200">
                <p>Section large (128px)</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
```

Visit `/test-design` to verify everything looks correct.

---

## Step 6: Update shadcn/ui Components (Optional)

If you want to customize shadcn/ui components to match the design system, update component files in `components/ui/`:

**Example - Button component** (`components/ui/button.tsx`):
- Update colors to use `neutral-900` for primary
- Remove heavy shadows
- Keep minimal styling

---

## Checklist

- [ ] Complete Tailwind config with all colors, typography, spacing
- [ ] Fonts imported and configured (Inter, JetBrains Mono)
- [ ] Global styles updated with smooth scroll
- [ ] Design tokens file created (optional)
- [ ] Test page created and verified
- [ ] All typography sizes render correctly
- [ ] Colors display correctly
- [ ] Spacing works as expected
- [ ] Fonts load correctly

---

## Design System Reference

### Color Usage
- **Backgrounds**: `bg-neutral-50` or `bg-neutral-100` for sections
- **Text**: `text-neutral-900` for primary, `text-neutral-600` for secondary
- **Borders**: `border-neutral-200` for subtle dividers
- **Accent**: `text-accent-500` or `bg-accent-500` used sparingly

### Typography Usage
- **Hero**: `text-hero font-semibold` (72px)
- **Page titles**: `text-h1 font-semibold` (48px)
- **Section headers**: `text-h2 font-semibold` (36px)
- **Body**: `text-body` or `text-body-lg` (16-18px)
- **Stats**: `text-stat font-bold` (64px)

### Spacing Usage
- **Section padding**: `py-section` (96px) or `py-section-lg` (128px)
- **Container**: `max-w-container mx-auto` (1280px)
- **Grid gaps**: `gap-8` (32px) for cards, `gap-12` (48px) for sections

---

## Step 7: Commit Changes

Once Phase 2 is complete, commit your changes:

```bash
git add .
git commit -m "Phase 2: Design system foundation complete - Colors, typography, spacing configured"
git push
```

---

## Next Steps

Once Phase 2 is complete, proceed to **Phase 3: Core Layout** (`phase-3-layout.md`) to build the Header and Footer components.

---

## Troubleshooting

**Issue**: Fonts not loading
- **Solution**: Check that font variables are set in `layout.tsx` and CSS variables are used in Tailwind config

**Issue**: Custom spacing not working
- **Solution**: Make sure spacing values are in the `spacing` object, not `extend.spacing`

**Issue**: Colors not available
- **Solution**: Ensure colors are in `theme.extend.colors`, not `theme.colors`

