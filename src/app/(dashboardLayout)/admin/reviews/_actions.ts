"use server";

import { httpClient } from "@/lib/axios/httpClient";
import { ApiResponse } from "@/types/api.types";
import { IReview, ReviewStatus } from "@/types/review.types";
import { cookies } from "next/headers";

export const getPendingReviews = async (): Promise<ApiResponse<IReview[]>> => {
    const cookieStore = await cookies();
    const sessionToken = cookieStore.get("cinetube.session_token")?.value;

    try {
        const res = await httpClient.get<IReview[]>({
            url: `/v1/admin/pending-reviews`,
            headers: {
                Cookie: `cinetube.session_token=${sessionToken}`
            }
        });
        return res;
    } catch (error) {
        return { success: false, message: "Failed to fetch pending reviews", data: [] };
    }
};

export const updateReviewStatus = async (reviewId: string, status: ReviewStatus) => {
    const cookieStore = await cookies();
    const sessionToken = cookieStore.get("cinetube.session_token")?.value;

    try {
        const res = await httpClient.patch({ status }, {
            url: `/v1/reviews/${reviewId}`,
            headers: {
                Cookie: `cinetube.session_token=${sessionToken}`
            }
        });
        console.log("updateReviewStatus", res);
        if (res?.success) {
            await getPendingReviews();
            return { success: true, message: res.message };
        }
        return { success: false, message: "Update failed" };
    } catch (error) {
        console.error("Error updating review status:", error);
        return { success: false, message: "Something went wrong" };
    }
};