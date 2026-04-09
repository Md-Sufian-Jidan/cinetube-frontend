"use server";

import { httpClient } from "@/lib/axios/httpClient";
import { IMediaPayload } from "@/zod/media.validation";
import { IMedia } from "@/types/media.types";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

export const createMediaAction = async (data: IMediaPayload) => {
    console.log("Creating Media with payload:", JSON.stringify(data, null, 2));

    const cookieStore = await cookies();
    const sessionToken = cookieStore.get("session_token")?.value;

    console.log("Session token:", sessionToken);

    const payload = {
        ...data,
        status: "PENDING",
    };

    try {
        const res = await httpClient.post<IMedia>(payload, {
            url: "/v1/media",
            headers: {
                Cookie: `session_token=${sessionToken}`,
            },
        });

        console.log("Response:", JSON.stringify(res, null, 2));

        if (res.success) {
            revalidatePath("/");
            revalidatePath("/admin/media-analytics");
        }

        return res;
    } catch (error: any) {
        // Log the FULL error so we can see exactly what's failing
        console.error("Full error object:", JSON.stringify(error, null, 2));
        console.error("Error response data:", error?.response?.data);
        console.error("Error status:", error?.response?.status);
        console.error("Error message:", error?.message);

        return {
            success: false,
            message:
                error?.response?.data?.message ||
                error?.message ||
                "Something went wrong while creating media",
        };
    }
};