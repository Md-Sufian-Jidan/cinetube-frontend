import { updateReviewStatus } from "./_actions";
import { httpClient } from "@/lib/axios/httpClient";
import { cookies } from "next/headers";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    CheckCircle,
    XCircle,
    MessageSquare,
    AlertTriangle,
    User,
    Film,
    Calendar
} from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

// This would typically come from your fetch call
const getPendingReviews = async () => {
    const cookieStore = await cookies();
    const sessionToken = cookieStore.get("better-auth.session_token")?.value;

    try {
        const res = await httpClient.get<any>({
            url: "/v1/admin/reviews/pending",
            headers: {
                Cookie: `better-auth.session_token=${sessionToken}`
            }
        });
        return res.data;
    } catch (error) {
        console.error("Error fetching pending reviews:", error);
        return [];
    }
};

export default async function AdminReviewsPage() {
    // const reviews = await getPendingReviews();
    const reviews = [
        {
            id: "bccdcdcb-ca2e-4e59-aa20-0008e683e80e",
            rating: 10,
            content: "Absolutely mind-bending! Christopher Nolan outdid himself with Inception. The layers of dreams and the music are just perfect.",
            tags: [
                "Mind-blowing",
                "Must-watch",
                "Sci-Fi"
            ],
            isSpoiler: false,
            status: "PENDING",
            userId: "K5uD2QulSA2Mn9URkGemBdvXpOiytg6A",
            mediaId: "36e35107-8ef2-4df6-a5d9-8e2be6bd372b",
            createdAt: "2026-03-19T16:18:49.173Z",
            updatedAt: "2026-03-19T16:30:14.429Z",
            user: {
                name: "Admin",
                email: "cinetube@admin.gmail.com"
            },
            media: {
                title: "Breaking Bad"
            }
        },
    ]

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
                {!reviews || reviews.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-20 border-2 border-dashed border-slate-100 rounded-3xl">
                        <MessageSquare className="w-12 h-12 text-slate-200 mb-4" />
                        <p className="text-slate-400 font-medium">No pending reviews found.</p>
                    </div>
                ) : (
                    reviews.map((review: any) => (
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
                                            <form action={async () => { "use server"; await updateReviewStatus(review.id, "PUBLISHED"); }}>
                                                <Button
                                                    type="submit"
                                                    className="w-full bg-[#EAB308] text-white hover:bg-[#EAB308]/90 font-bold h-9 text-xs uppercase tracking-wider"
                                                >
                                                    <CheckCircle className="mr-2 h-4 w-4" /> Approve
                                                </Button>
                                            </form>

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