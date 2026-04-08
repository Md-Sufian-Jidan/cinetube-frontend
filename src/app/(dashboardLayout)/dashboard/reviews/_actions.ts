import { httpClient } from "@/lib/axios/httpClient";
import { cookies } from "next/headers";

export default async function getUserReviews() {
    const cookieStore = await cookies();
    const sessionToken = cookieStore.get("session_token")?.value;

    try {
        const res = await httpClient.get({
            url: "/v1/users/my-reviews",
            headers: {
                Cookie: `session_token=${sessionToken}`
            }
        });
        return res;
    } catch (error) {
        // console.log(error);
        return null;
    }
}