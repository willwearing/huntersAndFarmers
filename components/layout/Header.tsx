'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NavLink } from './NavLink'

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
            <NavLink key={item.name} href={item.href}>
              {item.name}
            </NavLink>
          ))}
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
          </div>
        </div>
      )}
    </header>
  )
}

