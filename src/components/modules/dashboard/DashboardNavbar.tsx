import { getDefaultDashboardRoute } from "@/lib/authUtils"
import { getNavItemsByRole } from "@/lib/navItems"
import { NavSection } from "@/types/dashboard.types"
import DashboardNavbarContent from "./DashboardNavbarContent"
import { ROLES } from "@/constant/role"
// import { getUserInfo } from "@/lib/authUtils"

const DashboardNavbar = async () => {
    // const userInfo = await getUserInfo()
    const userInfo = {
        name: "John Doe",
        role: ROLES.ADMIN,
        email: "[EMAIL_ADDRESS]",
        id: "74h6ud6igv8b6t8ehcjfxcv",
        image: "https://github.com/shadcn.png",
    }
    const navItems: NavSection[] = getNavItemsByRole(userInfo.role)

    const dashboardHome = getDefaultDashboardRoute(userInfo.role)
    return (
        <DashboardNavbarContent userInfo={userInfo} navItems={navItems} dashboardHome={dashboardHome} />
    )
}

export default DashboardNavbar