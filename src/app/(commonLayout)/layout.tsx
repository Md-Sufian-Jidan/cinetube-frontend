import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { getSession } from "@/services/auth.service";
import { ChatWidget } from "@/components/ai/chat-widget";

export default async function CommonLayout(
    { children, }: Readonly<{ children: React.ReactNode; }
    >) {
    const session = await getSession();
    return (
        <>
            <Navbar user={session?.data} />
            <div className="min-h-screen pt-20">
                {children}
            </div>
            <Footer />
            <ChatWidget />
        </>
    );
}