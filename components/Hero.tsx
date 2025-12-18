import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Download, ChevronDown, FileText, Layout, Terminal } from 'lucide-react';
import { MY_NAME, MY_ROLE } from '../constants';
import { MODERN_CV, CLASSIC_CV, TECH_CV } from '../cvHtml';

interface HeroProps {
  setActiveSection: (section: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ setActiveSection }) => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = MY_NAME;
      const nextText = isDeleting 
        ? fullText.substring(0, displayText.length - 1) 
        : fullText.substring(0, displayText.length + 1);

      setDisplayText(nextText);

      if (!isDeleting && nextText === fullText) {
        setTypingSpeed(2500);
        setIsDeleting(true);
      } else if (isDeleting && nextText === '') {
        setIsDeleting(false);
        setTypingSpeed(500);
      } else {
        setTypingSpeed(isDeleting ? 75 : 150);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, typingSpeed]);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  const handleDownload = (html: string, fileName: string) => {
    try {
        const blob = new Blob([html], { type: 'text/html' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
        setShowDropdown(false);
    } catch (err) {
        console.error("Failed to download CV", err);
    }
  };

  const cvOptions = [
    { 
        name: 'Modern Professional', 
        icon: <Layout size={16} />, 
        html: MODERN_CV, 
        file: 'Thato_Lesudi_Modern_CV.html',
        desc: 'Clean, emerald-themed design'
    },
    { 
        name: 'Classic Minimalist', 
        icon: <FileText size={16} />, 
        html: CLASSIC_CV, 
        file: 'Thato_Lesudi_Classic_CV.html',
        desc: 'Standard academic layout'
    },
    { 
        name: 'Technical Focus', 
        icon: <Terminal size={16} />, 
        html: TECH_CV, 
        file: 'Thato_Lesudi_Tech_CV.html',
        desc: 'Developer-oriented terminal style'
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-screen py-20 relative z-10">
      <div className="w-full">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            
            {/* Image Section */}
            <div className="relative shrink-0 order-1 md:order-2">
                <div className="w-64 md:w-80 aspect-[3/4] relative group">
                    <div className="absolute inset-0 bg-emerald-500/20 rounded-2xl transform translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2 border border-emerald-500/30"></div>
                    <div className="relative w-full h-full rounded-2xl overflow-hidden border border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.3)] bg-slate-900">
                        <img 
                            src="https://raw.githubusercontent.com/Mthatos/portfolio/main/Hero.jpg" 
                            onError={(e) => {
                                e.currentTarget.src = 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&q=80&w=800'; 
                                e.currentTarget.onerror = null;
                            }}
                            alt={MY_NAME} 
                            className="w-full h-full object-cover object-top transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-[url('https://media.giphy.com/media/26tn33ai01Uf6zE9a/giphy.gif')] opacity-[0.03] pointer-events-none mix-blend-overlay"></div>
                    </div>
                </div>
            </div>

            {/* Text Content */}
            <div className="flex-1 text-center md:text-left space-y-8 order-2 md:order-1">
                <div className="space-y-4">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-950/50 border border-emerald-500/50 text-emerald-400 text-xs font-semibold tracking-wide uppercase shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 mr-2 animate-pulse shadow-[0_0_5px_#34d399]"></span>
                        System Online // Available for hire
                    </div>
                    
                    <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight font-sans min-h-[120px] md:min-h-[160px]">
                        Hi, I'm <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300 font-mono">
                          {displayText}
                          <span className="animate-pulse text-emerald-400 border-r-4 border-emerald-400 ml-1"></span>
                        </span>
                    </h1>
                    
                    <h2 className="text-2xl md:text-3xl text-emerald-500/80 font-medium font-mono">
                        &lt;{MY_ROLE} /&gt;
                    </h2>
                </div>
                
                <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto md:mx-0 font-light border-l-2 border-emerald-500/30 pl-4">
                    Aspiring Software developer proficient in Java, Python, and SQL. Specializing in building scalable intelligent systems.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
                    <button 
                        onClick={() => handleScroll('projects')}
                        className="px-8 py-3 bg-emerald-600/90 text-white font-semibold rounded-lg hover:bg-emerald-500 transition-all shadow-[0_0_20px_rgba(16,185,129,0.4)] flex items-center justify-center gap-2 group text-base border border-emerald-400/50 h-[52px]"
                    >
                        View Projects
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    
                    <div className="relative" ref={dropdownRef}>
                        <button 
                            onClick={() => setShowDropdown(!showDropdown)}
                            className={`px-6 py-3 bg-slate-900/50 text-emerald-400 font-semibold rounded-lg border border-emerald-500/30 hover:bg-emerald-500/10 hover:border-emerald-500/60 transition-all flex items-center justify-center gap-2 text-base backdrop-blur-sm h-[52px] ${showDropdown ? 'border-emerald-500 bg-emerald-500/10 shadow-[0_0_15px_rgba(16,185,129,0.2)]' : ''}`}
                        >
                            <Download size={18} />
                            Download CV
                            <ChevronDown size={18} className={`transition-transform duration-300 ${showDropdown ? 'rotate-180' : ''}`} />
                        </button>

                        {showDropdown && (
                            <div className="absolute bottom-full mb-2 left-0 w-64 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl overflow-hidden z-50 animate-in fade-in slide-in-from-bottom-2">
                                <div className="p-3 bg-slate-800/50 border-b border-slate-700 text-xs font-bold text-slate-500 uppercase tracking-widest">
                                    Select Template
                                </div>
                                <div className="p-1">
                                    {cvOptions.map((opt, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => handleDownload(opt.html, opt.file)}
                                            className="w-full text-left p-3 hover:bg-emerald-500/10 rounded-lg group transition-colors flex flex-col gap-0.5"
                                        >
                                            <div className="flex items-center gap-3 text-white font-medium group-hover:text-emerald-400 transition-colors">
                                                {opt.icon}
                                                {opt.name}
                                            </div>
                                            <span className="text-[10px] text-slate-500 ml-7">{opt.desc}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};