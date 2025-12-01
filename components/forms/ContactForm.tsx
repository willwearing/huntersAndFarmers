'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactFormSchema, type ContactFormData } from '@/lib/schemas/contact'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { motion } from 'framer-motion'
import { Send, Loader2 } from 'lucide-react'

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      alert('Message sent successfully!')
      reset()
    } catch {
      alert('Failed to send message. Please try again.')
    }
  }

  const inputClasses = "bg-surface-800/50 border-surface-700 text-surface-100 placeholder:text-surface-500 focus:border-accent focus:ring-accent/20"

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Label htmlFor="name" className="text-surface-200">Name</Label>
        <Input
          id="name"
          placeholder="Your name"
          {...register('name')}
          className={`${inputClasses} ${errors.name ? 'border-error' : ''}`}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-error">{errors.name.message}</p>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
      >
        <Label htmlFor="email" className="text-surface-200">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="you@example.com"
          {...register('email')}
          className={`${inputClasses} ${errors.email ? 'border-error' : ''}`}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-error">{errors.email.message}</p>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Label htmlFor="subject" className="text-surface-200">Subject</Label>
        <Input
          id="subject"
          placeholder="How can we help?"
          {...register('subject')}
          className={`${inputClasses} ${errors.subject ? 'border-error' : ''}`}
        />
        {errors.subject && (
          <p className="mt-1 text-sm text-error">{errors.subject.message}</p>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
      >
        <Label htmlFor="message" className="text-surface-200">Message</Label>
        <Textarea
          id="message"
          rows={6}
          placeholder="Tell us more about what you're looking for..."
          {...register('message')}
          className={`${inputClasses} ${errors.message ? 'border-error' : ''}`}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-error">{errors.message.message}</p>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-accent text-white hover:bg-accent-hover hover:shadow-glow transition-all duration-300 disabled:opacity-50"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-4 h-4 mr-2" />
              Send message
            </>
          )}
        </Button>
      </motion.div>
    </form>
  )
}
