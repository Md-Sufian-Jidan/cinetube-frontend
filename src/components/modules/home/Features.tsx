"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Users, Zap, Shield, Search, Heart } from "lucide-react";

const features = [
    {
        icon: <Star className="h-8 w-8" />,
        title: "Expert Reviews",
        description: "Read in-depth reviews from professional critics and fellow cinephiles to make informed viewing decisions.",
        color: "text-[#EAB308]",
    },
    {
        icon: <Users className="h-8 w-8" />,
        title: "Community Driven",
        description: "Connect with like-minded movie enthusiasts, share recommendations, and build your watchlist together.",
        color: "text-[#EAB308]",
    },
    {
        icon: <Zap className="h-8 w-8" />,
        title: "Lightning Fast",
        description: "Stream in ultra-high definition with minimal buffering and instant access to your favorite content.",
        color: "text-[#EAB308]",
    },
    {
        icon: <Shield className="h-8 w-8" />,
        title: "Secure & Private",
        description: "Your data is protected with enterprise-grade security. Watch with peace of mind.",
        color: "text-[#EAB308]",
    },
    {
        icon: <Search className="h-8 w-8" />,
        title: "Smart Search",
        description: "Find exactly what you're looking for with our advanced AI-powered search and recommendation engine.",
        color: "text-[#EAB308]",
    },
    {
        icon: <Heart className="h-8 w-8" />,
        title: "Personalized",
        description: "Get tailored recommendations based on your viewing history and preferences.",
        color: "text-[#EAB308]",
    },
];

export default function Features() {
    return (
        <section className="bg-white py-24 font-jakarta">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="mb-16 text-center space-y-4">
                    <Badge className="bg-[#EAB308] hover:bg-[#EAB308]/90 text-black font-black px-4 py-1 rounded-full">
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
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <Card className="h-full border-slate-100 bg-white p-8 shadow-[0_10px_40px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(234,179,8,0.15)] group rounded-3xl">
                                <CardContent className="p-0">
                                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EAB308]/10 text-[#EAB308] transition-colors group-hover:bg-[#EAB308] group-hover:text-white">
                                        {feature.icon}
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
                    ))}
                </div>
            </div>
        </section>
    );
}