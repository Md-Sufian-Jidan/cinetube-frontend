"use client";

import type { ComponentType } from "react";
import { motion } from "framer-motion";
import { getIconComponent } from "@/lib/iconMapper";
import { aboutFeatures } from "@/data/data";

function FeatureCard({
    title,
    description,
    Icon,
}: {
    title: string;
    description: string;
    Icon: ComponentType<{ className?: string }>;
}) {
    return (
        <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.25 }}
            className="
        p-8 rounded-2xl
        bg-white/20 dark:bg-black/30
        backdrop-blur-xl
        border border-white/10 dark:border-white/10
        shadow-lg shadow-black/5 dark:shadow-black/40
        hover:border-[#EAB308]/40
        transition-all duration-300
      "
        >
            <Icon className="text-[#EAB308] mb-5" />

            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                {title}
            </h3>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {description}
            </p>
        </motion.div>
    );
}

export function AboutFeatures() {
    return (
        <section className="py-24 px-6 bg-[#fafafa]">
            <div className="container mx-auto px-6">

                {/* Heading */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
                        Why Choose{" "}
                        <span className="text-[#EAB308]">CineTube</span>?
                    </h2>

                    <p className="mt-4 text-slate-600 dark:text-slate-300">
                        A modern streaming platform built for speed, intelligence, and cinematic experience.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {aboutFeatures.map((feature, index) => {
                        const Icon = getIconComponent(feature.icon);
                        return (
                            <FeatureCard
                                key={index}
                                title={feature.title}
                                description={feature.description}
                                Icon={Icon}
                            />
                        )
                    })}
                </div>
            </div>
        </section>
    );
}