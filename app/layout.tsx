import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VMI Collective - The Enabling Bridge between Skills, Markets & Opportunities",
  description: "VMI Collective empowers individuals and businesses through industry-aligned training, go-to-market strategies, sustainable growth solutions, innovation, and effective adoption of new technologies. Bridging skills, markets, and opportunities.",
  keywords: [
    "VMI Collective",
    "skills training",
    "employability",
    "go-to-market",
    "business growth",
    "innovation",
    "certification",
    "professional development",
    "workforce training",
  ],
  authors: [{ name: "VMI Collective" }],
  openGraph: {
    title: "VMI Collective - The Enabling Bridge between Skills, Markets & Opportunities",
    description: "Empowering individuals and businesses through skills, markets, and opportunities.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "VMI Collective",
    description: "The Enabling Bridge between Skills, Markets & Opportunities",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
