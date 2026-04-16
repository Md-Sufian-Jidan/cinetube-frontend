import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import Transition from "@/components/shared/Transition";
import QueryProviders from "@/providers/queryProvider";

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans'
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair'
});

export const metadata: Metadata = {
  title: {
    default: "CineTube | Premium Movie & Series Platform",
    template: "%s | CineTube",
  },
  description:
    "CineTube is a state-of-the-art cinematic platform designed for seamless movie and series browsing. Built with modern aesthetics, responsiveness, and performance at its core — users can discover, review, and manage their favorite content, while admins get a powerful dashboard for full platform control.",
  keywords: [
    "CineTube",
    "Movie Streaming",
    "Series Streaming",
    "Premium Streaming",
  ],
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
    title: "CineTube | Premium Movie & Series Platform",
    description:
      "CineTube is a state-of-the-art cinematic platform designed for seamless movie and series browsing. Built with modern aesthetics, responsiveness, and performance at its core — users can discover, review, and manage their favorite content, while admins get a powerful dashboard for full platform control.",
    images: [
      {
        url: "https://i.ibb.co/fzyLjfBP/cinetube.png",
        width: 1200,
        height: 630,
        alt: "CineTube - Premium Movie & Series Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CineTube | Premium Movie & Series Platform",
    description:
      "CineTube is a state-of-the-art cinematic platform designed for seamless movie and series browsing. Built with modern aesthetics, responsiveness, and performance at its core — users can discover, review, and manage their favorite content, while admins get a powerful dashboard for full platform control.",
    images: ["https://i.ibb.co/fzyLjfBP/cinetube.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", dmSans.variable, playfair.variable)}
    >
      <body className="min-h-full">
        <QueryProviders>
          <Transition>
            {children}
            <Toaster position="top-right" richColors />
          </Transition>
        </QueryProviders>
      </body>
    </html>
  );
}
