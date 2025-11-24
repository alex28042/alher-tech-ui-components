
import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { X, CheckCircle, AlertCircle, Info, Loader2, Undo2, Bell, Layers } from 'lucide-react';

// Types
type ToastType = 'success' | 'error' | 'info' | 'loading' | 'default';
export type ToastPosition = 'top-right' | 'top-center' | 'bottom-right' | 'bottom-center';
export type ToastVariant = 'glass' | 'solid' | 'minimal' | 'gradient';

interface Toast {
  id: string;
  type: ToastType;
  title: string;
  description?: string;
  duration?: number;
  variant?: ToastVariant;
  action?: {
    label: string;
    onClick: () => void;
  };
}

interface ToastContextType {
  toast: (props: Omit<Toast, 'id'>) => void;
  dismiss: (id: string) => void;
  setPosition: (pos: ToastPosition) => void;
  position: ToastPosition;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

const MAX_TOASTS = 5;

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [position, setPosition] = useState<ToastPosition>('bottom-right');

  const toast = useCallback(({ type = 'default', duration = 4000, variant = 'glass', ...props }: Omit<Toast, 'id'>) => {
    const id = Math.random().toString(36).substring(2, 9);
    
    setToasts((prev) => {
      // Keep only the last (MAX_TOASTS - 1)
      const current = prev.length >= MAX_TOASTS ? prev.slice(prev.length - (MAX_TOASTS - 1)) : prev;
      return [...current, { id, type, duration, variant, ...props }];
    });

    if (duration > 0) {
      setTimeout(() => {
        dismiss(id);
      }, duration);
    }
  }, []);

  const dismiss = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  // Flex direction logic for stacking:
  // Top: Newest items at the 'start' of the container (visually top), so we use flex-col-reverse.
  // Bottom: Newest items at the 'end' of the container (visually bottom), so we use flex-col.
  const positionClasses = {
    'top-right': 'top-6 right-6 flex-col-reverse items-end',
    'top-center': 'top-6 left-1/2 -translate-x-1/2 flex-col-reverse items-center',
    'bottom-right': 'bottom-6 right-6 flex-col items-end',
    'bottom-center': 'bottom-6 left-1/2 -translate-x-1/2 flex-col items-center',
  };

  return (
    <ToastContext.Provider value={{ toast, dismiss, setPosition, position }}>
      {children}
      <div className={`fixed z-[100] flex gap-3 pointer-events-none w-full max-w-md p-4 transition-all duration-300 ${positionClasses[position]}`}>
        {toasts.map((t) => (
          <ToastItem key={t.id} toast={t} onDismiss={() => dismiss(t.id)} position={position} />
        ))}
      </div>
    </ToastContext.Provider>
  );
};

const ToastItem: React.FC<{ toast: Toast; onDismiss: () => void; position: ToastPosition }> = ({ toast, onDismiss, position }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Icons
  const icons = {
    success: <CheckCircle className="h-5 w-5" />,
    error: <AlertCircle className="h-5 w-5" />,
    info: <Info className="h-5 w-5" />,
    loading: <Loader2 className="h-5 w-5 animate-spin" />,
    default: <Bell className="h-5 w-5" />
  };

  // Styles
  const getStyles = () => {
    const base = "backdrop-blur-xl shadow-2xl pointer-events-auto flex gap-3 transform hover:scale-[1.02] transition-all";
    const shapes = toast.variant === 'minimal' ? 'rounded-lg p-3 items-center' : 'rounded-2xl p-4 items-start';
    
    if (toast.variant === 'solid') {
      const colors = {
        success: 'bg-green-600 text-white border border-green-500 shadow-green-900/20',
        error: 'bg-red-600 text-white border border-red-500 shadow-red-900/20',
        info: 'bg-blue-600 text-white border border-blue-500 shadow-blue-900/20',
        loading: 'bg-neutral-800 text-white border border-neutral-700',
        default: 'bg-neutral-900 text-white border border-neutral-800'
      };
      return `${base} ${shapes} ${colors[toast.type]}`;
    }

    if (toast.variant === 'gradient') {
        const colors = {
            success: 'bg-[#0a0a0a]/90 text-green-400 border-l-4 border-l-green-500 border-y border-r border-white/10 shadow-green-900/10',
            error: 'bg-[#0a0a0a]/90 text-red-400 border-l-4 border-l-red-500 border-y border-r border-white/10 shadow-red-900/10',
            info: 'bg-[#0a0a0a]/90 text-blue-400 border-l-4 border-l-blue-500 border-y border-r border-white/10 shadow-blue-900/10',
            loading: 'bg-[#0a0a0a]/90 text-neutral-300 border-l-4 border-l-neutral-500 border-y border-r border-white/10',
            default: 'bg-[#0a0a0a]/90 text-white border-l-4 border-l-white border-y border-r border-white/10'
        };
        return `${base} ${shapes} ${colors[toast.type]}`;
    }

    // Default Glass
    const colors = {
      success: 'bg-green-500/10 border-green-500/20 text-green-400 shadow-green-900/5',
      error: 'bg-red-500/10 border-red-500/20 text-red-400 shadow-red-900/5',
      info: 'bg-blue-500/10 border-blue-500/20 text-blue-400 shadow-blue-900/5',
      loading: 'bg-[#171717]/80 border-white/10 text-neutral-300',
      default: 'bg-[#171717]/80 border-white/10 text-white'
    };
    return `${base} ${shapes} border ${colors[toast.type]}`;
  };

  // Dynamic Animations based on position
  const getAnimations = () => {
    // We use a custom cubic-bezier for a "Spring/Pop" effect (Back Out)
    // cubic-bezier(0.34, 1.56, 0.64, 1) -> Goes past 100% then settles back.
    const springTransition = "duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]";
    
    // Zoom-in-75 means it starts at 75% scale (smaller) and grows to 100%.
    // Slide-in values ensure movement direction matches position.
    
    if (position.includes('bottom')) {
        return `animate-in fade-in zoom-in-75 slide-in-from-bottom-8 ${springTransition}`;
    }
    if (position.includes('top')) {
        return `animate-in fade-in zoom-in-75 slide-in-from-top-8 ${springTransition}`;
    }
    return `animate-in fade-in zoom-in-75 ${springTransition}`;
  };

  return (
    <div className={`${getStyles()} ${getAnimations()} w-full max-w-[350px] md:w-80`}>
      <div className="shrink-0 pt-0.5 opacity-90">{icons[toast.type]}</div>
      <div className="flex-1 min-w-0">
        <h4 className={`text-sm font-semibold leading-tight ${toast.variant === 'minimal' ? '' : 'mb-1'}`}>
          {toast.title}
        </h4>
        {toast.description && toast.variant !== 'minimal' && (
          <p className="text-xs opacity-80 leading-relaxed">{toast.description}</p>
        )}
        
        {toast.action && (
            <button 
              onClick={toast.action.onClick}
              className={`
                mt-2 text-xs font-medium px-2 py-1.5 rounded-md
                ${toast.variant === 'solid' ? 'bg-white/20 hover:bg-white/30 text-white' : 'bg-white/10 hover:bg-white/15 text-white'}
                transition-colors flex items-center gap-1.5 w-fit
              `}
            >
              <Undo2 className="h-3 w-3" /> {toast.action.label}
            </button>
        )}
      </div>
      <button onClick={onDismiss} className="shrink-0 opacity-50 hover:opacity-100 transition-opacity p-1 group">
        <X className="h-4 w-4 group-hover:scale-110 transition-transform" />
      </button>
    </div>
  );
};
