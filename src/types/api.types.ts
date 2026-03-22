export interface Meta {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
}

export interface ApiResponse<T> {
    success: boolean;
    message: string;
    data: T;
    meta?: Meta;
};

export interface ApiErrorResponse {
    success: boolean;
    message: string;
};
