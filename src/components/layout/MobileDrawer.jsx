import React, { useEffect } from 'react';
import { X, Phone, MessageSquare, MapPin } from 'lucide-react';
import { NAV_LINKS, CONTACT_INFO } from '../../data/navigation';
import Button from '../common/Button';

export default function MobileDrawer({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
      className="fixed inset-0 z-50 lg:hidden"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 bottom-0 w-4/5 max-w-sm bg-surface p-6 shadow-2xl flex flex-col justify-between border-l border-champagne-500/30">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-champagne-500/20">
            <div>
              <span className="font-serif text-lg tracking-wider font-semibold text-obsidian block">
                AIRI BANQUET
              </span>
              <span className="text-[10px] tracking-[0.2em] text-champagne-700 uppercase">
                Galle, Sri Lanka
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-obsidian hover:text-champagne-600 rounded-full"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex flex-col py-6 space-y-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="text-base font-medium text-obsidian hover:text-champagne-600 transition-colors py-2 border-b border-surface-container"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Footer info & CTA */}
        <div className="pt-6 border-t border-champagne-500/20 space-y-4">
          <div className="space-y-2 text-xs text-text-secondary">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-champagne-600" />
              <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="font-semibold text-obsidian">
                {CONTACT_INFO.phone}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-champagne-600" />
              <span>242, Olcott Mawatha, Galle</span>
            </div>
          </div>

          <Button
            href="#booking"
            onClick={onClose}
            variant="champagne"
            size="md"
            className="w-full"
          >
            Reserve Your Date
          </Button>

          <a
            href={CONTACT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-md bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold uppercase tracking-wider shadow-sm transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            WhatsApp Inquiry
          </a>
        </div>
      </div>
    </div>
  );
}
