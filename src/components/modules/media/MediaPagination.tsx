import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { IMediaMeta } from "@/types/media.types";

export default function MediaPagination({ meta }: { meta: IMediaMeta }) {
    return (
        <div className="mt-16 flex items-center justify-center gap-4">
            <Button variant="ghost" className="rounded-full h-12 w-12 border border-slate-100 shadow-sm text-slate-400">
                <ChevronLeft size={20} />
            </Button>
            <div className="flex gap-2">
                {Array.from({ length: meta.totalPage }).map((_, index) => (
                    <Button
                        key={index}
                        className={index + 1 === meta.page
                            ? "bg-[#EAB308] text-white rounded-full h-12 w-12 font-black shadow-lg shadow-[#EAB308]/20"
                            : "bg-transparent text-slate-400 rounded-full h-12 w-12 hover:bg-slate-50 font-bold"}
                    >
                        {index + 1}
                    </Button>
                ))}
            </div>
            <Button variant="ghost" className="rounded-full h-12 w-12 border border-slate-100 shadow-sm text-[#EAB308]">
                <ChevronRight size={20} />
            </Button>
        </div>
    )
};