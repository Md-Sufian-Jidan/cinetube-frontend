"use client";

import { AboutHero } from "@/components/modules/about/AboutHero";
import { AboutIntro } from "@/components/modules/about/AboutIntro";
import { AboutStats } from "@/components/modules/about/AboutStats";
import { AboutFeatures } from "@/components/modules/about/AboutFeatures";
import { FAQSection } from "@/components/shared/Faq";
import { AboutCta } from "@/components/modules/about/AboutCta";

export default function AboutPage() {
    return (
        <main className="min-h-screen font-jakarta text-white">
            <AboutHero />
            <AboutIntro />
            <AboutFeatures />
            <AboutStats />
            <FAQSection />
            <AboutCta />
        </main>
    );
}
