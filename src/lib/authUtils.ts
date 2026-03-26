import { Roles, ROLES } from "@/constant/role";
export type UserRole = "ADMIN" | "USER";
export type RouteConfig = {
    exact: string[];
    pattern: RegExp[];
};

export const ROUTES = {
    PUBLIC: [
        "/",
        "/movies",
        "/movie/:id",
        "/about",
    ],

    AUTH: [
        "/login",
        "/register",
    ],

    USER: {
        exact: [
            "/dashboard",
            "/dashboard/media",
            "/dashboard/my-profile",
            "/dashboard/reviews",
        ],
        pattern: [/^\/dashboard(\/.*)?$/],
    },

    ADMIN: {
        exact: [
            "/admin/dashboard",
            "/admin/media-analytics",
            "/admin/reviews",
            "/admin/user-activity",
            "/admin/profile",
        ],
        pattern: [/^\/admin(\/.*)?$/],
    },
};

export const matchRoute = (pathname: string, config: RouteConfig) => {
    return (
        config.exact.includes(pathname) ||
        config.pattern.some((r) => r.test(pathname))
    );
};

export const getDefaultDashboardRoute = (role: UserRole) => {
    if (role === "ADMIN") {
        return "/admin/dashboard";
    }
    if (role === "USER") {
        return "/dashboard";
    }

    return "/";
}

export const getRouteRole = (pathname: string): Roles | null => {
    if (matchRoute(pathname, ROUTES.USER)) return ROLES.USER;
    if (matchRoute(pathname, ROUTES.ADMIN)) return ROLES.ADMIN;
    return null;
};