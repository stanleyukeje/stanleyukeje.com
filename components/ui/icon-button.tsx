import React from 'react';
import { cn } from '@/lib/utils';
import { Button, ButtonProps } from './button';

export interface IconButtonProps extends Omit<ButtonProps, 'children'> {
  icon: React.ReactNode;
  'aria-label': string;
}

export function IconButton({
  icon,
  'aria-label': ariaLabel,
  size = 'md',
  className,
  ...props
}: IconButtonProps) {
  const iconSizeClasses = {
    sm: 'p-1.5',
    md: 'p-2',
    lg: 'p-3',
  };

  return (
    <Button
      size={size}
      aria-label={ariaLabel}
      className={cn('rounded-lg aspect-square', iconSizeClasses[size], className)}
      {...props}
    >
      {icon}
    </Button>
  );
}
