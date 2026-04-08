"use server";

import { httpClient } from "@/lib/axios/httpClient";
import { CreateMediaDto, IMedia } from "@/types/media.types";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

export const createMediaAction = async (data: CreateMediaDto) => {
    // Log the payload clearly for debugging
    console.log("Creating Media with payload:", JSON.stringify(data, null, 2));

    const cookieStore = await cookies();
    const sessionToken = cookieStore.get("session_token")?.value;

    try {
        const res = await httpClient.post<IMedia>(data, {
            url: "/v1/media",
            headers: {
                Cookie: `session_token=${sessionToken}`
            }
        });

        if (res.success) {
            revalidatePath("/");
            revalidatePath("/admin/media-analytics");
        }

        return res;
    } catch (error: any) {
        return {
            success: false,
            message: error?.response?.data?.message || "Something went wrong while creating media",
        };
    }
};
