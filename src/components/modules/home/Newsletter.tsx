"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Mail, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Newsletter() {
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) {
            toast.error("Please enter your email address");
            return;
        }

        setIsLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        toast.success("Thank you for subscribing! Check your email for confirmation.");
        setEmail("");
        setIsLoading(false);
    };

    return (
        <section className="bg-[#EAB308] py-20 font-jakarta">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative overflow-hidden rounded-[3rem] bg-white px-8 py-16 shadow-[0_40px_100px_rgba(15,23,42,0.3)] md:px-20 md:py-24 lg:py-28"
                >
                    {/* Background Decorative Accents */}
                    <div className="absolute -top-12 -left-12 text-[#EAB308] opacity-20 pointer-events-none">
                        <Mail size={200} className="fill-current" />
                    </div>

                    <div className="relative z-10 flex flex-col items-center text-center">
                        <Badge className="bg-[#EAB308] hover:bg-[#EAB308]/90 text-black font-black px-4 py-1 rounded-full mb-6">
                            STAY UPDATED
                        </Badge>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="font-playfair text-4xl md:text-6xl font-black text-black leading-[1.1] tracking-tight"
                        >
                            Never Miss a <span className="text-[#EAB308]">Masterpiece</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="mt-6 max-w-2xl text-lg md:text-xl text-slate-600 font-medium leading-relaxed"
                        >
                            Get weekly recommendations, exclusive reviews, and early access to new releases
                            delivered straight to your inbox.
                        </motion.p>

                        <motion.form
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            onSubmit={handleSubmit}
                            className="mt-10 flex w-full max-w-md flex-col gap-4 sm:flex-row sm:gap-2"
                        >
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="h-14 flex-1 rounded-2xl border-slate-200 bg-white px-6 text-lg font-medium placeholder:text-slate-400 focus:border-[#EAB308] focus:ring-[#EAB308]"
                                required
                            />
                            <Button
                                type="submit"
                                disabled={isLoading}
                                className="h-14 bg-[#EAB308] px-8 text-lg font-bold text-white border-2 border-[#EAB308] hover:bg-transparent hover:border-[#EAB308] hover:border-2 hover:text-[#EAB308] cursor-pointer rounded-2xl disabled:opacity-50"
                            >
                                {isLoading ? (
                                    "Subscribing..."
                                ) : (
                                    <>
                                        Subscribe
                                        <Send className="ml-2 h-5 w-5" />
                                    </>
                                )}
                            </Button>
                        </motion.form>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="mt-6 text-slate-500 text-sm font-medium"
                        >
                            Join 25,000+ cinephiles • Unsubscribe anytime • No spam, ever
                        </motion.p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}