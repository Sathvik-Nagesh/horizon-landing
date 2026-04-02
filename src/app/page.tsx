import { Component } from "@/components/ui/horizon-hero-section";
import { Navbar } from "@/components/ui/navbar";
import { MarqueeStrip } from "@/components/ui/marquee-strip";
import { FeaturesSection } from "@/components/ui/features-section";
import { NetworkGlobe } from "@/components/ui/network-globe";
import { AboutSection } from "@/components/ui/about-section";
import { RoadmapSection } from "@/components/ui/roadmap-section";
import { TestimonialsSection } from "@/components/ui/testimonials-section";
import { CtaSection } from "@/components/ui/cta-section";
import { Footer } from "@/components/ui/footer";
import { DriftingCosmicDust } from "@/components/ui/drifting-cosmic-dust";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div id="hero">
        <Component />
      </div>
      <MarqueeStrip />
      <div className="relative z-[20]">
        <DriftingCosmicDust />
        <FeaturesSection />
        <NetworkGlobe />
        <AboutSection />
        <RoadmapSection />
        <TestimonialsSection />
        <CtaSection />
        <Footer />
      </div>
    </main>
  );
}
