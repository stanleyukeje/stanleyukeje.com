export const resendConfig = {
  apiKey: process.env.RESEND_API_KEY || '',
  fromEmail: process.env.RESEND_FROM_EMAIL || 'contact@stanleyukeje.com',
  toEmail: process.env.RESEND_TO_EMAIL || 'stan@stanleyukeje.com',
  defaultSubject: 'New Contact Form Submission | StanleyUkeje.com',
};
