'use client';

import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Info, Star, Calendar } from "lucide-react";
import Image from "next/image";

export default function Hero() {
    // Animation variants for staggered text entry
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
    };

    return (
        <section className="relative h-[95vh] w-full overflow-hidden bg-[#0B0E14] px-5">
            {/* Background Image with Cinematic Overlay */}
            <div className="absolute inset-0">
                <Image
                    src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059"
                    alt="Featured Movie"
                    fill
                    priority
                    className="object-cover opacity-60 transition-transform duration-[10s] hover:scale-105"
                />
                {/* Gradients for readability and blending */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0B0E14] via-[#0B0E14]/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14] via-transparent to-transparent" />
            </div>

            <div className="container relative z-10 flex h-full items-center px-6">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-3xl"
                >
                    {/* Metadata Row */}
                    <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
                        <Badge className="bg-[#EAB308] text-[#0B0E14] font-bold hover:bg-[#EAB308]/90">
                            NEW RELEASE
                        </Badge>
                        <div className="flex items-center gap-1 text-slate-300 text-sm">
                            <Star className="h-4 w-4 fill-[#EAB308] text-[#EAB308]" />
                            <span className="font-bold text-white">8.9</span> / 10
                        </div>
                        <div className="flex items-center gap-1 text-slate-300 text-sm">
                            <Calendar className="h-4 w-4" />
                            <span>2026</span>
                        </div>
                    </motion.div>

                    {/* Main Title */}
                    <motion.h1
                        variants={itemVariants}
                        className="font-playfair text-5xl font-black leading-[1.1] tracking-tight text-white md:text-6xl lg:text-7xl"
                    >
                        BEYOND THE <br />
                        <span className="text-[#EAB308]">HORIZON</span>
                    </motion.h1>

                    {/* Synopsis */}
                    <motion.p
                        variants={itemVariants}
                        className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300 md:text-xl font-dm-sans"
                    >
                        In a world where time is the only currency, one explorer must journey
                        to the edge of the galaxy to reclaim what was lost. Experience the
                        acclaimed epic now on CineTube.
                    </motion.p>

                    {/* Action Buttons */}
                    <motion.div
                        variants={itemVariants}
                        className="mt-10 flex flex-wrap gap-4"
                    >
                        <Button
                            size="lg"
                            className="group h-14 bg-[#EAB308] px-8 text-lg font-bold text-[#0B0E14] border-2 border-[#EAB308] hover:bg-transparent hover:border-[#EAB308] hover:border-2 hover:text-[#EAB308]"
                        >
                            <Play className="mr-2 h-5 w-5 fill-current transition-transform group-hover:scale-110" />
                            Watch Trailer
                        </Button>

                        <Button
                            size="lg"
                            variant="outline"
                            className="h-14 border-2 border-[#EAB308] px-8 text-lg text-[#EAB308] font-bold bg-transparent hover:bg-[#EAB308] hover:border-[#EAB308] hover:border-2 hover:text-[#0B0E14]"
                        >
                            <Info className="mr-2 h-5 w-5" />
                            View Details
                        </Button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Subtle Bottom Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <div className="h-12 w-[2px] bg-gradient-to-b from-[#EAB308] to-transparent" />
            </motion.div>
        </section>
    );
}