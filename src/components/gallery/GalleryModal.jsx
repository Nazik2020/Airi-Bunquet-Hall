import React, { useEffect } from 'react';
import { X, Check, MapPin, Users, Calendar } from 'lucide-react';
import Button from '../common/Button';

export default function GalleryModal({ item, onClose }) {
  useEffect(() => {
    if (!item) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative bg-white rounded-lg shadow-2xl max-w-2xl w-full overflow-hidden border border-champagne-400/40 z-10 flex flex-col max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-black/60 hover:bg-black text-white p-2 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne-400"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image preview */}
        <div className="relative h-48 sm:h-72 w-full overflow-hidden bg-stone-100 flex-shrink-0">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-3 left-4">
            <span className="glass-badge text-champagne-900 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
              {item.badge}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          <h3 id="modal-title" className="font-serif text-2xl font-semibold text-obsidian">
            {item.title}
          </h3>
          <p className="mt-2 text-sm text-text-secondary leading-relaxed">
            {item.description}
          </p>

          {/* Details list */}
          <div className="mt-5 pt-4 border-t border-surface-container">
            <h4 className="text-xs font-bold uppercase tracking-widest text-champagne-700 mb-3">
              Included Amenities & Specifications
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {item.details?.map((detail, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-text-primary">
                  <Check className="w-3.5 h-3.5 text-champagne-600 flex-shrink-0" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="mt-6 pt-4 border-t border-surface-container flex items-center justify-between gap-4">
            <span className="text-xs text-text-muted">
              Location: 242 Olcott Mawatha, Galle
            </span>
            <Button
              href="#booking"
              variant="champagne"
              size="sm"
              onClick={onClose}
            >
              Inquire for This Space
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
