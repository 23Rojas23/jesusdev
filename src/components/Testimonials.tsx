import type { FC } from 'react';
import { testimonialsData } from '../data/content';
import { Star, MessageSquareQuote, CheckCircle2 } from 'lucide-react';

export const Testimonials: FC = () => {
  return (
    <section id="testimonios" className="py-24 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <MessageSquareQuote className="w-3.5 h-3.5 text-cyan-400" />
            Casos de Éxito & Opiniones
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            La confianza de clientes que ya{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              hacen crecer sus ventas
            </span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            La mejor prueba de calidad es la experiencia de quienes confiaron su proyecto digital en mis manos.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((t) => (
            <div
              key={t.id}
              className="rounded-2xl p-7 bg-slate-900/80 border border-slate-800 hover:border-slate-700 flex flex-col justify-between shadow-xl shadow-black/40 transition-all hover:-translate-y-1"
            >
              <div>
                {/* 5 Stars Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Testimonial Quote */}
                <p className="text-slate-300 text-sm leading-relaxed italic mb-6">
                  &ldquo;{t.content}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover border border-indigo-500/30"
                  />
                  <div>
                    <div className="font-bold text-sm text-white flex items-center gap-1.5">
                      <span>{t.name}</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    </div>
                    <div className="text-xs text-slate-400">
                      {t.role} · <span className="text-indigo-400">{t.company}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
