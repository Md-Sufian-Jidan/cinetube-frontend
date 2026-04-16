"use client";

import { supportCategories } from "@/data/data";
import { getIconComponent } from "@/lib/iconMapper";
import { motion } from "framer-motion";

export function SupportCategories() {
    return (
        <section className="py-24 px-6 bg-white dark:bg-black border-y border-slate-100 dark:border-slate-900">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white">
                        Browse by <span className="text-[#EAB308]">Category</span>
                    </h2>
                    <p className="mt-4 text-slate-600 dark:text-slate-400">
                        Find quick answers to your questions by selecting a topic below.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {supportCategories.map((category, index) => {
                        const Icon = getIconComponent(category.icon);
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group cursor-pointer p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 hover:border-[#EAB308] hover:shadow-xl hover:shadow-[#EAB308]/10 transition-all duration-300"
                            >
                                <div className="h-14 w-14 rounded-2xl bg-white dark:bg-black border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-900 dark:text-white group-hover:bg-[#EAB308] group-hover:text-white group-hover:border-[#EAB308] transition-colors mb-6 shadow-sm">
                                    <Icon size={26} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                                    {category.title}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                                    {category.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};