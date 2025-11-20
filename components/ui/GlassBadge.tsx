import React from 'react';

interface GlassBadgeProps {
  children: React.ReactNode;
  variant?: 'success' | 'warning' | 'error' | 'info' | 'neutral' | 'outline';
  className?: string;
}

export const GlassBadge: React.FC<GlassBadgeProps> = ({ 
  children, 
  variant = 'neutral',
  className = '' 
}) => {
  const variants = {
    success: "bg-green-400/10 text-green-400 border-green-400/20",
    warning: "bg-yellow-400/10 text-yellow-400 border-yellow-400/20",
    error: "bg-red-400/10 text-red-400 border-red-400/20",
    info: "bg-blue-400/10 text-blue-400 border-blue-400/20",
    neutral: "bg-white/[0.05] text-neutral-400 border-white/[0.05]",
    outline: "bg-transparent text-neutral-400 border-white/[0.1]"
  };

  return (
    <span className={`
      inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border
      ${variants[variant]}
      ${className}
    `}>
      {children}
    </span>
  );
};