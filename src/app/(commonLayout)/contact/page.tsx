import { ContactForm } from "@/components/modules/contact/ContactForm";
import { ContactHero } from "@/components/modules/contact/ContactHero";
import { ContactInfoCards } from "@/components/modules/contact/ContactInfoCards";
import { ContactMap } from "@/components/modules/contact/ContactMap";
import { ContactResponseTimeSection } from "@/components/modules/contact/ContactResponseTimeSection";
import { ContactSocialLinks } from "@/components/modules/contact/ContactSocialLinks";
import { ContactSupportCategories } from "@/components/modules/contact/ContactSupportCategories";
import Newsletter from "@/components/modules/home/Newsletter";
import { FAQSection } from "@/components/shared/Faq";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact | CineTube",
    description: "CineTube is a state-of-the-art cinematic platform designed for seamless movie and series browsing. Built with modern aesthetics, responsiveness, and performance at its core — users can discover, review, and manage their favorite content, while admins get a powerful dashboard for full platform control.",
    keywords: ["CineTube", "Contact CineTube", "CineTube Contact", "Movie Streaming", "Series Streaming", "Premium Streaming"],
    authors: [{
        name: "Md Abu Sufian Jidan",
        url: "https://mdabusufianjidan.vercel.app"
    }],
    creator: "Md Abu Sufian Jidan",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://cinetube-blond.vercel.app",
        siteName: "CineTube",
        title: "Contact | CineTube",
        description:
            "CineTube is a state-of-the-art cinematic platform designed for seamless movie and series browsing. Built with modern aesthetics, responsiveness, and performance at its core — users can discover, review, and manage their favorite content, while admins get a powerful dashboard for full platform control.",
        images: [
            {
                url: "https://i.ibb.co/fzyLjfBP/cinetube.png",
                width: 1200,
                height: 630,
                alt: "Contact | CineTube",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact | CineTube",
        description:
            "CineTube is a state-of-the-art cinematic platform designed for seamless movie and series browsing. Built with modern aesthetics, responsiveness, and performance at its core — users can discover, review, and manage their favorite content, while admins get a powerful dashboard for full platform control.",
        images: ["https://i.ibb.co/fzyLjfBP/cinetube.png"],
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            "max-snippet": -1,
            "max-image-preview": "large",
            "max-video-preview": -1,
        },
    },
};

export default function ContactPage() {
    return (
        <main>
            <ContactHero />
            <ContactInfoCards />
            <ContactForm />
            <ContactMap />
            <ContactSupportCategories />
            <FAQSection />
            <ContactResponseTimeSection />
            <ContactSocialLinks />
            <Newsletter />
        </main>
    )
}