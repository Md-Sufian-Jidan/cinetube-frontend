"use server"

import { httpClient } from "@/lib/axios/httpClient";
import { ApiErrorResponse } from "@/types/api.types";
import { ILoginResponse } from "@/types/auth.types";
import { ILoginPayload, loginZodSchema } from "@/zod/auth.validation";

export const loginAction = async (payload: ILoginPayload, redirectPath?: string): Promise<ILoginResponse | ApiErrorResponse> => {
    const parsedPayload = loginZodSchema.safeParse(payload);

    if (!parsedPayload.success) {
        const firstError = parsedPayload.error.issues[0].message || "Invalid input";
        return {
            success: false,
            message: firstError,
        };
    }

    try {
        const res = await httpClient.post<ILoginResponse>(parsedPayload.data, {
            url: "/auth/sign-in/email",
        });

        const { user } = res as any;

        return {
            success: true,
            user,
        };

    } catch (error: any) {
        return {
            success: false,
            message: error.response.data.message || "Login failed",
        };
    }
};