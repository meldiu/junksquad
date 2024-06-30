import { Resend } from 'resend'
import { EmailTemplate } from '@/components/organisms/email-template/EmailTemplate'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req, res) {
  try {
    const formData = await req.formData()
    const name = formData.get('name')
    const phone = formData.get('phone')
    const address = formData.get('address')
    const date = formData.getAll('date')

    await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: [process.env.PERSONAL_EMAIL],
      subject: 'Email from my JunkSquad website',
      react: EmailTemplate({
        name,
        phone,
        address,
        date,
      }),
    })

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { message: 'Something went wrong' },
      { status: 500 }
    )
  }
}
