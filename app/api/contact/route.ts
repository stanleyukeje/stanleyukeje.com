import { NextResponse } from 'next/server';
import { sendContactEmail } from '@/lib/resend/send-contact-email';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required contact form fields.' },
        { status: 400 }
      );
    }

    const result = await sendContactEmail({
      name,
      email,
      subject: subject || 'New Website Contact Form Submission',
      message,
    });

    if (!result.success) {
      return NextResponse.json(
        { error: 'Failed to dispatch message notification email.' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Contact submission received successfully.',
    });
  } catch (error) {
    console.error('Contact API Route Error:', error);
    return NextResponse.json(
      { error: 'Internal server error while processing contact form.' },
      { status: 500 }
    );
  }
}
