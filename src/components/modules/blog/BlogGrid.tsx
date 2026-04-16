"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { posts } from "@/data/data";

export function BlogGrid() {
    return (
        <section className="py-20 px-6 bg-white dark:bg-black/95">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white">
                            Latest <span className="text-[#EAB308]">Articles</span>
                        </h2>
                        <p className="mt-3 text-slate-600 dark:text-slate-400">
                            Discover stories, thinking, and expertise from writers on any topic.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <motion.article
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group flex flex-col bg-slate-50 dark:bg-slate-900/50 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 hover:border-[#EAB308] transition-colors"
                        >
                            <Link href="#" className="relative aspect-[16/10] overflow-hidden">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-full text-xs font-bold text-slate-900 dark:text-[#EAB308] uppercase tracking-wider shadow-sm">
                                        {post.category}
                                    </span>
                                </div>
                            </Link>

                            <div className="p-6 flex flex-col flex-grow">
                                <Link href="#">
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 line-clamp-2 group-hover:text-[#EAB308] transition-colors">
                                        {post.title}
                                    </h3>
                                </Link>
                                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 line-clamp-2">
                                    {post.excerpt}
                                </p>

                                <div className="mt-auto pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs font-medium text-slate-500 dark:text-slate-400">
                                    <div className="flex items-center gap-1.5 hover:text-[#EAB308] transition-colors">
                                        <Calendar className="w-3.5 h-3.5" />
                                        <span>{post.date}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 hover:text-[#EAB308] transition-colors">
                                        <Clock className="w-3.5 h-3.5" />
                                        <span>{post.readTime}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Button
                        size="lg"
                        variant="outline"
                        className="rounded-full border-2 border-slate-200 dark:border-slate-800 font-bold hover:bg-slate-50 dark:hover:bg-slate-900 px-8 h-12"
                    >
                        Load More Articles <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                </div>
            </div>
        </section>
    );
}
