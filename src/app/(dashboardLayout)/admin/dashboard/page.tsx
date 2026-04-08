import {
    Users,
    Film,
    MessageSquare,
    DollarSign,
    TrendingUp,
    ArrowUpRight,
    Activity,
    Plus
} from "lucide-react";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription
} from "@/components/ui/card";
import { getDashboardStats } from "./_actions";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { StatsBarChart } from "@/components/modules/dashboard/admin/dashboard/StatsBarChartProps";

interface DashboardStats {
    userCount: number;
    mediaCount: number;
    pendingReviewsCount: number;
    totalRevenue: number;
}

export default async function AdminDashboardPage() {
    const stats = await getDashboardStats() as DashboardStats;

    const statCards = [
        {
            title: "Total Audience",
            value: stats?.userCount,
            description: `+${stats?.userCount} new this week`,
            icon: Users,
            color: "text-blue-600",
            bg: "bg-blue-50/50",
            border: "border-blue-100",
        },
        {
            title: "Media Library",
            value: stats?.mediaCount,
            description: "Movies & Series",
            icon: Film,
            color: "text-[#EAB308]",
            bg: "bg-yellow-50/50",
            border: "border-yellow-100",
        },
        {
            title: "Pending Reviews",
            value: stats?.pendingReviewsCount,
            description: "Needs Moderation",
            icon: MessageSquare,
            color: "text-orange-600",
            bg: "bg-orange-50/50",
            border: "border-orange-100",
        },
        {
            title: "Total Revenue",
            value: `$${stats?.totalRevenue?.toFixed(2) || "0.00"}`,
            description: "Lifetime Earnings",
            icon: DollarSign,
            color: "text-emerald-600",
            bg: "bg-emerald-50/50",
            border: "border-emerald-100",
        },
    ];

    return (
        <div className="p-8 space-y-10 min-h-screen font-jakarta">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="space-y-1">
                    <div className="flex items-center gap-2 text-[#EAB308] font-bold text-xs uppercase tracking-[0.2em]">
                        <Activity size={14} />
                        Analytics Dashboard
                    </div>
                    <h1 className="font-playfair text-4xl font-black text-slate-900">
                        Cinema <span className="italic text-[#EAB308]">Overview</span>
                    </h1>
                    <p className="text-slate-500 font-medium max-w-md">
                        Monitoring CineTube's performance and audience engagement in real-time.
                    </p>
                </div>

                <div className="flex items-center gap-3 bg-white p-1.5 rounded-2xl border border-slate-200 shadow-sm">
                    <div className="px-4 py-2 bg-slate-900 rounded-xl">
                        <span className="text-[10px] font-bold text-white uppercase tracking-tighter">Live Sync</span>
                    </div>
                    <div className="pr-4 flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-xs font-bold text-slate-600 uppercase">System Online</span>
                    </div>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {statCards.map((card, index) => (
                    <Card key={index} className={`relative overflow-hidden border-none shadow-sm hover:shadow-xl transition-all duration-500 group bg-white`}>
                        <div className={`absolute top-0 right-0 w-24 h-24 -mr-8 -mt-8 rounded-full ${card.bg} blur-2xl group-hover:blur-xl transition-all`} />
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                                {card.title}
                            </CardTitle>
                            <card.icon size={18} className={card.color} />
                        </CardHeader>
                        <CardContent>
                            <div className="text-4xl font-black text-slate-900">
                                {card.value}
                            </div>
                            <div className="mt-3 flex items-center gap-1.5 text-[11px] font-bold text-slate-400">
                                <div className={`p-0.5 rounded-full ${card.bg}`}>
                                    <ArrowUpRight size={10} className={card.color} />
                                </div>
                                {card.description}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Visuals Section */}
            <div className="grid gap-8 lg:grid-cols-12">
                {/* Growth Chart */}
                <Card className="lg:col-span-8 border-slate-200/60 shadow-sm bg-white overflow-hidden">
                    <CardHeader className="border-b border-slate-50 pb-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <CardTitle className="font-playfair text-2xl font-bold">Platform Growth</CardTitle>
                                <CardDescription className="text-xs font-medium">User acquisition metrics for the current period</CardDescription>
                            </div>
                            <Button variant="outline" size="sm" className="font-bold text-[10px] uppercase tracking-wider rounded-lg">
                                View Report
                            </Button>
                        </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                        <StatsBarChart data={{
                            userCount: stats.userCount,
                            mediaCount: stats.mediaCount,
                            pendingReviewsCount: stats.pendingReviewsCount
                        }} />
                    </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card className="lg:col-span-4 border-slate-200/60 shadow-sm bg-white">
                    <CardHeader>
                        <CardTitle className="font-playfair text-2xl font-bold">Management</CardTitle>
                        <CardDescription className="text-xs font-medium">Core administrative shortcuts</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <Link href="/admin/add-media" className="block group">
                            <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-900 text-white transition-all group-hover:bg-[#EAB308] group-hover:text-slate-900">
                                <div className="flex items-center gap-4">
                                    <div className="p-2 bg-white/10 rounded-xl group-hover:bg-slate-900/10">
                                        <Plus size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold">Add Media</p>
                                        <p className="text-[10px] opacity-60 font-medium">Movies or TV Series</p>
                                    </div>
                                </div>
                                <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        </Link>

                        <Link href="/admin/reviews" className="block group">
                            <div className="flex items-center justify-between p-4 rounded-2xl border-2 border-slate-100 hover:border-[#EAB308] transition-all">
                                <div className="flex items-center gap-4">
                                    <div className="p-2 bg-slate-50 rounded-xl group-hover:bg-[#EAB308]/10 transition-colors">
                                        <MessageSquare size={20} className="text-slate-600 group-hover:text-[#EAB308]" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-slate-900">Manage Reviews</p>
                                        <p className="text-[10px] text-slate-400 font-medium">Pending: {stats?.pendingReviewsCount}</p>
                                    </div>
                                </div>
                                <ArrowUpRight size={18} className="text-slate-300 group-hover:text-[#EAB308]" />
                            </div>
                        </Link>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}