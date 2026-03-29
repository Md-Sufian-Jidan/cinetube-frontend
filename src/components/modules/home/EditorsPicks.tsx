"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Star, User, Clapperboard } from "lucide-react";
import { QueryClient, useQuery } from "@tanstack/react-query";
import { getAllMedia } from "@/app/(commonLayout)/all-movie/_actions";

const picks = [
    {
        id: 1,
        title: "Breaking Bad",
        director: "Vince Gilligan",
        cast: "Bryan Cranston, Aaron Paul",
        image: "https://image.tmdb.org/t/p/w1280/ggm8bbEA9gnxa9KiYvH0o9ihr2W.jpg",
        size: "tall", // Vertical Poster
        rating: 9.5,
    },
    {
        id: 2,
        title: "Inception",
        director: "Christopher Nolan",
        cast: "Leonardo DiCaprio",
        image: "https://image.tmdb.org/t/p/w1280/8ZTVqvTZS7crSBAz2Xv6eY0Pone.jpg",
        size: "wide", // Horizontal Still
        rating: 8.8,
    },
    {
        id: 3,
        title: "The Dark Knight",
        director: "Christopher Nolan",
        cast: "Christian Bale, Heath Ledger",
        image: "https://image.tmdb.org/t/p/w1280/qJ2tW6WMUDp9QEQhUEq6nSArHwq.jpg",
        size: "standard",
        rating: 9.0,
    },
    {
        id: 4,
        title: "Interstellar",
        director: "Christopher Nolan",
        cast: "Matthew McConaughey",
        image: "https://image.tmdb.org/t/p/w1280/xJHbtvM9qeBr79p9Un97unRrN6Y.jpg",
        size: "tall",
        rating: 8.7,
    },
];

export default function EditorsPicks() {
    const { data } = useQuery({
        queryKey: ['medias'],
        queryFn: getAllMedia,
    });
    console.log("Data from editors picks", data);

    return (
        <section className="bg-[#0B0E14] py-24">
            <div className="container mx-auto px-6">
                <div className="mb-12 flex items-end justify-between">
                    <div className="space-y-2">
                        <Badge className="bg-[#EAB308] text-[#0B0E14] font-bold">PREMIUM SELECTION</Badge>
                        <h2 className="font-playfair text-4xl font-bold text-white md:text-5xl">
                            Editor’s <span className="text-[#EAB308]">Picks</span>
                        </h2>
                    </div>
                    <p className="hidden max-w-xs text-right text-sm text-slate-400 md:block">
                        Hand-picked masterpieces curated by our internal cinema experts.
                    </p>
                </div>

                {/* Masonry-style Grid */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
                    {picks.map((movie, index) => (
                        <motion.div
                            key={movie.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={cn(
                                "group relative overflow-hidden rounded-2xl border border-white/10 bg-[#161B22]",
                                movie.size === "tall" && "lg:col-span-1 lg:row-span-2",
                                movie.size === "wide" && "lg:col-span-2 lg:row-span-1",
                                movie.size === "standard" && "lg:col-span-1 lg:row-span-1"
                            )}
                        >
                            {/* Movie Image */}
                            <Image
                                src={movie.image}
                                alt={movie.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Glassmorphism Hover Overlay */}
                            <div className="absolute inset-0 z-10 flex flex-col justify-end bg-gradient-to-t from-[#0B0E14] via-[#0B0E14]/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <div className="translate-y-4 p-6 transition-transform duration-300 backdrop-blur-md bg-white/5 border-t border-white/10 group-hover:translate-y-0">
                                    <div className="mb-2 flex items-center justify-between">
                                        <h3 className="font-playfair text-xl font-bold text-white">{movie.title}</h3>
                                        <div className="flex items-center gap-1 text-[#EAB308]">
                                            <Star className="h-4 w-4 fill-current" />
                                            <span className="text-sm font-bold">{movie.rating}</span>
                                        </div>
                                    </div>

                                    <div className="space-y-1.5">
                                        <div className="flex items-center gap-2 text-xs text-slate-300">
                                            <Clapperboard className="h-3 w-3 text-[#EAB308]" />
                                            <span className="font-medium">Dir: {movie.director}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-xs text-slate-300">
                                            <User className="h-3 w-3 text-[#EAB308]" />
                                            <span className="line-clamp-1">{movie.cast}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Static Title (Visible when not hovering) */}
                            <div className="absolute bottom-4 left-4 z-0 transition-opacity group-hover:opacity-0">
                                <h3 className="font-playfair text-lg font-bold text-white drop-shadow-lg">{movie.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Utility function for conditional classes
function cn(...classes: any[]) {
    return classes.filter(Boolean).join(" ");
}