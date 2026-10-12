import React from 'react';
import { Phone, Mail, MessageCircle, CalendarCheck, Clock } from 'lucide-react';
import { CONTACT_INFO } from '../../data/navigation';

export default function DirectContactCard() {
  return (
    <div className="bg-white rounded-lg p-5 sm:p-8 border border-champagne-400/30 shadow-card-rest hover:shadow-card-hover transition-shadow duration-300 flex flex-col justify-between">
      <div>
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <span className="text-[10px] font-bold tracking-[0.16em] text-champagne-800 bg-champagne-100/70 border border-champagne-300 px-2.5 py-0.5 rounded-full uppercase whitespace-nowrap">
            QUICK RESPONSE
          </span>
          <span className="flex items-center gap-1.5 text-xs text-text-muted whitespace-nowrap">
            <Clock className="w-3.5 h-3.5 text-champagne-600 flex-shrink-0" />
            <span>Daily: 8:00 AM – 8:00 PM</span>
          </span>
        </div>

        <h3 className="font-serif text-2xl font-semibold text-obsidian tracking-tight mb-2">
          Direct Event Inquiries & Bookings
        </h3>

        <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-light mb-6">
          Our dedicated event coordination team is available daily to assist you with hall viewing appointments and custom package discussions.
        </p>

        {/* Contact info list */}
        <div className="space-y-4">
          <a
            href={`tel:${CONTACT_INFO.phoneRaw}`}
            className="flex items-center gap-4 p-3.5 rounded-lg border border-surface-container bg-surface-low hover:border-champagne-400 hover:bg-champagne-50/50 transition-colors group"
          >
            <div className="w-10 h-10 rounded-full bg-champagne-500/15 text-champagne-800 flex items-center justify-center flex-shrink-0 group-hover:bg-champagne-500 group-hover:text-white transition-colors">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[11px] font-medium text-text-muted uppercase tracking-wider">
                Direct Reservation Hotline
              </p>
              <p className="text-sm sm:text-base font-semibold text-obsidian">
                {CONTACT_INFO.phoneInternational}
              </p>
            </div>
          </a>

          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="flex items-center gap-4 p-3.5 rounded-lg border border-surface-container bg-surface-low hover:border-champagne-400 hover:bg-champagne-50/50 transition-colors group"
          >
            <div className="w-10 h-10 rounded-full bg-champagne-500/15 text-champagne-800 flex items-center justify-center flex-shrink-0 group-hover:bg-champagne-500 group-hover:text-white transition-colors">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[11px] font-medium text-text-muted uppercase tracking-wider">
                Official Email Inquiries
              </p>
              <p className="text-sm sm:text-base font-semibold text-obsidian break-all">
                {CONTACT_INFO.email}
              </p>
            </div>
          </a>
        </div>
      </div>

      <div className="mt-8 space-y-4">
        {/* WhatsApp Button */}
        <a
          href={CONTACT_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-md bg-emerald-700 hover:bg-emerald-800 text-white font-sans text-xs sm:text-sm font-semibold tracking-wider shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 active:scale-[0.99]"
        >
          <MessageCircle className="w-5 h-5" />
          <span>Chat Directly on WhatsApp</span>
        </a>

        {/* Assurance Note */}
        <div className="flex items-start gap-2.5 pt-4 border-t border-surface-container text-xs text-text-secondary">
          <CalendarCheck className="w-4 h-4 text-champagne-600 flex-shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            We respect your schedule. Bookings are confirmed with clear advance dates and transparent reservations.
          </p>
        </div>
      </div>
    </div>
  );
}
