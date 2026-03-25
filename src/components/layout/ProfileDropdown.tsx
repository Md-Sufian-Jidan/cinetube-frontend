"use client";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    LayoutDashboardIcon,
    UserCircle,
    Settings,
    Heart,
    ShieldCheck
} from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Logout from "./Logout";
import { ROLES } from "@/constant/role";

interface User {
    role: string;
    name: string;
    email: string;
    image: string;
}

export function ProfileDropdown({ user }: { user: User }) {
    const isAdmin = user?.role === ROLES.ADMIN;

    // Simplified roles: ADMIN or USER
    const links = isAdmin
        ? [
            { href: "/admin/dashboard", label: "Admin Portal", icon: ShieldCheck },
            { href: "/admin/dashboard/media", label: "Manage Media", icon: LayoutDashboardIcon },
        ]
        : [
            { href: "/dashboard", label: "My Library", icon: LayoutDashboardIcon },
            { href: "/dashboard/watchlist", label: "Watchlist", icon: Heart },
            { href: "/dashboard/settings", label: "Account Settings", icon: Settings },
        ];

    return (
        <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
                <Avatar className="h-10 w-10 cursor-pointer border-2 border-transparent transition-all duration-300 hover:border-[#EAB308] shadow-lg">
                    <AvatarImage
                        src={user?.image || "https://github.com/shadcn.png"}
                        alt={user?.name || "User"}
                        className="object-cover"
                    />
                    <AvatarFallback className="bg-[#161B22] text-[#EAB308] font-bold">
                        {user?.name?.charAt(0).toUpperCase() || "U"}
                    </AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>

            <DropdownMenuContent
                align="end"
                className="w-56 border-white/10 bg-[#161B22]/95 text-slate-200 backdrop-blur-xl shadow-2xl"
            >
                <DropdownMenuLabel className="font-jakarta p-4">
                    <div className="flex flex-col space-y-1">
                        <p className="text-sm font-bold leading-none text-white">{user?.name}</p>
                        <p className="text-xs leading-none text-slate-500">{user?.email}</p>
                    </div>
                </DropdownMenuLabel>

                <DropdownMenuSeparator className="bg-white/5" />

                <div className="p-1">
                    {links.map((link) => {
                        const Icon = link.icon;
                        return (
                            <DropdownMenuItem
                                key={link.href}
                                asChild
                                className="group cursor-pointer rounded-md px-3 py-2.5 transition-colors focus:bg-[#EAB308]/10 focus:text-[#EAB308]"
                            >
                                <Link href={link.href} className="flex w-full items-center font-jakarta text-sm font-medium">
                                    <Icon className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                                    {link.label}
                                </Link>
                            </DropdownMenuItem>
                        );
                    })}
                </div>

                <DropdownMenuSeparator className="bg-white/5" />

                <div className="p-1">
                    <Logout />
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}