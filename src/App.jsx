import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/hero/Hero';
import FloatingWhatsApp from './components/hero/FloatingWhatsApp';
import OccasionsSection from './components/occasions/OccasionsSection';
import GallerySection from './components/gallery/GallerySection';
import WhyUsSection from './components/why-us/WhyUsSection';
import BookingSection from './components/booking/BookingSection';
import LocationSection from './components/location/LocationSection';
import CtaBanner from './components/cta/CtaBanner';

export default function App() {
  return (
    <div className="min-h-screen bg-surface text-text-primary selection:bg-champagne-200 selection:text-obsidian flex flex-col font-sans antialiased">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero />
        <OccasionsSection />
        <GallerySection />
        <WhyUsSection />
        <BookingSection />
        <LocationSection />
        <CtaBanner />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}
