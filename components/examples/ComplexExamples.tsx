
import React from 'react';
import { Server, Download, Globe, Zap, AlertTriangle, Cpu, BarChart3, PieChart, Database } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import { GlassButton } from '../ui/GlassButton';

export const MissionControlExample = () => (
  <GlassCard className="w-full" noPadding>
     {/* Dashboard Header */}
     <div className="p-6 border-b border-white/[0.08] flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
           <h2 className="text-xl font-bold text-white flex items-center gap-3">
             <Server className="h-5 w-5 text-blue-400" /> Mission Control
           </h2>
           <p className="text-sm text-neutral-500 mt-1">Real-time system performance & metrics.</p>
        </div>
        <div className="flex items-center gap-3">
           <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-green-500/10 border border-green-500/20 rounded-full">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-xs font-medium text-green-400">Systems Operational</span>
           </div>
           <GlassButton size="sm" variant="outline" className="h-9"><Download className="h-4 w-4 mr-2" /> Report</GlassButton>
        </div>
     </div>

     {/* Quick Stats Grid */}
     <div className="grid grid-cols-2 md:grid-cols-4 border-b border-white/[0.08] divide-x divide-white/[0.08]">
        {[
          { label: "Total Requests", val: "2.4M", trend: "+12%", color: "text-blue-400", icon: Globe },
          { label: "Avg Latency", val: "42ms", trend: "-5%", color: "text-green-400", icon: Zap },
          { label: "Error Rate", val: "0.02%", trend: "+0.01%", color: "text-red-400", icon: AlertTriangle },
          { label: "CPU Usage", val: "78%", trend: "+4%", color: "text-yellow-400", icon: Cpu },
        ].map((stat, i) => (
           <div key={i} className="p-6 hover:bg-white/[0.02] transition-colors">
              <div className="flex items-center justify-between mb-2">
                 <stat.icon className={`h-4 w-4 ${stat.color} opacity-80`} />
                 <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded-full bg-white/[0.05] ${stat.color.replace('text', 'text')}`}>{stat.trend}</span>
              </div>
              <div className="text-2xl font-bold text-white">{stat.val}</div>
              <div className="text-xs text-neutral-500 mt-1">{stat.label}</div>
           </div>
        ))}
     </div>

     {/* Main Content Area */}
     <div className="grid grid-cols-1 lg:grid-cols-3">
        {/* Main Chart Area (2/3) */}
        <div className="lg:col-span-2 p-6 border-b lg:border-b-0 lg:border-r border-white/[0.08]">
           <div className="flex items-center justify-between mb-6">
              <h3 className="font-semibold text-white flex items-center gap-2"><BarChart3 className="h-4 w-4 text-neutral-400"/> Traffic Overview</h3>
              <div className="flex gap-2">
                 {['1h', '24h', '7d'].map((t, i) => (
                    <button key={t} className={`text-xs px-2 py-1 rounded ${i===1 ? 'bg-white/10 text-white' : 'text-neutral-500 hover:text-neutral-300'}`}>{t}</button>
                 ))}
              </div>
           </div>
           
           {/* Complex Chart Simulation */}
           <div className="h-64 w-full flex items-end gap-2 relative">
              <div className="absolute inset-0 grid grid-rows-4 gap-0 pointer-events-none">
                 {[1,2,3,4].map(l => <div key={l} className="border-t border-dashed border-white/[0.05] w-full h-full"></div>)}
              </div>
              {Array.from({length: 24}).map((_, i) => {
                 const h = Math.floor(Math.random() * 60) + 20;
                 return (
                    <div key={i} className="flex-1 bg-gradient-to-t from-blue-600/20 to-blue-500/80 rounded-t-sm hover:from-blue-500/40 hover:to-blue-400 transition-all cursor-pointer relative group" style={{ height: `${h}%` }}>
                       <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-neutral-900 text-white text-[10px] px-2 py-1 rounded border border-white/10 opacity-0 group-hover:opacity-100 pointer-events-none z-20 whitespace-nowrap">
                          {h * 102} reqs
                       </div>
                    </div>
                 )
              })}
           </div>
        </div>

        {/* Right Sidebar (1/3) */}
        <div className="p-6 bg-[#0f0f0f]/30">
           <h3 className="font-semibold text-white mb-6 flex items-center gap-2"><PieChart className="h-4 w-4 text-neutral-400"/> Distribution</h3>
           
           {/* List of items with progress */}
           <div className="space-y-5">
              {[
                { label: "US-East-1", val: 45, color: "bg-blue-500" },
                { label: "EU-West-3", val: 30, color: "bg-purple-500" },
                { label: "AP-South-1", val: 15, color: "bg-yellow-500" },
                { label: "SA-East-1", val: 10, color: "bg-green-500" }
              ].map((region, i) => (
                 <div key={i}>
                    <div className="flex justify-between text-xs mb-1.5">
                       <span className="text-white font-medium">{region.label}</span>
                       <span className="text-neutral-400">{region.val}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/[0.05] rounded-full overflow-hidden">
                       <div className={`h-full rounded-full ${region.color}`} style={{ width: `${region.val}%` }}></div>
                    </div>
                 </div>
              ))}
           </div>

           <div className="mt-8 pt-6 border-t border-white/[0.08]">
              <h4 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-4">Active Incidents</h4>
              <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/10 flex gap-3">
                 <AlertTriangle className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />
                 <div>
                    <p className="text-xs font-medium text-red-200">High Latency in DB-04</p>
                    <p className="text-[10px] text-red-400/70 mt-0.5">Started 12m ago • Investigating</p>
                 </div>
              </div>
           </div>
        </div>
     </div>

     {/* Footer / Table */}
     <div className="border-t border-white/[0.08] bg-[#0f0f0f]/50">
        <div className="px-6 py-3 border-b border-white/[0.05] text-[11px] font-semibold text-neutral-500 uppercase flex gap-4">
           <div className="w-24">ID</div>
           <div className="flex-1">Process</div>
           <div className="w-32">Status</div>
           <div className="w-32 text-right">Duration</div>
        </div>
        {[1,2,3].map((r) => (
           <div key={r} className="px-6 py-3 flex gap-4 text-xs hover:bg-white/[0.02] border-b border-white/[0.04] last:border-0">
              <div className="w-24 font-mono text-neutral-400">#928{r}</div>
              <div className="flex-1 text-white flex items-center gap-2">
                 <Database className="h-3 w-3 text-blue-400"/> Database_Sync_v2
              </div>
              <div className="w-32"><span className="text-green-400 bg-green-400/10 px-1.5 py-0.5 rounded text-[10px]">Completed</span></div>
              <div className="w-32 text-right text-neutral-400">2m 14s</div>
           </div>
        ))}
     </div>
  </GlassCard>
);
