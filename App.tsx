import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Generator } from './components/Generator';
import { LoginScreen } from './components/auth/LoginScreen';
import { LandingPage } from './components/sections/LandingPage';
import { ComponentLibrary } from './components/sections/ComponentLibrary';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState('');
  const [activeSection, setActiveSection] = useState('landing');
  const [searchTerm, setSearchTerm] = useState('');

  // Check auth on mount
  useEffect(() => {
    if (localStorage.getItem('alher_auth') === 'true') {
        setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (user: string, pass: string) => {
    if (user.toLowerCase() === 'alhertech' && pass === '1234') {
      setIsAuthenticated(true);
      setAuthError('');
      localStorage.setItem('alher_auth', 'true');
    } else {
      setAuthError('Credenciales incorrectas');
    }
  };

  const handleLogout = () => {
      localStorage.removeItem('alher_auth');
      setIsAuthenticated(false);
      setActiveSection('landing');
      setSearchTerm('');
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    if (term.trim().length > 0 && activeSection !== 'components') {
      setActiveSection('components');
    }
  };

  if (!isAuthenticated) {
    return <LoginScreen onLogin={handleLogin} authError={authError} />;
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] font-sans text-white selection:bg-blue-500/30">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full opacity-40 mix-blend-screen"></div>
         <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-purple-600/5 blur-[120px] rounded-full opacity-30 mix-blend-screen"></div>
      </div>

      <Navigation 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
        onLogout={handleLogout}
        searchTerm={searchTerm}
        onSearchChange={handleSearch}
      />

      <main className="relative z-10 container mx-auto px-4 sm:px-6 pt-32 pb-20">
        {activeSection === 'landing' && <LandingPage onNavigate={setActiveSection} />}
        {activeSection === 'components' && <ComponentLibrary searchTerm={searchTerm} />}
        {activeSection === 'generator' && <Generator />}
      </main>

      <footer className="border-t border-white/[0.05] py-12 mt-24 bg-[#0a0a0a] relative z-10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
             <div className="h-6 w-6 bg-white rounded-md flex items-center justify-center">
                <div className="h-3 w-3 bg-black rounded-sm" />
             </div>
             <p className="text-neutral-500 text-sm font-medium">Alher Tech UI © 2024</p>
          </div>
          <div className="flex gap-8 text-sm text-neutral-500 font-medium">
            <button onClick={() => setActiveSection('components')} className="hover:text-white transition-colors">Components</button>
            <button onClick={() => setActiveSection('generator')} className="hover:text-white transition-colors">Generator</button>
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;