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
        <section className="bg-[#0B0E14] py-24">
            <div className="container px-6">
                <div className="mb-16 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-playfair text-4xl font-bold text-white md:text-5xl"
                    >
                        What Our <span className="text-[#EAB308]">Viewers</span> Say
                    </motion.h2>
                    <p className="mt-4 text-slate-400 font-dm-sans">
                        Join thousands of cinephiles sharing their passion for the big screen.
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
                            <Card className="relative h-full border-white/5 bg-[#161B22] p-6 transition-all hover:border-[#EAB308]/30">
                                <Quote className="absolute right-6 top-6 h-8 w-8 text-white/5" />

                                <CardContent className="p-0">
                                    <div className="mb-4 flex gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`h-4 w-4 ${i < t.rating ? "fill-[#EAB308] text-[#EAB308]" : "text-slate-600"
                                                    }`}
                                            />
                                        ))}
                                    </div>

                                    <p className="mb-8 text-slate-300 italic leading-relaxed font-dm-sans">
                                        "{t.content}"
                                    </p>

                                    <div className="flex items-center gap-4">
                                        <Avatar className="h-12 w-12 border-2 border-[#EAB308]/20">
                                            <AvatarImage src={t.avatar} alt={t.name} />
                                            <AvatarFallback className="bg-slate-800 text-white">
                                                {t.name[0]}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <h4 className="font-bold text-white">{t.name}</h4>
                                            <p className="text-xs uppercase tracking-wider text-[#EAB308]">
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