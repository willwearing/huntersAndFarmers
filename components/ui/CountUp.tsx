'use client'

import { motion, useInView, useSpring, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'

interface CountUpProps {
  value: number
  suffix?: string
  prefix?: string
  className?: string
  duration?: number
}

export function CountUp({ value, suffix = '', prefix = '', className = '', duration = 2 }: CountUpProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const spring = useSpring(0, { duration: duration * 1000, bounce: 0 })
  const display = useTransform(spring, (current) => `${prefix}${Math.round(current)}${suffix}`)

  useEffect(() => {
    if (isInView) {
      spring.set(value)
    }
  }, [isInView, spring, value])

  return (
    <motion.span ref={ref} className={className}>
      {display}
    </motion.span>
  )
}

interface CountUpTextProps {
  text: string
  className?: string
}

export function CountUpText({ text, className = '' }: CountUpTextProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const match = text.match(/^(\d+)(\+?)$/)

  if (match) {
    const num = parseInt(match[1], 10)
    const suffix = match[2] || ''

    return (
      <span ref={ref} className={className}>
        <CountUp value={isInView ? num : 0} suffix={suffix} />
      </span>
    )
  }

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
    >
      {text}
    </motion.span>
  )
}

