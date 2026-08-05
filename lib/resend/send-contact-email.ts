import { resend } from './client';
import { resendConfig } from '@/config/resend';
import { ContactForm } from '@/types';

export async function sendContactEmail(form: ContactForm) {
  try {
    const data = await resend.emails.send({
      from: resendConfig.fromEmail,
      to: resendConfig.toEmail,
      subject: form.subject || `New Contact Form Submission from ${form.name}`,
      replyTo: form.email,
      text: `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`,
    });

    return { success: true, data };
  } catch (error) {
    console.error('Error sending email via Resend:', error);
    return { success: false, error };
  }
}
