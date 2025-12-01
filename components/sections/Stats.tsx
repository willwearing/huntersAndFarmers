'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { CountUpText } from '@/components/ui/CountUp'

interface Stat {
  value: string
  label: string
}

interface StatsProps {
  stats: Stat[]
}

export function Stats({ stats }: StatsProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative py-24 px-6 bg-surface-900">
      <div className="absolute inset-0 bg-gradient-to-b from-surface-950 to-surface-900" />
      <div className="relative z-10 mx-auto max-w-container">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] as const }}
              className="relative flex flex-col items-center text-center group"
            >
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-b from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <CountUpText
                  text={stat.value}
                  className="text-4xl md:text-5xl font-bold text-surface-50"
                />
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="mt-3 text-sm text-surface-400 font-medium"
              >
                {stat.label}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
