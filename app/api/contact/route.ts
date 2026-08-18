import { SeverityNumber } from '@opentelemetry/api-logs'
import { after, NextRequest, NextResponse } from 'next/server'
import { contactFormSchema } from '@/lib/schemas/contact'
import { withPostHogClient } from '@/lib/posthog-server'
import { loggerProvider } from '@/instrumentation'

const logger = loggerProvider?.getLogger('contact-api')

export async function POST(request: NextRequest) {
  const distinctId = request.headers.get('x-posthog-distinct-id')
  const sessionId = request.headers.get('x-posthog-session-id')
  const provider = loggerProvider

  if (provider) {
    after(async () => {
      await provider.forceFlush()
    })
  }

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

    logger?.emit({
      body: 'Contact form submission accepted',
      severityNumber: SeverityNumber.INFO,
      severityText: 'INFO',
      attributes: {
        endpoint: '/api/contact',
        method: 'POST',
        outcome: 'success',
        ...(distinctId ? { posthogDistinctId: distinctId } : {}),
        ...(sessionId ? { sessionId } : {}),
      },
    })

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

    logger?.emit({
      body: 'Contact form submission failed',
      severityNumber: SeverityNumber.ERROR,
      severityText: 'ERROR',
      attributes: {
        endpoint: '/api/contact',
        method: 'POST',
        outcome: 'error',
        errorType: error instanceof Error ? error.name : 'UnknownError',
        ...(distinctId ? { posthogDistinctId: distinctId } : {}),
        ...(sessionId ? { sessionId } : {}),
      },
    })

    return NextResponse.json(
      { message: 'Failed to send message' },
      { status: 500 }
    )
  }
}
