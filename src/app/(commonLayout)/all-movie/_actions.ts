"use server"
import { httpClient } from "@/lib/axios/httpClient"
import { IMedia, IMediaDetail } from "@/types/media.types"
import { ApiResponse } from "@/types/api.types";
import { cookies } from "next/headers";

export const getAllMedia = async (
    page = 1,
    limit = 8,
    searchTerm = ""
): Promise<ApiResponse<IMedia[]>> => {
    try {
        const res = await httpClient.get<IMedia[]>({
            url: "/v1/media",
            params: { page, limit, searchTerm }
        });
        return res;
    } catch (error) {
        console.error("Error fetching all media:", error);
        return { success: false, message: "Failed to fetch all media", data: [] };
    }
};

export const getMediaById = async (id: string): Promise<ApiResponse<IMediaDetail>> => {
    const cookieStore = await cookies();
    const sessionToken = cookieStore.get("cinetube.session_token")?.value;
    try {
        const res = await httpClient.get<IMediaDetail>(
            {
                url: `/v1/media/${id}`,
                headers: {
                    Cookie: `cinetube.session_token=${sessionToken}`
                }
            });
        return res;
    } catch (error) {
        console.error("Error fetching media by id:", error);
        return { success: false, message: "Failed to fetch media by id", data: { media: {} as IMedia, reviews: [] } };
    }
};

export const toggleLike = async (reviewId: string) => {
    const cookieStore = await cookies();
    const sessionToken = cookieStore.get("cinetube.session_token")?.value;

    try {
        const res = await httpClient.post({ data: null }, {
            url: `/v1/reviews/${reviewId}/like`,
            headers: {
                Cookie: `cinetube.session_token=${sessionToken}`
            },
        });
        return { success: true, data: res };
    } catch (error) {
        console.error("Error toggling like:", error);
        return { success: false, message: "Could not update like" };
    }
};

export const addComment = async (reviewId: string, text: string) => {
    const cookieStore = await cookies();
    const sessionToken = cookieStore.get("cinetube.session_token")?.value;

    try {
        const res = await httpClient.post({ data: { text } }, {
            url: `/v1/reviews/${reviewId}/comments`,
            headers: {
                Cookie: `cinetube.session_token=${sessionToken}`
            }
        });
        return { success: true, data: res };
    } catch (error) {
        console.error("Error adding comment:", error);
        return { success: false };
    }
};