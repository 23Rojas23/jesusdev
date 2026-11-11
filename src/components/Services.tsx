import type { FC } from 'react';
import { servicesData } from '../data/content';
import { Zap, Layout, Layers, ShoppingCart, TrendingUp, ShieldCheck, Check, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';
import { Button } from './ui/Button';
import { SectionHeader } from './ui/SectionHeader';
import { Reveal } from './ui/Reveal';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: FC<ServicesProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap':
        return <Zap className="w-5 h-5 text-indigo-600" />;
      case 'Layout':
        return <Layout className="w-5 h-5 text-indigo-600" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-indigo-600" />;
      case 'ShoppingCart':
        return <ShoppingCart className="w-5 h-5 text-indigo-600" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-indigo-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-indigo-600" />;
      default:
        return <Zap className="w-5 h-5 text-indigo-600" />;
    }
  };

  return (
    <section
      id="servicios"
      className="py-20 md:py-24 relative scroll-mt-20 bg-slate-50/80 border-b border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Soluciones web enfocadas en tu negocio"
          description="Sitios desarrollados con código propio, sin constructores lentos y adaptados exactamente a tus necesidades y presupuesto."
        />

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service, idx) => (
            <Reveal key={service.id} delay={idx * 0.04} className="h-full">
              <div
                className={cn(
                  'relative h-full rounded-2xl p-7 flex flex-col justify-between transition-all duration-200 bg-white group hover:-translate-y-0.5',
                  service.highlight
                    ? 'border-2 border-indigo-600 ring-4 ring-indigo-50/90 shadow-[var(--shadow-card-hover)]'
                    : 'border border-slate-200 hover:border-slate-300 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)]'
                )}
              >
                {service.highlight && (
                  <div className="absolute -top-3 right-6 bg-indigo-600 text-white text-[10px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider shadow-xs">
                    Más Solicitado
                  </div>
                )}

                <div>
                  {/* Icon Container */}
                  <div className="w-11 h-11 rounded-xl bg-indigo-50/80 border border-indigo-100 flex items-center justify-center mb-5 group-hover:scale-105 group-hover:bg-indigo-100/80 transition-all">
                    {getIcon(service.iconName)}
                  </div>

                  {/* Service Title */}
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                    {service.title}
                  </h3>

                  {/* Service Description */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2.5 mb-8">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Techs and Action */}
                <div className="pt-4 border-t border-slate-100 mt-auto">
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {service.techs.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Button
                    variant={service.highlight ? 'primary' : 'subtle'}
                    size="md"
                    fullWidth
                    onClick={() => onSelectService(service.title)}
                  >
                    <span>Solicitar este servicio</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
