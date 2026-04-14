"use client";

import { motion } from "framer-motion";

export function ContactMap() {
    return (
        <section className="py-24 px-6">
            <div className="container mx-auto px-6">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
                        Our{" "}
                        <span className="text-[#EAB308]">Location</span>
                    </h2>

                    <p className="mt-4 text-slate-600 dark:text-slate-300">
                        Visit our office or find us easily on the map
                    </p>
                </motion.div>

                {/* Glass Map Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="
            relative overflow-hidden
            rounded-3xl
            bg-white/20 dark:bg-black/30
            backdrop-blur-xl
            border border-white/10
            shadow-2xl
          "
                >

                    {/* Map */}
                    <div className="w-full h-[400px] md:h-[500px]">
                        <iframe
                            src="https://www.google.com/maps?q=Dhaka,Bangladesh&output=embed"
                            className="w-full h-full border-0"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>

                    {/* Cinematic Overlay Gradient */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent dark:from-black/50" />

                    {/* Floating Info Card */}
                    <div className="
            absolute bottom-6 left-6
            bg-white/20 dark:bg-black/40
            backdrop-blur-xl
            border border-white/10
            rounded-2xl
            px-5 py-4
            shadow-lg
            max-w-xs
          ">
                        <p className="text-sm font-bold text-slate-900 dark:text-white">
                            📍 CineTube HQ
                        </p>
                        <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                            Dhaka, Bangladesh
                        </p>
                    </div>

                    {/* Glow Effect */}
                    <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#EAB308]/20 blur-3xl rounded-full pointer-events-none" />
                </motion.div>
            </div>
        </section>
    );
}