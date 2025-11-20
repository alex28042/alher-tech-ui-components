import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  noPadding?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = '', 
  hoverEffect = false,
  noPadding = false
}) => {
  return (
    <div 
      className={`
        relative overflow-hidden rounded-2xl border border-white/[0.08]
        bg-[#171717]/60 backdrop-blur-xl
        transition-all duration-300 ease-out
        ${noPadding ? 'p-0' : 'p-6'}
        ${hoverEffect ? 'hover:border-white/[0.15] hover:bg-[#1c1c1c]/80 hover:shadow-lg hover:-translate-y-0.5' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};