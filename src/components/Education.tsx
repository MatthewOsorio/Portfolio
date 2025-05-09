import React from 'react';
import { education } from '../data/portfolioData';
import { GraduationCap } from 'lucide-react';
import SectionTitle from './SectionTitle';

interface EducationProps {
  darkMode: boolean;
}

const Education: React.FC<EducationProps> = ({ darkMode }) => {
  return (
    <section id="education" className="scroll-mt-16">
      <SectionTitle icon={<GraduationCap size={24} />} title="Education" darkMode={darkMode} />
      
      <div className="space-y-12 mt-8">
        {education.map((edu) => (
          <div 
            key={edu.id} 
            className={`rounded-lg p-6 transition-all duration-300
                      ${darkMode ? 'bg-zinc-900/60 hover:bg-zinc-900' : 'bg-stone-100 hover:bg-stone-200/80'}`}
          >
            <h3 className="text-xl font-bold">{edu.degree}</h3>
            <h4 className={`text-lg ${darkMode ? 'text-stone-300' : 'text-zinc-600'}`}>
              {edu.institution}
            </h4>
            <p className={`text-sm font-medium mt-1 ${darkMode ? 'text-stone-400' : 'text-zinc-500'}`}>
              {edu.period}
            </p>
            
            <p className="mt-4 leading-relaxed">{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;