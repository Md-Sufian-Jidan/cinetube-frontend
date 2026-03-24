"use server"

import { httpClient } from "@/lib/axios/httpClient";
import { ApiErrorResponse } from "@/types/api.types";
import { IRegisterResponse } from "@/types/auth.types";
import { IRegisterPayload, registerZodSchema } from "@/zod/auth.validation";

export const registerAction = async (payload: IRegisterPayload, redirectPath?: string): Promise<IRegisterResponse | ApiErrorResponse> => {
    const parsedPayload = registerZodSchema.safeParse(payload);

    if (!parsedPayload.success) {
        const firstError = parsedPayload.error.issues[0].message || "Invalid input";
        return {
            success: false,
            message: firstError,
        };
    }

    try {
        const res = await httpClient.post<IRegisterResponse>(parsedPayload.data, {
            url: "/auth/sign-up/email",
        });

        const { user } = res as any;

        return {
            success: true,
            user,
        };

    } catch (error) {
        console.log("RegisterAction Error:", error);
        return {
            success: false,
            message: "Error from register action. Registration failed",
        };
    }
};