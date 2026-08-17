'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { GradientBackground } from '@/components/ui/GradientBackground'

const roleGroups = [
  {
    title: 'Sales',
    roles: [
      'Sales Director',
      'National Sales Manager',
      'Field Sales Manager',
      'Channel Sales Manager',
      'New Business Sales Manager',
      'Account Executive',
      'Sales Executive',
      'Account Manager',
      'Business Development Manager',
      'Sales Consultant',
      'National Account Manager',
      'Key Account Manager',
      'Sales Engineer',
      'Sales Representative',
      'Territory / Area Manager',
    ],
  },
  {
    title: 'Construction',
    roles: [
      'Project Coordinator',
      'Contract Administrator',
      'Snr Contract Administrator',
      'Project Manager',
      'Snr Project Manager',
      'Site Supervisor',
      'Snr Site Supervisor',
    ],
  },
]

export default function AboutPage() {
  const rolesRef = useRef(null)
  const rolesInView = useInView(rolesRef, { once: true, margin: '-100px' })

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
            <span className="text-accent text-sm font-medium uppercase tracking-wider">About us</span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold text-surface-50">
              Who we are
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 space-y-6 max-w-3xl"
          >
            <p className="text-lg text-surface-300 leading-relaxed font-body">
              At Hunters and Farmers, we keep recruitment simple, effective, and focused on what works. We’re not here to reinvent the wheel. We’re here to connect great sales professionals and commercial construction talent with businesses that need them.
            </p>
            <p className="text-lg text-surface-300 leading-relaxed font-body">
              With experience recruiting across all levels, from Sales Administrators to Sales Directors, as well as a wide range of commercial construction professionals from Project Coordinators to Snr Project Managers, we&apos;re well placed to help you find exactly what you need, whether that&apos;s your next position or your next hire.
            </p>
            <p className="text-lg text-surface-300 leading-relaxed font-body">
              What sets us apart is that our consultants have worked in sales and construction environments themselves, so they understand firsthand what it takes to succeed. This real-world insight, combined with proven recruitment expertise, allows us to deliver a straightforward, consultative service that adds genuine value to both clients and candidates.
            </p>
            <p className="text-lg text-surface-300 leading-relaxed font-body">
              Whether you&apos;re looking for top-performing sales talent or skilled professionals across the commercial construction sector, we take the time to understand your needs and connect you with the right people.
            </p>
          </motion.div>
        </div>
      </section>

      <section ref={rolesRef} className="py-24 px-6 bg-surface-900 border-t border-surface-800">
        <div className="mx-auto max-w-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={rolesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-surface-50">
              What we recruit
            </h2>
          </motion.div>

          <div className="space-y-12">
            {roleGroups.map((group, groupIndex) => (
              <div key={group.title}>
                <h3 className="mb-5 text-xl font-semibold text-surface-100">
                  {group.title}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {group.roles.map((role, index) => (
                    <motion.div
                      key={role}
                      initial={{ opacity: 0, x: -20 }}
                      animate={rolesInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.4, delay: groupIndex * 0.15 + index * 0.03 }}
                      className="flex items-center gap-3 p-4 rounded-xl bg-surface-800/50 border border-surface-700/30 hover:border-accent/30 hover:bg-surface-800 transition-all group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent group-hover:scale-150 transition-transform" />
                      <span className="text-surface-200 font-medium">{role}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
