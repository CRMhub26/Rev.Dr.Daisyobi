/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { PressroomSection } from './components/PressroomSection.tsx';
import { GallerySection } from './components/GallerySection.tsx';
import { Footer } from './components/Footer.tsx';
import { GuestbookModal } from './components/GuestbookModal.tsx';
import { ClipbookDrawer } from './components/ClipbookDrawer.tsx';
import {
  heroContent,
  initialGuestNotes,
  GuestNote,
  SavedQuote,
} from './data.ts';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isGuestbookOpen, setIsGuestbookOpen] = useState<boolean>(false);
  const [isClipbookOpen, setIsClipbookOpen] = useState<boolean>(false);

  // Local storage persisted saved quotes
  const [savedQuotes, setSavedQuotes] = useState<SavedQuote[]>(() => {
    try {
      const stored = localStorage.getItem('dr_daisy_saved_quotes');
      if (stored) return JSON.parse(stored);
    } catch (e) {
      console.error('Error loading saved quotes:', e);
    }
    return [
      {
        text: heroContent.featuredQuote.text,
        source: heroContent.featuredQuote.source,
      },
    ];
  });

  // Local storage persisted reader notes
  const [guestNotes, setGuestNotes] = useState<GuestNote[]>(() => {
    try {
      const stored = localStorage.getItem('dr_daisy_guest_notes');
      if (stored) return JSON.parse(stored);
    } catch (e) {
      console.error('Error loading guest notes:', e);
    }
    return initialGuestNotes;
  });

  useEffect(() => {
    try {
      localStorage.setItem('dr_daisy_saved_quotes', JSON.stringify(savedQuotes));
    } catch (e) {
      console.error('Error saving quotes to storage:', e);
    }
  }, [savedQuotes]);

  useEffect(() => {
    try {
      localStorage.setItem('dr_daisy_guest_notes', JSON.stringify(guestNotes));
    } catch (e) {
      console.error('Error saving guest notes to storage:', e);
    }
  }, [guestNotes]);

  // Scroll spy to update active navigation item
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'pressroom', 'gallery'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleSaveQuote = (text: string, source: string) => {
    if (savedQuotes.some((q) => q.text === text)) {
      setSavedQuotes(savedQuotes.filter((q) => q.text !== text));
    } else {
      setSavedQuotes([...savedQuotes, { text, source }]);
    }
  };

  const handleRemoveQuote = (text: string) => {
    setSavedQuotes(savedQuotes.filter((q) => q.text !== text));
  };

  const handleAddNote = (newNoteData: Omit<GuestNote, 'id' | 'createdAt'>) => {
    const newNote: GuestNote = {
      ...newNoteData,
      id: `note-${Date.now()}`,
      createdAt: 'Just now',
    };
    setGuestNotes([newNote, ...guestNotes]);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#2C2A29] font-sans-body selection:bg-[#D4AF37]/30 selection:text-[#1E3A8A]">
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onOpenGuestbook={() => setIsGuestbookOpen(true)}
        savedQuotesCount={savedQuotes.length}
        onOpenClipbook={() => setIsClipbookOpen(true)}
      />

      <main>
        <HeroSection
          onSaveQuote={handleToggleSaveQuote}
          savedQuoteTexts={savedQuotes.map((q) => q.text)}
        />
        <AboutSection />
        <PressroomSection />
        <GallerySection />
      </main>

      <Footer />

      <GuestbookModal
        isOpen={isGuestbookOpen}
        onClose={() => setIsGuestbookOpen(false)}
        guestNotes={guestNotes}
        onAddNote={handleAddNote}
      />

      <ClipbookDrawer
        isOpen={isClipbookOpen}
        onClose={() => setIsClipbookOpen(false)}
        savedQuotes={savedQuotes}
        onRemoveQuote={handleRemoveQuote}
      />
    </div>
  );
}
