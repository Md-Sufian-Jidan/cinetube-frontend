import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

export default function MediaCta() {
    return (
        <section className="bg-[#FAFAFA] py-20">
            <div className="container mx-auto bg-white rounded-[2rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden relative">
                <div className="relative z-10 text-center md:text-left space-y-4">
                    <h2 className="font-playfair text-3xl md:text-5xl font-bold text-black">
                        Become a <span className="text-[#EAB308]">Critic</span>
                    </h2>
                    <p className="text-slate-500 text-lg max-w-md">
                        Your opinion matters! Help others discover great stories by reviewing your favorites.
                    </p>
                    <Button className="h-14 bg-[#EAB308] px-8 text-lg font-bold text-white border-2 border-[#EAB308] hover:bg-transparent hover:border-[#EAB308] hover:border-2 hover:text-[#EAB308] cursor-pointer">
                        Get Started <ArrowRight size={20} />
                    </Button>
                </div>
                <div className="relative z-10 grid grid-cols-2 gap-4">
                    <div className="w-32 h-44 rounded-2xl bg-[#EAB308] rotate-[-10deg] shadow-2xl opacity-50" />
                    <div className="w-32 h-44 rounded-2xl bg-[#EAB308] rotate-[5deg] shadow-2xl flex items-center justify-center p-4">
                        <Star size={40} className="text-white fill-white" />
                    </div>
                </div>
                {/* Decorative Background Element */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#EAB308] blur-[120px] opacity-50 -mr-20 -mt-20" />
            </div>
        </section>
    )
}