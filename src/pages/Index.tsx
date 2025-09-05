import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { AuthorSection } from "@/components/AuthorSection";
import { GuaranteeSection } from "@/components/GuaranteeSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <BenefitsSection />
      <AuthorSection />
      <GuaranteeSection />
    </main>
  );
};

export default Index;
