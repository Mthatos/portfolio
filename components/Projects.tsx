import React from 'react';
import { ExternalLink, Code, Cpu, Github } from 'lucide-react';
import { PROJECTS } from '../constants';

export const Projects: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <Cpu className="text-emerald-400 hidden md:block" />
            <span className="font-mono text-emerald-400 mr-2">04.</span>
            Featured Projects
        </h2>
        <div className="h-0.5 w-24 bg-emerald-500 mx-auto rounded-full mb-4 shadow-[0_0_10px_#10b981]"></div>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          Deploying intelligence into production.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <div 
            key={project.id} 
            className="group block bg-slate-900/80 backdrop-blur-md rounded-xl overflow-hidden border border-slate-800 transition-all duration-300 hover:border-emerald-500/80 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] hover:-translate-y-1 h-full flex flex-col relative"
          >
            {/* Corner Accents */}
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-emerald-500/0 group-hover:border-emerald-500/100 transition-all duration-300 rounded-tr-xl"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-emerald-500/0 group-hover:border-emerald-500/100 transition-all duration-300 rounded-bl-xl"></div>

            <div className="relative h-48 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-slate-900/50 group-hover:bg-slate-900/30 transition-all duration-300"></div>
              {/* Matrix overlay effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,#10b981_3px)] transition-opacity duration-300 pointer-events-none"></div>
            </div>
            
            <div className="p-6 flex-grow flex flex-col relative z-10">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors font-sans">
                  {project.title}
                </h3>
              </div>
              
              <p className="text-slate-400 mb-4 flex-grow text-sm leading-relaxed border-l border-slate-800 pl-3 group-hover:border-emerald-500/50 transition-colors">
                {project.description}
              </p>
              
              <div className="mb-4">
                 <ul className="space-y-1">
                    {project.features.slice(0, 2).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-xs text-slate-500">
                            <Code size={12} className="mr-2 text-emerald-600" />
                            {feature}
                        </li>
                    ))}
                 </ul>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 text-xs font-medium rounded-md bg-slate-800/80 text-emerald-400/80 border border-emerald-900/30 group-hover:border-emerald-500/30 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 pt-4 border-t border-slate-800/50 mt-auto">
                 <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-emerald-600/20 text-emerald-400 rounded-lg text-sm font-medium hover:bg-emerald-600 hover:text-white transition-all border border-emerald-500/30"
                 >
                    <ExternalLink size={16} />
                    Live Demo
                 </a>
                 {project.githubLink && (
                    <a 
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center p-2 bg-slate-800 text-slate-300 rounded-lg hover:bg-slate-700 hover:text-white transition-all border border-slate-700"
                        title="View Code"
                    >
                        <Github size={18} />
                    </a>
                 )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};