import { NextRequest, NextResponse } from "next/server";

export async function proxy(request: NextRequest) {
    const pathName = request.nextUrl.pathname;

    const token = request.cookies.get("auth_token")?.value;

    if (pathName.startsWith("/auth")) {
        if (token) {
            return NextResponse.redirect(new URL("/", request.url));
        }
    }

    if (pathName.startsWith("/dashboard")) {
        if (!token) {
            return NextResponse.redirect(new URL("/login", request.url));
        }
    }

    if (pathName.startsWith("/admin")) {
        if (!token) {
            return NextResponse.redirect(new URL("/login", request.url));
        }

        // const user = await getUser(token);
        // if (user.role !== "ADMIN") {
        //     return NextResponse.redirect(new URL("/", request.url));
        // }
    }

};

export const config = {
    matcher: [
        "/dashboard/:path*",
        "/auth/:path*",
        "/profile/:path*",
        "/settings/:path*",
        "/admin/:path*",
        "/provider/:path*",
    ]
}