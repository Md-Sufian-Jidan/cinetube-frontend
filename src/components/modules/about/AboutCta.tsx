"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function AboutCta() {
    return (
        <section className="py-24 px-6">
            <div className="max-w-6xl mx-auto">

                {/* Glass Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative overflow-hidden rounded-xl text-center p-12 md:p-20 bg-gradient-to-br from-white/20 to-white/5 dark:from-black/40 dark:to-black/20 backdrop-blur-xl border border-white/10 shadow-2xl"
                >

                    {/* Glow Background */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#EAB308]/20 rounded-full blur-3xl" />
                        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-[#EAB308]/10 rounded-full blur-3xl" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 max-w-3xl mx-auto">

                        {/* Title */}
                        <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-tight">
                            Ready to Experience{" "}
                            <span className="text-[#EAB308]">CineTube</span>?
                        </h2>

                        {/* Subtitle */}
                        <p className="mt-6 text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                            Join thousands of movie lovers and start exploring unlimited
                            streaming, AI recommendations, and personalized watchlists today.
                        </p>

                        {/* Buttons */}
                        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

                            {/* Primary CTA */}
                            <Button
                                asChild
                                size="lg"
                                className="bg-[#EAB308] hover:bg-[#d9a807] text-black font-bold px-10 h-12 rounded-full shadow-lg shadow-[#EAB308]/30"
                            >
                                <Link href="/all-movie">Get Started</Link>
                            </Button>

                            {/* Secondary CTA */}
                            <Button
                                asChild
                                size="lg"
                                variant="outline"
                                className="border-white/20 dark:border-white/10 bg-white/10 dark:bg-black/20 backdrop-blur-md text-slate-900 dark:text-white hover:bg-white/20 dark:hover:bg-black/30 rounded-full px-10 h-12 font-semibold"
                            >
                                <Link href="/pricing">View Pricing</Link>
                            </Button>

                        </div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
}