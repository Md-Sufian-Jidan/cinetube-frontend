import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Play, Star } from "lucide-react";
import { IMedia } from "@/types/media.types";

export default function MediaCard({ movie }: { movie: IMedia }) {
    return (
        <Link href={`/all-movie/${movie.id}`} className="group block">
            <div className="relative aspect-[2/3] rounded-2xl overflow-hidden shadow-lg transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-[#EAB308]/20">
                <img
                    src={movie.posterUrl}
                    alt={movie.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute top-3 left-3">
                    <Badge className={movie.pricing === "PREMIUM" ? "bg-[#EAB308]" : "bg-slate-900/80"}>
                        {movie.pricing}
                    </Badge>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-[#EAB308] text-white rounded-full p-4 h-14 w-14 flex items-center justify-center shadow-xl">
                        <Play fill="currentColor" size={24} className="ml-1" />
                    </div>
                </div>
            </div>

            <div className="mt-4 space-y-1">
                <h3 className="font-bold text-slate-900 text-lg group-hover:text-[#EAB308] transition-colors line-clamp-1 font-playfair">
                    {movie.title}
                </h3>
                <div className="flex items-center justify-between text-xs font-bold text-slate-400">
                    <span>{movie.releaseYear} • {movie.type}</span>
                    <div className="flex items-center gap-1 text-[#EAB308]">
                        <Star size={12} className="fill-current" />
                        <span>{movie.averageRating || "0"}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}