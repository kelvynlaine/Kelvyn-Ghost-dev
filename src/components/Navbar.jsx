import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { Menu, X, ArrowUpRight, Terminal, Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, language, changeLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t('nav.home'), href: '#hero' },
    { label: t('nav.skills'), href: '#skills' },
    { label: t('nav.portfolio'), href: '#portfolio' },
    { label: t('nav.testimonials'), href: '#testimonials' },
    { label: t('nav.contact'), href: '#contact' }
  ];

  const handleScrollToSection = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offset = 90; // offset for fixed header
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  const languages = [
    { code: 'FR', label: 'FR' },
    { code: 'EN', label: 'EN' },
    { code: 'ES', label: 'ES' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div className="container">
        <nav 
          className={`glass-effect rounded-2xl transition-all duration-300 flex items-center justify-between ${
            isScrolled ? 'py-2.5 px-6 shadow-[0_10px_30px_rgba(0,0,0,0.8)]' : 'py-4 px-8'
          }`}
          style={{
            borderColor: isScrolled ? 'rgba(0, 229, 255, 0.15)' : 'rgba(255, 255, 255, 0.08)'
          }}
        >
          {/* Logo */}
          <a 
            href="#hero" 
            onClick={(e) => handleScrollToSection(e, '#hero')}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center overflow-hidden glass-effect border border-cyan-500/30">
              <Terminal size={16} className="text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <span className="text-xl font-bold font-mono tracking-tight">
              <span className="text-gradient">Ghost</span>
              <span className="text-white/95">DEV</span>
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href}
                onClick={(e) => handleScrollToSection(e, link.href)}
                className="text-sm font-medium text-foreground-muted hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Languages, Theme & CTA */}
          <div className="hidden md:flex items-center gap-6">
            {/* Lang switcher container */}
            <div className="flex items-center gap-1 border-l border-white/10 pl-6">
              <div className="flex items-center gap-1 bg-white/[0.03] border border-white/5 p-1 rounded-xl">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`font-mono text-xs font-bold py-1 px-3 rounded-lg transition-all duration-300 focus:outline-none ${
                      language === lang.code 
                        ? 'bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 shadow-[0_0_8px_rgba(0,229,255,0.15)] scale-105' 
                        : 'text-foreground-muted hover:text-white border border-transparent'
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>

              {/* Theme Toggle Switcher */}
              <button
                onClick={toggleTheme}
                className="w-9 h-9 rounded-xl glass-effect border border-white/10 flex items-center justify-center text-white/90 hover:text-cyan-400 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105 shadow-md focus:outline-none ml-2"
                title={theme === 'dark' ? 'Activer le Mode Clair' : 'Activer le Mode Sombre'}
              >
                {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
              </button>
            </div>

            {/* CTA Button */}
            <a 
              href="#contact"
              onClick={(e) => handleScrollToSection(e, '#contact')}
              className="cyber-btn cyber-btn-primary py-2 px-5 text-sm"
            >
              {t('nav.cta')}
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2.5 md:hidden">
            {/* Lang selector for mobile */}
            <div className="flex items-center gap-1 bg-white/[0.03] border border-white/5 p-0.5 rounded-lg">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={`font-mono text-[10px] font-bold py-0.5 px-1.5 rounded transition-all duration-200 ${
                    language === lang.code 
                      ? 'bg-cyan-400/10 text-cyan-400 shadow-[0_0_6px_rgba(0,229,255,0.15)]' 
                      : 'text-foreground-muted/50'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>

            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="w-8 h-8 rounded-lg glass-effect border border-white/10 flex items-center justify-center text-white/90 hover:text-cyan-400 focus:outline-none p-1"
            >
              {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
            </button>

            {/* Mobile Toggle Drawer Trigger */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-cyan-400 transition-colors p-1"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Drawer */}
        <div className={`mobile-nav-drawer ${isMobileMenuOpen ? 'active' : ''}`}>
          <div className="mobile-nav-card">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleScrollToSection(e, link.href)}
                  className="text-lg font-medium py-2 border-b border-white/5"
                >
                  {link.label}
                </a>
              ))}
            </div>
 
            <a 
              href="#contact"
              onClick={(e) => handleScrollToSection(e, '#contact')}
              className="cyber-btn cyber-btn-primary w-full text-center"
            >
              {t('nav.cta')}
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
