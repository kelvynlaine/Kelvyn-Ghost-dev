import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowUpRight, FolderOpen, X, BarChart3, HelpCircle, Lightbulb, Trophy } from 'lucide-react';

const PortfolioSection = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = t('portfolio.items') || [];
  
  const filters = [
    { code: 'all', label: t('portfolio.filterAll') },
    { code: 'ecommerce', label: t('portfolio.filterEcommerce') },
    { code: 'saas', label: t('portfolio.filterSaas') },
    { code: 'creative', label: t('portfolio.filterCreative') }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  // Background visual mockups drawn purely in CSS
  const getProjectBgColor = (id) => {
    switch (id) {
      case 'ecommerce': return 'linear-gradient(135deg, rgba(6, 182, 212, 0.2) 0%, rgba(59, 130, 246, 0.2) 100%)';
      case 'saas': return 'linear-gradient(135deg, rgba(168, 85, 247, 0.2) 0%, rgba(236, 72, 153, 0.2) 100%)';
      case 'crypto': return 'linear-gradient(135deg, rgba(234, 179, 8, 0.2) 0%, rgba(249, 115, 22, 0.2) 100%)';
      case 'portfolio': return 'linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(20, 184, 166, 0.2) 100%)';
      case 'delivery': return 'linear-gradient(135deg, rgba(239, 68, 68, 0.2) 0%, rgba(244, 63, 94, 0.2) 100%)';
      default: return 'linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(168, 85, 247, 0.2) 100%)';
    }
  };

  return (
    <section id="portfolio" className="section-padding relative">
      <div className="container">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="cyber-badge mb-4">
            <FolderOpen size={14} className="text-cyan-400" />
            <span>Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 text-gradient">
            {t('portfolio.title')}
          </h2>
          <p className="text-foreground-muted text-base sm:text-lg">
            {t('portfolio.subtitle')}
          </p>
        </div>

        {/* Filters Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f.code}
              onClick={() => setActiveFilter(f.code)}
              className={`font-medium text-sm py-2.5 px-6 rounded-xl border transition-all duration-300 focus:outline-none ${
                activeFilter === f.code
                  ? 'bg-cyan-400/10 border-cyan-400 text-cyan-400 drop-shadow-[0_0_10px_rgba(0,229,255,0.15)]'
                  : 'bg-white/[0.02] border-white/5 text-foreground-muted hover:text-white hover:border-white/10'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((p, idx) => (
            <div 
              key={p.id || idx}
              onClick={() => setSelectedProject(p)}
              className="glass-card p-0 border-white/5 hover:border-cyan-500/20 group cursor-pointer flex flex-col h-full shadow-lg"
            >
              {/* CSS Art Mockup Header */}
              <div 
                className="h-48 w-full relative flex items-center justify-center overflow-hidden portfolio-mockup-wrapper"
                style={{ background: getProjectBgColor(p.id) }}
              >
                {/* Visual tech designs inside the card */}
                <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
                <div className="absolute w-32 h-32 rounded-full border border-white/10 flex items-center justify-center animate-[spin_40s_linear_infinite]">
                  <div className="w-24 h-24 rounded-full border border-dashed border-white/15"></div>
                </div>
                
                {/* Metric Overlay Bubble */}
                <div className="absolute bottom-4 right-4 py-1.5 px-3.5 rounded-lg glass-effect border border-white/10 text-xs font-mono font-bold text-white shadow-md">
                  {p.metric || "Case Study"}
                </div>

                {/* Cyber lines decor */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
                  <div className="absolute left-6 top-0 w-[1px] h-full bg-gradient-to-b from-white to-transparent"></div>
                  <div className="absolute left-0 top-10 w-full h-[1px] bg-gradient-to-r from-white to-transparent"></div>
                </div>
              </div>

              {/* Text descriptions */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <span className="text-xs font-mono uppercase font-bold text-cyan-400 tracking-widest block mb-2">
                    {p.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm text-foreground-muted leading-relaxed">
                    {p.description}
                  </p>
                </div>

                {/* View CTA */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-bold text-cyan-400 uppercase tracking-widest font-mono">
                  <span>View Case Study</span>
                  <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Case Study Glass Modal Drawer */}
        {selectedProject && (
          <div className="portfolio-modal-overlay">
            <div 
              className="glass-card max-w-2xl w-full p-0 overflow-hidden portfolio-modal"
            >
              {/* Modal Header */}
              <div className="py-4 px-6 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
                <div className="flex items-center gap-2">
                  <FolderOpen size={16} className="text-cyan-400" />
                  <span className="text-xs font-mono font-bold text-foreground-muted uppercase tracking-wider">
                    {selectedProject.category} Case Study
                  </span>
                </div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="portfolio-modal-close"
                  aria-label="Close"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 flex flex-col gap-6 overflow-y-auto max-h-[75vh]">
                
                {/* Head Title */}
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight mb-2">
                    {selectedProject.title}
                  </h3>
                  <p className="text-foreground-muted text-sm leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Challenge Row */}
                <div className="flex gap-4 items-start p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="p-2 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-400 shrink-0">
                    <HelpCircle size={18} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                      Challenge
                    </h4>
                    <p className="text-sm text-foreground-muted leading-relaxed">
                      {selectedProject.challenge}
                    </p>
                  </div>
                </div>

                {/* Solution Row */}
                <div className="flex gap-4 items-start p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0">
                    <Lightbulb size={18} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                      Solution
                    </h4>
                    <p className="text-sm text-foreground-muted leading-relaxed">
                      {selectedProject.solution}
                    </p>
                  </div>
                </div>

                {/* Results Metrics Badge */}
                <div className="flex gap-4 items-start p-4 rounded-xl bg-gradient-to-br from-cyan-500/5 to-purple-500/5 border border-cyan-500/20 shadow-md">
                  <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0">
                    <Trophy size={18} className="animate-bounce" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                      CRO Results Impact
                    </h4>
                    <p className="text-lg font-black text-cyan-400 drop-shadow-[0_0_10px_rgba(0,229,255,0.2)]">
                      {selectedProject.metric}
                    </p>
                  </div>
                </div>

              </div>
              
              {/* Modal Footer */}
              <div className="py-4 px-6 border-t border-white/5 bg-white/[0.02] flex justify-end">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="cyber-btn cyber-btn-secondary py-1.5 px-4 text-xs font-semibold"
                >
                  Close Case Study
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default PortfolioSection;
