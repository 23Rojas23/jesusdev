import type { FC } from 'react';
import { servicesData } from '../data/content';
import { Zap, Layout, Layers, ShoppingCart, TrendingUp, ShieldCheck, Check, ArrowRight } from 'lucide-react';

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
    <section id="servicios" className="py-20 md:py-24 relative scroll-mt-20 bg-slate-50/70 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-2">
            Servicios de Desarrollo
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Soluciones web enfocadas en tu negocio
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Sitios desarrollados con código propio, sin constructores lentos y adaptados exactamente a tus necesidades y presupuesto.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className={`relative rounded-2xl p-7 flex flex-col justify-between transition-all duration-200 bg-white ${
                service.highlight
                  ? 'border-2 border-slate-900 shadow-lg'
                  : 'border border-slate-200 hover:border-slate-300 shadow-xs hover:shadow-md'
              }`}
            >
              {service.highlight && (
                <div className="absolute -top-3 right-6 bg-slate-900 text-white text-[10px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider shadow-xs">
                  Más Solicitado
                </div>
              )}

              <div>
                {/* Icon Container */}
                <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200/80 flex items-center justify-center mb-5">
                  {getIcon(service.iconName)}
                </div>

                {/* Service Title */}
                <h3 className="text-lg font-bold text-slate-900 mb-2">
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
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => onSelectService(service.title)}
                  className={`w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    service.highlight
                      ? 'bg-slate-900 text-white hover:bg-indigo-600 shadow-xs'
                      : 'bg-slate-100 text-slate-800 hover:bg-slate-900 hover:text-white border border-slate-200'
                  }`}
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
