"use server"
import { httpClient } from "@/lib/axios/httpClient"

export const getAllMedia = async () => {
    try {
        const medias = await httpClient.get({ url: "/v1/media" })
        console.log("response from all media", medias);
        return medias;
    } catch (error) {
        console.error("Error fetching all media:", error);
        return [];
    }
};