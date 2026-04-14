"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { getIconComponent } from "@/lib/iconMapper";
import { categories } from "@/data/data";

export default function Categories() {
    return (
        <section className="bg-[#FAFAFA] py-24 font-jakarta">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="mb-16 text-center space-y-4">
                    <Badge className="bg-[#EAB308] hover:bg-[#EAB308]/90 text-black font-black px-4 py-1 rounded-xl">
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
                    {categories.map((category, index) => {
                        const Icon = getIconComponent(category.icon);
                        return (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <Card className="group relative h-full overflow-hidden border-slate-100 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(234,179,8,0.15)] rounded-xl">
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
                                            <Icon className="h-6 w-6" />
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
                    )
                    })}
                </div>
            </div>
        </section>
    );
}