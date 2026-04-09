"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    History,
    Rocket,
    Zap,
    ShieldCheck,
    Smartphone,
    CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const stats = [
    { label: "Curated Projects", value: "500+" },
    { label: "Client Satisfaction", value: "100%" },
    { label: "Processing Speed", value: "Instant" },
];

const features = [
    {
        title: "Intelligent Curation",
        description: "Our workflow eliminates decision fatigue by focusing on pixel-perfect precision and high-end aesthetics.",
        icon: Zap,
    },
    {
        title: "Unrivaled Quality",
        description: "Experience visuals as they were intended. We deliver results that rival physical media standards.",
        icon: ShieldCheck,
    },
    {
        title: "Seamless Integration",
        description: "Your assets are ready for any platform—from mobile social feeds to cinematic home theaters.",
        icon: Smartphone,
    },
];

export default function AboutPage() {
    return (
        <main className="min-h-screen font-jakarta text-white">
            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden px-6">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#021a14] via-[#021a14]/60 to-transparent z-10" />
                    {/* Replace with your actual hero image */}
                    <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1492691523567-6170d285094f?q=80&w=2070')] bg-cover bg-center grayscale opacity-30" />
                </div>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    // variants={fadUp}
                    className="relative z-20 max-w-5xl text-center"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 font-bold text-xs mb-6 tracking-[0.2em] uppercase border border-emerald-500/20">
                        The Digital Curator
                    </span>
                    <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-tight">
                        The Future of <span className="text-[#EAB308] italic">Visuals</span> is Here
                    </h1>
                    <p className="text-xl md:text-2xl text-emerald-50/60 max-w-2xl mx-auto font-light leading-relaxed">
                        Elevating your digital presence through intentional curation and breathtaking visual depth.
                    </p>
                    <div className="mt-12">
                        <Button size="lg" className="bg-[#EAB308] hover:bg-[#EAB308]/50 text-[#021a14] rounded-full px-10 h-16 text-lg font-bold shadow-xl shadow-emerald-500/20">
                            Explore Our Work
                        </Button>
                    </div>
                </motion.div>
            </section>

            {/* Asymmetric Bento Grid */}
            <section className="max-w-7xl mx-auto px-6 py-32">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

                    {/* Story Card */}
                    <motion.div
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 20 }}
                        viewport={{ once: true }}
                        className="md:col-span-7 p-10 md:p-14 rounded-[2.5rem] bg-emerald-950/20 border border-emerald-500/10 backdrop-blur-xl relative overflow-hidden group"
                    >
                        <div className="relative z-10">
                            <div className="w-14 h-14 rounded-2xl bg-emerald-500 flex items-center justify-center mb-8 shadow-lg shadow-emerald-500/20">
                                <History className="text-[#021a14]" size={28} />
                            </div>
                            <h2 className="text-4xl font-bold mb-6 tracking-tight text-emerald-50">Our Story</h2>
                            <p className="text-lg text-emerald-50/60 leading-relaxed mb-6">
                                ThePixelVerse is a passion project born from the desire to escape cluttered, generic digital content. We believe every image is an art form that deserves a stage.
                            </p>
                            <p className="text-lg text-emerald-50/60 leading-relaxed">
                                What started as a small collective has grown into a premium sanctuary for brands who value cinematography and the visceral power of the moving image.
                            </p>
                        </div>
                        <History className="absolute -right-10 -bottom-10 text-emerald-500/5 size-64" />
                    </motion.div>

                    {/* Image Card */}
                    <div className="md:col-span-5 rounded-[2.5rem] overflow-hidden relative min-h-[400px] border border-emerald-500/10">
                        <Image
                            src="https://images.unsplash.com/photo-1551033541-20702c58f93a?q=80&w=1974"
                            alt="Cinematography"
                            fill
                            className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </div>

                    {/* Mission Card */}
                    <div className="md:col-span-5 p-10 rounded-[2.5rem] bg-emerald-950/40 border border-emerald-500/10 backdrop-blur-sm">
                        <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-8">
                            <Rocket className="text-emerald-500" size={28} />
                        </div>
                        <h2 className="text-3xl font-bold mb-4 tracking-tight">Our Mission</h2>
                        <p className="text-lg text-emerald-50/60 leading-relaxed">
                            To connect creators across the globe through a curated collection of high-fidelity assets, ensuring indie enthusiasts and global brands alike have access to world-class storytelling.
                        </p>
                    </div>

                    {/* Stats Bar Card */}
                    <div className="md:col-span-7 p-10 rounded-[2.5rem] bg-emerald-500 border border-emerald-400 flex flex-wrap items-center justify-between text-[#021a14]">
                        {stats.map((stat) => (
                            <div key={stat.label} className="space-y-1 py-4">
                                <h3 className="text-5xl font-black tracking-tighter">{stat.value}</h3>
                                <p className="font-bold uppercase tracking-widest text-[10px] opacity-70">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Section */}
            <section className="bg-emerald-950/20 py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="max-w-2xl mb-20">
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
                            Why <span className="text-emerald-500">ThePixelVerse</span>?
                        </h2>
                        <p className="text-xl text-emerald-50/60">
                            We don't just process pixels; we curate experiences that linger long after the delivery.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((f, i) => (
                            <motion.div
                                key={f.title}
                                whileHover={{ y: -10 }}
                                className="p-8 rounded-[2rem] bg-[#021a14] border border-emerald-500/10 hover:border-emerald-500/30 transition-all"
                            >
                                <f.icon className="text-emerald-500 mb-6" size={48} />
                                <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
                                <p className="text-emerald-50/60 leading-relaxed text-sm">
                                    {f.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="max-w-7xl mx-auto px-6 py-32">
                <div className="relative rounded-[3.5rem] overflow-hidden bg-emerald-950 p-16 md:p-24 text-center border border-emerald-500/20">
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                    </div>
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Ready to rediscover digital quality?</h2>
                        <p className="text-xl text-emerald-50/60 mb-12">Join a community of curators and creators today. Start your journey into premium storytelling.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-emerald-500 hover:bg-emerald-400 text-[#021a14] rounded-2xl px-12 h-16 font-bold text-lg">
                                Get Started Now
                            </Button>
                            <Button size="lg" variant="outline" className="border-emerald-500/20 bg-white/5 backdrop-blur-md text-emerald-50 rounded-2xl px-12 h-16 font-bold text-lg hover:bg-white/10">
                                View Services
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}