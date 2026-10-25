export interface Book {
  id: string;
  title: string;
  author: string;
  subtitle: string;
  coverImage: string;
  description: string;
  excerpt: string;
  highlights: string[];
  purchaseLink?: string;
}

export interface ValueItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: "Cross" | "Heart" | "Crown" | "Users" | "BookOpen";
}

export interface PressArticle {
  id: string;
  publication: string;
  medium: string;
  date: string;
  headline: string;
  summary: string;
  fullContent: string;
  logoText: string;
  image?: string;
  videoEmbedUrl?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "Book Signings" | "Speaking Events" | "Personal Moments" | "Books" | "Media Features";
  image: string;
  caption: string;
  date: string;
}

export interface GuestNote {
  id: string;
  author: string;
  location: string;
  message: string;
  createdAt: string;
}

export interface FrankfurtPhoto {
  url: string;
  title: string;
  subtitle: string;
}

export interface BroadcastEpisode {
  id: string;
  youtubeId: string;
  title: string;
  episodeTag: string;
  channel: string;
  description: string;
  url: string;
  thumbnail: string;
}

export interface SavedQuote {
  text: string;
  source: string;
}

export const AMAZON_PURCHASE_LINK =
  "https://www.amazon.com/Psalm-Ninety-one-Times-Daisy-Ngozichukwuka/dp/1966567308/ref=sr_1_3?dib=eyJ2IjoiMSJ9.T-uzF5rFZaFyaGJ9zTz42Uam2HPDRP7lP9uSNzoBOf4.PsQ9cmhjWWPlekLYXw1SP5ZPGzilxVQgMZYmEjAyus0&dib_tag=se&qid=1785428775&refinements=p_27%3ADr+Daisy+Ngozichukwuka+Obi&s=books&sr=1-3&text=Dr+Daisy+Ngozichukwuka+Obi";

export const booksData: Book[] = [
  {
    id: "book-1",
    title: "PSALM 91 NINETY-ONE TIMES",
    author: "Daisy Ngozichukwuka Obi",
    subtitle: "A Devotional Journey of Divine Protection, Faith, and Spiritual Fortitude",
    coverImage: "/assets/regenerated_image_1785350653633-QnfjX34u.png",
    description:
      "An extraordinary spiritual masterpiece diving into the secret place of the Most High. 'Psalm 91 Ninety-One Times' offers ninety-one profound daily reflections, prayers, and meditations to ground your soul in unshakeable peace, safety, and divine grace.",
    excerpt:
      "He who dwells in the secret place of the Most High shall abide under the shadow of the Almighty. When you declare Psalm 91 ninety-one times—not as a mechanical recitation, but as a living confession of faith—your spirit aligns with heaven's sanctuary. Fear dissolves, clarity returns, and the quiet assurance of God's angelic guards settles over your home, your family, and your life.",
    highlights: [
      "91 Powerful Daily Reflections & Prayers",
      "Deep Scriptural Exposition on Psalm 91",
      "Inspirational Guidance for Spiritual Fortitude",
      "Available on Amazon (Paperback & Kindle)"
    ],
    purchaseLink: AMAZON_PURCHASE_LINK
  }
];

export const heroContent = {
  headline: "Stories That Inspire Generations",
  subheadline: "Welcome to the official website of Rev. Dr. Daisy Obi, Author, Speaker, Visionary.",
  featuredQuote: {
    text: "Words have the power to transform hearts, inspire minds, and leave a legacy.",
    source: "Rev. Dr. Daisy Obi"
  }
};

export const aboutIntro = {
  intro:
    "Rev. Dr. Daisy Ngozichukwuka Obi, who loves the Lord with great passion for souls, is anointed to teach, to preach and to heal, in the Name of Jesus.",
  portraitImage: "/assets/aistudio/image_37c42776.png",
  preachingImage: "/assets/aistudio/image_0bdd510a.png",
  sanctuaryHeroImage: "/assets/aistudio/image_4d08d697.png"
};

