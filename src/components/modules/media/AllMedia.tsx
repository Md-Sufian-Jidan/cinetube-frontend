"use client";

import { useState } from "react";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import MediaCta from "./MediaCta";
import MediaPagination from "./MediaPagination";
import MediaCard from "./MediaCard";
import { useQuery } from "@tanstack/react-query";
import { getAllMedia } from "@/app/(commonLayout)/all-movie/_actions";
import { IMedia, IMediaMeta } from "@/types/media.types";

export default function PublicMoviesPage() {
    const [searchTerm, setSearchTerm] = useState("");

    const { data } = useQuery({
        queryKey: ['medias'],
        queryFn: getAllMedia,
    });

    const meta = data && 'meta' in data ? data.meta : undefined;
    const movies = (data && 'data' in data ? data.data : []) as IMedia[];

    const filteredMovies = movies.filter((movie: IMedia) =>
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
            <section className="container mx-auto px-6 py-20">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                    {filteredMovies.map((movie: IMedia) => (
                        <MediaCard movie={movie} />
                    ))}
                </div>

                {/* Public Pagination */}
                <div className="mt-16 flex items-center justify-center">
                    {meta && <MediaPagination meta={meta as unknown as IMediaMeta} />}
                </div>
            </section>

            {/* "Write a Review" CTA Banner */}
            <MediaCta />
        </div>
    );
}