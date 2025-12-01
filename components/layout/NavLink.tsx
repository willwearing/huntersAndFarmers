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

