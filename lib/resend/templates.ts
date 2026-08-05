import { ContactForm } from '@/types';

export function renderContactEmailTemplate(form: ContactForm): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>New Inquiry from ${form.name}</title>
      </head>
      <body style="font-family: sans-serif; background-color: #05070b; color: #ffffff; padding: 20px;">
        <h2 style="color: #2563eb;">New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${form.name}</p>
        <p><strong>Email:</strong> ${form.email}</p>
        <p><strong>Subject:</strong> ${form.subject || 'N/A'}</p>
        <hr style="border-color: #1f2937;" />
        <h3>Message:</h3>
        <p style="white-space: pre-wrap; color: #9ca3af;">${form.message}</p>
      </body>
    </html>
  `;
}
