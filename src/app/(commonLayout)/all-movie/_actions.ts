"use server"
import { httpClient } from "@/lib/axios/httpClient"
import { IMedia } from "@/types/media.types"

import { ApiResponse } from "@/types/api.types";

export const getAllMedia = async (): Promise<ApiResponse<IMedia[]>> => {
    try {
        const res = await httpClient.get<IMedia[]>({ url: "/v1/media" });
        return res;
    } catch (error) {
        console.error("Error fetching all media:", error);
        return { success: false, message: "Failed to fetch all media", data: [] };
    }
};