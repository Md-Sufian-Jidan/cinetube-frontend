"use client";

import { pricingFeatures } from "@/data/data";
import { motion } from "framer-motion";
import { Check, Minus } from "lucide-react";

export function FeatureComparison() {
    return (
        <section className="py-24 px-6 bg-white dark:bg-black">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white">
                        Compare <span className="text-[#EAB308]">Features</span>
                    </h2>
                    <p className="mt-4 text-slate-600 dark:text-slate-400">
                        A detailed breakdown to help you pick the perfect plan.
                    </p>
                </div>

                <div className="overflow-x-auto pb-6">
                    <table className="w-full text-left border-collapse min-w-[600px]">
                        <thead>
                            <tr>
                                <th className="w-[40%] p-4 text-slate-400 font-medium text-sm border-b dark:border-slate-800">
                                    Features
                                </th>
                                <th className="w-[20%] p-4 text-center font-bold text-slate-900 dark:text-white border-b dark:border-slate-800">
                                    Basic
                                </th>
                                <th className="w-[20%] p-4 text-center font-bold text-[#EAB308] border-b dark:border-slate-800">
                                    Standard
                                </th>
                                <th className="w-[20%] p-4 text-center font-bold text-slate-900 dark:text-white border-b dark:border-slate-800">
                                    Premium
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {pricingFeatures.map((section, idx) => (
                                <optgroup key={idx} className="contents">
                                    <tr>
                                        <td colSpan={4} className="p-4 pt-8 pb-4 text-sm font-black uppercase tracking-wider text-slate-900 dark:text-white bg-slate-50/50 dark:bg-slate-900/20">
                                            {section.category}
                                        </td>
                                    </tr>
                                    {section.items.map((item, itemIdx) => (
                                        <tr key={itemIdx} className="border-b border-slate-100 dark:border-slate-800/60 hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                                            <td className="p-4 text-sm font-medium text-slate-700 dark:text-slate-300">
                                                {item.name}
                                            </td>
                                            <td className="p-4 text-center text-sm font-medium text-slate-600 dark:text-slate-400">
                                                {renderValue(item.basic)}
                                            </td>
                                            <td className="p-4 text-center text-sm font-medium text-slate-600 dark:text-slate-400">
                                                {renderValue(item.standard)}
                                            </td>
                                            <td className="p-4 text-center text-sm font-medium text-slate-600 dark:text-slate-400">
                                                {renderValue(item.premium)}
                                            </td>
                                        </tr>
                                    ))}
                                </optgroup>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}

function renderValue(value: string | boolean) {
    if (typeof value === "boolean") {
        return value ? (
            <div className="flex justify-center"><Check className="h-5 w-5 text-[#EAB308]" /></div>
        ) : (
            <div className="flex justify-center"><Minus className="h-5 w-5 text-slate-300 dark:text-slate-700" /></div>
        );
    }
    return value;
}
