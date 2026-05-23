import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Mail, MessageCircle, Send, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

const ContactForm = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsLoading(true);
    
    // Simulate premium email sending API request
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 1200);
  };

  const handleWhatsAppChat = () => {
    // Exact WhatsApp number from the bundle
    const phone = "33766601335";
    const text = t('language') === 'FR' 
      ? "Bonjour Kelvyn, je souhaiterais discuter d'un projet de Landing Page avec toi !" 
      : t('language') === 'ES'
      ? "¡Hola Kelvyn, me gustaría hablar contigo sobre un proyecto de Landing Page!"
      : "Hello Kelvyn, I'd love to chat about a Landing Page project with you!";
      
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Radiant glows */}
      <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-cyan-500/5 rounded-full filter blur-[100px] pointer-events-none"></div>

      <div className="container relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="cyber-badge mb-4">
            <Mail size={14} className="text-cyan-400" />
            <span>Get in touch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 text-gradient">
            {t('contact.title')}
          </h2>
          <p className="text-foreground-muted text-base sm:text-lg">
            {t('contact.subtitle')}
          </p>
        </div>

        {/* Contact Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Left Column: Direct Links */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* Email card */}
            <a 
              href="mailto:kelvynwear@gmail.com"
              className="glass-card p-6 border-white/5 hover:border-cyan-500/20 group flex flex-col justify-between shadow-md text-left"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  <Mail size={18} />
                </div>
                <span className="text-[10px] font-mono text-foreground-muted uppercase tracking-wider">
                  Direct Email
                </span>
              </div>
              <div>
                <span className="glass-label mb-1 block">
                  {t('contact.emailLabel')}
                </span>
                <span className="text-base sm:text-lg font-bold text-white font-mono group-hover:text-cyan-400 transition-colors">
                  kelvynwear@gmail.com
                </span>
              </div>
            </a>

            {/* WhatsApp card */}
            <button 
              onClick={handleWhatsAppChat}
              className="glass-card p-6 border-white/5 hover:border-purple-500/20 group flex flex-col justify-between shadow-md text-left focus:outline-none"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                  <MessageCircle size={18} />
                </div>
                <span className="text-[10px] font-mono text-foreground-muted uppercase tracking-wider">
                  Instant Chat
                </span>
              </div>
              <div>
                <span className="glass-label mb-1 block">
                  {t('contact.whatsappLabel')}
                </span>
                <span className="text-base sm:text-lg font-bold text-white font-mono group-hover:text-purple-400 transition-colors">
                  +33 7 66 60 13 35
                </span>
              </div>
            </button>

            {/* Secure tags details */}
            <div className="glass-card p-5 border-white/5 bg-white/[0.01] flex items-center gap-3 text-left">
              <ShieldCheck size={28} className="text-cyan-400 shrink-0" />
              <div className="flex flex-col">
                <span className="text-xs font-bold text-white font-mono uppercase tracking-wider">
                  Cryptage de Bout en Bout
                </span>
                <span className="text-[10px] text-foreground-muted">
                  Vos informations restent cryptées et 100% confidentielles.
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Form */}
          <div className="lg:col-span-8">
            <div className="glass-card h-full p-6 sm:p-8 border-cyan-500/10 relative overflow-hidden flex flex-col justify-center">
              
              {!isSubmitted ? (
                // Contact Form
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  {/* Row Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="glass-input-group">
                      <label className="glass-label">{t('contact.namePlaceholder')}</label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="glass-input" 
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Email */}
                    <div className="glass-input-group">
                      <label className="glass-label">{t('contact.emailPlaceholder')}</label>
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="glass-input" 
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="glass-input-group">
                    <label className="glass-label">Project Details</label>
                    <textarea 
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="glass-input resize-none" 
                      placeholder={t('contact.msgPlaceholder')}
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit" 
                    disabled={isLoading}
                    className="cyber-btn cyber-btn-primary py-4 font-bold text-base w-full shadow-lg relative"
                  >
                    {isLoading ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Encrypting...
                      </span>
                    ) : (
                      <>
                        <span>{t('contact.submitButton')}</span>
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              ) : (
                // Success screen
                <div className="text-center py-10 flex flex-col items-center justify-center gap-6 animate-[fadeInLang_0.4s_ease-out]">
                  <div className="relative w-20 h-20 rounded-full bg-cyan-400/10 border-2 border-cyan-400 flex items-center justify-center text-cyan-400 shadow-[0_0_30px_rgba(0,229,255,0.3)] animate-pulse">
                    <CheckCircle2 size={40} />
                  </div>
                  
                  <div className="flex flex-col gap-2 max-w-md">
                    <h3 className="text-2xl font-bold text-white font-display">
                      Transmission Sécurisée
                    </h3>
                    <p className="text-foreground-muted text-sm leading-relaxed">
                      {t('contact.successMsg')}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full justify-center max-w-sm">
                    <button
                      onClick={handleWhatsAppChat}
                      className="cyber-btn cyber-btn-primary flex-1 py-3"
                    >
                      <MessageCircle size={16} />
                      <span>{t('contact.whatsappLabel')}</span>
                    </button>
                    
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="cyber-btn cyber-btn-secondary py-3 text-xs font-semibold"
                    >
                      New Message
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactForm;
