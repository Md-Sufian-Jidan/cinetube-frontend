import { httpClient } from "@/lib/axios/httpClient";
import { ILoginPayload } from "@/zod/auth.validation";
import { toast } from "sonner";

export const loginAction = async (payload: ILoginPayload) => {
    try {
        console.log(payload);
        const res = await httpClient.post(payload, {
            url: "/sign-in/email",
        });
        return res;
    } catch (error) {
        toast.error("Login failed");
    }
};