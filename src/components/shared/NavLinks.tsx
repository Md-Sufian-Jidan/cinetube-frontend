// Optional: Next.js NavLink helper (if you want active classes reusable)

import Link from "next/link";
import { usePathname } from "next/navigation";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
    activeClassName?: string;
}

export const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
    ({ href, className, activeClassName, ...props }, ref) => {
        const pathname = usePathname();

        return (
            <Link
                ref={ref}
                href={href}
                className={cn(className, pathname === href && activeClassName)}
                {...props}
            />
        );
    }
);

NavLink.displayName = "NavLink";