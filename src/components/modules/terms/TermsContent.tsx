"use client";

import { termsSections } from "@/data/data";
import { getIconComponent } from "@/lib/iconMapper";
import { motion } from "framer-motion";

export function TermsContent() {
    return (
        <section className="font-jakarta pb-24">
            {/* Hero Header */}
            <div className="bg-[#fafafa] dark:bg-black pt-32 pb-20 px-6 border-b border-slate-100 dark:border-slate-800">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/50 dark:bg-black/30 backdrop-blur-md text-[#EAB308] font-bold text-xs tracking-widest uppercase border border-[#EAB308]/30 mb-6">
                            Legal Information
                        </span>
                        <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-tight font-playfair mb-6">
                            Terms of <span className="text-[#EAB308] italic">Service</span>
                        </h1>
                        <p className="text-lg text-slate-600 dark:text-slate-400">
                            Effective Date: April 15, 2026. Please read these terms carefully before using our platform.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Content Body */}
            <div className="max-w-4xl mx-auto px-6 mt-16">
                <div className="bg-white dark:bg-slate-900/50 rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-slate-800 shadow-sm">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="prose prose-lg dark:prose-invert max-w-none prose-p:text-slate-600 dark:prose-p:text-slate-400 prose-headings:text-slate-900 dark:prose-headings:text-white"
                    >
                        <p className="lead font-medium text-slate-700 dark:text-slate-300">
                            Welcome to CineTube. We provide a subscription service that allows our members to access motion pictures, television and other audio-visual entertainment streamed over the Internet to certain Internet-connected TVs, computers and other devices.
                        </p>

                        <hr className="my-10 border-slate-200 dark:border-slate-800" />

                        <div className="space-y-12">
                            {termsSections.map((section, idx) => {
                                const Icon = getIconComponent(section.icon);
                                return (
                                    <div key={section.id} className="scroll-mt-32" id={section.id}>
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="h-12 w-12 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center border border-slate-100 dark:border-slate-700 text-[#EAB308]">
                                                <Icon size={24} />
                                            </div>
                                            <h2 className="text-2xl font-bold m-0">{section.title}</h2>
                                        </div>
                                        <div className="pl-16 text-slate-600 dark:text-slate-400 whitespace-pre-line leading-relaxed">
                                            {section.content}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>

                <div className="mt-12 text-center">
                    <p className="text-sm text-slate-500 font-medium">
                        If you have any questions about these Terms, please <a href="/contact" className="text-[#EAB308] hover:underline">contact us</a>.
                    </p>
                </div>
            </div>
        </section>
    );
}
