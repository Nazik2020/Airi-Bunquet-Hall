import React, { useState, useEffect } from 'react';
import { Menu, MessageCircle, Phone } from 'lucide-react';
import { NAV_LINKS, CONTACT_INFO } from '../../data/navigation';
import Button from '../common/Button';
import MobileDrawer from './MobileDrawer';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-champagne-500/20 py-3 sm:py-3.5'
            : 'bg-black/40 backdrop-blur-md border-b border-white/10 py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex flex-col group">
            <span
              className={`font-serif text-lg sm:text-xl md:text-2xl font-bold tracking-[0.15em] transition-colors ${
                isScrolled
                  ? 'text-obsidian group-hover:text-champagne-600'
                  : 'text-white group-hover:text-champagne-300'
              }`}
            >
              AIRI BANQUET
            </span>
            <span
              className={`text-[9px] sm:text-[10px] tracking-[0.25em] font-semibold uppercase transition-colors ${
                isScrolled ? 'text-champagne-700' : 'text-champagne-300'
              }`}
            >
              Olcott Mawatha • Galle
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-xs uppercase font-medium tracking-[0.14em] transition-colors ${
                  isScrolled
                    ? 'text-text-primary hover:text-champagne-600'
                    : 'text-stone-200 hover:text-champagne-300'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center space-x-3.5">
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-1.5 text-xs font-semibold tracking-wider px-3 py-2 rounded transition-colors ${
                isScrolled
                  ? 'text-emerald-700 hover:text-emerald-800 bg-emerald-50 border border-emerald-200/60'
                  : 'text-emerald-300 hover:text-emerald-200 bg-emerald-950/40 border border-emerald-500/30 backdrop-blur-sm'
              }`}
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>{CONTACT_INFO.phone}</span>
            </a>

            <Button
              href="#booking"
              variant={isScrolled ? 'primary' : 'champagne'}
              size="sm"
            >
              Reserve Now
            </Button>
          </div>

          {/* Mobile Menu Button & Phone */}
          <div className="flex items-center space-x-2 sm:space-x-3 lg:hidden">
            <a
              href={`tel:${CONTACT_INFO.phoneRaw}`}
              className={`p-2.5 rounded-full border min-w-[40px] min-h-[40px] flex items-center justify-center transition-colors ${
                isScrolled
                  ? 'text-champagne-700 hover:text-obsidian bg-champagne-50 border-champagne-200'
                  : 'text-champagne-300 hover:text-white bg-white/10 border-white/20'
              }`}
              aria-label="Call Airi Banquet"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileOpen(true)}
              className={`p-2 rounded-md min-w-[44px] min-h-[44px] flex items-center justify-center focus:outline-none transition-colors ${
                isScrolled
                  ? 'text-obsidian hover:text-champagne-600'
                  : 'text-white hover:text-champagne-300'
              }`}
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileDrawer isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
