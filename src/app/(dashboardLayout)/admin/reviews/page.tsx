import { getPendingReviews, updateReviewStatus } from "./_actions";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    XCircle,
    MessageSquare,
    AlertTriangle,
    User,
    Film,
    Calendar,
    Loader2,
} from "lucide-react";
import { format } from "date-fns";
import { IReview } from "@/types/review.types";
import ApproveButton from "@/components/modules/dashboard/admin/reviews/ApproveButton";
import { useQuery } from "@tanstack/react-query";

export default async function AdminReviewsPage() {
    const { data: reviews, isLoading } = useQuery({
        queryKey: ["pending-reviews"],
        queryFn: getPendingReviews,
    })

    return (
        <div className="p-6 space-y-8 bg-white min-h-screen font-jakarta">
            {/* Header */}
            <div className="flex flex-col gap-1">
                <h1 className="font-playfair text-3xl font-bold text-slate-900">
                    Review <span className="text-[#EAB308]">Moderation</span>
                </h1>
                <p className="text-sm text-slate-500">Approve or unpublish community feedback to maintain quality.</p>
            </div>

            <div className="grid gap-6">
                {isLoading ? (
                    <div className="flex flex-col items-center justify-center py-20 border-2 border-dashed border-slate-100 rounded-3xl">
                        <Loader2 className="w-12 h-12 text-slate-200 mb-4 animate-spin" />
                        <p className="text-slate-400 font-medium">Loading reviews...</p>
                    </div>
                ) : !reviews || reviews.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-20 border-2 border-dashed border-slate-100 rounded-3xl">
                        <MessageSquare className="w-12 h-12 text-slate-200 mb-4" />
                        <p className="text-slate-400 font-medium">No pending reviews found.</p>
                    </div>
                ) : (
                    reviews.map((review: IReview) => (
                        <Card key={review.id} className="border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                            <CardContent className="p-0">
                                <div className="flex flex-col lg:flex-row">
                                    {/* Review Content Area */}
                                    <div className="flex-1 p-6 space-y-4">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <Badge className="bg-slate-900 text-white font-bold">{review.rating}/10</Badge>
                                                <span className="text-slate-400 text-xs">on</span>
                                                <div className="flex items-center gap-1 font-bold text-slate-900">
                                                    <Film size={14} className="text-[#EAB308]" />
                                                    {review.media.title}
                                                </div>
                                            </div>

                                            {review.isSpoiler && (
                                                <Badge variant="outline" className="text-red-500 border-red-100 bg-red-50 gap-1 uppercase text-[10px] font-black">
                                                    <AlertTriangle size={12} /> Spoiler Alert
                                                </Badge>
                                            )}
                                        </div>

                                        <p className="text-slate-600 leading-relaxed text-sm italic">
                                            "{review.content}"
                                        </p>

                                        <div className="flex flex-wrap gap-2">
                                            {review.tags.map((tag: string) => (
                                                <span key={tag} className="text-[10px] font-bold text-[#EAB308] bg-[#EAB308]/10 px-2 py-0.5 rounded-full">
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                        <p className="text-slate-600 leading-relaxed text-sm italic">
                                            Status: {review.status}
                                        </p>
                                    </div>

                                    {/* Sidebar / Actions Area */}
                                    <div className="bg-slate-50/50 lg:w-72 p-6 border-l border-slate-100 flex flex-col justify-between gap-6">
                                        <div className="space-y-3">
                                            <div className="flex items-center gap-3">
                                                <div className="h-8 w-8 rounded-full bg-white border border-slate-200 flex items-center justify-center">
                                                    <User size={14} className="text-slate-400" />
                                                </div>
                                                <div className="overflow-hidden">
                                                    <p className="text-xs font-bold text-slate-900 truncate">{review.user.name}</p>
                                                    <p className="text-[10px] text-slate-500 truncate">{review.user.email}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2 text-slate-400">
                                                <Calendar size={12} />
                                                <span className="text-[10px] font-medium">{format(new Date(review.createdAt), "MMM d, yyyy")}</span>
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-2">
                                            <ApproveButton review={review} />

                                            <form action={async () => { "use server"; await updateReviewStatus(review.id, "PENDING"); }}>
                                                <Button
                                                    type="submit"
                                                    variant="outline"
                                                    className="w-full border-slate-200 text-slate-500 hover:bg-red-50 hover:text-red-500 hover:border-red-100 font-bold h-9 text-xs uppercase tracking-wider transition-all"
                                                >
                                                    <XCircle className="mr-2 h-4 w-4" /> Reject
                                                </Button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))
                )}
            </div>
        </div>
    );
}