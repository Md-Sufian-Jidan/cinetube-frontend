"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Heart } from "lucide-react";

export default function CTA() {
    return (
        <section className="bg-[#0B0E14] py-24 border-t border-white/5">
            <div className="mx-auto max-w-7xl px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative overflow-hidden rounded-3xl bg-[#161B22] border border-white/10 px-8 py-16 shadow-2xl md:px-20 md:py-20 lg:py-24"
                >
                    {/* Subtle Background Elements */}
                    <div className="absolute -top-10 -left-10 text-white/5 opacity-40">
                        <Star size={150} className="fill-current" />
                    </div>
                    <div className="absolute -bottom-10 -right-10 text-white/5 opacity-40">
                        <Heart size={150} className="fill-current" />
                    </div>

                    <div className="relative z-10 flex flex-col items-center text-center">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="font-playfair text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight"
                        >
                            Ready to rate your<br />next <span className="text-[#EAB308]">masterpiece</span>?
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="mt-6 max-w-2xl text-lg md:text-xl text-slate-300 font-dm-sans leading-relaxed"
                        >
                            Join CineTube today and connect with a community that shares your
                            passion for incredible storytelling. Rate movies, write reviews,
                            find your next obsession, and contribute to the definitive database
                            for modern cinephiles.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            className="mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6"
                        >
                            <Button
                                size="lg"
                                className="group h-14 px-10 text-lg font-bold bg-[#EAB308] text-[#0B0E14] hover:bg-[#EAB308]/90 shadow-xl"
                            >
                                Join the Community
                                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="h-14 px-10 text-lg text-white border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/30"
                            >
                                Explore More Titles
                            </Button>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}