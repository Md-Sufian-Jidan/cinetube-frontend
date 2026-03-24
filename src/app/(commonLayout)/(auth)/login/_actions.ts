"use server"

import { httpClient } from "@/lib/axios/httpClient";
import { setTokenCookies } from "@/lib/tokenUtils";
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

        const { token, user } = res as any;

        if (token) {
            await setTokenCookies("cinetube.session_token", token);
        }

        return {
            success: true,
            token,
            user,
        };

    } catch (error) {
        console.log("LoginAction Error:", error);
        return {
            success: false,
            message: "Error from login action. Login failed",
        };
    }
};