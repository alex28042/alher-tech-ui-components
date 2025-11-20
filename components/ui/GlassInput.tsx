import React from 'react';

interface GlassInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const GlassInput: React.FC<GlassInputProps> = ({ className = '', ...props }) => {
  return (
    <input
      className={`
        flex h-11 w-full rounded-xl border border-white/[0.08] 
        bg-white/[0.03] px-4 py-2 text-sm text-white 
        placeholder:text-neutral-500 backdrop-blur-sm
        focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/20 focus-visible:border-white/20
        focus-visible:bg-white/[0.05]
        disabled:cursor-not-allowed disabled:opacity-50
        transition-all duration-200
        ${className}
      `}
      {...props}
    />
  );
};