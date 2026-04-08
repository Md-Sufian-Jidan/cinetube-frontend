"use server";

import { httpClient } from "@/lib/axios/httpClient";
import { ApiResponse } from "@/types/api.types";
import { UserInfo } from "@/types/userInfo.types";
import { cookies } from "next/headers";

export async function getMyProfile(): Promise<ApiResponse<UserInfo>> {
    const cookieStore = await cookies();
    const sessionToken = cookieStore.get("session_token")?.value;

    try {
        const res = await httpClient.get<UserInfo>({
            url: "/v1/users/me",
            headers: {
                Cookie: `session_token=${sessionToken}`
            }
        });
        return res;
    } catch (error) {
        console.error("Error fetching my profile:", error);
        return { success: false, message: "Failed to fetch profile", data: {} as UserInfo };
    }
}