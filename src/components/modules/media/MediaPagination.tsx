import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function MediaPagination() {
    return (
        <div className="mt-16 flex items-center justify-center gap-4">
            <Button variant="ghost" className="rounded-full h-12 w-12 border border-slate-100 shadow-sm text-slate-400">
                <ChevronLeft size={20} />
            </Button>
            <div className="flex gap-2">
                {[1, 2, 3].map((page) => (
                    <Button
                        key={page}
                        className={page === 1
                            ? "bg-[#EAB308] text-white rounded-full h-12 w-12 font-black shadow-lg shadow-[#EAB308]/20"
                            : "bg-transparent text-slate-400 rounded-full h-12 w-12 hover:bg-slate-50 font-bold"}
                    >
                        {page}
                    </Button>
                ))}
            </div>
            <Button variant="ghost" className="rounded-full h-12 w-12 border border-slate-100 shadow-sm text-[#EAB308]">
                <ChevronRight size={20} />
            </Button>
        </div>
    )
}