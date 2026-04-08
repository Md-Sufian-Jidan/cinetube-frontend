import { httpClient } from "@/lib/axios/httpClient";
import { cookies } from "next/headers";

export default async function getUserDashboardData() {
    const cookieStore = await cookies();
    const sessionToken = cookieStore.get("session_token")?.value;

    try {
        const res = await httpClient.get({
            url: "/v1/users/dashboard-stats",
            headers: {
                Cookie: `session_token=${sessionToken}`
            }
        });
        return res;
    } catch (error) {
        return null;
    }
}