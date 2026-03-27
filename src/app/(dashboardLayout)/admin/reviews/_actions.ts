"use server";

import { httpClient } from "@/lib/axios/httpClient";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export const updateReviewStatus = async (reviewId: string, status: "PUBLISHED" | "PENDING") => {
    const cookieStore = await cookies();
    const sessionToken = cookieStore.get("better-auth.session_token")?.value;

    try {
        const res = await httpClient.patch({ status }, { 
            url: `/v1/admin/reviews/${reviewId}`,
            headers: {
                Cookie: `better-auth.session_token=${sessionToken}`
            }
        });
        if (res?.success) {
            revalidatePath("/dashboard/reviews");
            return { success: true, message: res.message };
        }
        return { success: false, message: "Update failed" };
    } catch (error) {
        console.error("Error updating review status:", error);
        return { success: false, message: "Server error" };
    }
};