import React, { useState, useEffect, useRef } from "react";
import Experiences from "./Experiences";
import Projects from "./Projects";
import Education from "./Education";
import { ArrowUp } from "lucide-react";

interface RightSectionProps {
  darkMode: boolean;
}

const RightSection: React.FC<RightSectionProps> = ({ darkMode }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.innerWidth >= 768
          ? contentRef.current?.scrollTop || 0
          : window.scrollY;
      setShowScrollTop(scrollPosition > 300);
    };

    if (window.innerWidth >= 768) {
      const contentElement = contentRef.current;
      if (contentElement) {
        contentElement.addEventListener("scroll", handleScroll);
        return () => contentElement.removeEventListener("scroll", handleScroll);
      }
    } else {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const scrollToTop = () => {
    if (window.innerWidth >= 768 && contentRef.current) {
      contentRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className={`md:fixed md:right-0 md:top-0 md:h-screen w-full md:w-1/2 md:overflow-hidden 
                    ${
                      darkMode
                        ? "bg-zinc-800 text-stone-200"
                        : "bg-white text-zinc-800"
                    } 
                    transition-colors duration-500`}
    >
      <div
        ref={contentRef}
        className="right-section-content md:h-full md:overflow-y-auto px-8 py-24 md:p-16 custom-scrollbar"
        style={{ scrollBehavior: "smooth" }}
      >
        <div className="space-y-24">
          <div id="experience">
            <Experiences darkMode={darkMode} />
          </div>
          <div id="projects">
            <Projects darkMode={darkMode} />
          </div>
          <div id="education">
            <Education darkMode={darkMode} />
          </div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-3 rounded-full shadow-md z-50
                  transition-all duration-300 transform
                  ${
                    showScrollTop
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10 pointer-events-none"
                  }
                  ${
                    darkMode
                      ? "bg-zinc-700 text-stone-200 hover:bg-zinc-600"
                      : "bg-stone-200 text-zinc-700 hover:bg-stone-300"
                  }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </div>
  );
};

export default RightSection;
