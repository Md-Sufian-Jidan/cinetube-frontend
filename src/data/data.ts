
import { AboutFeature, AboutStat, BlogPost, Category, ContactInfo, ContactResponseData, contactSocial, ContactSupportCategory, Faq, Feature, Media, PricingFeature, PricingPlan, SupportArticle, SupportCategory, TermsSection, Testimonial } from "@/types/commonTypes";

export const initialMedia: Media[] = [
    {
        id: "36e35107-8ef2-4df6-a5d9-8e2be6bd372b",
        title: "Breaking Bad",
        synopsis: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine.",
        releaseYear: 2008,
        director: "Vince Gilligan",
        type: "SERIES",
        pricing: "PREMIUM",
        streamingLink: "https://www.netflix.com/title/70143836",
        posterUrl: "https://image.tmdb.org/t/p/w500/ggm8bbEA9gnxa9KiYvH0o9ihr2W.jpg",
        averageRating: 9.5,
        totalReviews: 1240,
        genres: [
            { id: "g1", name: "Crime" },
            { id: "g2", name: "Drama" },
            { id: "g3", name: "Thriller" }
        ],
        cast: [
            { id: "c1", name: "Bryan Cranston", role: "Walter White" },
            { id: "c2", name: "Aaron Paul", role: "Jesse Pinkman" }
        ]
    },
    {
        id: "a1b2c3d4-e5f6-g7h8-i9j0",
        title: "Inception",
        synopsis: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea.",
        releaseYear: 2010,
        director: "Christopher Nolan",
        type: "MOVIE",
        pricing: "FREE",
        streamingLink: "https://www.youtube.com/watch?v=YoHD9XEInc0",
        posterUrl: "https://image.tmdb.org/t/p/w500/8ZTVqvTZS7crSBAz2Xv6eY0Pone.jpg",
        averageRating: 8.8,
        totalReviews: 850,
        genres: [
            { id: "g4", name: "Sci-Fi" },
            { id: "g5", name: "Action" }
        ],
        cast: [
            { id: "c3", name: "Leonardo DiCaprio", role: "Cobb" }
        ]
    },
    {
        id: "z1y2x3w4-v5u4-t3s2",
        title: "The Last of Us",
        synopsis: "After a global pandemic destroys civilization, a hardened survivor takes charge of a 14-year-old girl who may be humanity's last hope.",
        releaseYear: 2023,
        director: "Craig Mazin",
        type: "SERIES",
        pricing: "PREMIUM",
        streamingLink: "https://www.hbo.com/the-last-of-us",
        posterUrl: "https://image.tmdb.org/t/p/w500/uKvHjS1qU5Q7ZU1pBnk6pS1s6nn.jpg",
        averageRating: 8.9,
        totalReviews: 500,
        genres: [
            { id: "g2", name: "Drama" },
            { id: "g6", name: "Horror" }
        ],
        cast: [
            { id: "c4", name: "Pedro Pascal", role: "Joel" },
            { id: "c5", name: "Bella Ramsey", role: "Ellie" }
        ]
    },
    {
        id: "m9n8o7p6-q5r4-s3t2",
        title: "John Wick",
        synopsis: "An ex-hit-man comes out of retirement to track down the gangsters that killed his dog and took everything from him.",
        releaseYear: 2014,
        director: "Chad Stahelski",
        type: "MOVIE",
        pricing: "PREMIUM",
        streamingLink: "https://www.lionsgate.com/movies/john-wick",
        posterUrl: "https://image.tmdb.org/t/p/w500/fzcm3098XvS9AnzSSTp9pU7p605.jpg",
        averageRating: 7.4,
        totalReviews: 320,
        genres: [
            { id: "g5", name: "Action" },
            { id: "g3", name: "Thriller" }
        ],
        cast: [
            { id: "c6", name: "Keanu Reeves", role: "John Wick" }
        ]
    }
];

