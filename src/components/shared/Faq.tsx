"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/data";
import { motion } from "framer-motion";

export function FAQSection() {
    return (
        <section className="py-24 px-6">
            <div className="max-w-6xl mx-auto">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
                        Frequently Asked{" "}
                        <span className="text-[#EAB308]">Questions</span>
                    </h2>

                    <p className="mt-4 text-slate-600 dark:text-slate-300">
                        Everything you need to know about CineTube
                    </p>
                </motion.div>

                {/* Accordion */}
                <div
                    className="
            rounded-3xl p-6 md:p-10
            bg-white/20 dark:bg-black/30
            backdrop-blur-xl
            border border-white/10
            shadow-xl
          "
                >
                    <Accordion type="single" collapsible className="w-full">

                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="border-b border-white/10 dark:border-white/10"
                            >
                                <AccordionTrigger className="
                  text-left font-semibold
                  text-slate-900 dark:text-white
                  hover:text-[#EAB308]
                  transition-colors
                ">
                                    {faq.question}
                                </AccordionTrigger>

                                <AccordionContent className="
                  text-slate-600 dark:text-slate-300
                  leading-relaxed
                ">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}

                    </Accordion>
                </div>
            </div>
        </section>
    );
}