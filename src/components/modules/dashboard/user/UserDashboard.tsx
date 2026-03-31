"use client";

import { motion } from "framer-motion";
import {
    Bookmark,
    Star,
    Crown,
    ArrowRight,
    Clock,
    Settings,
    CreditCard,
    User as UserIcon
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function UserDashboard({ stats }: { stats: any }) {
    const { user, activeSubscription, stats: userStats } = stats;

    return (
        <div className="p-8 space-y-10 bg-white min-h-screen font-jakarta">
            {/* Welcome Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="font-playfair text-4xl font-black text-slate-900 mb-2">
                        Welcome back, <span className="text-[#EAB308]">{user.name}</span>!
                    </h1>
                    <p className="text-slate-500 font-medium">
                        Member since {new Date(user.createdAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                    </p>
                </div>
                <div className="flex items-center gap-3 bg-slate-50 p-2 rounded-2xl border border-slate-100">
                    <Badge variant="secondary" className="bg-white text-slate-900 border-slate-200 px-4 py-2 font-black rounded-xl">
                        {user.role}
                    </Badge>
                    <Badge className="bg-emerald-500 text-white px-4 py-2 font-black rounded-xl border-0">
                        {user.status}
                    </Badge>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column: Stats & Empty State */}
                <div className="lg:col-span-2 space-y-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <Card className="border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] rounded-3xl group hover:border-[#EAB308]/20 transition-all">
                            <CardContent className="p-8 flex items-center gap-6">
                                <div className="h-16 w-16 bg-[#EAB308]/10 rounded-2xl flex items-center justify-center text-[#EAB308] group-hover:scale-110 transition-transform">
                                    <Bookmark size={32} />
                                </div>
                                <div>
                                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Watchlist</p>
                                    <h3 className="text-3xl font-black text-slate-900">{userStats.totalWatchlist}</h3>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] rounded-3xl group hover:border-[#EAB308]/20 transition-all">
                            <CardContent className="p-8 flex items-center gap-6">
                                <div className="h-16 w-16 bg-slate-900/5 rounded-2xl flex items-center justify-center text-slate-900 group-hover:scale-110 transition-transform">
                                    <Star size={32} />
                                </div>
                                <div>
                                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Reviews</p>
                                    <h3 className="text-3xl font-black text-slate-900">{userStats.totalReviews}</h3>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Empty State Interaction */}
                    <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-[3rem] p-12 text-center">
                        <div className="mx-auto w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 text-slate-300">
                            <Clock size={28} />
                        </div>
                        <h3 className="font-playfair text-2xl font-black text-slate-900 mb-3">Time to binge?</h3>
                        <p className="text-slate-500 max-w-sm mx-auto mb-8 font-medium">
                            Your watchlist is looking a bit lonely. Explore the latest blockbusters and add them here.
                        </p>
                        <Button asChild className="bg-[#EAB308] hover:bg-slate-900 text-white font-black rounded-xl px-10 h-12 shadow-lg shadow-[#EAB308]/20 transition-all">
                            <Link href="/all-movie">Explore Now</Link>
                        </Button>
                    </div>
                </div>

                {/* Right Column: Premium & Settings */}
                <div className="space-y-8">
                    <Card className="bg-slate-900 border-0 rounded-[2.5rem] text-white shadow-2xl shadow-slate-200 overflow-hidden relative">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <Crown size={120} />
                        </div>
                        <CardContent className="p-8 relative z-10">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-[#EAB308] rounded-lg">
                                    <Crown size={20} className="text-white fill-current" />
                                </div>
                                <span className="text-xs font-black uppercase tracking-[0.2em] text-[#EAB308]">Exclusive</span>
                            </div>

                            <h2 className="text-3xl font-playfair font-black mb-4 leading-tight">
                                {activeSubscription ? "Premium Member" : "Upgrade to Premium"}
                            </h2>
                            <p className="text-slate-400 text-sm font-medium mb-8">
                                {activeSubscription
                                    ? "You have full access to all features."
                                    : "Watch in 4K, get early access to reviews, and remove all ads."}
                            </p>

                            {!activeSubscription && (
                                <Button className="w-full bg-[#EAB308] hover:bg-white hover:text-slate-900 text-white font-black rounded-xl h-14 transition-all">
                                    Get Started <ArrowRight size={18} className="ml-2" />
                                </Button>
                            )}
                        </CardContent>
                    </Card>

                    <Card className="border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] rounded-[2.5rem]">
                        <CardHeader>
                            <CardTitle className="text-xs font-black uppercase tracking-widest text-slate-400">Account Management</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-1">
                            {[
                                { icon: UserIcon, label: "Profile Details", href: "/my-profile" },
                                { icon: CreditCard, label: "Subscription", href: "/my-profile" },
                                { icon: Settings, label: "App Settings", href: "/my-profile" }
                            ].map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className="flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-50 text-slate-600 hover:text-slate-900 font-bold transition-all group"
                                >
                                    <item.icon size={18} className="group-hover:text-[#EAB308] transition-colors" />
                                    {item.label}
                                </Link>
                            ))}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}