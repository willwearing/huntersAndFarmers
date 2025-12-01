import { NextRequest, NextResponse } from 'next/server'
import { contactFormSchema } from '@/lib/schemas/contact'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validatedData = contactFormSchema.parse(body)

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

