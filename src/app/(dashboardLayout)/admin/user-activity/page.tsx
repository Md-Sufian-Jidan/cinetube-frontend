import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MessageSquare, History, CheckCircle2, Clock } from "lucide-react";
import { format } from "date-fns";
import { getUserActivity } from "./_actions";
import { cn } from "@/lib/utils";

export default async function UserActivityPage() {
    const activity = await getUserActivity();

    if (!activity) return <div>Failed to load activity.</div>;

    const { recentReviews = [] } = activity;

    return (
        <div className="p-6 space-y-8 bg-white min-h-screen font-jakarta">
            {/* Header Section */}
            <div className="flex flex-col gap-1">
                <h1 className="font-playfair text-3xl font-bold text-slate-900">
                    User <span className="text-[#EAB308]">Activity</span>
                </h1>
                <p className="text-sm text-slate-500">Monitor community engagement and review status.</p>
            </div>

            <div className="grid gap-6">
                {/* Recent Reviews Section */}
                <Card className="border-slate-200 shadow-sm overflow-hidden">
                    <CardHeader className="bg-slate-50/50 border-b border-slate-100">
                        <div className="flex items-center gap-2">
                            <MessageSquare className="w-5 h-5 text-[#EAB308]" />
                            <CardTitle className="text-lg">Recent Reviews</CardTitle>
                        </div>
                        <CardDescription>Latest movie and series feedback from users.</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                        <div className="divide-y divide-slate-100">
                            {recentReviews.map((review: any) => (
                                <div key={review.id} className="p-6 hover:bg-slate-50/50 transition-colors">
                                    <div className="flex flex-col md:flex-row justify-between gap-4">
                                        {/* Left Side: User & Media Info */}
                                        <div className="space-y-3 flex-1">
                                            <div className="flex items-center gap-3">
                                                <div className="h-10 w-10 rounded-full bg-[#EAB308]/10 flex items-center justify-center font-bold text-[#EAB308]">
                                                    {review.user.name.charAt(0)}
                                                </div>
                                                <div>
                                                    <p className="text-sm font-bold text-slate-900">{review.user.name}</p>
                                                    <p className="text-xs text-slate-500">{review.user.email}</p>
                                                </div>
                                                <Badge variant="outline" className="ml-2 border-[#EAB308]/20 bg-[#EAB308]/5 text-[#EAB308]">
                                                    {review.media.title}
                                                </Badge>
                                            </div>

                                            <p className="text-sm text-slate-700 leading-relaxed italic">
                                                "{review.content}"
                                            </p>

                                            <div className="flex flex-wrap gap-2">
                                                {review.tags.map((tag: string) => (
                                                    <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                                                        #{tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Right Side: Metrics & Status */}
                                        <div className="flex flex-col items-end gap-3 min-w-[140px]">
                                            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 text-white shadow-lg">
                                                <Star className="w-4 h-4 text-[#EAB308] fill-current" />
                                                <span className="text-sm font-bold">{review.rating}/10</span>
                                            </div>

                                            <Badge
                                                className={cn(
                                                    "px-4 py-1.5 uppercase tracking-widest text-[10px] font-black",
                                                    review.status === "PUBLISHED"
                                                        ? "bg-green-500/10 text-green-600 border-green-200"
                                                        : "bg-[#EAB308]/10 text-[#EAB308] border-[#EAB308]/20"
                                                )}
                                                variant="outline"
                                            >
                                                {review.status === "PUBLISHED" ? <CheckCircle2 size={12} className="mr-1 inline" /> : <Clock size={12} className="mr-1 inline" />}
                                                {review.status}
                                            </Badge>

                                            <p className="text-[10px] text-slate-400 mt-auto flex items-center gap-1">
                                                <History size={12} />
                                                {format(new Date(review.createdAt), "MMM d, yyyy • h:mm a")}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}