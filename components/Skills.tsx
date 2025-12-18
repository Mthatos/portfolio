import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell
} from 'recharts';
import { SKILLS } from '../constants';

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-900 border border-slate-700 p-3 rounded-lg shadow-xl">
        <p className="text-white font-semibold mb-1">{label}</p>
        <p className="text-emerald-400 font-medium">Proficiency: {payload[0].value}%</p>
      </div>
    );
  }
  return null;
};

export const Skills: React.FC = () => {
  const sortedSkills = [...SKILLS].sort((a, b) => b.proficiency - a.proficiency);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Expertise</h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-8">
             My technical toolkit spans the full spectrum of AI and software engineering. 
             From developing sophisticated AI solutions to building responsive 
             React frontends, I offer a comprehensive skill set for modern tech challenges.
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-900/60 p-5 rounded-xl border border-slate-800 hover:border-emerald-500/30 transition-colors">
                <h3 className="text-emerald-400 font-bold mb-2 text-sm uppercase tracking-wider">Languages</h3>
                <p className="text-slate-300 text-sm">Python, TypeScript, JavaScript, SQL</p>
            </div>
            <div className="bg-slate-900/60 p-5 rounded-xl border border-slate-800 hover:border-emerald-500/30 transition-colors">
                <h3 className="text-emerald-400 font-bold mb-2 text-sm uppercase tracking-wider">AI & Data</h3>
                <p className="text-slate-300 text-sm">Pandas, Gemini API, Scikit-learn</p>
            </div>
            <div className="bg-slate-900/60 p-5 rounded-xl border border-slate-800 hover:border-emerald-500/30 transition-colors">
                <h3 className="text-emerald-400 font-bold mb-2 text-sm uppercase tracking-wider">Frontend</h3>
                <p className="text-slate-300 text-sm">React, Next.js, Tailwind CSS</p>
            </div>
            <div className="bg-slate-900/60 p-5 rounded-xl border border-slate-800 hover:border-emerald-500/30 transition-colors">
                <h3 className="text-emerald-400 font-bold mb-2 text-sm uppercase tracking-wider">Tools</h3>
                <p className="text-slate-300 text-sm">Git, Voiceflow, Vercel</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={sortedSkills}
              layout="vertical"
              margin={{ top: 5, right: 30, left: 60, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" horizontal={false} />
              <XAxis type="number" domain={[0, 100]} hide />
              <YAxis 
                dataKey="name" 
                type="category" 
                width={140} 
                tick={{ fill: '#cbd5e1', fontSize: 13, fontFamily: 'Inter', fontWeight: 500 }}
                interval={0}
              />
              <Tooltip content={<CustomTooltip />} cursor={{fill: 'rgba(255, 255, 255, 0.05)'}} />
              <Bar dataKey="proficiency" radius={[0, 4, 4, 0]} barSize={24}>
                {sortedSkills.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#10b981' : '#34d399'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};