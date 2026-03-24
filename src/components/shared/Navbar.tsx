"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, User, Menu, X, Film } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
    { href: "/", label: "Home" },
    { href: "/browse", label: "Browse" },
    { href: "/watchlist", label: "Watchlist" },
];

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const pathname = usePathname();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
            <div className="mx-auto max-w-7xl px-5">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="p-1.5 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-200">
                            <Film size={20} className="text-primary" />
                        </div>
                        <span className="font-display text-lg font-bold tracking-tight text-foreground">
                            CineVault
                        </span>
                    </Link>

                    {/* Desktop links */}
                    <div className="hidden md:flex items-center gap-1">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-200",
                                    pathname === link.href
                                        ? "text-primary bg-primary/10"
                                        : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                                )}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Right side */}
                    <div className="flex items-center gap-2">
                        <Link href="/browse">
                            <Button variant="ghost" size="icon" className="text-muted-foreground">
                                <Search size={18} />
                            </Button>
                        </Link>
                        <Button variant="ghost" size="icon" className="text-muted-foreground">
                            <User size={18} />
                        </Button>
                        <Button variant="hero" size="sm" className="hidden sm:inline-flex">
                            Sign In
                        </Button>
                        <button
                            className="md:hidden p-2 text-muted-foreground"
                            onClick={() => setMobileOpen(!mobileOpen)}
                        >
                            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {mobileOpen && (
                <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl animate-fade-in">
                    <div className="px-4 py-3 space-y-1">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                className={cn(
                                    "block px-3 py-2 rounded-md text-sm font-medium",
                                    pathname === link.href
                                        ? "text-primary bg-primary/10"
                                        : "text-muted-foreground hover:text-foreground"
                                )}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="pt-2">
                            <Button variant="hero" className="w-full">Sign In</Button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}

