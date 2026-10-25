import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Bookmark,
  X,
  Copy,
  Check,
  Trash2,
} from 'lucide-react';
import { SavedQuote } from '../data.ts';

interface ClipbookDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedQuotes: SavedQuote[];
  onRemoveQuote: (text: string) => void;
}

export const ClipbookDrawer: React.FC<ClipbookDrawerProps> = ({
  isOpen,
  onClose,
  savedQuotes,
  onRemoveQuote,
}) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  if (!isOpen) return null;

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(`"${text}" — Rev. Dr. Daisy Obi`);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-end"
        onClick={onClose}
      >
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white w-full max-w-md h-full shadow-2xl flex flex-col justify-between border-l border-stone-200"
        >
          {/* Header */}
          <div className="p-6 bg-[#C9A227] text-white flex items-center justify-between shadow-sm shrink-0">
            <div className="flex items-center gap-2.5">
              <Bookmark className="w-5 h-5 text-white" />
              <h3 className="font-serif-title text-xl font-bold">
                Saved Inspirations
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-black/10 text-white hover:bg-black/20 transition-colors cursor-pointer"
              aria-label="Close saved inspirations"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 flex-1 overflow-y-auto space-y-4">
            {savedQuotes.length === 0 ? (
              <div className="text-center py-16 text-stone-400 space-y-3">
                <Bookmark className="w-12 h-12 mx-auto text-stone-300" />
                <p className="text-sm font-medium">No saved quotes yet.</p>
                <p className="text-xs text-stone-400 max-w-xs mx-auto leading-relaxed">
                  Click the bookmark icon next to any quote or thought across the
                  website to save it to your personal clipbook.
                </p>
              </div>
            ) : (
              savedQuotes.map((quote, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-[#FCF8EC] rounded-2xl border border-[#E5D79A] shadow-sm space-y-3 relative group"
                >
                  <p className="font-serif-title text-stone-800 text-base italic leading-relaxed">
                    "{quote.text}"
                  </p>
                  <div className="flex items-center justify-between text-xs text-[#B8860B] font-semibold pt-1 border-t border-[#E5D79A]/60">
                    <span>— {quote.source}</span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleCopy(quote.text, idx)}
                        className="p-1.5 rounded bg-white text-stone-600 hover:text-[#1E3A8A] transition-colors cursor-pointer shadow-2xs"
                        title="Copy Quote"
                      >
                        {copiedIndex === idx ? (
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                      <button
                        onClick={() => onRemoveQuote(quote.text)}
                        className="p-1.5 rounded bg-white text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer shadow-2xs"
                        title="Remove Quote"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer note */}
          <div className="p-4 bg-stone-50 border-t border-stone-200 text-center text-xs text-stone-500 shrink-0">
            Saved to your browser's local inspirational clips.
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
