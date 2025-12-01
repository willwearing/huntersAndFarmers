'use client'

import { motion } from 'framer-motion'

interface GradientBackgroundProps {
  className?: string
  variant?: 'hero' | 'section' | 'subtle'
}

export function GradientBackground({ className = '', variant = 'hero' }: GradientBackgroundProps) {
  const variants = {
    hero: {
      blobs: [
        { color: 'rgba(249, 115, 22, 0.15)', size: '600px', x: '-10%', y: '-20%' },
        { color: 'rgba(251, 146, 60, 0.1)', size: '500px', x: '60%', y: '60%' },
        { color: 'rgba(30, 41, 59, 0.8)', size: '800px', x: '30%', y: '20%' },
      ],
    },
    section: {
      blobs: [
        { color: 'rgba(249, 115, 22, 0.08)', size: '400px', x: '80%', y: '20%' },
        { color: 'rgba(30, 41, 59, 0.5)', size: '600px', x: '-20%', y: '50%' },
      ],
    },
    subtle: {
      blobs: [
        { color: 'rgba(249, 115, 22, 0.05)', size: '300px', x: '50%', y: '50%' },
      ],
    },
  }

  const config = variants[variant]

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {config.blobs.map((blob, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            background: blob.color,
            width: blob.size,
            height: blob.size,
            left: blob.x,
            top: blob.y,
          }}
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
      <div className="absolute inset-0 bg-noise opacity-[0.03]" />
    </div>
  )
}

