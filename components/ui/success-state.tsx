import React from 'react';
import { Card } from './card';
import { Subheading, Body } from './typography';
import { CheckCircle2 } from 'lucide-react';

export interface SuccessStateProps {
  title?: string;
  description?: string;
}

export function SuccessState({
  title = 'Action Successful',
  description = 'Your request has been processed successfully.',
}: SuccessStateProps) {
  return (
    <Card className="flex flex-col items-center justify-center p-8 text-center border-[#22C55E]/30 bg-[#22C55E]/5">
      <CheckCircle2 className="h-10 w-10 text-[#22C55E] mb-3" />
      <Subheading className="text-xl font-bold text-white mb-2">{title}</Subheading>
      <Body className="text-sm text-[#9CA3AF] max-w-sm">{description}</Body>
    </Card>
  );
}
