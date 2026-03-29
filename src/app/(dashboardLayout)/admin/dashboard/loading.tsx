import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function AdminDashboardLoading() {
    return (
        <div className="p-6 space-y-8 bg-white min-h-screen">
            {/* Header Skeleton */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-2">
                    <Skeleton className="h-10 w-64 bg-slate-100 rounded-lg" />
                    <Skeleton className="h-4 w-48 bg-slate-50" />
                </div>
                <Skeleton className="h-10 w-32 bg-slate-50 rounded-xl" />
            </div>

            {/* Stats Grid Skeleton */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {Array.from({ length: 4 }).map((_, i) => (
                    <Card key={i} className="border-slate-100 shadow-none">
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <Skeleton className="h-3 w-24 bg-slate-100" />
                            <Skeleton className="h-8 w-8 rounded-lg bg-slate-100" />
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <Skeleton className="h-9 w-16 bg-slate-100" />
                            <Skeleton className="h-3 w-32 bg-slate-50" />
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Main Content Skeleton */}
            <div className="grid gap-6 md:grid-cols-7">
                <Card className="md:col-span-4 border-slate-100 shadow-none">
                    <CardHeader className="space-y-2">
                        <Skeleton className="h-6 w-40 bg-slate-100" />
                        <Skeleton className="h-4 w-60 bg-slate-50" />
                    </CardHeader>
                    <CardContent className="p-6 pt-0">
                        <Skeleton className="h-[200px] w-full bg-slate-50/50 rounded-xl border border-dashed border-slate-100" />
                    </CardContent>
                </Card>

                <Card className="md:col-span-3 border-slate-100 shadow-none">
                    <CardHeader>
                        <Skeleton className="h-6 w-32 bg-slate-100" />
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <Skeleton className="h-12 w-full bg-[#EAB308]/10 rounded-xl" />
                        <Skeleton className="h-12 w-full bg-slate-100 rounded-xl" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}