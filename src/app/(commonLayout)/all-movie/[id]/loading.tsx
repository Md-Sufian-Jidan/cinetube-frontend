import { Skeleton } from "@/components/ui/skeleton";

export default function MovieDetailsLoading() {
    return (
        <div className="min-h-screen bg-white font-jakarta">
            {/* Hero Skeleton */}
            <div className="relative h-[60vh] w-full bg-slate-100 overflow-hidden">
                <div className="absolute inset-0 flex items-center container mx-auto px-6">
                    <div className="flex flex-col md:flex-row gap-10 items-end w-full">

                        {/* Poster Skeleton */}
                        <Skeleton className="hidden md:block w-64 aspect-[2/3] rounded-3xl bg-slate-200/50 border border-white/10" />

                        <div className="space-y-6 flex-1 pb-4">
                            {/* Badge Skeleton */}
                            <Skeleton className="h-6 w-24 rounded-lg bg-slate-200/50" />

                            {/* Title Skeleton */}
                            <div className="space-y-3">
                                <Skeleton className="h-16 w-3/4 rounded-2xl bg-slate-200/50" />
                                <Skeleton className="h-16 w-1/2 rounded-2xl bg-slate-200/50 md:hidden" />
                            </div>

                            {/* Meta Info Skeletons */}
                            <div className="flex items-center gap-6">
                                <Skeleton className="h-5 w-20 rounded-md bg-slate-200/50" />
                                <Skeleton className="h-5 w-20 rounded-md bg-slate-200/50" />
                                <Skeleton className="h-7 w-24 rounded-full bg-slate-200/50" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section Skeleton */}
            <div className="container mx-auto px-6 py-20">
                <div className="max-w-3xl space-y-8">
                    {/* Section Title */}
                    <Skeleton className="h-10 w-48 rounded-lg" />

                    {/* Paragraph Lines */}
                    <div className="space-y-4">
                        <Skeleton className="h-5 w-full rounded-md" />
                        <Skeleton className="h-5 w-[95%] rounded-md" />
                        <Skeleton className="h-5 w-[98%] rounded-md" />
                        <Skeleton className="h-5 w-[40%] rounded-md" />
                    </div>
                </div>
            </div>
        </div>
    );
}