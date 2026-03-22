import Transition from "@/components/shared/Transition";

export default function CommonLayout(
    { children, }: Readonly<{ children: React.ReactNode; }
    >) {
    return (
        <Transition>
            <div className="min-h-screen">
                {children}
            </div>
        </Transition>
    );
}