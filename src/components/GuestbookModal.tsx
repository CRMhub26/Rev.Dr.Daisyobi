import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  MessageSquareHeart,
  Sparkles,
  MapPin,
  Send,
  X,
} from 'lucide-react';
import { GuestNote } from '../data.ts';

interface GuestbookModalProps {
  isOpen: boolean;
  onClose: () => void;
  guestNotes: GuestNote[];
  onAddNote: (note: Omit<GuestNote, 'id' | 'createdAt'>) => void;
}

export const GuestbookModal: React.FC<GuestbookModalProps> = ({
  isOpen,
  onClose,
  guestNotes,
  onAddNote,
}) => {
  const [author, setAuthor] = useState('');
  const [location, setLocation] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author.trim() || !message.trim()) return;

    onAddNote({
      author: author.trim(),
      location: location.trim() || 'Reader',
      message: message.trim(),
    });

    setSubmitted(true);
    setTimeout(() => {
      setAuthor('');
      setLocation('');
      setMessage('');
      setSubmitted(false);
    }, 2000);
  };

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-stone-200 my-8"
        >
          {/* Header */}
          <div className="p-6 bg-[#1E3A8A] text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-800 rounded-xl">
                <MessageSquareHeart className="w-6 h-6 text-blue-200" />
              </div>
              <div>
                <h3 className="font-serif-title text-xl sm:text-2xl font-bold">
                  Reader Reflections &amp; Notes
                </h3>
                <p className="text-xs text-blue-200">
                  Share a warm message or reflection with Rev. Dr. Daisy Obi and fellow readers.
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-blue-900 text-white hover:bg-blue-800 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 sm:p-8 space-y-8 max-h-[75vh] overflow-y-auto">
            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="bg-[#FAF9F6] p-5 rounded-2xl border border-stone-200 space-y-4"
            >
              <div className="flex items-center gap-2 text-xs font-semibold text-[#1E3A8A] uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                <span>Leave Your Personal Note</span>
              </div>

              {submitted ? (
                <div className="p-4 bg-[#FDF8E2] text-[#8C6D1F] text-sm font-medium rounded-xl border border-[#E8D48B] text-center shadow-xs">
                  Thank you! Your heartfelt reflection has been recorded in the memoir guestbook.
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        placeholder="e.g., Sister Grace, Toronto"
                        className="w-full px-3.5 py-2 text-sm rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Location / City
                      </label>
                      <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="e.g., London, UK"
                        className="w-full px-3.5 py-2 text-sm rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Your Message or Reflection *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Share how Rev. Dr. Daisy Obi's writings, talks, or life have inspired you..."
                      className="w-full px-3.5 py-2 text-sm rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] bg-white"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-xl bg-[#1E3A8A] text-white font-semibold text-xs uppercase tracking-wider hover:bg-blue-900 transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Post Reflection</span>
                  </button>
                </>
              )}
            </form>

            {/* Notes List */}
            <div className="space-y-4">
              <p className="text-xs font-bold uppercase tracking-widest text-stone-400">
                Recent Reader Notes ({guestNotes.length})
              </p>
              <div className="space-y-3">
                {guestNotes.map((note) => (
                  <div
                    key={note.id}
                    className="p-4 bg-white rounded-xl border border-stone-200 shadow-sm space-y-2"
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-[#1E3A8A]">
                        {note.author}
                      </span>
                      <span className="text-stone-400 text-[11px]">
                        {note.createdAt}
                      </span>
                    </div>
                    <p className="text-stone-700 text-sm font-serif-title italic">
                      "{note.message}"
                    </p>
                    <div className="flex items-center gap-1 text-[11px] text-stone-400">
                      <MapPin className="w-3 h-3 text-[#D4AF37]" />
                      <span>{note.location}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
