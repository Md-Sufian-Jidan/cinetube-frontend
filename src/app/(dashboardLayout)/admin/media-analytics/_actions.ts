"use server";

import { httpClient } from "@/lib/axios/httpClient";

export const getMediaAnalytics = async () => {
    try {
        const res = await httpClient.get({ url: "/v1/admin/media-analytics" });
        if (res?.success) {
            return res.data;
        }
        return [];
    } catch (error) {
        console.error("Error fetching media analytics:", error);
        return [];
    }
};