import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Percent, Users, Coins, ArrowRight, Zap, TrendingUp } from 'lucide-react';

const CroCalculator = () => {
  const { t } = useLanguage();
  const [traffic, setTraffic] = useState(25000);
  const [currentConv, setCurrentConv] = useState(1.8);
  const [ghostConv, setGhostConv] = useState(5.4);
  const [aov, setAov] = useState(65);

  const [currentRevenue, setCurrentRevenue] = useState(0);
  const [ghostRevenue, setGhostRevenue] = useState(0);
  const [revenueGain, setRevenueGain] = useState(0);
  const [conversionLift, setConversionLift] = useState(0);

  useEffect(() => {
    const curRev = Math.round(traffic * (currentConv / 100) * aov);
    const ghRev = Math.round(traffic * (ghostConv / 100) * aov);
    const gain = ghRev - curRev;
    const lift = Math.round(((ghostConv - currentConv) / currentConv) * 100);

    setCurrentRevenue(curRev);
    setGhostRevenue(ghRev);
    setRevenueGain(gain);
    setConversionLift(lift);
  }, [traffic, currentConv, ghostConv, aov]);

  // Keep projected conversion rate higher than current conversion rate
  const handleCurrentConvChange = (val) => {
    const numericVal = parseFloat(val);
    setCurrentConv(numericVal);
    if (numericVal >= ghostConv) {
      setGhostConv(parseFloat((numericVal * 2.5).toFixed(1)));
    }
  };

  const handleGhostConvChange = (val) => {
    const numericVal = parseFloat(val);
    if (numericVal > currentConv) {
      setGhostConv(numericVal);
    }
  };

  return (
    <section id="calculator" className="section-padding relative overflow-hidden">
      {/* Background neon elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-full filter blur-[150px] pointer-events-none"></div>

      <div className="container relative z-10">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="cyber-badge mb-4">
            <Zap size={14} className="text-cyan-400" />
            <span>ROI & Conversion</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 text-gradient">
            {t('calculator.title')}
          </h2>
          <p className="text-foreground-muted text-base sm:text-lg">
            {t('calculator.subtitle')}
          </p>
        </div>

        {/* Calculator Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Sliders Input Panel */}
          <div className="lg:col-span-7 glass-card p-6 sm:p-8 flex flex-col gap-8 justify-between border-cyan-500/10">
            
            {/* Slider 1: Traffic */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <label className="glass-label flex items-center gap-2">
                  <Users size={16} className="text-cyan-400" />
                  {t('calculator.trafficLabel')}
                </label>
                <span className="text-xl font-bold font-mono text-cyan-400">
                  {traffic.toLocaleString()}
                </span>
              </div>
              <input 
                type="range" 
                min="1000" 
                max="200000" 
                step="1000"
                value={traffic} 
                onChange={(e) => setTraffic(parseInt(e.target.value))}
                className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                style={{
                  background: `linear-gradient(to right, var(--primary) 0%, var(--primary) ${((traffic - 1000) / 199000) * 100}%, rgba(255,255,255,0.1) ${((traffic - 1000) / 199000) * 100}%, rgba(255,255,255,0.1) 100%)`
                }}
              />
              <div className="flex justify-between text-xs text-foreground-muted font-mono">
                <span>1K</span>
                <span>100K</span>
                <span>200K</span>
              </div>
            </div>

            {/* Slider 2: Current Conv Rate */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <label className="glass-label flex items-center gap-2">
                  <Percent size={16} className="text-white/80" />
                  {t('calculator.convLabel')}
                </label>
                <span className="text-xl font-bold font-mono text-white/90">
                  {currentConv}%
                </span>
              </div>
              <input 
                type="range" 
                min="0.2" 
                max="10" 
                step="0.1"
                value={currentConv} 
                onChange={(e) => handleCurrentConvChange(e.target.value)}
                className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-white"
                style={{
                  background: `linear-gradient(to right, #ffffff 0%, #ffffff ${((currentConv - 0.2) / 9.8) * 100}%, rgba(255,255,255,0.1) ${((currentConv - 0.2) / 9.8) * 100}%, rgba(255,255,255,0.1) 100%)`
                }}
              />
              <div className="flex justify-between text-xs text-foreground-muted font-mono">
                <span>0.2%</span>
                <span>5%</span>
                <span>10%</span>
              </div>
            </div>

            {/* Slider 3: Projected Conv Rate */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <label className="glass-label flex items-center gap-2">
                  <TrendingUp size={16} className="text-purple-400" />
                  {t('calculator.ghostConvLabel')}
                </label>
                <span className="text-xl font-bold font-mono text-purple-400">
                  {ghostConv}%
                </span>
              </div>
              <input 
                type="range" 
                min={(currentConv + 0.1).toFixed(1)} 
                max="15" 
                step="0.1"
                value={ghostConv} 
                onChange={(e) => handleGhostConvChange(e.target.value)}
                className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-purple-500"
                style={{
                  background: `linear-gradient(to right, var(--secondary) 0%, var(--secondary) ${((ghostConv - (currentConv + 0.1)) / (15 - (currentConv + 0.1))) * 100}%, rgba(255,255,255,0.1) ${((ghostConv - (currentConv + 0.1)) / (15 - (currentConv + 0.1))) * 100}%, rgba(255,255,255,0.1) 100%)`
                }}
              />
              <div className="flex justify-between text-xs text-foreground-muted font-mono">
                <span>{(currentConv + 0.1).toFixed(1)}%</span>
                <span>8%</span>
                <span>15%</span>
              </div>
            </div>

            {/* Slider 4: AOV */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <label className="glass-label flex items-center gap-2">
                  <Coins size={16} className="text-teal-400" />
                  {t('calculator.aovLabel')}
                </label>
                <span className="text-xl font-bold font-mono text-teal-400">
                  {aov} €
                </span>
              </div>
              <input 
                type="range" 
                min="5" 
                max="500" 
                step="5"
                value={aov} 
                onChange={(e) => setAov(parseInt(e.target.value))}
                className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-teal-400"
                style={{
                  background: `linear-gradient(to right, #2dd4bf 0%, #2dd4bf ${((aov - 5) / 495) * 100}%, rgba(255,255,255,0.1) ${((aov - 5) / 495) * 100}%, rgba(255,255,255,0.1) 100%)`
                }}
              />
              <div className="flex justify-between text-xs text-foreground-muted font-mono">
                <span>5 €</span>
                <span>250 €</span>
                <span>500 €</span>
              </div>
            </div>

          </div>

          {/* Results Output Panel */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Top metrics summary */}
            <div className="glass-card flex-1 flex flex-col justify-between border-purple-500/10 shadow-[0_0_50px_rgba(168,85,247,0.05)] relative overflow-hidden">
              {/* Dynamic light stream */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 rounded-full filter blur-xl"></div>
              
              <div>
                <h3 className="text-lg font-mono tracking-wider text-purple-400 mb-6 uppercase flex items-center gap-2">
                  <TrendingUp size={16} />
                  {t('calculator.resultsTitle')}
                </h3>

                <div className="flex flex-col gap-6">
                  {/* Current Rev */}
                  <div className="flex flex-col">
                    <span className="text-xs text-foreground-muted uppercase tracking-wider font-semibold">
                      {t('calculator.revenueCurrent')}
                    </span>
                    <span className="text-2xl font-bold font-mono text-white/70">
                      {currentRevenue.toLocaleString()} €
                    </span>
                  </div>

                  {/* Projected Rev */}
                  <div className="flex flex-col">
                    <span className="text-xs text-foreground-muted uppercase tracking-wider font-semibold">
                      {t('calculator.revenueGhost')}
                    </span>
                    <span className="text-4xl sm:text-5xl font-black font-mono text-gradient">
                      {ghostRevenue.toLocaleString()} €
                    </span>
                  </div>
                </div>
              </div>

              {/* Total Gain Indicator Card */}
              <div className="mt-8 pt-6 border-t border-white/5 flex flex-col gap-1">
                <span className="text-xs text-cyan-400 font-mono font-semibold uppercase tracking-wider">
                  {t('calculator.revenueGain')}
                </span>
                <span className="text-3xl font-black font-mono text-cyan-400 drop-shadow-[0_0_10px_rgba(0,229,255,0.3)]">
                  + {revenueGain.toLocaleString()} € <span className="text-sm font-semibold text-foreground-muted">/ mois</span>
                </span>
              </div>
            </div>

            {/* Micro card for conversion rate lift */}
            <div className="glass-card py-5 px-6 border-cyan-500/10 flex items-center justify-between shadow-[0_0_30px_rgba(0,229,255,0.03)]">
              <div className="flex flex-col">
                <span className="text-xs text-foreground-muted uppercase font-bold tracking-wider">
                  {t('calculator.conversionRateBoost')}
                </span>
                <span className="text-sm text-foreground-muted mt-0.5">
                  {t('calculator.roiText')}
                </span>
              </div>
              <span className="text-2xl sm:text-3xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                + {conversionLift}%
              </span>
            </div>

            {/* Direct CTA */}
            <a
              href="#contact"
              className="cyber-btn cyber-btn-primary w-full py-4 text-center font-bold text-base shadow-[0_4px_25px_rgba(0,229,255,0.2)]"
            >
              <span>{t('calculator.actionCta')}</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CroCalculator;
