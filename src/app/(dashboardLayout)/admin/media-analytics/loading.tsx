import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function AdminMediaAnalyticsLoading() {
    return (
        <div className="p-6 space-y-8 bg-white min-h-screen font-jakarta">
            {/* Analytics Header Skeleton */}
            <div className="flex flex-col gap-2">
                <Skeleton className="h-10 w-72 bg-slate-100 rounded-lg" />
                <Skeleton className="h-4 w-56 bg-slate-50" />
            </div>

            {/* Analytics KPI Row */}
            <div className="grid gap-6 md:grid-cols-3">
                {Array.from({ length: 3 }).map((_, i) => (
                    <Card key={i} className="border-slate-100 shadow-none">
                        <CardHeader className="pb-2">
                            <Skeleton className="h-3 w-32 bg-slate-100" />
                        </CardHeader>
                        <CardContent>
                            <Skeleton className="h-10 w-24 bg-slate-100 mb-2" />
                            <Skeleton className="h-3 w-40 bg-slate-50" />
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Performance Table Skeleton */}
            <Card className="border-slate-100 shadow-none">
                <CardHeader className="border-b border-slate-50 pb-6">
                    <Skeleton className="h-6 w-48 bg-slate-100" />
                </CardHeader>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader className="bg-slate-50/50">
                            <TableRow>
                                <TableHead className="w-[300px]"><Skeleton className="h-4 w-24 bg-slate-100" /></TableHead>
                                <TableHead><Skeleton className="h-4 w-20 bg-slate-100" /></TableHead>
                                <TableHead><Skeleton className="h-4 w-20 bg-slate-100" /></TableHead>
                                <TableHead className="text-right"><Skeleton className="h-4 w-24 bg-slate-100 ml-auto" /></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {Array.from({ length: 5 }).map((_, i) => (
                                <TableRow key={i}>
                                    <TableCell>
                                        <div className="flex items-center gap-3">
                                            <Skeleton className="h-12 w-9 rounded-md bg-slate-100 flex-shrink-0" />
                                            <div className="space-y-2">
                                                <Skeleton className="h-4 w-32 bg-slate-100" />
                                                <Skeleton className="h-3 w-20 bg-slate-50" />
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell><Skeleton className="h-4 w-12 bg-slate-100" /></TableCell>
                                    <TableCell><Skeleton className="h-5 w-16 bg-[#EAB308]/10 rounded-full" /></TableCell>
                                    <TableCell className="text-right">
                                        <Skeleton className="h-8 w-24 bg-slate-50 rounded-lg ml-auto" />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            {/* Trends Graph Placeholder */}
            <Card className="border-slate-100 shadow-none">
                <CardHeader>
                    <Skeleton className="h-6 w-40 bg-slate-100" />
                </CardHeader>
                <CardContent>
                    <Skeleton className="h-[250px] w-full bg-slate-50/50 rounded-2xl border border-dashed border-slate-100" />
                </CardContent>
            </Card>
        </div>
    );
}