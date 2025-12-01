'use client'

import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight, Users, Briefcase, Mail } from 'lucide-react'

const icons = {
  'Who We Are': Users,
  'What We Do': Briefcase,
  'Contact Us': Mail,
}

interface PreviewCard {
  title: string
  description: string
  href: string
}

interface PreviewCardsProps {
  cards: PreviewCard[]
}

export function PreviewCards({ cards }: PreviewCardsProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-24 px-6 bg-surface-950">
      <div className="mx-auto max-w-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-surface-50 mb-4">
            How can we help?
          </h2>
          <p className="text-surface-400 max-w-xl mx-auto">
            Whether you&apos;re looking for your next opportunity or your next hire, we&apos;re here to help.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => {
            const Icon = icons[card.title as keyof typeof icons] || Briefcase

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] as const }}
              >
                <Link href={card.href} className="group block">
                  <div className="relative glass-card p-8 glow-border transition-all duration-300 hover:-translate-y-1 hover:bg-surface-800/70">
                    <div className="flex items-start justify-between mb-6">
                      <div className="p-3 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-surface-600 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-surface-50 group-hover:text-accent transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-surface-400 font-body">
                      {card.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
