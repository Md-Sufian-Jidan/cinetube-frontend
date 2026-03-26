import DashboardNavbar from "@/components/modules/dashboard/DashboardNavbar";
import DashboardSidebar from "@/components/modules/dashboard/DashboardSidebar";
import { ROLES } from "@/constant/role";

export const dynamic = "auto";
export const revalidate = 0;

export default async function DashboardLayout({ children }: { children: React.ReactNode; }) {
    const data = {
        user: {
            role: ROLES.ADMIN,
            name: "John Doe",
            email: "[EMAIL_ADDRESS]",
            image: "https://github.com/shadcn.png",
        }
    };
    const role = data.user.role;

    return (
        <div className="flex h-screen overflow-hidden">
            {/* Dashboard sidebar */}
            <DashboardSidebar />
            <div className="flex flex-1 flex-col overflow-hidden">
                {/* Dashboard navbar */}
                <DashboardNavbar />
                {/* Dashboard content */}
                <main className="flex-1 overflow-y-auto bg-muted/10 p-4 md:p-5">
                    <div>
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}