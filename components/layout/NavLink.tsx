'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavLinkProps {
  href: string
  children: React.ReactNode
}

export function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={`relative text-sm font-medium transition-colors group ${
        isActive ? 'text-accent' : 'text-surface-300 hover:text-surface-50'
      }`}
    >
      {children}
      <span
        className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ${
          isActive ? 'w-full' : 'w-0 group-hover:w-full'
        }`}
      />
    </Link>
  )
}
