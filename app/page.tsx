import HeroSection from "@/components/home/HeroSection";
import TrustBar from "@/components/home/TrustBar";
import HowItWorks from "@/components/home/HowItWorks";
import CategoryGrid from "@/components/home/CategoryGrid";
import CommissionComparison from "@/components/home/CommissionComparison";
import USPSection from "@/components/home/USPSection";
import Testimonials from "@/components/home/Testimonials";
import CoverageStrip from "@/components/home/CoverageStrip";
import BlogTeaser from "@/components/home/BlogTeaser";
import FinalCTA from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <TrustBar />
      <HowItWorks />
      <CategoryGrid />
      <CommissionComparison />
      <USPSection />
      <Testimonials />
      <CoverageStrip />
      <BlogTeaser />
      <FinalCTA />
    </main>
  );
}