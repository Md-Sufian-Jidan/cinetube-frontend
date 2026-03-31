import UserDashboard from "@/components/modules/dashboard/user/UserDashboard";
import getUserDashboardData from "./_actions";

export default async function DashboardPage() {
    const stats = await getUserDashboardData();
    console.log("Dashboard stats from page", stats);

    if (!stats || !stats.success) {
        return (
            <div className="flex h-[80vh] items-center justify-center font-jakarta">
                <p className="text-slate-500 font-bold">Failed to load dashboard. Please try again later.</p>
            </div>
        );
    }

    return <UserDashboard stats={stats.data} />;
}