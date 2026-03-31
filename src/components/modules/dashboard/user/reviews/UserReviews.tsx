"use client";

import { motion } from "framer-motion";
import {
    MessageSquare,
    Star,
    Calendar,
    AlertTriangle,
    Clock,
    CheckCircle2,
    MoreVertical,
    Trash2,
    Edit3
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import Image from "next/image";

export default function UserReviews({ reviews }: { reviews: any[] }) {
    if (!reviews || reviews.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-24 px-6 text-center bg-white">
                <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-6 border border-slate-100">
                    <MessageSquare className="text-slate-300 w-10 h-10" />
                </div>
                <h2 className="font-playfair text-3xl font-black text-slate-900 mb-2">No reviews yet</h2>
                <p className="text-slate-500 font-medium max-w-xs mx-auto">
                    Share your thoughts on movies you've watched to start building your profile.
                </p>
            </div>
        );
    }

    return (
        <div className="p-8 space-y-8 bg-white min-h-screen font-jakarta">
            {/* Header */}
            <div className="flex flex-col gap-1">
                <h1 className="font-playfair text-4xl font-black text-slate-900">
                    My <span className="text-[#EAB308]">Reviews</span>
                </h1>
                <p className="text-sm text-slate-500 font-medium">Manage and track your community feedback.</p>
            </div>

            <div className="grid gap-6">
                {reviews.map((review, index) => (
                    <motion.div
                        key={review.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                    >
                        <Card className="group overflow-hidden border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.06)] transition-all rounded-[2rem]">
                            <CardContent className="p-0">
                                <div className="flex flex-col md:flex-row">
                                    {/* Poster Area */}
                                    <div className="relative w-full md:w-48 h-64 md:h-auto overflow-hidden">
                                        <Image
                                            src={review.media.posterUrl}
                                            alt={review.media.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent md:hidden" />
                                        <div className="absolute bottom-4 left-4 md:hidden">
                                            <h3 className="text-white font-black text-xl">{review.media.title}</h3>
                                        </div>
                                    </div>

                                    {/* Content Area */}
                                    <div className="flex-1 p-6 md:p-8 space-y-4">
                                        <div className="flex items-start justify-between">
                                            <div className="space-y-1">
                                                <div className="flex items-center gap-2">
                                                    <h3 className="hidden md:block font-playfair text-2xl font-black text-slate-900 leading-none">
                                                        {review.media.title}
                                                    </h3>
                                                    <Badge className="bg-[#EAB308] text-white font-bold px-2 py-0.5 rounded-lg border-0">
                                                        {review.rating}/10
                                                    </Badge>
                                                </div>
                                                <div className="flex items-center gap-3 text-slate-400">
                                                    <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider">
                                                        <Calendar size={12} />
                                                        {format(new Date(review.createdAt), "MMM d, yyyy")}
                                                    </div>
                                                    <span className="text-slate-200">•</span>
                                                    {review.status === "PENDING" ? (
                                                        <Badge variant="outline" className="text-amber-500 border-amber-100 bg-amber-50 gap-1 rounded-full text-[10px] font-black uppercase">
                                                            <Clock size={10} /> Pending
                                                        </Badge>
                                                    ) : (
                                                        <Badge variant="outline" className="text-emerald-500 border-emerald-100 bg-emerald-50 gap-1 rounded-full text-[10px] font-black uppercase">
                                                            <CheckCircle2 size={10} /> Published
                                                        </Badge>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="flex gap-2">
                                                <Button variant="ghost" size="icon" className="rounded-full text-slate-400 hover:text-slate-900 hover:bg-slate-50">
                                                    <Edit3 size={18} />
                                                </Button>
                                                <Button variant="ghost" size="icon" className="rounded-full text-slate-400 hover:text-red-500 hover:bg-red-50">
                                                    <Trash2 size={18} />
                                                </Button>
                                            </div>
                                        </div>

                                        <div className="relative">
                                            {review.isSpoiler && (
                                                <div className="mb-3 inline-flex items-center gap-1.5 px-2 py-0.5 bg-red-50 text-red-500 border border-red-100 rounded text-[10px] font-black uppercase">
                                                    <AlertTriangle size={10} /> Spoiler Alert
                                                </div>
                                            )}
                                            <p className="text-slate-600 leading-relaxed font-medium italic">
                                                "{review.content}"
                                            </p>
                                        </div>

                                        <div className="flex flex-wrap gap-2 pt-2">
                                            {review.tags.map((tag: string) => (
                                                <span key={tag} className="text-[10px] font-black text-slate-400 bg-slate-50 px-3 py-1 rounded-full border border-slate-100 uppercase tracking-tighter group-hover:border-[#EAB308]/20 group-hover:text-slate-900 transition-all">
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}