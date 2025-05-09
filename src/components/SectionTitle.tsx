import React, { ReactNode } from 'react';

interface SectionTitleProps {
  icon: ReactNode;
  title: string;
  darkMode: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ icon, title, darkMode }) => {
  return (
    <div className="flex items-center space-x-2 mb-2">
      <span className={`${darkMode ? 'text-stone-300' : 'text-zinc-600'}`}>
        {icon}
      </span>
      <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
    </div>
  );
};

export default SectionTitle;