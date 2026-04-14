"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PlayCircle, Sparkles, Film } from "lucide-react";

export function AboutIntro() {
    return (
        <section className="py-24 px-6">
            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* LEFT CONTENT */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Badge */}
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
            bg-white/20 dark:bg-black/30 backdrop-blur-xl 
            border border-white/10 text-[#EAB308] text-xs font-bold tracking-widest uppercase">
                        <Sparkles size={14} />
                        About CineTube
                    </span>

                    {/* Title */}
                    <h2 className="mt-6 text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
                        Your Ultimate{" "}
                        <span className="text-[#EAB308]">Movie Streaming</span> Experience
                    </h2>

                    {/* Description */}
                    <p className="mt-6 text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                        CineTube is a next-generation streaming platform designed for movie lovers.
                        Discover thousands of movies, enjoy personalized recommendations, and build
                        your own watchlist — all in one cinematic experience.
                    </p>

                    <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                        We combine modern UI, AI-powered suggestions, and high-quality streaming
                        to deliver a seamless entertainment journey for every user.
                    </p>

                    {/* Features Mini Points */}
                    <div className="mt-8 space-y-3">
                        <div className="flex items-center gap-3 text-slate-700 dark:text-slate-200">
                            <Film className="text-[#EAB308]" size={18} />
                            10,000+ Movies & Series
                        </div>

                        <div className="flex items-center gap-3 text-slate-700 dark:text-slate-200">
                            <Sparkles className="text-[#EAB308]" size={18} />
                            AI-Powered Recommendations
                        </div>

                        <div className="flex items-center gap-3 text-slate-700 dark:text-slate-200">
                            <PlayCircle className="text-[#EAB308]" size={18} />
                            Smooth HD Streaming Experience
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-10">
                        <Button className="bg-[#EAB308] hover:bg-[#d9a807] text-black font-bold px-8 h-12 rounded-full shadow-lg shadow-[#EAB308]/20">
                            Explore Movies
                        </Button>
                    </div>
                </motion.div>

                {/* RIGHT IMAGE / GLASS CARD */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                >
                    <div className="
            rounded-3xl overflow-hidden
            bg-white/10 dark:bg-black/30
            backdrop-blur-xl
            border border-white/10
            shadow-2xl
          ">
                        <Image
                            src="https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?q=80&w=2070"
                            alt="CineTube streaming experience"
                            width={800}
                            height={900}
                            className="object-cover w-full h-full"
                        />
                    </div>

                    {/* Floating Glass Card */}
                    <div className="
            absolute -bottom-6 -left-6
            bg-white/20 dark:bg-black/40
            backdrop-blur-xl
            border border-white/10
            rounded-2xl p-5 shadow-xl
            hidden sm:block
          ">
                        <p className="text-sm font-bold text-slate-900 dark:text-white">
                            🎬 Unlimited Streaming
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-300 mt-1">
                            Anytime, Anywhere
                        </p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}