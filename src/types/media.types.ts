export const MediaTypeEnum = {
    MOVIE: "MOVIE",
    SERIES: "SERIES"
} as const;

export type MediaType = (typeof MediaTypeEnum)[keyof typeof MediaTypeEnum];

export const Pricing = {
    FREE: "FREE",
    PREMIUM: "PREMIUM"
} as const;
export type MediaPricing = (typeof Pricing)[keyof typeof Pricing];

export interface IGenre {
    id: string;
    name: string;
}

export interface ICast {
    id: string;
    name: string;
    role: string;
}

export interface IMedia {
    id: string;
    title: string;
    synopsis: string;
    releaseYear: number;
    director: string;
    type: MediaType;
    pricing: MediaPricing;
    streamingLink: string;
    posterUrl: string;
    averageRating: number;
    totalReviews: number;
    genres: IGenre[];
    cast: ICast[];
    createdAt?: string;
    updatedAt?: string;
}

export interface CreateMediaDto {
    title: string;
    synopsis: string;
    releaseYear: number;
    director: string;
    type: MediaType;
    pricing: MediaPricing;
    streamingLink: string;
    posterUrl: string;
    genres: string[];
    cast: { name: string; role: string }[];
}

export interface UpdateMediaDto extends Partial<CreateMediaDto> { }

export interface MediaAnalytics {
    id: string;
    title: string;
    synopsis: string;
    releaseYear: number;
    director: string;
    type: string;
    pricing: string;
    streamingLink: string;
    posterUrl: string;
    ownerId: string;
    totalReviews: number;
    averageRating: number;
    status: string;
}

export interface IMediaMeta {
    limit: number;
    page: number;
    total: number;
    totalPage: number;
}
