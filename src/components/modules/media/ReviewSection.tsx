"use client";

import { useState } from "react";
import { ThumbsUp, MessageSquare, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { addComment, toggleLike } from "@/app/(commonLayout)/all-movie/_actions";
import { IReview } from "@/types/review.types";

import { MessageSquareOff } from "lucide-react";

export default function ReviewSection({ reviews }: { reviews: any[] }) {
    const hasReviews = reviews && reviews.length > 0;

    return (
        <section className="mt-12">
            <h2 className="text-2xl font-serif font-bold mb-6 text-slate-900">User Reviews</h2>

            {!hasReviews ? (
                <div className="flex flex-col items-center justify-center py-12 px-4 border-2 border-dashed border-slate-200 rounded-3xl bg-slate-50/50">
                    <div className="bg-white p-4 rounded-full shadow-sm mb-4">
                        <MessageSquareOff className="w-8 h-8 text-slate-300" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">No reviews yet</h3>
                    <p className="text-slate-500 text-center max-w-[250px] mt-2">
                        Be the first one to share your thoughts about this premiere!
                    </p>
                </div>
            ) : (
                // 3. Render List if reviews exist
                <div className="space-y-6">
                    {reviews.map((review) => (
                        <ReviewCard key={review.id} review={review} />
                    ))}
                </div>
            )}
        </section>
    );
}

function ReviewCard({ review }: { review: IReview }) {
    const [showCommentInput, setShowCommentInput] = useState(false);
    const [commentText, setCommentText] = useState("");

    const handleLikeToggle = async () => {
        const res = await toggleLike(review.id);
        if (!res.success) {
            // Revert if API fails
        }
    };

    const handleCommentSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!commentText.trim()) return;

        const res = await addComment(review.id, commentText);
        if (res.success) {
            setCommentText("");
            // You could trigger a router.refresh() here to show the new comment
        }
    };

    return (
        <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
            <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-400">
                    {review.user?.name?.[0] || "U"}
                </div>
                <div>
                    <p className="font-semibold text-slate-900">{review.user?.name}</p>
                    <p className="text-xs text-slate-500">Reviewer</p>
                </div>
            </div>

            <p className="text-slate-600 mb-6 leading-relaxed">
                {review.content || "No review text provided."}
            </p>

            <div className="flex items-center gap-4 border-t border-slate-50 pt-4">
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleLikeToggle}
                    className={cn(
                        "rounded-full gap-2 transition-all"
                    )}
                >
                    <ThumbsUp className={cn("w-4 h-4")} />
                </Button>

                <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowCommentInput(!showCommentInput)}
                    className="rounded-full gap-2 text-slate-500"
                >
                    <MessageSquare className="w-4 h-4" />
                </Button>
            </div>

            {showCommentInput && (
                <form onSubmit={handleCommentSubmit} className="mt-4 flex gap-2 animate-in fade-in slide-in-from-top-1">
                    <Input
                        placeholder="Write a comment..."
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                        className="rounded-xl bg-slate-50 border-none focus-visible:ring-1 focus-visible:ring-slate-200"
                    />
                    <Button type="submit" size="icon" className="rounded-xl bg-slate-900 shrink-0">
                        <Send className="w-4 h-4 text-white" />
                    </Button>
                </form>
            )}
        </div>
    );
}