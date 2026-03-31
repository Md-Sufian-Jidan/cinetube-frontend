import { getMediaById } from "../_actions";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Star, Calendar } from "lucide-react";
import MediaNotFound from "@/components/modules/media/MediaNotFound";

export default async function MovieDetailsPage({ params }: { params: { id: string } }) {
    const response = await getMediaById(params.id);
    console.log("response", response);
    const movie = response.data;

    console.log("movie", movie)

    if (!movie || !response.success) {
        return <MediaNotFound />
    }

    return (
        <div className="min-h-screen bg-white font-jakarta">
            {/* Hero Section */}
            <div className="relative h-[60vh] w-full">
                <Image
                    src={movie.posterUrl}
                    alt={movie.title}
                    fill
                    className="object-cover brightness-[0.3]"
                />
                <div className="absolute inset-0 flex items-center container mx-auto px-6">
                    <div className="flex flex-col md:flex-row gap-10 items-end">
                        <div className="relative w-64 aspect-[2/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 hidden md:block">
                            <Image src={movie.posterUrl} alt={movie.title} fill className="object-cover" />
                        </div>
                        <div className="space-y-6 text-white pb-4">
                            <Badge className="bg-[#EAB308] text-white border-0 font-black">{movie.pricing}</Badge>
                            <h1 className="text-5xl md:text-7xl font-playfair font-black">{movie.title}</h1>
                            <div className="flex items-center gap-6 font-bold text-slate-300">
                                <div className="flex items-center gap-2"><Calendar size={18} /> {movie.releaseYear}</div>
                                <div className="flex items-center gap-2"><Star size={18} className="text-[#EAB308] fill-[#EAB308]" /> {movie.averageRating}</div>
                                <div className="flex items-center gap-2 uppercase tracking-widest text-xs border border-white/20 px-3 py-1 rounded-full">{movie.type}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-6 py-20">
                <div className="max-w-3xl space-y-8">
                    <h2 className="text-3xl font-playfair font-black text-slate-900">About this {movie.type}</h2>
                    <p className="text-slate-500 text-lg leading-relaxed font-medium">
                        {/* Assuming your IMedia has a description field, otherwise use placeholder */}
                        {movie?.releaseYear || "No description available for this title."}
                    </p>
                </div>
            </div>
        </div>
    );
}