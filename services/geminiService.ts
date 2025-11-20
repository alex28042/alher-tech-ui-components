import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const COMPONENT_CONTEXT = `
  **Librería de Componentes Disponible (Alher Tech UI):**
  
  1. <GlassCard>
     - Props: { children, className?, hoverEffect?: boolean, noPadding?: boolean }
     - Uso: Contenedor principal. Usa 'noPadding' si vas a poner una tabla o lista borde a borde.
  
  2. <GlassButton>
     - Props: { children, variant?: 'primary'|'secondary'|'ghost'|'outline', size?: 'sm'|'md'|'lg', isLoading?: boolean, ...props }
     - Uso: Botones de acción. 'primary' es blanco, 'secondary' es glass.

  3. <GlassInput>
     - Props: { className?, ...props }
     - Uso: Inputs de formulario estilizados con glassmorphism.

  **Iconos:**
  - Usa 'lucide-react'. Importa SOLO los iconos que uses.
`;

export const generateGlassComponent = async (prompt: string): Promise<string> => {
  try {
    const fullPrompt = `
      Actúa como un Ingeniero Senior Frontend experto en Next.js, Tailwind CSS y el sistema de diseño "Alher Tech UI".
      
      Tu tarea es generar un componente de React (.tsx) funcional basado en: "${prompt}".
      
      ${COMPONENT_CONTEXT}

      **Reglas Estrictas:**
      1. **Importaciones:** 
         - \`import React, { useState, useEffect } from 'react';\`
         - \`import { GlassCard } from './ui/GlassCard';\`
         - \`import { GlassButton } from './ui/GlassButton';\`
         - \`import { GlassInput } from './ui/GlassInput';\`
         - \`import { IconName } from 'lucide-react';\`
      
      2. **Estilo (Revolut/SaaS Dark Mode):**
         - Usa \`bg-[#171717]\` o \`bg-transparent\` con bordes sutiles.
         - Tipografía limpia (clases font-sans por defecto).
         - Usa Tailwind arbitrario para colores exactos si es necesario (ej: \`bg-[#0a0a0a]\`).
      
      3. **Funcionalidad:**
         - El componente debe exportarse por defecto: \`export default function GeneratedComponent() { ... }\`
         - Crea datos falsos realistas dentro del componente si es una tabla o lista.
         - Hazlo interactivo (ej: estados de hover, botones que hacen console.log).

      **Salida:**
      - Devuelve SOLO el código TSX. Sin explicaciones, sin markdown.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: fullPrompt,
    });

    let code = response.text;
    
    // Clean up markdown blocks if present
    code = code.replace(/^```tsx\s*/, '').replace(/^```\s*/, '').replace(/```$/, '');
    
    return code.trim();

  } catch (error) {
    console.error("Error generating component:", error);
    throw new Error("Error en la generación. Intenta de nuevo.");
  }
};