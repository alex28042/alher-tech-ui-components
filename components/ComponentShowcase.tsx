import React, { useState } from 'react';
import { TabState } from '../types';
import { GlassCard } from './ui/GlassCard';
import { Eye, Code, Check, Copy } from 'lucide-react';

interface ComponentShowcaseProps {
  title: string;
  description: string;
  component: React.ReactNode;
  codeSnippet: string;
}

export const ComponentShowcase: React.FC<ComponentShowcaseProps> = ({ 
  title, 
  description, 
  component, 
  codeSnippet 
}) => {
  const [activeTab, setActiveTab] = useState<TabState>(TabState.PREVIEW);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group">
      <div className="flex items-end justify-between mb-4">
        <div>
          <h3 className="text-lg font-medium text-white">{title}</h3>
          <p className="text-sm text-neutral-500 mt-1 max-w-md">{description}</p>
        </div>
        <div className="flex p-1 bg-white/[0.03] rounded-lg border border-white/[0.08]">
          <button
            onClick={() => setActiveTab(TabState.PREVIEW)}
            className={`
              flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium transition-all
              ${activeTab === TabState.PREVIEW ? 'bg-white/[0.08] text-white shadow-sm border border-white/[0.05]' : 'text-neutral-500 hover:text-neutral-300'}
            `}
          >
            <Eye className="h-3.5 w-3.5" /> Vista
          </button>
          <button
            onClick={() => setActiveTab(TabState.CODE)}
            className={`
              flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium transition-all
              ${activeTab === TabState.CODE ? 'bg-white/[0.08] text-white shadow-sm border border-white/[0.05]' : 'text-neutral-500 hover:text-neutral-300'}
            `}
          >
            <Code className="h-3.5 w-3.5" /> Código
          </button>
        </div>
      </div>

      <GlassCard className="min-h-[320px] flex flex-col transition-all duration-500 border-white/[0.08] group-hover:border-white/[0.12]" noPadding>
        {activeTab === TabState.PREVIEW ? (
          <div className="flex-1 flex items-center justify-center p-10 relative overflow-hidden">
             {/* Minimal Grid Pattern */}
             <div className="absolute inset-0 opacity-[0.03]" 
                  style={{ 
                    backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', 
                    backgroundSize: '32px 32px' 
                  }}>
             </div>
             <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#171717]/50"></div>
             
             <div className="relative z-10 w-full max-w-md transform transition-transform duration-500">
              {component}
             </div>
          </div>
        ) : (
          <div className="relative flex-1 bg-[#0f0f0f]">
             <button 
              onClick={handleCopy}
              className="absolute top-4 right-4 p-2 rounded-lg bg-white/5 border border-white/10 text-neutral-400 hover:text-white hover:bg-white/10 transition-all z-10"
            >
              {copied ? <Check className="h-3.5 w-3.5 text-green-400" /> : <Copy className="h-3.5 w-3.5" />}
            </button>
            <pre className="p-6 text-xs font-mono text-blue-100/80 overflow-x-auto h-[320px] overflow-y-auto custom-scrollbar">
              <code>{codeSnippet}</code>
            </pre>
          </div>
        )}
      </GlassCard>
    </div>
  );
};