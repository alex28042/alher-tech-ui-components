
import React from 'react';
import { Users, MoreHorizontal, MessageSquare, Paperclip, Upload } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import { GlassButton } from '../ui/GlassButton';

export const TeamTableExample = () => (
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

export const TaskCardsExample = () => (
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
