import React, { useState, useEffect, useRef } from 'react';
import { GlassCard } from './ui/GlassCard';
import { GlassButton } from './ui/GlassButton';
import { GlassInput } from './ui/GlassInput';
import { GlassBadge } from './ui/GlassBadge';
import { generateGlassComponent } from '../services/geminiService';
import { Sparkles, Code2, Copy, Check, Eye, Loader2 } from 'lucide-react';
import { GenerationStatus } from '../types';

// ==========================================
// COMPONENT SHIMS FOR PREVIEW
// These strings are injected into the iframe to make the generated code work
// without a bundler.
// ==========================================
const SHIM_GLASS_CARD = `
const GlassCard = ({ children, className = '', hoverEffect = false, noPadding = false }) => {
  return React.createElement('div', {
    className: \`relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#171717]/60 backdrop-blur-xl transition-all duration-300 ease-out \${noPadding ? 'p-0' : 'p-6'} \${hoverEffect ? 'hover:border-white/[0.15] hover:bg-[#1c1c1c]/80 hover:shadow-lg hover:-translate-y-0.5' : ''} \${className}\`
  }, children);
};
`;

const SHIM_GLASS_BUTTON = `
const GlassButton = ({ children, className = '', variant = 'primary', size = 'md', isLoading = false, ...props }) => {
  const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none cursor-pointer";
  const variants = {
    primary: "bg-white text-black hover:bg-gray-200 shadow-sm border border-transparent",
    secondary: "bg-white/[0.08] text-white hover:bg-white/[0.12] border border-white/[0.05]",
    ghost: "bg-transparent text-neutral-400 hover:text-white hover:bg-white/[0.05]",
    outline: "bg-transparent border border-white/[0.1] text-white hover:bg-white/[0.05]"
  };
  const sizes = {
    sm: "h-8 px-4 text-xs",
    md: "h-10 px-6 text-sm",
    lg: "h-12 px-8 text-base"
  };
  const loader = isLoading ? React.createElement('span', { className: "mr-2 h-4 w-4 animate-spin border-2 border-current border-t-transparent rounded-full" }) : null;
  
  return React.createElement('button', {
    className: \`\${baseStyles} \${variants[variant]} \${sizes[size]} \${className}\`,
    disabled: isLoading || props.disabled,
    ...props
  }, loader, children);
};
`;

const SHIM_GLASS_INPUT = `
const GlassInput = ({ className = '', ...props }) => {
  return React.createElement('input', {
    className: \`flex h-11 w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-sm text-white placeholder:text-neutral-500 backdrop-blur-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/20 focus-visible:border-white/20 focus-visible:bg-white/[0.05] disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 \${className}\`,
    ...props
  });
};
`;

const SHIM_GLASS_BADGE = `
const GlassBadge = ({ children, variant = 'neutral', className = '' }) => {
  const variants = {
    success: "bg-green-400/10 text-green-400 border-green-400/20",
    warning: "bg-yellow-400/10 text-yellow-400 border-yellow-400/20",
    error: "bg-red-400/10 text-red-400 border-red-400/20",
    info: "bg-blue-400/10 text-blue-400 border-blue-400/20",
    neutral: "bg-white/[0.05] text-neutral-400 border-white/[0.05]",
    outline: "bg-transparent text-neutral-400 border-white/[0.1]"
  };
  return React.createElement('span', {
    className: \`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border \${variants[variant]} \${className}\`
  }, children);
};
`;

