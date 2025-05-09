import React from 'react';
import { projects } from '../data/portfolioData';
import { FolderOpen, ExternalLink, Github } from 'lucide-react';
import SectionTitle from './SectionTitle';

interface ProjectsProps {
  darkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  return (
    <section id="projects" className="scroll-mt-16">
      <SectionTitle icon={<FolderOpen size={24} />} title="Projects" darkMode={darkMode} />
      
      <div className="grid grid-cols-1 gap-8 mt-8">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className={`rounded-lg overflow-hidden transition-all duration-300
                        ${darkMode ? 'bg-zinc-900/60 hover:bg-zinc-900' : 'bg-stone-100 hover:bg-stone-200/80'}`}
          >
            {project.imageUrl && (
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            )}
            
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <div className="flex space-x-3">
                  {project.github && (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`transition-colors duration-300
                                ${darkMode ? 'text-stone-400 hover:text-stone-200' : 'text-zinc-600 hover:text-zinc-900'}`}
                      aria-label={`GitHub repository for ${project.title}`}
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.link && (
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`transition-colors duration-300
                                ${darkMode ? 'text-stone-400 hover:text-stone-200' : 'text-zinc-600 hover:text-zinc-900'}`}
                      aria-label={`Live demo for ${project.title}`}
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
              
              <p className="leading-relaxed mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className={`text-xs px-3 py-1 rounded-full
                              ${darkMode 
                                ? 'bg-zinc-800 text-stone-300 border border-zinc-700' 
                                : 'bg-stone-200 text-zinc-700 border border-stone-300'}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;