import type { Instrumentation } from 'next'
import { logs, SeverityNumber } from '@opentelemetry/api-logs'
import { OTLPLogExporter } from '@opentelemetry/exporter-logs-otlp-http'
import { resourceFromAttributes } from '@opentelemetry/resources'
import { BatchLogRecordProcessor, LoggerProvider } from '@opentelemetry/sdk-logs'

const projectToken = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN
const apiHost = process.env.NEXT_PUBLIC_POSTHOG_HOST

function getMissingVariable() {
  if (!projectToken) {
    return 'NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN'
  }

  if (!apiHost) {
    return 'NEXT_PUBLIC_POSTHOG_HOST'
  }

  return null
}

const missingVariable = getMissingVariable()

if (missingVariable && process.env.NODE_ENV === 'development') {
  throw new Error(
    `${missingVariable} variable required by PostHog is missing or un-configured, this causes events to be silently missed. This error stops appearing once ${missingVariable} is configured`
  )
}

export const loggerProvider =
  projectToken && apiHost
    ? new LoggerProvider({
        resource: resourceFromAttributes({
          'service.name': 'hunters-and-farmers-web',
        }),
        processors: [
          new BatchLogRecordProcessor(
            {
              exporter: new OTLPLogExporter({
                url: `${apiHost.replace(/\/$/, '')}/i/v1/logs`,
                headers: {
                  Authorization: `Bearer ${projectToken}`,
                  'Content-Type': 'application/json',
                },
              }),
            }
          ),
        ],
      })
    : null

export function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs' && loggerProvider) {
    logs.setGlobalLoggerProvider(loggerProvider)
  }
}

function getPostHogDistinctId(cookieHeader: string | string[] | undefined) {
  if (!cookieHeader) {
    return undefined
  }

  const cookieString = Array.isArray(cookieHeader)
    ? cookieHeader.join('; ')
    : cookieHeader
  const cookieMatch = cookieString.match(/ph_phc_.*?_posthog=([^;]+)/)

  if (!cookieMatch?.[1]) {
    return undefined
  }

  try {
    const postHogData = JSON.parse(decodeURIComponent(cookieMatch[1]))
    return typeof postHogData.distinct_id === 'string'
      ? postHogData.distinct_id
      : undefined
  } catch {
    return undefined
  }
}

export const onRequestError: Instrumentation.onRequestError = async (
  error,
  request,
  context
) => {
  if (process.env.NEXT_RUNTIME !== 'nodejs') {
    return
  }

  const distinctId = getPostHogDistinctId(request.headers.cookie)
  const { withPostHogClient } = await import('./lib/posthog-server')

  await withPostHogClient((posthog) => {
    posthog.captureException(error, distinctId, {
      route: context.routePath,
      route_type: context.routeType,
      method: request.method,
    })
  })

  if (loggerProvider) {
    loggerProvider.getLogger('nextjs').emit({
      body: 'Unhandled Next.js request error',
      severityNumber: SeverityNumber.ERROR,
      severityText: 'ERROR',
      attributes: {
        route: context.routePath,
        routeType: context.routeType,
        method: request.method,
        ...(distinctId ? { posthogDistinctId: distinctId } : {}),
      },
    })
    await loggerProvider.forceFlush()
  }
}
