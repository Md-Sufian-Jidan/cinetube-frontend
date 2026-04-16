"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export function SupportHero() {
    return (
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden px-6 bg-[#fafafa]">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1557683311-eac922347aa1?q=80&w=2029"
                    alt="Support background"
                    fill
                    className="object-cover opacity-60 dark:opacity-40"
                    priority
                />
                {/* Glass overlay */}
                <div className="absolute inset-0 bg-[#fafafa]/50 dark:bg-black/60 backdrop-blur-xl" />
            </div>

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 max-w-3xl w-full text-center mt-12"
            >
                {/* Badge */}
                <span className="inline-flex items-center px-4 py-1.5 rounded-full 
                    bg-white/50 dark:bg-black/30 backdrop-blur-md 
                    text-[#EAB308] font-bold text-xs tracking-widest uppercase 
                    border border-[#EAB308]/30 mb-6">
                    Help Center
                </span>

                {/* Title */}
                <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
                    How can we <span className="text-[#EAB308] italic">help</span> you?
                </h1>

                {/* Search Bar */}
                <div className="mt-10 relative max-w-xl mx-auto group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-slate-400 group-focus-within:text-[#EAB308] transition-colors" />
                    </div>
                    <Input
                        type="text"
                        placeholder="Search for articles, troubleshooting, and more..."
                        className="h-14 pl-12 pr-4 rounded-full bg-white dark:bg-slate-900/80 border-2 border-slate-200 dark:border-slate-800 focus:border-[#EAB308] focus:ring-0 text-slate-900 dark:text-white text-base shadow-xl transition-all"
                    />
                </div>

                <div className="mt-6 flex flex-wrap justify-center gap-3">
                    <span className="text-sm text-slate-600 dark:text-slate-400 font-medium">Popular:</span>
                    {["Reset Password", "Buffering Issues", "Billing Cycle"].map((term) => (
                        <span key={term} className="text-sm text-slate-900 dark:text-slate-200 bg-white/60 dark:bg-white/10 px-3 py-0.5 rounded-full border border-slate-200 dark:border-white/10 cursor-pointer hover:bg-[#EAB308] hover:text-white hover:border-[#EAB308] transition-colors">
                            {term}
                        </span>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
