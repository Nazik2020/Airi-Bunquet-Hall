import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function GalleryCard({ item, onSelect, className = '', isWide = false }) {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onSelect(item);
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onClick={() => onSelect(item)}
      className={`group bg-white rounded-lg border border-champagne-400/25 overflow-hidden shadow-card-rest hover:shadow-card-hover hover:border-champagne-400 transition-all duration-300 flex flex-col justify-between cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne-500 focus-visible:ring-offset-2 ${className}`}
    >
      <div>
        {/* Image Container */}
        <div className={`relative overflow-hidden bg-stone-100 ${isWide ? 'h-52 sm:h-64' : 'h-52 sm:h-60'}`}>
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80" />
          
          {/* Floating Pill Badge */}
          <div className="absolute top-3 left-3">
            <span className="glass-badge text-champagne-900 text-[10px] sm:text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
              {item.badge}
            </span>
          </div>
        </div>

        {/* Text Details */}
        <div className="p-5 sm:p-6">
          <h3 className="font-serif text-lg sm:text-xl font-semibold text-obsidian tracking-tight group-hover:text-champagne-700 transition-colors">
            {item.title}
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-text-secondary leading-relaxed font-light line-clamp-3">
            {item.description}
          </p>
        </div>
      </div>

      {/* Footer Link */}
      <div className="px-5 sm:px-6 pb-5 pt-2 flex items-center justify-between border-t border-surface-container/60">
        <span className="text-xs font-semibold uppercase tracking-wider text-obsidian group-hover:text-champagne-700 transition-colors flex items-center gap-1.5">
          <span className="leading-none">Explore Details</span>
          <ArrowRight className="w-3.5 h-3.5 flex-shrink-0 transform transition-transform duration-300 group-hover:translate-x-1" />
        </span>
        <span className="text-[10px] uppercase font-bold text-champagne-600 tracking-widest bg-champagne-50 px-2 py-0.5 rounded">
          {item.category}
        </span>
      </div>
    </div>
  );
}
