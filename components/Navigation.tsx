import React from 'react';
import { LayoutGrid, Sparkles, Github } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ activeSection, setActiveSection }) => {
  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="flex items-center gap-1 p-1.5 rounded-full border border-white/[0.08] bg-[#171717]/80 backdrop-blur-xl shadow-2xl">
        
        <div className="flex items-center gap-2 px-4 pr-6 border-r border-white/[0.08]">
          <div className="h-6 w-6 rounded-full bg-white flex items-center justify-center">
            <div className="h-3 w-3 rounded-full bg-black" />
          </div>
          <span className="font-semibold text-sm tracking-tight text-white">Alher Tech</span>
        </div>

        <button
          onClick={() => setActiveSection('components')}
          className={`
            flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all
            ${activeSection === 'components' 
              ? 'bg-white text-black shadow-sm' 
              : 'text-neutral-400 hover:text-white hover:bg-white/[0.05]'}
          `}
        >
          <LayoutGrid className="h-4 w-4" />
          <span className="hidden sm:inline">Componentes</span>
        </button>

        <button
          onClick={() => setActiveSection('generator')}
          className={`
            flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all
            ${activeSection === 'generator' 
              ? 'bg-white text-black shadow-sm' 
              : 'text-neutral-400 hover:text-white hover:bg-white/[0.05]'}
          `}
        >
          <Sparkles className="h-4 w-4" />
          <span className="hidden sm:inline">Generador AI</span>
        </button>

        <div className="pl-2">
           <a href="#" className="flex items-center justify-center h-9 w-9 rounded-full bg-white/[0.05] text-white hover:bg-white/10 transition-colors border border-white/[0.05]">
             <Github className="h-4 w-4" />
           </a>
        </div>
      </nav>
    </div>
  );
};