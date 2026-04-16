"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Search,
    Menu,
    X,
    Film,
    ChevronDown,
    User as UserIcon,
    Settings,
    LayoutDashboard,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { cn } from "@/lib/utils";
import Logout from "./Logout";

const mainLinks = [
    { href: "/", label: "Home" },
    { href: "/all-movie", label: "Movies" },
    { href: "/pricing", label: "Pricing" },
    { href: "/blog", label: "Blog" },
];

const moreLinks = [
    { href: "/about", label: "About" },
    { href: "/support", label: "Support" },
    { href: "/contact", label: "Contact" },
];

export default function Navbar({ user }: { user: any }) {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isLoggedIn = !!user?.user;
    const userData = user?.user;

    const dashboardLink =
        user?.user?.role === "ADMIN"
            ? "/admin/dashboard"
            : "/dashboard";

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-[100] transition-all duration-500",
                scrolled
                    ? "bg-white/60 dark:bg-black/40 backdrop-blur-xl border-b border-white/10 shadow-lg"
                    : "bg-transparent"
            )}
        >
            <div className="container mx-auto px-6">
                <div className="flex h-16 items-center justify-between">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group shrink-0">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAB308] text-white shadow-lg shadow-[#EAB308]/20 transition-transform group-hover:scale-110">
                            <Film size={22} />
                        </div>
                        <span className="font-playfair text-2xl font-black tracking-tighter text-slate-900 uppercase">
                            Cine<span className="text-[#EAB308]">Tube</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">

                        {mainLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "text-sm font-semibold transition",
                                    pathname === link.href
                                        ? "text-[#EAB308]"
                                        : "text-slate-700 dark:text-slate-300 hover:text-[#EAB308]"
                                )}
                            >
                                {link.label}
                            </Link>
                        ))}

                        {/* 🔥 ADVANCED DROPDOWN */}
                        <div className="relative group">
                            <button className="flex items-center gap-1 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-[#EAB308]">
                                More <ChevronDown size={16} />
                            </button>

                            <div className="absolute top-8 left-0 w-44 bg-white/70 dark:bg-black/80 backdrop-blur-xl border border-white/10 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                                {moreLinks.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className="block px-4 py-2 text-sm hover:bg-[#EAB308]/10 rounded-lg"
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="flex items-center gap-3">

                        {/* Search */}
                        <Button
                            size="icon"
                            variant="ghost"
                            className="rounded-full hover:text-[#EAB308]"
                        >
                            <Search size={18} />
                        </Button>

                        {/* Auth */}
                        {isLoggedIn ? (
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Avatar className="cursor-pointer border-2 border-white/20">
                                        <AvatarImage src={userData.image} />
                                        <AvatarFallback>
                                            {userData.name?.[0]}
                                        </AvatarFallback>
                                    </Avatar>
                                </DropdownMenuTrigger>

                                <DropdownMenuContent className="w-56">
                                    <Link href={dashboardLink}>
                                        <DropdownMenuItem>
                                            <LayoutDashboard className="mr-2 h-4 w-4" />
                                            Dashboard
                                        </DropdownMenuItem>
                                    </Link>

                                    <Link href="/my-profile">
                                        <DropdownMenuItem>
                                            <UserIcon className="mr-2 h-4 w-4" />
                                            Profile
                                        </DropdownMenuItem>
                                    </Link>

                                    <Link href="/change-password">
                                        <DropdownMenuItem>
                                            <Settings className="mr-2 h-4 w-4" />
                                            Settings
                                        </DropdownMenuItem>
                                    </Link>

                                    <Logout />
                                </DropdownMenuContent>
                            </DropdownMenu>
                        ) : (
                            <Link href="/login">
                                <Button
                                    className="h-12 rounded-xl bg-[#EAB308] px-8 text-lg font-bold text-white border-2 border-[#EAB308] hover:bg-transparent hover:border-[#EAB308] hover:border-2 hover:text-[#EAB308] cursor-pointer">
                                    Sign In
                                </Button>
                            </Link>
                        )}

                        {/* Mobile */}
                        <button
                            className="md:hidden"
                            onClick={() => setMobileOpen(!mobileOpen)}
                        >
                            {mobileOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}