import { getDefaultDashboardRoute, UserRole } from "./authUtils";
import { NavSection } from "@/types/dashboard.types";
import { ROLES } from "@/constant/role";

export const getCommonNavItems = (role: UserRole): NavSection[] => {
    const defaultDashboard = getDefaultDashboardRoute(role);
    return [
        {
            items: [
                {
                    title: "Home",
                    href: "/",
                    icon: "Home",
                },
                {
                    title: "Browse Movies",
                    href: "/movies",
                    icon: "HardDrive",
                }
            ]
        }
    ]

};

export const adminNavItems = (): NavSection[] => {
    return [
        {
            title: "Admin Dashboard",
            items: [
                {
                    title: "Dashboard",
                    href: "/admin/dashboard",
                    icon: "LayoutDashboard",
                },
                {
                    title: "Media Analytics",
                    href: "/admin/media-analytics",
                    icon: "HardDrive",
                },
                {
                    title: "Reviews",
                    href: "/admin/reviews",
                    icon: "User",
                },
                {
                    title: "User Activity",
                    href: "/admin/user-activity",
                    icon: "Settings",
                },
            ]
        }
    ]
};

export const userNavItems = (): NavSection[] => {
    return [
        {
            title: "User Dashboard",
            items: [
                {
                    title: "Dashboard",
                    href: "/dashboard",
                    icon: "LayoutDashboard",
                },
                {
                    title: "Media",
                    href: "/dashboard/media",
                    icon: "HardDrive",
                },
                {
                    title: "Reviews",
                    href: "/dashboard/reviews",
                    icon: "User",
                },
                {
                    title: "Profile",
                    href: "/dashboard/my-profile",
                    icon: "Settings",
                },
            ]
        }
    ]
};

export const getNavItemsByRole = (role: UserRole): NavSection[] => {
    const commonNavItems = getCommonNavItems(role);
    switch (role) {
        case ROLES.ADMIN:
            return [...commonNavItems, ...adminNavItems()];
        case ROLES.USER:
            return [...commonNavItems, ...userNavItems()];
        default:
            return commonNavItems;
    };
};
