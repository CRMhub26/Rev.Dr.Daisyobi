import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Calendar,
} from 'lucide-react';
import { galleryItemsData, GalleryItem } from '../data.ts';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  const categories = [
    'All',
    'Book Signings',
    'Speaking Events',
    'Personal Moments',
    'Books',
    'Media Features',
  ];

  const filteredItems =
    selectedCategory === 'All'
      ? galleryItemsData
      : galleryItemsData.filter((item) => item.category === selectedCategory);

  const activePhoto: GalleryItem | null =
    activePhotoIndex !== null ? filteredItems[activePhotoIndex] || null : null;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activePhotoIndex !== null) {
      setActivePhotoIndex(
        activePhotoIndex === 0 ? filteredItems.length - 1 : activePhotoIndex - 1
      );
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activePhotoIndex !== null) {
      setActivePhotoIndex(
        activePhotoIndex === filteredItems.length - 1 ? 0 : activePhotoIndex + 1
      );
    }
  };

  return (
    <section
      id="gallery"
      className="bg-[#F7F7F5] py-24 border-b border-[#C9A227]/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs tracking-[0.3em] uppercase font-semibold text-[#C9A227]">
            Visual Chronicle
          </span>
          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2B2B2B]">
            Author's Gallery
          </h2>
          <p className="text-[#8A8A8A] text-sm sm:text-base font-light">
            An elegant visual gallery documenting published works, speaking
            events, book signings, broadcasts, and cherished personal milestones.
          </p>
          <div className="w-16 h-0.5 bg-[#C9A227] mx-auto rounded-full mt-3" />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setActivePhotoIndex(null);
              }}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#C9A227] text-white shadow-md'
                  : 'bg-white text-stone-600 hover:text-[#C9A227] border border-stone-200 hover:border-[#C9A227]/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Columns */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.04 }}
              onClick={() => setActivePhotoIndex(idx)}
              className="break-inside-avoid relative rounded-2xl overflow-hidden bg-stone-100 border border-stone-200 shadow-sm hover:shadow-2xl transition-all duration-300 group cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-between text-white">
                <div className="flex justify-between items-center">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-[#C9A227] text-white">
                    {item.category}
                  </span>
                  <Maximize2 className="w-4 h-4 text-white" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif-title text-lg font-bold leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-xs text-stone-200 line-clamp-2 font-sans-body">
                    {item.caption}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActivePhotoIndex(null)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            <button
              onClick={() => setActivePhotoIndex(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50 cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={handlePrev}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50 cursor-pointer"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50 cursor-pointer"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center space-y-4"
            >
              <div className="relative max-h-[70vh] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src={activePhoto.image}
                  alt={activePhoto.title}
                  className="max-h-[70vh] w-auto object-contain mx-auto rounded-xl"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="text-center text-white space-y-2 max-w-2xl px-4">
                <div className="flex items-center justify-center gap-3 text-xs text-stone-400 font-medium">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#C9A227] text-white uppercase tracking-wider text-[10px]">
                    {activePhoto.category}
                  </span>
                  {activePhoto.date && (
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#C9A227]" />
                      {activePhoto.date}
                    </span>
                  )}
                </div>
                <h3 className="font-serif-title text-2xl font-bold">
                  {activePhoto.title}
                </h3>
                <p className="text-sm text-stone-300 font-sans-body leading-relaxed">
                  {activePhoto.caption}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