export const coreValuesData: ValueItem[] = [
  {
    id: "val-1",
    title: "Faith",
    tagline: "The Unshakeable Anchor",
    description:
      "Faith is not merely a set of beliefs, but the golden thread weaving purpose, hope, and endurance into every chapter of our existence.",
    iconName: "Cross"
  },
  {
    id: "val-2",
    title: "Compassion",
    tagline: "Grace in Action",
    description:
      "To walk with kindness is to honor the divine reflection in every human heart. Compassion transforms ordinary moments into sacred encounters.",
    iconName: "Heart"
  },
  {
    id: "val-3",
    title: "Leadership",
    tagline: "Servant Stewardship",
    description:
      "True leadership is measured not by how many serve you, but by how many lives are uplifted, empowered, and inspired through your care.",
    iconName: "Crown"
  },
  {
    id: "val-4",
    title: "Family & Legacy",
    tagline: "Roots & Wings",
    description:
      "Our families and community heritage give us strong roots to stand tall and wings to fly toward higher callings.",
    iconName: "Users"
  },
  {
    id: "val-5",
    title: "Lifelong Learning",
    tagline: "Wisdom Unfolding",
    description:
      "Every day offers a fresh lesson. A humble, curious heart remains forever young and receptive to God’s continuous guidance.",
    iconName: "BookOpen"
  }
];

export const quoteOfTheDay = {
  quote:
    "Your life is an unwritten book. Do not let fear hold the pen—let faith guide every word you live out today."
};

export const pressArticlesData: PressArticle[] = [
  {
    id: "press-frankfurt-fair",
    publication: "Frankfurter Buchmesse (Frankfurt Book Fair) — Books Academy",
    medium: "Book Fair & Exhibition",
    date: "Halle 6.0 | Stand C32",
    headline: "Rev. Dr. Daisy Obi Featured at the Frankfurter Buchmesse (Frankfurt Book Fair)",
    summary:
      "Global readers and literary delegates gathered at Halle 6.0 | C32 for the exclusive book gallery exhibition and author book signing of \"PSALM 91 NINETY-ONE TIMES\" presented by Books Academy.",
    fullContent:
      "At the world-renowned Frankfurter Buchmesse (Frankfurt Book Fair), the largest and most prestigious international trade fair for books, Rev. Dr. Daisy Ngozichukwuka Obi's devotional masterpiece, \"PSALM 91 NINETY-ONE TIMES\", was prominently exhibited in partnership with Books Academy.\n\nHosted at Halle 6.0 | Stand C32, the official Book Gallery showcased Rev. Dr. Daisy Obi's profound literary journey from October 15–19, highlighted by an exclusive author Book Signing event on October 16 from 9:00 AM to 2:00 PM.\n\nVisitors, international publishers, delegates, and passionate readers from across the world stopped by the stand to experience the message of divine protection, healing, and spiritual warfare prayer. Commemorative Frankfurt Book Fair book displays, custom engraved wooden pens, thank you gift sets, and official Rev. Dr. Daisy Obi canvas tote bags were distributed to enthusiastic readers who shared heartfelt testimonies of how the biblical expositions on Psalm 91 have strengthened their faith and daily walk with God.",
    logoText: "FRANKFURTER BUCHMESSE",
    image: "/assets/frankfurt_book_fair_booth_1787330560581-C73PSZYv.jpg"
  },
  {
    id: "press-billboard",
    publication: "National Billboard & Media Visibility Campaign",
    medium: "Billboard & Campaign",
    date: "Featured Campaign",
    headline: "PSALM 91 NINETY-ONE TIMES — Highway & Metro Billboard Showcase",
    summary:
      "A high-visibility billboard campaign promoting Rev. Dr. Daisy Obi’s powerful book \"PSALM 91 NINETY-ONE TIMES\" across major metropolitan routes and transit hubs.",
    fullContent:
      "The \"PSALM 91 NINETY-ONE TIMES\" billboard campaign brings a message of divine protection, healing, and spiritual strength to hundreds of thousands of commuters daily across Massachusetts and New England highways.\n\nDesigned to lift the Name of Jesus high and offer hope during challenging times, the campaign features the vibrant book cover alongside inspirational scripture highlights and radio program details.",
    logoText: "BILLBOARD CAMPAIGN",
    image: "/assets/regenerated_image_1785350653633-QnfjX34u.png"
  },
  {
    id: "press-radio-weze",
    publication: "WEZE AM 590 — Radio Salem",
    medium: "Radio Broadcast",
    date: "20+ Years Broadcast",
    headline: "Over 20 Years Hosting Inspirational Radio Broadcasts on WEZE AM 590",
    summary:
      "Rev. Dr. Daisy Obi’s long-running weekly radio show on WEZE AM 590 Radio Salem, sharing messages of unshakable faith, prayer, and salvation.",
    fullContent:
      "For over 20 years, Rev. Dr. Daisy Obi has faithfully hosted her weekly broadcast on WEZE AM 590 (Radio Salem). Listeners tune in from across the region to experience uplifting teachings, biblical exposition on Psalm 91, and earnest prayers for healing and divine restoration.\n\n\"We preach the uncompromised Word of God, bringing hope to the weary and declaring the victory found in Jesus Christ,\" says Rev. Dr. Obi.",
    logoText: "WEZE AM 590",
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "press-tv-ocntv",
    publication: "OCNTV Broadcast Network & YouTube",
    medium: "Television",
    date: "Broadcast Interview",
    headline: "Host of 'OVERFLOWING GRACE' on OCNTV — Featured Video Broadcast",
    summary:
      "Watch Rev. Dr. Daisy Obi host and share inspirational teachings on \"OVERFLOWING GRACE\", delving into Psalm 91, divine protection, and spiritual warfare.",
    fullContent:
      "Watch the full video broadcast featuring Rev. Dr. Daisy Obi on \"OVERFLOWING GRACE\". In this episode, Rev. Dr. Obi shares profound biblical insights on Psalm 91, the secret place of the Most High, and practical steps to walk in divine favor and spiritual protection.",
    logoText: "OVERFLOWING GRACE",
    image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&w=800&q=80",
    videoEmbedUrl: "https://www.youtube.com/embed/Uq6ykG1H530?list=PLseCg89AkbnVmsGIKyMpmTy0aurN09jAl"
  },
  {
    id: "press-1",
    publication: "BBC African Voices & Heritage",
    medium: "Television",
    date: "Special Broadcast",
    headline: "'Anointed to Teach, Preach, and Heal' — BBC Feature on Rev. Dr. Daisy Obi",
    summary:
      "A wide-ranging televised interview with Rev. Dr. Daisy Obi discussing her global ministry across Europe, Asia, Israel, and North America.",
    fullContent:
      "In this exclusive feature on BBC African Voices, Rev. Dr. Daisy Obi sat down to discuss her journeys ministering in Australia, Europe, India, Israel, Singapore, and her native Nigeria.\n\nShe shared how her academic foundation at St. Andrew's Scotland, Princeton, Harvard, Cambridge, and Oxford fueled her passionate calling to preach the Gospel and write transformational books.",
    logoText: "BBC VOICES",
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "press-2",
    publication: "The Literary & Purpose Digest",
    medium: "Literary Feature",
    date: "Cover Profile",
    headline: "Cover Story: 'The Grace and Power of Psalm 91 with Rev. Dr. Daisy Obi'",
    summary:
      "A detailed magazine cover profile exploring Rev. Dr. Obi’s research on Psalm 91, her writing routine, and her academic accolades.",
    fullContent:
      "The Literary & Purpose Digest dedicated a special cover issue to Rev. Dr. Daisy Obi and her groundbreaking release \"PSALM 91 NINETY-ONE TIMES\".\n\nThe feature highlights her Jonathan Daniels Prize for compassion, her Hebrew University Biblical Scholarship in Israel, and her role as Founder & Chief Executive of Adonai Bible Center in Massachusetts.",
    logoText: "LITERARY DIGEST",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "press-3",
    publication: "Faith & Purpose Global Podcast",
    medium: "Podcast",
    date: "Special Episode",
    headline: "Episode 142: 'Transforming Lives Through Psalm 91 Ninety-One Times'",
    summary:
      "An intimate 45-minute podcast episode diving into the origin of the Psalm 91 project and its global impact.",
    fullContent:
      "In Episode 142 of Faith & Purpose, Rev. Dr. Daisy Obi speaks candidly about how the Lord inspired \"PSALM 91 NINETY-ONE TIMES\" to empower believers with spiritual warfare prayer and unwavering protection in uncertain times.",
    logoText: "FAITH & PURPOSE PODCAST",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80"
  }
];

