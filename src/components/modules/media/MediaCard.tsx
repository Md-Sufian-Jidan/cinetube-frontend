import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, Star } from "lucide-react";
import Link from "next/link";

export default function MediaCard({ movie }: { movie: any }) {
    return (
        <div key={movie.id} className="group cursor-pointer">
            {/* Poster Card */}
            <div className="relative aspect-[2/3] rounded-2xl overflow-hidden shadow-lg transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-[#EAB308]/20">
                <img
                    src={movie.posterUrl}
                    alt={movie.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Pricing Overlay */}
                <div className="absolute top-3 left-3 flex gap-2">
                    <Badge className={movie.pricing === "PREMIUM"
                        ? "bg-[#EAB308] text-white border-none shadow-md font-black"
                        : "bg-slate-900/80 backdrop-blur-md text-white border-none shadow-md font-black"}>
                        {movie.pricing}
                    </Badge>
                </div>

                {/* Hover Action Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Link href={`/movies/${movie.id}`}>
                        <Button className="bg-[#EAB308] hover:bg-[#EAB308]/90 text-white rounded-full p-4 h-14 w-14 shadow-xl shadow-[#EAB308]/40">
                            <Play fill="currentColor" size={24} className="ml-1" />
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Movie Info */}
            <div className="mt-4 space-y-1 px-1">
                <div className="flex justify-between items-start">
                    <h3 className="font-bold text-slate-900 text-lg group-hover:text-[#EAB308] transition-colors line-clamp-1">
                        {movie.title}
                    </h3>
                </div>

                <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
                    <span>{movie.releaseYear}</span>
                    <span className="h-1 w-1 bg-slate-300 rounded-full" />
                    <span>{movie.type}</span>
                </div>

                <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-1.5 bg-[#EAB308]/10 px-2 py-1 rounded-lg">
                        <Star size={14} className="fill-[#EAB308] text-[#EAB308]" />
                        <span className="text-sm font-black text-[#EAB308]">{movie.averageRating || "New"}</span>
                    </div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-tighter">
                        {movie.reviewCount} Reviews
                    </span>
                </div>
            </div>
        </div>
    )
}