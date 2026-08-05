import React from 'react';
import { Button } from './button';
import { Card } from './card';
import { Subheading, Body } from './typography';
import { AlertCircle } from 'lucide-react';

export interface EmptyStateProps {
  title?: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
  icon?: React.ReactNode;
}

export function EmptyState({
  title = 'No items found',
  description = 'There are no items to display at this time.',
  actionLabel,
  onAction,
  icon = <AlertCircle className="h-10 w-10 text-[#9CA3AF]" />,
}: EmptyStateProps) {
  return (
    <Card className="flex flex-col items-center justify-center p-12 text-center border-dashed border-[#1F2937] bg-transparent">
      <div className="mb-4">{icon}</div>
      <Subheading className="text-xl font-bold text-white mb-2">{title}</Subheading>
      <Body className="text-sm text-[#9CA3AF] max-w-sm mb-6">{description}</Body>
      {actionLabel && onAction && (
        <Button variant="primary" onClick={onAction}>
          {actionLabel}
        </Button>
      )}
    </Card>
  );
}
