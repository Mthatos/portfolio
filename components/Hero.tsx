import React, { useState, useEffect } from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { MY_NAME, MY_ROLE } from '../constants';

interface HeroProps {
  setActiveSection: (section: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ setActiveSection }) => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

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

  const handleDownloadCV = () => {
    // Direct link to the raw PDF version of the CV on GitHub
    const pdfUrl = 'https://github.com/Mthatos/portfolio/raw/f768ca3e901011fcf313f6189569a5e41e194780/Thato%20Lesudi%20CV.pdf';
    
    // Programmatically create an anchor element to trigger the download
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.target = '_blank'; // Opens in new tab as fallback
    link.download = 'Thato_Lesudi_CV.pdf'; // Suggests filename to the browser
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
                    
                    <button 
                        onClick={handleDownloadCV}
                        className="px-8 py-3 bg-slate-900/50 text-emerald-400 font-semibold rounded-lg border border-emerald-500/30 hover:bg-emerald-500/10 hover:border-emerald-500/60 transition-all flex items-center justify-center gap-2 text-base backdrop-blur-sm h-[52px]"
                    >
                        <Download size={18} />
                        Download CV
                    </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};