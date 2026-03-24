import { cookies } from "next/headers";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL as string;

export const authService = {
    getSession: async function () {
        try {
            const cookieStore = await cookies();

            const res = await fetch(`${API_BASE_URL}/auth/get-session`, {
                headers: {
                    Cookie: cookieStore.toString(),
                },
                cache: "no-store",
            });
            console.log("res", res);
            const session = await res.json();
            console.log("session", session);
            if (session === null) {
                return { data: null, message: "No active session", status: false };
            }
            return { data: session, error: null, status: true };
        } catch (error) {
            console.log(error);
            return {
                data: null,
                message: "Failed to fetch session data",
                status: false,
            };
        }
    },

    getCurrentUser: async function () {
        try {
            const cookieStore = await cookies();
            const res = await fetch(`${API_BASE_URL}/v1/users/me`, {
                headers: {
                    Cookie: cookieStore.toString(),
                },
                cache: "no-store",
            });

            if (!res.ok) {
                throw new Error("Failed to fetch user data");
            }

            const result = await res.json();
            return { data: result.data, error: null, status: true };
        } catch (error) {
            console.log(error);
            return {
                data: null,
                message: "Failed to fetch user data",
                status: false,
            };
        }
    },
};