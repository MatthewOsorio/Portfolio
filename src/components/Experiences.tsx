import React from 'react';
import { experiences } from '../data/portfolioData';
import { Briefcase } from 'lucide-react';
import SectionTitle from './SectionTitle';

interface ExperiencesProps {
  darkMode: boolean;
}

const Experiences: React.FC<ExperiencesProps> = ({ darkMode }) => {
  return (
    <section id="experience" className="scroll-mt-16">
      <SectionTitle icon={<Briefcase size={24} />} title="Experience" darkMode={darkMode} />
      
      <div className="space-y-12 mt-8">
        {experiences.map((exp) => (
          <div 
            key={exp.id} 
            className={`relative rounded-lg p-6 transition-all duration-300
                      ${darkMode ? 'bg-zinc-900/60 hover:bg-zinc-900' : 'bg-stone-100 hover:bg-stone-200/80'}`}
          >
            <h3 className="text-xl font-bold">{exp.title}</h3>
            <h4 className={`text-lg ${darkMode ? 'text-stone-300' : 'text-zinc-600'}`}>
              {exp.company}
            </h4>
            <p className={`text-sm font-medium mt-1 ${darkMode ? 'text-stone-400' : 'text-zinc-500'}`}>
              {exp.period}
            </p>
            
            <p className="mt-4 leading-relaxed">{exp.description}</p>
            
            <div className="mt-4 flex flex-wrap gap-2">
              {exp.skills.map((skill, index) => (
                <span 
                  key={index}
                  className={`text-xs px-3 py-1 rounded-full
                            ${darkMode 
                              ? 'bg-zinc-800 text-stone-300 border border-zinc-700' 
                              : 'bg-stone-200 text-zinc-700 border border-stone-300'}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experiences;