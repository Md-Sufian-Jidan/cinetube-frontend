"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
    {
        name: "Alex Rivera",
        role: "Movie Critic",
        content: "CineTube has completely changed how I track my watchlist. The UI is sleek, and the rating system is incredibly intuitive.",
        avatar: "https://i.pravatar.cc/150?u=alex",
        rating: 5,
    },
    {
        name: "Sarah Jenkins",
        role: "Premium Member",
        content: "The streaming quality is top-notch. I love being able to see what my friends are watching and reading their spoiler-free reviews.",
        avatar: "https://i.pravatar.cc/150?u=sarah",
        rating: 5,
    },
    {
        name: "Marcus Chen",
        role: "Director",
        content: "As a filmmaker, I appreciate the focus on metadata and cast details. It feels like a platform built by people who actually love cinema.",
        avatar: "https://i.pravatar.cc/150?u=marcus",
        rating: 4,
    },
];

export default function Testimonials() {
    return (
        <section className="bg-white py-20 font-jakarta">
            <div className="container mx-auto px-6">
                <div className="mb-16 text-center space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-playfair text-4xl font-black text-slate-900 md:text-6xl"
                    >
                        What Our <span className="text-[#EAB308]">Viewers</span> Say
                    </motion.h2>
                    <p className="mx-auto max-w-2xl text-slate-500 font-medium text-lg">
                        Join thousands of cinephiles sharing their passion for the big screen and discovering new favorites every day.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={t.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <Card className="relative h-full border-slate-100 bg-white p-8 shadow-[0_10px_40px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(234,179,8,0.15)] group rounded-3xl">
                                {/* Decorative Quote Mark */}
                                <Quote className="absolute right-8 top-8 h-12 w-12 text-slate-50 opacity-10 group-hover:text-[#EAB308] group-hover:opacity-20 transition-all duration-500" />

                                <CardContent className="p-0 relative z-10">
                                    <div className="mb-6 flex gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`h-5 w-5 ${i < t.rating ? "fill-[#EAB308] text-[#EAB308]" : "text-slate-200"
                                                    }`}
                                            />
                                        ))}
                                    </div>

                                    <p className="mb-8 text-slate-600 text-lg italic font-medium leading-relaxed">
                                        "{t.content}"
                                    </p>

                                    <div className="flex items-center gap-4 border-t border-slate-50 pt-6">
                                        <Avatar className="h-14 w-14 border-4 border-slate-50 shadow-sm">
                                            <AvatarImage src={t.avatar} alt={t.name} />
                                            <AvatarFallback className="bg-slate-100 text-slate-400 font-bold">
                                                {t.name[0]}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <h4 className="font-black text-slate-900 text-lg leading-tight">{t.name}</h4>
                                            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#EAB308] mt-1">
                                                {t.role}
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}