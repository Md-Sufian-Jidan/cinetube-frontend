"use client";

import { LogOutIcon, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { httpClient } from "@/lib/axios/httpClient";

export default function Logout() {
    const { push, refresh } = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const handleLogout = async () => {
        setIsLoading(true);
        try {
            const res = await httpClient.post(null, {
                url: "/auth/sign-out",
            });

            if (res?.success) {
                // Clear any local state if necessary before redirecting
                push("/");
                refresh();

                toast.success("See you next time, Cinephile!", {
                    style: {
                        background: "#FFFFFF",
                        color: "#0F172A", // Slate-900
                        border: "1px solid #F1F5F9", // Slate-100
                        fontFamily: "var(--font-jakarta)",
                        fontWeight: "600"
                    },
                    icon: <LogOutIcon className="h-4 w-4 text-[#EAB308]" />
                });
            }
        } catch (error) {
            toast.error("Logout failed. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Button
            variant="ghost"
            onClick={handleLogout}
            disabled={isLoading}
            className="w-full flex items-center gap-3 rounded-xl px-4 py-6 text-sm font-bold transition-all justify-start text-red-500 hover:bg-red-50 hover:text-red-600 group cursor-pointer border border-transparent hover:border-red-100"
        >
            {isLoading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
                <LogOutIcon className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            )}
            <span>{isLoading ? "Logging out..." : "Log out"}</span>
        </Button>
    );
}