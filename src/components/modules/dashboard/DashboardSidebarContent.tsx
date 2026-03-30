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
        <div className="hidden md:flex h-full w-64 flex-col border-r border-slate-200 bg-white overflow-y-auto">
            {/* Logo / Brand */}
            <div className="flex h-16 items-center border-b border-slate-100 px-6">
                <Link href={"/"} className="flex items-center gap-2 group">
                    <div className="p-1.5 rounded-lg bg-[#EAB308]/10 group-hover:bg-[#EAB308]/20 transition-colors duration-200">
                        <Film size={20} className="text-[#EAB308]" />
                    </div>
                    <span className="font-playfair text-lg font-bold tracking-tight text-slate-900">
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
                                <h4 className="mb-2 px-3 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
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
                                                    : "text-slate-600 hover:bg-slate-50 hover:text-[#EAB308]",
                                            )}
                                        >
                                            <Icon className={cn("w-4 h-4 transition-colors", isActive ? "text-[#EAB308]" : "text-slate-400")} />
                                            <span>{item.title}</span>
                                        </Link>
                                    );
                                })}

                                {sectionId === navItems.length - 1 && (
                                    <div className="pt-1">
                                        <Logout />
                                    </div>
                                )}
                            </div>

                            {sectionId < navItems.length - 1 && (
                                <Separator className="my-4 bg-slate-100" />
                            )}
                        </div>
                    ))}
                </nav>
            </ScrollArea>

            {/* User Info At Bottom */}
            <div className="border-t border-slate-100 bg-slate-50/50 px-3 py-4">
                <div className="flex items-center gap-3 p-2 rounded-xl bg-white border border-slate-100 shadow-sm">
                    <div className="h-8 w-8 rounded-full bg-[#EAB308] flex items-center justify-center shadow-md shadow-[#EAB308]/20">
                        <span className="text-sm font-bold text-white">
                            {userInfo.name.charAt(0).toUpperCase()}
                        </span>
                    </div>

                    <div className="flex-1 overflow-hidden">
                        <p className="text-sm font-bold truncate text-slate-900 font-jakarta">{userInfo.name}</p>
                        <p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
                            {userInfo.role.toLowerCase().replace("_", " ")}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardSidebarContent;