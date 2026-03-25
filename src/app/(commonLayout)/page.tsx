import ActivityTicker from "@/components/modules/home/ActivityTicker";
import CineStats from "@/components/modules/home/CineStats";
import CTA from "@/components/modules/home/CTA";
import EditorsPicks from "@/components/modules/home/EditorsPicks";
import GenreExplorer from "@/components/modules/home/GenreExplorer";
import Hero from "@/components/modules/home/Hero";
import MediaSpotlight from "@/components/modules/home/MediaSpotlight";
import Testimonials from "@/components/modules/home/Testimonials";
import TopTrending from "@/components/modules/home/TopTrending";
import { initialMedia } from "@/lib/mockData";

export default async function CommonPage() {
    return (
        <>
            <Hero />
            <ActivityTicker />
            <GenreExplorer initialMedia={initialMedia} />
            <EditorsPicks />
            <CineStats />
            <TopTrending />
            <MediaSpotlight />
            <Testimonials />
            <CTA />
        </>
    );
}