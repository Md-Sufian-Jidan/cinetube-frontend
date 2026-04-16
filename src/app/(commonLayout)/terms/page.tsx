import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service | CineTube",
    description: "CineTube is a state-of-the-art cinematic platform designed for seamless movie and series browsing. Built with modern aesthetics, responsiveness, and performance at its core — users can discover, review, and manage their favorite content, while admins get a powerful dashboard for full platform control.",
    keywords: ["CineTube", "Terms of Service", "CineTube Terms of Service", "Movie Streaming", "Series Streaming", "Premium Streaming"],
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
        title: "Terms of Service | CineTube",
        description:
            "CineTube is a state-of-the-art cinematic platform designed for seamless movie and series browsing. Built with modern aesthetics, responsiveness, and performance at its core — users can discover, review, and manage their favorite content, while admins get a powerful dashboard for full platform control.",
        images: [
            {
                url: "https://i.ibb.co/fzyLjfBP/cinetube.png",
                width: 1200,
                height: 630,
                alt: "Terms of Service | CineTube",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Terms of Service | CineTube",
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

import { TermsContent } from "@/components/modules/terms/TermsContent";

export default function TermsPage() {
    return (
        <main className="min-h-screen font-jakarta">
            <TermsContent />
        </main>
    );
}