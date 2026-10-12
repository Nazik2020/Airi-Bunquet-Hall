import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Button from '../common/Button';
import { EVENT_TYPES, GUEST_COUNT_OPTIONS } from '../../data/venueDetails';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: 'wedding',
    eventDate: '',
    guestCount: '100-200',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-lg p-8 sm:p-12 border border-champagne-400/30 shadow-gold-card text-center flex flex-col items-center justify-center min-h-[460px]">
        <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-700 mb-6">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-obsidian">
          Inquiry Received With Pleasure
        </h3>
        <p className="mt-3 text-sm text-text-secondary max-w-md leading-relaxed">
          Thank you, <span className="font-semibold text-obsidian">{formData.name || 'Valued Guest'}</span>. Our reservation team at Airi Banquet Galle will review your requested date ({formData.eventDate || 'selected date'}) and contact you promptly at {formData.phone}.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setSubmitted(false);
              setFormData({
                name: '',
                phone: '',
                eventType: 'wedding',
                eventDate: '',
                guestCount: '100-200',
                notes: '',
              });
            }}
          >
            Submit Another Inquiry
          </Button>
          <Button
            href={`https://wa.me/94712234545?text=Hello%20Airi%20Banquet%2C%20I%20just%20submitted%20an%20inquiry%20for%20${encodeURIComponent(formData.eventType)}%20on%20${encodeURIComponent(formData.eventDate)}%20for%20${encodeURIComponent(formData.name)}.`}
            target="_blank"
            variant="champagne"
            size="sm"
          >
            Confirm via WhatsApp
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-lg p-5 sm:p-8 border border-champagne-400/30 shadow-card-rest hover:shadow-card-hover transition-shadow duration-300 flex flex-col justify-between"
    >
      <div className="space-y-4 sm:space-y-5">
        {/* Full Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-xs font-semibold tracking-wide text-text-primary mb-1.5"
          >
            Full Name <span className="text-amber-700">*</span>
          </label>
          <input
            id="name"
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Kasun & Nimmi Perera"
            className="w-full px-3.5 py-2.5 rounded text-sm bg-surface-low border border-stone-300/80 hover:border-stone-400 focus:bg-white focus:border-champagne-500 focus:ring-2 focus:ring-champagne-400/20 focus:outline-none transition-all placeholder:text-stone-400 text-obsidian"
          />
        </div>

        {/* Phone & Event Type (2 cols) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="phone"
              className="block text-xs font-semibold tracking-wide text-text-primary mb-1.5"
            >
              Contact Phone <span className="text-amber-700">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="+94 7X XXX XXXX"
              className="w-full px-3.5 py-2.5 rounded text-sm bg-surface-low border border-stone-300/80 hover:border-stone-400 focus:bg-white focus:border-champagne-500 focus:ring-2 focus:ring-champagne-400/20 focus:outline-none transition-all placeholder:text-stone-400 text-obsidian"
            />
          </div>

          <div>
            <label
              htmlFor="eventType"
              className="block text-xs font-semibold tracking-wide text-text-primary mb-1.5"
            >
              Event Type <span className="text-amber-700">*</span>
            </label>
            <select
              id="eventType"
              name="eventType"
              value={formData.eventType}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded text-sm bg-surface-low border border-stone-300/80 hover:border-stone-400 focus:bg-white focus:border-champagne-500 focus:ring-2 focus:ring-champagne-400/20 focus:outline-none transition-all text-text-primary cursor-pointer"
            >
              {EVENT_TYPES.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Preferred Date & Estimated Guest Count (2 cols) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="eventDate"
              className="block text-xs font-semibold tracking-wide text-text-primary mb-1.5"
            >
              Preferred Date <span className="text-amber-700">*</span>
            </label>
            <input
              id="eventDate"
              type="date"
              name="eventDate"
              required
              value={formData.eventDate}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded text-sm bg-surface-low border border-stone-300/80 hover:border-stone-400 focus:bg-white focus:border-champagne-500 focus:ring-2 focus:ring-champagne-400/20 focus:outline-none transition-all text-text-primary cursor-pointer"
            />
          </div>

          <div>
            <label
              htmlFor="guestCount"
              className="block text-xs font-semibold tracking-wide text-text-primary mb-1.5"
            >
              Estimated Guest Count
            </label>
            <select
              id="guestCount"
              name="guestCount"
              value={formData.guestCount}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded text-sm bg-surface-low border border-stone-300/80 hover:border-stone-400 focus:bg-white focus:border-champagne-500 focus:ring-2 focus:ring-champagne-400/20 focus:outline-none transition-all text-text-primary cursor-pointer"
            >
              {GUEST_COUNT_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Additional Requests */}
        <div>
          <label
            htmlFor="notes"
            className="block text-xs font-semibold tracking-wide text-text-primary mb-1.5"
          >
            Special Preferences / Requirements
          </label>
          <textarea
            id="notes"
            name="notes"
            rows="3"
            value={formData.notes}
            onChange={handleChange}
            placeholder="Share any special preferences: Poruwa setup, lighting choices, seating style, or catering questions..."
            className="w-full px-3.5 py-2.5 rounded text-sm bg-surface-low border border-stone-300/80 hover:border-stone-400 focus:bg-white focus:border-champagne-500 focus:ring-2 focus:ring-champagne-400/20 focus:outline-none transition-all placeholder:text-stone-400 text-obsidian resize-none"
          />
        </div>
      </div>

      <div className="mt-6">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          icon={ArrowRight}
          disabled={isSubmitting}
          className="w-full py-3.5 text-xs font-bold uppercase tracking-[0.16em]"
        >
          {isSubmitting ? 'Verifying Calendar...' : 'Check Date Availability'}
        </Button>
      </div>
    </form>
  );
}
