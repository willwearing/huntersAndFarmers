'use client'

import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { motion } from 'framer-motion'

const contactItems = [
  {
    icon: Mail,
    title: 'Email',
    content: 'contact@huntersandfarmers.com',
    href: 'mailto:contact@huntersandfarmers.com',
  },
  {
    icon: Phone,
    title: 'Phone',
    content: '+61 3 0000 0000',
    href: 'tel:+61300000000',
  },
  {
    icon: MapPin,
    title: 'Address',
    content: 'Melbourne, Australia',
  },
  {
    icon: Clock,
    title: 'Office hours',
    content: 'Monday - Friday: 9:00 AM - 5:00 PM',
    subContent: 'Saturday - Sunday: Closed',
  },
]

export function ContactInfo() {
  return (
    <div className="space-y-6">
      {contactItems.map((item, index) => {
        const Icon = item.icon
        const content = item.href ? (
          <a
            href={item.href}
            className="text-surface-300 hover:text-accent transition-colors font-body"
          >
            {item.content}
          </a>
        ) : (
          <p className="text-surface-300 font-body">
            {item.content}
            {item.subContent && (
              <>
                <br />
                {item.subContent}
              </>
            )}
          </p>
        )

        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="glass-card p-6 flex gap-4 group hover:border-accent/30 transition-colors"
          >
            <div className="p-3 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-colors h-fit">
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-surface-100 mb-1">{item.title}</h3>
              {content}
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
