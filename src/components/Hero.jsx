import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, Terminal, Award, ChevronDown } from 'lucide-react';

const Hero = () => {
  const { t, language } = useLanguage();
  const [currentWordIdx, setCurrentWordIdx] = useState(0);
  const [fadeState, setFadeState] = useState('fade-in');

  // We rotate the words in the active language dictionary
  const words = t('hero.words') || ["Landing Page", "Conversion", "UX", "Performance"];

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setFadeState('fade-out');
      setTimeout(() => {
        setCurrentWordIdx((prev) => (prev + 1) % words.length);
        setFadeState('fade-in');
      }, 300); // match duration of fade animation
    }, 2800);

    return () => clearInterval(wordInterval);
  }, [words.length]);

  // Reset index on language change to ensure no index out of bounds
  useEffect(() => {
    setCurrentWordIdx(0);
    setFadeState('fade-in');
  }, [language]);

  const handleScrollToSection = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offset = 90;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Visual background lights */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-cyan-500/10 rounded-full filter blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] bg-purple-500/10 rounded-full filter blur-[120px] pointer-events-none"></div>

      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Cyber Badge */}
          <div 
            className="mb-8 opacity-0 scale-95"
            style={{
              animation: 'fadeInLang 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards'
            }}
          >
            <div className="cyber-badge">
              <Award size={14} className="text-cyan-400 animate-pulse" />
              <span>{t('hero.badge')}</span>
            </div>
          </div>

          {/* Epic Main Heading */}
          <h1 
            className="text-4xl sm:text-6xl md:text-7xl font-bold font-display tracking-tight leading-[1.08] mb-6 opacity-0 translate-y-4"
            style={{
              animation: 'fadeInLang 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards'
            }}
          >
            <span className="text-white/95">{t('hero.titlePrefix')} </span>
            <span className="relative inline-block min-w-[280px] sm:min-w-[450px]">
              <span 
                className={`text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-500 transition-all duration-300 block ${
                  fadeState === 'fade-in' 
                    ? 'opacity-100 translate-y-0 filter blur-0' 
                    : 'opacity-0 -translate-y-2 filter blur-[4px]'
                }`}
              >
                {words[currentWordIdx]}
              </span>
            </span>
          </h1>

          {/* Intricately Styled Paragraph Details */}
          <div 
            className="max-w-2xl text-base sm:text-xl text-foreground-muted mb-10 flex flex-col gap-2 font-medium opacity-0 translate-y-4"
            style={{
              animation: 'fadeInLang 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards'
            }}
          >
            <p className="text-white font-mono text-lg bg-white/5 border border-white/5 py-2 px-4 rounded-xl inline-block mx-auto backdrop-blur-sm shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
              {t('hero.description1')}
            </p>
            <p className="mt-2 text-foreground-muted leading-relaxed">
              {t('hero.description2')}{' '}
              <span className="text-purple-400 font-semibold">{t('hero.description3')}</span>
            </p>
          </div>

          {/* Primary & Secondary Call to Actions */}
          <div 
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center w-full sm:w-auto mb-16 opacity-0 translate-y-4"
            style={{
              animation: 'fadeInLang 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s forwards'
            }}
          >
            <a 
              href="#contact"
              onClick={(e) => handleScrollToSection(e, '#contact')}
              className="cyber-btn cyber-btn-primary w-full sm:w-auto shadow-lg"
            >
              <span>{t('hero.ctaPrimary')}</span>
              <ArrowRight size={16} />
            </a>

            <a 
              href="#portfolio"
              onClick={(e) => handleScrollToSection(e, '#portfolio')}
              className="cyber-btn cyber-btn-secondary w-full sm:w-auto"
            >
              <Terminal size={16} className="text-purple-400" />
              <span>{t('hero.ctaSecondary')}</span>
            </a>
          </div>

          {/* Scroll Cue Indicator */}
          <a 
            href="#calculator"
            onClick={(e) => handleScrollToSection(e, '#calculator')}
            className="flex flex-col items-center gap-2 group text-foreground-muted hover:text-cyan-400 transition-colors duration-300 opacity-0 cursor-pointer"
            style={{
              animation: 'fadeInLang 1s cubic-bezier(0.16, 1, 0.3, 1) 0.6s forwards'
            }}
          >
            <span className="text-xs font-semibold tracking-widest uppercase font-mono">
              CRO Simulation
            </span>
            <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1 group-hover:border-cyan-400/50 transition-colors">
              <div className="w-1.5 h-2 rounded-full bg-cyan-400 animate-bounce"></div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
