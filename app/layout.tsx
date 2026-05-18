import type { Metadata } from "next";
import { Cormorant_Garamond, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Analytics } from "@vercel/analytics/next";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://new-portfolio-tan-seven.vercel.app"),
  title: {
    default: "Mohammad Kaif | Developer Portfolio",
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
    siteName: "Mohammad Kaif | Developer Portfolio",
    title: "Mohammad Kaif | Developer Portfolio",
    description:
      "Final-year CS student at IIIT-Delhi. Passionate developer and problem solver building impactful software solutions.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammad Kaif | Developer Portfolio",
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
  sameAs: [
    "https://github.com/LordAizen1",
    "https://www.linkedin.com/in/mohammadkaif007/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jetbrains.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <Analytics />
        <main>{children}</main>
        <footer style={{ borderTop: '1px solid var(--border)', padding: '2rem 3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '11px', color: 'var(--tm)', letterSpacing: '.06em' }}>© 2026 Mohammad Kaif</span>
          <span style={{ fontSize: '11px', color: 'var(--tm)', letterSpacing: '.06em' }}>built with <span style={{ color: 'var(--accent)' }}>♥</span> and a lot of commits</span>
        </footer>
      </body>
    </html>
  );
}
