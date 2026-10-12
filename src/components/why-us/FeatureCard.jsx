import React from 'react';
import { MapPin, Sliders, UtensilsCrossed, ShieldCheck } from 'lucide-react';

const iconMap = {
  MapPin,
  Sliders,
  UtensilsCrossed,
  ShieldCheck,
};

export default function FeatureCard({ item }) {
  const IconComponent = iconMap[item.icon] || ShieldCheck;

  return (
    <div
      className={`rounded-lg p-5 sm:p-8 flex flex-col justify-between h-full transition-all duration-300 ${
        item.isHighlighted
          ? 'bg-gradient-to-b from-champagne-50/80 to-white border border-champagne-400 shadow-card-hover relative ring-1 ring-champagne-400/30'
          : 'bg-white border border-champagne-400/25 shadow-card-rest hover:border-champagne-400 hover:shadow-card-hover'
      }`}
    >
      <div>
        <div className="flex items-center justify-between mb-5">
          <div
            className={`w-11 h-11 rounded-full flex items-center justify-center transition-colors ${
              item.isHighlighted
                ? 'bg-champagne-500 text-white shadow-sm'
                : 'bg-surface-low border border-champagne-300/40 text-champagne-700'
            }`}
          >
            <IconComponent className="w-5 h-5" />
          </div>

          {item.badge && (
            <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-champagne-900 bg-champagne-200/80 px-2.5 py-1 rounded-full border border-champagne-400/50">
              {item.badge}
            </span>
          )}
        </div>

        <h3 className="font-serif text-lg sm:text-xl font-semibold text-obsidian tracking-tight mb-3">
          {item.title}
        </h3>

        <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-light">
          {item.description}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-surface-container/70 flex items-center justify-between text-[11px] font-semibold tracking-wider uppercase text-champagne-700">
        <span>Airi Hospitality</span>
        <span className="w-1.5 h-1.5 rounded-full bg-champagne-500" />
      </div>
    </div>
  );
}
