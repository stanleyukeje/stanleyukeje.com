import React from 'react';
import { cn } from '@/lib/utils';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export function Textarea({
  label,
  error,
  helperText,
  className,
  id,
  rows = 4,
  ...props
}: TextareaProps) {
  const textareaId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <label htmlFor={textareaId} className="text-sm font-medium text-white">
          {label}
        </label>
      )}
      <textarea
        id={textareaId}
        rows={rows}
        className={cn(
          'w-full rounded-lg border border-[#1F2937] bg-[#0E131B] px-3.5 py-2.5 text-sm text-white placeholder-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:ring-1 focus:ring-[#2563EB] transition-colors disabled:opacity-50',
          error && 'border-[#EF4444] focus:border-[#EF4444] focus:ring-[#EF4444]',
          className
        )}
        {...props}
      />
      {error && <span className="text-xs text-[#EF4444]">{error}</span>}
      {!error && helperText && <span className="text-xs text-[#9CA3AF]">{helperText}</span>}
    </div>
  );
}
