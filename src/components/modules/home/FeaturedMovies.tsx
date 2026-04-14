"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MovieCard } from "../movies/MovieCard";
import Link from "next/link";
import { initialMedia } from "@/data/data";

export default function FeaturedMovies() {
    const featuredMovies = initialMedia.slice(0, 4);

    return (
        <section className="bg-slate-50 py-20 font-jakarta">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="mb-12 text-center space-y-4">
                    <Badge className="bg-[#EAB308] hover:bg-[#EAB308]/90 text-black font-black px-4 py-1 rounded-xl">
                        FEATURED MOVIES
                    </Badge>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-playfair text-4xl font-black text-slate-900 md:text-5xl"
                    >
                        Discover Amazing <span className="text-[#EAB308]">Stories</span>
                    </motion.h2>
                    <p className="mx-auto max-w-2xl text-slate-500 font-medium text-lg">
                        Explore our handpicked collection of critically acclaimed movies and series that will captivate your imagination.
                    </p>
                </div>

                {/* Movies Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {featuredMovies.map((movie, index) => (
                        <motion.div
                            key={movie.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <MovieCard movie={movie} />
                        </motion.div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center">
                    <Link href="/all-movie">
                        <Button className="h-12 rounded-xl bg-[#EAB308] px-8 text-lg font-bold text-white border-2 border-[#EAB308] hover:bg-transparent hover:border-[#EAB308] hover:border-2 hover:text-[#EAB308] cursor-pointer">
                            View All Movies
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}