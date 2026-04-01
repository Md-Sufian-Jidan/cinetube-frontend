"use client";

import { motion } from "framer-motion";
import { Lock, Hammer, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { getSession } from "@/services/auth.service";

export default async function ChangePasswordPage() {
    const session = await getSession();
    const userInfo = session?.data?.user;
    return (
        <div className="min-h-[80vh] flex items-center justify-center p-6 font-jakarta bg-white">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-lg"
            >
                <Card className="border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)] rounded-[2.5rem] overflow-hidden">
                    <CardContent className="p-12 text-center">
                        {/* Animated Icon Section */}
                        <div className="relative mx-auto w-24 h-24 mb-8">
                            <div className="absolute inset-0 bg-[#EAB308]/10 rounded-3xl rotate-12 animate-pulse" />
                            <div className="absolute inset-0 bg-white border-2 border-[#EAB308]/20 rounded-3xl flex items-center justify-center shadow-sm">
                                <Lock className="w-10 h-10 text-[#EAB308]" />
                            </div>
                            <div className="absolute -bottom-2 -right-2 bg-slate-900 text-white p-2 rounded-xl shadow-lg">
                                <Hammer size={16} className="animate-bounce" />
                            </div>
                        </div>

                        {/* Text Content */}
                        <h1 className="font-playfair text-4xl font-black text-slate-900 mb-4">
                            Security <span className="text-[#EAB308]">Upgrade</span>
                        </h1>

                        <p className="text-slate-500 font-medium leading-relaxed mb-10">
                            We're currently re-engineering our password security protocols to keep your CineTube account safer than ever. This feature will be live soon!
                        </p>

                        {/* Progress Visualizer */}
                        <div className="w-full bg-slate-50 h-3 rounded-full mb-10 overflow-hidden border border-slate-100">
                            <motion.div
                                initial={{ width: "0%" }}
                                animate={{ width: "65%" }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                                className="h-full bg-gradient-to-r from-[#EAB308] to-yellow-500 rounded-full"
                            />
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col gap-3">
                            <Button asChild className="h-14 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-all group">
                                <Link href="/dashboard">
                                    Back to Dashboard
                                    <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>

                            <Button variant="ghost" className="text-slate-400 font-bold hover:text-slate-900 hover:bg-transparent">
                                Report a Security Issue?
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                {/* Footer info */}
                <p className="text-center mt-8 text-xs font-black uppercase tracking-[0.2em] text-slate-300">
                    CineTube Infrastructure v2.0
                </p>
            </motion.div>
        </div>
    );
}