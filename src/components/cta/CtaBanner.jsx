import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import Container from '../common/Container';
import Button from '../common/Button';

export default function CtaBanner() {
  return (
    <section className="py-16 lg:py-20 bg-surface">
      <Container>
        <div className="relative overflow-hidden rounded-xl bg-obsidian text-white p-6 sm:p-12 md:p-16 border border-champagne-400/40 shadow-modal text-center flex flex-col items-center">
          {/* Subtle Ambient Gold Corona in the background */}
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-champagne-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-champagne-400/10 rounded-full blur-3xl pointer-events-none" />

          {/* Eyebrow */}
          <span className="relative z-10 text-[10px] sm:text-[11px] font-bold tracking-[0.2em] sm:tracking-[0.25em] text-champagne-300 uppercase mb-3 sm:mb-4">
            START PLANNING TODAY
          </span>

          {/* Title */}
          <h2 className="relative z-10 font-serif text-2xl sm:text-4xl md:text-5xl font-normal tracking-tight max-w-2xl leading-[1.25]">
            Ready to Plan Your Dream Celebration?
          </h2>

          {/* Subtitle */}
          <p className="relative z-10 mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-stone-300 max-w-xl font-light leading-relaxed">
            Contact our reservation team to check date availability, schedule a private hall walkthrough, and explore packages crafted for your budget.
          </p>

          {/* Button */}
          <div className="relative z-10 mt-6 sm:mt-10 w-full sm:w-auto">
            <Button
              href="#booking"
              variant="champagne"
              size="lg"
              icon={ArrowRight}
              className="w-full sm:w-auto font-bold py-3.5 sm:py-4 px-6 sm:px-8 text-xs sm:text-sm tracking-[0.16em]"
            >
              Set Up A Venue Viewing
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
