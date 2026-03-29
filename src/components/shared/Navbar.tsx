"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Menu, X, Film } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
    { href: "/", label: "Home" },
    { href: "/all-movie", label: "All Movie" },
    { href: "/watchlist", label: "Watchlist" },
];

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    // Handle scroll logic for changing background opacity
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-[100] transition-all duration-300 border-b",
                scrolled
                    ? "bg-white backdrop-blur-xl border-white/10 py-2 shadow-sm"
                    : "bg-transparent border-transparent py-4"
            )}
        >
            <div className="container mx-auto px-6">
                <div className="flex h-12 items-center justify-between">

                    {/* Logo Section */}
                    <Link href="/" className="flex items-center gap-2 group shrink-0">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#EAB308] text-[#0B0E14] shadow-[0_0_15px_rgba(234,179,8,0.2)] transition-transform group-hover:scale-105">
                            <Film size={20} />
                        </div>
                        <span className="font-playfair text-xl font-black tracking-tight text-black uppercase">
                            Cine<span className="text-[#EAB308]">Tube</span>
                        </span>
                    </Link>

                    {/* Desktop Links - Minimalist & Spaced */}
                    <div className="hidden md:flex items-center gap-8">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "relative text-[13px] font-bold uppercase tracking-[0.1em] transition-all duration-300 font-jakarta",
                                    pathname === link.href
                                        ? "text-[#EAB308]"
                                        : "text-black hover:text-[#EAB308]"
                                )}
                            >
                                {link.label}
                                {pathname === link.href && (
                                    <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-[#EAB308] rounded-full" />
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* Action Icons & CTA */}
                    <div className="flex items-center gap-3">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="text-slate-300 hover:text-[#EAB308] transition-colors"
                        >
                            <Search size={20} />
                        </Button>

                        <div className="hidden sm:block">
                            <Link href="/login">
                                <Button
                                    size="sm"
                                    className="h-12 bg-[#EAB308] px-6 text-lg font-bold text-white border-2 border-[#EAB308] hover:bg-transparent hover:border-[#EAB308] hover:border-2 hover:text-[#EAB308] cursor-pointer"
                                >
                                    Join the Cinema
                                </Button>
                            </Link>
                        </div>

                        {/* Mobile Menu Trigger */}
                        <button
                            className="md:hidden p-2 text-slate-300"
                            onClick={() => setMobileOpen(!mobileOpen)}
                        >
                            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {mobileOpen && (
                <div className="md:hidden border-t border-white/5 bg-[#0B0E14] shadow-2xl animate-in slide-in-from-top-4 duration-300">
                    <div className="px-6 py-8 space-y-6">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                className={cn(
                                    "block text-lg font-bold font-playfair tracking-wide uppercase transition-colors",
                                    pathname === link.href
                                        ? "text-[#EAB308]"
                                        : "text-slate-400"
                                )}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="pt-4">
                            <Button className="w-full bg-[#EAB308] text-[#0B0E14] font-bold py-6 font-playfair uppercase">
                                Sign In
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}