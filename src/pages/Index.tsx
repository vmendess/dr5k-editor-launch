import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { AuthorSection } from "@/components/AuthorSection";
import { GuaranteeSection } from "@/components/GuaranteeSection";
import { BackgroundEffects } from "@/components/BackgroundEffects";

const Index = () => {
  return (
    <main className="relative min-h-screen">
      <BackgroundEffects />
      <HeroSection />
      <AboutSection />
      <BenefitsSection />
      <AuthorSection />
      <GuaranteeSection />
    </main>
  );
};

export default Index;
