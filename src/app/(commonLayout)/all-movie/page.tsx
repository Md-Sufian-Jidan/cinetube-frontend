import { QueryClient, HydrationBoundary, dehydrate } from "@tanstack/react-query"
import { getAllMedia } from "./_actions"
import AllMovies from "@/components/modules/media/AllMedia";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Movies | CineTube",
    description: "CineTube is a state-of-the-art cinematic platform designed for seamless movie and series browsing. Built with modern aesthetics, responsiveness, and performance at its core — users can discover, review, and manage their favorite content, while admins get a powerful dashboard for full platform control.",
    keywords: ["CineTube", "Movies", "CineTube Movies", "Movie Streaming", "Series Streaming", "Premium Streaming"],
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
        title: "Movies | CineTube",
        description:
            "CineTube is a state-of-the-art cinematic platform designed for seamless movie and series browsing. Built with modern aesthetics, responsiveness, and performance at its core — users can discover, review, and manage their favorite content, while admins get a powerful dashboard for full platform control.",
        images: [
            {
                url: "https://i.ibb.co/fzyLjfBP/cinetube.png",
                width: 1200,
                height: 630,
                alt: "Movies | CineTube",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Movies | CineTube",
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

export default async function AllMoviePage() {
    const page = 1;
    const limit = 8;
    const searchTerm = "";

    const queryClient = new QueryClient()
    await queryClient.prefetchQuery({
        queryKey: ['medias', page, limit, searchTerm, 'ALL', 'ALL', 'latest'],
        queryFn: () => getAllMedia(page, limit, searchTerm, 'ALL', 'ALL', 'latest'),
    });

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <AllMovies />
        </HydrationBoundary>
    )
}