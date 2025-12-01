'use client'

import { motion } from 'framer-motion'
import { GradientBackground } from '@/components/ui/GradientBackground'
import { ScrollIndicator } from '@/components/ui/ScrollIndicator'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <GradientBackground variant="hero" />

      <div className="relative z-10 mx-auto max-w-container w-full px-6 py-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm text-surface-300">Sales recruitment specialists</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
            className="text-4xl md:text-6xl lg:text-hero font-bold text-surface-50 leading-tight"
          >
            Connecting great sales professionals with{' '}
            <span className="text-gradient">businesses</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
            className="mt-6 text-lg md:text-xl text-surface-400 max-w-2xl mx-auto font-body"
          >
            We keep recruitment simple, effective, and focused on what works. Our consultants have worked in sales themselves, so they know what it takes to succeed.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/contact"
              className="group relative px-8 py-4 bg-accent text-white font-semibold rounded-xl overflow-hidden transition-all hover:shadow-glow hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get in touch
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 text-surface-300 font-medium hover:text-surface-50 transition-colors"
            >
              Learn more
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <ScrollIndicator />
      </div>
    </section>
  )
}
