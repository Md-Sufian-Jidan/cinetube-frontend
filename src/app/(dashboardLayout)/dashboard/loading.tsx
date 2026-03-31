import getUserDashboardData from "./_actions";
import { AlertCircle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import UserDashboard from "@/components/modules/dashboard/user/UserDashboard";

export default async function DashboardPage() {
    const stats = await getUserDashboardData();

    // Premium Error State
    if (!stats || !stats.success) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[80vh] px-6 text-center font-jakarta bg-white">
                <div className="relative mb-6">
                    <div className="absolute inset-0 bg-red-500/10 blur-3xl rounded-full" />
                    <div className="relative h-20 w-20 bg-red-50 border border-red-100 rounded-3xl flex items-center justify-center text-red-500 shadow-sm">
                        <AlertCircle size={40} />
                    </div>
                </div>

                <h2 className="font-playfair text-3xl font-black text-slate-900 mb-3">
                    Technical <span className="text-red-500">Intermission</span>
                </h2>
                <p className="text-slate-500 max-w-sm mx-auto mb-8 font-medium leading-relaxed">
                    We encountered a glitch while fetching your stats. Even the best blockbusters have bloopers.
                </p>

                <div className="flex items-center gap-4">
                    <Link href="/dashboard">
                        <Button className="bg-slate-900 text-white font-bold px-8 h-12 rounded-xl hover:bg-slate-800 transition-all">
                            <RefreshCw className="mr-2 h-4 w-4" /> Retry
                        </Button>
                    </Link>
                    <Link href="/">
                        <Button variant="ghost" className="text-slate-400 font-bold hover:text-slate-900">
                            Back to Home
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <main className="animate-in fade-in duration-700">
            <UserDashboard stats={stats.data} />
        </main>
    );
}