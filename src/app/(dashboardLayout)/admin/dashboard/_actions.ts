"use server";

import { httpClient } from "@/lib/axios/httpClient";
import { cookies } from "next/headers";

export const getDashboardStats = async () => {
    const cookieStore = await cookies();
    const sessionToken = cookieStore.get("cinetube.session_token")?.value;

    try {
        const res = await httpClient.get({
            url: "/v1/admin/dashboard-stats",
            headers: {
                Cookie: `cinetube.session_token=${sessionToken}`
            }
        });
        if (res?.success) {
            return res.data;
        }
        return [];
    } catch (error) {
        console.error("Error fetching dashboard stats:", error);
        return [];
    }
};