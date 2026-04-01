import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ExternalLink, Star, Calendar, User, Film } from "lucide-react";
import Image from "next/image";
import { getMediaById } from "../_actions";
import Link from "next/link";
import ReviewSection from "@/components/modules/media/ReviewSection";

interface PageProps {
    params: Promise<{ id: string }>;
}

export default async function MovieDetailsPage({ params }: PageProps) {
    const { id } = await params;
    const res = await getMediaById(id);
    const movie = res.data?.media;
    const reviews = res.data?.reviews || [];

    if (!movie) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-xl font-bold text-slate-900">Movie not found</p>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-[#FAFAFA] font-sans text-black">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    {/* Left Column: Poster */}
                    <div className="md:col-span-4">
                        <div className="sticky top-8">
                            <div className="relative aspect-[2/3] rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
                                <Image
                                    src={movie.posterUrl}
                                    alt={movie.title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                            <Link href={movie.posterUrl}>
                                <Button className="w-full h-12 bg-[#EAB308] px-8 text-lg font-bold text-[#0B0E14] border-2 border-[#EAB308] hover:bg-transparent hover:border-[#EAB308] hover:border-2 hover:text-[#EAB308] cursor-pointer mt-5">
                                    <ExternalLink className="w-4 h-4" />
                                    Watch on {movie.type === "MOVIE" ? "Cinema" : "Streaming"}
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Right Column: Details */}
                    <div className="md:col-span-8 flex flex-col gap-8">
                        <section>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-none">
                                    {movie.type}
                                </Badge>
                                <Badge variant="outline" className="border-slate-300 text-slate-600">
                                    {movie.pricing}
                                </Badge>
                            </div>

                            <h1 className="text-5xl md:text-6xl font-serif font-bold tracking-tight text-slate-900 mb-4">
                                {movie.title}
                            </h1>

                            <div className="flex items-center gap-6 text-slate-500 text-sm mb-6">
                                <div className="flex items-center gap-1.5">
                                    <Calendar className="w-4 h-4" />
                                    <span>{movie.releaseYear}</span>
                                </div>
                                <div className="flex items-center gap-1.5 text-amber-500 font-medium">
                                    <Star className="w-4 h-4 fill-current" />
                                    <span>New Release</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <Film className="w-4 h-4" />
                                    <span>{movie.director}</span>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {movie.genres.map((genre: any) => (
                                    <span key={genre.name} className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-600 shadow-sm">
                                        {genre.name}
                                    </span>
                                ))}
                            </div>
                        </section>

                        <Separator className="bg-slate-200" />

                        <section>
                            <h2 className="text-xl font-serif font-semibold mb-3">Synopsis</h2>
                            <p className="text-lg leading-relaxed text-slate-600 max-w-2xl">
                                {movie.synopsis}
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-serif font-semibold mb-4">Top Cast</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {movie.cast.map((person: any) => (
                                    <div key={person.name} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-100 shadow-sm transition-hover hover:shadow-md">
                                        <div className="bg-slate-100 p-3 rounded-full">
                                            <User className="w-5 h-5 text-slate-400" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-slate-900">{person.name}</p>
                                            <p className="text-xs text-slate-500 leading-snug mt-1">{person?.bio}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>

                <Separator className="my-10 bg-[#EAEAEA]" />

                {/* New Interactive Review Section */}
                <ReviewSection reviews={reviews} />

            </div>
        </main>
    );
}