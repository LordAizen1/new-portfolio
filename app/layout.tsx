import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";

import { GridPattern } from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://new-portfolio-tan-seven.vercel.app"),
  title: {
    default: "Mohammad Kaif — Developer Portfolio",
    template: "%s | Mohammad Kaif",
  },
  description:
    "Mohammad Kaif is a final-year Computer Science student at IIIT-Delhi and a passionate developer and problem solver who builds impactful software solutions.",
  keywords: [
    "Mohammad Kaif",
    "developer",
    "portfolio",
    "software engineer",
    "full stack",
    "IIIT-Delhi",
    "Next.js",
    "React",
  ],
  authors: [{ name: "Mohammad Kaif" }],
  creator: "Mohammad Kaif",
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Mohammad Kaif — Developer Portfolio",
    title: "Mohammad Kaif — Developer Portfolio",
    description:
      "Final-year CS student at IIIT-Delhi. Passionate developer and problem solver building impactful software solutions.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammad Kaif — Developer Portfolio",
    description:
      "Final-year CS student at IIIT-Delhi. Passionate developer and problem solver building impactful software solutions.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mohammad Kaif",
  url: "https://new-portfolio-tan-seven.vercel.app",
  jobTitle: "Software Engineer",
  description:
    "Final-year Computer Science student at IIIT-Delhi and passionate developer building impactful software solutions.",
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${spaceGrotesk.className} min-h-screen mx-2 p-2 sm:p-4 md:p-6 relative`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="fixed inset-0 z-[-1] overflow-hidden">
          <GridPattern
            width={30}
            height={30}
            x={-1}
            y={-1}
            strokeDasharray={"4 2"}
            className={cn(
              "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
            )}
          />
        </div>
        <div className="flex justify-center">
          <Navbar />
        </div>
        <main className="container mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}