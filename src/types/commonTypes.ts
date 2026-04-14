export interface Media {
    id: string;
    title: string;
    synopsis: string;
    releaseYear: number;
    director: string;
    type: string;
    pricing: string;
    streamingLink: string;
    posterUrl: string;
    averageRating: number;
    totalReviews: number;
    genres: {
        id: string;
        name: string;
    }[];
    cast: {
        id: string;
        name: string;
        role: string;
    }[];
};

export interface Feature {
    icon: string;
    title: string;
    description: string;
    color: string;
};

export interface Category {
    title: string;
    description: string;
    icon: string;
    image: string;
    count: string;
};

export interface Testimonial {
    name: string;
    role: string;
    content: string;
    avatar: string;
    rating: number;
};

// About Page Types
export interface AboutFeature {
    title: string;
    description: string;
    icon: string;
}

export interface AboutStat {
    label: string;
    value: number;
    icon: string;
    suffix: string;
};

// Shared component types
export interface Faq {
    question: string;
    answer: string
};

// Contact Page Types
export interface ContactInfo {
    title: string;
    value: string;
    icon: string;
    description: string;
};

export interface ContactSupportCategory {
    title: string;
    description: string;
    icon: string;
};

export interface ContactResponseData {
    title: string;
    value: string;
    description: string;
    icon: string;
};

export interface contactSocial {
    name: string;
    icon: string;
    href: string;
}