export const Generator: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [generatedCode, setGeneratedCode] = useState('');
  const [status, setStatus] = useState<GenerationStatus>('idle');
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
  const [copied, setCopied] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setStatus('loading');
    setActiveTab('preview'); // Switch to preview on generate
    
    try {
      const code = await generateGlassComponent(prompt);
      setGeneratedCode(code);
      setStatus('success');
    } catch (error) {
      setStatus('error');
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Effect to update the Iframe content when code changes or tab changes
  useEffect(() => {
    if (status === 'success' && generatedCode && iframeRef.current && activeTab === 'preview') {
      const doc = iframeRef.current.contentDocument;
      if (!doc) return;

      // Prepare the code for the browser environment
      // 1. Remove imports (since we inject them)
      let cleanCode = generatedCode.replace(/import.*?from.*?;/g, '');
      
      // 2. Handle Lucide Icons separately (map them from global object)
      //    Use robust regex for multiline imports
      cleanCode = cleanCode.replace('export default', 'const GeneratedComponent =');

      const lucideImportsMatch = generatedCode.match(/import\s+\{([\s\S]*?)\}\s+from\s+['"]lucide-react['"]/);
      let lucideDestructuring = '';
      if (lucideImportsMatch) {
          const iconString = lucideImportsMatch[1];
          // Clean up whitespace/newlines and split
          const icons = iconString.split(',').map(i => i.trim()).filter(i => i);
          lucideDestructuring = `const { ${icons.join(', ')} } = lucide;`;
      }

      const htmlContent = `
        <!DOCTYPE html>
        <html>
          <head>
            <script src="https://cdn.tailwindcss.com"></script>
            <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet">
            <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
            <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
            <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
            <script src="https://unpkg.com/lucide@latest"></script>
            <script src="https://unpkg.com/lucide-react@latest/dist/lucide-react.min.js"></script>
            <script>
              tailwind.config = {
                theme: {
                  extend: {
                    fontFamily: { sans: ['Outfit', 'sans-serif'] },
                    colors: {
                       glass: { 100: 'rgba(255, 255, 255, 0.03)' }
                    }
                  }
                }
              }
            </script>
            <style>
              body { background-color: transparent; color: white; font-family: 'Outfit', sans-serif; overflow-x: hidden; }
              /* Scrollbar */
              ::-webkit-scrollbar { width: 6px; }
              ::-webkit-scrollbar-track { background: transparent; }
              ::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.1); border-radius: 10px; }
            </style>
          </head>
          <body>
            <div id="root" class="p-4"></div>
            <script type="text/babel">
              const { useState, useEffect, useRef } = React;
              
              // Inject Lucide Icons
              ${lucideDestructuring}

              // Inject UI Library
              ${SHIM_GLASS_CARD}
              ${SHIM_GLASS_BUTTON}
              ${SHIM_GLASS_INPUT}
              ${SHIM_GLASS_BADGE}

              // Inject User Code
              ${cleanCode}

              // Render
              const root = ReactDOM.createRoot(document.getElementById('root'));
              root.render(<GeneratedComponent />);
            </script>
          </body>
        </html>
      `;

      doc.open();
      doc.write(htmlContent);
      doc.close();
    }
  }, [generatedCode, status, activeTab]);

  return (
    <div className="max-w-5xl mx-auto space-y-8 pt-10 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
      
      <div className="text-center space-y-2">
        <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium border border-blue-500/20 mb-4">
          <Sparkles className="w-3 h-3 mr-1" />
          Powered by Alher Tech Engine
        </div>
        <h2 className="text-4xl font-semibold text-white tracking-tight">
          Generador de Componentes
        </h2>
        <p className="text-neutral-400 max-w-lg mx-auto text-lg">
          Describe tu interfaz y nuestra IA la construirá usando la librería Alher Tech.
        </p>
      </div>

      {/* Input Section */}
      <div className="relative group z-20">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
        <GlassCard className="relative p-2 flex flex-col md:flex-row gap-2 bg-[#0a0a0a] border-white/10">
            <div className="flex-1 relative">
              <GlassInput 
                placeholder="Ej: Un panel de login con imagen a la izquierda y formulario a la derecha..." 
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="h-12 text-base border-transparent bg-transparent focus-visible:ring-0 pl-4"
                onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
              />
            </div>
            <GlassButton 
              onClick={handleGenerate} 
              isLoading={status === 'loading'}
              disabled={!prompt}
              className="h-12 px-8 shadow-lg"
            >
              {status === 'loading' ? 'Diseñando...' : 'Generar UI'}
            </GlassButton>
        </GlassCard>
      </div>

      {/* Result Section */}
      {generatedCode && (
        <div className="space-y-4 animate-in fade-in zoom-in-95 duration-500">
           <div className="flex items-center justify-between px-1">
              <div className="flex bg-white/[0.03] p-1 rounded-lg border border-white/[0.08]">
                  <button
                    onClick={() => setActiveTab('preview')}
                    className={`
                      flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium transition-all
                      ${activeTab === 'preview' ? 'bg-white/[0.08] text-white shadow-sm border border-white/[0.05]' : 'text-neutral-500 hover:text-neutral-300'}
                    `}
                  >
                    <Eye className="h-3.5 w-3.5" /> Preview
                  </button>
                  <button
                    onClick={() => setActiveTab('code')}
                    className={`
                      flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium transition-all
                      ${activeTab === 'code' ? 'bg-white/[0.08] text-white shadow-sm border border-white/[0.05]' : 'text-neutral-500 hover:text-neutral-300'}
                    `}
                  >
                    <Code2 className="h-3.5 w-3.5" /> Código
                  </button>
              </div>

              <button 
                onClick={copyToClipboard}
                className="text-xs flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors bg-white/5 px-3 py-1.5 rounded-full border border-white/5 hover:border-white/10"
              >
                {copied ? <Check className="h-3 w-3 text-green-400" /> : <Copy className="h-3 w-3" />}
                {copied ? 'Copiado' : 'Copiar JSX'}
              </button>
           </div>
           
           <GlassCard className="overflow-hidden border-white/10 bg-[#0f0f0f] min-h-[400px] flex flex-col" noPadding>
            {activeTab === 'preview' ? (
              <div className="w-full h-full min-h-[500px] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-[#0a0a0a] relative">
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-blue-500/5 to-purple-500/5"></div>
                <iframe 
                  ref={iframeRef}
                  title="Preview"
                  className="w-full h-full min-h-[500px] border-none"
                  sandbox="allow-scripts allow-same-origin"
                />
              </div>
            ) : (
              <div className="max-h-[500px] overflow-y-auto custom-scrollbar bg-[#0a0a0a]">
                <pre className="p-6 text-sm font-mono text-blue-100/80 leading-relaxed selection:bg-blue-500/30">
                  <code>{generatedCode}</code>
                </pre>
              </div>
            )}
          </GlassCard>
        </div>
      )}
    </div>
  );
};