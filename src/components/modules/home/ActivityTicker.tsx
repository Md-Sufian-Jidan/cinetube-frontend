"use client";

import { motion } from "framer-motion";
import { Star, MessageCircle, Zap, TrendingUp } from "lucide-react";

// Mock data reflecting your API structure
const activities = [
    { id: 1, user: "Jidan", action: "rated", target: "Breaking Bad", value: "10/10", icon: <Star className="h-6 w-6 fill-[#EAB308] text-[#EAB308]" /> },
    { id: 2, user: "Admin", action: "published", target: "Inception Review", icon: <MessageCircle className="h-6 w-6 text-[#EAB308]" /> },
    { id: 3, user: "Sarah", action: "added", target: "Dark Knight", to: "Watchlist", icon: <Zap className="h-6 w-6 text-[#EAB308]" /> },
    { id: 4, user: "Mike", action: "rented", target: "The Whale", icon: <TrendingUp className="h-6 w-6 text-[#EAB308]" /> },
    { id: 5, user: "CineBot", action: "trending", target: "Better Call Saul", icon: <Star className="h-6 w-6 fill-[#EAB308] text-[#EAB308]" /> },
    { id: 6, user: "CineBot", action: "trending", target: "Better Call Saul", icon: <Star className="h-6 w-6 fill-[#EAB308] text-[#EAB308]" /> },
    { id: 7, user: "CineBot", action: "trending", target: "Better Call Saul", icon: <Star className="h-6 w-6 fill-[#EAB308] text-[#EAB308]" /> },
    { id: 8, user: "CineBot", action: "trending", target: "Better Call Saul", icon: <Star className="h-6 w-6 fill-[#EAB308] text-[#EAB308]" /> },
    { id: 9, user: "CineBot", action: "trending", target: "Better Call Saul", icon: <Star className="h-6 w-6 fill-[#EAB308] text-[#EAB308]" /> },
    { id: 10, user: "CineBot", action: "trending", target: "Better Call Saul", icon: <Star className="h-6 w-6 fill-[#EAB308] text-[#EAB308]" /> },
];

export default function ActivityTicker() {
    // Duplicate the array to create a seamless loop
    const duplicatedActivities = [...activities, ...activities, ...activities];

    return (
        <div className="relative w-full overflow-hidden border-y border-[#EAB308] bg-white py-3 backdrop-blur-sm">
            <motion.div
                className="flex whitespace-nowrap"
                animate={{
                    x: ["0%", "-50%"],
                }}
                transition={{
                    ease: "linear",
                    duration: 60,
                    repeat: Infinity,
                }}
            >
                {duplicatedActivities.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center space-x-3 px-8 border-r border-[#EAB308]"
                    >
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#EAB308]/10">
                            {item.icon}
                        </div>
                        <p className="text-lg font-bold font-dm-sans tracking-wide text-black">
                            <span>@{item.user}</span>{" "}
                            <span>{item.action}</span>{" "}
                            <span className="font-medium text-[#EAB308]">{item.target}</span>
                            {item.value && (
                                <span className="ml-2 rounded bg-[#EAB308] px-1.5 py-0.5 text-[10px] font-black text-[#0B0E14]">
                                    {item.value}
                                </span>
                            )}
                        </p>
                    </div>
                ))}
            </motion.div>

            {/* Gradient Fades for the edges */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#EAB308]/50 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#EAB308]/50 to-transparent" />
        </div>
    );
}