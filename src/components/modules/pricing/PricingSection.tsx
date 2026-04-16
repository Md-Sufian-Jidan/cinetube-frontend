"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { plans } from "@/data/data";

export function PricingSection() {
    const [isYearly, setIsYearly] = useState(true);

    return (
        <section className="py-24 px-6 bg-[#fafafa] dark:bg-black/95">
            <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-flex items-center px-4 py-1.5 rounded-full 
                            bg-white/50 dark:bg-black/30 backdrop-blur-md 
                            text-[#EAB308] font-bold text-xs tracking-widest uppercase 
                            border border-[#EAB308]/30 mb-6">
                            Plans & Pricing
                        </span>
                        <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-tight">
                            Choose Your <span className="text-[#EAB308] italic">Cinematic</span> Journey
                        </h2>
                        <p className="mt-6 text-lg text-slate-600 dark:text-slate-400">
                            Flexible plans optimized for your viewing needs. Switch plans or cancel anytime.
                        </p>
                    </motion.div>

                    {/* Toggle */}
                    <div className="mt-10 flex items-center justify-center gap-4">
                        <span className={cn("text-sm font-bold transition-colors", !isYearly ? "text-slate-900 dark:text-white" : "text-slate-400")}>Monthly</span>
                        <button
                            onClick={() => setIsYearly(!isYearly)}
                            className="relative w-16 h-8 rounded-full bg-slate-200 dark:bg-slate-800 transition-colors focus:outline-none"
                        >
                            <motion.div
                                className="absolute top-1 left-1 w-6 h-6 rounded-full bg-[#EAB308] shadow-md"
                                animate={{ x: isYearly ? 32 : 0 }}
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            />
                        </button>
                        <div className="flex items-center gap-2">
                            <span className={cn("text-sm font-bold transition-colors", isYearly ? "text-slate-900 dark:text-white" : "text-slate-400")}>Annually</span>
                            <span className="px-2 py-0.5 rounded-md bg-[#EAB308]/10 text-[#EAB308] text-[10px] font-black uppercase tracking-wider">
                                Save 20%
                            </span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={cn(
                                "relative p-8 rounded-3xl transition-all duration-300",
                                plan.highlight
                                    ? "bg-white dark:bg-slate-900 border-2 border-[#EAB308] shadow-2xl shadow-[#EAB308]/10 scale-105"
                                    : "bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
                            )}
                        >
                            {plan.highlight && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <span className="bg-[#EAB308] text-white text-xs font-black uppercase tracking-wider px-4 py-1.5 rounded-full shadow-lg">
                                        Most Popular
                                    </span>
                                </div>
                            )}

                            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2">{plan.name}</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400 min-h-[40px]">{plan.description}</p>

                            <div className="mt-6 mb-8">
                                <span className="text-5xl font-black text-slate-900 dark:text-white">
                                    ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                                </span>
                                <span className="text-slate-500 font-medium">
                                    /{isYearly ? "year" : "month"}
                                </span>
                            </div>

                            <Button
                                className={cn(
                                    "w-full h-12 rounded-xl font-bold text-lg mb-8 transition-all",
                                    plan.highlight
                                        ? "bg-[#EAB308] hover:bg-[#d9a807] text-white shadow-lg shadow-[#EAB308]/25"
                                        : "bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 dark:text-slate-900 text-white"
                                )}
                            >
                                Get Started
                            </Button>

                            <ul className="space-y-4">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        {feature.included ? (
                                            <div className="flex-shrink-0 h-5 w-5 rounded-full bg-[#EAB308]/10 flex items-center justify-center">
                                                <Check className="h-3.5 w-3.5 text-[#EAB308]" />
                                            </div>
                                        ) : (
                                            <div className="flex-shrink-0 h-5 w-5 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                                                <X className="h-3.5 w-3.5 text-slate-400" />
                                            </div>
                                        )}
                                        <span className={cn(
                                            "text-sm font-medium",
                                            feature.included ? "text-slate-700 dark:text-slate-200" : "text-slate-400 dark:text-slate-500"
                                        )}>
                                            {feature.name}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
