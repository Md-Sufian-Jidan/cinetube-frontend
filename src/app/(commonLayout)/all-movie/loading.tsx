import { Skeleton } from "@/components/ui/skeleton";

export default function AllMovieLoading() {
    return (
        <div className="bg-white min-h-screen font-jakarta">
            {/* Hero Header Skeleton */}
            <section className="bg-slate-50 border-b border-slate-100 py-16 px-6">
                <div className="max-w-7xl mx-auto space-y-6">
                    <div className="space-y-3">
                        <Skeleton className="h-12 w-full md:w-[600px] bg-slate-200" />
                        <Skeleton className="h-12 w-[80%] md:w-[400px] bg-slate-200" />
                    </div>
                    <Skeleton className="h-4 w-full md:w-[500px] bg-slate-100" />

                    <div className="flex flex-col md:flex-row gap-4 pt-4">
                        <Skeleton className="h-14 w-full md:w-96 rounded-full bg-white shadow-sm border border-slate-100" />
                        <Skeleton className="h-14 w-32 rounded-full bg-slate-100" />
                    </div>
                </div>
            </section>

            {/* Grid Section */}
            <section className="max-w-7xl mx-auto p-6 py-12">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                    {/* Creating 10 skeleton cards */}
                    {Array.from({ length: 10 }).map((_, i) => (
                        <div key={i} className="space-y-4">
                            {/* Poster Skeleton (2:3 Aspect Ratio) */}
                            <Skeleton className="aspect-[2/3] w-full rounded-2xl bg-slate-100 shadow-sm" />

                            <div className="space-y-2 px-1">
                                {/* Title Skeleton */}
                                <Skeleton className="h-5 w-[80%] bg-slate-100" />

                                {/* Year & Type Skeleton */}
                                <Skeleton className="h-3 w-[40%] bg-slate-50" />

                                {/* Rating & Review Count Skeleton */}
                                <div className="flex justify-between items-center pt-2">
                                    <Skeleton className="h-7 w-14 rounded-lg bg-[#EAB308]/5" />
                                    <Skeleton className="h-3 w-16 bg-slate-50" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination Skeleton */}
                <div className="mt-16 flex items-center justify-center gap-4">
                    <Skeleton className="h-12 w-12 rounded-full bg-slate-50" />
                    <div className="flex gap-2">
                        <Skeleton className="h-12 w-12 rounded-full bg-[#EAB308]/10" />
                        <Skeleton className="h-12 w-12 rounded-full bg-slate-50" />
                        <Skeleton className="h-12 w-12 rounded-full bg-slate-50" />
                    </div>
                    <Skeleton className="h-12 w-12 rounded-full bg-slate-50" />
                </div>
            </section>
        </div>
    );
}