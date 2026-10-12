import React from 'react';
import { Users, MapPin, Wind, Sparkles } from 'lucide-react';

const statsData = [
  {
    icon: Users,
    value: '400+ Guests',
    label: 'Banquet Seating',
    sub: 'Grand Dining Capacity',
  },
  {
    icon: MapPin,
    value: 'Prime Galle',
    label: 'Central Location',
    sub: 'Heart of Galle City',
  },
  {
    icon: Wind,
    value: '100% Climate',
    label: 'Air-Conditioned',
    sub: 'Year-Round Comfort',
  },
  {
    icon: Sparkles,
    value: 'Full Service',
    label: 'Event Coordination',
    sub: 'Dedicated Host Support',
  },
];

export default function StatsHighlight() {
  return (
    <div className="w-full max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 mt-5 sm:mt-10 lg:mt-12">
      {statsData.map((stat, index) => {
        const IconComponent = stat.icon;
        return (
          <div
            key={index}
            className="glass-dark border border-champagne-400/30 rounded-lg p-2.5 sm:p-4 text-left transition-all duration-300 hover:border-champagne-400 hover:bg-black/70 hover:shadow-gold-subtle"
          >
            <div className="flex items-center gap-1.5 sm:gap-2 mb-0.5 sm:mb-1">
              <IconComponent className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-champagne-400 flex-shrink-0" />
              <span className="font-serif text-sm sm:text-lg font-bold text-white tracking-wide truncate">
                {stat.value}
              </span>
            </div>
            <p className="text-[10px] sm:text-xs font-semibold text-champagne-300 uppercase tracking-wider truncate">
              {stat.label}
            </p>
            <p className="hidden sm:block text-[11px] sm:text-xs text-stone-300 truncate mt-0.5 font-light">
              {stat.sub}
            </p>
          </div>
        );
      })}
    </div>
  );
}
