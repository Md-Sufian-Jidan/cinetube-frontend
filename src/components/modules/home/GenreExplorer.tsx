"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Brain, Heart, Ghost, Target, Coffee } from "lucide-react";
import { cn } from "@/lib/utils";
import { MovieCard } from "../movies/MovieCard";
import { Pricing } from "@/types/media.types";

const moods = [
    { id: "all", label: "Surprise Me", icon: Coffee, color: "hover:text-white" },
    { id: "Thriller", label: "Adrenaline Rush", icon: Zap, color: "hover:text-yellow-500" },
    { id: "Drama", label: "Deep Thought", icon: Brain, color: "hover:text-blue-400" },
    { id: "Romance", label: "Heartfelt", icon: Heart, color: "hover:text-rose-400" },
    { id: "Horror", label: "Spooky Night", icon: Ghost, color: "hover:text-purple-500" },
    { id: "Crime", label: "Underworld", icon: Target, color: "hover:text-emerald-400" },
];

export default function GenreExplorer({ initialMedia }: { initialMedia: any[] }) {
    const [activeGenre, setActiveGenre] = React.useState("all");

    const filteredMedia = activeGenre === "all"
        ? initialMedia
        : initialMedia.filter(m => m.genres.some((g: any) => g.name === activeGenre));

    return (
        <section className="bg-[#FAFAFA] py-20">
            <div className="container mx-auto px-6">
                <div className="mb-12 text-center">
                    <h2 className="font-playfair text-3xl font-bold text-black md:text-5xl">
                        What's your <span className="text-[#EAB308]">mood</span> tonight?
                    </h2>
                    <p className="mt-4 text-slate-600 font-dm-sans uppercase tracking-widest text-xs">
                        Tap a vibe to discover your next obsession
                    </p>
                </div>

                {/* Mood Selector Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {moods.map((mood) => {
                        const Icon = mood.icon;
                        const isActive = activeGenre === mood.id;

                        return (
                            <button
                                key={mood.id}
                                onClick={() => setActiveGenre(mood.id)}
                                className={cn(
                                    "group relative flex flex-col items-center justify-center gap-3 transition-all duration-300",
                                    "h-28 w-28 rounded-full border border-[#EAB308] bg-[#161B22]/50 backdrop-blur-sm",
                                    isActive ? "border-[#EAB308] bg-[#EAB308]/10 shadow-[0_0_20px_rgba(234,179,8,0.1)]" : "hover:border-white/20"
                                )}
                            >
                                <Icon
                                    className={cn(
                                        "h-7 w-7 transition-colors duration-300",
                                        isActive ? "text-[#EAB308]" : "text-slate-600 group-hover:text-white",
                                        !isActive && mood.color
                                    )}
                                />
                                <span className={cn(
                                    "text-[10px] font-bold uppercase tracking-tighter transition-colors",
                                    isActive ? "text-[#EAB308]" : "text-slate-600 group-hover:text-white"
                                )}>
                                    {mood.label}
                                </span>

                                {isActive && (
                                    <motion.div
                                        layoutId="activeMood"
                                        className="absolute -inset-1 rounded-full border border-[#EAB308]/50"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                            </button>
                        );
                    })}
                </div>

                {/* Animated Movie Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredMedia.slice(0, 8).map((movie) => (
                            <motion.div
                                key={movie.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                                transition={{ duration: 0.4 }}
                            >
                                <MovieCard
                                    id={movie.id}
                                    title={movie.title}
                                    posterUrl={movie.posterUrl}
                                    rating={movie.averageRating || 8.5} // Fallback for your mock data
                                    genres={movie.genres.map((g: any) => g.name)}
                                    year={movie.releaseYear}
                                    isPremium={movie.pricing === Pricing.PREMIUM}
                                    type={movie.type}
                                />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}