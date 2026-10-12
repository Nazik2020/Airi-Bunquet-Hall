import React from 'react';
import { MapPin, Phone, Mail, Car, Train, ExternalLink } from 'lucide-react';
import { CONTACT_INFO } from '../../data/navigation';
import Button from '../common/Button';

export default function LocationDetailsCard() {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Airi Banquet Hall 242 Olcott Mawatha Galle Sri Lanka'
  )}`;

  return (
    <div className="bg-white rounded-lg p-5 sm:p-8 border border-champagne-400/30 shadow-card-rest hover:shadow-card-hover transition-shadow duration-300 flex flex-col justify-between">
      <div>
        {/* Eyebrow badge */}
        <div className="mb-4">
          <span className="text-[10px] font-bold tracking-[0.2em] text-champagne-800 bg-champagne-100/70 border border-champagne-300 px-3 py-1 rounded-full uppercase">
            HISTORIC GALLE CITY ADDRESS
          </span>
        </div>

        <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-obsidian tracking-tight mb-4">
          Airi Banquet, Galle
        </h3>

        {/* Address & Contact Items */}
        <div className="space-y-4 mb-6">
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-champagne-600 flex-shrink-0 mt-1" />
            <div>
              <p className="text-[11px] font-semibold text-text-muted uppercase tracking-wider">
                Physical Address
              </p>
              <p className="text-sm font-medium text-obsidian leading-relaxed">
                {CONTACT_INFO.address}
              </p>
              <p className="text-xs text-text-muted mt-0.5">
                (Near Indian Hut & Main Coastal Corridor)
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Phone className="w-4 h-4 text-champagne-600 flex-shrink-0 mt-1" />
            <div>
              <p className="text-[11px] font-semibold text-text-muted uppercase tracking-wider">
                Telephone & Reservations
              </p>
              <a
                href={`tel:${CONTACT_INFO.phoneRaw}`}
                className="text-sm font-semibold text-obsidian hover:text-champagne-700"
              >
                {CONTACT_INFO.phoneInternational}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Mail className="w-4 h-4 text-champagne-600 flex-shrink-0 mt-1" />
            <div>
              <p className="text-[11px] font-semibold text-text-muted uppercase tracking-wider">
                Official Inquiries
              </p>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="text-sm font-medium text-obsidian hover:text-champagne-700"
              >
                {CONTACT_INFO.email}
              </a>
            </div>
          </div>
        </div>

        {/* 2 Feature Badges */}
        <div className="grid grid-cols-2 gap-3 pt-4 border-t border-surface-container">
          <div className="bg-surface-low border border-champagne-300/40 rounded p-3 text-center">
            <Car className="w-4 h-4 text-champagne-700 mx-auto mb-1" />
            <p className="text-xs font-semibold text-obsidian">Ample Parking</p>
            <p className="text-[10px] text-text-muted">Dedicated guest bay</p>
          </div>

          <div className="bg-surface-low border border-champagne-300/40 rounded p-3 text-center">
            <Train className="w-4 h-4 text-champagne-700 mx-auto mb-1" />
            <p className="text-xs font-semibold text-obsidian">Minutes to Station</p>
            <p className="text-[10px] text-text-muted">Effortless arrival</p>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-surface-container">
        <Button
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          variant="outline"
          size="md"
          icon={ExternalLink}
          className="w-full text-xs font-bold"
        >
          Open in Google Maps
        </Button>
      </div>
    </div>
  );
}
