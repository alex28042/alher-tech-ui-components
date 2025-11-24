import React, { useState } from 'react';
import { GlassCard } from '../ui/GlassCard';
import { GlassInput } from '../ui/GlassInput';
import { GlassButton } from '../ui/GlassButton';

interface LoginScreenProps {
  onLogin: (user: string, pass: string) => void;
  authError: string;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin, authError }) => {
  const [username, setUsername] = useState(() => localStorage.getItem('alher_auth') ? 'alhertech' : '');
  const [password, setPassword] = useState(() => localStorage.getItem('alher_auth') ? '1234' : '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] font-sans text-white flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full opacity-30 mix-blend-screen animate-pulse"></div>
      </div>

      <GlassCard className="w-full max-w-sm p-8 relative z-10 border-white/10 bg-[#171717]/80 backdrop-blur-2xl shadow-2xl">
        <div className="flex flex-col items-center mb-8">
          <div className="h-12 w-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(255,255,255,0.1)] border border-white">
            <div className="h-6 w-6 bg-black rounded-md" />
          </div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Alher Tech UI</h1>
          <p className="text-neutral-500 text-xs uppercase tracking-widest mt-2 font-medium">System Access</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-[10px] font-semibold text-neutral-400 ml-1 uppercase">Usuario</label>
            <GlassInput
              placeholder="Ingresa tu usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-black/20 border-white/5 focus:bg-black/40 h-10 text-sm"
              autoFocus
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-[10px] font-semibold text-neutral-400 ml-1 uppercase">Contraseña</label>
            <GlassInput
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-black/20 border-white/5 focus:bg-black/40 h-10 text-sm"
            />
          </div>

          {authError && (
            <div className="text-red-400 text-xs text-center font-medium bg-red-500/10 py-2.5 rounded-lg border border-red-500/20 animate-in fade-in slide-in-from-top-1">
              {authError}
            </div>
          )}

          <GlassButton type="submit" className="w-full bg-white text-black hover:bg-neutral-200 mt-2 font-semibold shadow-lg shadow-white/5 h-10">
            Iniciar Sesión
          </GlassButton>
        </form>

        <div className="mt-8 text-center">
          <p className="text-[10px] text-neutral-700 font-mono">SECURED BY ALHER TECH</p>
        </div>
      </GlassCard>
    </div>
  );
};