import { ArticlesSection } from "@/components/landing/articles-section";
import { BenefitsSection } from "@/components/landing/benefits-section";
import { CTASection } from "@/components/landing/cta-section";
import { EmpathySection } from "@/components/landing/empathy-section";
import { FlowSection } from "@/components/landing/flow-section";
import { FounderSection } from "@/components/landing/founder-section";
import { HeroSection } from "@/components/landing/hero-section";
import { LandingHeader } from "@/components/landing/landing-header";
import { ResultPreviewSection } from "@/components/landing/result-preview-section";

export default function HomePage() {
  return (
    <main className="landing-page min-h-screen bg-[var(--color-landing-surface)] pb-20 md:pb-0">
      <LandingHeader />
      <HeroSection />
      <ResultPreviewSection />
      <EmpathySection />
      <BenefitsSection />
      <FlowSection />
      <CTASection />
      <FounderSection />
      <ArticlesSection />
    </main>
  );
}
