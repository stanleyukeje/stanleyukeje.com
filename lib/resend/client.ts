import { Resend } from 'resend';
import { resendConfig } from '@/config/resend';

export const resend = new Resend(resendConfig.apiKey || 're_placeholder');
