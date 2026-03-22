import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import Transition from "@/components/shared/Transition";
import QueryProviders from "@/providers/queryProvider";

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: "CineTube",
  description: "CineTube is a movie streaming platform",
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
      <body className="min-h-full flex flex-col">
        <QueryProviders>
          <Transition>
            {children}
          </Transition>
        </QueryProviders>
        <Toaster />
      </body>
    </html>
  );
}
