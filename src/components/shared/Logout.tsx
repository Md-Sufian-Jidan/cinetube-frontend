"use client";

import { LogOutIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { httpClient } from "@/lib/axios/httpClient";

export default function Logout() {
    const { push, refresh } = useRouter();

    const handleLogout = async () => {
        try {
            const res = await httpClient.post(null, {
                url: "/auth/sign-out",
            });

            if (res?.success) {
                push("/");
                refresh();

                toast.success("See you next time, Cinephile!", {
                    style: {
                        background: "#161B22",
                        color: "#EAB308",
                        border: "1px solid rgba(234, 179, 8, 0.2)",
                    },
                });
            }
        } catch (error) {
            toast.error("Logout failed. Please try again.");
        }
    };

    return (
        <Button
            variant="ghost"
            onClick={handleLogout}
            className={"w-full flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all justify-start text-red-600 hover:bg-red-500/10 hover:text-red-500 group cursor-pointer"}
        >
            <LogOutIcon className="h-4 w-4 transition-transform" />
            <span>Log out</span>
        </Button>
    );
}