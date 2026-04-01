"use server";

import { httpClient } from "@/lib/axios/httpClient";
import { CreateMediaDto, IMedia } from "@/types/media.types";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

export const createMediaAction = async (data: CreateMediaDto) => {
    const cookieStore = await cookies();
    const sessionToken = cookieStore.get("cinetube.session_token")?.value;

    try {
        const res = await httpClient.post<IMedia>(data, {
            url: "/media",
            headers: {
                Cookie: `cinetube.session_token=${sessionToken}`
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
