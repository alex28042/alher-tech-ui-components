import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const COMPONENT_CONTEXT = `
  **Librería de Componentes Disponible (Alher Tech UI):**
  
  1. <GlassCard>
     - Props: { children, className?, hoverEffect?: boolean, noPadding?: boolean }
     - Uso: Contenedor principal. Usa 'noPadding' para tablas o listas borde a borde.
  
  2. <GlassButton>
     - Props: { children, variant?: 'primary'|'secondary'|'ghost'|'outline', size?: 'sm'|'md'|'lg', isLoading?: boolean, ...props }
     - Uso: Botones de acción.
  
  3. <GlassInput>
     - Props: { className?, ...props }
     - Uso: Inputs de formulario.
     
  4. <GlassBadge>
     - Props: { children, variant?: 'success'|'warning'|'error'|'info'|'neutral'|'outline' }
     - Uso: Etiquetas, estados, categorías.

  **Guía de Estilo (Design Tokens):**
  - **Bordes:** border-white/[0.08] (default), border-white/[0.15] (hover/active).
  - **Fondos:** bg-[#171717]/60 (tarjetas), bg-white/[0.03] (inputs/elementos secundarios).
  - **Texto:** text-white (títulos), text-neutral-400 (secundario), text-neutral-500 (meta-info).
  - **Iconos:** Usa 'lucide-react'. Importa SOLO los que uses.

  **Patrones Comunes:**
  - *Listas:* Usa GlassCard con noPadding, y divide items con border-b border-white/[0.05].
  - *Headers de Tarjeta:* Flex container con justify-between, titulo h3 font-medium text-white.
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
         - \`import { GlassBadge } from './ui/GlassBadge';\`
         - \`import { IconName } from 'lucide-react';\`
      
      2. **Estilo (Revolut/SaaS Dark Mode):**
         - Usa Tailwind arbitrario para colores exactos si es necesario (ej: \`bg-[#0a0a0a]\`).
         - Mantén un look minimalista y profesional.
      
      3. **Funcionalidad:**
         - El componente debe exportarse por defecto: \`export default function GeneratedComponent() { ... }\`
         - Crea datos falsos realistas.
         - Hazlo interactivo (hover, clicks).

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