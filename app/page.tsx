import { BentoGrid } from "@/components/bento-grid";
import { DashboardShowcase } from "@/components/dashboard-showcase";
import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { LogoMarquee } from "@/components/logo-marquee";
import { Navbar } from "@/components/navbar";
import { Pricing } from "@/components/pricing";
import { SmoothScroll } from "@/components/smooth-scroll";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="min-h-screen bg-zinc-950">
        <Navbar />
        <Hero />
        <LogoMarquee />
        <BentoGrid />
        <DashboardShowcase />

        <Pricing />
        <FinalCTA />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
