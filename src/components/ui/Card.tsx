import React from 'react';
import { cn } from '@/src/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className, 
  hover = true,
  ...props 
}) => {
  return (
    <div 
      className={cn(
        'bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-sm transition-all',
        hover && 'hover:border-orange-500/50 hover:bg-white/[0.07]',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
