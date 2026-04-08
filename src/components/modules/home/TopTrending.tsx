"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Play } from "lucide-react";
import { initialMedia } from "@/lib/mockData";
import { cn } from "@/lib/utils";

export default function TopTrending() {
    // Sorting by averageRating as a proxy for 'trending'
    const trendingMovies = [...initialMedia]
        .sort((a, b) => b.averageRating - a.averageRating)
        .slice(0, 10);

    return (
        <section className="bg-white py-20 overflow-hidden font-jakarta">
            <div className="container mx-auto px-6">
                <div className="mb-12">
                    <h2 className="font-playfair text-4xl font-black text-slate-900 md:text-5xl">
                        Global <span className="text-[#EAB308]">Trending</span>
                    </h2>
                    <p className="mt-2 text-slate-400 font-bold uppercase tracking-[0.2em] text-[10px]">
                        Most watched this week worldwide
                    </p>
                </div>

                {/* Horizontal Scroll Container */}
                <div className="flex justify-between gap-8 overflow-x-auto pb-12 no-scrollbar snap-x snap-mandatory">
                    {trendingMovies.map((movie, index) => (
                        <motion.div
                            key={movie.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="relative flex-shrink-0 snap-start group cursor-pointer"
                        >
                            {/* Large Background Number - Light Mode Adjusted */}
                            <span
                                className={cn(
                                    "absolute -left-10 bottom-8 font-playfair text-[160px] font-black leading-none select-none z-0",
                                    "text-transparent transition-all duration-500 group-hover:stroke-[#EAB308]/40",
                                    "stroke-slate-100"
                                )}
                                style={{ WebkitTextStroke: "2px" }}
                            >
                                {index + 1}
                            </span>

                            {/* Movie Poster */}
                            <div className="relative z-10 h-96 w-80 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 transition-all duration-500 group-hover:-translate-y-4 group-hover:shadow-[0_30px_60px_rgba(234,179,8,0.2)]">
                                <Image
                                    src={"https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059"}
                                    // movie.posterUrl
                                    alt={movie.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Light Mode Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                {/* Quick Info Hover */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        className="flex h-16 w-16 items-center justify-center rounded-full bg-[#EAB308] text-white shadow-xl"
                                    >
                                        <Play className="h-8 w-8 fill-current ml-1" />
                                    </motion.div>

                                    <div className="mt-6 flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-md px-4 py-1 border border-white/30">
                                        <Star className="h-4 w-4 fill-[#EAB308] text-[#EAB308]" />
                                        <span className="text-sm font-black text-white">{movie.averageRating}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Info Section */}
                            <div className="mt-6 ml-12 space-y-1">
                                <h3 className="font-playfair text-xl font-bold text-slate-900 group-hover:text-[#EAB308] transition-colors line-clamp-1">
                                    {movie.title}
                                </h3>
                                <div className="flex items-center gap-2">
                                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{movie.releaseYear}</span>
                                    <span className="h-1 w-1 rounded-full bg-slate-300" />
                                    <span className="text-xs font-bold text-[#EAB308] uppercase tracking-widest">{movie.type}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}