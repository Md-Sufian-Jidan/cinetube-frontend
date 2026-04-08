"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Film, Tv, Star, Heart, Zap, Crown } from "lucide-react";
import Image from "next/image";

const categories = [
    {
        title: "Action & Adventure",
        description: "High-octane thrills and epic journeys",
        icon: <Zap className="h-6 w-6" />,
        image: "https://images.unsplash.com/photo-1509347528160-d04b002dca1b?q=80&w=2070",
        count: "2.5k+",
    },
    {
        title: "Drama",
        description: "Emotional stories that touch the soul",
        icon: <Heart className="h-6 w-6" />,
        image: "https://images.unsplash.com/photo-1489599735734-79b4e62e8c2a?q=80&w=2070",
        count: "3.2k+",
    },
    {
        title: "Comedy",
        description: "Laugh-out-loud entertainment",
        icon: <Star className="h-6 w-6" />,
        image: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=2070",
        count: "1.8k+",
    },
    {
        title: "Sci-Fi & Fantasy",
        description: "Imaginative worlds beyond reality",
        icon: <Crown className="h-6 w-6" />,
        image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?q=80&w=2070",
        count: "1.5k+",
    },
    {
        title: "Documentary",
        description: "Real stories from around the world",
        icon: <Film className="h-6 w-6" />,
        image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2070",
        count: "950+",
    },
    {
        title: "TV Series",
        description: "Binge-worthy episodic content",
        icon: <Tv className="h-6 w-6" />,
        image: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&w=2070",
        count: "4.1k+",
    },
];

export default function Categories() {
    return (
        <section className="bg-[#FAFAFA] py-24 font-jakarta">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="mb-16 text-center space-y-4">
                    <Badge className="bg-[#EAB308] hover:bg-[#EAB308]/90 text-black font-black px-4 py-1 rounded-full">
                        EXPLORE GENRES
                    </Badge>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-playfair text-4xl font-black text-slate-900 md:text-6xl"
                    >
                        Discover Your <span className="text-[#EAB308]">Favorite</span> Genres
                    </motion.h2>
                    <p className="mx-auto max-w-2xl text-slate-500 font-medium text-lg">
                        From heart-pounding action to thought-provoking documentaries, find content that matches your mood.
                    </p>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {categories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <Card className="group relative h-full overflow-hidden border-slate-100 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(234,179,8,0.15)] rounded-3xl">
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src={category.image}
                                        alt={category.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                </div>
                                <CardContent className="p-6">
                                    <div className="mb-4 flex items-center justify-between">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EAB308]/10 text-[#EAB308] group-hover:bg-[#EAB308] group-hover:text-white transition-colors">
                                            {category.icon}
                                        </div>
                                        <Badge variant="secondary" className="bg-slate-100 text-slate-600 font-bold">
                                            {category.count} titles
                                        </Badge>
                                    </div>
                                    <h3 className="mb-2 font-playfair text-xl font-black text-slate-900 group-hover:text-[#EAB308] transition-colors">
                                        {category.title}
                                    </h3>
                                    <p className="text-slate-600 font-medium">
                                        {category.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}