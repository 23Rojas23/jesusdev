import type { FC } from 'react';
import { pricingPlans } from '../data/content';
import { Check, X, ArrowRight, Clock, ShieldCheck } from 'lucide-react';
import { cn } from '../lib/utils';
import { Button } from './ui/Button';
import { SectionHeader } from './ui/SectionHeader';
import { Reveal } from './ui/Reveal';

interface PricingProps {
  onSelectPlan: (serviceName: string, budgetTier?: string) => void;
}

export const Pricing: FC<PricingProps> = ({ onSelectPlan }) => {
  const handleSelectPlan = (planId: string) => {
    if (planId === 'landing-express') {
      onSelectPlan('Landing Express ($120)', 'Menos de $150 USD');
    } else if (planId === 'web-corporativa') {
      onSelectPlan('Sitio Web Corporativo Pro ($200)', '$150 - $250 USD');
    } else if (planId === 'web-administrable') {
      onSelectPlan('Web Administrable con CMS ($350)', '$250 - $400 USD');
    } else {
      onSelectPlan('Landing Express ($120)', 'Menos de $150 USD');
    }
  };

  return (
    <section
      id="precios"
      className="py-20 md:py-24 bg-slate-50/80 border-b border-slate-200/80 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Presupuestos claros y transparentes"
          description="Elige el paquete que mejor se ajuste a tu etapa actual. Todos incluyen diseño responsivo, código modular y soporte técnico."
        />

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {pricingPlans.map((plan, idx) => (
            <Reveal key={plan.id} delay={idx * 0.06} className="h-full">
              <div
                className={cn(
                  'relative h-full rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-200 bg-white',
                  plan.popular
                    ? 'border-2 border-indigo-600 ring-4 ring-indigo-600/10 shadow-[var(--shadow-elevated)] md:-translate-y-2'
                    : 'border border-slate-200 hover:border-slate-300 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)]'
                )}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-[10px] font-bold px-3.5 py-1 rounded-full uppercase tracking-wider shadow-xs whitespace-nowrap">
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
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-display text-4xl font-extrabold text-slate-900 tabular-nums">
                        {plan.price}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">
                        / {plan.period}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-indigo-700 mt-2 font-mono font-medium">
                      <Clock className="w-3.5 h-3.5 text-indigo-500" />
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

                    {plan.nonFeatures &&
                      plan.nonFeatures.map((nf, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-400">
                          <X className="w-4 h-4 text-slate-300 shrink-0 mt-0.5" />
                          <span className="line-through">{nf}</span>
                        </div>
                      ))}
                  </div>
                </div>

                {/* Action Button */}
                <div className="pt-4 mt-auto">
                  <Button
                    variant={plan.popular ? 'primary' : 'subtle'}
                    size="md"
                    fullWidth
                    onClick={() => handleSelectPlan(plan.id)}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Guarantee Banner */}
        <Reveal delay={0.14}>
          <div className="mt-12 max-w-xl mx-auto text-center p-4 rounded-2xl bg-white border border-slate-200 flex items-center justify-center gap-2.5 text-xs sm:text-sm text-slate-600 shadow-2xs">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>
              <strong className="text-slate-900">Compromiso:</strong> Ajustes y revisiones incluidas hasta tu completa satisfacción.
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
