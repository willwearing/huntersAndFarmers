'use client'

import { useEffect } from 'react'
import posthog from 'posthog-js'

type GlobalErrorProps = {
  error: Error & { digest?: string }
  reset: () => void
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    posthog.captureException(error)
  }, [error])

  return (
    <html lang="en">
      <body>
        <main>
          <h1>Something went wrong</h1>
          <p>We couldn&apos;t load this page. Please try again.</p>
          <button onClick={reset}>Try again</button>
        </main>
      </body>
    </html>
  )
}
