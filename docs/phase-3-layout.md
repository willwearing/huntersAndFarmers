# Phase 3: Core Layout
## Build Header and Footer Components

**Goal**: Create the site shell with navigation and footer. This establishes the structure that all pages will use.

**Reference**: See Navigation and Footer sections in `design-analysis.md`.

**Prerequisites**: Phase 1 (Setup) and Phase 2 (Design System) must be complete.

---

## Step 1: Create Header Component

Create `components/layout/Header.tsx`:

```typescript
'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-container items-center justify-between px-6 py-4">
        <div className="flex items-center">
          <Link href="/" className="text-xl font-semibold text-neutral-900">
            Your Logo
          </Link>
        </div>

        <div className="hidden md:flex md:items-center md:gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex md:items-center md:gap-4">
          <Link
            href="/login"
            className="text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900"
          >
            Investor Login
          </Link>
        </div>

        <button
          type="button"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-neutral-900" />
          ) : (
            <Menu className="h-6 w-6 text-neutral-900" />
          )}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="border-t border-neutral-200 bg-white md:hidden">
          <div className="space-y-1 px-6 py-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/login"
              className="block py-2 text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              Investor Login
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
```

**Install lucide-react for icons:**
```bash
bun add lucide-react
```

---

## Step 2: Create Footer Component

Create `components/layout/Footer.tsx`:

```typescript
import Link from 'next/link'

const footerLinks = {
  about: [
    { name: 'Who We Are', href: '/about' },
    { name: 'Our Mission', href: '/about#mission' },
    { name: 'Leadership', href: '/about#leadership' },
  ],
  services: [
    { name: 'What We Do', href: '/services' },
    { name: 'How We Work', href: '/services#how-we-work' },
    { name: 'Approach', href: '/services#approach' },
  ],
  contact: [
    { name: 'Contact Us', href: '/contact' },
    { name: 'Careers', href: '/careers' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Disclosures', href: '/disclosures' },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-container px-6 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-sm font-semibold text-neutral-900 mb-4">About</h3>
            <ul className="space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-600 transition-colors hover:text-neutral-900"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-neutral-900 mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-600 transition-colors hover:text-neutral-900"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-neutral-900 mb-4">Contact</h3>
            <ul className="space-y-2">
              {footerLinks.contact.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-600 transition-colors hover:text-neutral-900"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-neutral-900 mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-600 transition-colors hover:text-neutral-900"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-neutral-200 pt-8">
          <p className="text-xs text-neutral-500">
            © {new Date().getFullYear()} Your Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
```

---

## Step 3: Update Root Layout

Update `app/layout.tsx` to include Header and Footer:

```typescript
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { JetBrains_Mono } from 'next/font/google'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
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
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
```

---

## Step 4: Update Home Page

Update `app/page.tsx` to test the layout:

```typescript
export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="py-section-xl px-6">
        <div className="mx-auto max-w-container">
          <h1 className="text-hero font-semibold text-neutral-900">
            Welcome
          </h1>
          <p className="mt-6 text-body-lg text-neutral-600">
            Your landing page content will go here.
          </p>
        </div>
      </div>
    </div>
  )
}
```

---

## Step 5: Test Navigation

1. **Test desktop navigation:**
   - All links should work
   - Hover states should change color
   - Active state should be visible (you can add this later)

2. **Test mobile navigation:**
   - Hamburger menu should open/close
   - Links should work and close menu on click
   - Menu should be accessible

3. **Test footer:**
   - All footer links should work
   - Layout should be responsive
   - Copyright year should be current

---

## Step 6: Add Active Link Styling (Optional)

Create a utility to detect active links:

Create `components/layout/NavLink.tsx`:

```typescript
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

interface NavLinkProps {
  href: string
  children: React.ReactNode
  className?: string
}

export function NavLink({ href, children, className }: NavLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={cn(
        'text-sm font-medium transition-colors',
        isActive
          ? 'text-neutral-900'
          : 'text-neutral-600 hover:text-neutral-900',
        className
      )}
    >
      {children}
    </Link>
  )
}
```

Update Header to use NavLink:

```typescript
import { NavLink } from './NavLink'

// Replace Link components with NavLink
{navigation.map((item) => (
  <NavLink key={item.name} href={item.href}>
    {item.name}
  </NavLink>
))}
```

---

## Checklist

- [ ] Header component created with sticky positioning
- [ ] Mobile hamburger menu works
- [ ] Navigation links work correctly
- [ ] Footer component created with multi-column layout
- [ ] Footer links work correctly
- [ ] Root layout updated to include Header and Footer
- [ ] Home page updated to test layout
- [ ] Responsive design works (mobile and desktop)
- [ ] Active link styling added (optional)
- [ ] All links navigate correctly

---

## Design Guidelines

### Header
- **Height**: `h-16` (64px) with `py-4`
- **Background**: `bg-white/95 backdrop-blur-sm` for glass effect
- **Border**: `border-b border-neutral-200`
- **Links**: `text-sm font-medium text-neutral-600 hover:text-neutral-900`
- **Mobile**: Slide-down menu with hamburger icon

### Footer
- **Background**: `bg-neutral-50`
- **Border**: `border-t border-neutral-200`
- **Layout**: `grid grid-cols-2 md:grid-cols-4 gap-8`
- **Links**: `text-sm text-neutral-600 hover:text-neutral-900`
- **Copyright**: `text-xs text-neutral-500`

---

## Step 7: Commit Changes

Once Phase 3 is complete, commit your changes:

```bash
git add .
git commit -m "Phase 3: Core layout complete - Header and Footer components built"
git push
```

---

## Next Steps

Once Phase 3 is complete, proceed to **Phase 4: Home Page** (`phase-4-home-page.md`) to build the hero section, stats, and preview sections.

---

## Troubleshooting

**Issue**: Mobile menu not opening
- **Solution**: Make sure `'use client'` directive is at the top of Header component

**Issue**: Links not working
- **Solution**: Check that href paths match your route structure

**Issue**: Footer layout broken on mobile
- **Solution**: Verify `grid-cols-2` is applied on mobile, `md:grid-cols-4` on desktop

