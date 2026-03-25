"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function ActiveItemNav({ items }: { items: any[] }) {
    const pathname = usePathname();

    // Simplified base URLs for CineTube
    const baseUrls = ["/dashboard", "/admin-dashboard"];

    return (
        <>
            {items.map((item: any) => {
                const Icon = item.icon;
                const isActive =
                    pathname === item.href ||
                    (pathname.startsWith(item.href + "/") &&
                        !baseUrls.includes(item.href));

                return (
                    <SidebarMenuItem key={item.href} className="px-2">
                        <SidebarMenuButton
                            asChild
                            isActive={isActive}
                            className={cn(
                                "relative group flex items-center gap-3 px-3 py-5 transition-all duration-300 rounded-lg font-jakarta text-sm font-medium",
                                isActive
                                    ? "bg-[#EAB308]/10 text-[#EAB308] hover:bg-[#EAB308]/15 hover:text-[#EAB308]"
                                    : "text-slate-400 hover:bg-white/5 hover:text-white"
                            )}
                        >
                            <Link href={item.href}>
                                {/* Icon Rendering with Active State */}
                                {Icon && (
                                    <Icon
                                        className={cn(
                                            "h-4 w-4 transition-colors duration-300",
                                            isActive ? "text-[#EAB308]" : "text-slate-500 group-hover:text-white"
                                        )}
                                    />
                                )}

                                <span className="flex-1">{item.label}</span>

                                {/* Subtle active indicator dot */}
                                {isActive && (
                                    <motion.div
                                        layoutId="active-indicator"
                                        className="absolute left-0 w-1 h-5 bg-[#EAB308] rounded-r-full shadow-[0_0_10px_rgba(234,179,8,0.5)]"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                );
            })}
        </>
    );
}