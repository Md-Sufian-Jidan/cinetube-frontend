import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function AdminReviewModerationLoading() {
    return (
        <div className="p-6 space-y-8 bg-white min-h-screen font-jakarta">
            {/* Header Skeleton */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-2">
                    <h1 className="h-10 w-64 bg-slate-100 rounded-lg animate-pulse" />
                    <p className="h-4 w-56 bg-slate-50 animate-pulse" />
                </div>
                <div className="flex gap-2">
                    <Skeleton className="h-10 w-32 rounded-full bg-slate-50" />
                    <Skeleton className="h-10 w-32 rounded-full bg-slate-50" />
                </div>
            </div>

            {/* Reviews List Skeleton */}
            <div className="space-y-4">
                {Array.from({ length: 4 }).map((_, i) => (
                    <Card key={i} className="border-slate-100 shadow-sm overflow-hidden">
                        <div className="flex flex-col md:flex-row">
                            {/* Media Poster Skeleton */}
                            <div className="w-full md:w-32 h-48 md:h-auto bg-slate-100 animate-pulse" />

                            <div className="flex-1 p-6 space-y-4">
                                <div className="flex items-start justify-between">
                                    <div className="space-y-2">
                                        {/* Movie Title & User Info */}
                                        <Skeleton className="h-5 w-48 bg-slate-100" />
                                        <Skeleton className="h-3 w-32 bg-slate-50" />
                                    </div>
                                    {/* Rating Badge */}
                                    <Skeleton className="h-8 w-16 bg-[#EAB308]/10 rounded-lg" />
                                </div>

                                {/* Review Content Lines */}
                                <div className="space-y-2 pt-2">
                                    <Skeleton className="h-4 w-full bg-slate-50" />
                                    <Skeleton className="h-4 w-[90%] bg-slate-50" />
                                    <Skeleton className="h-4 w-[40%] bg-slate-50" />
                                </div>

                                {/* Action Footer */}
                                <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                                    <div className="flex gap-2">
                                        <Skeleton className="h-6 w-20 rounded-md bg-slate-100" />
                                        <Skeleton className="h-6 w-24 rounded-md bg-red-50" />
                                    </div>
                                    <div className="flex gap-3">
                                        <Skeleton className="h-9 w-24 rounded-xl bg-slate-900" />
                                        <Skeleton className="h-9 w-24 rounded-xl bg-[#EAB308]/20" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}