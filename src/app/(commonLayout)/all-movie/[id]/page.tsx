"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    Play,
    Calendar,
    User,
    Star,
    ChevronLeft,
    Share2,
    Bookmark,
    CheckCircle2,
    Clock
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

// This would typically come from your params/API
const movieData = {
    id: "bf837a2e-6082-4aeb-973d-bdb2d708b648",
    title: "Sherlock",
    synopsis: "A modern update finds the famous sleuth and his doctor partner solving crime in 21st century London.",
    releaseYear: 2010,
    director: "Mark Gatiss & Steven Moffat",
    type: "SERIES",
    pricing: "PREMIUM",
    streamingLink: "https://www.netflix.com/title/70202589",
    posterUrl: "https://image.tmdb.org/t/p/w500/789U3Y9Y9Y9Y9Y9Y9Y9Y9Y9Y9Y.jpg", // Note: Ensure this URL is valid
    averageRating: 0,
    totalReviews: 0,
    genres: ["Crime", "Drama", "Mystery"], // Mapping the names from your object array
    cast: [
        { name: "Benedict Cumberbatch", role: "Sherlock Holmes" },
        { name: "Martin Freeman", role: "Dr. John Watson" }
    ],
    status: "PENDING"
};

export default function MovieDetailsPage() {
    return (
        <main className="min-h-screen bg-white font-jakarta pb-20">
            {/* Navigation Header */}
            <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
                <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                    <Link href="/movies" className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors font-bold text-sm">
                        <ChevronLeft size={20} />
                        Back to Explore
                    </Link>
                    <div className="flex gap-4">
                        <Button variant="ghost" size="icon" className="rounded-full text-slate-500"><Share2 size={20} /></Button>
                        <Button variant="ghost" size="icon" className="rounded-full text-slate-500"><Bookmark size={20} /></Button>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative w-full pt-12">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                        {/* Left: Poster Column */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="lg:col-span-4"
                        >
                            <div className="relative aspect-[2/3] w-full overflow-hidden rounded-[2.5rem] shadow-[0_40px_80px_rgba(0,0,0,0.15)] border border-slate-100">
                                <Image
                                    src={movieData.posterUrl}
                                    alt={movieData.title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                {movieData.pricing === "PREMIUM" && (
                                    <div className="absolute top-6 right-6 bg-[#EAB308] text-white px-4 py-1 rounded-full text-xs font-black tracking-widest shadow-lg">
                                        PREMIUM
                                    </div>
                                )}
                            </div>
                        </motion.div>

                        {/* Right: Content Column */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="lg:col-span-8 lg:pt-8"
                        >
                            <div className="flex flex-wrap gap-2 mb-6">
                                {movieData.genres.map((genre) => (
                                    <Badge key={genre} variant="secondary" className="bg-slate-50 text-slate-600 border-slate-100 px-4 py-1 text-xs font-bold uppercase tracking-wider">
                                        {genre}
                                    </Badge>
                                ))}
                                <Badge variant="outline" className="border-slate-200 text-slate-400 px-4 py-1 text-xs font-bold uppercase tracking-wider">
                                    {movieData.type}
                                </Badge>
                            </div>

                            <h1 className="font-playfair text-6xl md:text-8xl font-black text-slate-900 leading-none mb-6">
                                {movieData.title}
                            </h1>

                            <div className="flex flex-wrap items-center gap-8 mb-8 text-slate-500">
                                <div className="flex items-center gap-2">
                                    <div className="flex gap-1 text-[#EAB308]">
                                        <Star size={18} className="fill-current" />
                                    </div>
                                    <span className="text-slate-900 font-black text-lg">{movieData.averageRating > 0 ? movieData.averageRating.toFixed(1) : "N/A"}</span>
                                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">({movieData.totalReviews} Reviews)</span>
                                </div>
                                <div className="flex items-center gap-2 font-bold text-sm">
                                    <Calendar size={18} className="text-[#EAB308]" />
                                    {movieData.releaseYear}
                                </div>
                                <div className="flex items-center gap-2 font-bold text-sm">
                                    <CheckCircle2 size={18} className="text-green-500" />
                                    {movieData.status}
                                </div>
                            </div>

                            <p className="text-xl text-slate-600 leading-relaxed font-medium mb-10 max-w-3xl">
                                {movieData.synopsis}
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
                                <div>
                                    <h4 className="text-xs font-black text-[#EAB308] uppercase tracking-[0.2em] mb-3">Director</h4>
                                    <p className="text-lg font-black text-slate-900 flex items-center gap-2">
                                        <User size={20} className="text-slate-300" />
                                        {movieData.director}
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-xs font-black text-[#EAB308] uppercase tracking-[0.2em] mb-3">Top Cast</h4>
                                    <div className="flex gap-6">
                                        {movieData.cast.map((actor) => (
                                            <div key={actor.name} className="flex flex-col">
                                                <span className="text-slate-900 font-black">{actor.name}</span>
                                                <span className="text-xs text-slate-400 font-bold">{actor.role}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <Separator className="bg-slate-100 mb-10" />

                            <div className="flex flex-wrap gap-4">
                                <Button asChild className="h-16 px-12 bg-slate-900 text-white font-black rounded-2xl hover:bg-slate-800 transition-all text-lg shadow-xl shadow-slate-200">
                                    <a href={movieData.streamingLink} target="_blank" rel="noopener noreferrer">
                                        <Play className="mr-3 h-6 w-6 fill-current" /> Stream on Netflix
                                    </a>
                                </Button>
                                <Button variant="outline" className="h-16 px-10 border-slate-200 text-slate-900 font-black rounded-2xl text-lg hover:bg-slate-50 transition-all">
                                    Write a Review
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* More Info Tab Section */}
            <section className="container mx-auto px-6 mt-24">
                <div className="bg-slate-50 rounded-[3rem] p-12 border border-slate-100">
                    <div className="max-w-2xl">
                        <h3 className="font-playfair text-4xl font-black text-slate-900 mb-4">The Detective's Log</h3>
                        <p className="text-slate-600 font-medium leading-relaxed">
                            Sherlock Holmes has always been a man of the future—in 1895, he was at the cutting edge of science.
                            Now, he returns to 2026. Same high-functioning sociopath, new set of gadgets.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}