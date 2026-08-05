import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { resumeData } from '@/config/resume';
import { Briefcase, GraduationCap, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Resume',
  description:
    'Professional resume of Stanley Ukeje — Product Engineer specializing in full-stack architecture, software quality assurance, and resilient cloud systems.',
};

export default function ResumePage() {
  return (
    <div className="py-12 md:py-20 bg-[#05070B] text-white">
      <Container size="xl" className="flex flex-col gap-12 max-w-4xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-[#1F2937] pb-8">
          <div className="flex flex-col gap-2">
            <Badge variant="primary" className="w-fit">
              Engineering Resume
            </Badge>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Stanley Ukeje
            </h1>
            <p className="text-[#9CA3AF] text-sm sm:text-base">
              Senior Product Engineer | Software Architecture & SQA Specialist
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="mailto:stanley@stanleyukeje.com"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#2563EB] text-white text-sm font-semibold hover:bg-blue-600 transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span>Contact</span>
            </Link>
          </div>
        </div>

        <Section className="flex flex-col gap-4">
          <h2 className="text-xl font-bold text-white uppercase tracking-wider text-xs text-[#2563EB]">
            Executive Summary
          </h2>
          <p className="text-[#9CA3AF] leading-relaxed text-sm sm:text-base bg-[#0E131B] p-6 rounded-xl border border-[#1F2937]">
            {resumeData.summary}
          </p>
        </Section>

        <Section className="flex flex-col gap-6">
          <h2 className="text-xl font-bold text-white uppercase tracking-wider text-xs text-[#2563EB]">
            Technical Competencies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {resumeData.skillCategories.map((cat) => (
              <Card key={cat.category} className="flex flex-col gap-3">
                <h3 className="font-semibold text-white text-sm">{cat.category}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill) => (
                    <Badge key={skill} variant="default" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Section>

        <Section className="flex flex-col gap-6">
          <div className="flex items-center gap-2 text-white font-bold text-lg border-b border-[#1F2937] pb-3">
            <Briefcase className="h-5 w-5 text-[#2563EB]" />
            <span>Professional Experience</span>
          </div>

          <div className="flex flex-col gap-8">
            {resumeData.experience.map((exp) => (
              <div key={exp.company + exp.period} className="flex flex-col gap-3 border-l-2 border-[#2563EB] pl-4 sm:pl-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h3 className="font-bold text-lg text-white">{exp.role}</h3>
                  <span className="text-xs text-[#9CA3AF] font-mono">{exp.period}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#2563EB] font-medium">
                  <span>{exp.company}</span>
                  <span>•</span>
                  <span className="text-[#9CA3AF]">{exp.location}</span>
                </div>
                <p className="text-sm text-[#9CA3AF] leading-relaxed">{exp.description}</p>
                <ul className="flex flex-col gap-1.5 list-disc list-inside text-xs text-[#9CA3AF] pt-1">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="leading-normal">{highlight}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section className="flex flex-col gap-6">
          <div className="flex items-center gap-2 text-white font-bold text-lg border-b border-[#1F2937] pb-3">
            <GraduationCap className="h-5 w-5 text-[#2563EB]" />
            <span>Education</span>
          </div>

          <div className="flex flex-col gap-4">
            {resumeData.education.map((edu) => (
              <Card key={edu.institution} className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-white text-sm">{edu.degree} in {edu.field}</h3>
                  <span className="text-xs text-[#9CA3AF] font-mono">{edu.period}</span>
                </div>
                <p className="text-xs text-[#2563EB]">{edu.institution} ({edu.location})</p>
              </Card>
            ))}
          </div>
        </Section>
      </Container>
    </div>
  );
}
