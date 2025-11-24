
import React from 'react';
import { ArrowRight, Github, Globe, ShieldCheck } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import { GlassButton } from '../ui/GlassButton';
import { GlassInput } from '../ui/GlassInput';

export const SplitLoginExample = () => (
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

export const CardLoginExample = () => (
   <GlassCard className="w-full max-w-sm mx-auto p-8 bg-[#171717]/80 shadow-2xl">
      <div className="text-center mb-8">
         <div className="h-12 w-12 bg-white rounded-xl mx-auto flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            <div className="h-6 w-6 bg-black rounded-md" />
         </div>
         <h3 className="text-xl font-bold text-white">Welcome back</h3>
         <p className="text-sm text-neutral-500 mt-1">Please enter your details to sign in.</p>
      </div>

      <div className="space-y-4">
         <div className="grid grid-cols-2 gap-3 mb-6">
            <button className="flex items-center justify-center gap-2 h-10 rounded-lg bg-white/[0.05] border border-white/10 text-sm text-white hover:bg-white/10 transition-colors">
               <Github className="h-4 w-4" /> GitHub
            </button>
            <button className="flex items-center justify-center gap-2 h-10 rounded-lg bg-white/[0.05] border border-white/10 text-sm text-white hover:bg-white/10 transition-colors">
               <Globe className="h-4 w-4 text-blue-400" /> Google
            </button>
         </div>
         
         <div className="relative flex items-center justify-center mb-6">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/[0.08]"></div></div>
            <div className="relative bg-[#171717] px-2 text-[10px] uppercase text-neutral-500 font-medium">Or continue with</div>
         </div>

         <div className="space-y-1.5">
            <label className="text-[10px] font-semibold text-neutral-400 uppercase ml-1">Email</label>
            <GlassInput placeholder="name@example.com" />
         </div>
         <div className="space-y-1.5">
            <label className="text-[10px] font-semibold text-neutral-400 uppercase ml-1">Password</label>
            <GlassInput type="password" placeholder="••••••••" />
         </div>

         <div className="flex items-center justify-between text-xs">
            <label className="flex items-center gap-2 cursor-pointer text-neutral-400 hover:text-white">
               <input type="checkbox" className="rounded border-white/20 bg-white/5 text-blue-500 focus:ring-offset-0 focus:ring-0" />
               Remember me
            </label>
            <a href="#" className="text-blue-400 hover:text-blue-300">Forgot password?</a>
         </div>

         <GlassButton className="w-full bg-white text-black hover:bg-neutral-200 mt-2">Sign In</GlassButton>
      </div>
   </GlassCard>
);

export const OtpVerificationExample = () => (
   <GlassCard className="w-full max-w-sm mx-auto p-8 text-center bg-[#171717]/80">
      <div className="h-14 w-14 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.15)]">
         <ShieldCheck className="h-7 w-7 text-blue-400" />
      </div>
      <h3 className="text-lg font-bold text-white mb-2">Two-Step Verification</h3>
      <p className="text-sm text-neutral-400 mb-8">
         We sent a verification code to your mobile. Enter the code from the mobile in the field below.
      </p>
      
      <div className="flex gap-2 justify-center mb-8">
         {[1, 2, 3, 4, 5, 6].map((i) => (
            <input 
               key={i}
               type="text" 
               maxLength={1}
               className="w-10 h-12 rounded-lg bg-white/[0.03] border border-white/10 text-center text-lg font-bold text-white focus:border-blue-500/50 focus:bg-blue-500/5 focus:outline-none transition-all"
               defaultValue={i === 1 ? '4' : ''}
            />
         ))}
      </div>

      <GlassButton className="w-full bg-blue-600 hover:bg-blue-500 text-white border-0 shadow-lg shadow-blue-500/20">
         Verify My Account
      </GlassButton>
      
      <p className="text-xs text-neutral-500 mt-6">
         Didn't receive the code? <button className="text-blue-400 hover:text-blue-300 font-medium">Resend</button>
      </p>
   </GlassCard>
);
