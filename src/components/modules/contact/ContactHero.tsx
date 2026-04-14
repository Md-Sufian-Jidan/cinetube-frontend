"use client";

import { motion } from "framer-motion";

export function ContactHero() {
    return (
        <section className="relative flex items-center justify-center py-28 px-6 overflow-hidden">

            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-white dark:from-black dark:via-black dark:to-slate-900" />

            {/* Cinematic Glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#EAB308]/20 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-120px] right-[-80px] w-[400px] h-[400px] bg-[#EAB308]/10 blur-[120px] rounded-full" />
            </div>

            {/* Glass Container */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="
          relative z-10 max-w-3xl w-full text-center
          p-12 md:p-16 rounded-3xl
          bg-white/20 dark:bg-black/30
          backdrop-blur-xl
          border border-white/10
          shadow-2xl
        "
            >

                {/* Badge */}
                <span className="
          inline-block px-4 py-1.5 mb-6
          text-xs font-bold tracking-[0.25em] uppercase
          text-[#EAB308]
          bg-white/10 dark:bg-black/20
          border border-[#EAB308]/20
          rounded-full
        ">
                    Contact CineTube
                </span>

                {/* Title */}
                <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-tight">
                    Get in{" "}
                    <span className="text-[#EAB308]">Touch</span>
                </h1>

                {/* Subtitle */}
                <p className="mt-6 text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                    Have questions, feedback, or need support?
                    Our team is always ready to help you with your CineTube experience.
                </p>

                {/* Divider Line */}
                <div className="mt-8 flex items-center justify-center">
                    <div className="h-[2px] w-24 bg-[#EAB308]/40 rounded-full" />
                </div>

            </motion.div>
        </section>
    );
}