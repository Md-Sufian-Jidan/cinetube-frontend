"use client";

import * as React from "react";
import Link from "next/link";
import {
    motion,
    AnimatePresence,
    useScroll,
    useMotionValueEvent,
} from "framer-motion";
import {
    Search,
    Menu,
    X,
    User,
    Bookmark,
    LogOut,
    ChevronDown,
    Film,
} from "lucide-react";

// ── Types ──────────────────────────────────────────────────────────────────
interface NavLink {
    name: string;
    href: string;
}

// ── Constants ──────────────────────────────────────────────────────────────
const NAV_LINKS: NavLink[] = [
    { name: "Home", href: "/" },
    { name: "Movies", href: "/all-movie" },
    { name: "Series", href: "/all-series" },
    { name: "Pricing", href: "/pricing" },
];

// ── Animation variants ─────────────────────────────────────────────────────
const dropdownVariants = {
    hidden: { opacity: 0, y: -8, scale: 0.96 },
    visible: {
        opacity: 1, y: 0, scale: 1,
        transition: { type: "spring", stiffness: 380, damping: 28 },
    },
    exit: {
        opacity: 0, y: -6, scale: 0.97,
        transition: { duration: 0.15 },
    },
};

const drawerVariants = {
    hidden: { x: "100%" },
    visible: {
        x: 0,
        transition: { type: "spring", stiffness: 320, damping: 32 },
    },
    exit: {
        x: "100%",
        transition: { type: "tween", ease: "easeInOut", duration: 0.28 },
    },
};

const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.25 } },
    exit: { opacity: 0, transition: { duration: 0.22 } },
};

const drawerLinkVariants = {
    hidden: { opacity: 0, x: 24 },
    visible: (i: number) => ({
        opacity: 1, x: 0,
        transition: { delay: i * 0.07 + 0.1, type: "spring", stiffness: 340, damping: 30 },
    }),
};

const searchVariants = {
    collapsed: { width: 0, opacity: 0 },
    expanded: { width: 200, opacity: 1, transition: { type: "spring", stiffness: 320, damping: 28 } },
};

// ── Sub-components ─────────────────────────────────────────────────────────

/** Animated ruby pulse dot beside the logo */
function PulseDot() {
    return (
        <motion.span
            className="relative flex h-2 w-2 mr-1.5"
            aria-hidden
        >
            <motion.span
                className="absolute inline-flex h-full w-full rounded-full bg-rose-600"
                animate={{ scale: [1, 1.9, 1], opacity: [0.6, 0, 0.6] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-rose-600" />
        </motion.span>
    );
}

/** Desktop nav link with animated gold underline */
function NavLinkItem({ href, name }: NavLink) {
    return (
        <Link href={href} className="group relative text-sm font-medium text-slate-400 transition-colors duration-200 hover:text-slate-50">
            {name}
            <motion.span
                className="absolute -bottom-1 left-0 h-px w-full origin-left bg-yellow-500"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ type: "tween", ease: "easeOut", duration: 0.22 }}
            />
        </Link>
    );
}

/** Icon button with Framer whileTap + whileHover */
function IconBtn({
    onClick,
    label,
    children,
}: {
    onClick?: () => void;
    label: string;
    children: React.ReactNode;
}) {
    return (
        <motion.button
            aria-label={label}
            onClick={onClick}
            whileHover={{ backgroundColor: "rgba(234,179,8,0.10)" }}
            whileTap={{ scale: 0.9 }}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 transition-colors duration-200 hover:text-yellow-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500"
        >
            {children}
        </motion.button>
    );
}

