"use server";

import { httpClient } from "@/lib/axios/httpClient";
import { MediaAnalytics } from "@/types/media.types";
import { cookies } from "next/headers";

export const getMediaAnalytics = async (): Promise<MediaAnalytics[]> => {
    const cookieStore = await cookies();
    const sessionToken = cookieStore.get("cinetube.session_token")?.value;

    try {
        const res = await httpClient.get<MediaAnalytics[]>({
            url: "/v1/admin/media-analytics",
            headers: {
                Cookie: `cinetube.session_token=${sessionToken}`
            }
        });
        if (res?.success) {
            return res.data;
        }
        return [];
    } catch (error) {
        console.error("Error fetching media analytics:", error);
        return [];
    }
};