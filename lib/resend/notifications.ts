import { resend } from './client';
import { resendConfig } from '@/config/resend';

export async function sendNotification(title: string, message: string) {
  try {
    const data = await resend.emails.send({
      from: resendConfig.fromEmail,
      to: resendConfig.toEmail,
      subject: `[Platform Alert] ${title}`,
      text: message,
    });
    return { success: true, data };
  } catch (error) {
    console.error('Error sending notification via Resend:', error);
    return { success: false, error };
  }
}
