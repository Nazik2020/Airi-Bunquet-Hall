import React from 'react';
import { NAV_LINKS, CONTACT_INFO } from '../../data/navigation';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-low border-t border-champagne-500/20 pt-14 sm:pt-16 pb-28 sm:pb-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Main Footer Body */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-10 sm:pb-12 border-b border-champagne-500/20">
          {/* Brand Info */}
          <div className="max-w-xl text-left">
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-[0.15em] text-obsidian block">
              AIRI BANQUET, GALLE
            </span>
            <p className="mt-2 text-xs sm:text-sm text-text-secondary leading-relaxed">
              Premier destination for weddings, traditional ceremonies, and grand celebratory occasions on Olcott Mawatha in historic Galle.
            </p>

            {/* Contact details - Clean vertical list on mobile, inline on desktop */}
            <div className="mt-4 flex flex-col sm:flex-row sm:flex-wrap gap-y-2.5 sm:gap-y-2 gap-x-5 text-xs text-text-secondary">
              <span className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-champagne-600 flex-shrink-0" />
                <span>242, Olcott Mawatha, Galle</span>
              </span>
              <a
                href={`tel:${CONTACT_INFO.phoneRaw}`}
                className="flex items-center gap-2 hover:text-champagne-700 font-medium transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-champagne-600 flex-shrink-0" />
                <span>{CONTACT_INFO.phoneInternational}</span>
              </a>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center gap-2 hover:text-champagne-700 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-champagne-600 flex-shrink-0" />
                <span>{CONTACT_INFO.email}</span>
              </a>
            </div>
          </div>

          {/* Nav Links - Structured 2-col grid on mobile, flex on desktop */}
          <div className="w-full lg:w-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-wrap items-center gap-x-6 gap-y-3 pt-2 lg:pt-0">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-xs uppercase tracking-[0.14em] font-medium text-text-secondary hover:text-champagne-700 transition-colors py-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-champagne-500 rounded"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom copyright & attribution - Consistent left alignment on mobile */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-text-muted text-left">
          <p>© {currentYear} Airi Banquet Hall, Galle. All rights reserved.</p>
          <p className="tracking-wide">
            Design: <span className="font-serif italic text-champagne-800">Serene Ivory & Champagne Grandeur</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
