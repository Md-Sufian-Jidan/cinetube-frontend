"use client";

import { motion } from "framer-motion";
import { Film } from "lucide-react";

export default function GlobalLoading() {
    return (
        <div className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-white">
            {/* Cinematic Focus Brackets Animation */}
            <div className="relative flex items-center justify-center">
                {/* The Brackets */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                    className="absolute h-24 w-24 border-2 border-[#EAB308]/20 rounded-full md:h-32 md:w-32"
                />

                {/* The Inner Pulsing Ring */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute h-16 w-16 rounded-full bg-[#EAB308]/10 md:h-20 md:w-20"
                />

                {/* The Center Icon */}
                <motion.div
                    animate={{
                        rotate: 360,
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="relative z-10 flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-xl shadow-[#EAB308]/10 md:h-14 md:w-14"
                >
                    <Film className="h-6 w-6 text-[#EAB308] md:h-7 md:w-7" />
                </motion.div>
            </div>

            {/* Loading Text */}
            <div className="mt-8 flex flex-col items-center gap-2">
                <span className="font-playfair text-xl font-black uppercase tracking-[0.3em] text-slate-900">
                    Cine<span className="text-[#EAB308]">Tube</span>
                </span>
                <motion.div className="flex gap-1">
                    {[0, 1, 2].map((i) => (
                        <motion.span
                            key={i}
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                delay: i * 0.2,
                            }}
                            className="h-1 w-1 rounded-full bg-[#EAB308]"
                        />
                    ))}
                </motion.div>
                <p className="font-jakarta text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    Loading the Premiere
                </p>
            </div>

            {/* Subtle Grainy Overlay */}
            <div className="pointer-events-none absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
        </div>
    );
}