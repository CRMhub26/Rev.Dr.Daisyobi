import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  BookOpen,
  ChevronDown,
  Church,
  ArrowRight,
  MapPin,
  HeartHandshake,
  Cross,
  ExternalLink,
  Bookmark,
  Check,
  X,
  ShoppingBag,
} from 'lucide-react';
import {
  heroContent,
  aboutIntro,
  booksData,
  Book,
} from '../data.ts';

interface HeroSectionProps {
  onSaveQuote: (text: string, source: string) => void;
  savedQuoteTexts: string[];
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onSaveQuote,
  savedQuoteTexts,
}) => {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const isQuoteSaved = savedQuoteTexts.includes(heroContent.featuredQuote.text);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="pt-0">
      {/* Hero Fullscreen Banner */}
      <div className="relative min-h-screen flex flex-col items-center justify-center text-center text-white overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden select-none z-0">
          <img
            src={aboutIntro.sanctuaryHeroImage}
            alt="Church sanctuary filled with congregation in prayer"
            className="w-full h-full object-cover scale-105 animate-pulse"
            style={{ animationDuration: '14s' }}
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/70 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50 pointer-events-none" />
          <div className="absolute inset-0 bg-[#C9A227]/10 mix-blend-color-dodge pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-8 pt-20 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C9A227]/20 border border-[#C9A227]/50 text-amber-200 text-xs tracking-[0.25em] uppercase font-semibold backdrop-blur-md shadow-lg">
              <Sparkles className="w-3.5 h-3.5 text-[#C9A227]" />
              <span>Official Author Portal</span>
            </div>

            <h1 className="font-serif-title text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.12] drop-shadow-lg">
              {heroContent.headline}
            </h1>

            <p className="font-sans-body text-lg sm:text-2xl text-stone-100 font-light max-w-3xl mx-auto leading-relaxed drop-shadow">
              {heroContent.subheadline}
            </p>

            <div className="pt-2 flex items-center justify-center space-x-4">
              <div className="h-px w-16 bg-[#C9A227]/60" />
              <span className="font-signature text-4xl sm:text-5xl text-[#C9A227] font-normal tracking-wide">
                Rev. Dr. Daisy Obi
              </span>
              <div className="h-px w-16 bg-[#C9A227]/60" />
            </div>

            <div className="pt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              <button
                onClick={() => scrollTo('featured-books')}
                className="px-8 py-4 rounded-lg bg-[#C9A227] hover:bg-[#b5901f] text-white font-semibold text-sm tracking-wider uppercase transition-all transform hover:-translate-y-0.5 shadow-xl flex items-center gap-2 cursor-pointer"
              >
                <BookOpen className="w-4 h-4" />
                <span>Explore My Work</span>
              </button>

              <button
                onClick={() => scrollTo('featured-intro')}
                className="px-8 py-4 rounded-lg bg-white border border-[#C9A227] text-[#C9A227] hover:bg-amber-50/80 font-semibold text-sm tracking-wider uppercase transition-all transform hover:-translate-y-0.5 shadow-lg cursor-pointer"
              >
                <span>Learn More</span>
              </button>
            </div>
          </motion.div>
        </div>

        <button
          onClick={() => scrollTo('featured-intro')}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 p-2 text-stone-300 hover:text-[#C9A227] transition-colors focus:outline-none cursor-pointer"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </button>
      </div>

      {/* Featured Intro Section */}
      <div
        id="featured-intro"
        className="py-24 bg-[#F7F7F5] border-b border-[#C9A227]/30"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 flex justify-center"
            >
              <div className="relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-[#F7F7F5] ring-2 ring-[#C9A227]/30 group">
                <img
                  src={aboutIntro.portraitImage}
                  alt="Rev. Dr. Daisy Obi"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <span className="text-xs uppercase tracking-wider text-amber-300 font-semibold block">
                    Author &amp; Visionary
                  </span>
                  <p className="font-serif-title text-lg font-bold">
                    Rev. Dr. Daisy Obi
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="space-y-2">
                <span className="text-xs tracking-[0.3em] uppercase font-semibold text-[#C9A227] block">
                  Author &amp; Visionary
                </span>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50/90 border border-[#C9A227]/40 text-[#C9A227] text-xs font-semibold tracking-wide shadow-xs">
                  <Church className="w-3.5 h-3.5 text-[#C9A227]" />
                  <span>
                    Founder of{' '}
                    <strong className="font-bold underline decoration-[#C9A227]/60 underline-offset-2">
                      Adonai Bible Center
                    </strong>
                  </span>
                </div>
              </div>

              <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2B2B2B] leading-tight">
                Anointed to Teach, Preach, and Heal
              </h2>

              <div className="w-16 h-0.5 bg-[#C9A227] rounded-full" />

              <p className="font-serif-title text-xl text-[#2B2B2B] italic font-medium">
                "{aboutIntro.intro}"
              </p>

              <div className="space-y-4 font-sans-body text-[#2B2B2B]/90 text-base leading-relaxed">
                <p>
                  Educated at St. Andrew's Scotland, Princeton, Harvard,
                  Cambridge College, London School of Economics, and Oxford,
                  Rev. Dr. Daisy Obi brings profound scholarship and compassionate
                  wisdom to her literary works.
                </p>
                <p>
                  With over 20 years as a radio host, author of many articles,
                  teacher of the Bible, and founder of{' '}
                  <span className="font-bold text-[#C9A227] bg-amber-50 px-2 py-0.5 rounded border border-[#C9A227]/30 shadow-xs">
                    Adonai Bible Center
                  </span>{' '}
                  in Massachusetts, her mission is to plant seeds of resilience,
                  faith, and grace in every reader’s heart.
                </p>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => scrollTo('about')}
                  className="px-7 py-3 rounded-lg bg-[#C9A227] hover:bg-[#b5901f] text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-md inline-flex items-center gap-2 group cursor-pointer"
                >
                  <span>Read Full Biography</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-white" />
                </button>

                <button
                  onClick={() => scrollTo('adonai-bible-center')}
                  className="px-6 py-3 rounded-lg bg-white border border-[#C9A227]/50 text-[#C9A227] hover:bg-amber-50/50 font-semibold text-xs tracking-wider uppercase transition-all shadow-xs inline-flex items-center gap-2 cursor-pointer"
                >
                  <Church className="w-3.5 h-3.5 text-[#C9A227]" />
                  <span>Adonai Bible Center</span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Adonai Bible Center Section */}
      <section
        id="adonai-bible-center"
        className="relative py-20 bg-gradient-to-b from-[#FAF9F6] via-amber-50/25 to-[#FAF9F6] border-b border-[#C9A227]/30 overflow-hidden"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-200/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl border-2 border-[#C9A227]/40 shadow-xl p-8 sm:p-12 lg:p-16 relative overflow-hidden"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-[#C9A227]/50 text-[#C9A227] text-xs uppercase tracking-[0.25em] font-bold shadow-xs">
                <Church className="w-4 h-4 text-[#C9A227]" />
                <span>Spiritual Sanctuary &amp; Global Ministry</span>
              </div>

              <div className="space-y-3">
                <h2 className="font-serif-title text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2B2B2B] tracking-tight leading-tight">
                  <span className="text-[#C9A227] underline decoration-[#C9A227]/30 underline-offset-8">
                    Adonai Bible Center
                  </span>
                </h2>
                <div className="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm font-medium text-[#8A8A8A] pt-1">
                  <span className="inline-flex items-center gap-1 text-[#C9A227] font-semibold">
                    <MapPin className="w-4 h-4" />
                    Massachusetts, USA
                  </span>
                  <span>•</span>
                  <span>Spirit-Filled Church &amp; Community of Faith</span>
                  <span>•</span>
                  <span>Over 20 Years of Faithful Ministry</span>
                </div>
              </div>

              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#C9A227] to-transparent my-2" />

              <p className="max-w-3xl text-center font-serif-title text-xl sm:text-2xl text-[#2B2B2B] italic font-normal leading-relaxed">
                "A holy sanctuary dedicated to preaching the uncompromised Word of
                God, anchoring believers in Psalm 91, and cultivating lives
                transformed by grace and prayer."
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-[#C9A227]/20">
              <div className="p-6 rounded-2xl bg-[#FAF9F6] border border-[#C9A227]/20 hover:border-[#C9A227]/50 transition-all space-y-3 text-center sm:text-left">
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-[#C9A227] mx-auto sm:mx-0">
                  <BookOpen className="w-6 h-6 text-[#C9A227]" />
                </div>
                <h3 className="font-serif-title text-xl font-bold text-[#2B2B2B]">
                  Uncompromised Biblical Truth
                </h3>
                <p className="text-sm text-[#8A8A8A] leading-relaxed">
                  Deep exposition of scripture, spiritual warfare prayer, and
                  foundational discipleship guided by the Holy Spirit.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#FAF9F6] border border-[#C9A227]/20 hover:border-[#C9A227]/50 transition-all space-y-3 text-center sm:text-left">
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-[#C9A227] mx-auto sm:mx-0">
                  <Cross className="w-6 h-6 text-[#C9A227]" />
                </div>
                <h3 className="font-serif-title text-xl font-bold text-[#2B2B2B]">
                  Worship &amp; Divine Shelter
                </h3>
                <p className="text-sm text-[#8A8A8A] leading-relaxed">
                  Spirit-filled gatherings where believers experience the
                  presence of God, healing prayer, and the secret place of the
                  Most High.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#FAF9F6] border border-[#C9A227]/20 hover:border-[#C9A227]/50 transition-all space-y-3 text-center sm:text-left">
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-[#C9A227] mx-auto sm:mx-0">
                  <HeartHandshake className="w-6 h-6 text-[#C9A227]" />
                </div>
                <h3 className="font-serif-title text-xl font-bold text-[#2B2B2B]">
                  Global Evangelism &amp; Radio
                </h3>
                <p className="text-sm text-[#8A8A8A] leading-relaxed">
                  Spreading the Gospel through broadcast radio, international
                  conferences, community outreach, and author ministry worldwide.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Books Preview Section */}
      <div
        id="featured-books"
        className="py-24 bg-[#FAF9F6] border-b border-[#C9A227]/30"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs tracking-[0.3em] uppercase font-semibold text-[#C9A227]">
              Literary Works
            </span>
            <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2B2B2B]">
              Featured Books Preview
            </h2>
            <p className="text-[#8A8A8A] text-sm sm:text-base font-light">
              Explore inspirational books crafted with spiritual depth, divine
              promise, and life-changing guidance.
            </p>
            <div className="w-16 h-0.5 bg-[#C9A227] mx-auto rounded-full mt-3" />
          </div>

          <div
            className={
              booksData.length === 1
                ? 'max-w-4xl mx-auto'
                : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
            }
          >
            {booksData.map((book) => (
              <motion.div
                key={book.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group ${
                  booksData.length === 1
                    ? 'flex flex-col md:flex-row items-center p-8 sm:p-10 gap-8 sm:gap-12'
                    : 'flex flex-col justify-between p-6 space-y-5 hover:-translate-y-1.5'
                }`}
              >
                <div
                  className={`relative rounded-xl overflow-hidden shadow-xl border border-stone-200 bg-stone-100 flex-shrink-0 group-hover:scale-105 transition-transform duration-500 ${
                    booksData.length === 1
                      ? 'w-48 sm:w-60 aspect-[2/3] mx-auto md:mx-0'
                      : 'w-full aspect-[2/3] max-w-[200px] mx-auto'
                  }`}
                >
                  <img
                    src={book.coverImage}
                    alt={book.title}
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div
                  className={`space-y-4 ${
                    booksData.length === 1
                      ? 'flex-1 text-center md:text-left'
                      : 'text-center sm:text-left'
                  }`}
                >
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                      <span className="text-xs uppercase tracking-widest font-bold text-[#C9A227] bg-amber-50 px-3 py-1 rounded-full border border-amber-200 inline-block">
                        By {book.author}
                      </span>
                      {book.purchaseLink && (
                        <span className="text-xs uppercase tracking-widest font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 inline-flex items-center gap-1">
                          <ShoppingBag className="w-3 h-3 text-emerald-600" />
                          <span>Available on Amazon</span>
                        </span>
                      )}
                    </div>
                    <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#2B2B2B] leading-snug pt-1">
                      {book.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#8A8A8A] uppercase tracking-wider">
                      {book.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-[#2B2B2B]/80 font-sans-body leading-relaxed">
                    {book.description}
                  </p>

                  <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-3">
                    {book.purchaseLink && (
                      <a
                        href={book.purchaseLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3.5 rounded-lg bg-[#C9A227] hover:bg-[#b5901f] text-white font-semibold text-xs tracking-wider uppercase transition-colors inline-flex items-center gap-2 shadow-md group cursor-pointer"
                      >
                        <ShoppingBag className="w-4 h-4" />
                        <span>Buy on Amazon</span>
                        <ExternalLink className="w-3.5 h-3.5 text-white/80 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    )}
                    <button
                      onClick={() => setSelectedBook(book)}
                      className="px-6 py-3.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-[#2B2B2B] font-semibold text-xs tracking-wider uppercase transition-colors inline-flex items-center gap-2 border border-stone-300 cursor-pointer"
                    >
                      <BookOpen className="w-4 h-4 text-[#C9A227]" />
                      <span>View Details &amp; Excerpt</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Inspirational Quote & Ministry Portrait Banner */}
      <div className="bg-white py-16 sm:py-24 border-b border-[#C9A227]/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-[#C9A227]/40 bg-stone-100 ring-2 ring-[#C9A227]/20 group">
                <img
                  src={aboutIntro.preachingImage}
                  alt="Rev. Dr. Daisy Obi ministering and preaching the Word"
                  className="w-full h-80 sm:h-96 lg:h-[420px] object-cover object-center group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none z-10" />
                <div className="absolute bottom-4 left-4 right-4 text-white z-20">
                  <p className="text-xs uppercase tracking-wider text-amber-300 font-semibold mb-0.5">
                    Ministry &amp; Outreach
                  </p>
                  <p className="text-sm font-medium drop-shadow-sm text-stone-100">
                    Rev. Dr. Daisy Obi ministering the Word of God
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-3 -right-3 w-28 h-28 bg-[#C9A227]/10 rounded-2xl -z-10 blur-sm" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="lg:col-span-7 space-y-6 text-left"
            >
              <div className="relative inline-block">
                <span className="font-serif-title text-6xl sm:text-7xl text-[#C9A227] leading-none block -mb-4">
                  “
                </span>
              </div>
              <blockquote className="font-serif-title text-2xl sm:text-3xl lg:text-4xl text-[#2B2B2B] font-medium leading-relaxed italic">
                "{heroContent.featuredQuote.text}"
              </blockquote>
              <div className="pt-2 flex items-center justify-between sm:justify-start gap-6 border-t border-stone-200/80">
                <div>
                  <span className="font-signature text-4xl text-[#C9A227] font-normal block leading-tight">
                    Rev. Dr. Daisy Obi
                  </span>
                  <p className="text-xs tracking-wider uppercase text-stone-500 font-semibold mt-0.5">
                    Author, Teacher of the Bible, Radio Host
                  </p>
                </div>
                <button
                  onClick={() =>
                    onSaveQuote(
                      heroContent.featuredQuote.text,
                      heroContent.featuredQuote.source
                    )
                  }
                  className={`p-3 rounded-full transition-all shadow-sm cursor-pointer ${
                    isQuoteSaved
                      ? 'bg-[#C9A227] text-white shadow-md'
                      : 'bg-[#F7F7F5] text-[#2B2B2B] hover:bg-[#C9A227] hover:text-white border border-stone-300'
                  }`}
                  title={isQuoteSaved ? 'Quote Saved' : 'Save Quote'}
                >
                  <Bookmark className="w-5 h-5 fill-current" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Book Details & Excerpt Modal */}
      <AnimatePresence>
        {selectedBook && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedBook(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto border-2 border-[#C9A227] shadow-2xl relative space-y-6"
            >
              <button
                onClick={() => setSelectedBook(null)}
                className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-700 rounded-full hover:bg-stone-100 transition-colors cursor-pointer"
                aria-label="Close book details"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start pt-2">
                <div className="w-36 sm:w-44 aspect-[2/3] rounded-lg overflow-hidden shadow-lg border border-stone-200 bg-stone-100 shrink-0">
                  <img
                    src={selectedBook.coverImage}
                    alt={selectedBook.title}
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="space-y-2 text-center sm:text-left">
                  <span className="text-xs uppercase tracking-widest font-bold text-[#C9A227] bg-amber-50 px-3 py-1 rounded-full border border-amber-200 inline-block">
                    By {selectedBook.author}
                  </span>
                  <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#2B2B2B]">
                    {selectedBook.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#8A8A8A] uppercase tracking-wider">
                    {selectedBook.subtitle}
                  </p>
                  <p className="text-sm text-[#2B2B2B]/80 font-sans-body leading-relaxed pt-2">
                    {selectedBook.description}
                  </p>
                </div>
              </div>

              <div className="space-y-3 pt-2 border-t border-stone-200">
                <h4 className="font-serif-title text-lg font-bold text-[#2B2B2B]">
                  Devotional Highlights
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-stone-700">
                  {selectedBook.highlights.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3 p-5 rounded-xl bg-[#FAF9F6] border border-[#C9A227]/30">
                <span className="text-xs uppercase tracking-wider font-bold text-[#C9A227]">
                  Excerpt from the Devotional
                </span>
                <p className="font-serif-title text-stone-800 text-sm sm:text-base italic leading-relaxed">
                  "{selectedBook.excerpt}"
                </p>
              </div>

              <div className="pt-2 border-t border-stone-200 flex flex-wrap items-center justify-between gap-4">
                <button
                  onClick={() => setSelectedBook(null)}
                  className="px-5 py-2.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Close Preview
                </button>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="mailto:contact@drdaisyobi.org?subject=Inquiry regarding PSALM 91 NINETY-ONE TIMES"
                    className="px-5 py-2.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold uppercase tracking-wider transition-colors"
                  >
                    Direct Inquiry
                  </a>
                  {selectedBook.purchaseLink && (
                    <a
                      href={selectedBook.purchaseLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2.5 rounded-lg bg-[#C9A227] hover:bg-[#b5901f] text-white text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-2 shadow-md group"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      <span>Order on Amazon</span>
                      <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
