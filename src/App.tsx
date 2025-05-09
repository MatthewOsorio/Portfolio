import React, { useState, useEffect } from 'react';
import LeftSection from './components/LeftSection';
import RightSection from './components/RightSection';

function App() {
  const getInitialDarkMode = () => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      return savedMode === 'true';
    }
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  };

  const [darkMode, setDarkMode] = useState(getInitialDarkMode);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode.toString());
    document.title = "Matthew Osorio | Software Engineer";
    
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen md:h-screen md:overflow-hidden">
      <div className="block md:hidden">
        <LeftSection darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <RightSection darkMode={darkMode} />
      </div>
      
      <div className="hidden md:block h-full">
        <LeftSection darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <RightSection darkMode={darkMode} />
      </div>
    </div>
  );
}

export default App;
