import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminUserActivityLoading() {
    return (
        <div className="p-6 space-y-8 bg-white min-h-screen font-jakarta">
            {/* Page Header */}
            <div className="space-y-2">
                <Skeleton className="h-10 w-72 bg-slate-100 rounded-lg" />
                <Skeleton className="h-4 w-56 bg-slate-50" />
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                {/* Left Column: Activity Timeline */}
                <Card className="md:col-span-2 border-slate-100 shadow-none">
                    <CardHeader>
                        <Skeleton className="h-6 w-40 bg-slate-100" />
                    </CardHeader>
                    <CardContent className="space-y-8 relative">
                        {/* The Vertical Timeline Line */}
                        <div className="absolute left-[2.25rem] top-8 bottom-8 w-px bg-slate-100" />

                        {Array.from({ length: 6 }).map((_, i) => (
                            <div key={i} className="flex gap-4 relative">
                                {/* Timeline Dot */}
                                <div className="h-10 w-10 rounded-full bg-slate-50 border-4 border-white z-10 flex-shrink-0 flex items-center justify-center">
                                    <Skeleton className="h-4 w-4 rounded-full bg-slate-200" />
                                </div>

                                {/* Activity Details */}
                                <div className="flex-1 pt-1 space-y-2">
                                    <div className="flex justify-between items-start">
                                        <Skeleton className="h-4 w-1/2 bg-slate-100" />
                                        <Skeleton className="h-3 w-16 bg-slate-50" />
                                    </div>
                                    <Skeleton className="h-3 w-3/4 bg-slate-50" />
                                </div>
                            </div>
                        ))}
                    </CardContent>
                </Card>

                {/* Right Column: User Stats Summary */}
                <div className="space-y-6">
                    <Card className="border-slate-100 shadow-none bg-slate-50/50">
                        <CardHeader>
                            <Skeleton className="h-5 w-32 bg-slate-100" />
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {Array.from({ length: 3 }).map((_, i) => (
                                <div key={i} className="flex items-center justify-between">
                                    <Skeleton className="h-3 w-20 bg-slate-200" />
                                    <Skeleton className="h-5 w-10 rounded-lg bg-[#EAB308]/10" />
                                </div>
                            ))}
                        </CardContent>
                    </Card>

                    <Card className="border-slate-100 shadow-none overflow-hidden">
                        <CardHeader className="bg-[#EAB308]/5 border-b border-[#EAB308]/10">
                            <Skeleton className="h-5 w-40 bg-[#EAB308]/20" />
                        </CardHeader>
                        <CardContent className="p-6">
                            <Skeleton className="h-32 w-full rounded-xl bg-slate-100" />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}