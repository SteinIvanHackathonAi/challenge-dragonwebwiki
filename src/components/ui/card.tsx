import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ className, children }) => {
  return (
    <div className={cn('border rounded-lg overflow-hidden shadow-md bg-white', className)}>
      {children}
    </div>
  );
};

export default Card;