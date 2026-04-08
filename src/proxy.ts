import { getRouteRole } from "@/lib/authUtils";
import { NextRequest, NextResponse } from "next/server";
import { httpClient } from "./lib/axios/httpClient";
import { cookies } from "next/headers";

export default async function proxy(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    const token = request.cookies.get("session_token")?.value;

    if (!getRouteRole(pathname)) {
        return NextResponse.next();
    }

    console.log("Proxy hit");

    if (!token) {
        console.log("Token nai. mane user nai");
        return NextResponse.redirect(new URL("/login", request.url));
    }

    let userRole: "USER" | "ADMIN" = "USER";

    try {
        // const cookieHeader = request.headers.get("cookie");
        const cookieStore = await cookies();

        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/get-session`,
            {
                cache: "no-store",
                headers: {
                    Cookie: cookieStore.toString(),
                },
            },
        );

        // const res = await httpClient.get({
        //     url: "/auth/get-session",
        //     headers: { Cookie: cookieHeader || "" },
        //     timeout: 20000
        // });

        // const session = await res.data;
        const session = await res.json();

        if (!session || !session.user) {
            return NextResponse.redirect(new URL("/login", request.url));
        }

        userRole = session.user.role;

    } catch (error) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    const routeRole = getRouteRole(pathname);

    if (routeRole && routeRole !== userRole) {
        return NextResponse.redirect(new URL("/", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.well-known).*)',
    ],
};