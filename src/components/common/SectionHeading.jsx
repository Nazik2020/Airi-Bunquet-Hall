import React from 'react';

/**
 * Editorial Section Heading conforming to Playfair Display & Plus Jakarta Sans typography
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
  className = '',
}) {
  const alignmentClass =
    align === 'center' ? 'text-center mx-auto items-center' : 'text-left items-start';

  return (
    <div className={`flex flex-col max-w-3xl mb-10 sm:mb-12 lg:mb-14 ${alignmentClass} ${className}`}>
      {eyebrow && (
        <span
          className={`text-[11px] sm:text-xs font-bold tracking-[0.22em] uppercase mb-2.5 sm:mb-3 ${
            light ? 'text-champagne-300' : 'text-champagne-700'
          }`}
        >
          {eyebrow}
        </span>
      )}

      {title && (
        <h2
          className={`font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight leading-[1.2] ${
            light ? 'text-white' : 'text-obsidian'
          }`}
        >
          {title}
        </h2>
      )}

      {subtitle && (
        <p
          className={`mt-3 sm:mt-4 text-sm sm:text-base md:text-lg leading-relaxed font-sans font-light max-w-2xl ${
            light ? 'text-stone-300' : 'text-text-secondary'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
