"use client";

import * as React from "react";
import Link from "next/link";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarRail,
} from "@/components/ui/sidebar";

import { Separator } from "../ui/separator";
import { Clapperboard, LayoutDashboardIcon } from "lucide-react";
import ActiveNavItem from "./ActiveNavItem";

export function AppSidebar({
    user,
    ...props
}: { user: string } & React.ComponentProps<typeof Sidebar>) {
    // Simplified role mapping for CineTube
    // let routes: Route[] = [];
    // switch (user) {
    //     case ROLES.ADMIN:
    //         routes = AdminRoutes;
    //         break;
    //     case ROLES.CUSTOMER:
    //         routes = CustomerRoutes;
    //         break;
    //     default:
    //         routes = CustomerRoutes; // Default to user view for safety
    //         break;
    // }
    const routes = [{
        title: "Dashboard",
        items: [
            {
                href: "/dashboard",
                label: "Dashboard",
                icon: LayoutDashboardIcon,
            },
        ],
    }]

    return (
        <Sidebar
            {...props}
            className="border-r border-white/5 bg-[#0B0E14]"
        >
            <SidebarHeader className="h-16 flex items-center justify-center px-4">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#EAB308] text-[#0B0E14] shadow-lg shadow-[#EAB308]/20 transition-transform group-hover:scale-110">
                        <Clapperboard size={18} />
                    </div>
                    <span className="font-playfair text-xl font-black tracking-tight text-white">
                        CINE<span className="text-[#EAB308]">TUBE</span>
                    </span>
                </Link>
            </SidebarHeader>

            <Separator className="bg-white/5 mx-auto w-[90%]" />

            <SidebarContent className="px-2 pt-4 scrollbar-none">
                {routes.map((item) => (
                    <SidebarGroup key={item.title} className="py-2">
                        <SidebarGroupLabel className="font-jakarta text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-2 px-4">
                            {item.title}
                        </SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {/* ActiveNavItem handles the mapping of individual links */}
                                <ActiveNavItem items={item.items} />
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                ))}
            </SidebarContent>

            <SidebarRail className="hover:after:bg-[#EAB308]/20" />
        </Sidebar>
    );
}