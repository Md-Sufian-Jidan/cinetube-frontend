"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Play } from "lucide-react";
import { initialMedia } from "@/lib/mockData"; // Using the data we just created
import { cn } from "@/lib/utils";

export default function TopTrending() {
    // Sorting by averageRating as a proxy for 'trending'
    const trendingMovies = [...initialMedia]
        .sort((a, b) => b.averageRating - a.averageRating)
        .slice(0, 10);

    return (
        <section className="bg-[#0B0E14] py-24 overflow-hidden">
            <div className="container px-6">
                <div className="mb-12">
                    <h2 className="font-playfair text-4xl font-bold text-white md:text-5xl">
                        Global <span className="text-[#EAB308]">Trending</span>
                    </h2>
                    <p className="mt-2 text-slate-400 font-dm-sans uppercase tracking-[0.2em] text-[10px]">
                        Most watched this week worldwide
                    </p>
                </div>

                {/* Horizontal Scroll Container */}
                <div className="flex gap-12 overflow-x-auto pb-12 no-scrollbar snap-x snap-mandatory">
                    {trendingMovies.map((movie, index) => (
                        <motion.div
                            key={movie.id}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="relative flex-shrink-0 snap-start group cursor-pointer"
                        >
                            {/* Large Background Number */}
                            <span
                                className={cn(
                                    "absolute -left-8 bottom-0 font-playfair text-[180px] font-black leading-none select-none z-0",
                                    "text-transparent stroke-white/20 transition-all duration-500 group-hover:stroke-[#EAB308]/40",
                                    "drop-shadow-[0_0_15px_rgba(234,179,8,0.1)]"
                                )}
                                style={{ WebkitTextStroke: "2px", opacity: 1 }}
                            >
                                {index + 1}
                            </span>

                            {/* Movie Poster */}
                            <div className="relative z-10 ml-10 h-[350px] w-[240px] overflow-hidden rounded-xl border border-white/5 bg-[#161B22] shadow-2xl transition-transform duration-300 group-hover:-translate-y-4 group-hover:border-[#EAB308]/30">
                                <Image
                                    src={movie.posterUrl}
                                    alt={movie.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />

                                {/* Subtle Glow Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14] via-transparent to-transparent opacity-60" />

                                {/* Quick Info Hover */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EAB308] text-[#0B0E14]">
                                        <Play className="h-6 w-6 fill-current" />
                                    </div>
                                    <div className="mt-4 flex items-center gap-1 text-white">
                                        <Star className="h-4 w-4 fill-[#EAB308] text-[#EAB308]" />
                                        <span className="text-sm font-bold">{movie.averageRating}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Title (Mobile Friendly) */}
                            <p className="mt-4 ml-10 font-playfair text-lg font-bold text-white group-hover:text-[#EAB308] transition-colors line-clamp-1">
                                {movie.title}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}