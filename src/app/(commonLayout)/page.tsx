import ActivityTicker from "@/components/modules/home/ActivityTicker";
import Categories from "@/components/modules/home/Categories";
import CineStats from "@/components/modules/home/CineStats";
import CTA from "@/components/modules/home/CTA";
import EditorsPicks from "@/components/modules/home/EditorsPicks";
import FeaturedMovies from "@/components/modules/home/FeaturedMovies";
import Features from "@/components/modules/home/Features";
import Hero from "@/components/modules/home/Hero";
import MediaSpotlight from "@/components/modules/home/MediaSpotlight";
import Newsletter from "@/components/modules/home/Newsletter";
import Testimonials from "@/components/modules/home/Testimonials";
import TopTrending from "@/components/modules/home/TopTrending";

export default async function CommonPage() {
    return (
        <main>
            <Hero />
            <ActivityTicker />
            <Features />
            <FeaturedMovies />
            <TopTrending />
            <Categories />
            <CineStats />
            <EditorsPicks />
            <MediaSpotlight />
            <Testimonials />
            <Newsletter />
            <CTA />
        </main>
    );
}