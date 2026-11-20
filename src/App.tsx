import React from 'react';
import { MotionConfig } from 'framer-motion';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { PillarsSection } from './components/PillarsSection';
import { SolutionsHubSection } from './components/SolutionsHubSection';
import { GrowthAndAiSection } from './components/GrowthAndAiSection';
import { PortfolioSection } from './components/PortfolioSection';
import { MethodAndDifferentialsSection } from './components/MethodAndDifferentialsSection';
import { FaqSection } from './components/FaqSection';
import { ContactCtaSection } from './components/ContactCtaSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen flex flex-col bg-[#101110] text-[#FFFDF7]">
        <a
          href="#conteudo-principal"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:bg-[#D8FF3E] focus:text-[#101110] focus:font-semibold focus:rounded"
        >
          Ir para o conteúdo principal
        </a>

        <Header />

        <main id="conteudo-principal" className="flex-1">
          <HeroSection />
          <PillarsSection />
          <SolutionsHubSection />
          <GrowthAndAiSection />
          <PortfolioSection />
          <MethodAndDifferentialsSection />
          <FaqSection />
          <ContactCtaSection />
        </main>

        <Footer />
      </div>
    </MotionConfig>
  );
}
