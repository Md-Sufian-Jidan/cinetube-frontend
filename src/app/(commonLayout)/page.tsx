import ActivityTicker from "@/components/modules/home/ActivityTicker";
import CTA from "@/components/modules/home/CTA";
import EditorsPicks from "@/components/modules/home/EditorsPicks";
import GenreExplorer from "@/components/modules/home/GenreExplorer";
import Hero from "@/components/modules/home/Hero";
import MediaSpotlight from "@/components/modules/home/MediaSpotlight";
import Testimonials from "@/components/modules/home/Testimonials";
import { initialMedia } from "@/lib/mockData";

export default async function CommonPage() {
    return (
        <>
            <Hero />
            <ActivityTicker />
            <EditorsPicks />
            <GenreExplorer initialMedia={initialMedia} />
            <MediaSpotlight />
            <Testimonials />
            <CTA />
        </>
    );
}