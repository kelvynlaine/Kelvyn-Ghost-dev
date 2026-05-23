import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { HelpCircle, ChevronDown, Plus, Minus } from 'lucide-react';

const FaqSection = () => {
  const { t } = useLanguage();
  const [openIdx, setOpenIdx] = useState(null);

  const items = t('faq.items') || [];

  const toggleAccordion = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="section-padding relative">
      <div className="container">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="cyber-badge mb-4">
            <HelpCircle size={14} className="text-cyan-400" />
            <span>FAQ</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 text-gradient">
            {t('faq.title')}
          </h2>
          <p className="text-foreground-muted text-base sm:text-lg">
            {t('faq.subtitle')}
          </p>
        </div>

        {/* Accordion List */}
        <div className="max-w-3xl mx-auto flex flex-col gap-4">
          {items.map((item, idx) => {
            const isOpen = openIdx === idx;
            
            return (
              <div 
                key={idx}
                className={`glass-card p-0 border-white/5 faq-accordion-item transition-all duration-300 ${
                  isOpen ? 'border-cyan-500/20 bg-cyan-500/[0.02] shadow-[0_10px_30px_rgba(0,0,0,0.4)]' : ''
                }`}
              >
                {/* Trigger Button */}
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full flex items-center justify-between py-5 px-6 sm:px-8 font-medium text-left text-white/95 focus:outline-none group"
                >
                  <span className={`text-base sm:text-lg font-bold transition-colors ${isOpen ? 'text-cyan-400' : 'group-hover:text-white'}`}>
                    {item.q}
                  </span>
                  
                  {/* Expand indicators */}
                  <div className={`p-1.5 rounded-lg glass-effect border border-white/5 text-foreground-muted group-hover:text-white transition-all duration-300 ${
                    isOpen ? 'rotate-180 border-cyan-500/20 text-cyan-400' : ''
                  }`}>
                    <ChevronDown size={18} />
                  </div>
                </button>

                {/* Collapsible Panel */}
                <div 
                  className={`overflow-hidden faq-panel-transition ${
                    isOpen ? 'max-h-[300px] opacity-100 py-2' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="px-6 sm:px-8 pb-6 text-sm sm:text-base text-foreground-muted leading-relaxed border-t border-white/5 pt-4">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FaqSection;
