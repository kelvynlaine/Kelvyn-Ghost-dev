import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Terminal, Shield, RefreshCw } from 'lucide-react';

const GhostTerminal = () => {
  const { t, language } = useLanguage();
  const [inputVal, setInputVal] = useState('');
  const [terminalLogs, setTerminalLogs] = useState([]);
  const [isTypingWelcome, setIsTypingWelcome] = useState(true);
  const scrollRef = useRef(null);

  const welcomeLines = t('terminal.welcome') || [];
  const commandsList = t('terminal.commands') || {};
  const commandResponses = t('terminal.responses') || {};
  const promptSymbol = t('terminal.prompt') || "visitor@ghostdev:~$";

  // Typing effect for the welcome logs
  useEffect(() => {
    setTerminalLogs([]);
    setIsTypingWelcome(true);
    let currentLine = 0;
    const typingInterval = setInterval(() => {
      if (currentLine < welcomeLines.length) {
        setTerminalLogs((prev) => [...prev, { text: welcomeLines[currentLine], type: 'welcome' }]);
        currentLine++;
      } else {
        clearInterval(typingInterval);
        setIsTypingWelcome(false);
      }
    }, 120);

    return () => clearInterval(typingInterval);
  }, [language]);

  // Keep terminal logs scrolled to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [terminalLogs]);

  const executeCommand = (cmd) => {
    const cleanCmd = cmd.trim().toLowerCase();
    
    // Add command echo to logs
    const newLogs = [...terminalLogs, { text: `${promptSymbol} ${cmd}`, type: 'input' }];
    
    if (cleanCmd === 'clear') {
      setTerminalLogs([]);
      return;
    }

    if (cleanCmd === 'help') {
      const helpOutputs = [
        "COMMANDES DISPONIBLES:",
        ...Object.entries(commandsList).map(([name, desc]) => `  ${name.padEnd(10)} - ${desc}`)
      ];
      setTerminalLogs([...newLogs, ...helpOutputs.map(text => ({ text, type: 'output' }))]);
    } else if (cleanCmd === 'about' || cleanCmd === 'skills' || cleanCmd === 'projects') {
      const response = commandResponses[cleanCmd] || [];
      setTerminalLogs([...newLogs, ...response.map(text => ({ text, type: 'output' }))]);
    } else if (cleanCmd !== '') {
      const errorMsg = language === 'FR' 
        ? `Commande inconnue: "${cmd}". Tapez "help" pour obtenir de l'aide.`
        : language === 'ES'
        ? `Comando no reconocido: "${cmd}". Escriba "help" para ayuda.`
        : `Command not found: "${cmd}". Type "help" for assistance.`;
      setTerminalLogs([...newLogs, { text: errorMsg, type: 'error' }]);
    } else {
      setTerminalLogs(newLogs);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isTypingWelcome) return;
    executeCommand(inputVal);
    setInputVal('');
  };

  // Helper for quick click suggestions (perfect for mobile UX!)
  const handleQuickCommandClick = (cmd) => {
    if (isTypingWelcome) return;
    executeCommand(cmd);
  };

  return (
    <section id="terminal-section" className="section-padding relative overflow-hidden bg-black/40">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="cyber-badge mb-4 cyber-badge-secondary">
            <Terminal size={14} className="text-purple-400" />
            <span>Interactive Shell</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 text-gradient-purple">
            {t('terminal.title')}
          </h2>
        </div>

        {/* Terminal Window Wrapper */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-0 rounded-2xl border-purple-500/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative overflow-hidden">
            
            {/* Terminal Window Header Bar */}
            <div className="bg-white/[0.03] border-b border-white/5 py-3 px-6 flex items-center justify-between">
              {/* Fake Window Controls */}
              <div className="flex items-center gap-2">
                <div className="w-3.5 h-3.5 rounded-full bg-rose-500/80 border border-rose-500/30"></div>
                <div className="w-3.5 h-3.5 rounded-full bg-amber-500/80 border border-amber-500/30"></div>
                <div className="w-3.5 h-3.5 rounded-full bg-emerald-500/80 border border-emerald-500/30"></div>
              </div>
              
              {/* Header Title */}
              <div className="flex items-center gap-2 text-xs font-mono text-foreground-muted">
                <Shield size={12} className="text-purple-400 animate-pulse" />
                <span>visitor@ghostdev: ~ (AES-256)</span>
              </div>
              
              {/* Spacer for layout */}
              <div className="w-14"></div>
            </div>

            {/* Terminal Window Screen Content */}
            <div 
              ref={scrollRef}
              className="bg-black/60 font-mono text-sm p-6 min-h-[350px] max-h-[450px] overflow-y-auto flex flex-col gap-2 scrollbar-thin scrollbar-thumb-purple-900 terminal-screen"
            >
              {terminalLogs.map((log, idx) => (
                <div 
                  key={idx} 
                  className={`leading-relaxed whitespace-pre-wrap ${
                    log.type === 'welcome' ? 'text-purple-400/90 font-semibold' :
                    log.type === 'input' ? 'text-cyan-400' :
                    log.type === 'error' ? 'text-rose-400 font-bold' : 'text-slate-300'
                  }`}
                >
                  {log.text}
                </div>
              ))}

              {/* Real time blinking typing indicator */}
              {!isTypingWelcome && (
                <form onSubmit={handleSubmit} className="flex items-center gap-2 mt-2">
                  <span className="text-cyan-400 shrink-0 select-none">{promptSymbol}</span>
                  <input
                    type="text"
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    className="bg-transparent border-0 outline-0 p-0 m-0 text-slate-200 focus:ring-0 focus:outline-none flex-1 font-mono text-sm"
                    autoFocus
                    placeholder="..."
                    disabled={isTypingWelcome}
                  />
                </form>
              )}
            </div>

            {/* Quick Command Suggestion Bar (Crucial Mobile/Desktop UX Upgrade) */}
            <div className="bg-white/[0.02] border-t border-white/5 py-4 px-6 flex flex-wrap items-center gap-3">
              <span className="text-xs text-foreground-muted uppercase font-bold font-mono">
                Suggestions:
              </span>
              {['help', 'about', 'skills', 'projects', 'clear'].map((cmd) => (
                <button
                  key={cmd}
                  onClick={() => handleQuickCommandClick(cmd)}
                  className="terminal-btn focus:outline-none"
                  disabled={isTypingWelcome}
                >
                  {cmd}
                </button>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default GhostTerminal;
