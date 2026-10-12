import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import Button from '../common/Button';
import Badge from '../common/Badge';
import StatsHighlight from './StatsHighlight';
import heroImage from '../../assets/hero sec image.png';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-12 sm:pt-24 sm:pb-14 lg:pt-28 lg:pb-16 overflow-hidden"
    >
      {/* Background with luxury dark banquet overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Airi Banquet Hall luxury wedding ballroom"
          className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000"
        />
        {/* Deep luxury radial and vertical gradient scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-deep via-black/75 to-black/60 backdrop-blur-[1px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center flex flex-col items-center">
        {/* Eyebrow Badge - Scaled and tracked for mobile elegance */}
        <div className="mb-3.5 sm:mb-6">
          <Badge
            variant="dark"
            size="md"
            className="tracking-[0.16em] sm:tracking-[0.25em] text-[10px] sm:text-xs text-champagne-300 border-champagne-500/40 px-3 sm:px-4 py-1 sm:py-1.5"
          >
            LUXURY WEDDINGS & CELEBRATIONS • GALLE
          </Badge>
        </div>

        {/* Main Title - Proportioned cleanly for mobile screens */}
        <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-white tracking-tight leading-[1.2] max-w-4xl drop-shadow-md">
          Make Your Special Moments <br className="hidden sm:inline" />
          <span className="italic font-normal text-champagne-300">Unforgettable</span>
        </h1>

        {/* Subtitle - Concise 2-line rhythm on mobile */}
        <p className="mt-3 sm:mt-5 text-xs sm:text-base md:text-lg text-stone-200/90 max-w-xl font-sans font-light leading-relaxed">
          Experience timeless Poruwa ceremonies, wedding receptions, and milestone celebrations crafted for memories that last forever.
        </p>

        {/* CTA Buttons - Compact side-by-side row on mobile to prevent vertical stacking */}
        <div className="mt-5 sm:mt-8 flex flex-row items-center gap-2.5 sm:gap-4 w-full sm:w-auto max-w-md sm:max-w-none">
          <Button
            href="#gallery"
            variant="champagne"
            size="md"
            icon={ArrowRight}
            className="flex-1 sm:flex-initial py-2.5 sm:py-3.5 px-3 sm:px-6 text-[11px] sm:text-xs tracking-wider"
          >
            <span className="sm:hidden">Explore Venue</span>
            <span className="hidden sm:inline">Explore Our Venue</span>
          </Button>

          <Button
            href="#booking"
            variant="outlineWhite"
            size="md"
            icon={Calendar}
            iconPosition="left"
            className="flex-1 sm:flex-initial py-2.5 sm:py-3.5 px-3 sm:px-6 text-[11px] sm:text-xs tracking-wider"
          >
            <span className="sm:hidden">Inquire Dates</span>
            <span className="hidden sm:inline">Inquire About Dates</span>
          </Button>
        </div>

        {/* Floating Glass Stats Bar */}
        <StatsHighlight />
      </div>
    </section>
  );
}
