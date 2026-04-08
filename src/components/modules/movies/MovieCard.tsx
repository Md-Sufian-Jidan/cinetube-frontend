"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, Play, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { IMedia } from "@/types/media.types";

interface MovieCardProps {
    movie: IMedia;
}

export function MovieCard({ movie }: { movie: any }) {
    const { id, title, posterUrl, averageRating, releaseYear, type, pricing, genres, synopsis } = movie;
    const isPremium = pricing === "PREMIUM";

    // Truncate synopsis for short description
    const shortDescription = synopsis?.length > 100 ? synopsis.substring(0, 100) + "..." : synopsis || "No description available.";

    return (
        <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="h-full relative group"
        >
            <Card className="h-full overflow-hidden border-none bg-white shadow-lg flex flex-col rounded-2xl">
                {/* Image Container */}
                <div className="relative aspect-[2/3] w-full overflow-hidden shrink-0">
                    <Image
                        src={"https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059"}
                        alt={title}
                        fill
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Top Overlays: Premium & Type */}
                    <div className="absolute left-3 top-3 flex flex-col gap-2 z-10">
                        {isPremium && (
                            <Badge className="bg-[#EAB308] border-none font-black text-white hover:bg-[#EAB308] px-3 py-1 text-[10px] tracking-wider">
                                PREMIUM
                            </Badge>
                        )}
                        <Badge variant="secondary" className="bg-black/50 border-none text-[10px] font-bold text-white backdrop-blur-md px-3 py-1 tracking-wider uppercase">
                            {type}
                        </Badge>
                    </div>

                    {/* Hover Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10">
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="flex h-14 w-14 items-center justify-center rounded-full bg-[#EAB308] text-white shadow-xl shadow-[#EAB308]/20"
                        >
                            <Play className="h-6 w-6 fill-current ml-1" />
                        </motion.div>
                    </div>

                    {/* Bottom Gradient Fade */}
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-900/80 to-transparent pointer-events-none" />
                </div>

                {/* Content Section */}
                <CardContent className="p-4 flex flex-col justify-between flex-grow bg-white">
                    <div className="space-y-3">
                        <div className="flex items-start justify-between gap-2">
                            <h3 className="line-clamp-1 font-playfair text-lg font-black text-slate-900 group-hover:text-[#EAB308] transition-colors tracking-tight">
                                {title}
                            </h3>
                            <div className="flex items-center gap-1 shrink-0 bg-slate-50 px-2 py-0.5 rounded-md border border-slate-100">
                                <Star className="h-3 w-3 fill-[#EAB308] text-[#EAB308]" />
                                <span className="text-[11px] font-black text-slate-700">{averageRating > 0 ? averageRating.toFixed(1) : "N/A"}</span>
                            </div>
                        </div>

                        {/* Short Description */}
                        <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">
                            {shortDescription}
                        </p>

                        {/* Meta Info */}
                        <div className="flex items-center justify-between text-[10px] font-black text-slate-400 uppercase tracking-[0.1em]">
                            <div className="flex items-center gap-2">
                                <span className="flex items-center gap-1">
                                    <Calendar className="h-3 w-3" /> {releaseYear}
                                </span>
                                <span className="h-1 w-1 rounded-full bg-slate-200" />
                                <span className="line-clamp-1 text-[#EAB308]">
                                    {genres?.length > 0 ? genres[0].name : "Genre"}
                                </span>
                            </div>
                            <span className="text-slate-500">{pricing}</span>
                        </div>
                    </div>

                    {/* View Details Button */}
                    <Link href={`/all-movie/${id}`} className="mt-4 block">
                        <Button className="w-full bg-[#EAB308] hover:bg-[#EAB308]/90 text-black font-bold rounded-xl h-10 transition-all duration-300 hover:shadow-lg">
                            View Details
                        </Button>
                    </Link>
                </CardContent>
            </Card>
        </motion.div>
    )
};