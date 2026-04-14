"use client";

import { contactSocials } from "@/data/data";
import { getIconComponent } from "@/lib/iconMapper";
import { motion } from "framer-motion";

export function ContactSocialLinks() {
    return (
        <section className="py-20 px-6">
            <div className="max-w-4xl mx-auto text-center">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white">
                        Follow{" "}
                        <span className="text-[#EAB308]">CineTube</span>
                    </h2>

                    <p className="mt-3 text-slate-600 dark:text-slate-300">
                        Stay connected for updates, trends, and new releases
                    </p>
                </motion.div>

                {/* Icons */}
                <div className="flex flex-wrap items-center justify-center gap-6">

                    {contactSocials.map((item, index) => {
                        const Icon = getIconComponent(item.icon);

                        return (
                            <motion.a
                                key={index}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1, y: -5 }}
                                transition={{ duration: 0.25 }}
                                className="
                  group
                  w-16 h-16 flex items-center justify-center
                  rounded-full
                  bg-white/20 dark:bg-black/30
                  backdrop-blur-xl
                  border border-white/10
                  shadow-lg shadow-black/5 dark:shadow-black/40
                  hover:border-[#EAB308]/40
                  transition-all duration-300
                "
                            >
                                <Icon
                                    size={26}
                                    className="
                    text-slate-700 dark:text-slate-300
                    group-hover:text-[#EAB308]
                    transition-colors duration-300
                  "
                                />

                                {/* Glow Effect */}
                                <div className="
                  absolute inset-0 rounded-full
                  bg-[#EAB308]/0 group-hover:bg-[#EAB308]/10
                  transition duration-300 pointer-events-none
                " />
                            </motion.a>
                        );
                    })}

                </div>
            </div>
        </section>
    );
}