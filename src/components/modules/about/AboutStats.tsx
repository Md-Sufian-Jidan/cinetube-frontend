"use client";

import { aboutStats } from "@/data/data";
import { getIconComponent } from "@/lib/iconMapper";
import { motion } from "framer-motion";

function AnimatedNumber({ value }: { value: number }) {
    return (
        <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-black"
        >
            {value.toLocaleString()}
        </motion.span>
    );
}

export function AboutStats() {
    return (
        <section className="py-24 px-6">
            <div className="container mx-auto px-6">

                {/* Heading */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
                        CineTube{" "}
                        <span className="text-[#EAB308]">Statistics</span>
                    </h2>

                    <p className="mt-4 text-slate-600 dark:text-slate-300">
                        Real-time insights into our growing streaming ecosystem.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                    {aboutStats.map((stat, index) => {
                        const Icon = getIconComponent(stat.icon);

                        return (
                            <motion.div
                                key={index}
                                whileHover={{ y: -8 }}
                                transition={{ duration: 0.3 }}
                                className="
                  p-8 rounded-2xl
                  bg-white/20 dark:bg-black/30
                  backdrop-blur-xl
                  border border-white/10 dark:border-white/10
                  shadow-lg shadow-black/5 dark:shadow-black/40
                  hover:border-[#EAB308]/40
                  transition-all
                "
                            >
                                {/* Icon */}
                                <div className="flex items-center justify-between mb-6">
                                    <Icon className="text-[#EAB308]" size={28} />
                                </div>

                                {/* Number */}
                                <h3 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white">
                                    <AnimatedNumber value={stat.value} />
                                    {stat.suffix}
                                </h3>

                                {/* Label */}
                                <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                    {stat.label}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}