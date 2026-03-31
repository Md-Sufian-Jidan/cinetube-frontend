export const IReviewStatus = {
    PENDING: "PENDING",
    PUBLISHED: "PUBLISHED",
    UNPUBLISHED: "UNPUBLISHED",
} as const;

export type ReviewStatus = (typeof IReviewStatus)[keyof typeof IReviewStatus];

export interface IReviewUser {
    name: string;
    email: string;
}

export interface IReviewMedia {
    title: string;
}

export interface IReview {
    id: string;
    rating: number;
    content: string;
    tags: string[];
    isSpoiler: boolean;
    status: ReviewStatus;
    userId: string;
    mediaId: string;
    createdAt: string;
    updatedAt: string;
    user: IReviewUser;
    media: IReviewMedia;
}

export interface Review {
    id: string;
    rating: number;
    content: string;
    tags: string[];
    isSpoiler: boolean;
    status: string;
    createdAt: string;
    media: {
        title: string;
        posterUrl: string;
    };
}

export interface ReviewResponse {
    success: boolean;
    data: Review[];
}