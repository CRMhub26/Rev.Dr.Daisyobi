import React from 'react';
import { motion } from 'motion/react';
import {
  BookOpen,
  Heart,
  Cross,
  Crown,
  Users,
} from 'lucide-react';
import { coreValuesData } from '../data.ts';

export const AboutSection: React.FC = () => {
  const renderValueIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cross':
        return <Cross className="w-6 h-6 text-[#C9A227]" />;
      case 'Heart':
        return <Heart className="w-6 h-6 text-[#C9A227]" />;
      case 'Crown':
        return <Crown className="w-6 h-6 text-[#C9A227]" />;
      case 'Users':
        return <Users className="w-6 h-6 text-[#C9A227]" />;
      default:
        return <BookOpen className="w-6 h-6 text-[#C9A227]" />;
    }
  };

  return (
    <section id="about" className="bg-white">
      {/* Community Worship & Fellowship Showcase */}
      <div className="bg-white py-16 sm:py-20 border-b border-[#C9A227]/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[#C9A227]/40 bg-stone-100 group"
          >
            <img
              src="/assets/worship_six_collage.jpg"
              alt="Community Worship, Prayer, and Fellowship"
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="bg-[#F7F7F5] py-24 border-b border-[#C9A227]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs tracking-[0.3em] uppercase font-semibold text-[#C9A227]">
              Guiding Principles
            </span>
            <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2B2B2B]">
              Core Pillars of Faith &amp; Purpose
            </h2>
            <div className="w-16 h-0.5 bg-[#C9A227] mx-auto rounded-full mt-3" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValuesData.map((val, idx) => (
              <motion.div
                key={val.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition-all space-y-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center group-hover:bg-[#C9A227] group-hover:border-[#C9A227] transition-colors">
                  {renderValueIcon(val.iconName)}
                </div>
                <div>
                  <h3 className="font-serif-title text-2xl font-bold text-[#2B2B2B]">
                    {val.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#C9A227] uppercase tracking-wider mt-0.5">
                    {val.tagline}
                  </p>
                </div>
                <p className="text-sm text-[#2B2B2B]/80 font-sans-body leading-relaxed">
                  {val.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
