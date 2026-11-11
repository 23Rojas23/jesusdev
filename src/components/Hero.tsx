import { useState } from 'react';
import type { FC } from 'react';
import { m } from 'motion/react';
import { personalInfo } from '../data/content';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Monitor, Smartphone } from 'lucide-react';
import { cn } from '../lib/utils';
import { Button } from './ui/Button';
import { buttonVariants } from './ui/buttonVariants';

interface HeroProps {
  onOpenContact: () => void;
  onOpenEstimator: () => void;
}

export const Hero: FC<HeroProps> = ({
  onOpenContact,
  onOpenEstimator,
}) => {
  const [previewMode, setPreviewMode] = useState<'desktop' | 'mobile'>('desktop');

  const highlightItems = [
    {
      label: 'Desarrollo',
      value: 'Código Propio',
      sublabel: 'Sin plantillas lentas',
    },
    {
      label: 'Adaptabilidad',
      value: '100% Mobile',
      sublabel: 'Diseño para todo dispositivo',
    },
    {
      label: 'Rendimiento',
      value: personalInfo.averageLoadTime,
      sublabel: 'Velocidad de carga instantánea',
    },
    {
      label: 'Atención',
      value: 'Directa 1 a 1',
      sublabel: 'Comunicación sin intermediarios',
    },
  ];

  return (
    <section className="relative pt-32 pb-16 md:pt-36 md:pb-24 bg-white border-b border-slate-200/80 overflow-hidden">
      {/* Subtle architectural grid & soft gradient wash */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-grid-architectural [mask-image:radial-gradient(ellipse_75%_65%_at_50%_20%,#000_65%,transparent_100%)] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-indigo-50/35 via-white/40 to-white pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Copy & CTAs */}
          <m.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 text-center lg:text-left space-y-6"
          >
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl xl:text-[3.4rem] font-extrabold text-slate-900 tracking-tight leading-[1.1] text-balance">
              Sitios web modernos, rápidos y hechos a la medida de tu negocio.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed text-pretty">
              Hola, soy <strong className="text-slate-900 font-semibold">{personalInfo.name}</strong>. Creo landing pages y sitios web con código limpio, velocidad de carga instantánea y diseño 100% adaptable a teléfonos. Atención dedicada y personalizada en cada etapa.
            </p>

            {/* CTAs Group */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
              <Button
                variant="primary"
                size="lg"
                onClick={onOpenContact}
                className="w-full sm:w-auto"
              >
                <span>Cotizar mi Proyecto</span>
                <ArrowRight className="w-4 h-4" />
              </Button>

              <Button
                variant="secondary"
                size="lg"
                onClick={onOpenEstimator}
                className="w-full sm:w-auto"
              >
                <span>Calculadora Online</span>
              </Button>

              <a
                href={`https://wa.me/${personalInfo.whatsappNumber}?text=${encodeURIComponent(personalInfo.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: 'whatsapp', size: 'lg' }),
                  'w-full sm:w-auto'
                )}
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
          </m.div>

          {/* Right Column: Interactive Web Architecture Preview Card */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="rounded-2xl border border-slate-200/90 bg-white shadow-[var(--shadow-elevated)] overflow-hidden">
                {/* Browser Top Window Bar with interactive Desktop/Mobile switcher */}
                <div className="flex items-center justify-between gap-2 px-4 py-3 bg-slate-100/90 border-b border-slate-200">
                  <div className="flex items-center gap-1.5 shrink-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  </div>
                  <div className="flex items-center gap-1 bg-white border border-slate-200 rounded-md px-2.5 py-1 text-[11px] font-mono text-slate-500 flex-1 max-w-[200px] justify-center shadow-2xs truncate">
                    <span className="text-emerald-600 font-semibold">https://</span>
                    <span className="truncate">tu-negocio.com</span>
                  </div>

                  {/* Viewport Mode Switcher */}
                  <div
                    role="group"
                    aria-label="Modo de vista previa"
                    className="flex items-center gap-0.5 bg-slate-200/80 p-0.5 rounded-lg shrink-0"
                  >
                    <button
                      type="button"
                      onClick={() => setPreviewMode('desktop')}
                      aria-label="Vista escritorio"
                      aria-pressed={previewMode === 'desktop'}
                      className={cn(
                        'p-1.5 rounded-md transition-all cursor-pointer',
                        previewMode === 'desktop'
                          ? 'bg-white text-indigo-600 shadow-2xs'
                          : 'text-slate-500 hover:text-slate-800'
                      )}
                    >
                      <Monitor className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setPreviewMode('mobile')}
                      aria-label="Vista móvil"
                      aria-pressed={previewMode === 'mobile'}
                      className={cn(
                        'p-1.5 rounded-md transition-all cursor-pointer',
                        previewMode === 'mobile'
                          ? 'bg-white text-indigo-600 shadow-2xs'
                          : 'text-slate-500 hover:text-slate-800'
                      )}
                    >
                      <Smartphone className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Simulated Real Website Canvas */}
                <div className="p-5 sm:p-6 bg-slate-50/60 flex justify-center">
                  <m.div
                    layout
                    transition={{ type: 'spring', stiffness: 360, damping: 30 }}
                    className={cn(
                      'w-full space-y-3.5 transition-colors',
                      previewMode === 'mobile'
                        ? 'max-w-[250px] bg-white p-3 rounded-2xl border-2 border-slate-900 shadow-lg'
                        : 'max-w-full'
                    )}
                  >
                    {/* Mini site navbar */}
                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-md bg-indigo-600 flex items-center justify-center text-white text-[10px] font-bold">
                          TN
                        </div>
                        <span className="text-xs font-bold text-slate-900">Tu Negocio</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {previewMode === 'desktop' && (
                          <>
                            <span className="hidden sm:inline text-[11px] text-slate-500">Inicio</span>
                            <span className="hidden sm:inline text-[11px] text-slate-500">Servicios</span>
                          </>
                        )}
                        <span className="text-[11px] font-semibold text-white bg-indigo-600 px-2.5 py-1 rounded-md">
                          Contacto
                        </span>
                      </div>
                    </div>

                    {/* Mini hero section */}
                    <div className="p-4 sm:p-5 rounded-xl bg-white border border-slate-200 space-y-2 text-center shadow-2xs">
                      <h3
                        className={cn(
                          'font-bold text-slate-900 leading-snug',
                          previewMode === 'mobile' ? 'text-sm' : 'text-base sm:text-lg'
                        )}
                      >
                        Diseñada para captar clientes y cargar al instante
                      </h3>
                      <p className="text-[11px] sm:text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                        Estructura pensada para generar confianza y contactos directos desde cualquier pantalla.
                      </p>
                      <div
                        className={cn(
                          'pt-2 flex items-center justify-center gap-2',
                          previewMode === 'mobile' ? 'flex-col' : 'flex-row'
                        )}
                      >
                        <div
                          className={cn(
                            'px-3 py-1.5 rounded-md bg-indigo-600 text-white text-xs font-semibold shadow-2xs text-center',
                            previewMode === 'mobile' && 'w-full'
                          )}
                        >
                          Ver Servicios
                        </div>
                        <div
                          className={cn(
                            'px-3 py-1.5 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold text-center',
                            previewMode === 'mobile' && 'w-full'
                          )}
                        >
                          WhatsApp Directo
                        </div>
                      </div>
                    </div>

                    {/* Key feature highlights */}
                    <div
                      className={cn(
                        'grid gap-2',
                        previewMode === 'mobile' ? 'grid-cols-1' : 'grid-cols-3'
                      )}
                    >
                      <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-center shadow-2xs flex sm:block items-center justify-between">
                        <div className="text-xs font-bold font-mono text-slate-900">&lt; 0.8s</div>
                        <div className="text-[10px] text-slate-500 sm:mt-0.5">Carga Rápida</div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-center shadow-2xs flex sm:block items-center justify-between">
                        <div className="text-xs font-bold font-mono text-slate-900">100%</div>
                        <div className="text-[10px] text-slate-500 sm:mt-0.5">Mobile First</div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-center shadow-2xs flex sm:block items-center justify-between">
                        <div className="text-xs font-bold font-mono text-slate-900">SEO</div>
                        <div className="text-[10px] text-slate-500 sm:mt-0.5">Optimizado</div>
                      </div>
                    </div>
                  </m.div>
                </div>

                {/* Status Footer */}
                <div className="px-4 py-2.5 bg-white border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="font-medium text-slate-700">
                      {previewMode === 'desktop' ? 'Vista Escritorio' : 'Vista Mobile-First'}
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-500 font-medium">Carga Rápida & Móvil</span>
                </div>
              </div>
            </div>
          </m.div>
        </div>

        {/* Highlights Strip — bordes consistentes en móvil (2 cols) y escritorio (4 cols) */}
        <m.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 sm:mt-20 grid grid-cols-2 lg:grid-cols-4 rounded-2xl bg-white border border-slate-200 shadow-[var(--shadow-card)] overflow-hidden"
        >
          {highlightItems.map((item, idx) => (
            <div
              key={item.label}
              className={cn(
                'p-5 sm:p-6 text-center sm:text-left border-slate-200 transition-colors hover:bg-slate-50/70',
                idx === 0 && 'border-r border-b lg:border-b-0',
                idx === 1 && 'border-b lg:border-b-0 lg:border-r',
                idx === 2 && 'border-r'
              )}
            >
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                {item.label}
              </div>
              <div className="font-display text-lg sm:text-2xl font-bold text-slate-900 mt-1">
                {item.value}
              </div>
              <div className="text-xs text-slate-600 mt-0.5">{item.sublabel}</div>
            </div>
          ))}
        </m.div>
      </div>
    </section>
  );
};
