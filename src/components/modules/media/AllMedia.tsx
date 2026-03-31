"use client";

import { useState } from "react";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import MediaCta from "./MediaCta";
import MediaPagination from "./MediaPagination";
import { MovieCard } from "../movies/MovieCard";
import { useQuery } from "@tanstack/react-query";
import { getAllMedia } from "@/app/(commonLayout)/all-movie/_actions";
import { IMedia, IMediaMeta } from "@/types/media.types";
import { useDebounce } from "@/hooks/useDebounce";

export default function AllMedias() {
    const [searchTerm, setSearchTerm] = useState("");
    const [page, setPage] = useState(1);
    const limit = 8;

    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    const { data, isLoading } = useQuery({
        queryKey: ['medias', page, limit, debouncedSearchTerm],
        queryFn: () => getAllMedia(page, limit, debouncedSearchTerm),
    });

    const meta = data?.meta;
    const movies = (data?.data || []) as IMedia[];

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
                                onChange={(e) => {
                                    setSearchTerm(e.target.value);
                                    setPage(1); // Reset to page 1 on new search
                                }}
                            />
                        </div>
                        <Button variant="outline" className="rounded-full h-14 px-8 gap-2 border-slate-200 font-bold hover:bg-[#EAB308]/10 group">
                            <Filter size={18} className="group-hover:rotate-180 transition-transform duration-500" /> Filters
                        </Button>
                    </div>
                </div>
            </section>

            {/* Movie Grid Section */}
            <section className="container mx-auto px-6 py-20">
                {isLoading ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 animate-pulse">
                        {[...Array(limit)].map((_, i) => (
                            <div key={i} className="aspect-[2/3] bg-slate-100 rounded-2xl" />
                        ))}
                    </div>
                ) : movies.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                        {movies.map((movie: IMedia) => (
                            <MovieCard key={movie.id} movie={movie} />
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-20 space-y-4">
                        <div className="bg-slate-50 p-6 rounded-full">
                            <Search size={48} className="text-slate-300" />
                        </div>
                        <div className="text-center">
                            <p className="text-xl font-bold text-slate-900">No movies found</p>
                            <p className="text-slate-500">Try adjusting your search or filters.</p>
                        </div>
                    </div>
                )}

                <div className="mt-16 flex items-center justify-center">
                    {
                        <MediaPagination
                            meta={meta}
                            onPageChange={(newPage: number) => setPage(newPage)}
                        />
                    }
                </div>
            </section>

            {/* "Write a Review" CTA Banner */}
            <MediaCta />
        </div>
    );
}