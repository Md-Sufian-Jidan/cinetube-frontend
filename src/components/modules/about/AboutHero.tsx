"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function AboutHero() {
    return (
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden px-6">

            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1492691523567-6170d285094f?q=80&w=2070"
                    alt="CineTube cinematic background"
                    fill
                    className="object-cover opacity-40 dark:opacity-30"
                    priority
                />

                {/* Glass overlay */}
                <div className="absolute inset-0 bg-white/10 dark:bg-black/40 backdrop-blur-md" />
            </div>

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 max-w-4xl text-center"
            >

                {/* Badge */}
                <span className="inline-flex items-center px-5 py-2 rounded-full 
          bg-white/20 dark:bg-black/30 backdrop-blur-md 
          text-[#EAB308] font-bold text-xs tracking-[0.25em] uppercase 
          border border-[#EAB308]/30">
                    CineTube Experience
                </span>

                {/* Title */}
                <h1 className="mt-8 text-5xl md:text-7xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
                    The Future of{" "}
                    <span className="text-[#EAB308] italic">Cinema</span>{" "}
                    is Streaming
                </h1>

                {/* Subtitle */}
                <p className="mt-6 text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
                    Discover, stream, and explore thousands of movies and series with
                    a modern cinematic experience powered by CineTube.
                </p>

                {/* CTA */}
                <div className="mt-10">
                    <Button
                        asChild
                        size="lg"
                        className="bg-[#EAB308] hover:bg-[#d9a807] text-black font-bold px-10 h-14 rounded-full shadow-lg shadow-[#EAB308]/20"
                    >
                        <Link href="/all-movie">Explore Movies</Link>
                    </Button>
                </div>

            </motion.div>
        </section>
    );
}