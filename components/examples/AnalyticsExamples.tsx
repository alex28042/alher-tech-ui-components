
import React from 'react';
import { TrendingUp, Filter, Zap, Users, CheckCircle, MessageSquare } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import { GlassButton } from '../ui/GlassButton';

export const RevenueGrowthExample = () => (
  <GlassCard className="w-full bg-gradient-to-b from-[#171717]/80 to-[#0f0f0f]/90">
    <div className="flex items-center justify-between mb-8">
       <div>
         <h3 className="font-semibold text-white text-lg">Revenue Growth</h3>
         <div className="flex items-center gap-2 mt-1">
            <p className="text-2xl font-bold text-white">$124,500</p>
            <span className="text-xs font-medium text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full flex items-center gap-1">
              <TrendingUp className="h-3 w-3" /> +12.5%
            </span>
         </div>
       </div>
       <div className="flex bg-white/[0.05] p-0.5 rounded-lg border border-white/[0.08]">
         {['7D', '30D', '3M'].map((t, i) => (
           <button key={t} className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${i === 0 ? 'bg-white/[0.1] text-white shadow-sm' : 'text-neutral-500 hover:text-neutral-300'}`}>
             {t}
           </button>
         ))}
       </div>
    </div>
    <div className="flex items-end justify-between h-40 gap-3 px-1">
       {[45, 70, 50, 85, 60, 75, 95, 65, 80, 55, 90, 100].map((h, i) => (
          <div key={i} className="w-full group relative flex flex-col justify-end h-full">
             <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 mb-2 pointer-events-none">
                ${h}k
             </div>
             <div 
              className="w-full bg-white/[0.05] rounded-sm group-hover:bg-gradient-to-t group-hover:from-blue-600 group-hover:to-purple-500 transition-all duration-300 relative overflow-hidden" 
              style={{ height: `${h}%` }}
             >
                <div className="absolute bottom-0 left-0 right-0 h-full w-full bg-gradient-to-t from-white/[0.05] to-transparent opacity-0 group-hover:opacity-20"></div>
             </div>
          </div>
       ))}
    </div>
    <div className="flex justify-between mt-4 pt-4 border-t border-white/[0.05] text-[10px] uppercase tracking-wider text-neutral-500 font-medium px-1">
       <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
    </div>
  </GlassCard>
);

export const ActivityFeedExample = () => (
  <GlassCard className="w-full max-w-md mx-auto bg-[#0f0f0f]/80">
     <div className="flex items-center justify-between mb-6">
        <h3 className="font-semibold text-white">Recent Activity</h3>
        <GlassButton size="sm" variant="ghost" className="h-8 w-8 p-0"><Filter className="h-4 w-4" /></GlassButton>
     </div>
     <div className="relative space-y-6 pl-2">
        {/* Vertical Line */}
        <div className="absolute left-[19px] top-3 bottom-3 w-[1px] bg-white/[0.1]"></div>

        {[
           { title: "New project created", time: "Just now", icon: Zap, color: "text-yellow-400", bg: "bg-yellow-400/10", desc: "Marketing Campaign 2024" },
           { title: "Meeting with client", time: "2h ago", icon: Users, color: "text-blue-400", bg: "bg-blue-400/10", desc: "Discussing Q4 roadmap" },
           { title: "Task completed", time: "5h ago", icon: CheckCircle, color: "text-green-400", bg: "bg-green-400/10", desc: "Homepage Redesign v2" },
           { title: "New comment", time: "Yesterday", icon: MessageSquare, color: "text-purple-400", bg: "bg-purple-400/10", desc: "Alex on Ticket #4291" }
        ].map((item, i) => (
           <div key={i} className="relative flex items-start gap-4 z-10 group">
              <div className={`h-9 w-9 rounded-full border border-white/[0.08] ${item.bg} flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                 <item.icon className={`h-4 w-4 ${item.color}`} />
              </div>
              <div className="flex-1 pt-0.5">
                 <div className="flex justify-between items-baseline">
                    <h4 className="text-sm font-medium text-white group-hover:text-blue-400 transition-colors">{item.title}</h4>
                    <span className="text-[10px] text-neutral-500 font-medium">{item.time}</span>
                 </div>
                 <p className="text-xs text-neutral-400 mt-0.5">{item.desc}</p>
              </div>
           </div>
        ))}
     </div>
  </GlassCard>
);
