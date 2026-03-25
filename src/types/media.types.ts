export type MediaType = "MOVIE" | "SERIES";
export type MediaPricing = "FREE" | "PREMIUM";

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

export interface UpdateMediaDto extends Partial<CreateMediaDto> {}
