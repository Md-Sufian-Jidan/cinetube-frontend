"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { features } from "@/data/data";
import { getIconComponent } from "@/lib/iconMapper";

export default function Features() {
    return (
        <section className="bg-white py-24 font-jakarta">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="mb-16 text-center space-y-4">
                    <Badge className="bg-[#EAB308] hover:bg-[#EAB308]/90 text-black font-black px-4 py-1 rounded-xl">
                        WHY CHOOSE US
                    </Badge>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-playfair text-4xl font-black text-slate-900 md:text-6xl"
                    >
                        Unleash the Power of <span className="text-[#EAB308]">CineTube</span>
                    </motion.h2>
                    <p className="mx-auto max-w-2xl text-slate-500 font-medium text-lg">
                        Discover the features that make CineTube the ultimate destination for movie lovers worldwide.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => {
                        const Icon = getIconComponent(feature.icon);
                        return (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                            >
                                <Card className="h-full border-slate-100 bg-white p-8 shadow-[0_10px_40px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(234,179,8,0.15)] group rounded-xl">
                                    <CardContent className="p-0">
                                        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-[#EAB308]/10 text-[#EAB308] transition-colors group-hover:bg-[#EAB308] group-hover:text-white">
                                            <Icon className="h-8 w-8" />
                                        </div>
                                        <h3 className="mb-4 font-playfair text-2xl font-black text-slate-900 group-hover:text-[#EAB308] transition-colors">
                                            {feature.title}
                                        </h3>
                                        <p className="text-slate-600 font-medium leading-relaxed">
                                            {feature.description}
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