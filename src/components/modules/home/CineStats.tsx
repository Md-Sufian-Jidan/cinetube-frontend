"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { cn } from "@/lib/utils";

interface StatItemProps {
    value: number;
    suffix?: string;
    label: string;
    duration?: number;
}

function Counter({ value, suffix = "", label, duration = 2 }: StatItemProps) {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (isInView) {
            const controls = animate(count, value, { duration: duration, ease: "easeOut" });
            return controls.stop;
        }
    }, [isInView, count, value, duration]);

    // Sync motion value to React state for rendering
    useEffect(() => {
        rounded.on("change", (v) => setDisplayValue(v));
    }, [rounded]);

    return (
        <div ref={ref} className="flex flex-col items-center justify-center space-y-2 text-center">
            <div className="flex items-baseline font-playfair text-6xl font-black tracking-tighter text-[#EAB308] md:text-8xl">
                <span>{displayValue}</span>
                <span className="text-3xl md:text-5xl">{suffix}</span>
            </div>
            <p className="font-dm-sans text-xs font-bold uppercase tracking-[0.3em] text-slate-500 md:text-sm">
                {label}
            </p>
        </div>
    );
}

export default function CineStats() {
    return (
        <section className="bg-[#0B0E14] py-24 border-y border-white/5">
            <div className="container px-6">
                <div className="grid grid-cols-1 gap-16 md:grid-cols-3 md:gap-8">
                    <Counter
                        value={500}
                        suffix="+"
                        label="Titles Streaming"
                    />
                    <Counter
                        value={12}
                        suffix="k"
                        label="Community Reviews"
                    />
                    <Counter
                        value={98}
                        suffix="%"
                        label="Fresh Ratings"
                    />
                </div>
            </div>
        </section>
    );
}