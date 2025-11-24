
import React from 'react';
import { Check, Cloud, CreditCard } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import { GlassButton } from '../ui/GlassButton';

export const PricingCardsExample = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
     {/* Starter */}
     <GlassCard className="flex flex-col h-full">
        <div className="mb-4">
           <h3 className="text-lg font-medium text-white">Starter</h3>
           <p className="text-neutral-500 text-sm">For individuals.</p>
        </div>
        <div className="mb-6">
           <span className="text-3xl font-bold text-white">$0</span>
           <span className="text-neutral-500">/mo</span>
        </div>
        <div className="space-y-3 mb-8 flex-1">
           {['1 User', '5 Projects', 'Community Support'].map(f => (
              <div key={f} className="flex items-center gap-2 text-sm text-neutral-400">
                 <div className="h-4 w-4 rounded-full bg-neutral-800 flex items-center justify-center border border-white/10"><Check className="h-2.5 w-2.5 text-neutral-400" /></div> {f}
              </div>
           ))}
        </div>
        <GlassButton variant="outline" className="w-full mt-auto">Get Started</GlassButton>
     </GlassCard>

     {/* Pro - Highlighted */}
     <GlassCard className="relative flex flex-col h-full bg-white/[0.05] border-white/[0.15] shadow-xl shadow-blue-900/10">
        <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl border-l border-b border-white/10">
           POPULAR
        </div>
        <div className="mb-4">
           <h3 className="text-lg font-medium text-white">Pro</h3>
           <p className="text-blue-200/70 text-sm">For growing teams.</p>
        </div>
        <div className="mb-6">
           <span className="text-3xl font-bold text-white">$29</span>
           <span className="text-neutral-500">/mo</span>
        </div>
        <div className="space-y-3 mb-8 flex-1">
           {['Up to 10 Users', 'Unlimited Projects', 'Analytics', 'Priority Support'].map(f => (
              <div key={f} className="flex items-center gap-2 text-sm text-white">
                 <div className="h-4 w-4 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30"><Check className="h-2.5 w-2.5 text-blue-400" /></div> {f}
              </div>
           ))}
        </div>
        <GlassButton className="w-full bg-blue-600 hover:bg-blue-500 text-white border-0 mt-auto shadow-[0_0_15px_rgba(37,99,235,0.3)]">Upgrade to Pro</GlassButton>
     </GlassCard>

      {/* Enterprise */}
      <GlassCard className="flex flex-col h-full">
        <div className="mb-4">
           <h3 className="text-lg font-medium text-white">Enterprise</h3>
           <p className="text-neutral-500 text-sm">For large orgs.</p>
        </div>
        <div className="mb-6">
           <span className="text-3xl font-bold text-white">$99</span>
           <span className="text-neutral-500">/mo</span>
        </div>
        <div className="space-y-3 mb-8 flex-1">
           {['Unlimited Users', 'SSO & Audit Logs', 'Dedicated Manager', 'SLA'].map(f => (
              <div key={f} className="flex items-center gap-2 text-sm text-neutral-400">
                 <div className="h-4 w-4 rounded-full bg-neutral-800 flex items-center justify-center border border-white/10"><Check className="h-2.5 w-2.5 text-neutral-400" /></div> {f}
              </div>
           ))}
        </div>
        <GlassButton variant="outline" className="w-full mt-auto">Contact Sales</GlassButton>
     </GlassCard>
  </div>
);

export const StorageWidgetExample = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
     {/* Storage Card */}
     <GlassCard className="relative overflow-hidden bg-gradient-to-br from-[#171717] to-[#0a0a0a]">
         <div className="absolute top-0 right-0 p-4 opacity-10">
            <Cloud className="h-32 w-32 text-blue-500 transform rotate-12 translate-x-8 -translate-y-8" />
         </div>
         <div className="relative z-10">
            <div className="h-10 w-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 border border-blue-500/20">
               <Cloud className="h-5 w-5 text-blue-400" />
            </div>
            <h3 className="font-semibold text-white text-lg">Cloud Storage</h3>
            <p className="text-sm text-neutral-400 mb-6">Your team has used 80% of the available storage.</p>
            
            <div className="space-y-4 mb-8">
               <div>
                  <div className="flex justify-between text-xs mb-2">
                     <span className="text-white">Usage</span>
                     <span className="text-neutral-400">800GB / 1TB</span>
                  </div>
                  <div className="h-2 w-full bg-white/[0.05] rounded-full overflow-hidden">
                     <div className="h-full w-[80%] bg-gradient-to-r from-blue-600 to-blue-400 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                  </div>
               </div>
            </div>
            
            <GlassButton className="w-full border-white/[0.05] hover:bg-white/[0.05]" variant="outline">
               Manage Plan
            </GlassButton>
         </div>
     </GlassCard>

     {/* Payment Method */}
     <GlassCard className="flex flex-col justify-between">
         <div>
           <div className="flex justify-between items-start mb-4">
              <div className="h-10 w-10 rounded-lg bg-purple-500/10 flex items-center justify-center border border-purple-500/20">
                 <CreditCard className="h-5 w-5 text-purple-400" />
              </div>
              <span className="px-2 py-1 rounded border border-green-500/20 bg-green-500/10 text-green-400 text-[10px] font-bold uppercase tracking-wide">
                 Primary
              </span>
           </div>
           <h3 className="font-semibold text-white text-lg">Visa ending in 4242</h3>
           <p className="text-sm text-neutral-500">Expiry 12/2025</p>
         </div>
         
         <div className="mt-6 pt-6 border-t border-white/[0.05] space-y-3">
            <div className="flex justify-between text-sm">
               <span className="text-neutral-400">Next Billing</span>
               <span className="text-white">Nov 1, 2024</span>
            </div>
            <div className="flex justify-between text-sm">
               <span className="text-neutral-400">Amount</span>
               <span className="text-white font-medium">$299.00</span>
            </div>
         </div>
     </GlassCard>
  </div>
);