export const features: Feature[] = [
    {
        icon: "Star",
        title: "Expert Reviews",
        description: "Read in-depth reviews from professional critics and fellow cinephiles to make informed viewing decisions.",
        color: "text-[#EAB308]",
    },
    {
        icon: "Users",
        title: "Community Driven",
        description: "Connect with like-minded movie enthusiasts, share recommendations, and build your watchlist together.",
        color: "text-[#EAB308]",
    },
    {
        icon: "Zap",
        title: "Lightning Fast",
        description: "Stream in ultra-high definition with minimal buffering and instant access to your favorite content.",
        color: "text-[#EAB308]",
    },
    {
        icon: "Shield",
        title: "Secure & Private",
        description: "Your data is protected with enterprise-grade security. Watch with peace of mind.",
        color: "text-[#EAB308]",
    },
    {
        icon: "Search",
        title: "Smart Search",
        description: "Find exactly what you're looking for with our advanced AI-powered search and recommendation engine.",
        color: "text-[#EAB308]",
    },
    {
        icon: "Heart",
        title: "Personalized",
        description: "Get tailored recommendations based on your viewing history and preferences.",
        color: "text-[#EAB308]",
    },
];

export const categories: Category[] = [
    {
        title: "Action & Adventure",
        description: "High-octane thrills and epic journeys",
        icon: "Zap",
        image: "https://images.unsplash.com/photo-1509347528160-d04b002dca1b?q=80&w=2070",
        count: "2.5k+",
    },
    {
        title: "Drama",
        description: "Emotional stories that touch the soul",
        icon: "Heart",
        image: "https://images.unsplash.com/photo-1489599735734-79b4e62e8c2a?q=80&w=2070",
        count: "3.2k+",
    },
    {
        title: "Comedy",
        description: "Laugh-out-loud entertainment",
        icon: "Star",
        image: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=2070",
        count: "1.8k+",
    },
    {
        title: "Sci-Fi & Fantasy",
        description: "Imaginative worlds beyond reality",
        icon: "Crown",
        image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?q=80&w=2070",
        count: "1.5k+",
    },
    {
        title: "Documentary",
        description: "Real stories from around the world",
        icon: "Film",
        image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2070",
        count: "950+",
    },
    {
        title: "TV Series",
        description: "Binge-worthy episodic content",
        icon: "Tv",
        image: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&w=2070",
        count: "4.1k+",
    },
];

export const testimonials: Testimonial[] = [
    {
        name: "Alex Rivera",
        role: "Movie Critic",
        content: "CineTube has completely changed how I track my watchlist. The UI is sleek, and the rating system is incredibly intuitive.",
        avatar: "https://i.pravatar.cc/150?u=alex",
        rating: 5,
    },
    {
        name: "Sarah Jenkins",
        role: "Premium Member",
        content: "The streaming quality is top-notch. I love being able to see what my friends are watching and reading their spoiler-free reviews.",
        avatar: "https://i.pravatar.cc/150?u=sarah",
        rating: 5,
    },
    {
        name: "Marcus Chen",
        role: "Director",
        content: "As a filmmaker, I appreciate the focus on metadata and cast details. It feels like a platform built by people who actually love cinema.",
        avatar: "https://i.pravatar.cc/150?u=marcus",
        rating: 4,
    },
];

