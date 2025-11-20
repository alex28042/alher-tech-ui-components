import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react()],
    base: '/alher-tech-ui/', // ESTO ES CRUCIAL: Debe coincidir con el nombre de tu repositorio
    define: {
      // Polyfill para que 'process.env.API_KEY' funcione en Vite
      'process.env.API_KEY': JSON.stringify(env.API_KEY),
      'process.env': env
    },
    build: {
      outDir: 'dist',
    }
  };
});