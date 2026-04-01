import ActivityTicker from "@/components/modules/home/ActivityTicker";
import CineStats from "@/components/modules/home/CineStats";
import CTA from "@/components/modules/home/CTA";
import EditorsPicks from "@/components/modules/home/EditorsPicks";
import Hero from "@/components/modules/home/Hero";
import MediaSpotlight from "@/components/modules/home/MediaSpotlight";
import Testimonials from "@/components/modules/home/Testimonials";
import TopTrending from "@/components/modules/home/TopTrending";

export default async function CommonPage() {
    return (
        <>
            <Hero />
            <ActivityTicker />
            <EditorsPicks />
            <CineStats />
            <TopTrending />
            <MediaSpotlight />
            <Testimonials />
            <CTA />
        </>
    );
}