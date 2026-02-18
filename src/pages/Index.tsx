import HeroSection from "@/components/HeroSection";
import GrandPrizesSection from "@/components/GrandPrizesSection";
import MonthlyPrizesSection from "@/components/MonthlyPrizesSection";
import ScoringSection from "@/components/ScoringSection";
import HowToParticipateSection from "@/components/HowToParticipateSection";
import TermsSection from "@/components/TermsSection";
import FooterSection from "@/components/FooterSection";
import TelegramWidget from "@/components/TelegramWidget";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <GrandPrizesSection />
      <MonthlyPrizesSection />
      <ScoringSection />
      <HowToParticipateSection />
      <TermsSection />
      <FooterSection />
      <TelegramWidget />
    </main>
  );
};

export default Index;
