import React from 'react';
import { Sparkles, Layers, Code2 } from 'lucide-react';
import { GlassButton } from '../ui/GlassButton';
import { GlassCard } from '../ui/GlassCard';

interface LandingPageProps {
  onNavigate: (section: string) => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  return (
    <div className="animate-in fade-in duration-700 slide-in-from-bottom-4 pt-10">
      <div className="text-center max-w-4xl mx-auto space-y-8 mb-24 relative">
        {/* Decorative Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/20 blur-[120px] rounded-full opacity-50 mix-blend-screen pointer-events-none"></div>

        <div className="inline-flex items-center rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-neutral-300 backdrop-blur-xl mb-4 shadow-xl">
          <span className="w-2 h-2 rounded-full bg-blue-500 mr-2 animate-pulse"></span>
          Alher Tech UI v2.0 Available Now
        </div>

        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.95] bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/40">
          The Next Gen<br />SaaS Interface.
        </h1>

        <p className="text-lg md:text-xl text-neutral-400 font-light leading-relaxed max-w-xl mx-auto">
          Build premium, trustworthy applications with our meticulously crafted, glass-morphic component library.
        </p>

        <div className="flex items-center justify-center gap-4 pt-4">
          <GlassButton
            onClick={() => onNavigate('components')}
            className="h-12 px-8 bg-white text-black hover:bg-neutral-200 text-base shadow-[0_0_20px_rgba(255,255,255,0.15)]"
          >
            Browse Library
          </GlassButton>
          <GlassButton
            onClick={() => onNavigate('generator')}
            variant="outline"
            className="h-12 px-8 text-base border-white/10 hover:bg-white/5"
          >
            AI Generator <Sparkles className="ml-2 h-4 w-4 text-blue-400" />
          </GlassButton>
        </div>
      </div>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {[
          { title: "Glassmorphism", desc: "Premium frosted glass effects tailored for dark mode.", icon: Layers },
          { title: "React & Tailwind", desc: "Built on modern stack standards for easy integration.", icon: Code2 },
          { title: "AI Powered", desc: "Generate custom components using natural language.", icon: Sparkles },
        ].map((f, i) => (
          <GlassCard key={i} className="bg-[#171717]/40 hover:bg-[#171717]/60">
            <div className="h-10 w-10 rounded-lg bg-white/5 flex items-center justify-center mb-4 border border-white/10">
              <f.icon className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">{f.title}</h3>
            <p className="text-sm text-neutral-400">{f.desc}</p>
          </GlassCard>
        ))}
      </div>
    </div>
  );
};