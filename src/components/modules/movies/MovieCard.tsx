"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Play, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { MediaType } from "@/types/media.types";

interface MovieCardProps {
    id: string;
    title: string;
    posterUrl: string;
    rating: number;
    genres: string[];
    year: number;
    isPremium: boolean;
    type: MediaType;
}

export function MovieCard({
    id,
    title,
    posterUrl,
    rating,
    genres,
    year,
    isPremium,
    type
}: MovieCardProps) {
    return (
        <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="group relative"
        >
            <Card className="overflow-hidden border-none bg-white shadow-lg">
                {/* Image Container */}
                <div className="relative aspect-[2/3] w-full overflow-hidden">
                    <Image
                        src={posterUrl}
                        alt={title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Top Overlays: Premium & Type */}
                    <div className="absolute left-3 top-3 flex flex-col gap-2">
                        {isPremium && (
                            <Badge className="bg-[#EAB308] font-black text-white hover:bg-[#EAB308]">
                                PREMIUM
                            </Badge>
                        )}
                        <Badge variant="secondary" className="bg-black/50 text-xs text-white backdrop-blur-md">
                            {type}
                        </Badge>
                    </div>

                    {/* Hover Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#EAB308] text-[#0B0E14] shadow-lg shadow-[#EAB308]/20">
                            <Play className="h-6 w-6 fill-current" />
                        </div>
                    </div>

                    {/* Bottom Gradient Fade */}
                    <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#EAB308] to-transparent" />
                </div>

                {/* Content Section */}
                <CardContent className="p-4">
                    <div className="mb-2 flex items-center justify-between">
                        <h3 className="line-clamp-1 font-playfair text-lg font-bold text-black group-hover:text-[#EAB308] transition-colors">
                            {title}
                        </h3>
                        <div className="flex items-center gap-1">
                            <Star className="h-3 w-3 fill-[#EAB308] text-[#EAB308]" />
                            <span className="text-sm font-bold text-white">{rating > 0 ? rating.toFixed(1) : "N/A"}</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 text-[11px] font-medium text-slate-400 uppercase tracking-wider">
                        <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" /> {year}
                        </span>
                        <span className="h-1 w-1 rounded-full bg-slate-600" />
                        <span className="line-clamp-1">
                            {genres.slice(0, 2).join(", ")}
                        </span>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
}