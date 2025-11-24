
import React from 'react';
import { CheckCircle, AlertCircle, Info, Layout, Layers, Palette, ArrowUp, ArrowDown } from 'lucide-react';
import { GlassButton } from '../ui/GlassButton';
import { useToast, ToastPosition, ToastVariant } from '../ui/Toast';
import { GlassCard } from '../ui/GlassCard';

export const StatusToastsExample = () => {
    const { toast, setPosition, position } = useToast();

    const positions: { label: string; val: ToastPosition; icon: any }[] = [
        { label: 'Top Left', val: 'top-center', icon: ArrowUp }, // Proxy for demo
        { label: 'Top Right', val: 'top-right', icon: ArrowUp },
        { label: 'Bottom Ctr', val: 'bottom-center', icon: ArrowDown },
        { label: 'Bottom Right', val: 'bottom-right', icon: ArrowDown },
    ];

    const variants: { label: string; val: ToastVariant }[] = [
        { label: 'Glass', val: 'glass' },
        { label: 'Solid', val: 'solid' },
        { label: 'Gradient', val: 'gradient' },
        { label: 'Minimal', val: 'minimal' },
    ];

    const simulateStack = () => {
        toast({ type: 'info', title: 'Connecting...', variant: 'minimal', duration: 2000 });
        setTimeout(() => toast({ type: 'default', title: 'Processing data', description: 'Please wait a moment', variant: 'glass', duration: 3000 }), 400);
        setTimeout(() => toast({ type: 'success', title: 'Task Completed', description: 'All items have been synced.', variant: 'gradient' }), 1200);
    };

    return (
        <div className="space-y-8">
             {/* Controls */}
             <div className="flex flex-col md:flex-row gap-6 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <div className="flex-1">
                    <label className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                        <Layout className="h-3.5 w-3.5" /> Position
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                        {positions.map((p) => (
                            <button
                                key={p.val}
                                onClick={() => setPosition(p.val)}
                                className={`
                                    px-3 py-2 text-xs font-medium rounded-lg border transition-all flex items-center justify-center gap-2
                                    ${position === p.val 
                                        ? 'bg-blue-500/20 border-blue-500/50 text-blue-400' 
                                        : 'bg-white/[0.03] border-white/[0.05] text-neutral-400 hover:bg-white/[0.05]'}
                                `}
                            >
                                <p.icon className={`h-3 w-3 ${p.val.includes('bottom') ? 'rotate-0' : ''}`} /> {p.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex-1">
                    <label className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                        <Palette className="h-3.5 w-3.5" /> Style Variant
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                         {variants.map((v) => (
                             <GlassButton
                                key={v.val}
                                size="sm"
                                variant="secondary"
                                onClick={() => toast({ 
                                    title: `${v.label} Style`, 
                                    description: 'This is how this variant looks.', 
                                    variant: v.val,
                                    type: 'info'
                                })}
                                className="w-full text-xs justify-start"
                             >
                                Show {v.label}
                             </GlassButton>
                         ))}
                    </div>
                </div>
             </div>

            {/* Triggers */}
            <div className="flex flex-col items-center gap-6 py-4">
                <div className="flex flex-wrap justify-center gap-4">
                    <GlassButton 
                        onClick={() => toast({ 
                            type: 'success', 
                            title: 'Changes Saved', 
                            description: 'Your configuration has been updated successfully.',
                            variant: 'glass'
                        })}
                        className="bg-green-500/10 text-green-400 border-green-500/20 hover:bg-green-500/20"
                    >
                        <CheckCircle className="h-4 w-4 mr-2" /> Success Toast
                    </GlassButton>
                    
                    <GlassButton 
                        onClick={() => toast({ 
                            type: 'error', 
                            title: 'Network Error', 
                            description: 'Connection timed out. Retrying...',
                            variant: 'solid'
                        })}
                        className="bg-red-500/10 text-red-400 border-red-500/20 hover:bg-red-500/20"
                    >
                        <AlertCircle className="h-4 w-4 mr-2" /> Error (Solid)
                    </GlassButton>

                    <GlassButton 
                        onClick={() => toast({ 
                            type: 'info', 
                            title: 'New Version', 
                            description: 'Alher Tech v2.5 is available.',
                            variant: 'gradient'
                        })}
                        className="bg-blue-500/10 text-blue-400 border-blue-500/20 hover:bg-blue-500/20"
                    >
                        <Info className="h-4 w-4 mr-2" /> Info (Gradient)
                    </GlassButton>
                </div>

                <div className="w-full h-px bg-white/5"></div>

                <GlassButton 
                    onClick={simulateStack}
                    variant="outline"
                    className="border-blue-500/30 hover:bg-blue-500/5 text-blue-400 w-full md:w-auto"
                >
                    <Layers className="h-4 w-4 mr-2" /> Simulate Stack (Click Me)
                </GlassButton>
            </div>
        </div>
    );
};

export const ActionToastExample = () => {
    const { toast } = useToast();

    return (
        <div className="flex flex-col items-center justify-center py-8">
             <div className="text-center mb-6">
                <h4 className="text-white font-medium mb-1">Complex Interaction</h4>
                <p className="text-sm text-neutral-500">Trigger a toast with actionable buttons.</p>
             </div>

             <GlassButton 
                onClick={() => toast({
                    type: 'loading',
                    title: 'Archiving files...',
                    description: 'This process might take a few seconds.',
                    duration: 5000,
                    variant: 'glass',
                    action: {
                        label: 'Cancel',
                        onClick: () => toast({ type: 'error', title: 'Cancelled', variant: 'minimal' })
                    }
                })}
                className="bg-white text-black hover:bg-neutral-200 min-w-[200px]"
             >
                Start Archive Process
             </GlassButton>
        </div>
    );
};
