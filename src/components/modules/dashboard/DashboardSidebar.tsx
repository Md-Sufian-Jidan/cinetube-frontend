import { getDefaultDashboardRoute } from "@/lib/authUtils"
import { NavSection } from "@/types/dashboard.types"
import DashboardSidebarContent from "./DashboardSidebarContent"
import { ROLES } from "@/constant/role"
import { getNavItemsByRole } from "@/lib/navItems"
import { getSession } from "@/services/auth.service"

const DashboardSidebar = async () => {
    // const userInfo = await getUserInfo();
    const session = await getSession();
    console.log(session);
    const userInfo = {
        id: "43knfe7f8tfjdskalj f6y8yeiwurhndpiqwdhc098w",
        role: ROLES.ADMIN,
        name: "John Doe",
        email: "[EMAIL_ADDRESS]",
        image: "https://github.com/shadcn.png",
    };
    const navItems: NavSection[] = getNavItemsByRole(userInfo.role)

    const dashboardHome = getDefaultDashboardRoute(userInfo.role)
    return (
        <DashboardSidebarContent userInfo={userInfo} navItems={navItems} dashboardHome={dashboardHome} />
    )
}

export default DashboardSidebar