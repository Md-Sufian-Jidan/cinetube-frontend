import { getRouteRole } from "@/lib/authUtils";
import { NextRequest, NextResponse } from "next/server";

export default async function proxy(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    const token = request.cookies.get("cinetube.session_token")?.value;

    // // Public route
    if (!getRouteRole(pathname)) {
        return NextResponse.next();
    }

    // // Not logged in
    if (!token) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    let userRole: "USER" | "ADMIN" = "USER";

    try {
        // 🔥 MOST IMPORTANT LINE
        const cookieHeader = request.headers.get("cookie");
        console.log("cookieHeader", cookieHeader);

        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/get-session`,
            {
                headers: {
                    Cookie: cookieHeader || "", // ✅ CORRECT WAY
                },
                cache: "no-store",
            }
        );

        console.log("res", res);

        const session = await res.json();

        console.log("Session from proxy:", session);

        // ❌ session null check
        if (!session || !session.user) {
            return NextResponse.redirect(new URL("/login", request.url));
        }

        // ✅ FIX: role nested inside user
        userRole = session.user.role;

    } catch (error) {
        console.log("Middleware error:", error);
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