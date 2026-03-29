import { getDefaultDashboardRoute } from "@/lib/authUtils"
import { NavSection } from "@/types/dashboard.types"
import DashboardSidebarContent from "./DashboardSidebarContent"
import { getNavItemsByRole } from "@/lib/navItems"
import { getSession } from "@/services/auth.service"

const DashboardSidebar = async () => {
    const session = await getSession();
    const userInfo = session.data.user;
    const navItems: NavSection[] = getNavItemsByRole(userInfo.role)

    const dashboardHome = getDefaultDashboardRoute(userInfo.role)
    return (
        <DashboardSidebarContent userInfo={userInfo} navItems={navItems} dashboardHome={dashboardHome} />
    )
}

export default DashboardSidebar