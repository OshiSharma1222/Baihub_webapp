import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileBottomCTA } from "@/components/layout/MobileBottomCTA";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Pricing } from "@/components/sections/Pricing";
import { Services } from "@/components/sections/Services";
import { WhyBaiHub } from "@/components/sections/WhyBaiHub";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Services />
        <HowItWorks />
        <WhyBaiHub />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <MobileBottomCTA />
    </>
  );
}