// About page content
export const aboutFeatures: AboutFeature[] = [
    {
        title: "Intelligent Curation",
        description:
            "Our workflow eliminates decision fatigue by focusing on pixel-perfect precision and high-end aesthetics.",
        icon: "Zap",
    },
    {
        title: "Unrivaled Quality",
        description:
            "Experience visuals as they were intended. We deliver results that rival physical media standards.",
        icon: "ShieldCheck",
    },
    {
        title: "Seamless Integration",
        description:
            "Your assets are ready for any platform—from mobile social feeds to cinematic home theaters.",
        icon: "Smartphone",
    },
    {
        title: "Seamless Streaming",
        description:
            "Enjoy uninterrupted movie and series streaming with optimized performance and ultra-fast loading.",
        icon: "Film",
    },
    {
        title: "AI Recommendations",
        description:
            "Get smart suggestions based on your watch history and preferences powered by intelligent algorithms.",
        icon: "Sparkles",
    },
    {
        title: "Personal Watchlist",
        description:
            "Save your favorite movies and series to watch later anytime, anywhere with one click.",
        icon: "Bookmark",
    },
    {
        title: "Ultra HD Quality",
        description:
            "Experience movies in crystal-clear HD and 4K quality for a true cinematic experience.",
        icon: "Monitor",
    },
];

export const aboutStats: AboutStat[] = [
    {
        label: "Active Users",
        value: 120000,
        suffix: "+",
        icon: "Users",
    },
    {
        label: "Movies & Series",
        value: 8500,
        suffix: "+",
        icon: "Film",
    },
    {
        label: "User Reviews",
        value: 450000,
        suffix: "+",
        icon: "MessageCircle",
    },
    {
        label: "Average Rating",
        value: 4.8,
        suffix: "/5",
        icon: "Star",
    },
];

export const faqs: Faq[] = [
    {
        question: "What is CineTube?",
        answer:
            "CineTube is a modern movie and series streaming platform where you can explore, watch, and save your favorite content with personalized recommendations.",
    },
    {
        question: "Is CineTube free to use?",
        answer:
            "Yes, CineTube offers both free and premium plans depending on your streaming quality and features like AI recommendations and watchlists.",
    },
    {
        question: "Does CineTube support HD streaming?",
        answer:
            "Absolutely! CineTube supports HD and Ultra HD streaming for a cinematic viewing experience.",
    },
    {
        question: "Can I create a watchlist?",
        answer:
            "Yes, users can easily add movies and series to their personal watchlist and access them anytime.",
    },
    {
        question: "Does CineTube use AI recommendations?",
        answer:
            "Yes, CineTube uses intelligent recommendation systems to suggest movies based on your watch history and preferences.",
    },
];

// Contact page data
export const contactInfo: ContactInfo[] = [
    {
        title: "Email Support",
        value: "support@cinetube.com",
        icon: "Mail",
        description: "Get help within 24 hours",
    },
    {
        title: "Phone Support",
        value: "+880 1234 567 890",
        icon: "Phone",
        description: "Mon–Fri, 9AM–6PM",
    },
    {
        title: "Office Location",
        value: "Dhaka, Bangladesh",
        icon: "MapPin",
        description: "Visit our headquarters",
    },
];

export const contactSupportCategories: ContactSupportCategory[] = [
    {
        title: "Billing",
        description: "Manage subscriptions, payments, and invoices بسهولة.",
        icon: "CreditCard",
    },
    {
        title: "Technical Support",
        description: "Fix bugs, playback issues, or platform errors quickly.",
        icon: "Settings",
    },
    {
        title: "Account Help",
        description: "Update profile, password, or account settings.",
        icon: "User",
    },
    {
        title: "Streaming Issues",
        description: "Resolve buffering, quality, or playback problems.",
        icon: "Film",
    },
];

export const contactResponseData: ContactResponseData[] = [
    {
        title: "Average Response Time",
        value: "< 24 Hours",
        description: "We respond to all inquiries within one business day.",
        icon: "Clock",
    },
    {
        title: "Live Support",
        value: "9AM – 10PM",
        description: "Our support team is available every day for quick help.",
        icon: "Headphones",
    },
    {
        title: "AI Chat Assistant",
        value: "24/7 Available",
        description: "Instant answers anytime with our smart chatbot.",
        icon: "Bot",
    },
];

