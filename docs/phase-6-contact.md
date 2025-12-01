# Phase 6: Contact Page
## Build Contact Form and Contact Information

**Goal**: Create a functional contact page with form validation and contact information display.

**Reference**: See Forms and Interactive Elements in `design-analysis.md`.

**Prerequisites**: Phases 1-5 must be complete. React Hook Form and Zod should be installed.

---

## Step 1: Create Contact Form Schema

Create `lib/schemas/contact.ts`:

```typescript
import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(3, 'Subject must be at least 3 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export type ContactFormData = z.infer<typeof contactFormSchema>
```

---

## Step 2: Create Contact Form Component

Create `components/forms/ContactForm.tsx`:

```typescript
'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactFormSchema, type ContactFormData } from '@/lib/schemas/contact'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

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
      // Replace with your API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      // Show success message
      alert('Message sent successfully!')
      reset()
    } catch (error) {
      // Show error message
      alert('Failed to send message. Please try again.')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          {...register('name')}
          className={errors.name ? 'border-error-500' : ''}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-error-500">{errors.name.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          {...register('email')}
          className={errors.email ? 'border-error-500' : ''}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-error-500">{errors.email.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="subject">Subject</Label>
        <Input
          id="subject"
          {...register('subject')}
          className={errors.subject ? 'border-error-500' : ''}
        />
        {errors.subject && (
          <p className="mt-1 text-sm text-error-500">{errors.subject.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          rows={6}
          {...register('message')}
          className={errors.message ? 'border-error-500' : ''}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-error-500">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-neutral-900 text-white hover:bg-neutral-800"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  )
}
```

**Install Textarea component from shadcn/ui:**

```bash
bunx shadcn-ui@latest add textarea
```

---

## Step 3: Create Contact Information Component

Create `components/sections/ContactInfo.tsx`:

```typescript
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <div className="flex gap-4">
        <Mail className="h-5 w-5 text-neutral-600 flex-shrink-0 mt-1" />
        <div>
          <h3 className="text-sm font-semibold text-neutral-900 mb-1">Email</h3>
          <a
            href="mailto:contact@yoursite.com"
            className="text-body text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            contact@yoursite.com
          </a>
        </div>
      </div>

      <div className="flex gap-4">
        <Phone className="h-5 w-5 text-neutral-600 flex-shrink-0 mt-1" />
        <div>
          <h3 className="text-sm font-semibold text-neutral-900 mb-1">Phone</h3>
          <a
            href="tel:+1234567890"
            className="text-body text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            +1 (234) 567-8900
          </a>
        </div>
      </div>

      <div className="flex gap-4">
        <MapPin className="h-5 w-5 text-neutral-600 flex-shrink-0 mt-1" />
        <div>
          <h3 className="text-sm font-semibold text-neutral-900 mb-1">Address</h3>
          <p className="text-body text-neutral-600">
            123 Main Street<br />
            City, State 12345<br />
            Country
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
```

---

## Step 4: Create Contact Page

Create `app/contact/page.tsx`:

```typescript
import type { Metadata } from 'next'
import { ContactForm } from '@/components/forms/ContactForm'
import { ContactInfo } from '@/components/sections/ContactInfo'

export const metadata: Metadata = {
  title: 'Contact Us | Your Site Name',
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
```

---

## Step 5: Create API Route (Optional)

If you want to handle form submissions, create an API route:

Create `app/api/contact/route.ts`:

```typescript
import { NextRequest, NextResponse } from 'next/server'
import { contactFormSchema } from '@/lib/schemas/contact'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validatedData = contactFormSchema.parse(body)

    // Replace with your email service or database logic
    // Example: Send email using Resend, SendGrid, etc.
    // Example: Save to database

    console.log('Contact form submission:', validatedData)

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to send message' },
      { status: 500 }
    )
  }
}
```

---

## Step 6: Add Toast Notifications (Optional)

Install a toast library or create a simple toast component:

**Option 1: Use shadcn/ui toast:**

```bash
bunx shadcn-ui@latest add toast
```

Update ContactForm to use toast:

```typescript
import { useToast } from '@/hooks/use-toast'

const { toast } = useToast()

const onSubmit = async (data: ContactFormData) => {
  try {
    // ... API call ...
    toast({
      title: 'Success',
      description: 'Your message has been sent successfully.',
    })
    reset()
  } catch (error) {
    toast({
      title: 'Error',
      description: 'Failed to send message. Please try again.',
      variant: 'destructive',
    })
  }
}
```

**Option 2: Simple alert (already in code above)**

---

## Step 7: Add Map (Optional)

If you want to add a Google Maps embed:

```typescript
export function Map() {
  return (
    <div className="mt-8">
      <iframe
        src="https://www.google.com/maps/embed?pb=YOUR_EMBED_URL"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-lg border border-neutral-200"
      />
    </div>
  )
}
```

Add to ContactInfo component or as a separate section.

---

## Checklist

- [ ] Contact form schema created with Zod
- [ ] ContactForm component created with React Hook Form
- [ ] Form validation working (all fields)
- [ ] Error messages display correctly
- [ ] ContactInfo component created
- [ ] Contact page created with form and info side-by-side
- [ ] Page metadata added
- [ ] API route created (optional)
- [ ] Toast notifications added (optional)
- [ ] Map added (optional)
- [ ] Responsive design works (stacked on mobile)
- [ ] Form submission works
- [ ] Loading states work correctly

---

## Design Guidelines

### Form
- **Layout**: `max-w-2xl` container, `space-y-6` between fields
- **Inputs**: `border border-neutral-200 rounded-md px-4 py-3`
- **Focus**: `focus:outline-none focus:ring-2 focus:ring-neutral-900`
- **Labels**: `text-sm font-medium text-neutral-900 mb-2`
- **Errors**: `text-sm text-error-500` below inputs
- **Button**: `bg-neutral-900 text-white hover:bg-neutral-800`

### Contact Information
- **Layout**: Side-by-side with form on desktop, stacked on mobile
- **Icons**: Simple line-style icons from lucide-react
- **Typography**: `text-body text-neutral-600` for content
- **Links**: Hover color change

---

## Step 8: Commit Changes

Once Phase 6 is complete, commit your changes:

```bash
git add .
git commit -m "Phase 6: Contact page complete - Contact form and info sections built"
git push
```

---

## Next Steps

Once Phase 6 is complete, proceed to **Phase 7: Polish & Launch** (`phase-7-polish-launch.md`) for final polish, optimization, testing, and deployment.

---

## Troubleshooting

**Issue**: Form validation not working
- **Solution**: Check that `@hookform/resolvers` is installed and zodResolver is imported correctly

**Issue**: Form submission fails
- **Solution**: Check API route exists and handles CORS if needed

**Issue**: Layout breaks on mobile
- **Solution**: Ensure `grid-cols-1 lg:grid-cols-2` is used for responsive layout

