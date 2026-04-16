"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Youtube, Mail, MapPin, Phone, Film } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
    platform: [
        { name: "Browse Movies", href: "/all-movies" },
        { name: "TV Series", href: "/series" },
        { name: "Top Rated", href: "/top-rated" },
        { name: "Pricing", href: "/pricing" },
    ],
    support: [
        { name: "Help Center", href: "/contact" },
        { name: "Need Support?", href: "/support" },
        { name: "Terms of Service", href: "/terms" },
    ],
};

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white border-t border-[#EAB308] pt-20 pb-10 font-jakarta">
            <div className="mx-auto container px-6">
                <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-4">

                    {/* Brand Column */}
                    <div className="space-y-8">
                        <Link href="/" className="flex items-center gap-3 group shrink-0">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAB308] text-white shadow-lg shadow-[#EAB308]/20 transition-transform group-hover:scale-110">
                                <Film size={22} />
                            </div>
                            <span className="font-playfair text-2xl font-black tracking-tighter text-slate-900 uppercase">
                                Cine<span className="text-[#EAB308]">Tube</span>
                            </span>
                        </Link>
                        <p className="text-sm font-medium leading-relaxed text-slate-500 max-w-xs">
                            The ultimate destination for cinephiles. Discover, rate, and stream
                            the world's most iconic stories with our community-driven portal.
                        </p>
                        <div className="flex space-x-5">
                            {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                                <motion.a
                                    key={i}
                                    href="#"
                                    whileHover={{ y: -4, color: "#EAB308" }}
                                    className="text-slate-400 transition-colors p-2 rounded-full bg-slate-50 border border-slate-100 hover:border-[#EAB308]/20"
                                >
                                    <Icon size={18} />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-playfair text-xl font-black text-slate-900 mb-8 tracking-tight">Platform</h4>
                        <ul className="space-y-4">
                            {footerLinks.platform.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm font-bold text-slate-500 hover:text-[#EAB308] transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="font-playfair text-xl font-black text-slate-900 mb-8 tracking-tight">Legal & Support</h4>
                        <ul className="space-y-4">
                            {footerLinks.support.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm font-bold text-slate-500 hover:text-[#EAB308] transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h4 className="font-playfair text-xl font-black text-slate-900 mb-8 tracking-tight">Contact Us</h4>
                        <div className="flex items-start space-x-4 text-sm font-bold text-slate-500">
                            <MapPin size={20} className="text-[#EAB308] shrink-0" />
                            <span className="leading-relaxed">123 Cinema Lane, Movie District<br />Hollywood, CA 90210</span>
                        </div>
                        <div className="flex items-center space-x-4 text-sm font-bold text-slate-500">
                            <Phone size={20} className="text-[#EAB308] shrink-0" />
                            <span>+1 (555) 000-CINE</span>
                        </div>
                        <div className="flex items-center space-x-4 text-sm font-bold text-slate-500">
                            <Mail size={20} className="text-[#EAB308] shrink-0" />
                            <span>support@cinetube.com</span>
                        </div>
                    </div>
                </div>

                <Separator className="my-16 bg-slate-100" />

                <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-slate-400 font-black uppercase tracking-[0.3em]">
                    <p>© {currentYear} CineTube Portal. Built for Cinephiles.</p>
                    <div className="flex items-center space-x-8">
                        <span className="hover:text-slate-900 transition-colors cursor-default">Powered by Next.js & Prisma</span>
                        <span className="hover:text-slate-900 transition-colors cursor-default">Verified by shadcn/ui</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}