import type { Metadata, Viewport } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

export const viewport: Viewport = {
  themeColor: "#040914",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://apollo-gs.com"),
  title: {
    default: "Apollo | Intelligent Energy Management & Industrial IoT",
    template: "%s | Apollo Green Solutions",
  },
  description:
    "Apollo Green Solutions bridges the gap between physical electrical infrastructure and digital AI intelligence. Enterprise energy management, sub-metering, and battery optimization across Europe.",
  keywords: [
    "Apollo Green Solutions",
    "energy management",
    "smart grid",
    "akıllı enerji yönetimi",
    "industrial IoT",
    "sub-metering",
    "Class 0.2S",
    "peak shaving",
    "BESS optimization",
    "ESG reporting",
    "CSRD compliance",
    "Rafail Kasapis",
  ],
  authors: [{ name: "Apollo Green Solutions" }],
  creator: "Apollo Green Solutions",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://apollo-gs.com",
    title: "Apollo | Intelligent Energy Management & Industrial IoT",
    description:
      "We make the invisible flow of energy visible and sustainable. Combining physical edge hardware with AI software.",
    siteName: "Apollo Green Solutions",
    images: [
      {
        url: "/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Apollo Intelligent Energy Management",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apollo | Intelligent Energy Management & Industrial IoT",
    description:
      "Bridging the physical and digital in European energy management. High precision hardware meets AI foresight.",
    images: ["/hero-bg.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen flex flex-col bg-[#040914] text-slate-100 antialiased selection:bg-blue-600 selection:text-white">
        <LanguageProvider>
          <TopBar />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <ChatBot />
        </LanguageProvider>
      </body>
    </html>
  );
}
