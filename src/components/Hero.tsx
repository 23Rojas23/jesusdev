import type { FC } from 'react';
import { personalInfo } from '../data/content';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

interface HeroProps {
  onOpenContact: () => void;
  onOpenEstimator: () => void;
}

export const Hero: FC<HeroProps> = ({
  onOpenContact,
  onOpenEstimator,
}) => {
  return (
    <section className="relative pt-32 pb-16 md:pt-36 md:pb-24 bg-white border-b border-slate-200/80">
      {/* Subtle soft background illumination */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/70 via-white to-white pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            {/* Subtle Kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 text-slate-800 text-xs font-semibold tracking-wide border border-slate-200/80">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600"></span>
              <span>Desarrollo Web Frontend · React & Tailwind CSS</span>
            </div>

            {/* Main Headline - High contrast, solid, no rainbow gradients */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              Sitios web modernos, rápidos y hechos a la medida de tu negocio.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Hola, soy <strong className="text-slate-900 font-semibold">{personalInfo.name}</strong>. Creo landing pages y sitios web con código limpio, velocidad de carga instantánea y diseño 100% adaptable a teléfonos. Atención dedicada y personalizada en cada etapa.
            </p>

            {/* CTAs Group */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
              <button
                onClick={onOpenContact}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-white font-semibold text-sm sm:text-base bg-indigo-600 hover:bg-indigo-700 shadow-sm hover:shadow transition-all cursor-pointer"
              >
                <span>Cotizar mi Proyecto</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenEstimator}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg text-slate-700 font-semibold text-sm sm:text-base bg-white hover:bg-slate-50 border border-slate-300 hover:border-slate-400 shadow-2xs transition-all cursor-pointer"
              >
                <span>Calculadora Online</span>
              </button>

              <a
                href={`https://wa.me/${personalInfo.whatsappNumber}?text=${encodeURIComponent(personalInfo.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg text-emerald-800 font-semibold text-sm sm:text-base bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-all shadow-2xs"
              >
                <Zap className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp Directo</span>
              </a>
            </div>

            {/* Guarantee Checkpoints */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-600">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Código semántico y limpio</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Adaptable a celulares</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-indigo-600 shrink-0" />
                <span>Soporte post-entrega</span>
              </div>
            </div>
          </div>

          {/* Right Column: Real Web Architecture Preview Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50 overflow-hidden">
                {/* Browser Top Window Bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-100 border-b border-slate-200">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  </div>
                  <div className="flex items-center gap-1.5 bg-white border border-slate-200 rounded-md px-3 py-1 text-[11px] font-mono text-slate-500 max-w-xs w-full justify-center shadow-2xs">
                    <span className="text-emerald-600 font-bold">https://</span>
                    <span>tu-negocio.com</span>
                  </div>
                  <div className="text-[10px] font-semibold text-slate-600 bg-slate-200/80 px-2 py-0.5 rounded">
                    Demo
                  </div>
                </div>

                {/* Simulated Real Website Canvas */}
                <div className="p-5 sm:p-6 bg-slate-50/50 space-y-4">
                  {/* Mini site navbar */}
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-md bg-indigo-600 flex items-center justify-center text-white text-[10px] font-bold">
                        TN
                      </div>
                      <span className="text-xs font-bold text-slate-900">Tu Negocio</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="hidden sm:inline text-[11px] text-slate-500">Inicio</span>
                      <span className="hidden sm:inline text-[11px] text-slate-500">Servicios</span>
                      <span className="text-[11px] font-semibold text-white bg-indigo-600 px-2.5 py-1 rounded-md">
                        Contacto
                      </span>
                    </div>
                  </div>

                  {/* Mini hero section */}
                  <div className="p-5 rounded-xl bg-white border border-slate-200 space-y-2 text-center shadow-2xs">
                    <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100">
                      Landing Page Profesional
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">
                      Diseñada para captar clientes y cargar al instante
                    </h3>
                    <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                      Estructura pensada para generar confianza y contactos directos desde cualquier teléfono o computadora.
                    </p>
                    <div className="pt-2 flex items-center justify-center gap-2">
                      <div className="px-3 py-1.5 rounded-md bg-indigo-600 text-white text-xs font-semibold shadow-xs">
                        Ver Servicios
                      </div>
                      <div className="px-3 py-1.5 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold">
                        WhatsApp Directo
                      </div>
                    </div>
                  </div>

                  {/* Key feature highlights */}
                  <div className="grid grid-cols-3 gap-2">
                    <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-center shadow-2xs">
                      <div className="text-xs font-bold text-slate-900">&lt; 0.8s</div>
                      <div className="text-[10px] text-slate-500 mt-0.5">Carga Rápida</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-center shadow-2xs">
                      <div className="text-xs font-bold text-slate-900">100%</div>
                      <div className="text-[10px] text-slate-500 mt-0.5">Mobile First</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-center shadow-2xs">
                      <div className="text-xs font-bold text-slate-900">SEO</div>
                      <div className="text-[10px] text-slate-500 mt-0.5">Optimizado</div>
                    </div>
                  </div>
                </div>

                {/* Status Footer */}
                <div className="px-4 py-2.5 bg-white border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="font-medium text-slate-700">Diseño Personalizado</span>
                  </div>
                  <span className="font-mono text-[11px] text-slate-500">React + Vite + Tailwind</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Strip */}
        <div className="mt-16 sm:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
          <div className="p-3 text-center sm:text-left">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Tecnología</div>
            <div className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">React + Vite</div>
            <div className="text-xs text-slate-600 mt-0.5">Stack moderno y ágil</div>
          </div>
          <div className="p-3 text-center sm:text-left border-l border-slate-200">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Adaptabilidad</div>
            <div className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">100% Mobile</div>
            <div className="text-xs text-slate-600 mt-0.5">Diseño para todo dispositivo</div>
          </div>
          <div className="p-3 text-center sm:text-left border-t sm:border-t-0 sm:border-l border-slate-200">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Rendimiento</div>
            <div className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">{personalInfo.averageLoadTime}</div>
            <div className="text-xs text-slate-600 mt-0.5">Velocidad de carga instantánea</div>
          </div>
          <div className="p-3 text-center sm:text-left border-t lg:border-t-0 border-l border-slate-200">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Atención</div>
            <div className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">Directa 1 a 1</div>
            <div className="text-xs text-slate-600 mt-0.5">Comunicación sin intermediarios</div>
          </div>
        </div>
      </div>
    </section>
  );
};
