import React from 'react';

/**
 * 12-column layout container with responsive margins matching SADP UI/UX rules
 */
export default function Container({ children, className = '', id }) {
  return (
    <div
      id={id}
      className={`w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 ${className}`}
    >
      {children}
    </div>
  );
}
