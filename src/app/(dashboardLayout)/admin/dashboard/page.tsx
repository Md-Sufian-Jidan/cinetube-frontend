import {
    Users,
    Film,
    MessageSquare,
    DollarSign,
    TrendingUp,
    ArrowUpRight
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
            description: "+2 new this week",
            icon: Users,
            color: "text-blue-600",
            bg: "bg-blue-50",
        },
        {
            title: "Media Library",
            value: stats?.mediaCount,
            description: "Movies & Series",
            icon: Film,
            color: "text-[#EAB308]",
            bg: "bg-[#EAB308]/10",
        },
        {
            title: "Pending Reviews",
            value: stats?.pendingReviewsCount,
            description: "Needs Moderation",
            icon: MessageSquare,
            color: "text-orange-600",
            bg: "bg-orange-50",
        },
        {
            title: "Total Revenue",
            value: `$${stats?.totalRevenue.toFixed(2)}`,
            description: "Lifetime Earnings",
            icon: DollarSign,
            color: "text-green-600",
            bg: "bg-green-50",
        },
    ];

    return (
        <div className="p-6 space-y-8 bg-white min-h-screen font-jakarta">
            {/* Welcome Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="font-playfair text-3xl font-bold text-slate-900">
                        Cinema <span className="text-[#EAB308]">Overview</span>
                    </h1>
                    <p className="text-sm text-slate-500 mt-1">
                        Welcome back, Admin. Here's what's happening with CineTube today.
                    </p>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-100 rounded-xl">
                    <TrendingUp className="text-[#EAB308] w-4 h-4" />
                    <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                        System Online
                    </span>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {statCards.map((card, index) => (
                    <Card key={index} className="border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group">
                        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                            <CardTitle className="text-xs font-bold uppercase tracking-[0.15em] text-slate-500">
                                {card.title}
                            </CardTitle>
                            <div className={`p-2 rounded-lg ${card.bg} ${card.color} transition-transform group-hover:scale-110`}>
                                <card.icon size={18} />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-black text-slate-900 tracking-tight">
                                {card.value}
                            </div>
                            <div className="flex items-center mt-1 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                <span>{card.description}</span>
                                <ArrowUpRight className="ml-1 w-3 h-3 text-[#EAB308]" />
                            </div>
                        </CardContent>
                        {/* Decorative bottom line for the primary brand color */}
                        {card.title === "Media Library" && (
                            <div className="h-1 w-full bg-[#EAB308]" />
                        )}
                    </Card>
                ))}
            </div>

            {/* Placeholder for Charts/Recent Activity */}
            <div className="grid gap-6 md:grid-cols-7">
                <Card className="md:col-span-4 border-slate-100 shadow-sm">
                    <CardHeader>
                        <CardTitle className="font-playfair text-xl">Platform Growth</CardTitle>
                        <CardDescription>User registrations over the last 30 days.</CardDescription>
                    </CardHeader>
                    <CardContent className="h-[200px] flex items-center justify-center bg-slate-50/50 rounded-xl m-6 border border-dashed border-slate-200">
                        <p className="text-slate-400 text-sm font-medium italic text-center">
                            [ Chart Visualization Placeholder ]<br />
                            <span className="text-[10px] uppercase tracking-widest not-italic">Data sync in progress...</span>
                        </p>
                    </CardContent>
                </Card>

                <Card className="md:col-span-3 border-slate-100 shadow-sm">
                    <CardHeader>
                        <CardTitle className="font-playfair text-xl">Quick Actions</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-3">
                        <Link href={"/admin/add-media"}>
                            <Button className="w-full h-14 bg-[#EAB308] px-8 text-lg font-bold text-[#0B0E14] border-2 border-[#EAB308] hover:bg-transparent hover:border-[#EAB308] hover:border-2 hover:text-[#EAB308] cursor-pointer">
                                Add New Media <Film size={16} />
                            </Button>
                        </Link>
                        <Link href={"/admin/reviews"}>
                            <Button
                                variant={"outline"}
                                className="w-full h-14 border-2 border-[#EAB308] px-8 text-lg text-[#EAB308] font-bold bg-transparent hover:bg-[#EAB308] hover:border-[#EAB308] hover:border-2 hover:text-[#0B0E14] cursor-pointer">
                                Manage Reviews <MessageSquare size={16} />
                            </Button>
                        </Link>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}