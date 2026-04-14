"use client";

import { contactSupportCategories } from "@/data/data";
import { getIconComponent } from "@/lib/iconMapper";
import { motion } from "framer-motion";

export function ContactSupportCategories() {
    return (
        <section className="py-24 px-6">
            <div className="container mx-auto px-6">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-2xl mx-auto mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
                        Support{" "}
                        <span className="text-[#EAB308]">Categories</span>
                    </h2>

                    <p className="mt-4 text-slate-600 dark:text-slate-300">
                        Choose a category to get the right help faster
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                    {contactSupportCategories.map((item, index) => {
                        const Icon = getIconComponent(item.icon);

                        return (
                            <motion.div
                                key={index}
                                whileHover={{ y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="group relative p-8 rounded-xl bg-white/20 dark:bg-black/30 backdrop-blur-xl border border-white/10 shadow-lg shadow-black/5 dark:shadow-black/40 hover:border-[#EAB308]/40 transition-all duration-300 cursor-pointer"
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

                                {/* Description */}
                                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                                    {item.description}
                                </p>

                                {/* Hover Glow */}
                                <div className="
                  absolute inset-0 rounded-3xl
                  bg-[#EAB308]/0 group-hover:bg-[#EAB308]/5
                  transition duration-300 pointer-events-none
                " />
                            </motion.div>
                        );
                    })}

                </div>
            </div>
        </section>
    );
}