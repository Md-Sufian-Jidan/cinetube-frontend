"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Heart } from "lucide-react";

export default function CTA() {
    return (
        <section className="bg-[#FAFAFA] py-20 border-t border-slate-100 font-jakarta">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative overflow-hidden rounded-[3rem] bg-white px-8 py-16 shadow-[0_40px_100px_rgba(15,23,42,0.3)] md:px-20 md:py-24 lg:py-28"
                >
                    {/* Background Decorative Accents */}
                    <div className="absolute -top-12 -left-12 text-[#EAB308] opacity-20 pointer-events-none">
                        <Star size={200} className="fill-current" />
                    </div>
                    <div className="absolute -bottom-12 -right-12 text-[#EAB308] opacity-30 pointer-events-none">
                        <Heart size={200} className="fill-current" />
                    </div>

                    {/* Gradient Glow */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(234,179,8,0.15),transparent_50%)]" />

                    <div className="relative z-10 flex flex-col items-center text-center">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="font-playfair text-5xl md:text-7xl font-black text-black leading-[1.1] tracking-tight"
                        >
                            Ready to rate your<br />next <span className="text-[#EAB308]">masterpiece</span>?
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="mt-8 max-w-2xl text-lg md:text-xl text-slate-500 font-medium leading-relaxed"
                        >
                            Join CineTube today and connect with a community that shares your
                            passion for incredible storytelling. Rate movies, write reviews,
                            and build the definitive database for modern cinephiles.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            className="mt-14 flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto"
                        >
                            <Button
                                size="lg"
                                className="h-14 bg-[#EAB308] px-8 text-lg font-bold text-[#0B0E14] border-2 border-[#EAB308] hover:bg-transparent hover:border-[#EAB308] hover:border-2 hover:text-[#EAB308] cursor-pointer"
                            >
                                Get Started Now
                                <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-2" />
                            </Button>

                            <Button
                                variant="outline"
                                size="lg"
                                className="h-14 border-2 border-[#EAB308] px-8 text-lg text-[#EAB308] font-bold bg-transparent hover:bg-[#EAB308] hover:border-[#EAB308] hover:border-2 hover:text-[#0B0E14] cursor-pointer"
                            >
                                Explore Titles
                            </Button>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="mt-8 text-slate-500 text-xs font-black uppercase tracking-[0.3em]"
                        >
                            No credit card required • Join 50,000+ Cinephiles
                        </motion.p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}