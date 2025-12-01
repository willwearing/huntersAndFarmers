'use client'

import { motion } from 'framer-motion'
import { ContactForm } from '@/components/forms/ContactForm'
import { ContactInfo } from '@/components/sections/ContactInfo'
import { GradientBackground } from '@/components/ui/GradientBackground'

export default function ContactPage() {
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
            <span className="text-accent text-sm font-medium uppercase tracking-wider">Get in touch</span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold text-surface-50">
              Contact us
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 max-w-2xl text-lg text-surface-300 font-body"
          >
            Have a question or want to learn more? Get in touch with our team.
          </motion.p>
        </div>
      </section>

      <section className="py-24 px-6 bg-surface-900 border-t border-surface-800">
        <div className="mx-auto max-w-container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-semibold mb-8 text-surface-50">
                Send us a message
              </h2>
              <div className="glass-card p-8">
                <ContactForm />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-2xl font-semibold mb-8 text-surface-50">
                Get in touch
              </h2>
              <ContactInfo />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
