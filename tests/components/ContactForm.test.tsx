import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ContactForm } from '@/components/forms/ContactForm'

const { captureException, getDistinctId, getSessionId } = vi.hoisted(() => ({
  captureException: vi.fn(),
  getDistinctId: vi.fn(() => 'test-distinct-id'),
  getSessionId: vi.fn(() => 'test-session-id'),
}))

vi.mock('posthog-js', () => ({
  default: {
    captureException,
    get_distinct_id: getDistinctId,
    get_session_id: getSessionId,
  },
}))

beforeEach(() => {
  vi.clearAllMocks()
  global.fetch = vi.fn() as unknown as typeof fetch
})

describe('ContactForm', () => {
  it('renders form fields', () => {
    render(<ContactForm />)
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/subject/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument()
  })

  it('shows validation errors for empty fields', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    const submitButton = screen.getByRole('button', { name: /send message/i })
    await user.click(submitButton)

    await waitFor(() => {
      expect(screen.getByText(/name must be at least 2 characters/i)).toBeInTheDocument()
    })
  })

  it('passes the PostHog distinct ID to the contact API', async () => {
    const user = userEvent.setup()
    vi.mocked(global.fetch).mockResolvedValue(
      new Response(JSON.stringify({ message: 'Message sent successfully' }), {
        status: 200,
      })
    )
    vi.spyOn(window, 'alert').mockImplementation(() => undefined)
    render(<ContactForm />)

    await user.type(screen.getByLabelText(/name/i), 'Ben Lody')
    await user.type(screen.getByLabelText(/email/i), 'ben@example.com')
    await user.type(screen.getByLabelText(/subject/i), 'Hiring')
    await user.type(
      screen.getByLabelText(/message/i),
      'I need help recruiting a sales leader.'
    )
    await user.click(screen.getByRole('button', { name: /send message/i }))

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith(
        '/api/contact',
        expect.objectContaining({
          headers: expect.objectContaining({
            'X-PostHog-Distinct-Id': 'test-distinct-id',
            'X-PostHog-Session-Id': 'test-session-id',
          }),
        })
      )
    })
  })
})
