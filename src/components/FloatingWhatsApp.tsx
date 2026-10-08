import { useState } from 'react';
import type { FC } from 'react';
import { personalInfo } from '../data/content';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp: FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = `https://wa.me/${personalInfo.whatsappNumber}?text=${encodeURIComponent(
    personalInfo.whatsappMessage
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-end gap-3 pointer-events-auto">
      {/* Optional dismissible tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 p-3 rounded-2xl bg-slate-900 border border-emerald-500/40 text-slate-200 text-xs shadow-2xl shadow-black/80 animate-bounce">
          <span>¿Tienes dudas? ¡Hablemos por WhatsApp!</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white ml-1 p-0.5"
            aria-label="Cerrar tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-xl shadow-emerald-500/40 transition-all duration-300 transform hover:scale-110 group relative"
        aria-label="Contactar por WhatsApp"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-cyan-400 border-2 border-slate-950 animate-ping" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-cyan-400 border-2 border-slate-950" />
        <MessageCircle className="w-7 h-7 fill-white" />
      </a>
    </div>
  );
};
