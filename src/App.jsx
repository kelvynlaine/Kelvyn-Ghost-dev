import React, { useEffect } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CroCalculator from './components/CroCalculator';
import GhostTerminal from './components/GhostTerminal';
import SkillsSection from './components/SkillsSection';
import PortfolioSection from './components/PortfolioSection';
import TestimonialsSlider from './components/TestimonialsSlider';
import FaqSection from './components/FaqSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const AppContent = () => {
  const { t, language, isTransitioning } = useLanguage();

  // Dynamic SEO Page Title & Meta Description updates depending on language (SEO Best Practice)
  useEffect(() => {
    document.title = t('meta.title') || "Kelvyn Ghost DEV - Landing Pages";
    
    // Update meta description if it exists
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', t('meta.description') || "Landing Page Expert");
    }
  }, [language, t]);

  return (
    <div 
      className={`min-h-screen relative transition-all duration-300 ${
        isTransitioning ? 'opacity-40 scale-[0.99] filter blur-[1px]' : 'opacity-100 scale-100 filter blur-0'
      }`}
    >
      {/* Premium background layout */}
      <div className="cyber-bg">
        <div className="cyber-grid"></div>
        <div className="cyber-noise"></div>
        
        {/* Floating Neon Orbs */}
        <div className="light-orb orb-primary"></div>
        <div className="light-orb orb-secondary"></div>
        <div className="light-orb orb-accent"></div>
      </div>

      {/* Main Elements */}
      <Navbar />
      
      <main>
        <Hero />
        <CroCalculator />
        <GhostTerminal />
        <SkillsSection />
        <PortfolioSection />
        <TestimonialsSlider />
        <FaqSection />
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
};

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
