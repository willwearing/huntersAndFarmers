import { PostHog } from 'posthog-node'

const projectToken = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN
const apiHost = process.env.NEXT_PUBLIC_POSTHOG_HOST

function createPostHogClient() {
  if (!projectToken || !apiHost) {
    if (process.env.NODE_ENV === 'development') {
      const missingVariable = !projectToken
        ? 'NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN'
        : 'NEXT_PUBLIC_POSTHOG_HOST'

      throw new Error(
        `${missingVariable} variable required by PostHog is missing or un-configured, this causes events to be silently missed. This error stops appearing once ${missingVariable} is configured`
      )
    }

    return null
  }

  return new PostHog(projectToken, {
    host: apiHost,
    flushAt: 1,
    flushInterval: 0,
  })
}

export async function withPostHogClient(
  capture: (client: PostHog) => void
) {
  const client = createPostHogClient()

  if (!client) {
    return
  }

  try {
    capture(client)
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('PostHog event capture failed:', error)
    }
  } finally {
    try {
      await client.shutdown()
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.error('PostHog event delivery failed:', error)
      }
    }
  }
}
