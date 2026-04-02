import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import "./horizon.css";
import { SmoothScroll } from "@/components/ui/smooth-scroll";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { Preloader } from "@/components/ui/preloader";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "HORIZON | Spatial Computing Infrastructure",
  description:
    "Architecting the foundational layer for spatial computing and immersive AI. Build high-fidelity digital dimensions with our quantum rendering engine.",
  keywords: ["spatial computing", "AI", "webgl", "threejs", "horizon", "virtual reality"],
  authors: [{ name: "Sathvik Nagesh" }],
  openGraph: {
    title: "HORIZON | Spatial Computing & Immersive AI",
    description:
      "Architecting the foundational layer for spatial computing and immersive AI.",
    url: "https://horizon.sathvik.dev",
    siteName: "Horizon",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HORIZON | Spatial Computing Infrastructure",
    description: "Architecting the foundational layer for spatial computing and immersive AI.",
    creator: "@sathvik_nagesh",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable} antialiased`}>
      <body>
        <Preloader />
        <CustomCursor />
        <ScrollProgress />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
