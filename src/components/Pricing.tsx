import type { FC } from 'react';
import { pricingPlans } from '../data/content';
import { Check, X, ArrowRight, Clock, ShieldCheck } from 'lucide-react';

interface PricingProps {
  onSelectPlan: (planName: string) => void;
}

export const Pricing: FC<PricingProps> = ({ onSelectPlan }) => {
  return (
    <section id="precios" className="py-20 md:py-24 bg-white border-b border-slate-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-2">
            Planes y Tarifas
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Presupuestos claros y transparentes
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Elige el paquete que mejor se ajuste a tu etapa actual. Todos incluyen diseño responsivo, código modular y soporte técnico.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-200 bg-white ${
                plan.popular
                  ? 'border-2 border-slate-900 shadow-xl md:-translate-y-2'
                  : 'border border-slate-200 shadow-2xs hover:shadow-md'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider shadow-xs">
                  Opción Recomendada
                </div>
              )}

              <div>
                {/* Plan Title & Description */}
                <h3 className="text-xl font-bold text-slate-900 mb-1.5">{plan.name}</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-6 pb-6 border-b border-slate-100">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-slate-900">
                      {plan.price}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      / {plan.period}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-2 font-mono">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{plan.deliveryTime}</span>
                  </div>
                </div>

                {/* Features Checklist */}
                <div className="space-y-2.5 mb-8">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                    Incluye:
                  </span>
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}

                  {plan.nonFeatures && plan.nonFeatures.map((nf, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-400">
                      <X className="w-4 h-4 text-slate-300 shrink-0 mt-0.5" />
                      <span className="line-through">{nf}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 mt-auto">
                <button
                  onClick={() => onSelectPlan(plan.name)}
                  className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-sm transition-all cursor-pointer ${
                    plan.popular
                      ? 'bg-slate-900 hover:bg-indigo-600 text-white shadow-xs'
                      : 'bg-slate-100 hover:bg-slate-900 hover:text-white text-slate-800 border border-slate-200'
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
        <div className="mt-12 max-w-xl mx-auto text-center p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center gap-2.5 text-xs sm:text-sm text-slate-600">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>
            <strong>Compromiso:</strong> Ajustes y revisiones incluidas hasta tu completa satisfacción.
          </span>
        </div>
      </div>
    </section>
  );
};
