"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Menu, X, Film, User as UserIcon, LogOut, Settings, LayoutDashboard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { Separator } from "../ui/separator";
import Logout from "./Logout";

const links = [
    { href: "/", label: "Home" },
    { href: "/all-movie", label: "All Movie" },
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About" },
];

export default function Navbar({ user }: { user: any }) {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    let dashboardLink;

    if (user?.user?.role === "ADMIN") {
        dashboardLink = { href: "/admin/dashboard", label: "Dashboard" };
    } else {
        dashboardLink = { href: "/dashboard", label: "Dashboard" }
    }

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isLoggedIn = !!user?.user;
    const userData = user?.user;

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-[100] transition-all duration-500",
                scrolled
                    ? "bg-white/80 backdrop-blur-xl border-b border-slate-100 py-3 shadow-[0_2px_20px_rgba(0,0,0,0.02)]"
                    : "bg-transparent border-b border-transparent py-5"
            )}
        >
            <div className="container mx-auto px-6">
                <div className="flex h-12 items-center justify-between">

                    {/* Logo Section */}
                    <Link href="/" className="flex items-center gap-3 group shrink-0">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAB308] text-white shadow-lg shadow-[#EAB308]/20 transition-transform group-hover:scale-110">
                            <Film size={22} />
                        </div>
                        <span className="font-playfair text-2xl font-black tracking-tighter text-slate-900 uppercase">
                            Cine<span className="text-[#EAB308]">Tube</span>
                        </span>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-10">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "relative text-[13px] font-black uppercase tracking-[0.2em] transition-all duration-300 font-jakarta",
                                    pathname === link.href
                                        ? "text-[#EAB308]"
                                        : "text-slate-500 hover:text-slate-900"
                                )}
                            >
                                {link.label}
                                {pathname === link.href && (
                                    <motion.span
                                        layoutId="navUnderline"
                                        className="absolute -bottom-2 left-0 h-[3px] w-full bg-[#EAB308] rounded-full"
                                    />
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* Action Icons & Auth State */}
                    <div className="flex items-center gap-4">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="text-slate-400 hover:text-[#EAB308] hover:bg-slate-50 rounded-full transition-colors"
                        >
                            <Search size={20} />
                        </Button>

                        {isLoggedIn ? (
                            <div className="hidden sm:block">
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" className="relative h-10 w-10 rounded-full p-0 border-2 border-slate-100 hover:border-[#EAB308]/30 transition-all">
                                            <Avatar className="h-9 w-9">
                                                <AvatarImage src={userData.image} alt={userData.name} />
                                                <AvatarFallback className="bg-slate-900 text-white font-bold">
                                                    {userData.name?.charAt(0)}
                                                </AvatarFallback>
                                            </Avatar>
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="w-64 mt-2 rounded-2xl p-2 border-slate-100 shadow-2xl shadow-slate-200" align="end">
                                        <DropdownMenuLabel className="font-jakarta p-3">
                                            <div className="flex flex-col space-y-1">
                                                <p className="text-sm font-black leading-none text-slate-900">{userData.name}</p>
                                                <p className="text-xs font-medium leading-none text-slate-400">{userData.email}</p>
                                            </div>
                                        </DropdownMenuLabel>
                                        <DropdownMenuSeparator className="bg-slate-50" />
                                        <Link href={dashboardLink.href}>
                                            <DropdownMenuItem className="rounded-xl font-bold text-slate-600 focus:bg-slate-50 focus:text-[#EAB308] cursor-pointer py-3">
                                                <LayoutDashboard className="mr-3 h-4 w-4" /> Dashboard
                                            </DropdownMenuItem>
                                        </Link>
                                        <DropdownMenuSeparator className="bg-slate-50" />
                                        <Link href="/my-profile">
                                            <DropdownMenuItem className="rounded-xl font-bold text-slate-600 focus:bg-slate-50 focus:text-[#EAB308] cursor-pointer py-3">
                                                <UserIcon className="mr-3 h-4 w-4" /> My Profile
                                            </DropdownMenuItem>
                                        </Link>
                                        <Link href="/change-password">
                                            <DropdownMenuItem className="rounded-xl font-bold text-slate-600 focus:bg-slate-50 focus:text-[#EAB308] cursor-pointer py-3">
                                                <Settings className="mr-3 h-4 w-4" /> Change Password
                                            </DropdownMenuItem>
                                        </Link>
                                        <DropdownMenuSeparator className="bg-slate-50" />
                                        <Logout />
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        ) : (
                            <div className="hidden sm:block">
                                <Link href="/login">
                                    <Button
                                        size="sm"
                                        className="h-14 bg-[#EAB308] px-8 text-lg font-bold text-white border-2 border-[#EAB308] hover:bg-transparent hover:border-[#EAB308] hover:border-2 hover:text-[#EAB308] cursor-pointer"
                                    >
                                        Sign In
                                    </Button>
                                </Link>
                            </div>
                        )}

                        <button
                            className="md:hidden p-2 text-slate-900"
                            onClick={() => setMobileOpen(!mobileOpen)}
                        >
                            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {mobileOpen && (
                <div className="md:hidden fixed inset-x-0 top-[72px] bg-white border-b border-slate-100 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
                    <div className="px-6 py-10 space-y-8">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                className={cn(
                                    "block text-2xl font-black font-playfair tracking-tight transition-colors",
                                    pathname === link.href ? "text-[#EAB308]" : "text-slate-900"
                                )}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Separator className="bg-slate-50" />
                        {isLoggedIn ? (
                            <div className="flex items-center gap-4">
                                <Avatar className="h-12 w-12 border-2 border-slate-100">
                                    <AvatarFallback className="bg-slate-900 text-white">{userData.name?.[0]}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="font-black text-slate-900">{userData.name}</p>
                                    <p className="text-sm font-bold text-slate-400">Manage Account</p>
                                </div>
                            </div>
                        ) : (
                            <Button className="w-full bg-[#EAB308] text-white font-black py-7 rounded-2xl text-lg shadow-lg shadow-[#EAB308]/20">
                                GET STARTED
                            </Button>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
}