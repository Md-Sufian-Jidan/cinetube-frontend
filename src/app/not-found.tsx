"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Film, Home, MoveLeft, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <div className="relative flex min-h-screen flex-col items-center justify-center bg-[#0B0E14] px-6 text-center overflow-hidden">
            {/* Background Decorative Element: Large Faded Clapperboard */}
            <div className="absolute -top-24 -right-24 opacity-[0.03] rotate-12 pointer-events-none">
                <Film size={600} className="text-white" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="z-10"
            >
                {/* Error Code with Gold Glow */}
                <h1 className="font-playfair text-[12rem] font-black leading-none tracking-tighter text-white/5 md:text-[20rem]">
                    404
                </h1>

                <div className="relative -mt-20 md:-mt-32">
                    <motion.div
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring" }}
                        className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EAB308] text-[#0B0E14] shadow-[0_0_30px_rgba(234,179,8,0.3)]"
                    >
                        <Film size={32} />
                    </motion.div>

                    <h2 className="font-playfair text-3xl font-bold text-white md:text-5xl">
                        Scene <span className="text-[#EAB308]">Missing</span>
                    </h2>

                    <p className="mx-auto mt-4 max-w-md font-jakarta text-slate-400 md:text-lg">
                        The reel you're looking for has been cut from the final edit.
                        It might have moved to a different theater or never existed.
                    </p>

                    <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Button
                            asChild
                            size="lg"
                            className="group h-12 bg-[#EAB308] border border-[#EAB308] px-8 font-jakarta font-bold uppercase tracking-wider text-[#0B0E14] hover:bg-transparent hover:text-[#EAB308] shadow-lg shadow-[#EAB308]/10"
                        >
                            <Link href="/">
                                <Home className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                                Back to Premiere
                            </Link>
                        </Button>

                        <Button
                            asChild
                            variant="outline"
                            size="lg"
                            className="h-12 border-[#EAB308] bg-transparent px-8 font-jakarta font-bold uppercase tracking-wider text-[#EAB308] hover:bg-[#EAB308] hover:text-black"
                        >
                            <Link href="/browse">
                                <Play className="mr-2 h-4 w-4 fill-current" />
                                Browse Movies
                            </Link>
                        </Button>
                    </div>
                </div>
            </motion.div>

            {/* Subtle Grainy Overlay for Cinema Feel */}
            <div className="pointer-events-none absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
        </div>
    );
}