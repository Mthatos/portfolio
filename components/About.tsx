import React from 'react';
import { BIO, CAREER_OBJECTIVE, EDUCATION, EXPERIENCE, REFERENCES } from '../constants';
import { User, Target, Zap, Briefcase, GraduationCap, Users } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">About Me</h2>
        <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full"></div>
      </div>
      
      <div className="space-y-8">
        <div className="bg-slate-900/60 backdrop-blur-md rounded-2xl p-8 border border-slate-800 shadow-2xl">
            <div className="space-y-10">
                <div className="flex gap-6 items-start">
                    <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400 mt-1 shrink-0">
                        <User size={24} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white mb-3">Professional Biography</h3>
                        <p className="text-slate-300 leading-relaxed whitespace-pre-line text-base">
                            {BIO}
                        </p>
                    </div>
                </div>

                <div className="flex gap-6 items-start border-t border-slate-800 pt-10">
                    <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400 mt-1 shrink-0">
                        <Target size={24} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white mb-3">Career Objectives</h3>
                        <p className="text-slate-300 leading-relaxed text-base">
                            {CAREER_OBJECTIVE}
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* Experience & Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-900/60 backdrop-blur-md rounded-2xl p-8 border border-slate-800 shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                    <Briefcase className="text-emerald-400" size={24} />
                    <h3 className="text-xl font-bold text-white">Experience</h3>
                </div>
                <div className="space-y-6">
                    {EXPERIENCE.map((exp, index) => (
                        <div key={index} className="relative pl-6 border-l-2 border-slate-700 last:border-0">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-900 border-2 border-emerald-500"></div>
                            <h4 className="text-white font-semibold text-lg">{exp.role}</h4>
                            <p className="text-emerald-400 text-sm mb-2">{exp.company} | {exp.period}</p>
                            <p className="text-slate-400 text-sm">{exp.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="space-y-8">
                <div className="bg-slate-900/60 backdrop-blur-md rounded-2xl p-8 border border-slate-800 shadow-2xl">
                    <div className="flex items-center gap-3 mb-6">
                        <GraduationCap className="text-blue-400" size={24} />
                        <h3 className="text-xl font-bold text-white">Education</h3>
                    </div>
                    <div className="space-y-6">
                        {EDUCATION.map((edu, index) => (
                            <div key={index} className="border-b border-slate-800 last:border-0 pb-4 last:pb-0">
                                <h4 className="text-white font-semibold text-lg">{edu.degree}</h4>
                                <p className="text-slate-300">{edu.institution}</p>
                                <p className="text-slate-500 text-sm">{edu.year}</p>
                            </div>
                        ))}
                    </div>
                </div>

                 <div className="bg-slate-900/60 backdrop-blur-md rounded-2xl p-8 border border-slate-800 shadow-2xl">
                    <div className="flex items-center gap-3 mb-6">
                        <Users className="text-amber-400" size={24} />
                        <h3 className="text-xl font-bold text-white">References</h3>
                    </div>
                    <div className="space-y-4">
                        {REFERENCES.map((ref, index) => (
                            <div key={index}>
                                <h4 className="text-white font-medium">{ref.name}</h4>
                                <p className="text-slate-400 text-sm">{ref.role} at {ref.company}</p>
                                <a href={`mailto:${ref.email}`} className="text-emerald-500 text-sm hover:underline">{ref.email}</a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};