"use server";

import { httpClient } from "@/lib/axios/httpClient";
import { cookies } from "next/headers";

export const getMediaAnalytics = async () => {
    const cookieStore = await cookies();
    const sessionToken = cookieStore.get("better-auth.session_token")?.value;

    try {
        const res = await httpClient.get({ 
            url: "/v1/admin/media-analytics",
            headers: {
                Cookie: `better-auth.session_token=${sessionToken}`
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