import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Terminal, Mail, MessageCircle, ArrowUp, Cpu, Heart, ExternalLink } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

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

  const handleWhatsAppChat = () => {
    const phone = "33766601335";
    const text = t('language') === 'FR' 
      ? "Bonjour Kelvyn, je souhaiterais en savoir plus sur tes services !" 
      : t('language') === 'ES'
      ? "¡Hola Kelvyn, me gustaría saber más sobre tus servicios!"
      : "Hello Kelvyn, I'd love to learn more about your services!";
      
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <footer className="relative border-t border-white/5 bg-black/60 pt-20 pb-10 overflow-hidden">
      {/* Dynamic purple light glow */}
      <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-purple-500/5 rounded-full filter blur-[120px] pointer-events-none"></div>
      
      <div className="container relative z-10">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-16">
          
          {/* Column 1: Branding & Mission */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            <div className="flex items-center gap-2 font-mono">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center border border-cyan-500/30">
                <Terminal size={16} className="text-cyan-400" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                <span className="text-cyan-400">Ghost</span> DEV
              </span>
            </div>
            
            <p className="text-sm text-foreground-muted leading-relaxed max-w-sm">
              Développeur d'élite spécialisé dans la conception de Landing Pages haute performance. 
              Une approche invisible axée sur la vitesse, l'expérience utilisateur premium et l'optimisation CRO.
            </p>

            <div className="flex items-center gap-4 text-xs font-mono text-foreground-muted mt-2">
              <Cpu size={14} className="text-cyan-400 animate-pulse" />
              <span>Score Lighthouse 100/100 garanti</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="text-sm font-bold font-mono uppercase text-white tracking-wider border-l-2 border-cyan-400 pl-3">
              Plan du site
            </h4>
            <div className="flex flex-col gap-2.5 text-sm text-foreground-muted">
              {[
                { label: t('nav.home'), href: '#hero' },
                { label: t('nav.skills'), href: '#skills' },
                { label: t('nav.portfolio'), href: '#portfolio' },
                { label: t('nav.testimonials'), href: '#testimonials' },
                { label: t('nav.contact'), href: '#contact' }
              ].map((link) => (
                <a 
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleScrollToSection(e, link.href)}
                  className="hover:text-cyan-400 transition-colors duration-200 flex items-center gap-1.5 group"
                >
                  <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-cyan-400 transition-colors"></span>
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Contact Channels */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="text-sm font-bold font-mono uppercase text-white tracking-wider border-l-2 border-purple-400 pl-3">
              Canaux directs
            </h4>
            <div className="flex flex-col gap-3 text-sm text-foreground-muted">
              {/* WhatsApp direct connect */}
              <button 
                onClick={handleWhatsAppChat}
                className="hover:text-purple-400 transition-colors duration-200 flex items-center gap-2 group text-left focus:outline-none"
              >
                <MessageCircle size={16} className="text-purple-400" />
                <span className="font-mono">+33 7 66 60 13 35</span>
                <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>

              {/* Email direct link */}
              <a 
                href="mailto:kelvynwear@gmail.com"
                className="hover:text-cyan-400 transition-colors duration-200 flex items-center gap-2 group"
              >
                <Mail size={16} className="text-cyan-400" />
                <span className="font-mono">kelvynwear@gmail.com</span>
                <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              
              {/* Availability tag */}
              <div className="mt-2 inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-lg py-1.5 px-3 w-fit text-emerald-400 font-mono text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                <span>Disponible pour projets</span>
              </div>
            </div>
          </div>

          {/* Column 4: CRO conversion teaser */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="text-sm font-bold font-mono uppercase text-white tracking-wider border-l-2 border-cyan-400 pl-3">
              Objectif CRO
            </h4>
            <div className="glass-card p-4 rounded-xl border-white/5 bg-white/[0.01] flex flex-col gap-2">
              <span className="text-xs text-cyan-400 font-mono font-bold uppercase tracking-wider">
                Boost moyen observé :
              </span>
              <span className="text-2xl font-black font-mono text-white leading-tight">
                +127% <span className="text-xs text-foreground-muted font-normal">de conversion</span>
              </span>
              <p className="text-[11px] text-foreground-muted leading-relaxed">
                Tirez profit de chaque visiteur qualifié grâce à un tunnel de vente optimisé pour la vitesse.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom row: copyright and Back to Top button */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Signature and legal note */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-xs font-mono text-foreground-muted text-center sm:text-left">
            <span>© {new Date().getFullYear()} Ghost DEV. Tous droits réservés.</span>
            <span className="hidden sm:inline">|</span>
            <span className="flex items-center gap-1">
              Fait avec <Heart size={10} className="text-rose-500 animate-pulse" /> pour un impact business maximal.
            </span>
          </div>

          {/* Back to Top interactive button */}
          <a
            href="#hero"
            onClick={(e) => handleScrollToSection(e, '#hero')}
            className="w-10 h-10 rounded-xl glass-effect border border-white/10 hover:border-cyan-400/30 flex items-center justify-center text-foreground-muted hover:text-cyan-400 transition-all duration-300 hover:-translate-y-1 shadow-[0_4px_12px_rgba(0,0,0,0.5)] group"
            title="Back to top"
            aria-label="Back to top"
          >
            <ArrowUp size={18} className="group-hover:animate-bounce" />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
