import React from 'react';
import { Heart, Building2, Sparkles, Briefcase, ArrowRight } from 'lucide-react';

const iconMap = {
  Heart,
  Building2,
  Sparkles,
  Briefcase,
};

export default function OccasionCard({ item }) {
  const IconComponent = iconMap[item.icon] || Sparkles;

  return (
    <div className="group bg-white rounded-lg p-5 sm:p-7 border border-champagne-400/25 shadow-card-rest hover:shadow-card-hover hover:border-champagne-400 transition-all duration-300 flex flex-col justify-between h-full">
      <div>
        {/* Icon & Highlight status pill */}
        <div className="flex items-center justify-between mb-4">
          <div className="w-10 h-10 rounded-full bg-surface-low border border-champagne-300/40 flex items-center justify-center text-champagne-700 group-hover:bg-champagne-500 group-hover:text-white transition-colors duration-300">
            <IconComponent className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-champagne-800 bg-champagne-100/70 px-2.5 py-0.5 rounded-full border border-champagne-300/60">
            {item.highlight}
          </span>
        </div>

        <p className="text-xs font-semibold tracking-wider text-champagne-700 uppercase mb-1.5">
          {item.badge}
        </p>

        <h3 className="font-serif text-lg sm:text-xl font-semibold text-obsidian tracking-tight leading-snug mb-3 group-hover:text-champagne-700 transition-colors">
          {item.title}
        </h3>

        <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-light">
          {item.description}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-surface-container">
        <a
          href="#booking"
          className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-obsidian group-hover:text-champagne-700 transition-colors gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne-500 rounded py-0.5"
        >
          <span className="leading-none">{item.linkText}</span>
          <ArrowRight className="w-3.5 h-3.5 flex-shrink-0 transform transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
}
