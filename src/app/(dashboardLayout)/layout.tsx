import { AppSidebar } from "@/components/layout/app-sidebar";
import { ProfileDropdown } from "@/components/layout/ProfileDropdown";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar";
import { ROLES } from "@/constant/role";
import Link from "next/link";

export const dynamic = "auto";
export const revalidate = 0;

export default async function DashboardLayout({
    admin,
    user
}: {
    admin: React.ReactNode;
    user: React.ReactNode;
}) {
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
        <SidebarProvider>
            {/* Sidebar with custom dark theme */}
            <AppSidebar user={role} className="border-r border-white/5 bg-[#0B0E14]" />

            <SidebarInset className="bg-[#0B0E14] text-slate-50">
                <header className="flex h-16 shrink-0 items-center gap-2 border-b border-white/5 bg-[#0B0E14]/50 px-6 backdrop-blur-md sticky top-0 z-10">
                    <SidebarTrigger className="-ml-1 text-[#EAB308] hover:bg-[#EAB308]/10 transition-colors" />

                    <Separator
                        orientation="vertical"
                        className="mr-2 h-4 bg-white/10"
                    />

                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <Link
                                    href="/"
                                    className="font-playfair text-sm font-bold text-slate-400 hover:text-[#EAB308] transition-colors"
                                >
                                    CineTube
                                </Link>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator className="text-slate-600" />
                            <BreadcrumbItem>
                                <BreadcrumbPage className="font-playfair text-sm font-bold tracking-wide text-white">
                                    {role === ROLES.ADMIN
                                        ? "Admin Portal"
                                        : "User Portal"}
                                </BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>

                    <div className="ml-auto flex items-center gap-4">
                        <ProfileDropdown user={data?.user} />
                    </div>
                </header>

                <main className="flex flex-1 flex-col gap-6 p-6 font-jakarta">
                    {/* Dashboard Header Section */}
                    <div className="mb-2">
                        <h1 className="font-playfair text-3xl font-black text-white">
                            Welcome back, <span className="text-[#EAB308]">{data?.user?.name || "Cinephile"}</span>
                        </h1>
                        <p className="text-sm text-slate-400">Manage your cinematic collection and platform settings.</p>
                    </div>

                    {/* Conditional Role Rendering */}
                    <div className="rounded-xl border border-white/5 bg-[#161B22]/50 p-1 min-h-[calc(100vh-12rem)]">
                        {role === ROLES.ADMIN
                            ? admin
                            : user
                        }
                    </div>
                </main>
            </SidebarInset>
        </SidebarProvider>
    );
}