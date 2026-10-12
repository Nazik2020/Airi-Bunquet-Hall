import React from 'react';

/**
 * Reusable luxury button adhering to design system specs:
 * - Primary: Warm obsidian (#1C1917), pure white text, 4px radius, subtle gold hover
 * - Champagne: Flagship champagne gold (#C5A059)
 * - Outline: Transparent with 1px gold border
 * - Ghost: Translucent glass button
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  href,
  type = 'button',
  icon: Icon,
  iconPosition = 'right',
  disabled = false,
  ...props
}) {
  const baseStyles =
    'inline-flex items-center justify-center font-sans font-semibold tracking-wider transition-all duration-300 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne-500 focus-visible:ring-offset-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none group';

  const sizeStyles = {
    sm: 'text-xs uppercase px-4 py-2 min-h-[38px] tracking-widest',
    md: 'text-xs md:text-sm uppercase px-6 py-2.5 min-h-[44px] tracking-widest',
    lg: 'text-sm md:text-base uppercase px-8 py-3.5 min-h-[48px] tracking-widest',
  };

  const variants = {
    primary:
      'bg-obsidian text-white border border-transparent hover:bg-obsidian-light hover:border-champagne-500 hover:shadow-gold-subtle active:scale-[0.99]',
    champagne:
      'bg-champagne-500 text-obsidian font-bold border border-champagne-400 hover:bg-champagne-600 hover:text-white shadow-gold-subtle active:scale-[0.99]',
    outline:
      'bg-transparent text-obsidian border border-champagne-500/60 hover:border-champagne-600 hover:bg-champagne-50/50 hover:text-champagne-800 active:scale-[0.99]',
    outlineWhite:
      'bg-white/10 text-white border border-white/40 hover:bg-white hover:text-obsidian backdrop-blur-sm active:scale-[0.99]',
    ghost:
      'bg-transparent text-obsidian hover:text-champagne-600',
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variants[variant] || variants.primary} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && (
        <Icon className="w-4 h-4 mr-2 flex-shrink-0 transition-transform duration-300 group-hover:-translate-x-0.5" />
      )}
      <span className="inline-flex items-center leading-none">{children}</span>
      {Icon && iconPosition === 'right' && (
        <Icon className="w-4 h-4 ml-2 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={combinedClasses} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {content}
    </button>
  );
}
