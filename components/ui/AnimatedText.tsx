'use client'

import { motion, useInView, type Variants } from 'framer-motion'
import { useRef } from 'react'

const easeOutExpo = [0.16, 1, 0.3, 1] as const

interface AnimatedTextProps {
  children: string
  className?: string
  delay?: number
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
}

export function AnimatedText({ children, className = '', delay = 0, as: Component = 'p' }: AnimatedTextProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const MotionComponent = motion.create(Component)

  return (
    <MotionComponent
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
      animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 20, filter: 'blur(10px)' }}
      transition={{ duration: 0.6, delay, ease: easeOutExpo }}
    >
      {children}
    </MotionComponent>
  )
}

interface AnimatedWordsProps {
  children: string
  className?: string
  delay?: number
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
}

export function AnimatedWords({ children, className = '', delay = 0, as: Component = 'p' }: AnimatedWordsProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const words = children.split(' ')

  const MotionComponent = motion.create(Component)

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: delay },
    },
  }

  const child: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: easeOutExpo },
    },
  }

  return (
    <MotionComponent
      ref={ref}
      className={className}
      variants={container}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      {words.map((word, i) => (
        <motion.span key={i} variants={child} className="inline-block mr-[0.25em]">
          {word}
        </motion.span>
      ))}
    </MotionComponent>
  )
}
