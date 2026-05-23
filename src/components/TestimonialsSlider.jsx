import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MessageSquare, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSlider = () => {
  const { t } = useLanguage();
  const [currentIdx, setCurrentIdx] = useState(0);
  const [fadeState, setFadeState] = useState('fade-in');

  const items = t('testimonials.items') || [];

  useEffect(() => {
    // Auto slide loop every 6 seconds
    const slideTimer = setInterval(() => {
      handleNext();
    }, 6000);

    return () => clearInterval(slideTimer);
  }, [items.length]);

  const handlePrev = () => {
    setFadeState('fade-out');
    setTimeout(() => {
      setCurrentIdx((prev) => (prev === 0 ? items.length - 1 : prev - 1));
      setFadeState('fade-in');
    }, 200);
  };

  const handleNext = () => {
    setFadeState('fade-out');
    setTimeout(() => {
      setCurrentIdx((prev) => (prev === items.length - 1 ? 0 : prev + 1));
      setFadeState('fade-in');
    }, 200);
  };

  if (!items.length) return null;
  const currentTestimonial = items[currentIdx];

  return (
    <section id="testimonials" className="section-padding relative bg-black/30">
      {/* Lights decoration */}
      <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-purple-500/5 rounded-full filter blur-[100px] pointer-events-none"></div>

      <div className="container">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="cyber-badge mb-4 cyber-badge-secondary">
            <MessageSquare size={14} className="text-purple-400" />
            <span>Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 text-gradient-purple">
            {t('testimonials.title')}
          </h2>
          <p className="text-foreground-muted text-base sm:text-lg">
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Carousel slider body */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            
            {/* Slide content card */}
            <div 
              className={`glass-card p-8 sm:p-12 border-purple-500/10 min-h-[250px] flex flex-col justify-between transition-all duration-300 ${
                fadeState === 'fade-in' 
                  ? 'opacity-100 translate-y-0 scale-100 filter blur-0' 
                  : 'opacity-0 translate-y-2 scale-[0.98] filter blur-[2px]'
              }`}
            >
              <div>
                {/* 5 Stars indicators */}
                <div className="flex items-center gap-1.5 mb-6 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>

                {/* Testimonial Quote */}
                <blockquote className="text-lg sm:text-2xl font-medium text-white/90 leading-relaxed italic mb-8">
                  "{currentTestimonial.quote}"
                </blockquote>
              </div>

              {/* Author metadata */}
              <div className="flex items-center justify-between pt-6 border-t border-white/5">
                <div className="flex flex-col">
                  <span className="font-bold text-white text-base">
                    {currentTestimonial.author}
                  </span>
                  <span className="text-xs font-mono text-foreground-muted uppercase tracking-wider mt-0.5">
                    {currentTestimonial.role} @ <span className="text-purple-400 font-bold">{currentTestimonial.company}</span>
                  </span>
                </div>

                {/* Page Index indicator bubbles */}
                <div className="flex items-center gap-2">
                  {items.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setFadeState('fade-out');
                        setTimeout(() => {
                          setCurrentIdx(idx);
                          setFadeState('fade-in');
                        }, 200);
                      }}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        idx === currentIdx 
                          ? 'bg-purple-500 w-6 shadow-[0_0_8px_rgba(168,85,247,0.8)]' 
                          : 'bg-white/10 hover:bg-white/30'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    ></button>
                  ))}
                </div>
              </div>
            </div>

            {/* Slider Navigation controls */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 -mx-4 sm:-mx-16 flex items-center justify-between pointer-events-none">
              
              {/* Prev Arrow */}
              <button
                onClick={handlePrev}
                className="w-12 h-12 rounded-xl glass-effect border border-white/5 flex items-center justify-center text-foreground-muted hover:text-white pointer-events-auto hover:bg-white/[0.03] transition-colors focus:outline-none"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Next Arrow */}
              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-xl glass-effect border border-white/5 flex items-center justify-center text-foreground-muted hover:text-white pointer-events-auto hover:bg-white/[0.03] transition-colors focus:outline-none"
                aria-label="Next Testimonial"
              >
                <ChevronRight size={24} />
              </button>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSlider;
