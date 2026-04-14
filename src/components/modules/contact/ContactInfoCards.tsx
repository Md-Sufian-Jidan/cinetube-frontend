"use client";

import { motion } from "framer-motion";
import { contactInfo } from "@/data/data";
import { getIconComponent } from "@/lib/iconMapper";

export function ContactInfoCards() {
    return (
        <section className="py-24 px-6">
            <div className="container mx-auto px-6">

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {contactInfo.map((item, index) => {
                        const Icon = getIconComponent(item.icon);

                        return (
                            <motion.div
                                key={index}
                                whileHover={{ y: -8 }}
                                transition={{ duration: 0.3 }}
                                className="
                  group relative
                  p-8 rounded-3xl
                  bg-white/20 dark:bg-black/30
                  backdrop-blur-xl
                  border border-white/10
                  shadow-lg shadow-black/5 dark:shadow-black/40
                  hover:border-[#EAB308]/40
                  transition-all duration-300
                "
                            >
                                {/* Icon */}
                                <div className="
                  w-14 h-14 flex items-center justify-center
                  rounded-2xl mb-6
                  bg-white/10 dark:bg-black/20
                  border border-white/10
                  group-hover:border-[#EAB308]/40
                  transition
                ">
                                    <Icon className="text-[#EAB308]" size={26} />
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                                    {item.title}
                                </h3>

                                {/* Value */}
                                <p className="mt-2 text-[#EAB308] font-semibold">
                                    {item.value}
                                </p>

                                {/* Description */}
                                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                                    {item.description}
                                </p>
                            </motion.div>
                        );
                    })}

                </div>
            </div>
        </section>
    );
}