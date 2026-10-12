import React from 'react';
import { MapPin, Navigation, ArrowRight } from 'lucide-react';

export default function MapEmbed() {
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    'Airi Banquet Hall 242 Olcott Mawatha Galle'
  )}`;

  return (
    <div className="relative rounded-lg overflow-hidden border border-champagne-400/30 shadow-card-rest hover:shadow-card-hover transition-shadow duration-300 bg-surface-container h-[300px] sm:h-[400px] lg:h-full min-h-[280px] sm:min-h-[380px]">
      {/* Interactive Map Iframe centered on Olcott Mawatha, Galle */}
      <iframe
        title="Airi Banquet Hall Galle Location Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15870.760195034636!2d80.2114777!3d6.0401824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae173bb6e927513%3A0x6b301cbf5bb6c81c!2sOlcott%20Mawatha%2C%20Galle!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full object-cover filter grayscale-[15%] contrast-[105%]"
      />

      {/* Floating Pin Card positioned cleanly at bottom-left so it never collides with Google's top-left place card */}
      <div className="absolute bottom-3 left-3 right-3 sm:right-auto sm:bottom-4 sm:left-4 sm:max-w-xs bg-white/95 backdrop-blur-md rounded-lg p-3 sm:p-3.5 shadow-md border border-champagne-400/40">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-champagne-500 text-white flex items-center justify-center flex-shrink-0">
            <MapPin className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-serif text-sm font-bold text-obsidian">
              Airi Banquet Hall
            </h4>
            <p className="text-[11px] text-text-secondary">
              242 Olcott Mawatha, Galle
            </p>
          </div>
        </div>

        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2.5 inline-flex items-center gap-1.5 text-xs font-semibold text-champagne-800 hover:text-champagne-950 uppercase tracking-wider group"
        >
          <Navigation className="w-3.5 h-3.5 flex-shrink-0 text-champagne-700" />
          <span className="leading-none">Get Directions</span>
          <ArrowRight className="w-3.5 h-3.5 flex-shrink-0 transform transition-transform duration-300 group-hover:translate-x-1 text-champagne-800" />
        </a>
      </div>
    </div>
  );
}
