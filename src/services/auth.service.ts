"use server";

import { cookies } from "next/headers";

const getApiBaseUrl = () => {
    const url = process.env.NEXT_PUBLIC_API_BASE_URL;
    if (!url) {
        throw new Error("NEXT_PUBLIC_API_BASE_URL is not defined in environment variables");
    }
    return url;
};

export async function logoutAction() {
    const cookieStore = await cookies();
    try {
        const API_BASE_URL = getApiBaseUrl();
        // Optional: Notify backend about sign-out
        await fetch(`${API_BASE_URL}/auth/sign-out`, {
            method: "POST",
            headers: {
                Cookie: cookieStore.toString(),
            },
        });
    } catch (error) {
        console.error("Logout backend call failed:", error);
    } finally {
        // Always clear the session token on the server
        cookieStore.delete("session_token");
    }
}

export async function getSession() {
    try {
        const cookieStore = await cookies();
        const API_BASE_URL = getApiBaseUrl();

        const res = await fetch(`${API_BASE_URL}/auth/get-session`, {
            headers: {
                Cookie: cookieStore.toString(),
            },
            cache: "no-store",
        });
        const session = await res.json();
        if (session === null) {
            return { data: null, message: "No active session", status: false };
        }
        return { data: session, error: null, status: true };
    } catch (error) {
        return {
            data: null,
            message: "Failed to fetch session data",
            status: false,
        };
    }
}

export async function getUserInfo() {
    try {
        const cookieStore = await cookies();
        const API_BASE_URL = getApiBaseUrl();
        const token = cookieStore.get("auth_token")?.value;
        const sessionToken = cookieStore.get("better-auth.session_token")?.value

        if (!token) {
            return null;
        }

        const res = await fetch(`${API_BASE_URL}/auth/me`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Cookie: `auth_token=${token}; better-auth.session_token=${sessionToken}`
            }
        });

        if (!res.ok) {
            console.error("Failed to fetch user info:", res.status, res.statusText);
            return null;
        }

        const { data } = await res.json();

        return data;
    } catch (error) {
        console.error("Error fetching user info:", error);
        return null;
    }
};