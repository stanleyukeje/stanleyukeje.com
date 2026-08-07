'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail, MapPin, Phone, Send, CheckCircle2, ExternalLink } from 'lucide-react';
import { socialLinks, SOCIAL_URLS } from '@/config/social';
import { canonicalResumeData } from '@/config/resume';

function getRandomNum() {
  return Math.floor(Math.random() * 9) + 1;
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [{ mathNum1, mathNum2 }, setMathQuestion] = useState(() => ({
    mathNum1: getRandomNum(),
    mathNum2: getRandomNum(),
  }));

  const [userAnswer, setUserAnswer] = useState('');
  const [touchedMath, setTouchedMath] = useState(false);

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const generateNewMathQuestion = () => {
    setMathQuestion({
      mathNum1: getRandomNum(),
      mathNum2: getRandomNum(),
    });
    setUserAnswer('');
    setTouchedMath(false);
  };

  const isMathCorrect = parseInt(userAnswer.trim(), 10) === mathNum1 + mathNum2;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isMathCorrect) return;

    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          num1: mathNum1,
          num2: mathNum2,
          mathAnswer: userAnswer,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        generateNewMathQuestion();
      } else {
        setStatus('error');
        if (res.status === 429) {
          setErrorMessage("You're sending messages a little too quickly. Please wait a while before trying again.");
        } else {
          setErrorMessage(data.error || 'Failed to submit contact message.');
        }
      }
    } catch {
      setStatus('error');
      setErrorMessage('Network error while dispatching message.');
    }
  };

  const handleResetForm = () => {
    setStatus('idle');
    generateNewMathQuestion();
  };

  return (
    <div className="py-12 md:py-20 bg-[#0B1220] text-white">
      <Container size="xl" className="flex flex-col gap-12 max-w-5xl">
        <Section className="flex flex-col gap-4 max-w-2xl">
          <Badge variant="primary" className="w-fit">
            Get In Touch
          </Badge>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
            Let’s discuss your software engineering goals.
          </h1>
          <p className="text-lg text-[#CBD5E1] leading-relaxed">
            Available for Remote, Contract, Freelance and Full-Time Software Engineering opportunities.
          </p>
        </Section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="flex flex-col gap-6 lg:col-span-1 h-fit">
            <h2 className="text-xl font-bold text-white border-b border-[#334155] pb-3">
              Direct Contact & Networks
            </h2>
            <div className="flex flex-col gap-4 text-sm text-[#CBD5E1]">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#2563EB]" />
                <a href="mailto:stan@stanleyukeje.com" className="hover:text-white transition-colors">
                  stan@stanleyukeje.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#2563EB]" />
                <a
                  href={SOCIAL_URLS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {canonicalResumeData.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-[#2563EB]" />
                <span>Sharjah, UAE (Remote, Worldwide)</span>
              </div>
            </div>

            <div className="flex flex-col gap-3 pt-4 border-t border-[#334155]">
              <h3 className="text-xs font-semibold text-white uppercase tracking-wider">
                Official Channels
              </h3>
              <div className="flex flex-col gap-2">
                {socialLinks.map((s) => (
                  <Link
                    key={s.platform}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#CBD5E1] hover:text-[#38BDF8] transition-colors flex items-center justify-between"
                  >
                    <span>{s.platform}</span>
                    <ExternalLink className="h-3 w-3" />
                  </Link>
                ))}
              </div>
            </div>
          </Card>

          <Card className="lg:col-span-2">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                <CheckCircle2 className="h-12 w-12 text-[#22C55E]" />
                <h2 className="text-2xl font-bold text-white">Message Dispatched</h2>
                <p className="text-sm text-[#CBD5E1] max-w-md leading-[1.7]">
                  Thanks! Your message has been sent successfully. I’ve also sent a confirmation email to your inbox. I’ll get back to you as soon as possible.
                </p>
                <Button variant="outline" onClick={handleResetForm} className="mt-4">
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
                    <label htmlFor="email" className="text-xs font-semibold text-white">
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
                  <label htmlFor="subject" className="text-xs font-semibold text-white">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="Engineering Role / Project Consultation"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs font-semibold text-white">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    required
                    rows={5}
                    placeholder="Describe your software project scope or role opportunity..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                {/* Single inline math verification row */}
                <div className="flex items-center gap-3 pt-2">
                  <span className="text-xs font-medium text-[#CBD5E1] whitespace-nowrap">
                    What is {mathNum1} + {mathNum2}?
                  </span>
                  <Input
                    type="text"
                    inputMode="numeric"
                    autoComplete="off"
                    aria-label="Math verification answer"
                    placeholder="Answer"
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    onBlur={() => setTouchedMath(true)}
                    className={`w-24 text-xs py-1.5 px-2.5 ${
                      touchedMath && !isMathCorrect && userAnswer.length > 0
                        ? 'border-[#EF4444] focus:ring-[#EF4444]'
                        : ''
                    }`}
                  />
                </div>

                {status === 'error' && (
                  <p className="text-xs text-[#EF4444] font-medium">{errorMessage}</p>
                )}

                <Button
                  type="submit"
                  disabled={status === 'loading' || !isMathCorrect}
                  className="w-fit flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
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
