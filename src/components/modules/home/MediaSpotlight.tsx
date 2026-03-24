"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Play, Calendar, User, Clock, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

// Data from your API response
const mediaData = {
    title: "Breaking Bad",
    synopsis: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
    releaseYear: 2008,
    director: "Vince Gilligan",
    type: "SERIES",
    pricing: "PREMIUM",
    streamingLink: "https://www.netflix.com/title/70143836",
    posterUrl: "https://image.tmdb.org/t/p/w500/ggm8bbEA9gnxa9KiYvH0o9ihr2W.jpg",
    genres: ["Crime", "Drama", "Thriller"],
    cast: [
        { name: "Bryan Cranston", role: "Walter White" },
        { name: "Aaron Paul", role: "Jesse Pinkman" }
    ],
    review: {
        rating: 10,
        user: "Admin",
        content: "Breaking Bad is arguably the best series ever made. The character development of Walter White is unparalleled."
    }
};

export default function MediaSpotlight() {
    return (
        <section className="relative w-full bg-[#0B0E14] py-20 overflow-hidden">
            <div className="container px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Left: Poster Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-4 relative group"
                    >
                        <div className="relative aspect-[2/3] overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                            <Image
                                src={mediaData.posterUrl}
                                alt={mediaData.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14] via-transparent to-transparent opacity-60" />
                        </div>
                        {/* Floating Rating Badge */}
                        <div className="absolute -bottom-6 -right-6 bg-[#EAB308] p-4 rounded-xl shadow-lg transform rotate-3">
                            <p className="text-[#0B0E14] font-black text-2xl leading-none">{mediaData.review.rating}.0</p>
                            <p className="text-[#0B0E14] text-[10px] font-bold uppercase tracking-tighter">IMDB Score</p>
                        </div>
                    </motion.div>

                    {/* Right: Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:col-span-8 flex flex-col space-y-6"
                    >
                        <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="border-[#EAB308] text-[#EAB308] font-bold">
                                {mediaData.pricing}
                            </Badge>
                            <Badge className="bg-white/10 text-slate-300 hover:bg-white/20">
                                {mediaData.type}
                            </Badge>
                        </div>

                        <h2 className="font-playfair text-5xl md:text-7xl font-black text-white">
                            {mediaData.title}
                        </h2>

                        <div className="flex flex-wrap items-center gap-6 text-slate-400 text-sm font-medium">
                            <span className="flex items-center gap-1.5"><Calendar size={16} className="text-[#EAB308]" /> {mediaData.releaseYear}</span>
                            <span className="flex items-center gap-1.5"><User size={16} className="text-[#EAB308]" /> {mediaData.director}</span>
                            <div className="flex gap-2">
                                {mediaData.genres.map((g) => (
                                    <span key={g} className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[11px] uppercase tracking-wider">{g}</span>
                                ))}
                            </div>
                        </div>

                        <p className="text-slate-300 text-lg leading-relaxed font-dm-sans max-w-2xl">
                            {mediaData.synopsis}
                        </p>

                        <div className="space-y-4 pt-4">
                            <h4 className="font-playfair text-xl font-bold text-white">Top Cast</h4>
                            <div className="flex gap-8">
                                {mediaData.cast.map((c) => (
                                    <div key={c.name} className="flex flex-col">
                                        <span className="text-white font-bold tracking-tight">{c.name}</span>
                                        <span className="text-xs text-[#EAB308] uppercase tracking-widest">{c.role}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <Separator className="bg-white/10" />

                        {/* Featured Review Snippet */}
                        <div className="bg-[#161B22] p-4 rounded-lg border-l-4 border-[#EAB308]">
                            <p className="text-slate-300 italic text-sm font-dm-sans">
                                "{mediaData.review.content}"
                            </p>
                            <p className="text-[#EAB308] text-xs font-bold mt-2 uppercase tracking-widest">— {mediaData.review.user}</p>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-6">
                            <Button asChild className="h-14 px-8 bg-[#EAB308] text-[#0B0E14] font-bold hover:bg-[#EAB308]/90">
                                <a href={mediaData.streamingLink} target="_blank" rel="noopener noreferrer">
                                    <Play className="mr-2 h-5 w-5 fill-current" /> Stream on Netflix
                                </a>
                            </Button>
                            <Button variant="outline" className="h-14 px-8 border-white/20 bg-white/5 text-white hover:bg-white/10">
                                Add to Watchlist
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}