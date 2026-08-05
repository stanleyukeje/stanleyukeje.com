import React from 'react';
import { Card } from '@/components/ui/card';

export interface LessonSectionProps {
  lessons: string[];
}

export function LessonSection({ lessons }: LessonSectionProps) {
  if (!lessons || lessons.length === 0) return null;

  return (
    <div className="flex flex-col gap-3">
      {lessons.map((lesson, idx) => (
        <Card key={idx} className="border-[#334155] bg-[#111827] p-4 text-sm text-[#CBD5E1] flex items-start gap-3">
          <span className="font-mono text-xs font-bold text-[#38BDF8] mt-0.5">0{idx + 1}</span>
          <span className="leading-[1.7]">{lesson}</span>
        </Card>
      ))}
    </div>
  );
}
