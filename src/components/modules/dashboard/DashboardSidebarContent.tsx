"use client"

import Logout from "@/components/shared/Logout"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { getIconComponent } from "@/lib/iconMapper"
import { cn } from "@/lib/utils"
import { NavSection } from "@/types/dashboard.types"
import { UserInfo } from "@/types/userInfo.types"
import { Film } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface DashboardSidebarContentProps {
    userInfo: UserInfo,
    navItems: NavSection[],
    dashboardHome: string,
}

const DashboardSidebarContent = ({ dashboardHome, navItems, userInfo }: DashboardSidebarContentProps) => {
    const pathname = usePathname()

    return (
        <div className="hidden md:flex h-full w-64 flex-col border-r border-white/5 bg-[#0B0E14] overflow-y-auto">
            {/* Logo / Brand */}
            <div className="flex h-16 items-center border-b border-white/5 px-6">
                <Link href={dashboardHome} className="flex items-center gap-2 group">
                    <div className="p-1.5 rounded-lg bg-[#EAB308]/10 group-hover:bg-[#EAB308]/20 transition-colors duration-200">
                        <Film size={20} className="text-[#EAB308]" />
                    </div>
                    <span className="font-playfair text-lg font-bold tracking-tight text-white">
                        Cine<span className="text-[#EAB308]">Tube</span>
                    </span>
                </Link>
            </div>

            {/* Navigation Area */}
            <ScrollArea className="flex-1 px-3 py-4">
                <nav className="space-y-6">
                    {navItems.map((section, sectionId) => (
                        <div key={sectionId}>
                            {section.title && (
                                <h4 className="mb-2 px-3 text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">
                                    {section.title}
                                </h4>
                            )}

                            <div className="space-y-1">
                                {section.items.map((item, id) => {
                                    const isActive = pathname === item.href;
                                    const Icon = getIconComponent(item.icon);
                                    return (
                                        <Link
                                            href={item.href}
                                            key={id}
                                            className={cn(
                                                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all font-jakarta",
                                                isActive
                                                    ? "bg-[#EAB308]/10 text-[#EAB308]"
                                                    : "text-slate-400 hover:bg-white/5 hover:text-white",
                                            )}
                                        >
                                            <Icon className={cn("w-4 h-4", isActive ? "text-[#EAB308]" : "text-slate-500")} />
                                            <span>{item.title}</span>
                                        </Link>
                                    );
                                })}

                                {/* If it's the last section, append Logout without a separate header */}
                                {sectionId === navItems.length - 1 && (
                                    <div className="pt-1">
                                        <Logout />
                                    </div>
                                )}
                            </div>

                            {sectionId < navItems.length - 1 && (
                                <Separator className="my-4 bg-white/5" />
                            )}
                        </div>
                    ))}
                </nav>
            </ScrollArea>

            {/* User Info At Bottom */}
            <div className="border-t border-white/5 bg-[#161B22]/30 px-3 py-4">
                <div className="flex items-center gap-3 p-2 rounded-xl bg-white/5">
                    <div className="h-8 w-8 rounded-full bg-[#EAB308] flex items-center justify-center shadow-lg shadow-[#EAB308]/10">
                        <span className="text-sm font-bold text-[#0B0E14]">
                            {userInfo.name.charAt(0).toUpperCase()}
                        </span>
                    </div>

                    <div className="flex-1 overflow-hidden">
                        <p className="text-sm font-bold truncate text-white font-jakarta">{userInfo.name}</p>
                        <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">
                            {userInfo.role.toLowerCase().replace("_", " ")}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardSidebarContent