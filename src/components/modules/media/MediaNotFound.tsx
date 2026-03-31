import { SearchX, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function MediaNotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 text-center font-jakarta bg-white">
            {/* Visual Indicator */}
            <div className="relative mb-8">
                <div className="absolute inset-0 bg-[#EAB308]/10 blur-3xl rounded-full" />
                <div className="relative h-24 w-24 bg-slate-50 border border-slate-100 rounded-[2.5rem] flex items-center justify-center text-slate-300 shadow-sm transition-transform hover:rotate-12 duration-500">
                    <SearchX size={48} strokeWidth={1.5} />
                </div>
            </div>

            {/* Text Content */}
            <div className="space-y-3 max-w-md mx-auto mb-10">
                <h2 className="font-playfair text-4xl font-black text-slate-900 leading-tight">
                    Scene <span className="text-[#EAB308]">Missing</span>
                </h2>
                <p className="text-slate-500 font-medium leading-relaxed">
                    We couldn't find the cinematic masterpiece you're looking for. It might have been moved or removed from our library.
                </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link href="/all-movie">
                    <Button className="bg-slate-900 text-white font-bold px-8 h-12 rounded-xl hover:bg-slate-800 transition-all shadow-lg shadow-slate-200">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Library
                    </Button>
                </Link>
                <Link href="/">
                    <Button variant="ghost" className="text-slate-400 font-bold hover:text-slate-900 h-12 px-6">
                        Go to Homepage
                    </Button>
                </Link>
            </div>
        </div>
    );
}