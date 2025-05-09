import React from 'react';
import { personalInfo, socialLinks } from '../data/portfolioData';
import SocialLinks from './SocialLinks';
import { Moon, Sun, Briefcase, FolderOpen, GraduationCap } from 'lucide-react';

interface LeftSectionProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const LeftSection: React.FC<LeftSectionProps> = ({ darkMode, toggleDarkMode }) => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -64;
      if (window.innerWidth >= 768) {
        const rightSection = document.querySelector('.right-section-content');
        if (rightSection) {
          const y = section.getBoundingClientRect().top + rightSection.scrollTop + yOffset;
          rightSection.scrollTo({ top: y, behavior: 'smooth' });
        }
      } else {
        const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  const navigationItems = [
    { name: 'Experience', icon: Briefcase },
    { name: 'Projects', icon: FolderOpen },
    { name: 'Education', icon: GraduationCap },
  ];

  return (
    <div className={`w-full md:w-1/2 md:fixed md:left-0 md:top-0 md:h-screen
                    ${darkMode ? 'bg-zinc-900 text-stone-200' : 'bg-stone-100 text-zinc-800'} 
                    transition-colors duration-500 p-8 md:p-16`}>
      <div className="relative mb-8">
        <button 
          onClick={toggleDarkMode}
          className={`absolute right-0 top-0 p-2 rounded-full 
                    ${darkMode ? 'bg-zinc-800 text-stone-200' : 'bg-stone-200 text-zinc-800'} 
                    transition-colors duration-300 hover:scale-110`}
          aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
      
      <div className="flex flex-col space-y-4 mb-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          {personalInfo.name}
        </h1>
        <h2 className={`text-xl md:text-2xl font-medium ${darkMode ? 'text-stone-400' : 'text-stone-600'}`}>
          {personalInfo.title}
        </h2>
      </div>
      
      <div className={`prose ${darkMode ? 'prose-invert' : ''} max-w-md mb-12`}>
        <p className="text-lg leading-relaxed">{personalInfo.bio}</p>
      </div>

      <nav className="mb-12">
        <ul className="space-y-3">
          {navigationItems.map(({ name, icon: Icon }) => (
            <li key={name}>
              <button
                onClick={() => scrollToSection(name.toLowerCase())}
                className={`w-full group flex items-center space-x-3 p-3 rounded-lg transition-all duration-300
                          ${darkMode 
                            ? 'hover:bg-zinc-800 text-stone-300 hover:text-stone-100' 
                            : 'hover:bg-stone-200 text-zinc-600 hover:text-zinc-900'}`}
              >
                <Icon size={20} className="transition-transform duration-300 group-hover:scale-110" />
                <span className="text-lg font-medium">{name}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="space-y-4">
        <SocialLinks links={socialLinks} darkMode={darkMode} />
        <p className={`text-sm ${darkMode ? 'text-stone-400' : 'text-stone-500'}`}>
          &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default LeftSection;