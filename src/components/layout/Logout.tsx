"use client";

// import { authClient } from "@/lib/auth-client";
import { LogOutIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export default function Logout() {
    const { push, refresh } = useRouter();

    // const handleLogout = async () => {
    //     await authClient.signOut({
    //         fetchOptions: {
    //             onSuccess: () => {
    //                 push("/");
    //                 refresh();
    //                 toast.success("See you next time, Cinephile!", {
    //                     style: {
    //                         background: "#161B22",
    //                         color: "#EAB308",
    //                         border: "1px solid rgba(234, 179, 8, 0.2)",
    //                     },
    //                 });
    //             },
    //             onError: () => {
    //                 toast.error("Logout failed. Please try again.");
    //             }
    //         },
    //     });
    // };

    return (
        <Button
            variant="ghost"
            // onClick={handleLogout}
            className={cn(
                "group w-full justify-start gap-2 px-3 py-2.5 font-jakarta text-sm font-medium transition-all duration-300",
                "text-slate-400 hover:bg-red-500/10 hover:text-red-500 focus:bg-red-500/10 focus:text-red-500"
            )}
        >
            <LogOutIcon className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span>Log out</span>
        </Button>
    );
}