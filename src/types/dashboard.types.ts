export interface NavItem {
    title: string;
    href: string;
    icon?: any;
}

export interface NavSection {
    title?: string;
    items: NavItem[];
}