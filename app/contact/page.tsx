import type { Metadata } from 'next'
import { ContactForm } from '@/components/forms/ContactForm'
import { ContactInfo } from '@/components/sections/ContactInfo'

export const metadata: Metadata = {
  title: 'Contact Us | Hunters and Farmers',
  description: 'Get in touch with our team to learn more.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <section className="py-section-lg px-6">
        <div className="mx-auto max-w-content">
          <h1 className="text-h1 font-semibold text-neutral-900">
            Contact Us
          </h1>
          <p className="mt-6 max-w-3xl text-body-lg text-neutral-600">
            Have a question or want to learn more? Get in touch with our team.
          </p>
        </div>
      </section>

      <section className="py-section px-6 border-t border-neutral-200">
        <div className="mx-auto max-w-container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-h2 font-semibold mb-6 text-neutral-900">
                Send us a message
              </h2>
              <ContactForm />
            </div>

            <div>
              <h2 className="text-h2 font-semibold mb-6 text-neutral-900">
                Get in touch
              </h2>
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

