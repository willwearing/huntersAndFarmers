'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { GradientBackground } from '@/components/ui/GradientBackground'
import { MapPin, DollarSign, Building2 } from 'lucide-react'

const vacancies = [
  {
    title: 'Sales Executive',
    location: 'Melbourne',
    compensation: '$85,000 plus super plus comms',
    sector: 'Logistics',
  },
  {
    title: 'Business Development Manager',
    location: 'S.E Melbourne',
    compensation: '$100,000 - $120,000 plus super plus comms',
    sector: 'FMCG',
  },
  {
    title: 'Account Manager',
    location: 'Melbourne',
    compensation: 'Uncapped comms',
    sector: 'Logistics',
  },
]

export default function VacanciesPage() {
  const cardsRef = useRef(null)
  const cardsInView = useInView(cardsRef, { once: true, margin: '-100px' })

  return (
    <div className="min-h-screen">
      <section className="relative py-32 px-6 overflow-hidden">
        <GradientBackground variant="section" />
        <div className="relative z-10 mx-auto max-w-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent text-sm font-medium uppercase tracking-wider">Opportunities</span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold text-surface-50">
              Current roles we&apos;re recruiting
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 max-w-2xl text-lg text-surface-300 font-body"
          >
            If you can&apos;t see a vacancy that interests you, register your ideal role and we will be in touch.
          </motion.p>
        </div>
      </section>

      <section ref={cardsRef} className="py-24 px-6 bg-surface-900 border-t border-surface-800">
        <div className="mx-auto max-w-container">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {vacancies.map((vacancy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={cardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-8 glow-border hover:-translate-y-1 hover:bg-surface-800/70 transition-all duration-300 group"
              >
                <h3 className="text-xl font-semibold mb-6 text-surface-50 group-hover:text-accent transition-colors">
                  {vacancy.title}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-surface-300">
                    <MapPin className="w-4 h-4 text-surface-500" />
                    <span>{vacancy.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-surface-300">
                    <DollarSign className="w-4 h-4 text-surface-500" />
                    <span>{vacancy.compensation}</span>
                  </div>
                  <div className="flex items-center gap-3 text-surface-300">
                    <Building2 className="w-4 h-4 text-surface-500" />
                    <span>{vacancy.sector}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
