import React from 'react';
import { motion } from 'framer-motion';

interface BoxProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
  noPadding?: boolean;
  borderColor?: string;
}

export const TuiBox: React.FC<BoxProps> = ({ 
  children, 
  title, 
  className = "", 
  noPadding = false,
  borderColor = "border-gruv-fg" 
}) => {
  return (
    <div className={`relative border-2 ${borderColor} bg-gruv-bg ${className}`}>
      {title && (
        <div className={`absolute -top-3 left-4 px-2 bg-gruv-bg text-sm font-bold uppercase tracking-wider ${borderColor.replace('border-', 'text-')}`}>
          [{title}]
        </div>
      )}
      <div className={`${noPadding ? '' : 'p-6'}`}>
        {children}
      </div>
      {/* Decorative corners */}
      <div className={`absolute -top-[2px] -left-[2px] w-2 h-2 bg-gruv-bg border-t-2 border-l-2 ${borderColor}`} />
      <div className={`absolute -top-[2px] -right-[2px] w-2 h-2 bg-gruv-bg border-t-2 border-r-2 ${borderColor}`} />
      <div className={`absolute -bottom-[2px] -left-[2px] w-2 h-2 bg-gruv-bg border-b-2 border-l-2 ${borderColor}`} />
      <div className={`absolute -bottom-[2px] -right-[2px] w-2 h-2 bg-gruv-bg border-b-2 border-r-2 ${borderColor}`} />
    </div>
  );
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
  active?: boolean;
}

export const TuiButton: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  active = false,
  className = "",
  ...props 
}) => {
  let colors = "border-gruv-fg text-gruv-fg hover:bg-gruv-fg hover:text-gruv-bg";
  
  if (variant === 'secondary') {
    colors = "border-gruv-blue text-gruv-blue hover:bg-gruv-blue hover:text-gruv-bg";
  } else if (variant === 'danger') {
    colors = "border-gruv-red text-gruv-red hover:bg-gruv-red hover:text-gruv-bg";
  }

  if (active) {
     colors = "bg-gruv-fg text-gruv-bg border-gruv-fg";
     if (variant === 'secondary') colors = "bg-gruv-blue text-gruv-bg border-gruv-blue";
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`border-2 px-4 py-2 uppercase font-bold tracking-widest transition-colors duration-100 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gruv-bg focus:ring-gruv-yellow ${colors} ${className}`}
      {...props}
    >
      {active ? '> ' : ''}{children}
    </motion.button>
  );
};

export const TuiBadge: React.FC<{ children: React.ReactNode; color?: string }> = ({ children, color = "text-gruv-aqua border-gruv-aqua" }) => {
  return (
    <span className={`border px-2 py-0.5 text-xs font-bold uppercase ${color}`}>
      {children}
    </span>
  );
};

export const GlitchText: React.FC<{ text: string }> = ({ text }) => {
  return (
    <span className="relative inline-block group">
      <span className="relative z-10">{text}</span>
      <span className="absolute top-0 left-0 -ml-0.5 translate-x-[2px] text-gruv-red opacity-0 group-hover:opacity-70 animate-pulse">{text}</span>
      <span className="absolute top-0 left-0 -ml-0.5 -translate-x-[2px] text-gruv-blue opacity-0 group-hover:opacity-70 animate-pulse delay-75">{text}</span>
    </span>
  );
};