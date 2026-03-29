import { getDefaultDashboardRoute } from "@/lib/authUtils"
import { getNavItemsByRole } from "@/lib/navItems"
import { NavSection } from "@/types/dashboard.types"
import DashboardNavbarContent from "./DashboardNavbarContent"
import { ROLES } from "@/constant/role"
import { getSession } from "@/services/auth.service"
// import { getUserInfo } from "@/lib/authUtils"

const DashboardNavbar = async () => {
    const session = await getSession();
    const userInfo = session?.data?.user;
    const navItems: NavSection[] = getNavItemsByRole(userInfo.role);
    const dashboardHome = getDefaultDashboardRoute(userInfo.role);

    return (
        <DashboardNavbarContent userInfo={userInfo} navItems={navItems} dashboardHome={dashboardHome} />
    )
}

export default DashboardNavbar