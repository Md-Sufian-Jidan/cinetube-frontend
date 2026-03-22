import Transition from "@/components/shared/Transition";

export default function DashboardLayout(
    { children }: { children: React.ReactNode }
) {
    return (
        <Transition>
            <div className="min-h-screen">
                {children}
            </div>
        </Transition>
    );
};