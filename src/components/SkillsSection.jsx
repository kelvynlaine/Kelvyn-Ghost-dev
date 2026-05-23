import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Layout, 
  Code, 
  Sparkles, 
  Target, 
  LineChart, 
  Gauge, 
  Layers, 
  Search 
} from 'lucide-react';

const iconMap = {
  "Landing Page Design": Layout,
  "Diseño de Landing Pages": Layout,
  "React / Next.js / Vite": Code,
  "Tailwind / Framer": Sparkles,
  "CRO": Target,
  "A/B Testing": LineChart,
  "Performance Web": Gauge,
  "Rendimiento Web": Gauge,
  "Web Performance": Gauge,
  "Design System": Layers,
  "Sistema de Diseño": Layers,
  "SEO & Analytics": Search,
  "SEO y Analítica": Search
};

const SkillsSection = () => {
  const { t } = useLanguage();
  
  const skillItems = t('skillsSection.items') || [];

  return (
    <section id="skills" className="section-padding relative">
      <div className="container">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="cyber-badge mb-4">
            <Code size={14} className="text-cyan-400" />
            <span>Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 text-gradient">
            {t('skillsSection.title')}
          </h2>
          <p className="text-foreground-muted text-base sm:text-lg">
            {t('skillsSection.subtitle')}
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillItems.map((skill, idx) => {
            // Find corresponding icon or fallback to Code
            const IconComponent = iconMap[skill.title] || Code;
            
            // Alternating neon glow types for premium visual variety
            const hoverClass = idx % 2 === 0 ? 'neon-hover-primary' : 'neon-hover-secondary';
            const iconGlowColor = idx % 2 === 0 ? 'text-cyan-400' : 'text-purple-400';
            const bgGlowColor = idx % 2 === 0 ? 'rgba(0, 229, 255, 0.1)' : 'rgba(168, 85, 247, 0.1)';

            return (
              <div 
                key={idx} 
                className={`glass-card ${hoverClass} flex flex-col justify-between h-full group`}
              >
                <div>
                  {/* Icon with glowing backdrop wrapper */}
                  <div className="relative w-12 h-12 rounded-xl flex items-center justify-center mb-6 glass-effect border border-white/5 overflow-hidden">
                    <div 
                      className="absolute inset-0 transition-opacity duration-300 opacity-20 group-hover:opacity-40"
                      style={{ backgroundColor: bgGlowColor }}
                    ></div>
                    <IconComponent size={20} className={`${iconGlowColor} transition-transform duration-300 group-hover:scale-110`} />
                  </div>

                  {/* Title & Desc */}
                  <h3 className="text-lg font-bold text-white mb-3">
                    {skill.title}
                  </h3>
                  <p className="text-sm text-foreground-muted leading-relaxed mb-6">
                    {skill.description}
                  </p>
                </div>

                {/* Metric/Stat Tag at bottom */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs text-foreground-muted font-mono uppercase tracking-wider font-semibold">
                    Status
                  </span>
                  <span className={`text-xs font-bold font-mono ${iconGlowColor}`}>
                    {skill.stat}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;