export const contactSocials: contactSocial[] = [
    {
        name: "Facebook",
        icon: "Facebook",
        href: "https://facebook.com",
    },
    {
        name: "Twitter",
        icon: "Twitter",
        href: "https://twitter.com",
    },
    {
        name: "Instagram",
        icon: "Instagram",
        href: "https://instagram.com",
    },
    {
        name: "YouTube",
        icon: "Youtube",
        href: "https://youtube.com",
    },
];

// Blog page data
export const posts: BlogPost[] = [
    {
        title: "Top 10 Hidden Gems to Watch This Weekend",
        excerpt: "Dive into our curated list of underrated indie movies that deserve your attention.",
        category: "Recommendations",
        author: "Sarah Jenkins",
        date: "Apr 12, 2026",
        readTime: "4 min read",
        image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059",
    },
    {
        title: "How We Optimized 4K Streaming for Low Bandwidth",
        excerpt: "A deep technical dive into our new dynamic bitrate streaming algorithm.",
        category: "Engineering",
        author: "David Chen",
        date: "Apr 08, 2026",
        readTime: "8 min read",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070",
    },
    {
        title: "Announcing CineTube Originals Vol. 1",
        excerpt: "Get ready for a highly anticipated batch of original series premiering next month.",
        category: "Announcements",
        author: "Elena Rodriguez",
        date: "Apr 05, 2026",
        readTime: "3 min read",
        image: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=1974",
    },
    {
        title: "Mastering the CineTube Dashboard as an Admin",
        excerpt: "Tips and tricks for new administrators to manage their content libraries efficiently.",
        category: "Tutorials",
        author: "Marcus Wei",
        date: "Mar 28, 2026",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015",
    },
    {
        title: "The Impact of Sound Design in Modern Thrillers",
        excerpt: "Exploring why audio matters just as much as visuals in setting the perfect mood.",
        category: "Editorial",
        author: "Sam Taylor",
        date: "Mar 20, 2026",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974",
    },
    {
        title: "A Look Back at the Best Releases of Q1 2026",
        excerpt: "Our community's favorite movies and series from the first quarter of the year.",
        category: "Community",
        author: "Alex Reynolds",
        date: "Mar 15, 2026",
        readTime: "4 min read",
        image: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?q=80&w=2071",
    },
];

// Pricing page data
export const plans: PricingPlan[] = [
    {
        name: "Basic",
        description: "Perfect for casual viewers who want to catch up on shows.",
        monthlyPrice: 9.99,
        yearlyPrice: 99.99,
        features: [
            { name: "Ad-supported viewing", included: true },
            { name: "1080p resolution", included: true },
            { name: "Watch on 1 device at a time", included: true },
            { name: "Offline downloads", included: false },
            { name: "4K HDR Streaming", included: false },
            { name: "Spatial Audio", included: false },
        ],
        highlight: false,
    },
    {
        name: "Standard",
        description: "Great for most users looking for a high-quality ad-free experience.",
        monthlyPrice: 15.99,
        yearlyPrice: 159.99,
        features: [
            { name: "Ad-free viewing", included: true },
            { name: "4K resolution", included: true },
            { name: "Watch on 2 devices simultaneously", included: true },
            { name: "Offline downloads", included: true },
            { name: "4K HDR Streaming", included: false },
            { name: "Spatial Audio", included: false },
        ],
        highlight: true,
    },
    {
        name: "Premium",
        description: "The ultimate cinematic experience for dedicated movie lovers.",
        monthlyPrice: 22.99,
        yearlyPrice: 229.99,
        features: [
            { name: "Ad-free viewing", included: true },
            { name: "4K resolution", included: true },
            { name: "Watch on 4 devices simultaneously", included: true },
            { name: "Offline downloads", included: true },
            { name: "4K HDR Streaming", included: true },
            { name: "Spatial Audio", included: true },
        ],
        highlight: false,
    },
];

