import type { FC } from 'react';
import { Zap, Smartphone, DollarSign, ShieldCheck, MessageCircle, UserCheck, CheckCircle2 } from 'lucide-react';

export const TechStack: FC = () => {
  const businessBenefits = [
    {
      icon: <Zap className="w-5 h-5 text-amber-600" />,
      iconBg: "bg-amber-50 border-amber-200",
      title: "Velocidad Ultrarrápida (< 1 seg)",
      description: "Tus clientes no van a esperar: una página veloz retiene más visitantes y evita que se vayan con la competencia.",
      highlight: "Mayor retención",
    },
    {
      icon: <Smartphone className="w-5 h-5 text-indigo-600" />,
      iconBg: "bg-indigo-50 border-indigo-200",
      title: "100% Adaptable a Celulares",
      description: "Más del 80% de tus visitas llegarán desde smartphones. Tu sitio se verá nítido, proporcional y cómodo de navegar.",
      highlight: "Mobile-First",
    },
    {
      icon: <DollarSign className="w-5 h-5 text-emerald-600" />,
      iconBg: "bg-emerald-50 border-emerald-200",
      title: "$0 en Mensualidades de Hosting",
      description: "Alojada en infraestructura en la nube de nivel mundial sin cobros mensuales de servidor tradicional en dólares.",
      highlight: "Ahorro continuo",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-blue-600" />,
      iconBg: "bg-blue-50 border-blue-200",
      title: "Seguridad y Cero Caídas",
      description: "Código propio y optimizado, sin plugins lentos que se rompan ni hackeos comunes en plataformas viejas.",
      highlight: "Máxima estabilidad",
    },
    {
      icon: <MessageCircle className="w-5 h-5 text-emerald-600" />,
      iconBg: "bg-emerald-50 border-emerald-200",
      title: "Enfocada en Ventas por WhatsApp",
      description: "Estructura y botones estratégicos pensados para que el cliente pase de mirar tus servicios a escribirte a tu chat.",
      highlight: "Conversión directa",
    },
    {
      icon: <UserCheck className="w-5 h-5 text-violet-600" />,
      iconBg: "bg-violet-50 border-violet-200",
      title: "Atención Directa 1 a 1",
      description: "Sin agencias burocráticas ni intermediarios: te comunicas directamente con la persona que programa tu sitio.",
      highlight: "Trato personal",
    },
  ];

  return (
    <section id="ventajas" className="py-20 md:py-24 bg-white border-b border-slate-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Lo que una web moderna hace por tu negocio
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Menos tecnicismos y más resultados: cada aspecto de tu sitio web está pensado para generar credibilidad y clientes.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {businessBenefits.map((benefit, index) => (
            <div
              key={index}
              className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-11 h-11 rounded-xl border flex items-center justify-center ${benefit.iconBg}`}>
                    {benefit.icon}
                  </div>
                  <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                    {benefit.highlight}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                  {benefit.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance strip */}
        <div className="mt-12 max-w-3xl mx-auto p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center flex flex-col sm:flex-row items-center justify-center gap-3 text-xs sm:text-sm text-slate-700 shadow-2xs">
          <div className="flex items-center gap-2 font-semibold text-slate-900 shrink-0">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Desarrollo con Código Propio</span>
          </div>
          <span className="hidden sm:inline text-slate-300">|</span>
          <span className="text-slate-600">
            Sin plantillas pesadas, optimizado para Google y con entrega de accesos completa.
          </span>
        </div>
      </div>
    </section>
  );
};
