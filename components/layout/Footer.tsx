'use client'

import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

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
    { name: 'Careers', href: '/vacancies' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
}

export function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  const linkGroups = [
    { title: 'About', links: footerLinks.about },
    { title: 'Services', links: footerLinks.services },
    { title: 'Contact', links: footerLinks.contact },
    { title: 'Legal', links: footerLinks.legal },
  ]

  return (
    <footer ref={ref} className="relative border-t border-surface-800 bg-surface-950">
      <div className="absolute inset-0 bg-gradient-to-t from-surface-900/50 to-transparent" />

      <div className="relative z-10 mx-auto max-w-container px-6 py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="col-span-2 md:col-span-1"
          >
            <Link href="/" className="group flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent group-hover:scale-125 transition-transform" />
              <span className="text-lg font-semibold text-surface-50">
                H&F
              </span>
            </Link>
            <p className="mt-4 text-sm text-surface-500 max-w-xs">
              Simple, effective recruitment focused on connecting great sales professionals with businesses.
            </p>
          </motion.div>

          {linkGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 + groupIndex * 0.05 }}
            >
              <h3 className="text-sm font-semibold text-surface-200 mb-4">{group.title}</h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-surface-500 transition-colors hover:text-accent"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 pt-8 border-t border-surface-800 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-xs text-surface-600">
            © {new Date().getFullYear()} Hunters and Farmers. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-xs text-surface-600 hover:text-surface-400 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-xs text-surface-600 hover:text-surface-400 transition-colors">
              Terms
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