// ── Main Component ─────────────────────────────────────────────────────────
export default function Navbar() {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [searchOpen, setSearchOpen] = React.useState(false);
    const [dropdownOpen, setDropdownOpen] = React.useState(false);
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const searchRef = React.useRef<HTMLDivElement>(null);
    const dropdownRef = React.useRef<HTMLDivElement>(null);
    const inputRef = React.useRef<HTMLInputElement>(null);

    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    // Close menus on outside click
    React.useEffect(() => {
        function handleClick(e: MouseEvent) {
            if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
                setSearchOpen(false);
            }
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, []);

    // Lock scroll when drawer open
    React.useEffect(() => {
        document.body.style.overflow = drawerOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [drawerOpen]);

    // Focus input when search opens
    React.useEffect(() => {
        if (searchOpen) inputRef.current?.focus();
    }, [searchOpen]);

    function toggleSearch() {
        setSearchOpen((v) => !v);
        setDropdownOpen(false);
    }

    function toggleDropdown() {
        setDropdownOpen((v) => !v);
        setSearchOpen(false);
    }

    return (
        <>
            {/* ── HEADER ─────────────────────────────────────────── */}
            <motion.header
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 280, damping: 26, delay: 0.1 }}
                className="fixed top-0 z-50 w-full"
            >
                {/* Background layer — animates independently */}
                <motion.div
                    aria-hidden
                    animate={
                        isScrolled
                            ? { backgroundColor: "rgba(11,14,20,0.82)", backdropFilter: "blur(18px) saturate(160%)", borderBottomColor: "rgba(255,255,255,0.08)" }
                            : { backgroundColor: "rgba(11,14,20,0)", backdropFilter: "blur(0px) saturate(100%)", borderBottomColor: "rgba(255,255,255,0)" }
                    }
                    transition={{ duration: 0.35 }}
                    className="absolute inset-0 border-b border-transparent"
                    style={{ WebkitBackdropFilter: "inherit" }}
                />

                <div
                    className="relative mx-auto flex max-w-screen-xl items-center justify-between gap-4 px-6"
                    style={{ paddingTop: isScrolled ? "0.75rem" : "1.35rem", paddingBottom: isScrolled ? "0.75rem" : "1.35rem", transition: "padding 0.35s ease" }}
                >
                    {/* ── LOGO ──────────────────────────────── */}
                    <Link href="/" className="flex items-center gap-0 select-none group" aria-label="CineTube home">
                        <PulseDot />
                        <motion.span
                            className="font-serif text-2xl font-black tracking-tighter leading-none"
                            whileHover={{ letterSpacing: "-0.01em" }}
                            transition={{ duration: 0.2 }}
                        >
                            <span className="text-yellow-500">CINE</span>
                            <span className="text-slate-50">TUBE</span>
                        </motion.span>
                    </Link>

                    {/* ── DESKTOP NAV ───────────────────────── */}
                    <nav className="hidden md:flex items-center gap-8" aria-label="Primary navigation">
                        {NAV_LINKS.map((link) => (
                            <NavLinkItem key={link.name} {...link} />
                        ))}
                    </nav>

                    {/* ── ACTIONS ───────────────────────────── */}
                    <div className="flex items-center gap-1">

                        {/* Search */}
                        <div ref={searchRef} className="flex items-center gap-1">
                            <AnimatePresence>
                                {searchOpen && (
                                    <motion.div
                                        key="search-input"
                                        variants={searchVariants}
                                        initial="collapsed"
                                        animate="expanded"
                                        exit="collapsed"
                                        className="overflow-hidden"
                                    >
                                        <input
                                            ref={inputRef}
                                            type="text"
                                            placeholder="Search titles…"
                                            className="w-full rounded-lg border border-white/10 bg-[#161B22] px-3 py-1.5 text-sm text-slate-100 placeholder:text-slate-500 outline-none focus:border-yellow-500/40 transition-colors"
                                        />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            <IconBtn label="Search" onClick={toggleSearch}>
                                <motion.div animate={{ rotate: searchOpen ? 90 : 0 }} transition={{ duration: 0.2 }}>
                                    {searchOpen
                                        ? <X className="h-4.5 w-4.5" size={18} />
                                        : <Search size={18} />
                                    }
                                </motion.div>
                            </IconBtn>
                        </div>

                        {/* Avatar + Dropdown */}
                        <div ref={dropdownRef} className="relative">
                            <motion.button
                                aria-label="Account menu"
                                aria-expanded={dropdownOpen}
                                onClick={toggleDropdown}
                                whileTap={{ scale: 0.92 }}
                                animate={dropdownOpen
                                    ? { boxShadow: "0 0 0 2.5px #EAB308, 0 0 0 5px rgba(234,179,8,0.15)" }
                                    : { boxShadow: "0 0 0 0px #EAB308" }
                                }
                                transition={{ duration: 0.2 }}
                                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#161B22] border border-white/10 text-slate-400 hover:text-slate-200 focus:outline-none transition-colors"
                            >
                                <User size={16} />
                            </motion.button>

                            <AnimatePresence>
                                {dropdownOpen && (
                                    <motion.div
                                        key="dropdown"
                                        variants={dropdownVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        className="absolute right-0 top-[calc(100%+10px)] w-56 overflow-hidden rounded-2xl border border-white/8 bg-[#161B22] shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
                                    >
                                        {/* Header */}
                                        <div className="border-b border-white/8 px-4 py-3.5">
                                            <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-0.5">Signed in as</p>
                                            <p className="font-serif font-bold text-slate-100 leading-tight">Alex Monroe</p>
                                        </div>

                                        {/* Items */}
                                        <div className="py-1.5">
                                            {[
                                                { icon: <Bookmark size={14} />, label: "Watchlist", href: "/watchlist" },
                                                { icon: <User size={14} />, label: "Profile", href: "/profile" },
                                            ].map((item) => (
                                                <Link
                                                    key={item.label}
                                                    href={item.href}
                                                    onClick={() => setDropdownOpen(false)}
                                                >
                                                    <motion.div
                                                        whileHover={{ backgroundColor: "rgba(255,255,255,0.04)", color: "#EAB308" }}
                                                        className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-slate-400 cursor-pointer transition-colors"
                                                    >
                                                        {item.icon}
                                                        {item.label}
                                                    </motion.div>
                                                </Link>
                                            ))}
                                        </div>

                                        <div className="h-px bg-white/8 mx-4" />

                                        <div className="py-1.5">
                                            <motion.button
                                                whileHover={{ backgroundColor: "rgba(225,29,72,0.08)" }}
                                                className="flex w-full items-center gap-2.5 px-4 py-2.5 text-sm text-rose-500 cursor-pointer transition-colors"
                                                onClick={() => setDropdownOpen(false)}
                                            >
                                                <LogOut size={14} />
                                                Log out
                                            </motion.button>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Mobile hamburger */}
                        <div className="md:hidden ml-1">
                            <IconBtn label="Open menu" onClick={() => setDrawerOpen(true)}>
                                <Menu size={20} />
                            </IconBtn>
                        </div>
                    </div>
                </div>
            </motion.header>

            {/* ── MOBILE DRAWER ─────────────────────────────────── */}
            <AnimatePresence>
                {drawerOpen && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            key="overlay"
                            variants={overlayVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            onClick={() => setDrawerOpen(false)}
                            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
                            aria-hidden
                        />

                        {/* Drawer panel */}
                        <motion.nav
                            key="drawer"
                            variants={drawerVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            aria-label="Mobile navigation"
                            className="fixed right-0 top-0 bottom-0 z-[70] w-[min(320px,85vw)] bg-[#161B22] border-l border-white/8 flex flex-col"
                        >
                            {/* Drawer header */}
                            <div className="flex items-center justify-between px-6 py-5 border-b border-white/8">
                                <span className="font-serif font-black text-xl tracking-tighter">
                                    <span className="text-yellow-500">CINE</span>
                                    <span className="text-slate-50">TUBE</span>
                                </span>
                                <motion.button
                                    whileTap={{ scale: 0.88, rotate: 90 }}
                                    transition={{ duration: 0.18 }}
                                    onClick={() => setDrawerOpen(false)}
                                    aria-label="Close menu"
                                    className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 hover:text-slate-100 hover:bg-white/5 transition-colors"
                                >
                                    <X size={18} />
                                </motion.button>
                            </div>

                            {/* Drawer links */}
                            <div className="flex flex-col gap-1 p-5 flex-1">
                                {NAV_LINKS.map((link, i) => (
                                    <motion.div
                                        key={link.name}
                                        custom={i}
                                        variants={drawerLinkVariants}
                                        initial="hidden"
                                        animate="visible"
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setDrawerOpen(false)}
                                        >
                                            <motion.div
                                                whileHover={{ x: 6, color: "#EAB308" }}
                                                transition={{ type: "spring", stiffness: 400, damping: 28 }}
                                                className="group flex items-center gap-3 rounded-xl px-4 py-3.5 font-serif text-2xl font-bold text-slate-400 transition-colors"
                                            >
                                                <motion.span
                                                    className="text-yellow-500 text-sm font-sans"
                                                    initial={{ opacity: 0, x: -6 }}
                                                    whileHover={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.15 }}
                                                >
                                                    —
                                                </motion.span>
                                                {link.name}
                                            </motion.div>
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Drawer footer */}
                            <div className="p-5 border-t border-white/8">
                                <motion.button
                                    whileHover={{ backgroundColor: "rgba(234,179,8,0.1)", color: "#EAB308" }}
                                    whileTap={{ scale: 0.97 }}
                                    className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 px-4 py-3 text-sm font-medium text-slate-400 transition-colors"
                                >
                                    <Film size={15} />
                                    Browse All Titles
                                </motion.button>
                            </div>
                        </motion.nav>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}