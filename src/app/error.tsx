"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, RefreshCcw, Home, Film } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="relative flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center">
            {/* Decorative Faded Icon */}
            <div className="absolute -bottom-10 -left-10 opacity-[0.03] -rotate-12 pointer-events-none">
                <Film size={400} className="text-slate-900" />
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="z-10 max-w-lg"
            >
                {/* Warning Icon with Gold Glow */}
                <div className="mb-8 inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-[#EAB308]/10 text-[#EAB308] shadow-xl shadow-[#EAB308]/5">
                    <AlertTriangle size={40} />
                </div>

                <h1 className="font-playfair text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
                    Technical <span className="text-[#EAB308]">Glitch</span>
                </h1>

                <p className="mt-4 font-jakarta text-slate-500 md:text-lg">
                    The projector seems to have jammed. Our team has been notified of this unexpected intermission.
                </p>

                {/* Action Buttons */}
                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Button
                        onClick={() => reset()}
                        size="lg"
                        className="group h-12 bg-[#EAB308] px-8 font-jakarta font-bold uppercase tracking-wider text-white hover:bg-[#EAB308]/90 shadow-lg shadow-[#EAB308]/20"
                    >
                        <RefreshCcw className="mr-2 h-4 w-4 transition-transform group-hover:rotate-180 duration-500" />
                        Resume Scene
                    </Button>

                    <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="h-12 border-slate-200 bg-transparent px-8 font-jakarta font-bold uppercase tracking-wider text-slate-600 hover:bg-slate-50 hover:text-[#EAB308] hover:border-[#EAB308]/30"
                    >
                        <Link href="/">
                            <Home className="mr-2 h-4 w-4" />
                            Back to Home
                        </Link>
                    </Button>
                </div>

                {/* Error Digest (Optional/Debug) */}
                {error.digest && (
                    <p className="mt-8 font-mono text-[10px] text-slate-300 uppercase tracking-widest">
                        Error ID: {error.digest}
                    </p>
                )}
            </motion.div>
        </div>
    );
}