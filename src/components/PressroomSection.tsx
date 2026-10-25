import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Tv,
  ExternalLink,
  Play,
  Check,
  Maximize2,
  X,
  Radio,
  FileText,
} from 'lucide-react';
import {
  pressArticlesData,
  frankfurtFairPhotos,
  broadcastEpisodes,
  PressArticle,
  FrankfurtPhoto,
  BroadcastEpisode,
} from '../data.ts';

export const PressroomSection: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<FrankfurtPhoto | null>(null);
  const [activeEpisode, setActiveEpisode] = useState<BroadcastEpisode>(broadcastEpisodes[0]);
  const [selectedArticle, setSelectedArticle] = useState<PressArticle | null>(null);
  const playerRef = useRef<HTMLDivElement>(null);

  const handleSelectEpisode = (ep: BroadcastEpisode) => {
    setActiveEpisode(ep);
    if (playerRef.current) {
      playerRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };

  return (
    <section
      id="pressroom"
      className="bg-white text-[#2B2B2B] py-20 sm:py-24 border-b border-[#C9A227]/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#C9A227] font-bold">
            Media &amp; Global Exhibitions
          </span>
          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2B2B2B]">
            Pressroom &amp; Media Features
          </h2>
          <p className="text-[#8A8A8A] text-sm sm:text-base font-light">
            Documenting television broadcasts, international book fairs, radio
            ministries, billboard showcases, and literary publications.
          </p>
          <div className="w-16 h-0.5 bg-[#C9A227] mx-auto rounded-full mt-3" />
        </div>

        {/* Frankfurt Book Fair Feature Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#121824] text-white rounded-3xl p-8 sm:p-10 lg:p-12 border-2 border-[#C9A227]/50 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A227]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
              <div className="space-y-2">
                <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-[#C9A227] text-white inline-block">
                  Frankfurter Buchmesse • Halle 6.0 | Stand C32
                </span>
                <h3 className="font-serif-title text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                  Rev. Dr. Daisy Obi at the Frankfurt Book Fair
                </h3>
                <p className="text-amber-200/90 text-sm font-medium">
                  Presented in Partnership with Books Academy • Book Gallery &amp; Author Signing
                </p>
              </div>

              <button
                onClick={() => setSelectedArticle(pressArticlesData[0])}
                className="px-6 py-3 rounded-xl bg-white text-[#121824] hover:bg-amber-100 font-semibold text-xs tracking-wider uppercase transition-colors self-start md:self-auto shrink-0 shadow-lg cursor-pointer"
              >
                Read Press Story
              </button>
            </div>

            <div className="font-sans-body text-stone-200 text-sm sm:text-base leading-relaxed max-w-4xl">
              At the world-renowned Frankfurter Buchmesse (Frankfurt Book Fair),
              the largest international trade fair for books, Rev. Dr. Daisy
              Ngozichukwuka Obi's devotional masterpiece,{' '}
              <span className="text-amber-300 font-semibold">
                "PSALM 91 NINETY-ONE TIMES"
              </span>
              , was exhibited in partnership with Books Academy. Delegates,
              readers, and international visitors gathered at Halle 6.0 | Stand
              C32 to discover the spiritual depth of Psalm 91 and meet Rev. Dr. Obi.
            </div>

            {/* 4 Fair photos grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
              {frankfurtFairPhotos.map((photo, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedPhoto(photo)}
                  className="group relative rounded-2xl overflow-hidden border border-white/15 bg-stone-900 cursor-pointer shadow-md hover:border-[#C9A227] transition-all"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-stone-900 relative">
                    <img
                      src={photo.url}
                      alt={photo.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                    <div className="absolute top-2 right-2 p-1.5 rounded-full bg-black/60 text-white backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="p-3.5 bg-black/60 backdrop-blur-md border-t border-white/10 space-y-1">
                    <h4 className="font-serif-title text-sm font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-1">
                      {photo.title}
                    </h4>
                    <p className="text-[11px] text-stone-300 line-clamp-2 leading-snug">
                      {photo.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Video Player Section */}
        <motion.div
          ref={playerRef}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#F7F7F5] rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#C9A227]/30 shadow-lg space-y-8"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-200 pb-5">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#C9A227]/15 border border-[#C9A227]/40 rounded-full text-[#C9A227] text-xs font-bold uppercase tracking-wider">
                <Tv className="w-3.5 h-3.5 text-[#C9A227]" />
                <span>Television Broadcast &amp; Video Series</span>
              </div>
              <h3 className="font-serif-title text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2B2B2B]">
                "OVERFLOWING GRACE" Broadcast Series
              </h3>
              <p className="text-[#8A8A8A] text-xs sm:text-sm">
                Watch Rev. Dr. Daisy Obi host and share inspirational teachings on
                OCN TV and global broadcast networks.
              </p>
            </div>

            <a
              href={activeEpisode.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#C9A227] hover:bg-[#b5901f] text-white rounded-xl text-xs font-bold tracking-wider uppercase transition-colors shadow-md self-start md:self-auto shrink-0"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Watch on YouTube</span>
            </a>
          </div>

          <div className="space-y-4">
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl border-2 border-[#C9A227]/40">
              <iframe
                key={activeEpisode.youtubeId}
                src={`https://www.youtube.com/embed/${activeEpisode.youtubeId}?autoplay=0&rel=0`}
                title={activeEpisode.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full border-0"
              />
            </div>

            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-stone-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1.5 max-w-3xl">
                <div className="flex items-center gap-2 text-xs">
                  <span className="bg-[#C9A227] text-white font-bold px-2.5 py-0.5 rounded-full text-[11px] uppercase tracking-wide">
                    {activeEpisode.episodeTag}
                  </span>
                  <span className="text-stone-500 font-medium">
                    {activeEpisode.channel}
                  </span>
                </div>
                <h4 className="font-serif-title text-lg sm:text-xl font-bold text-[#2B2B2B]">
                  {activeEpisode.title}
                </h4>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-sans-body">
                  {activeEpisode.description}
                </p>
              </div>

              <a
                href={activeEpisode.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C9A227] hover:text-[#9e7d17] transition-colors self-start md:self-center shrink-0"
              >
                <span>Direct YouTube Link</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Episode Selector Cards */}
          <div className="space-y-4 pt-2 border-t border-stone-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <div>
                <h4 className="font-serif-title text-lg sm:text-xl font-bold text-[#2B2B2B]">
                  Featured Broadcast Episodes ({broadcastEpisodes.length})
                </h4>
                <p className="text-stone-500 text-xs">
                  Select an episode to watch in the player above or open directly on YouTube.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {broadcastEpisodes.map((ep) => {
                const isCurrent = activeEpisode.id === ep.id;
                return (
                  <div
                    key={ep.id}
                    onClick={() => handleSelectEpisode(ep)}
                    className={`group cursor-pointer rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between ${
                      isCurrent
                        ? 'bg-amber-50/80 border-2 border-[#C9A227] shadow-md ring-2 ring-[#C9A227]/20 -translate-y-1'
                        : 'bg-white border border-stone-200 hover:border-[#C9A227]/60 hover:shadow-md'
                    }`}
                  >
                    <div className="relative aspect-video overflow-hidden bg-black">
                      <img
                        src={ep.thumbnail}
                        alt={ep.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                      <div className="absolute top-2.5 left-2.5">
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                            isCurrent
                              ? 'bg-[#C9A227] text-white shadow-sm'
                              : 'bg-black/70 backdrop-blur-sm text-stone-200 border border-white/20'
                          }`}
                        >
                          {ep.episodeTag}
                        </span>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        {isCurrent ? (
                          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#C9A227] text-white text-xs font-bold shadow-lg">
                            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                            <span>NOW PLAYING</span>
                          </div>
                        ) : (
                          <div className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm text-white group-hover:bg-[#C9A227] group-hover:scale-110 flex items-center justify-center transition-all duration-300 shadow-md">
                            <Play className="w-4 h-4 fill-current ml-0.5" />
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="p-3.5 space-y-2 flex-1 flex flex-col justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-[11px] text-stone-500">
                          <span className="font-semibold text-[#C9A227]">
                            {ep.channel}
                          </span>
                          {isCurrent && (
                            <span className="flex items-center gap-1 text-[#C9A227] font-bold text-[10px]">
                              <Check className="w-3 h-3" /> Active
                            </span>
                          )}
                        </div>
                        <h5
                          className={`font-serif-title text-sm font-bold line-clamp-2 leading-snug transition-colors ${
                            isCurrent
                              ? 'text-[#C9A227]'
                              : 'text-[#2B2B2B] group-hover:text-[#C9A227]'
                          }`}
                        >
                          {ep.title}
                        </h5>
                        <p className="text-[11px] text-stone-600 line-clamp-2 leading-relaxed">
                          {ep.description}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs">
                        <span
                          className={`font-semibold ${
                            isCurrent
                              ? 'text-[#C9A227]'
                              : 'text-stone-700 group-hover:text-[#C9A227]'
                          }`}
                        >
                          {isCurrent ? 'Currently Viewing' : 'Watch Episode'}
                        </span>
                        <a
                          href={ep.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-1 rounded-md text-stone-400 hover:text-[#C9A227] hover:bg-stone-100 transition-colors"
                          title="Open on YouTube"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Media Articles & Features Grid */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-200 pb-4">
            <div>
              <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#2B2B2B]">
                Media Coverage &amp; Broadcast Archive
              </h3>
              <p className="text-xs sm:text-sm text-[#8A8A8A]">
                Explore press releases, newspaper features, radio interviews, and cover profiles.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pressArticlesData.map((article) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onClick={() => setSelectedArticle(article)}
                className="bg-[#FAF9F6] border border-stone-200 rounded-2xl overflow-hidden hover:border-[#C9A227]/60 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="px-3 py-1 rounded-full font-bold uppercase tracking-wider bg-amber-100/70 text-[#C9A227] border border-[#C9A227]/30 text-[10px]">
                      {article.medium}
                    </span>
                    <span className="text-stone-500 font-medium text-[11px]">
                      {article.date}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-serif-title text-xl font-bold text-[#2B2B2B] group-hover:text-[#C9A227] transition-colors leading-snug">
                      {article.headline}
                    </h4>
                    <p className="text-xs text-stone-500 font-semibold uppercase tracking-wider">
                      {article.publication}
                    </p>
                    <p className="text-sm text-[#2B2B2B]/80 font-sans-body line-clamp-3 leading-relaxed">
                      {article.summary}
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-white border-t border-stone-200 flex items-center justify-between text-xs">
                  <span className="font-semibold text-[#C9A227] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5" />
                    Read Full Feature
                  </span>
                  <span className="text-stone-400 font-mono text-[10px]">
                    {article.logoText}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Fair Photo Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#121824] text-white rounded-3xl max-w-3xl w-full p-4 sm:p-6 overflow-hidden border-2 border-[#C9A227] shadow-2xl relative space-y-4"
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/70 text-stone-200 hover:bg-[#C9A227] hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-black shadow-inner border border-white/10">
                <img
                  src={selectedPhoto.url}
                  alt={selectedPhoto.title}
                  className="w-full h-full object-contain bg-stone-900"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="space-y-1 pt-1">
                <span className="text-[10px] tracking-widest uppercase font-bold text-[#C9A227] bg-[#C9A227]/20 px-2.5 py-1 rounded-full border border-[#C9A227]/30">
                  Frankfurter Buchmesse • Halle 6.0 | C32
                </span>
                <h3 className="font-serif-title text-xl sm:text-2xl font-bold text-white pt-2">
                  {selectedPhoto.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 font-light">
                  {selectedPhoto.subtitle}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Press Article Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <div
            className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
            onClick={() => setSelectedArticle(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#172E70] text-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-blue-700 my-8 max-h-[90vh] flex flex-col"
            >
              <div className="p-6 sm:p-8 bg-[#1E3A8A] border-b border-blue-800 relative flex items-start justify-between shrink-0">
                <div className="space-y-2 pr-8">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-blue-900 text-blue-200 border border-blue-700 inline-block">
                    {selectedArticle.medium} • {selectedArticle.publication}
                  </span>
                  <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-white leading-snug">
                    {selectedArticle.headline}
                  </h3>
                  <p className="text-xs text-blue-200 font-medium">
                    {selectedArticle.date}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="p-2.5 rounded-full bg-blue-900 text-white hover:bg-blue-800 transition-colors shrink-0 cursor-pointer"
                  aria-label="Close interview modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 sm:p-8 space-y-6 overflow-y-auto flex-1">
                {selectedArticle.videoEmbedUrl ? (
                  <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black shadow-inner border border-blue-600/40">
                    <iframe
                      src={selectedArticle.videoEmbedUrl}
                      title={selectedArticle.headline}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="absolute top-0 left-0 w-full h-full border-0"
                    />
                  </div>
                ) : (
                  selectedArticle.image && (
                    <div className="rounded-xl overflow-hidden max-h-64 bg-black/40 border border-blue-800">
                      <img
                        src={selectedArticle.image}
                        alt={selectedArticle.headline}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  )
                )}

                <div className="space-y-4 font-sans-body text-blue-100 text-sm sm:text-base leading-relaxed">
                  {selectedArticle.fullContent
                    .split('\n\n')
                    .map((paragraph, pIdx) => (
                      <p key={pIdx}>{paragraph}</p>
                    ))}
                </div>

                <div className="pt-4 border-t border-blue-800 flex items-center justify-between">
                  <span className="text-xs text-blue-300 font-mono">
                    Archive Record ID: {selectedArticle.id}
                  </span>
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="px-6 py-2 rounded-full bg-white text-[#1E3A8A] font-bold text-xs tracking-wider uppercase hover:bg-blue-100 transition-colors cursor-pointer"
                  >
                    Close Feature
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