export const frankfurtFairPhotos: FrankfurtPhoto[] = [
  {
    url: "/assets/frankfurt_book_fair_booth_1787330560581-C73PSZYv.jpg",
    title: "Exhibition Booth & Book Gallery",
    subtitle: "Halle 6.0 | Stand C32 display table with Psalm 91 stacks"
  },
  {
    url: "/assets/frankfurt_fair_signing_1787330579804-C_OcE1J7.jpg",
    title: "Reader Book Signing Experience",
    subtitle: "Readers with custom Rev. Dr. Daisy Obi commemorative tote bags"
  },
  {
    url: "/assets/frankfurt_poster_stand_1787331036233-BtTOHE1l.jpg",
    title: "Official Buchmesse Showcase Poster",
    subtitle: "Books Academy table banner and gallery presentation"
  },
  {
    url: "/assets/frankfurt_reader_gift_1787331066477-ToM2QJd8.jpg",
    title: "Fair Keepsakes & Custom Pens",
    subtitle: "Engraved souvenir pens and signed copies of Psalm 91"
  }
];

export const broadcastEpisodes: BroadcastEpisode[] = [
  {
    id: "ep-1",
    youtubeId: "3zMG203s5lE",
    title: "OVERFLOWING GRACE WITH Rev. Dr. Daisy Obi (1)",
    episodeTag: "Episode 1",
    channel: "OCN TV Broadcast",
    description:
      "Rev. Dr. Daisy Obi delivers an inspiring message on divine shelter, abiding in the secret place of the Most High, and foundational principles from Psalm 91.",
    url: "https://www.youtube.com/watch?v=3zMG203s5lE",
    thumbnail: "https://i.ytimg.com/vi/3zMG203s5lE/hqdefault.jpg"
  },
  {
    id: "ep-2",
    youtubeId: "9Hd0iZxDEnI",
    title: "OVERFLOWING GRACE WITH Rev. Dr. Daisy Obi (2)",
    episodeTag: "Episode 2",
    channel: "OCN TV Broadcast",
    description:
      "Rev. Dr. Daisy Obi shares powerful insights on divine protection, overcoming fear, angelic ministry, and declaring biblical authority in daily spiritual warfare.",
    url: "https://www.youtube.com/watch?v=9Hd0iZxDEnI",
    thumbnail: "https://i.ytimg.com/vi/9Hd0iZxDEnI/hqdefault.jpg"
  },
  {
    id: "ep-10",
    youtubeId: "GFi1QSyrqQg",
    title: "OVERFLOWING GRACE WITH Rev. Dr. Daisy Obi (10)",
    episodeTag: "Episode 10",
    channel: "OCN TV Broadcast",
    description:
      "A transformative broadcast diving into spiritual fortitude, victory over adversity, and unlocking the supernatural power of Psalm 91 Ninety-One Times.",
    url: "https://www.youtube.com/watch?v=GFi1QSyrqQg",
    thumbnail: "https://i.ytimg.com/vi/GFi1QSyrqQg/hqdefault.jpg"
  },
  {
    id: "ep-billboard",
    youtubeId: "Uq6ykG1H530",
    title: "Psalm 91: Ninety-One Times | New York Times Billboard Feature",
    episodeTag: "Special Broadcast",
    channel: "Books Academy",
    description:
      "Special television feature capturing the nationwide media outreach, Times Square billboard showcase, and book celebrations with Books Academy.",
    url: "https://www.youtube.com/watch?v=Uq6ykG1H530",
    thumbnail: "https://i.ytimg.com/vi/Uq6ykG1H530/hqdefault.jpg"
  }
];