export const pricingFeatures: PricingFeature[] = [
    {
        category: "Streaming Quality",
        items: [
            { name: "Resolution", basic: "1080p", standard: "4K", premium: "4K HDR" },
            { name: "Spatial Audio", basic: false, standard: false, premium: true },
            { name: "Dolby Vision & Atmos", basic: false, standard: false, premium: true },
        ]
    },
    {
        category: "Features & Accessibility",
        items: [
            { name: "Ad-free streaming", basic: false, standard: true, premium: true },
            { name: "Simultaneous screens", basic: "1", standard: "2", premium: "4" },
            { name: "Offline downloads", basic: false, standard: true, premium: true },
            { name: "Custom profiles", basic: "Up to 2", standard: "Up to 5", premium: "Unlimited" },
        ]
    },
    {
        category: "Content Catalog",
        items: [
            { name: "Movies & Series", basic: true, standard: true, premium: true },
            { name: "Exclusive CineTube Originals", basic: false, standard: true, premium: true },
            { name: "Live Events & Premieres", basic: false, standard: false, premium: true },
        ]
    }
];

// Support page data
export const supportCategories: SupportCategory[] = [
    {
        title: "Account Settings",
        description: "Manage your profile, preferences, and security settings.",
        icon: "User",
    },
    {
        title: "Plans & Billing",
        description: "Update payment methods, view invoices, and change plans.",
        icon: "CreditCard",
    },
    {
        title: "Streaming & Playback",
        description: "Troubleshoot buffering, audio issues, and subtitle settings.",
        icon: "PlayCircle",
    },
    {
        title: "Supported Devices",
        description: "Find out how to watch on Smart TVs, consoles, and mobile.",
        icon: "Smartphone",
    },
    {
        title: "Platform Features",
        description: "Learn about offline viewing, profiles, and recommendations.",
        icon: "Settings",
    },
    {
        title: "Community & Contact",
        description: "Get in touch with our team or browse community forums.",
        icon: "MessageSquare",
    },
];

export const supportArticles: SupportArticle[] = [
    { title: "How to change your subscription plan", reads: "12k reads" },
    { title: "Troubleshooting buffering and video quality", reads: "8.5k reads" },
    { title: "Setting up parental controls", reads: "5.2k reads" },
    { title: "Supported devices and browsers", reads: "15k reads" },
    { title: "How to use offline viewing on mobile", reads: "21k reads" },
    { title: "Resetting your forgotten password", reads: "34k reads" },
];

// Terms page data
export const termsSections: TermsSection[] = [
    {
        id: "agreement",
        title: "1. Agreement to Terms",
        icon: "FileText",
        content: `By accessing or using the CineTube platform, you signify that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these Terms, you may not access or use the Service. These Terms apply to all visitors, users, and others who access or use the Service. We reserve the right, at our sole discretion, to modify or replace these Terms at any time.`
    },
    {
        id: "use-license",
        title: "2. Use License & Restrictions",
        icon: "Shield",
        content: `CineTube grants you a limited, non-exclusive, non-transferable, and revocable license to access and use the Service for your personal, non-commercial purposes.
        \nYou agree not to:
        • Modify, copy, distribute, transmit, display, or perform the content.
        • Use the service for any illegal or unauthorized purpose.
        • Circumvent, disable, or otherwise interfere with security-related features of the Service.
        • Use automated systems, such as "robots" or "spiders", to access the Service.`
    },
    {
        id: "privacy",
        title: "3. Privacy & Data Security",
        icon: "Lock",
        content: `Your privacy is important to us. Our Privacy Policy explains how we collect, use, protect, and when we share personal information and other data with others. By using our Services, you agree that we can collect and use such data in accordance with our Privacy Policy. We implement advanced security measures to maintain the safety of your personal information.`
    },
    {
        id: "jurisdiction",
        title: "4. Governing Law",
        icon: "Globe",
        content: `These Terms shall be governed and construed in accordance with the laws of your local jurisdiction, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.`
    }
];