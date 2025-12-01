import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <div className="flex gap-4">
        <Mail className="h-5 w-5 text-neutral-600 flex-shrink-0 mt-1" />
        <div>
          <h3 className="text-sm font-semibold text-neutral-900 mb-1">Email</h3>
          <a
            href="mailto:contact@huntersandfarmers.com"
            className="text-body text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            contact@huntersandfarmers.com
          </a>
        </div>
      </div>

      <div className="flex gap-4">
        <Phone className="h-5 w-5 text-neutral-600 flex-shrink-0 mt-1" />
        <div>
          <h3 className="text-sm font-semibold text-neutral-900 mb-1">Phone</h3>
          <a
            href="tel:+61300000000"
            className="text-body text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            +61 3 0000 0000
          </a>
        </div>
      </div>

      <div className="flex gap-4">
        <MapPin className="h-5 w-5 text-neutral-600 flex-shrink-0 mt-1" />
        <div>
          <h3 className="text-sm font-semibold text-neutral-900 mb-1">Address</h3>
          <p className="text-body text-neutral-600">
            Melbourne, Australia
          </p>
        </div>
      </div>

      <div className="flex gap-4">
        <Clock className="h-5 w-5 text-neutral-600 flex-shrink-0 mt-1" />
        <div>
          <h3 className="text-sm font-semibold text-neutral-900 mb-1">Office Hours</h3>
          <p className="text-body text-neutral-600">
            Monday - Friday: 9:00 AM - 5:00 PM<br />
            Saturday - Sunday: Closed
          </p>
        </div>
      </div>
    </div>
  )
}

