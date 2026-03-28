"use client";

import React, { useState } from "react";
import {
    Search,
    Play,
    Star,
    ChevronLeft,
    ChevronRight,
    Filter,
    ArrowRight
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import MediaCta from "./MediaCta";
import MediaPagination from "./MediaPagination";
import MediaCard from "./MediaCard";

export default function PublicMoviesPage() {
    const [searchTerm, setSearchTerm] = useState("");

    // Using the data from your API response
    const movies = [
        { id: "1", title: "Friends", releaseYear: 1994, type: "SERIES", pricing: "FREE", averageRating: 4.8, posterUrl: "https://image.tmdb.org/t/p/w500/f496p9HiSms5p6gJu2SIvXnSFA4.jpg", genres: ["Comedy", "Romance"], reviewCount: 124 },
        { id: "2", title: "Stranger Things", releaseYear: 2016, type: "SERIES", pricing: "PREMIUM", averageRating: 4.9, posterUrl: "https://image.tmdb.org/t/p/w500/49WJfev0moxmBEEpA7R690PjH6m.jpg", genres: ["Drama", "Horror"], reviewCount: 89 },
        { id: "3", title: "The Dark Knight", releaseYear: 2008, type: "MOVIE", pricing: "FREE", averageRating: 5.0, posterUrl: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDr9p1v3hvZBnbiBRXm.jpg", genres: ["Action", "Crime"], reviewCount: 256 },
        { id: "4", title: "Breaking Bad", releaseYear: 2008, type: "SERIES", pricing: "PREMIUM", averageRating: 4.9, posterUrl: "https://image.tmdb.org/t/p/w500/ggm8bbEA9gnxa9KiYvH0o9ihr2W.jpg", genres: ["Crime", "Drama"], reviewCount: 312 },
    ];

    const filteredMovies = movies.filter(movie =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="bg-white min-h-screen font-jakarta">
            {/* Hero Section / Header */}
            <section className="bg-slate-50 border-b border-slate-100 py-16 px-6 container-narrow">
                <div className="max-w-7xl mx-auto space-y-6 text-center md:text-left">
                    <h1 className="font-playfair text-4xl md:text-6xl font-black text-slate-900 leading-tight">
                        Discover Your Next <br />
                        <span className="text-[#EAB308]">Cinematic Journey</span>
                    </h1>
                    <p className="text-slate-500 max-w-xl text-lg">
                        Browse our curated library of world-class movies and series.
                        Share your thoughts and join the community.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 items-center pt-4">
                        <div className="relative w-full md:w-96">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                            <Input
                                placeholder="Search movies, series..."
                                className="pl-12 h-14 rounded-full border-slate-200 bg-white shadow-xl shadow-slate-200/50 focus:ring-[#EAB308]"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <Button variant="outline" className="rounded-full h-14 px-8 gap-2 border-slate-200 font-bold">
                            <Filter size={18} /> Filters
                        </Button>
                    </div>
                </div>
            </section>

            {/* Movie Grid Section */}
            <section className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                    {filteredMovies.map((movie) => (
                        // <div key={movie.id} className="group cursor-pointer">
                        //     {/* Poster Card */}
                        //     <div className="relative aspect-[2/3] rounded-2xl overflow-hidden shadow-lg transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-[#EAB308]/20">
                        //         <img
                        //             src={movie.posterUrl}
                        //             alt={movie.title}
                        //             className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        //         />

                        //         {/* Pricing Overlay */}
                        //         <div className="absolute top-3 left-3 flex gap-2">
                        //             <Badge className={movie.pricing === "PREMIUM"
                        //                 ? "bg-[#EAB308] text-white border-none shadow-md font-black"
                        //                 : "bg-slate-900/80 backdrop-blur-md text-white border-none shadow-md font-black"}>
                        //                 {movie.pricing}
                        //             </Badge>
                        //         </div>

                        //         {/* Hover Action Overlay */}
                        //         <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        //             <Link href={`/movies/${movie.id}`}>
                        //                 <Button className="bg-[#EAB308] hover:bg-[#EAB308]/90 text-white rounded-full p-4 h-14 w-14 shadow-xl shadow-[#EAB308]/40">
                        //                     <Play fill="currentColor" size={24} className="ml-1" />
                        //                 </Button>
                        //             </Link>
                        //         </div>
                        //     </div>

                        //     {/* Movie Info */}
                        //     <div className="mt-4 space-y-1 px-1">
                        //         <div className="flex justify-between items-start">
                        //             <h3 className="font-bold text-slate-900 text-lg group-hover:text-[#EAB308] transition-colors line-clamp-1">
                        //                 {movie.title}
                        //             </h3>
                        //         </div>

                        //         <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
                        //             <span>{movie.releaseYear}</span>
                        //             <span className="h-1 w-1 bg-slate-300 rounded-full" />
                        //             <span>{movie.type}</span>
                        //         </div>

                        //         <div className="flex items-center justify-between pt-2">
                        //             <div className="flex items-center gap-1.5 bg-[#EAB308]/10 px-2 py-1 rounded-lg">
                        //                 <Star size={14} className="fill-[#EAB308] text-[#EAB308]" />
                        //                 <span className="text-sm font-black text-[#EAB308]">{movie.averageRating || "New"}</span>
                        //             </div>
                        //             <span className="text-[11px] font-bold text-slate-400 uppercase tracking-tighter">
                        //                 {movie.reviewCount} Reviews
                        //             </span>
                        //         </div>
                        //     </div>
                        // </div>
                        <MediaCard movie={movie} />
                    ))}
                </div>

                {/* Public Pagination */}
                {/* <div className="mt-16 flex items-center justify-center gap-4">
                    <Button variant="ghost" className="rounded-full h-12 w-12 border border-slate-100 shadow-sm text-slate-400">
                        <ChevronLeft size={20} />
                    </Button>
                    <div className="flex gap-2">
                        {[1, 2, 3].map((page) => (
                            <Button
                                key={page}
                                className={page === 1
                                    ? "bg-[#EAB308] text-white rounded-full h-12 w-12 font-black shadow-lg shadow-[#EAB308]/20"
                                    : "bg-transparent text-slate-400 rounded-full h-12 w-12 hover:bg-slate-50 font-bold"}
                            >
                                {page}
                            </Button>
                        ))}
                    </div>
                    <Button variant="ghost" className="rounded-full h-12 w-12 border border-slate-100 shadow-sm text-[#EAB308]">
                        <ChevronRight size={20} />
                    </Button>
                </div> */}
                <MediaPagination />
            </section>

            {/* "Write a Review" CTA Banner */}
            <MediaCta />
        </div>
    );
}