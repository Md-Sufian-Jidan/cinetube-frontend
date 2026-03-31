"use server"
import { httpClient } from "@/lib/axios/httpClient"
import { IMedia } from "@/types/media.types"
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

export const getMediaById = async (id: string): Promise<ApiResponse<IMedia>> => {
    const cookieStore = await cookies();
    const sessionToken = cookieStore.get("cinetube.session_token")?.value;
    try {
        const res = await httpClient.get<IMedia>(
            {
                url: `/v1/media/${id}`,
                headers: {
                    Cookie: `cinetube.session_token=${sessionToken}`
                }
            });
        return res;
    } catch (error) {
        console.error("Error fetching media by id:", error);
        return { success: false, message: "Failed to fetch media by id", data: {} as IMedia };
    }
};