"use client";

import { supportArticles } from "@/data/data";
import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import Link from "next/link";

export function SupportArticles() {
    return (
        <section className="py-24 px-6 bg-[#fafafa] dark:bg-black/90">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white">
                            Popular <span className="text-[#EAB308]">Articles</span>
                        </h2>
                        <p className="mt-4 text-slate-600 dark:text-slate-400">
                            Quick guides to help you get the most out of CineTube.
                        </p>
                    </div>
                    <Link href="/support/all" className="inline-flex items-center text-sm font-bold text-[#EAB308] hover:text-slate-900 dark:hover:text-white transition-colors">
                        View all articles <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </div>

                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm">
                    {supportArticles.map((article, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                        >
                            <Link href={`/support/article/${index}`} className="flex items-center justify-between p-6 border-b border-slate-100 dark:border-slate-800 last:border-0 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group">
                                <div className="flex items-center gap-4">
                                    <div className="h-10 w-10 shrink-0 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 group-hover:bg-[#EAB308]/10 group-hover:text-[#EAB308] transition-colors">
                                        <FileText size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-[#EAB308] transition-colors">
                                            {article.title}
                                        </h4>
                                        <p className="text-sm font-medium text-slate-500 mt-1">
                                            {article.reads}
                                        </p>
                                    </div>
                                </div>
                                <ArrowRight className="text-slate-300 dark:text-slate-600 group-hover:text-[#EAB308] group-hover:translate-x-1 transition-all" size={20} />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
