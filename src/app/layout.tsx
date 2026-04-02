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
  title: "HORIZON — Where Vision Meets Reality",
  description:
    "An immersive space-themed digital experience. Where vision meets reality, we shape the future of tomorrow.",
  keywords: ["horizon", "space", "cosmos", "immersive", "design", "3d"],
  authors: [{ name: "Sathvik Nagesh" }],
  openGraph: {
    title: "HORIZON — Where Vision Meets Reality",
    description:
      "An immersive space-themed landing page experience with stunning 3D visuals.",
    type: "website",
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
