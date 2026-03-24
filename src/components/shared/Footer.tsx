"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Youtube, Mail, MapPin, Phone } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
    platform: [
        { name: "Browse Movies", href: "/movies" },
        { name: "TV Series", href: "/series" },
        { name: "Top Rated", href: "/top-rated" },
        { name: "Pricing", href: "/pricing" },
    ],
    support: [
        { name: "Help Center", href: "/help" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Refund Policy", href: "/refunds" },
    ],
};

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#0B0E14] border-t border-white/5 pt-16 pb-8">
            <div className="mx-auto max-w-7xl px-5">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">

                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="group inline-block">
                            <span className="font-playfair text-3xl font-black tracking-tighter text-[#EAB308]">
                                CINE<span className="text-slate-50">TUBE</span>
                            </span>
                        </Link>
                        <p className="text-sm leading-relaxed text-slate-400 max-w-xs">
                            The ultimate destination for cinephiles. Discover, rate, and stream
                            the world's most iconic stories with our community-driven portal.
                        </p>
                        <div className="flex space-x-4">
                            {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                                <motion.a
                                    key={i}
                                    href="#"
                                    whileHover={{ y: -3, color: "#EAB308" }}
                                    className="text-slate-500 transition-colors"
                                >
                                    <Icon size={20} />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-playfair text-lg font-bold text-slate-50 mb-6">Platform</h4>
                        <ul className="space-y-4">
                            {footerLinks.platform.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm text-slate-400 hover:text-[#EAB308] transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="font-playfair text-lg font-bold text-slate-50 mb-6">Legal & Support</h4>
                        <ul className="space-y-4">
                            {footerLinks.support.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm text-slate-400 hover:text-[#EAB308] transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h4 className="font-playfair text-lg font-bold text-slate-50 mb-6">Contact Us</h4>
                        <div className="flex items-start space-x-3 text-sm text-slate-400">
                            <MapPin size={18} className="text-[#EAB308] shrink-0" />
                            <span>123 Cinema Lane, Movie District<br />Hollywood, CA 90210</span>
                        </div>
                        <div className="flex items-center space-x-3 text-sm text-slate-400">
                            <Phone size={18} className="text-[#EAB308] shrink-0" />
                            <span>+1 (555) 000-CINE</span>
                        </div>
                        <div className="flex items-center space-x-3 text-sm text-slate-400">
                            <Mail size={18} className="text-[#EAB308] shrink-0" />
                            <span>support@cinetube.com</span>
                        </div>
                    </div>
                </div>

                <Separator className="my-12 bg-white/5" />

                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 uppercase tracking-widest font-medium">
                    <p>© {currentYear} CineTube Portal. Built for Cinephiles.</p>
                    <div className="flex items-center space-x-6">
                        <span>Powered by Next.js & Prisma</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}