export const galleryItemsData: GalleryItem[] = [
  {
    id: "gal-frankfurt-1",
    title: "Frankfurter Buchmesse — Book Gallery & Signing",
    category: "Book Signings",
    image: "/assets/frankfurt_book_fair_booth_1787330560581-C73PSZYv.jpg",
    caption:
      "Official exhibition booth and book gallery showcase for \"PSALM 91 NINETY-ONE TIMES\" at the Frankfurt Book Fair in Halle 6.0 | C32.",
    date: "2025"
  },
  {
    id: "gal-frankfurt-2",
    title: "Frankfurt Book Fair Readers & Memorabilia",
    category: "Books",
    image: "/assets/frankfurt_fair_signing_1787330579804-C_OcE1J7.jpg",
    caption:
      "Passionate readers holding copies of Psalm 91 alongside commemorative Rev. Dr. Daisy Obi tote bags and fair memorabilia.",
    date: "2025"
  },
  {
    id: "gal-2",
    title: "Holy Land Pilgrimage in Jerusalem",
    category: "Speaking Events",
    image: "/assets/gallery_jerusalem_view_1785359538376-BvCti65f.jpg",
    caption:
      "Overlooking the Holy City of Jerusalem with fellow pilgrims and ministers during a spiritual journey of prayer and study.",
    date: "2024"
  },
  {
    id: "gal-4",
    title: "International Ministry Conference",
    category: "Speaking Events",
    image: "/assets/gallery_conference_pink_turban_1785359460475-BAEpcHaP.jpg",
    caption:
      "Participating in a global spiritual conference focused on prayer, revival, and biblical scholarship.",
    date: "2025"
  },
  {
    id: "gal-5",
    title: "Marketplace Revivalists Fellowship",
    category: "Book Signings",
    image: "/assets/gallery_marketplace_revival_1785359437978-Ci1ygJhn.jpg",
    caption:
      "Connecting with passionate young marketplace leaders and readers over a book signing & fellowship gathering.",
    date: "2025"
  },
  {
    id: "gal-6",
    title: "Cherished Family Thanksgiving",
    category: "Personal Moments",
    image: "/assets/gallery_red_family_prints_1785359482743-B2CjW-4X.jpg",
    caption:
      "Warm family moments surrounded by sisters and loved ones in festive traditional African print attire.",
    date: "2024"
  },
  {
    id: "gal-7",
    title: "Academic Excellence & Graduation Milestone",
    category: "Personal Moments",
    image: "/assets/gallery_graduation_gates_1785359526317-DtoX4IYA.jpg",
    caption:
      "Celebrating academic excellence and university graduation achievements of the next generation.",
    date: "2024"
  },
  {
    id: "gal-8",
    title: "Hospital Outreach & Pastoral Care",
    category: "Media Features",
    image: "/assets/gallery_hospital_care_1785359513280-M_ev2i4G.jpg",
    caption:
      "Bringing warmth, prayer, and divine comfort during hospital visitations and pastoral care outreach.",
    date: "2025"
  },
  {
    id: "gal-9",
    title: "Heart of Compassion & Senior Visitation",
    category: "Personal Moments",
    image: "/assets/gallery_elderly_care_1785359587680-BYCASHWq.jpg",
    caption:
      "Serving with love, humility, and encouragement through personal care and senior visitation ministry.",
    date: "2025"
  },
  {
    id: "gal-10",
    title: "Sisterly Fellowship at Adonai Bible Center",
    category: "Speaking Events",
    image: "/assets/gallery_church_steps_green_1785359576110-BYiOYOZh.jpg",
    caption:
      "Warm sisterly love and fellowship following a spirit-filled worship service at Adonai Bible Center.",
    date: "2025"
  },
  {
    id: "gal-11",
    title: "Christmas Joy & Holiday Thanksgiving",
    category: "Personal Moments",
    image: "/assets/gallery_santa_hat_1785359401765-B40PSHXi.jpg",
    caption:
      "Rev. Dr. Daisy Obi spreading festive cheer and thanksgiving at home during the Christmas holiday season.",
    date: "2024"
  },
  {
    id: "gal-12",
    title: "Banquet Celebration & Author Mentorship",
    category: "Book Signings",
    image: "/assets/gallery_banquet_youth_1785359424985-Day--pGs.jpg",
    caption:
      "Sharing smiles and fellowship during an evening celebration honoring spiritual growth and author achievements.",
    date: "2025"
  },
  {
    id: "gal-13",
    title: "Outdoor Celebration & Friendship",
    category: "Personal Moments",
    image: "/assets/gallery_garden_hat_1785359471667-BgEsf0NQ.jpg",
    caption:
      "A beautiful afternoon spent celebrating life, friendship, and divine blessings outdoors.",
    date: "2024"
  },
  {
    id: "gal-14",
    title: "Quiet Moments of Writing & Reflection",
    category: "Books",
    image: "/assets/gallery_staircase_denim_1785359494767-B5mR_Vku.jpg",
    caption:
      "Reflecting on peace and divine purpose during a quiet afternoon in the author’s study.",
    date: "2025"
  },
  {
    id: "gal-15",
    title: "Warm Family Gathering & Celebration",
    category: "Personal Moments",
    image: "/assets/gallery_family_green_dress_1785516122806-HkWGPwTS.jpg",
    caption: "Cherished family moments, smiles, and thanksgiving with loved ones.",
    date: "2026"
  },
  {
    id: "gal-16",
    title: "Community Fellowship & Shopping Outing",
    category: "Personal Moments",
    image: "/assets/gallery_friends_mall_1785516139256-CPDl_jDj.jpg",
    caption: "Joyful fellowship and friendship during a community shopping outing.",
    date: "2026"
  }
];

export const initialGuestNotes: GuestNote[] = [
  {
    id: "note-1",
    author: "Sister Mary Teresa",
    location: "Dublin, Ireland",
    message:
      "Rev. Dr. Daisy, your book Graceful Reflections has been my daily companion every morning. Your words bring such peace and divine perspective into my heart.",
    createdAt: "2 days ago"
  },
  {
    id: "note-2",
    author: "Dr. Emmanuel K.",
    location: "Lagos, Nigeria",
    message:
      "Thank you for your lifelong commitment to educational mentorship. Your speech at the conference inspired me to launch our youth writing forum.",
    createdAt: "1 week ago"
  },
  {
    id: "note-3",
    author: "Grace S. W.",
    location: "Toronto, Canada",
    message:
      "Your personal story of faith and perseverance gives me hope every single day. God bless your pen and your family!",
    createdAt: "2 weeks ago"
  }
];
