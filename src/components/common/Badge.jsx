import React from 'react';

/**
 * High-luxury micro-badge or chip component with frosted glass and gold border
 */
export default function Badge({
  children,
  variant = 'gold',
  size = 'sm',
  className = '',
  icon: Icon,
}) {
  const sizeStyles = {
    xs: 'text-[10px] tracking-[0.16em] py-0.5 px-2.5 uppercase font-bold',
    sm: 'text-xs tracking-[0.14em] py-1 px-3 uppercase font-semibold',
    md: 'text-sm tracking-[0.12em] py-1.5 px-4 uppercase font-semibold',
  };

  const variants = {
    gold: 'bg-white/85 text-champagne-800 border border-champagne-400/50 shadow-sm backdrop-blur-md',
    goldSolid: 'bg-champagne-500/15 text-champagne-800 border border-champagne-500/30',
    dark: 'bg-obsidian/80 text-champagne-300 border border-champagne-500/40 backdrop-blur-md',
    subtle: 'bg-surface-low text-text-secondary border border-surface-container',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full ${sizeStyles[size] || sizeStyles.sm} ${variants[variant] || variants.gold} ${className}`}
    >
      {Icon && <Icon className="w-3.5 h-3.5 text-champagne-600" />}
      <span>{children}</span>
    </span>
  );
}
