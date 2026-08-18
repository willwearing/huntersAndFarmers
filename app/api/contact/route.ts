import { NextRequest, NextResponse } from 'next/server'
import { contactFormSchema } from '@/lib/schemas/contact'
import { withPostHogClient } from '@/lib/posthog-server'

export async function POST(request: NextRequest) {
  const distinctId = request.headers.get('x-posthog-distinct-id')

  try {
    const body = await request.json()
    contactFormSchema.parse(body)

    if (distinctId) {
      await withPostHogClient((posthog) => {
        posthog.capture({
          distinctId,
          event: 'contact_form_submitted',
          properties: {
            source: 'website_contact_form',
            $process_person_profile: false,
          },
        })
      })
    }

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    await withPostHogClient((posthog) => {
      posthog.captureException(error, distinctId ?? undefined, {
        source: 'website_contact_form',
        endpoint: '/api/contact',
      })
    })

    return NextResponse.json(
      { message: 'Failed to send message' },
      { status: 500 }
    )
  }
}
