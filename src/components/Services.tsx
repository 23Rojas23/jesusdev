import type { FC } from 'react';
import { servicesData } from '../data/content';
import { Zap, Layout, Layers, ShoppingCart, TrendingUp, ShieldCheck, Check, ArrowRight, Sparkles } from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: FC<ServicesProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap':
        return <Zap className="w-6 h-6 text-indigo-600" />;
      case 'Layout':
        return <Layout className="w-6 h-6 text-cyan-600" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-purple-600" />;
      case 'ShoppingCart':
        return <ShoppingCart className="w-6 h-6 text-emerald-600" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-amber-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-rose-600" />;
      default:
        return <Zap className="w-6 h-6 text-indigo-600" />;
    }
  };

  return (
    <section id="servicios" className="py-24 relative scroll-mt-20 bg-slate-50/60 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            Servicios Especializados
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Soluciones web diseñadas para{' '}
            <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
              impulsar tu negocio
            </span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            No todas las empresas necesitan lo mismo. Creo productos digitales adaptados exactamente a tu etapa, presupuesto y objetivos comerciales.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className={`relative rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1.5 ${
                service.highlight
                  ? 'bg-gradient-to-b from-indigo-50/40 via-white to-white border-2 border-indigo-500 shadow-xl shadow-indigo-500/10'
                  : 'bg-white border border-slate-200/90 hover:border-slate-300 shadow-sm hover:shadow-xl'
              }`}
            >
              {service.highlight && (
                <div className="absolute -top-3 right-6 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white text-[11px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
                  Más Solicitado
                </div>
              )}

              <div>
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-indigo-50 group-hover:border-indigo-200 transition-all">
                  {getIcon(service.iconName)}
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2.5 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
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
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => onSelectService(service.title)}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 bg-slate-100 hover:bg-indigo-600 hover:text-white border border-slate-200 hover:border-indigo-600 transition-all cursor-pointer group-hover:shadow-md"
                >
                  <span>Solicitar este servicio</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
