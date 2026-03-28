"use client"

import { useQuery } from "@tanstack/react-query"
import { getAllMedia } from "@/app/(commonLayout)/all-movie/_actions"
import { useState } from "react";
import {
    Search,
    Plus,
    MoreHorizontal,
    ExternalLink,
    Film,
    Tv,
    Star,
    ChevronLeft,
    ChevronRight
} from "lucide-react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function AllMedia() {
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    // const { data: movies } = useQuery({
    //     queryKey: ['medias'],
    //     queryFn: () => getAllMedia(),
    // });
    const movies = [
        { id: "1", title: "Friends", releaseYear: 1994, type: "SERIES", pricing: "FREE", averageRating: 4.8, posterUrl: "https://image.tmdb.org/t/p/w500/f496p9HiSms5p6gJu2SIvXnSFA4.jpg", genres: ["Comedy", "Romance"] },
        { id: "2", title: "Stranger Things", releaseYear: 2016, type: "SERIES", pricing: "PREMIUM", averageRating: 4.9, posterUrl: "https://image.tmdb.org/t/p/w500/49WJfev0moxmBEEpA7R690PjH6m.jpg", genres: ["Drama", "Horror"] },
        { id: "3", title: "The Dark Knight", releaseYear: 2008, type: "MOVIE", pricing: "FREE", averageRating: 5.0, posterUrl: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDr9p1v3hvZBnbiBRXm.jpg", genres: ["Action", "Crime"] },
        { id: "4", title: "Breaking Bad", releaseYear: 2008, type: "SERIES", pricing: "PREMIUM", averageRating: 4.9, posterUrl: "https://image.tmdb.org/t/p/w500/ggm8bbEA9gnxa9KiYvH0o9ihr2W.jpg", genres: ["Crime", "Drama"] },
    ];
    console.log(movies);

    const filteredMovies = movies?.filter(movie =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <div className="p-6 space-y-6 bg-white min-h-screen font-jakarta">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="font-playfair text-3xl font-bold text-slate-900">
                        Media <span className="text-[#EAB308]">Library</span>
                    </h1>
                    <p className="text-sm text-slate-500">Manage your movies, series, and pricing tiers.</p>
                </div>
                <Button className="bg-[#EAB308] hover:bg-[#EAB308]/90 text-white font-bold gap-2 shadow-lg shadow-[#EAB308]/20">
                    <Plus size={18} /> Add New Media
                </Button>
            </div>

            {/* Control Bar: Search */}
            <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
                <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <Input
                        placeholder="Search by title..."
                        className="pl-10 bg-white border-slate-200 focus:ring-[#EAB308]"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            {/* Table Section */}
            <div className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm">
                <Table>
                    <TableHeader className="bg-slate-50/50">
                        <TableRow>
                            <TableHead className="w-[80px]">Poster</TableHead>
                            <TableHead className="font-bold text-slate-900">Title & Year</TableHead>
                            <TableHead className="font-bold text-slate-900 text-center">Type</TableHead>
                            <TableHead className="font-bold text-slate-900">Genres</TableHead>
                            <TableHead className="font-bold text-slate-900 text-center">Pricing</TableHead>
                            <TableHead className="text-right font-bold text-slate-900">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filteredMovies?.map((movie: any) => (
                            <TableRow key={movie.id} className="hover:bg-slate-50/30 transition-colors group">
                                <TableCell>
                                    <img
                                        src={movie.posterUrl}
                                        alt={movie.title}
                                        className="w-12 h-16 object-cover rounded-md shadow-sm border border-slate-100"
                                    />
                                </TableCell>
                                <TableCell>
                                    <div className="flex flex-col">
                                        <span className="font-bold text-slate-900 group-hover:text-[#EAB308] transition-colors cursor-pointer">
                                            {movie.title}
                                        </span>
                                        <span className="text-xs text-slate-400">{movie.releaseYear}</span>
                                    </div>
                                </TableCell>
                                <TableCell className="text-center">
                                    <div className="flex justify-center">
                                        {movie.type === "SERIES" ? (
                                            <Badge variant="outline" className="gap-1 border-blue-100 text-blue-600 bg-blue-50/30">
                                                <Tv size={12} /> Series
                                            </Badge>
                                        ) : (
                                            <Badge variant="outline" className="gap-1 border-purple-100 text-purple-600 bg-purple-50/30">
                                                <Film size={12} /> Movie
                                            </Badge>
                                        )}
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className="flex flex-wrap gap-1">
                                        {movie.genres.map((g: any, i: any) => (
                                            <span key={i} className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded uppercase">
                                                {g}
                                            </span>
                                        ))}
                                    </div>
                                </TableCell>
                                <TableCell className="text-center">
                                    <Badge className={movie.pricing === "PREMIUM"
                                        ? "bg-[#EAB308] text-white hover:bg-[#EAB308]"
                                        : "bg-slate-900 text-white hover:bg-slate-900"}>
                                        {movie.pricing}
                                    </Badge>
                                </TableCell>
                                <TableCell className="text-right">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" className="h-8 w-8 p-0">
                                                <MoreHorizontal className="h-4 w-4" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end" className="font-jakarta">
                                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                            <DropdownMenuItem className="gap-2 cursor-pointer">
                                                <ExternalLink size={14} /> View Details
                                            </DropdownMenuItem>
                                            <DropdownMenuItem className="gap-2 cursor-pointer text-red-600">
                                                Delete Media
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center justify-between py-4 border-t border-slate-100">
                <p className="text-xs text-slate-500 font-medium">
                    Showing <span className="text-slate-900">1 to {filteredMovies?.length}</span> of 5 media
                </p>
                <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="h-8 w-8 p-0 rounded-lg">
                        <ChevronLeft size={16} />
                    </Button>
                    <Button variant="outline" size="sm" className="h-8 w-8 p-0 rounded-lg bg-slate-900 text-white border-slate-900">
                        1
                    </Button>
                    <Button variant="outline" size="sm" className="h-8 w-8 p-0 rounded-lg">
                        <ChevronRight size={16} />
                    </Button>
                </div>
            </div>
        </div>
    )
}