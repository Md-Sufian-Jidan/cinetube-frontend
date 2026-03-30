import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Star, Film, TrendingUp, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { getMediaAnalytics } from "./_actions";
import { MediaAnalytics } from "@/types/media.types";

export default async function MediaAnalyticsPage() {
    const data: MediaAnalytics[] = await getMediaAnalytics();
    // Calculate quick stats
    const totalMedia = data?.length || 0;
    const totalReviews = data?.reduce((acc: number, item: MediaAnalytics) => acc + item.totalReviews, 0) || 0;
    const topRated = data?.length > 0 ? data?.reduce((prev: MediaAnalytics, current: MediaAnalytics) =>
        (prev.averageRating > current.averageRating) ? prev : current
        , data[0]) : null;
    const totalPendingMedia = data?.filter((item: MediaAnalytics) => item.status === "PENDING") || [];
    const publishedMedia = data?.filter((item: MediaAnalytics) => item.status === "PUBLISHED") || [];
    const unpublishedMedia = data?.filter((item: MediaAnalytics) => item.status === "UNPUBLISHED") || [];

    return (
        <div className="p-6 space-y-8 bg-white min-h-screen font-jakarta">
            {/* Page Header */}
            <div className="flex flex-col gap-1">
                <h1 className="font-playfair text-3xl font-bold text-slate-900">
                    Media <span className="text-[#EAB308]">Analytics</span>
                </h1>
                <p className="text-sm text-slate-500">Track performance and audience reception of your library.</p>
            </div>

            {/* Top Level Stats Cards */}
            <div className="grid gap-4 md:grid-cols-3">
                <Card className="border-slate-100 shadow-sm bg-slate-50/50">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-xs font-bold uppercase tracking-widest text-slate-500">Total Pending Reviews</CardTitle>
                        <Film className="h-4 w-4 text-[#EAB308]" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-slate-900">{totalPendingMedia.length}</div>
                        <p className="text-[10px] text-slate-400 mt-1 uppercase">Pending reviews</p>
                    </CardContent>
                </Card>

                <Card className="border-slate-100 shadow-sm bg-slate-50/50">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-xs font-bold uppercase tracking-widest text-slate-500">Total Engagement</CardTitle>
                        <Users className="h-4 w-4 text-[#EAB308]" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-slate-900">{totalReviews}</div>
                        <p className="text-[10px] text-slate-400 mt-1 uppercase">Community reviews</p>
                    </CardContent>
                </Card>

                <Card className="border-slate-100 shadow-sm bg-slate-50/50">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-xs font-bold uppercase tracking-widest text-slate-500">Total Pending Media</CardTitle>
                        <TrendingUp className="h-4 w-4 text-[#EAB308]" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-slate-900 truncate">{totalPendingMedia.length || "N/A"}</div>
                        <p className="text-[10px] text-slate-400 mt-1 uppercase">Pending media</p>
                    </CardContent>
                </Card>

                <Card className="border-slate-100 shadow-sm bg-slate-50/50">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-xs font-bold uppercase tracking-widest text-slate-500">Total Published Media</CardTitle>
                        <TrendingUp className="h-4 w-4 text-[#EAB308]" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-slate-900 truncate">{publishedMedia.length || "N/A"}</div>
                        <p className="text-[10px] text-slate-400 mt-1 uppercase">Published media</p>
                    </CardContent>
                </Card>

                <Card className="border-slate-100 shadow-sm bg-slate-50/50">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-xs font-bold uppercase tracking-widest text-slate-500">Total Unpublished Media</CardTitle>
                        <Users className="h-4 w-4 text-[#EAB308]" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-slate-900">{unpublishedMedia.length}</div>
                        <p className="text-[10px] text-slate-400 mt-1 uppercase">Unpublished media</p>
                    </CardContent>
                </Card>

                <Card className="border-slate-100 shadow-sm bg-[#EAB308]/5 border-[#EAB308]/10">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-xs font-bold uppercase tracking-widest text-[#EAB308]">Top Performer</CardTitle>
                        <TrendingUp className="h-4 w-4 text-[#EAB308]" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-slate-900 truncate">{topRated?.title || "N/A"}</div>
                        <div className="flex items-center gap-1 mt-1">
                            <Star className="h-3 w-3 fill-[#EAB308] text-[#EAB308]" />
                            <span className="text-[10px] font-bold text-slate-500 uppercase">{topRated?.averageRating}/10 Rating</span>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Detailed Analytics Table */}
            <Card className="border-slate-200 shadow-md">
                <CardHeader className="border-b border-slate-100 bg-white">
                    <div className="flex items-center gap-2">
                        <BarChart3 className="text-[#EAB308] w-5 h-5" />
                        <CardTitle className="text-lg">Content Performance</CardTitle>
                    </div>
                    <CardDescription>Breakdown of ratings and reviews per title.</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader className="bg-slate-50">
                            <TableRow>
                                <TableHead className="font-bold text-slate-900">Media Title</TableHead>
                                <TableHead className="font-bold text-slate-900">Total Reviews</TableHead>
                                <TableHead className="font-bold text-slate-900">Average Rating</TableHead>
                                <TableHead className="font-bold text-slate-900">Published</TableHead>
                                <TableHead className="font-bold text-slate-900">Unpublished</TableHead>
                                <TableHead className="text-right font-bold text-slate-900">Reception</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {data?.map((media: MediaAnalytics) => (
                                <TableRow key={media.id} className="hover:bg-slate-50/50 transition-colors">
                                    <TableCell className="font-bold text-slate-700">{media.title}</TableCell>
                                    <TableCell>
                                        <Badge variant="outline" className="bg-slate-100 text-slate-600 border-slate-200">
                                            {media.totalReviews} Reviews
                                        </Badge>
                                    </TableCell>
                                    <TableCell>
                                        {media.status}
                                    </TableCell>
                                    <TableCell>
                                        {media.status}
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-2">
                                            <Star className={cn("w-4 h-4", media.averageRating > 0 ? "fill-[#EAB308] text-[#EAB308]" : "text-slate-300")} />
                                            <span className="font-bold text-slate-900">{media.averageRating}/10</span>
                                        </div>
                                    </TableCell>
                                    <TableCell className="w-[200px]">
                                        <div className="flex flex-col gap-1.5 items-end">
                                            <Progress
                                                value={media.averageRating * 10}
                                                className="h-1.5 w-32 bg-slate-100"
                                            />
                                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                                                {media.averageRating >= 8 ? "Excellent" : media.averageRating >= 5 ? "Good" : "No Data"}
                                            </span>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}