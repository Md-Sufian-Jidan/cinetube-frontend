"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BlogHero() {
    return (
        <section className="relative pt-32 pb-20 px-6 bg-[#fafafa] dark:bg-black overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-tight font-playfair">
                        Behind the <span className="text-[#EAB308] italic">Scenes</span>
                    </h1>
                    <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
                        Stay updated with the latest news, updates, and cinematic insights from the CineTube team.
                    </p>
                </motion.div>

                {/* Featured Post */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative rounded-3xl overflow-hidden group cursor-pointer"
                >
                    <div className="aspect-[21/9] md:aspect-[21/8] relative w-full">
                        <Image
                            src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2025"
                            alt="Featured blog post"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            priority
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 lg:p-16">
                        <div className="max-w-4xl">
                            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#EAB308] text-black font-bold text-xs tracking-widest uppercase mb-4">
                                Featured
                            </span>
                            
                            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-4 group-hover:text-[#EAB308] transition-colors">
                                The Evolution of Streaming: What's Next for CineTube in 2026
                            </h2>
                            
                            <p className="text-slate-300 md:text-lg mb-6 line-clamp-2 max-w-2xl">
                                We are rolling out our biggest update yet, featuring 8K support, enhanced AI-driven recommendations, and spatial audio integration for all premium members.
                            </p>

                            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm text-slate-300 font-medium mb-8">
                                <div className="flex items-center gap-2">
                                    <User className="w-4 h-4 text-[#EAB308]" />
                                    <span>Alex Reynolds</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4 text-[#EAB308]" />
                                    <span>April 15, 2026</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-[#EAB308]" />
                                    <span>5 min read</span>
                                </div>
                            </div>

                            <Button 
                                asChild
                                className="bg-white hover:bg-[#EAB308] text-black font-bold px-8 h-12 rounded-full transition-colors hidden sm:inline-flex"
                            >
                                <Link href="#">Read Article</Link>
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
