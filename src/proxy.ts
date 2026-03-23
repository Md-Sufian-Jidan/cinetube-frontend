import { getRouteRole } from "@/lib/authUtils";
import { NextRequest, NextResponse } from "next/server";

export default function proxy(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    const token = request.cookies.get("auth_token")?.value;

    if (!getRouteRole(pathname)) {
        return NextResponse.next();
    }

    if (!token) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    let userRole: "USER" | "ADMIN" = "USER";

    try {
        // .split(".")[1]
        const payload = JSON.parse(atob(token));
        console.log(payload);
        userRole = payload.role;
    } catch {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    const routeRole = getRouteRole(pathname);

    if (routeRole && routeRole !== userRole) {
        return NextResponse.redirect(new URL("/", request.url));
    }

    return NextResponse.next();
};

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.well-known).*)',
    ],
};