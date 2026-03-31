import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { IMediaMeta } from "@/types/media.types";

interface Props {
    meta: IMediaMeta;
    onPageChange: (page: number) => void;
}

export default function MediaPagination({ meta, onPageChange }: Props) {
    return (
        <div className="flex items-center gap-2">
            <Button
                variant="ghost"
                disabled={meta?.page === 1}
                onClick={() => onPageChange(meta.page - 1)}
                className="rounded-full h-12 w-12 border border-slate-100"
            >
                <ChevronLeft size={20} />
            </Button>

            {Array.from({ length: meta.totalPage }).map((_, index) => {
                const p = index + 1;
                return (
                    <Button
                        key={p}
                        onClick={() => onPageChange(p)}
                        className={p === meta.page
                            ? "bg-[#EAB308] text-white rounded-full h-12 w-12 font-black"
                            : "bg-transparent text-slate-400 rounded-full h-12 w-12 hover:bg-slate-50"}
                    >
                        {p}
                    </Button>
                );
            })}

            <Button
                variant="ghost"
                disabled={meta.page === meta.totalPage}
                onClick={() => onPageChange(meta.page + 1)}
                className="rounded-full h-12 w-12 border border-slate-100"
            >
                <ChevronRight size={20} />
            </Button>
        </div>
    );
}