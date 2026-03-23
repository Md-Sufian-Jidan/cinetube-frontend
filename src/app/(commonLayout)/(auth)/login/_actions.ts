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
        console.log("Login payload from login action: ", parsedPayload.data);
        const res = await httpClient.post<ILoginResponse>(parsedPayload.data, {
            url: "/auth/sign-in/email",
        });
        return res.data;
    } catch (error) {
        console.error("Login action error: ", error);
        return {
            success: false,
            message: "Error from login action. Login failed",
        };
    }
};