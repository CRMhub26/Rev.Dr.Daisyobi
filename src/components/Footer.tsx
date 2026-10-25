import React from 'react';
import {
  Mail,
  BookOpen,
  Linkedin,
  Instagram,
  Youtube,
  Heart,
} from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-[#2B2B2B] py-16 border-t border-[#C9A227]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="space-y-1">
          <h3 className="font-serif-title text-3xl font-bold tracking-wide text-[#C9A227]">
            Rev. Dr. Daisy Obi
          </h3>
          <p className="text-xs text-[#8A8A8A] tracking-[0.25em] uppercase font-semibold">
            Author • Speaker • Visionary
          </p>
          <p className="text-[11px] font-semibold text-[#C9A227] tracking-wider uppercase pt-0.5">
            Founder &amp; Chief Executive, Adonai Bible Center
          </p>
        </div>

        <div className="max-w-2xl mx-auto pt-2">
          <p className="font-serif-title text-lg sm:text-xl text-[#2B2B2B] italic leading-relaxed font-light">
            "Words written with purpose and grace echo in hearts forever."
          </p>
        </div>

        <div className="flex justify-center items-center space-x-6 pt-2 text-[#2B2B2B]">
          <a
            href="mailto:contact@drdaisyobi.org"
            className="p-2.5 rounded-full hover:text-[#C9A227] hover:bg-amber-50 transition-colors"
            title="Email Rev. Dr. Daisy Obi"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="#home"
            className="p-2.5 rounded-full hover:text-[#C9A227] hover:bg-amber-50 transition-colors"
            title="Literary Circle"
          >
            <BookOpen className="w-5 h-5" />
          </a>
          <a
            href="#about"
            className="p-2.5 rounded-full hover:text-[#C9A227] hover:bg-amber-50 transition-colors"
            title="About Rev. Dr. Daisy Obi"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="#gallery"
            className="p-2.5 rounded-full hover:text-[#C9A227] hover:bg-amber-50 transition-colors"
            title="Gallery"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="#pressroom"
            className="p-2.5 rounded-full hover:text-[#C9A227] hover:bg-amber-50 transition-colors"
            title="YouTube Broadcasts"
          >
            <Youtube className="w-5 h-5" />
          </a>
        </div>

        <div className="w-24 h-px bg-[#C9A227]/30 mx-auto" />

        <div className="text-xs text-[#8A8A8A] font-light flex items-center justify-center gap-1">
          <span>
            © {new Date().getFullYear()} Rev. Dr. Daisy Obi. All rights reserved.
            Crafted with
          </span>
          <Heart className="w-3.5 h-3.5 text-[#C9A227] inline fill-current" />
          <span>for readers worldwide.</span>
        </div>
      </div>
    </footer>
  );
};
