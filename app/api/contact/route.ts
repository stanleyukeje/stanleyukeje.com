import { NextResponse } from 'next/server';
import { sendContactEmail } from '@/lib/resend/send-contact-email';
import { sendAutoResponseEmail } from '@/lib/resend/send-auto-response';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message, num1, num2, mathAnswer } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required contact form fields.' },
        { status: 400 }
      );
    }

    // Server-side Math Human Verification
    const parsedN1 = parseInt(num1, 10);
    const parsedN2 = parseInt(num2, 10);
    const parsedAns = parseInt(mathAnswer, 10);

    if (
      isNaN(parsedN1) ||
      isNaN(parsedN2) ||
      isNaN(parsedAns) ||
      parsedAns !== parsedN1 + parsedN2
    ) {
      return NextResponse.json(
        { error: 'Human verification failed. Incorrect math answer.' },
        { status: 400 }
      );
    }

    // 1. Notify Stanley (existing behavior)
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

    // 2. Automatically send confirmation email to sender if notification succeeded
    try {
      await sendAutoResponseEmail({
        name,
        email,
        subject,
        message,
      });
    } catch (autoErr) {
      console.error('Non-blocking error dispatching auto-response email:', autoErr);
      // Non-blocking: Do not fail visitor request if auto-response fails
    }

    return NextResponse.json({
      success: true,
      message:
        "Thanks! Your message has been sent successfully. I've also sent a confirmation email to your inbox. I'll get back to you as soon as possible.",
    });
  } catch (error) {
    console.error('Contact API Route Error:', error);
    return NextResponse.json(
      { error: 'Internal server error while processing contact form.' },
      { status: 500 }
    );
  }
}
