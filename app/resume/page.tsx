import React from 'react';
import { Metadata } from 'next';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { canonicalResumeData } from '@/config/resume';
import { constructSEO, buildPersonJsonLd } from '@/lib/seo';
import { Download, Briefcase, GraduationCap, Award, ExternalLink, Mail, Phone, MapPin, Globe } from 'lucide-react';

export const metadata: Metadata = constructSEO({
  title: 'Curriculum Vitae & Resume | Stanley Ukeje',
  description:
    'Official Resume of Stanley Ukeje — Full Stack Software Engineer | Product Engineer. Technical skills, production projects, and experience.',
  path: '/resume',
});

export default function ResumePage() {
  const resume = canonicalResumeData;
  const personJsonLd = buildPersonJsonLd();

  return (
    <div className="py-12 md:py-20 bg-[#0B1220] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Container size="xl" className="flex flex-col gap-12 max-w-4xl">
        {/* Top Header & Primary Download CTA */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-[#334155] pb-8">
          <div className="flex flex-col gap-2">
            <Badge variant="primary" className="w-fit">
              Canonical Curriculum Vitae
            </Badge>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
              {resume.name}
            </h1>
            <p className="text-[#38BDF8] text-sm sm:text-base font-semibold">
              {resume.title}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={resume.pdfPath}
              download="Stanley_Ukeje_CV.pdf"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#2563EB] text-white font-bold text-sm hover:bg-[#3B82F6] transition-colors shadow-md shadow-blue-900/30"
            >
              <Download className="h-4 w-4" />
              <span>Download CV (PDF)</span>
            </a>
          </div>
        </div>

        {/* Contact Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4 rounded-xl bg-[#111827] border border-[#334155] text-xs text-[#CBD5E1]">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-[#2563EB]" />
            <span>{resume.contact.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-[#2563EB]" />
            <a
              href={resume.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              {resume.contact.phone}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-[#2563EB]" />
            <a href={`mailto:${resume.contact.email}`} className="hover:text-white transition-colors">
              {resume.contact.email}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4 text-[#2563EB]" />
            <a href={resume.contact.website} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              stanleyukeje.com
            </a>
          </div>
        </div>

        {/* Professional Summary */}
        <Section className="flex flex-col gap-3">
          <h2 className="text-xs font-bold text-[#38BDF8] uppercase tracking-wider font-mono">
            Professional Summary
          </h2>
          <p className="text-[#CBD5E1] leading-[1.7] text-sm sm:text-base bg-[#111827] p-6 rounded-xl border border-[#334155]">
            {resume.professionalSummary}
          </p>
        </Section>

        {/* Core Competencies */}
        <Section className="flex flex-col gap-3">
          <h2 className="text-xs font-bold text-[#38BDF8] uppercase tracking-wider font-mono">
            Core Competencies
          </h2>
          <div className="flex flex-wrap gap-2">
            {resume.coreCompetencies.map((comp) => (
              <Badge key={comp} variant="default" className="text-xs py-1.5 px-3">
                {comp}
              </Badge>
            ))}
          </div>
        </Section>

        {/* Technical Skills */}
        <Section className="flex flex-col gap-4">
          <h2 className="text-xs font-bold text-[#38BDF8] uppercase tracking-wider font-mono">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="flex flex-col gap-2">
              <span className="text-xs font-semibold text-white">Frontend</span>
              <div className="flex flex-wrap gap-1.5">
                {resume.technicalSkills.frontend.map((s) => (
                  <Badge key={s} variant="primary" className="text-xs">{s}</Badge>
                ))}
              </div>
            </Card>
            <Card className="flex flex-col gap-2">
              <span className="text-xs font-semibold text-white">Backend & Database</span>
              <div className="flex flex-wrap gap-1.5">
                {[...resume.technicalSkills.backend, ...resume.technicalSkills.database].map((s) => (
                  <Badge key={s} variant="primary" className="text-xs">{s}</Badge>
                ))}
              </div>
            </Card>
            <Card className="flex flex-col gap-2">
              <span className="text-xs font-semibold text-white">Cloud & DevOps</span>
              <div className="flex flex-wrap gap-1.5">
                {resume.technicalSkills.cloudDevOps.map((s) => (
                  <Badge key={s} variant="primary" className="text-xs">{s}</Badge>
                ))}
              </div>
            </Card>
            <Card className="flex flex-col gap-2">
              <span className="text-xs font-semibold text-white">Tools & SQA</span>
              <div className="flex flex-wrap gap-1.5">
                {resume.technicalSkills.tools.map((s) => (
                  <Badge key={s} variant="primary" className="text-xs">{s}</Badge>
                ))}
              </div>
            </Card>
          </div>
        </Section>

        {/* Professional Experience */}
        <Section className="flex flex-col gap-6">
          <div className="flex items-center gap-2 text-white font-bold text-lg border-b border-[#334155] pb-3">
            <Briefcase className="h-5 w-5 text-[#2563EB]" />
            <span>Experience</span>
          </div>

          <div className="flex flex-col gap-4 border-l-2 border-[#2563EB] pl-4 sm:pl-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <h3 className="font-bold text-lg text-white">{resume.experience.role}</h3>
              <span className="text-xs text-[#38BDF8] font-mono font-semibold">{resume.experience.period}</span>
            </div>
            <p className="text-sm text-[#CBD5E1] leading-[1.7]">{resume.experience.summary}</p>
            <ul className="flex flex-col gap-2 list-disc list-inside text-xs text-[#CBD5E1] pt-1">
              {resume.experience.bulletPoints.map((pt, idx) => (
                <li key={idx} className="leading-[1.7]">{pt}</li>
              ))}
            </ul>
          </div>
        </Section>

        {/* Production Projects */}
        <Section className="flex flex-col gap-6">
          <div className="flex items-center gap-2 text-white font-bold text-lg border-b border-[#334155] pb-3">
            <Briefcase className="h-5 w-5 text-[#2563EB]" />
            <span>Production Projects</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {resume.productionProjects.map((p) => (
              <Card key={p.name} className="flex flex-col justify-between gap-3">
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-white text-base">{p.name}</h3>
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#38BDF8] hover:underline flex items-center gap-1"
                    >
                      <span>{p.url.replace('https://', '')}</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                  <span className="text-xs text-[#2563EB] font-medium">{p.subtitle}</span>
                  <p className="text-xs text-[#CBD5E1] leading-relaxed">{p.description}</p>
                </div>
                <div className="flex flex-wrap gap-1 pt-2 border-t border-[#334155]">
                  {p.stack.map((s) => (
                    <Badge key={s} variant="default" className="text-[10px] py-0.5 px-2">{s}</Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Section>

        {/* Education & Certification */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Section className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-white font-bold text-lg border-b border-[#334155] pb-3">
              <GraduationCap className="h-5 w-5 text-[#2563EB]" />
              <span>Education</span>
            </div>
            <div className="flex flex-col gap-3">
              {resume.education.map((edu) => (
                <Card key={edu.degree} className="flex flex-col gap-1">
                  <h3 className="font-bold text-white text-sm">{edu.degree}</h3>
                  <p className="text-xs text-[#CBD5E1]">{edu.institution}</p>
                </Card>
              ))}
            </div>
          </Section>

          <Section className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-white font-bold text-lg border-b border-[#334155] pb-3">
              <Award className="h-5 w-5 text-[#2563EB]" />
              <span>Certification</span>
            </div>
            <Card className="flex flex-col gap-1">
              <h3 className="font-bold text-white text-sm">{resume.certification.title}</h3>
              <p className="text-xs text-[#CBD5E1]">
                {resume.certification.issuer} • {resume.certification.year}
              </p>
            </Card>
          </Section>
        </div>

        {/* Availability */}
        <Section className="flex flex-col gap-3">
          <h2 className="text-xs font-bold text-[#38BDF8] uppercase tracking-wider font-mono">
            Availability
          </h2>
          <Card className="p-4 border-[#22C55E]/40 bg-[#22C55E]/10 text-xs text-[#4ADE80] font-medium">
            {resume.availability}
          </Card>
        </Section>

        {/* Bottom Secondary Download CTA */}
        <div className="flex justify-center pt-6 border-t border-[#334155]">
          <a
            href={resume.pdfPath}
            download="Stanley_Ukeje_CV.pdf"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#2563EB] text-white font-bold text-sm hover:bg-[#3B82F6] transition-colors shadow-md shadow-blue-900/30"
          >
            <Download className="h-4 w-4" />
            <span>Download CV (PDF)</span>
          </a>
        </div>
      </Container>
    </div>
  );
}
