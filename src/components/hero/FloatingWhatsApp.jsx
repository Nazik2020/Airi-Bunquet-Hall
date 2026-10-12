import React from 'react';
import { MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../../data/navigation';

export default function FloatingWhatsApp() {
  return (
    <aside
      aria-label="Contact options"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 group flex items-center"
    >
      {/* Floating Action Button */}
      <a
        href={CONTACT_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative flex items-center justify-center w-11 h-11 sm:w-14 sm:h-14 bg-gradient-to-tr from-[#00897B] to-[#00A884] hover:from-[#00796B] hover:to-[#008f72] text-white rounded-full shadow-2xl border border-white/30 transition-all duration-300 hover:scale-110 active:scale-95"
      >
        {/* Pulsing indicator */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white" />
        </span>

        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-white/20 text-white" />

        {/* Hover label tooltip to the left of the button */}
        <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-obsidian-deep/95 backdrop-blur-md px-3.5 py-2 text-xs font-semibold text-white shadow-xl border border-champagne-500/30 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 hidden sm:flex items-center gap-2">
          <span className="text-champagne-300">WhatsApp:</span>
          <span>{CONTACT_INFO.phone}</span>
        </span>
      </a>
    </aside>
  );
}
