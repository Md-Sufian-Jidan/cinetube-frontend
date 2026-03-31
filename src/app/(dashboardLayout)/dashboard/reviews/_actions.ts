import { httpClient } from "@/lib/axios/httpClient";
import { cookies } from "next/headers";

export default async function getUserReviews() {
    const cookieStore = await cookies();
    const sessionToken = cookieStore.get("cinetube.session_token")?.value;

    try {
        const res = await httpClient.get({
            url: "/v1/users/my-reviews",
            headers: {
                Cookie: `cinetube.session_token=${sessionToken}`
            }
        });
        console.log("User reviews from actions", res);
        return res;
    } catch (error) {
        console.log(error);
        return null;
    }
}