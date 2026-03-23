export type UserRole = "ADMIN" | "USER";

export const authRoutes = ["/login", "/register", "/forgot-password", "/reset-password"];
export const publicRoutes = ["/", "/movies", "/movie/:id", "/about", "/contact", "/privacy-policy", "/terms-of-service"];

export const adminRoutes = ["/admin/dashboard", "/admin/media-analytics", "/admin/reviews", "/admin/user-activity", "/admin/profile"];

export const userRoutes = ["/dashboard", "/dashboard/media", "/dashboar/my-profile", "/dashboard/reviews"];

export type RouteConfig = {
    exact: string[];
    pattern: RegExp[];
}

export const userProtectedRoutes: RouteConfig = {
    exact: ["/dashboard", "/dashboard/media", "/dashboard/my-profile", "/dashboard/reviews"],
    pattern: [
        /\/dashboard\/.*/,
        /\/dashboard\/media\/.*/,
        /\/dashboard\/my-profile\/.*/,
        /\/dashboard\/reviews\/.*/,
    ]
};

export const adminProtectedRoutes: RouteConfig = {
    exact: ["/admin/dashboard", "/admin/media-analytics", "/admin/reviews", "/admin/user-activity", "/admin/profile"],
    pattern: [
        /\/admin\/dashboard\/.*/,
        /\/admin\/media-analytics\/.*/,
        /\/admin\/reviews\/.*/,
        /\/admin\/user-activity\/.*/,
        /\/admin\/profile\/.*/,
    ]
};

export const isRouteProtected = (pathname: string, role: UserRole): boolean => {
    if (role === "USER") {
        return userProtectedRoutes.exact.includes(pathname) || userProtectedRoutes.pattern.some((pattern) => pattern.test(pathname));
    }
    if (role === "ADMIN") {
        return adminProtectedRoutes.exact.includes(pathname) || adminProtectedRoutes.pattern.some((pattern) => pattern.test(pathname));
    }
    return false;
};

export const isRoutePublic = (pathname: string): boolean => {
    return publicRoutes.includes(pathname) || publicRoutes.some((route) => pathname.startsWith(route));
};

export const isRouteAuth = (pathname: string): boolean => {
    return authRoutes.includes(pathname) || authRoutes.some((route) => pathname.startsWith(route));
};

export const isRouteAdmin = (pathname: string): boolean => {
    return adminRoutes.includes(pathname) || adminRoutes.some((route) => pathname.startsWith(route));
};

export const isRouteUser = (pathname: string): boolean => {
    return userRoutes.includes(pathname) || userRoutes.some((route) => pathname.startsWith(route));
};
