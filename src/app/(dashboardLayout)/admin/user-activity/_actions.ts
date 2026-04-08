"use server";

import { httpClient } from "@/lib/axios/httpClient";
import { cookies } from "next/headers";

export interface IUserActivity {
    recentReviews: {
        id: string;
        user: {
            name: string;
            email: string;
        };
        media: {
            title: string;
        };
        content: string;
        tags: string[];
        rating: number;
        status: string;
        createdAt: string;
    }[];
}

export const getUserActivity = async (): Promise<IUserActivity | null> => {
    const cookieStore = await cookies();
    const sessionToken = cookieStore.get("session_token")?.value;

    try {
        const res = await httpClient.get<IUserActivity>({
            url: `/v1/admin/user-activity`,
            headers: {
                Cookie: `session_token=${sessionToken}`
            }
        });
        if (res?.success) {
            return res.data;
        }
        return null;
    } catch (error) {
        console.error("Error fetching user activity:", error);
        return null;
    }
};