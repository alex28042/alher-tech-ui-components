import React, { useState, useMemo, useEffect } from 'react';
import { Lock, Activity, Laptop, Users, Settings, SearchX } from 'lucide-react';
import { ComponentShowcase } from '../ComponentShowcase';
import { LIBRARY_CONTENT } from '../../data/examples';

interface ComponentLibraryProps {
  searchTerm?: string;
}

export const ComponentLibrary: React.FC<ComponentLibraryProps> = ({ searchTerm = '' }) => {
  const [activeComponentCategory, setActiveComponentCategory] = useState('auth');

  const categories = [
    { id: 'auth', label: 'Authentication', icon: Lock },
    { id: 'analytics', label: 'Analytics', icon: Activity },
    { id: 'complex', label: 'Complex Layouts', icon: Laptop },
    { id: 'crm', label: 'Data Management', icon: Users },
    { id: 'utility', label: 'Utility & Settings', icon: Settings },
  ];

  // Filter content based on search term
  const filteredContent = useMemo(() => {
    if (!searchTerm.trim()) return LIBRARY_CONTENT;

    const term = searchTerm.toLowerCase();
    const result: Record<string, any[]> = {};

    Object.keys(LIBRARY_CONTENT).forEach(key => {
      const filteredItems = LIBRARY_CONTENT[key].filter(item => 
        item.title.toLowerCase().includes(term) || 
        item.description.toLowerCase().includes(term)
      );
      
      if (filteredItems.length > 0) {
        result[key] = filteredItems;
      }
    });

    return result;
  }, [searchTerm]);

  // Auto-switch tab if current one is empty during search
  useEffect(() => {
    if (searchTerm) {
      const currentHasResults = filteredContent[activeComponentCategory]?.length > 0;
      if (!currentHasResults) {
        const firstWithResults = categories.find(c => filteredContent[c.id]?.length > 0);
        if (firstWithResults) {
          setActiveComponentCategory(firstWithResults.id);
        }
      }
    }
  }, [searchTerm, filteredContent, activeComponentCategory, categories]);

  const handleCategoryChange = (id: string) => {
    setActiveComponentCategory(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const hasResults = Object.keys(filteredContent).length > 0;
  
  // Get current category data
  const currentCategory = categories.find(c => c.id === activeComponentCategory);
  const currentItems = currentCategory ? filteredContent[currentCategory.id] : [];

  return (
    <div className="animate-in fade-in duration-500 pt-8 pb-32">
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">Component Library</h2>
        <p className="text-lg text-neutral-400 max-w-2xl">
          {searchTerm 
            ? `Showing results for "${searchTerm}"`
            : "Explore our collection of pre-built UI elements designed for modern SaaS applications."
          }
        </p>
      </div>

      {!hasResults ? (
        <div className="flex flex-col items-center justify-center py-24 text-center border border-dashed border-white/10 rounded-2xl bg-white/[0.02]">
          <div className="h-16 w-16 bg-white/5 rounded-full flex items-center justify-center mb-6">
            <SearchX className="h-8 w-8 text-neutral-500" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">No components found</h3>
          <p className="text-neutral-500 max-w-md">
            We couldn't find any components matching "{searchTerm}". Try searching for keywords like "Login", "Chart", or "Table".
          </p>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row gap-12 relative">
          {/* Sidebar Navigation */}
          <aside className="hidden md:block w-64 shrink-0 relative">
            <div className="sticky top-28 space-y-1">
              <h4 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-4 px-3">
                {searchTerm ? 'Results in' : 'Categories'}
              </h4>
              {categories.map((cat) => {
                 const resultCount = filteredContent[cat.id]?.length || 0;
                 // If searching and category has no results, hide it to keep UI clean
                 if (searchTerm && resultCount === 0) return null;

                 return (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`
                      w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-all group
                      ${activeComponentCategory === cat.id
                        ? 'bg-white/[0.08] text-white shadow-sm border border-white/[0.05]'
                        : 'text-neutral-400 hover:text-white hover:bg-white/[0.02]'}
                    `}
                  >
                    <div className="flex items-center gap-3">
                      <cat.icon className={`h-4 w-4 ${activeComponentCategory === cat.id ? 'text-blue-400' : 'text-neutral-500 group-hover:text-neutral-300'}`} />
                      {cat.label}
                    </div>
                    {searchTerm && (
                      <span className="text-xs bg-white/10 px-1.5 py-0.5 rounded text-neutral-300">
                        {resultCount}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </aside>

          {/* Main Content Area - Displays ONLY the active category */}
          <div className="flex-1 min-w-0">
            {currentCategory && currentItems && currentItems.length > 0 ? (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/[0.05]">
                  <div className="h-8 w-8 rounded-lg bg-white/[0.05] border border-white/[0.1] flex items-center justify-center">
                    <currentCategory.icon className="h-4 w-4 text-blue-400" />
                  </div>
                  <h2 className="text-2xl font-semibold text-white tracking-tight">{currentCategory.label}</h2>
                  {searchTerm && (
                     <span className="ml-auto text-sm text-neutral-500">
                        {currentItems.length} result{currentItems.length !== 1 ? 's' : ''} found
                     </span>
                  )}
                </div>

                <div className="space-y-12">
                  {currentItems.map((item) => (
                    <div key={item.id} className={item.width === 'full' ? 'w-full' : ''}>
                      <ComponentShowcase
                          title={item.title}
                          description={item.description}
                          component={item.component}
                          codeSnippet={item.code}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ) : (
               // Fallback if category is empty (shouldn't happen with auto-switch, but good safety)
               <div className="py-12 text-center text-neutral-500">
                  Select a category to view components.
               </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};