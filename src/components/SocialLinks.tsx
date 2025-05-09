import React from 'react';
import { SocialLink } from '../types';
import * as LucideIcons from 'lucide-react';

interface SocialLinksProps {
  links: SocialLink[];
  darkMode: boolean;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ links, darkMode }) => {
  return (
    <div className="flex space-x-4">
      {links.map((link, index) => {
        // Dynamically get the icon from lucide-react
        const IconComponent = LucideIcons[link.icon as keyof typeof LucideIcons];
        
        return (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 rounded-full 
                      ${darkMode 
                        ? 'bg-zinc-800 text-stone-300 hover:bg-zinc-700' 
                        : 'bg-stone-200 text-zinc-700 hover:bg-stone-300'} 
                      transition-all duration-300 hover:scale-110`}
            aria-label={`Visit ${link.platform}`}
          >
            {IconComponent && <IconComponent size={20} />}
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;