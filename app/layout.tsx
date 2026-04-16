import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/sidebar";
import { TopBar } from "@/components/top-bar";
import { StatusBar } from "@/components/status-bar";
import { MobileNav } from "@/components/mobile-nav";
import { Analytics } from "@vercel/analytics/next";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500", "700"],
});

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
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`dark ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Scanline overlay */}
        <div className="scanline fixed inset-0 z-[100] opacity-10 pointer-events-none" />

        {/* Desktop layout */}
        <Sidebar />
        <TopBar />
        <StatusBar />
        <Analytics />

        {/* Mobile layout */}
        <MobileNav />

        {/* Main content — fixed scrollable on desktop, normal flow on mobile */}
        <main className="pt-[104px] pb-[84px] md:pt-0 md:pb-0 md:fixed md:top-16 md:left-64 md:right-0 md:bottom-10 md:overflow-y-auto md:bg-[#000000]">
          {children}
        </main>
      </body>
    </html>
  );
}
