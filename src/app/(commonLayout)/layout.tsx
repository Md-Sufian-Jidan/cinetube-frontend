import Navbar from "@/components/shared/Navbar";

export default function CommonLayout(
    { children, }: Readonly<{ children: React.ReactNode; }
    >) {
    return (
        <>
            <Navbar />
            <div className="min-h-screen pt-20">
                {children}
            </div>
        </>
    );
}