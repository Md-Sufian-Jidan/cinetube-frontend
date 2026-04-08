"use client";

import { useMemo, useState } from "react";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import MediaCta from "./MediaCta";
import MediaPagination from "./MediaPagination";
import { MovieCard } from "../movies/MovieCard";
import { useQuery } from "@tanstack/react-query";
import { getAllMedia } from "@/app/(commonLayout)/all-movie/_actions";
import { ApiResponse } from "@/types/api.types";
import { IMedia, IMediaMeta } from "@/types/media.types";
import { useDebounce } from "@/hooks/useDebounce";

const typeOptions = [
    { label: "All Types", value: "ALL" },
    { label: "Movies", value: "MOVIE" },
    { label: "Series", value: "SERIES" },
];

const pricingOptions = [
    { label: "All Prices", value: "ALL" },
    { label: "Free", value: "FREE" },
    { label: "Premium", value: "PREMIUM" },
];

const sortOptions = [
    { label: "Newest First", value: "latest" },
    { label: "Top Rated", value: "rating" },
    { label: "A → Z", value: "title" },
];

export default function AllMedias() {
    const [searchTerm, setSearchTerm] = useState("");
    const [page, setPage] = useState(1);
    const [mediaType, setMediaType] = useState<string>("ALL");
    const [pricing, setPricing] = useState<string>("ALL");
    const [sortBy, setSortBy] = useState<string>("latest");
    const limit = 8;

    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    const { data, isLoading } = useQuery<ApiResponse<IMedia[]>, Error>({
        queryKey: ['medias', page, limit, debouncedSearchTerm, mediaType, pricing, sortBy],
        queryFn: () => getAllMedia(page, limit, debouncedSearchTerm, mediaType, pricing, sortBy),
    });

    const meta = data?.meta;
    const movies = data?.data || [];

    const activeFilters = useMemo(() => {
        const items = [] as string[];
        if (mediaType !== "ALL") items.push(mediaType);
        if (pricing !== "ALL") items.push(pricing);
        if (sortBy !== "latest") items.push(`Sort: ${sortOptions.find((option) => option.value === sortBy)?.label}`);
        return items;
    }, [mediaType, pricing, sortBy]);

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

                    <div className="grid gap-6 xl:grid-cols-[minmax(320px,1fr)_auto] xl:items-end">
                        <div className="relative w-full">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                            <Input
                                placeholder="Search movies, series..."
                                className="pl-12 h-14 rounded-full border-slate-200 bg-white shadow-xl shadow-slate-200/50 focus:ring-[#EAB308]"
                                value={searchTerm}
                                onChange={(e) => {
                                    setSearchTerm(e.target.value);
                                    setPage(1);
                                }}
                            />
                        </div>
                        <Button
                            variant="outline"
                            onClick={() => {
                                setMediaType("ALL");
                                setPricing("ALL");
                                setSortBy("latest");
                                setPage(1);
                            }}
                            className="rounded-full h-14 px-8 gap-2 border-slate-200 font-bold hover:bg-[#EAB308]/10 transition-colors"
                        >
                            <Filter size={18} className="text-slate-600" /> Reset filters
                        </Button>
                    </div>

                    <div className="mt-8 grid gap-4 sm:grid-cols-3">
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700">Category</label>
                            <select
                                value={mediaType}
                                onChange={(e) => {
                                    setMediaType(e.target.value);
                                    setPage(1);
                                }}
                                className="h-14 w-full rounded-2xl border border-slate-200 bg-white px-4 text-slate-700 shadow-sm outline-none transition focus:border-[#EAB308]"
                            >
                                {typeOptions.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700">Pricing</label>
                            <select
                                value={pricing}
                                onChange={(e) => {
                                    setPricing(e.target.value);
                                    setPage(1);
                                }}
                                className="h-14 w-full rounded-2xl border border-slate-200 bg-white px-4 text-slate-700 shadow-sm outline-none transition focus:border-[#EAB308]"
                            >
                                {pricingOptions.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700">Sort by</label>
                            <select
                                value={sortBy}
                                onChange={(e) => {
                                    setSortBy(e.target.value);
                                    setPage(1);
                                }}
                                className="h-14 w-full rounded-2xl border border-slate-200 bg-white px-4 text-slate-700 shadow-sm outline-none transition focus:border-[#EAB308]"
                            >
                                {sortOptions.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {activeFilters.length > 0 && (
                        <div className="mt-6 flex flex-wrap gap-2">
                            {activeFilters.map((filter) => (
                                <span key={filter} className="rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
                                    {filter}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Movie Grid Section */}
            <section className="container mx-auto px-6 py-20">
                {isLoading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[...Array(limit)].map((_, i) => (
                            <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
                                <div className="aspect-2/3 bg-slate-200"></div>
                                <div className="p-4 space-y-3">
                                    <div className="flex justify-between items-start">
                                        <div className="h-5 bg-slate-200 rounded w-3/4"></div>
                                        <div className="h-6 w-12 bg-slate-200 rounded"></div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="h-4 bg-slate-200 rounded w-full"></div>
                                        <div className="h-4 bg-slate-200 rounded w-2/3"></div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div className="h-3 bg-slate-200 rounded w-1/2"></div>
                                        <div className="h-3 bg-slate-200 rounded w-1/4"></div>
                                    </div>
                                    <div className="h-10 bg-slate-200 rounded-xl w-full"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : movies.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                    {meta && (
                        <MediaPagination
                            meta={meta as IMediaMeta}
                            onPageChange={(newPage: number) => setPage(newPage)}
                        />
                    )}
                </div>
            </section>

            <MediaCta />
        </div>
    );
}