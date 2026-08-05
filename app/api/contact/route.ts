import { NextResponse } from 'next/server';
import { sendContactEmail } from '@/lib/resend/send-contact-email';
import { sendAutoResponseEmail } from '@/lib/resend/send-auto-response';
import { checkRateLimit } from '@/lib/rate-limit';

export async function POST(request: Request) {
  try {
    // 1. IP Rate Limiting Check (Max 5 submissions per IP per hour)
    const forwardedFor = request.headers.get('x-forwarded-for');
    const realIp = request.headers.get('x-real-ip');
    const clientIp = forwardedFor ? forwardedFor.split(',')[0].trim() : realIp || '127.0.0.1';

    const rateCheck = checkRateLimit(clientIp);
    if (!rateCheck.success) {
      console.warn(`Rate limit exceeded for IP ${clientIp}. Total requests in window: ${rateCheck.count}`);
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, subject, message, num1, num2, mathAnswer } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required contact form fields.' },
        { status: 400 }
      );
    }

    // 2. Server-side Math Human Verification Check
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

    // 3. Notify Stanley (existing behavior)
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

    // 4. Automatically send confirmation email to sender if notification succeeded
    try {
      await sendAutoResponseEmail({
        name,
        email,
        subject,
        message,
      });
    } catch (autoErr) {
      console.error('Non-blocking error dispatching auto-response email:', autoErr);
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
