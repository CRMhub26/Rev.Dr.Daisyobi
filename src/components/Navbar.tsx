import React, { useState, useEffect } from 'react';
import { Bookmark, MessageSquareHeart, Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  onOpenGuestbook: () => void;
  savedQuotesCount: number;
  onOpenClipbook: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  setActiveSection,
  onOpenGuestbook,
  savedQuotesCount,
  onOpenClipbook,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const progress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      } else {
        setScrollProgress(0);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'pressroom', label: 'Pressroom' },
    { id: 'gallery', label: 'Gallery' },
  ];

  const scrollTo = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md text-[#2B2B2B] shadow-sm border-b border-[#C9A227]/30 py-3.5'
          : 'bg-transparent text-white py-5 drop-shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <button
          onClick={() => scrollTo('home')}
          className="text-left group focus:outline-none"
        >
          <span
            className={`block font-serif-title text-2xl sm:text-3xl font-bold tracking-wide transition-colors ${
              isScrolled
                ? 'text-[#C9A227] group-hover:text-[#b5901f]'
                : 'text-white group-hover:text-amber-100'
            }`}
          >
            Rev. Dr. Daisy Obi
          </span>
          <span
            className={`block text-[10px] tracking-[0.25em] uppercase font-semibold ${
              isScrolled ? 'text-[#C9A227]' : 'text-amber-200/90'
            }`}
          >
            Author &amp; Speaker
          </span>
        </button>

        <div className="hidden md:flex items-center space-x-8">
          <div className="flex items-center space-x-7">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`text-sm font-medium tracking-wider transition-all relative py-1 focus:outline-none ${
                    isActive
                      ? isScrolled
                        ? 'text-[#C9A227] font-semibold'
                        : 'text-white font-semibold'
                      : isScrolled
                        ? 'text-[#2B2B2B] hover:text-[#C9A227]'
                        : 'text-stone-200 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C9A227] rounded-full transition-all duration-300" />
                  )}
                </button>
              );
            })}
          </div>

          <div
            className={`flex items-center space-x-3 pl-6 border-l ${
              isScrolled ? 'border-stone-200' : 'border-white/20'
            }`}
          >
            <button
              onClick={onOpenClipbook}
              className={`relative p-2 rounded-full transition-colors flex items-center gap-1.5 text-xs font-medium ${
                isScrolled
                  ? 'text-[#2B2B2B] hover:text-[#C9A227] hover:bg-stone-100'
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
              title="Saved Inspirations"
            >
              <Bookmark className="w-4 h-4 text-[#C9A227]" />
              <span className="hidden lg:inline">Inspirations</span>
              {savedQuotesCount > 0 && (
                <span className="bg-[#C9A227] text-white font-bold text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {savedQuotesCount}
                </span>
              )}
            </button>

            <button
              onClick={onOpenGuestbook}
              className="p-2 px-3.5 rounded-lg bg-[#C9A227] hover:bg-[#b5901f] text-white text-xs font-semibold tracking-wider uppercase transition-all flex items-center gap-1.5 shadow-sm"
              title="Leave a Message of Reflection"
            >
              <MessageSquareHeart className="w-3.5 h-3.5" />
              <span>Reader Notes</span>
            </button>
          </div>
        </div>

        <div className="md:hidden flex items-center space-x-2">
          <button
            onClick={onOpenGuestbook}
            className={`p-1.5 rounded-md ${
              isScrolled ? 'text-stone-800 bg-stone-100' : 'text-white bg-white/20'
            }`}
            title="Reader Notes"
          >
            <MessageSquareHeart className="w-5 h-5" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-md focus:outline-none ${
              isScrolled ? 'text-stone-900 hover:bg-stone-100' : 'text-white hover:bg-white/20'
            }`}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          className={`md:hidden px-4 pt-3 pb-6 space-y-3 ${
            isScrolled
              ? 'bg-white text-stone-900 border-t border-stone-200 shadow-xl'
              : 'bg-stone-900/95 text-white backdrop-blur-lg border-t border-white/10'
          }`}
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`block w-full text-left px-3 py-2 text-base font-medium rounded-md transition-colors ${
                activeSection === link.id
                  ? 'bg-[#C9A227] text-white font-semibold'
                  : isScrolled
                    ? 'text-stone-700 hover:bg-stone-100'
                    : 'text-stone-200 hover:bg-white/10'
              }`}
            >
              {link.label}
            </button>
          ))}

          <div
            className={`pt-3 border-t flex items-center justify-between ${
              isScrolled ? 'border-stone-200' : 'border-white/20'
            }`}
          >
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenClipbook();
              }}
              className={`flex items-center space-x-2 text-sm py-1 ${
                isScrolled ? 'text-stone-700' : 'text-stone-200'
              }`}
            >
              <Bookmark className="w-4 h-4 text-[#C9A227]" />
              <span>Saved Inspirations ({savedQuotesCount})</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenGuestbook();
              }}
              className="flex items-center space-x-2 text-sm text-white bg-[#C9A227] px-3.5 py-1.5 rounded-md font-semibold"
            >
              <MessageSquareHeart className="w-4 h-4 text-white" />
              <span>Leave Note</span>
            </button>
          </div>
        </div>
      )}

      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-stone-200/30 pointer-events-none overflow-hidden">
        <div
          className="h-full bg-[#C9A227] transition-all duration-100 ease-out shadow-sm"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </nav>
  );
};
