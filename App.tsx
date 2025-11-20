import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { ComponentShowcase } from './components/ComponentShowcase';
import { Generator } from './components/Generator';
import { GlassCard } from './components/ui/GlassCard';
import { GlassButton } from './components/ui/GlassButton';
import { GlassInput } from './components/ui/GlassInput';
import { 
  ShieldCheck, ArrowRight, TrendingUp, Wallet, ChevronRight, 
  Users, MoreHorizontal, ArrowUpRight, FileText, Cloud, 
  Settings, CreditCard, Lock, Activity, Bell, CheckCircle, 
  Zap, MessageSquare, Calendar, Paperclip, Upload, Check,
  Clock, MoreVertical, Filter, Search, Hash, Tag
} from 'lucide-react';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('components');

  // ==========================================
  // SECTION 1: AUTHENTICATION
  // ==========================================
  
  const splitLogin = (
    <div className="flex w-full h-[450px] overflow-hidden rounded-2xl border border-white/[0.08] bg-[#171717]/60 backdrop-blur-xl shadow-2xl">
      <div className="hidden md:flex w-5/12 bg-gradient-to-br from-blue-600/20 to-purple-600/20 items-center justify-center p-8 relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
         <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60"></div>
         <div className="relative z-10 text-left">
            <div className="h-10 w-10 bg-white rounded-xl mb-6 flex items-center justify-center shadow-lg shadow-blue-500/20">
               <div className="h-5 w-5 bg-black rounded-md" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 leading-tight">Automate your<br/>workflow today.</h3>
            <p className="text-blue-100/70 text-sm leading-relaxed">Join 10,000+ forward-thinking companies managing their business with Alher Tech.</p>
         </div>
      </div>
      <div className="w-full md:w-7/12 p-8 md:p-10 flex flex-col justify-center bg-[#0f0f0f]/50">
         <div className="max-w-sm mx-auto w-full">
            <h4 className="text-xl font-semibold text-white mb-1">Create Account</h4>
            <p className="text-sm text-neutral-500 mb-8">Enter your details to get started.</p>
            <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                   <GlassInput placeholder="First Name" className="bg-black/20" />
                   <GlassInput placeholder="Last Name" className="bg-black/20" />
                </div>
                <GlassInput type="email" placeholder="work@company.com" className="bg-black/20" />
                <GlassInput type="password" placeholder="Password" className="bg-black/20" />
                
                <GlassButton className="w-full mt-2 group bg-white text-black hover:bg-neutral-200">
                   Sign Up <ArrowRight className="ml-2 h-4 w-4 opacity-50 group-hover:translate-x-1 transition-transform" />
                </GlassButton>
            </div>
            <p className="text-center text-xs text-neutral-500 mt-6">
               Already have an account? <a href="#" className="text-white hover:underline">Log in</a>
            </p>
         </div>
      </div>
    </div>
  );

  const splitLoginCode = `
<div className="flex w-full h-[450px] overflow-hidden rounded-2xl border border-white/[0.08] bg-[#171717]/60 backdrop-blur-xl shadow-2xl">
  {/* Left Panel (Visual) */}
  <div className="hidden md:flex w-5/12 bg-gradient-to-br from-blue-600/20 to-purple-600/20 relative overflow-hidden p-8 items-center">
     <div className="relative z-10">
        <h3 className="text-2xl font-bold text-white mb-2">Automate your<br/>workflow today.</h3>
        <p className="text-blue-100/70 text-sm">Join 10,000+ companies with Alher Tech.</p>
     </div>
  </div>
  
  {/* Right Panel (Form) */}
  <div className="w-full md:w-7/12 p-10 flex flex-col justify-center bg-[#0f0f0f]/50">
     <h4 className="text-xl font-semibold text-white mb-1">Create Account</h4>
     <p className="text-sm text-neutral-500 mb-8">Enter your details.</p>
     <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
           <input className="h-11 rounded-xl border border-white/10 bg-black/20 px-4 text-sm text-white" placeholder="First Name" />
           <input className="h-11 rounded-xl border border-white/10 bg-black/20 px-4 text-sm text-white" placeholder="Last Name" />
        </div>
        <input className="w-full h-11 rounded-xl border border-white/10 bg-black/20 px-4 text-sm text-white" type="email" placeholder="work@company.com" />
        <button className="w-full h-11 rounded-full bg-white text-black font-medium text-sm hover:bg-neutral-200 transition-colors">
           Sign Up
        </button>
     </div>
  </div>
</div>
`;

  // ==========================================
  // SECTION 2: ANALYTICS & DASHBOARD
  // ==========================================

  const analyticsCard = (
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

  const analyticsCode = `
<div className="rounded-2xl border border-white/[0.08] bg-[#171717]/80 backdrop-blur-xl p-6">
  {/* Header */}
  <div className="flex items-center justify-between mb-8">
     <div>
       <h3 className="font-semibold text-white text-lg">Revenue Growth</h3>
       <div className="flex items-center gap-2 mt-1">
          <p className="text-2xl font-bold text-white">$124,500</p>
          <span className="text-xs font-medium text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full">+12.5%</span>
       </div>
     </div>
     {/* Toggle */}
     <div className="flex bg-white/[0.05] p-0.5 rounded-lg border border-white/[0.08]">
       <button className="px-3 py-1 text-xs font-medium rounded-md bg-white/[0.1] text-white">7D</button>
       <button className="px-3 py-1 text-xs font-medium rounded-md text-neutral-500 hover:text-neutral-300">30D</button>
     </div>
  </div>

  {/* Chart Visual */}
  <div className="flex items-end justify-between h-40 gap-3">
     {[45, 70, 50, 85, 60, 75, 95, 65, 80, 55, 90, 100].map((h, i) => (
        <div key={i} className="w-full group relative flex flex-col justify-end h-full">
           <div className="w-full bg-white/[0.05] rounded-sm group-hover:bg-blue-500 transition-all duration-300" style={{ height: \`\${h}%\` }} />
        </div>
     ))}
  </div>
</div>
`;

  // ==========================================
  // SECTION 3: CRM / DATA MANAGEMENT
  // ==========================================

  const teamTable = (
    <GlassCard className="w-full overflow-hidden bg-[#171717]/60" noPadding>
      <div className="px-6 py-5 border-b border-white/[0.08] flex justify-between items-center bg-white/[0.01]">
        <div>
           <h3 className="font-medium text-white text-base">Team Members</h3>
           <p className="text-xs text-neutral-500 mt-0.5">Manage access and roles.</p>
        </div>
        <GlassButton size="sm" className="h-9 text-xs bg-white text-black hover:bg-neutral-200 border-0">
           <Users className="h-3.5 w-3.5 mr-2" /> Add Member
        </GlassButton>
      </div>
      <div className="w-full">
        <div className="grid grid-cols-12 gap-4 px-6 py-3 bg-white/[0.02] text-[11px] font-semibold text-neutral-500 uppercase tracking-wider border-b border-white/[0.05]">
           <div className="col-span-5">User</div>
           <div className="col-span-3">Role</div>
           <div className="col-span-2">Status</div>
           <div className="col-span-2 text-right">Actions</div>
        </div>
        {[
          { name: 'Alex Morgan', email: 'alex@alher.tech', role: 'Product Lead', status: 'Active', img: 'https://i.pravatar.cc/150?u=1' },
          { name: 'Sarah Connor', email: 'sarah@alher.tech', role: 'DevOps Engineer', status: 'Offline', img: 'https://i.pravatar.cc/150?u=2' },
          { name: 'James Smith', email: 'james@alher.tech', role: 'UI Designer', status: 'Active', img: 'https://i.pravatar.cc/150?u=3' },
          { name: 'Elena Fisher', email: 'elena@alher.tech', role: 'Marketing', status: 'Active', img: 'https://i.pravatar.cc/150?u=4' }
        ].map((user, i) => (
          <div key={i} className="grid grid-cols-12 gap-4 items-center px-6 py-4 border-b border-white/[0.04] last:border-0 hover:bg-white/[0.03] transition-colors group">
             <div className="col-span-5 flex items-center gap-3">
                <img src={user.img} alt={user.name} className="h-9 w-9 rounded-full border border-white/10 object-cover" />
                <div>
                   <p className="text-sm font-medium text-white">{user.name}</p>
                   <p className="text-xs text-neutral-500">{user.email}</p>
                </div>
             </div>
             <div className="col-span-3">
                <span className="text-xs text-neutral-300 bg-white/[0.05] px-2 py-1 rounded-md border border-white/[0.05]">
                   {user.role}
                </span>
             </div>
             <div className="col-span-2">
                <div className="flex items-center gap-1.5">
                   <div className={`h-1.5 w-1.5 rounded-full ${user.status === 'Active' ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]' : 'bg-neutral-500'}`} />
                   <span className={`text-xs ${user.status === 'Active' ? 'text-white' : 'text-neutral-500'}`}>{user.status}</span>
                </div>
             </div>
             <div className="col-span-2 flex justify-end">
                <button className="p-1.5 rounded-md text-neutral-500 hover:text-white hover:bg-white/10 transition-colors">
                   <MoreHorizontal className="h-4 w-4" />
                </button>
             </div>
          </div>
        ))}
      </div>
    </GlassCard>
  );

  const teamTableCode = `
<div className="rounded-2xl border border-white/[0.08] bg-[#171717]/60 backdrop-blur-xl overflow-hidden">
  {/* Table Header Actions */}
  <div className="px-6 py-5 border-b border-white/[0.08] flex justify-between items-center bg-white/[0.01]">
    <div>
       <h3 className="font-medium text-white text-base">Team Members</h3>
       <p className="text-xs text-neutral-500 mt-0.5">Manage access and roles.</p>
    </div>
    <button className="h-9 px-4 rounded-full text-xs font-medium bg-white text-black hover:bg-neutral-200 transition-colors flex items-center">
       <Users className="h-3.5 w-3.5 mr-2" /> Add Member
    </button>
  </div>

  {/* List Header */}
  <div className="grid grid-cols-12 gap-4 px-6 py-3 bg-white/[0.02] text-[11px] font-semibold text-neutral-500 uppercase tracking-wider border-b border-white/[0.05]">
     <div className="col-span-5">User</div>
     <div className="col-span-3">Role</div>
     <div className="col-span-2">Status</div>
     <div className="col-span-2 text-right">Actions</div>
  </div>

  {/* Rows */}
  {[1, 2, 3].map((i) => (
      <div key={i} className="grid grid-cols-12 gap-4 items-center px-6 py-4 border-b border-white/[0.04] hover:bg-white/[0.03] transition-colors">
         <div className="col-span-5 flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-neutral-800 border border-white/10" />
            <div>
               <p className="text-sm font-medium text-white">Alex Morgan</p>
               <p className="text-xs text-neutral-500">alex@alher.tech</p>
            </div>
         </div>
         <div className="col-span-3">
            <span className="text-xs text-neutral-300 bg-white/[0.05] px-2 py-1 rounded-md">Product Lead</span>
         </div>
         <div className="col-span-2">
            <div className="flex items-center gap-1.5">
               <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
               <span className="text-xs text-white">Active</span>
            </div>
         </div>
         <div className="col-span-2 flex justify-end">
            <button className="p-1.5 text-neutral-500 hover:text-white"><MoreHorizontal className="h-4 w-4" /></button>
         </div>
      </div>
  ))}
</div>
`;

  // ==========================================
  // SECTION 4: UTILITY & SETTINGS
  // ==========================================

  const storageWidget = (
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

  const storageCode = `
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {/* Storage Widget */}
  <div className="rounded-2xl border border-white/[0.08] bg-gradient-to-br from-[#171717] to-[#0a0a0a] p-6 relative overflow-hidden">
      <div className="relative z-10">
         <div className="h-10 w-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 border border-blue-500/20">
            <Cloud className="h-5 w-5 text-blue-400" />
         </div>
         <h3 className="font-semibold text-white text-lg">Cloud Storage</h3>
         <p className="text-sm text-neutral-400 mb-6">80% used.</p>
         <div className="h-2 w-full bg-white/[0.05] rounded-full overflow-hidden mb-8">
            <div className="h-full w-[80%] bg-blue-500 rounded-full"></div>
         </div>
         <button className="w-full h-10 rounded-full border border-white/[0.1] text-white text-sm hover:bg-white/[0.05]">Manage Plan</button>
      </div>
  </div>

  {/* Card Widget */}
  <div className="rounded-2xl border border-white/[0.08] bg-[#171717]/60 backdrop-blur-xl p-6 flex flex-col justify-between">
      <div>
        <div className="h-10 w-10 rounded-lg bg-purple-500/10 flex items-center justify-center border border-purple-500/20 mb-4">
           <CreditCard className="h-5 w-5 text-purple-400" />
        </div>
        <h3 className="font-semibold text-white text-lg">Visa **** 4242</h3>
        <p className="text-sm text-neutral-500">Expiry 12/2025</p>
      </div>
      <div className="mt-6 pt-6 border-t border-white/[0.05] flex justify-between text-sm">
         <span className="text-neutral-400">Amount</span>
         <span className="text-white font-medium">$299.00</span>
      </div>
  </div>
</div>
`;

  // ==========================================
  // SECTION 5: ACTIVITY FEED
  // ==========================================
  
  const activityFeed = (
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

  const activityFeedCode = `
<div className="rounded-2xl border border-white/[0.08] bg-[#0f0f0f]/80 backdrop-blur-xl p-6 relative">
  <div className="flex justify-between mb-6">
      <h3 className="font-semibold text-white">Recent Activity</h3>
      <button className="text-neutral-400 hover:text-white"><Filter className="h-4 w-4"/></button>
  </div>
  <div className="relative space-y-6 pl-2">
     {/* Timeline Line */}
     <div className="absolute left-[19px] top-3 bottom-3 w-[1px] bg-white/[0.1]"></div>
     
     {/* Items */}
     {[
        { title: "New project", icon: Zap, bg: "bg-yellow-400/10", color: "text-yellow-400" },
        { title: "Meeting", icon: Users, bg: "bg-blue-400/10", color: "text-blue-400" }
     ].map((item, i) => (
        <div key={i} className="relative flex items-start gap-4 z-10">
           <div className={\`h-9 w-9 rounded-full border border-white/[0.08] \${item.bg} flex items-center justify-center\`}>
              <item.icon className={\`h-4 w-4 \${item.color}\`} />
           </div>
           <div>
              <h4 className="text-sm font-medium text-white">{item.title}</h4>
              <p className="text-xs text-neutral-500">Description here...</p>
           </div>
        </div>
     ))}
  </div>
</div>
`;

  // ==========================================
  // SECTION 6: PRICING CARDS
  // ==========================================

  const pricingCards = (
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

  const pricingCode = `
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
   {/* Standard Card */}
   <div className="rounded-2xl border border-white/[0.08] bg-[#171717]/60 p-6 flex flex-col">
      <h3 className="text-lg font-medium text-white">Starter</h3>
      <div className="my-6"><span className="text-3xl font-bold text-white">$0</span></div>
      <button className="w-full h-10 rounded-full border border-white/10 text-white hover:bg-white/5">Get Started</button>
   </div>

   {/* Highlighted Card */}
   <div className="rounded-2xl border border-white/[0.15] bg-white/[0.05] p-6 flex flex-col relative">
      <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl">POPULAR</div>
      <h3 className="text-lg font-medium text-white">Pro</h3>
      <div className="my-6"><span className="text-3xl font-bold text-white">$29</span></div>
      <button className="w-full h-10 rounded-full bg-blue-600 text-white hover:bg-blue-500 border-0">Upgrade</button>
   </div>
</div>
  `;

  // ==========================================
  // SECTION 7: KANBAN TASK
  // ==========================================
  
  const taskCard = (
     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <GlassCard className="hover:border-white/[0.15] group cursor-pointer">
           <div className="flex justify-between items-start mb-3">
              <span className="text-[10px] font-semibold text-neutral-400 uppercase tracking-wider bg-white/[0.05] px-2 py-1 rounded border border-white/[0.05]">Design System</span>
              <button className="text-neutral-500 hover:text-white"><MoreHorizontal className="h-4 w-4" /></button>
           </div>
           <h4 className="text-base font-medium text-white mb-2 group-hover:text-blue-400 transition-colors">Refactor Glass Components</h4>
           <p className="text-sm text-neutral-500 mb-4 line-clamp-2">Update all border opacities and add new blur values to match the V2 design language specification.</p>
           
           <div className="flex items-center justify-between mt-auto">
              <div className="flex -space-x-2">
                 {[1, 2].map(i => (
                    <img key={i} src={`https://i.pravatar.cc/150?u=${i+10}`} className="h-6 w-6 rounded-full border border-[#171717]" alt="Avatar" />
                 ))}
                 <div className="h-6 w-6 rounded-full bg-[#2a2a2a] border border-[#171717] flex items-center justify-center text-[9px] text-white font-medium">+2</div>
              </div>
              <div className="flex items-center gap-3">
                 <div className="flex items-center gap-1 text-neutral-500 text-xs">
                    <MessageSquare className="h-3 w-3" /> 4
                 </div>
                 <div className="flex items-center gap-1 text-neutral-500 text-xs">
                    <Paperclip className="h-3 w-3" /> 2
                 </div>
              </div>
           </div>
           <div className="w-full bg-white/[0.05] h-1 mt-4 rounded-full overflow-hidden">
              <div className="bg-blue-500 w-2/3 h-full rounded-full"></div>
           </div>
        </GlassCard>

        <GlassCard className="flex flex-col justify-center items-center border-dashed border-white/[0.1] bg-transparent hover:bg-white/[0.02] cursor-pointer">
            <div className="h-12 w-12 rounded-full bg-white/[0.05] flex items-center justify-center mb-3 border border-white/[0.05]">
               <Upload className="h-5 w-5 text-neutral-400" />
            </div>
            <p className="text-sm font-medium text-white">Upload Assets</p>
            <p className="text-xs text-neutral-500 mt-1">Drag & drop or click to browse</p>
        </GlassCard>
     </div>
  );

  const taskCardCode = `
{/* Task Card */}
<div className="rounded-2xl border border-white/[0.08] bg-[#171717]/60 p-6 hover:border-white/[0.15] transition-colors">
   <div className="flex justify-between mb-3">
      <span className="text-[10px] bg-white/5 px-2 py-1 rounded text-neutral-400">TAG</span>
      <MoreHorizontal className="h-4 w-4 text-neutral-500" />
   </div>
   <h4 className="text-white font-medium mb-2">Task Title</h4>
   <p className="text-sm text-neutral-500 mb-4">Description text...</p>
   <div className="flex justify-between items-center">
      <div className="flex -space-x-2">
         <img src="/avatar.jpg" className="h-6 w-6 rounded-full border border-black" />
      </div>
      <div className="h-1 w-20 bg-white/5 rounded-full overflow-hidden">
         <div className="h-full w-2/3 bg-blue-500"></div>
      </div>
   </div>
</div>

{/* Upload Zone */}
<div className="rounded-2xl border border-dashed border-white/[0.1] p-6 flex flex-col items-center justify-center">
   <Upload className="h-5 w-5 text-neutral-400 mb-3" />
   <p className="text-sm text-white">Upload Assets</p>
</div>
  `;

  return (
    <div className="min-h-screen bg-[#0a0a0a] font-sans text-white selection:bg-blue-500/30">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full opacity-40 mix-blend-screen"></div>
         <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-purple-600/5 blur-[120px] rounded-full opacity-30 mix-blend-screen"></div>
      </div>

      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

      <main className="relative z-10 container mx-auto px-4 sm:px-6 pt-32 pb-20">
        {activeSection === 'components' ? (
          <div className="space-y-24 animate-in fade-in duration-700 slide-in-from-bottom-4">
            
            {/* Hero Section */}
            <div className="text-center max-w-3xl mx-auto space-y-6 mb-16">
              <div className="inline-flex items-center rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-neutral-300 backdrop-blur-xl">
                Alher Tech UI v2.0
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1] bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50">
                Interface Design<br/>for the Future.
              </h1>
              
              <p className="text-lg md:text-xl text-neutral-400 font-light leading-relaxed max-w-xl mx-auto">
                A collection of meticulously crafted, glass-morphic components for modern SaaS applications.
              </p>
            </div>

            {/* Section: Authentication */}
            <div className="space-y-8">
                <div className="flex items-center gap-3 mb-6 px-2">
                   <div className="h-8 w-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                      <Lock className="h-4 w-4 text-neutral-300" />
                   </div>
                   <h2 className="text-2xl font-semibold text-white tracking-tight">Authentication</h2>
                </div>
                <ComponentShowcase 
                  title="Split Screen Auth" 
                  description="Modern sign-up with visual storytelling."
                  component={splitLogin}
                  codeSnippet={splitLoginCode}
                />
            </div>

             {/* Section: Dashboards */}
             <div className="space-y-8">
                <div className="flex items-center gap-3 mb-6 px-2">
                   <div className="h-8 w-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                      <Activity className="h-4 w-4 text-neutral-300" />
                   </div>
                   <h2 className="text-2xl font-semibold text-white tracking-tight">Analytics & Dashboards</h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                   <div className="lg:col-span-2">
                      <ComponentShowcase 
                        title="Revenue Growth" 
                        description="Interactive bar chart visualization."
                        component={analyticsCard}
                        codeSnippet={analyticsCode}
                      />
                   </div>
                   <div className="lg:col-span-1 flex flex-col gap-6">
                      {/* Activity Feed Added Here */}
                       <ComponentShowcase 
                        title="Activity Feed" 
                        description="Timeline for recent events."
                        component={activityFeed}
                        codeSnippet={activityFeedCode}
                      />
                   </div>
                </div>
            </div>

            {/* Section: CRM Tables */}
            <div className="space-y-8">
                <div className="flex items-center gap-3 mb-6 px-2">
                   <div className="h-8 w-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                      <Users className="h-4 w-4 text-neutral-300" />
                   </div>
                   <h2 className="text-2xl font-semibold text-white tracking-tight">Data Management</h2>
                </div>
                <ComponentShowcase 
                  title="Team Management" 
                  description="High-density data table with status indicators."
                  component={teamTable}
                  codeSnippet={teamTableCode}
                />
                <div className="grid grid-cols-1 gap-6">
                    <ComponentShowcase 
                      title="Task Cards & Upload" 
                      description="Project management and file utility components."
                      component={taskCard}
                      codeSnippet={taskCardCode}
                    />
                </div>
            </div>

            {/* Section: Settings & Utility */}
            <div className="space-y-8">
                <div className="flex items-center gap-3 mb-6 px-2">
                   <div className="h-8 w-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                      <Settings className="h-4 w-4 text-neutral-300" />
                   </div>
                   <h2 className="text-2xl font-semibold text-white tracking-tight">Settings & Utility</h2>
                </div>
                
                <ComponentShowcase 
                   title="Pricing Models"
                   description="Tiered pricing cards with popular choice highlight."
                   component={pricingCards}
                   codeSnippet={pricingCode}
                />

                <ComponentShowcase 
                  title="Subscription & Storage" 
                  description="Complex widget layouts for user settings."
                  component={storageWidget}
                  codeSnippet={storageCode}
                />
            </div>
            
          </div>
        ) : (
          <Generator />
        )}
      </main>

      <footer className="border-t border-white/[0.05] py-12 mt-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
             <div className="h-6 w-6 bg-white rounded-md flex items-center justify-center">
                <div className="h-3 w-3 bg-black rounded-sm" />
             </div>
             <p className="text-neutral-500 text-sm font-medium">Alher Tech UI © 2024</p>
          </div>
          <div className="flex gap-8 text-sm text-neutral-500 font-medium">
            <a href="#" className="hover:text-white transition-colors">Documentation</a>
            <a href="#" className="hover:text-white transition-colors">License</a>
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;