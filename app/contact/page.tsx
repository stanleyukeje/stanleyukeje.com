'use client';

import React, { useState } from 'react';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Failed to submit contact message.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Network error while dispatching message.');
    }
  };

  return (
    <div className="py-12 md:py-20 bg-[#05070B] text-white">
      <Container size="xl" className="flex flex-col gap-12 max-w-5xl">
        <Section className="flex flex-col gap-4 max-w-2xl">
          <Badge variant="primary" className="w-fit">
            Get In Touch
          </Badge>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
            Let’s discuss your next engineering project.
          </h1>
          <p className="text-lg text-[#9CA3AF] leading-relaxed">
            Have a question about software architecture, systems engineering, or technical consultation? Drop a message below.
          </p>
        </Section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="flex flex-col gap-6 lg:col-span-1 h-fit">
            <h2 className="text-xl font-bold text-white border-b border-[#1F2937] pb-3">
              Direct Contact
            </h2>
            <div className="flex flex-col gap-4 text-sm text-[#9CA3AF]">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#2563EB]" />
                <span>stanley@stanleyukeje.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-[#2563EB]" />
                <span>Lagos, Nigeria (Remote Worldwide)</span>
              </div>
            </div>
          </Card>

          <Card className="lg:col-span-2">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                <CheckCircle2 className="h-12 w-12 text-[#22C55E]" />
                <h2 className="text-2xl font-bold text-white">Message Dispatched</h2>
                <p className="text-sm text-[#9CA3AF] max-w-md">
                  Thank you for reaching out. Your message has been routed via Resend API and will be reviewed shortly.
                </p>
                <Button variant="outline" onClick={() => setStatus('idle')} className="mt-4">
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs font-semibold text-white">
                      Your Name *
                    </label>
                    <Input
                      id="name"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs font-semibold text-[#FFFFFF]">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="subject" className="text-xs font-semibold text-[#FFFFFF]">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="Engineering Consultation / Architecture Review"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs font-semibold text-[#FFFFFF]">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    required
                    rows={5}
                    placeholder="Describe your project scope or engineering query..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                {status === 'error' && (
                  <p className="text-xs text-[#EF4444] font-medium">{errorMessage}</p>
                )}

                <Button type="submit" disabled={status === 'loading'} className="w-fit flex items-center gap-2">
                  <Send className="h-4 w-4" />
                  <span>{status === 'loading' ? 'Dispatching...' : 'Send Message'}</span>
                </Button>
              </form>
            )}
          </Card>
        </div>
      </Container>
    </div>
  );
}
