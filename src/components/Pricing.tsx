import type { FC } from 'react';
import { pricingPlans } from '../data/content';
import { Check, X, Sparkles, ArrowRight, Clock, ShieldCheck } from 'lucide-react';

interface PricingProps {
  onSelectPlan: (planName: string) => void;
}

export const Pricing: FC<PricingProps> = ({ onSelectPlan }) => {
  return (
    <section id="precios" className="py-24 bg-slate-900/30 border-y border-slate-800/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            Planes y Paquetes
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Inversión clara,{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              sin costos ocultos
            </span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Elige el paquete que mejor se adapte a tus necesidades actuales. Todos los planes incluyen garantía, diseño responsivo y código 100% propio.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-b from-slate-900 via-slate-900 to-indigo-950/60 border-2 border-indigo-500 shadow-2xl shadow-indigo-950/50 md:-translate-y-3'
                  : 'bg-slate-900/80 border border-slate-800 shadow-xl'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-md shadow-indigo-500/40">
                  Más Recomendado
                </div>
              )}

              <div>
                {/* Plan Title & Description */}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-6 pb-6 border-b border-slate-800">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-black text-white">
                      {plan.price}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      / {plan.period}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-cyan-400 mt-2 font-mono">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{plan.deliveryTime}</span>
                  </div>
                </div>

                {/* Features Checklist */}
                <div className="space-y-3 mb-8">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    Incluye:
                  </span>
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}

                  {plan.nonFeatures && plan.nonFeatures.map((nf, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-500">
                      <X className="w-4 h-4 text-slate-600 shrink-0 mt-0.5" />
                      <span className="line-through">{nf}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 mt-auto">
                <button
                  onClick={() => onSelectPlan(plan.name)}
                  className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-bold text-sm transition-all cursor-pointer ${
                    plan.popular
                      ? 'bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white shadow-lg shadow-indigo-600/30'
                      : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-14 max-w-2xl mx-auto text-center p-4 rounded-2xl bg-slate-900/40 border border-slate-800 flex items-center justify-center gap-3 text-xs sm:text-sm text-slate-400">
          <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
          <span>
            <strong>Garantía de Satisfacción:</strong> No terminamos el proyecto hasta que estés completamente conforme con el resultado.
          </span>
        </div>
      </div>
    </section>
  );
};
