"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Star, Clapperboard, PlayCircle } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getAllMedia } from "@/app/(commonLayout)/all-movie/_actions";
import Link from "next/link";
import { initialMedia } from "@/data/data";

function cn(...classes: (string | boolean | undefined)[]) {
    return classes.filter(Boolean).join(" ");
}

export default function EditorsPicks() {
    const { data, isLoading, error } = useQuery({
        queryKey: ['medias', 'editors-picks'],
        queryFn: () => getAllMedia(1, 5),
    });

    // Use API data if available, otherwise fallback to mock data
    const picks = (data?.data && data.data.length > 0) ? data.data : initialMedia.slice(0, 5);
    console.log(picks);

    if (isLoading) return <div className="h-96 flex items-center justify-center text-slate-400">Loading Masterpieces...</div>;

    // Only show error state if API failed AND we have no mock data
    if (error && picks.length === 0) {
        return (
            <section className="bg-white py-24">
                <div className="container mx-auto px-6">
                    {/* Header Section */}
                    <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div className="space-y-4">
                            <Badge className="bg-[#EAB308] hover:bg-[#EAB308]/90 text-[#0F172A] font-black px-4 py-1 rounded-xl">
                                PREMIUM SELECTION
                            </Badge>
                            <h2 className="font-playfair text-5xl font-black text-[#0F172A] leading-tight">
                                Editor’s <span className="text-[#EAB308]">Picks</span>
                            </h2>
                        </div>
                        <p className="max-w-xs text-left md:text-right text-base text-slate-500 font-medium leading-relaxed">
                            Hand-picked masterpieces curated by our <span className="text-[#0F172A] font-bold">internal cinema experts</span>.
                        </p>
                    </div>

                    {/* Error State */}
                    <div className="flex flex-col items-center justify-center py-20 space-y-6">
                        <div className="bg-red-50 p-8 rounded-xl">
                            <Clapperboard size={64} className="text-red-300" />
                        </div>
                        <div className="text-center space-y-2">
                            <h3 className="text-2xl font-bold text-slate-900">Unable to Load Editor&apos;s Picks</h3>
                            <p className="text-slate-500 max-w-md">
                                We&apos;re having trouble loading our premium selection. Please try again later.
                            </p>
                        </div>
                        <Link href="/all-movie">
                            <button className="bg-[#EAB308] hover:bg-[#EAB308]/90 text-black font-bold px-8 py-3 rounded-xl transition-all duration-300 hover:shadow-lg">
                                Browse All Movies
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        );
    }

    // This condition should never be reached now due to mock data fallback
    if (picks.length === 0) {
        return (
            <section className="bg-white py-24">
                <div className="container mx-auto px-6">
                    {/* Header Section */}
                    <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div className="space-y-4">
                            <Badge className="bg-[#EAB308] hover:bg-[#EAB308]/90 text-[#0F172A] font-black px-4 py-1 rounded-xl">
                                PREMIUM SELECTION
                            </Badge>
                            <h2 className="font-playfair text-5xl font-black text-[#0F172A] leading-tight">
                                Editor’s <span className="text-[#EAB308]">Picks</span>
                            </h2>
                        </div>
                        <p className="max-w-xs text-left md:text-right text-base text-slate-500 font-medium leading-relaxed">
                            Hand-picked masterpieces curated by our <span className="text-[#0F172A] font-bold">internal cinema experts</span>.
                        </p>
                    </div>

                    {/* Empty State */}
                    <div className="flex flex-col items-center justify-center py-20 space-y-6">
                        <div className="bg-slate-50 p-8 rounded-xl">
                            <Clapperboard size={64} className="text-slate-300" />
                        </div>
                        <div className="text-center space-y-2">
                            <h3 className="text-2xl font-bold text-slate-900">No Editor&apos;s Picks Available</h3>
                            <p className="text-slate-500 max-w-md">
                                Our cinema experts are curating the best movies for you. Check back soon for our premium selection!
                            </p>
                        </div>
                        <Link href="/all-movie">
                            <button className="bg-[#EAB308] hover:bg-[#EAB308]/90 text-black font-bold px-8 py-3 rounded-xl transition-all duration-300 hover:shadow-lg">
                                Browse All Movies
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="bg-white py-24">
            <div className="container mx-auto px-6">
                {/* Header Section */}
                <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="space-y-4">
                        <Badge className="bg-[#EAB308] hover:bg-[#EAB308]/90 text-[#0F172A] font-black px-4 py-1 rounded-xl">
                            PREMIUM SELECTION
                        </Badge>
                        <h2 className="font-playfair text-5xl font-black text-[#0F172A] leading-tight">
                            Editor’s <span className="text-[#EAB308]">Picks</span>
                        </h2>
                    </div>
                    <p className="max-w-xs text-left md:text-right text-base text-slate-500 font-medium leading-relaxed">
                        Hand-picked masterpieces curated by our <span className="text-[#0F172A] font-bold">internal cinema experts</span>.
                    </p>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {
                        picks.map((movie, index) => {
                            const isLarge = index === 0;
                            return (
                                <motion.div
                                    key={movie.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    className={cn(
                                        "group relative overflow-hidden rounded-xl border border-slate-100 bg-[#0F172A] shadow-xl",
                                        isLarge ? "lg:col-span-2 lg:row-span-2 min-h-[500px]" : "lg:col-span-1 min-h-[300px]"
                                    )}
                                >
                                    {/* Media Poster */}
                                    <Image
                                        // movie.posterUrl
                                        src={"https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059"}
                                        alt={movie.title}
                                        fill
                                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:opacity-60"
                                    />

                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

                                    {/* Content Details */}
                                    <div className="absolute inset-0 z-10 flex flex-col justify-end p-8">
                                        <div className="translate-y-4 transition-transform duration-500 group-hover:translate-y-0">

                                            <div className="mb-3 flex items-center justify-between">
                                                <h3 className={cn(
                                                    "font-playfair font-bold text-white leading-tight",
                                                    isLarge ? "text-3xl" : "text-xl"
                                                )}>
                                                    {movie.title}
                                                </h3>
                                                <div className="flex items-center gap-1.5 bg-[#EAB308] px-2.5 py-1 rounded-xl text-[#0F172A]">
                                                    <Star className="h-3.5 w-3.5 fill-current" />
                                                    <span className="text-xs font-black">{movie.averageRating || "N/A"}</span>
                                                </div>
                                            </div>

                                            <div className="space-y-2 overflow-hidden max-h-0 opacity-0 transition-all duration-500 group-hover:max-h-40 group-hover:opacity-100">
                                                <div className="flex items-center gap-2 text-sm text-slate-300">
                                                    <Clapperboard className="h-4 w-4 text-[#EAB308]" />
                                                    <span className="line-clamp-1">Dir: {movie.director}</span>
                                                </div>

                                                <p className="text-sm text-slate-400 line-clamp-2 italic">
                                                    &ldquo;{movie.synopsis}&ldquo;
                                                </p>

                                                <Link
                                                    href={`/movie/${movie.id}`}
                                                    className="mt-4 flex items-center gap-2 text-[#EAB308] font-bold text-sm hover:underline"
                                                >
                                                    <PlayCircle className="h-5 w-5" />
                                                    WATCH PREMIERE
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Pricing Badge (Static) */}
                                    <div className="absolute top-5 right-5 z-20">
                                        <span className={cn(
                                            "text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-xl backdrop-blur-md",
                                            movie.pricing === "PREMIUM" ? "bg-[#EAB308] text-[#0F172A]" : "bg-white/20 text-white"
                                        )}>
                                            {movie.pricing}
                                        </span>
                                    </div>
                                </motion.div>
                            );

                        })
                    }
                </div>
            </div>
        </section>
    );
}