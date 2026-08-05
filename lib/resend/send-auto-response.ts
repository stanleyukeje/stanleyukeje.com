import { resend } from './client';
import { SOCIAL_URLS } from '@/config/social';

export interface AutoResponseParams {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export function buildAutoResponseHtml(params: AutoResponseParams): string {
  const firstName = params.name.trim().split(' ')[0] || params.name;
  const submittedSubject = params.subject || 'Website Contact Form Submission';

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thanks for reaching out — Stanley Ukeje</title>
</head>
<body style="margin:0; padding:0; background-color:#0B1220; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color:#CBD5E1;">
  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color:#0B1220; padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="100%" max-width="600" border="0" cellspacing="0" cellpadding="0" style="max-width:600px; background-color:#111827; border:1px solid #334155; border-radius:16px; padding:32px; text-align:left;">
          <!-- Header Logo / Brand -->
          <tr>
            <td style="padding-bottom:24px; border-bottom:1px solid #334155;">
              <span style="font-size:20px; font-weight:800; color:#FFFFFF; tracking-tight: -0.5px;">STANLEY UKEJE</span>
              <br>
              <span style="font-size:12px; font-weight:600; color:#38BDF8; font-family:monospace;">FULL STACK SOFTWARE ENGINEER | PRODUCT ENGINEER</span>
            </td>
          </tr>

          <!-- Main Greeting & Message Body -->
          <tr>
            <td style="padding:28px 0; font-size:15px; line-height:1.7; color:#CBD5E1;">
              <p style="margin-top:0; color:#FFFFFF; font-weight:700; font-size:16px;">Hi ${firstName},</p>
              
              <p style="margin:16px 0;">Thank you for reaching out through my website. I've received your message successfully and appreciate you taking the time to get in touch.</p>

              <p style="margin:16px 0;">Whether you're reaching out about:</p>

              <ul style="margin:12px 0; padding-left:20px; color:#CBD5E1;">
                <li style="margin-bottom:6px;">a software engineering role</li>
                <li style="margin-bottom:6px;">a freelance project</li>
                <li style="margin-bottom:6px;">a contract opportunity</li>
                <li style="margin-bottom:6px;">technical collaboration</li>
                <li style="margin-bottom:6px;">or a question about one of my projects</li>
              </ul>

              <p style="margin:16px 0;">I'll personally review your message and get back to you as soon as possible, usually within one business day.</p>

              <p style="margin:16px 0;">In the meantime, you're welcome to explore some of my work:</p>

              <p style="margin:12px 0;">
                • <strong>Portfolio</strong>: <a href="https://stanleyukeje.com" style="color:#38BDF8; text-decoration:none;">stanleyukeje.com</a><br>
                • <strong>GitHub</strong>: <a href="${SOCIAL_URLS.github}" style="color:#38BDF8; text-decoration:none;">github.com/stanleyukeje</a><br>
                • <strong>LinkedIn</strong>: <a href="${SOCIAL_URLS.linkedin}" style="color:#38BDF8; text-decoration:none;">linkedin.com/in/stanleyukeje</a>
              </p>

              <p style="margin:24px 0 0 0; color:#FFFFFF; font-weight:600;">
                Thank you again.<br>
                I look forward to speaking with you.
              </p>

              <p style="margin:16px 0 0 0; color:#38BDF8; font-weight:700;">
                — Stanley Ukeje
              </p>
            </td>
          </tr>

          <!-- Message Summary Box -->
          <tr>
            <td style="padding:20px; background-color:#0B1220; border:1px solid #334155; border-radius:12px; font-size:13px; color:#94A3B8;">
              <p style="margin-top:0; font-weight:700; color:#FFFFFF; font-size:12px; text-transform:uppercase; letter-spacing:1px; font-family:monospace;">Your Submitted Message</p>
              <p style="margin:8px 0; color:#CBD5E1;"><strong>Subject:</strong> ${submittedSubject}</p>
              <p style="margin:8px 0; color:#CBD5E1; white-space:pre-wrap;"><strong>Message:</strong><br>${params.message}</p>
            </td>
          </tr>

          <!-- Footer Signature -->
          <tr>
            <td style="padding-top:24px; border-top:1px solid #334155; margin-top:24px; font-size:12px; color:#64748B; text-align:center;">
              <p style="margin:0; font-weight:600; color:#94A3B8;">Stanley Ukeje</p>
              <p style="margin:4px 0; color:#64748B;">Full Stack Software Engineer | Product Engineer</p>
              <p style="margin:4px 0;"><a href="https://stanleyukeje.com" style="color:#38BDF8; text-decoration:none;">https://stanleyukeje.com</a></p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

export async function sendAutoResponseEmail(params: AutoResponseParams) {
  try {
    const htmlContent = buildAutoResponseHtml(params);

    const data = await resend.emails.send({
      from: 'Stanley Ukeje <stan@stanleyukeje.com>',
      to: params.email,
      replyTo: 'stan@stanleyukeje.com',
      subject: "Thanks for reaching out — I've received your message",
      html: htmlContent,
    });

    return { success: true, data };
  } catch (error) {
    console.error('Error sending auto-response email via Resend:', error);
    return { success: false, error };
  }
}
