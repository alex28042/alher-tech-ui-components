import React from 'react';
import { LayoutGrid, Sparkles, Github, Home, LogOut, Search, X } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  onLogout?: () => void;
  searchTerm?: string;
  onSearchChange?: (term: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ 
  activeSection, 
  setActiveSection, 
  onLogout,
  searchTerm = '',
  onSearchChange
}) => {
  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav className="pointer-events-auto flex items-center gap-1 p-1.5 rounded-full border border-white/[0.08] bg-[#171717]/80 backdrop-blur-xl shadow-2xl transition-all duration-300">
        
        <button
          onClick={() => setActiveSection('landing')}
          className={`
            flex items-center gap-2 px-4 pr-6 border-r border-white/[0.08] transition-opacity hover:opacity-80
          `}
        >
          <div className="h-6 w-6 rounded-full bg-white flex items-center justify-center">
            <div className="h-3 w-3 rounded-full bg-black" />
          </div>
          <span className="font-semibold text-sm tracking-tight text-white hidden sm:block">Alher Tech</span>
        </button>

        <button
          onClick={() => setActiveSection('landing')}
          className={`
            flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium transition-all
            ${activeSection === 'landing' 
              ? 'bg-white text-black shadow-sm' 
              : 'text-neutral-400 hover:text-white hover:bg-white/[0.05]'}
          `}
        >
          <Home className="h-4 w-4" />
          <span className="hidden md:inline">Inicio</span>
        </button>

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
          <span className="hidden md:inline">Componentes</span>
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
          <span className="hidden md:inline">Generador AI</span>
        </button>

        {/* Search Input */}
        {onSearchChange && (
          <div className="relative group mx-1 hidden sm:block">
             <div className="absolute inset-y-0 left-2 flex items-center pointer-events-none">
                <Search className="h-3.5 w-3.5 text-neutral-500 group-focus-within:text-blue-400 transition-colors" />
             </div>
             <input 
                type="text"
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Buscar..."
                className="h-9 w-32 focus:w-48 transition-all duration-300 bg-white/[0.05] border border-white/[0.05] rounded-full pl-8 pr-3 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:bg-white/[0.08] focus:border-white/20"
             />
             {searchTerm && (
                <button 
                  onClick={() => onSearchChange('')}
                  className="absolute inset-y-0 right-2 flex items-center text-neutral-500 hover:text-white"
                >
                   <X className="h-3 w-3" />
                </button>
             )}
          </div>
        )}

        <div className="pl-2 border-l border-white/[0.08] ml-1 flex items-center gap-1">
           <a href="#" className="flex items-center justify-center h-9 w-9 rounded-full bg-white/[0.05] text-white hover:bg-white/10 transition-colors border border-white/[0.05]">
             <Github className="h-4 w-4" />
           </a>
           {onLogout && (
             <button 
                onClick={onLogout}
                className="flex items-center justify-center h-9 w-9 rounded-full bg-white/[0.05] text-neutral-400 hover:text-red-400 hover:bg-red-500/10 transition-colors border border-white/[0.05]"
                title="Sign out"
             >
                <LogOut className="h-4 w-4" />
             </button>
           )}
        </div>
      </nav>
    </div>
  );
};