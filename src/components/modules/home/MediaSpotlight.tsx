"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Play, Calendar, User, Clock, ShieldCheck, Plus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

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
        <section className="relative w-full bg-[#FAFAFA] py-24 overflow-hidden font-jakarta">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

                    {/* Left: Poster Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-5 relative group"
                    >
                        <div className="relative aspect-[2/3] overflow-hidden rounded-[2rem] border border-slate-100 shadow-[0_30px_60px_rgba(0,0,0,0.15)] group-hover:shadow-[0_40px_80px_rgba(234,179,8,0.2)] transition-all duration-500">
                            <Image
                                // media.posterUrl
                                src={"https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059"}
                                alt={mediaData.title}
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            {/* Soft Gradient for bottom-text legibility if needed */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>

                        {/* Floating Rating Badge - Midnight Gold Accent */}
                        <motion.div
                            initial={{ x: 20, rotate: 10 }}
                            whileInView={{ x: 0, rotate: 3 }}
                            className="absolute -bottom-6 -right-6 bg-[#EAB308] p-6 rounded-2xl shadow-2xl z-20"
                        >
                            <p className="text-white font-black text-4xl leading-none tracking-tighter">{mediaData.review.rating}.0</p>
                            <p className="text-white/80 text-[10px] font-black uppercase tracking-[0.2em] mt-1">Critic Score</p>
                        </motion.div>
                    </motion.div>

                    {/* Right: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:col-span-7 flex flex-col space-y-8"
                    >
                        <div className="flex flex-wrap gap-3">
                            <Badge className="bg-[#EAB308] text-white border-none px-4 py-1 font-black">
                                {mediaData.pricing}
                            </Badge>
                            <Badge variant="outline" className="border-slate-200 text-slate-500 px-4 py-1 font-bold">
                                {mediaData.type}
                            </Badge>
                        </div>

                        <div className="space-y-4">
                            <h2 className="font-playfair text-6xl md:text-8xl font-black text-slate-900 leading-[0.9]">
                                {mediaData.title}
                            </h2>
                            <div className="flex flex-wrap items-center gap-6 text-slate-400 text-sm font-bold uppercase tracking-widest">
                                <span className="flex items-center gap-2"><Calendar size={18} className="text-[#EAB308]" /> {mediaData.releaseYear}</span>
                                <span className="flex items-center gap-2"><User size={18} className="text-[#EAB308]" /> {mediaData.director}</span>
                                <div className="flex gap-2">
                                    {mediaData.genres.map((g) => (
                                        <span key={g} className="px-3 py-1 rounded-full bg-slate-50 border border-slate-100 text-[10px] text-slate-600">{g}</span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <p className="text-slate-600 text-xl leading-relaxed max-w-2xl font-medium">
                            {mediaData.synopsis}
                        </p>

                        {/* Top Cast Section */}
                        <div className="space-y-4">
                            <h4 className="font-playfair text-2xl font-black text-slate-900">Featured Cast</h4>
                            <div className="flex gap-10">
                                {mediaData.cast.map((c) => (
                                    <div key={c.name} className="flex flex-col group/cast">
                                        <span className="text-slate-900 font-black text-lg tracking-tight group-hover/cast:text-[#EAB308] transition-colors">{c.name}</span>
                                        <span className="text-xs text-[#EAB308] font-black uppercase tracking-widest">{c.role}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <Separator className="bg-slate-100" />

                        {/* Featured Review Snippet - Light Stylized */}
                        <div className="bg-slate-50 p-6 rounded-2xl border-l-8 border-[#EAB308] shadow-sm">
                            <p className="text-slate-700 italic text-lg font-medium">
                                "{mediaData.review.content}"
                            </p>
                            <p className="text-[#EAB308] text-xs font-black mt-3 uppercase tracking-[0.3em]">— {mediaData.review.user}</p>
                        </div>

                        {/* Primary Actions */}
                        <div className="flex flex-wrap gap-4 pt-4">
                            <Button asChild className="h-14 bg-[#EAB308] px-8 text-lg font-bold text-white border-2 border-[#EAB308] hover:bg-transparent hover:border-[#EAB308] hover:border-2 hover:text-[#EAB308] cursor-pointer">
                                <a href={mediaData.streamingLink} target="_blank" rel="noopener noreferrer">
                                    <Play className="mr-3 h-6 w-6 fill-current" /> Play Now
                                </a>
                            </Button>
                            <Button variant="outline" className="h-14 border-2 border-[#EAB308] px-8 text-lg text-[#EAB308] font-bold bg-transparent hover:bg-[#EAB308] hover:border-[#EAB308] hover:border-2 hover:text-white cursor-pointer">
                                <Plus size={24} /> Add Watchlist
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}