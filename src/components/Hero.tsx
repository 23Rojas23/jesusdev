import type { FC } from 'react';
import { personalInfo } from '../data/content';
import { ArrowRight, Sparkles, CheckCircle2, Gauge, ShieldCheck, Zap } from 'lucide-react';

interface HeroProps {
  onOpenContact: () => void;
  onExploreProjects: () => void;
  onOpenEstimator: () => void;
}

export const Hero: FC<HeroProps> = ({
  onOpenContact,
  onExploreProjects,
  onOpenEstimator,
}) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-white">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] md:w-[900px] md:h-[500px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -left-20 w-[350px] h-[350px] bg-cyan-400/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 -right-20 w-[400px] h-[400px] bg-purple-400/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a08_1px,transparent_1px),linear-gradient(to_bottom,#0f172a08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs sm:text-sm font-semibold shadow-xs">
              <Sparkles className="w-4 h-4 text-indigo-600 animate-pulse" />
              <span>Desarrollo Web Profesional con React + Vite + Tailwind</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Tu negocio necesita una web{' '}
              <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                ultrarrápida y moderna
              </span>{' '}
              que convierta visitas en clientes.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Hola, soy <strong className="text-slate-900 font-semibold">{personalInfo.name}</strong>. Creo landing pages de alta conversión, sitios corporativos y aplicaciones web a medida. Sin plantillas lentas ni código genérico: arquitectura limpia, diseño vanguardista y resultados comerciales reales.
            </p>

            {/* CTAs Group */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={onOpenContact}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-white font-semibold text-sm sm:text-base bg-gradient-to-r from-indigo-600 via-indigo-600 to-cyan-600 hover:from-indigo-700 hover:to-cyan-700 shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/35 transition-all cursor-pointer transform hover:-translate-y-0.5"
              >
                <span>Cotizar mi Proyecto</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreProjects}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-slate-700 font-semibold text-sm sm:text-base bg-white hover:bg-slate-50 border border-slate-300 hover:border-slate-400 shadow-xs transition-all cursor-pointer"
              >
                <span>Ver Proyectos</span>
              </button>

              <button
                onClick={onOpenEstimator}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-indigo-700 font-semibold text-sm sm:text-base bg-indigo-50 hover:bg-indigo-100/80 border border-indigo-200 transition-all cursor-pointer"
              >
                <span>Calculadora Online</span>
              </button>

              <a
                href={`https://wa.me/${personalInfo.whatsappNumber}?text=${encodeURIComponent(personalInfo.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-emerald-800 font-semibold text-sm sm:text-base bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-300 transition-all shadow-xs"
              >
                <Zap className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Guarantee Checkpoints */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-600">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Entrega rápida garantizada</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Adaptable a celulares</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-indigo-600 shrink-0" />
                <span>Soporte post-lanzamiento</span>
              </div>
            </div>
          </div>

          {/* Right Column: Code & Lighthouse Performance Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Card Container */}
              <div className="rounded-2xl border border-slate-800 bg-slate-950 shadow-2xl shadow-indigo-950/20 overflow-hidden">
                {/* Window Top Bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-xs font-mono text-slate-400">LandingPage.tsx</span>
                  <div className="text-[11px] text-indigo-300 bg-indigo-950 border border-indigo-800 px-2 py-0.5 rounded font-mono">
                    React 19 + Vite
                  </div>
                </div>

                {/* Code Body Mockup */}
                <div className="p-4 sm:p-5 font-mono text-xs text-slate-300 space-y-2 leading-relaxed bg-slate-950">
                  <div className="text-slate-500">// Arquitectura moderna y optimizada</div>
                  <div>
                    <span className="text-purple-400">const</span>{' '}
                    <span className="text-cyan-300">TuNuevoSitio</span> = ({' '}
                    <span className="text-amber-300">cliente</span> ) =&gt; &#123;
                  </div>
                  <div className="pl-4">
                    <span className="text-purple-400">return</span> (
                  </div>
                  <div className="pl-8 text-slate-400">
                    &lt;<span className="text-indigo-400">WebsiteContainer</span>
                  </div>
                  <div className="pl-12">
                    <span className="text-cyan-300">velocidadCarga</span>=
                    <span className="text-emerald-400">&quot;&lt;0.8s&quot;</span>
                  </div>
                  <div className="pl-12">
                    <span className="text-cyan-300">responsiveDesign</span>=&#123;
                    <span className="text-amber-400">true</span>&#125;
                  </div>
                  <div className="pl-12">
                    <span className="text-cyan-300">optimizacionSEO</span>=
                    <span className="text-emerald-400">&quot;100/100&quot;</span>
                  </div>
                  <div className="pl-12">
                    <span className="text-cyan-300">conversionRate</span>=
                    <span className="text-emerald-400">&quot;Máxima&quot;</span>
                  </div>
                  <div className="pl-8 text-slate-400">
                    /&gt;
                  </div>
                  <div className="pl-4">);</div>
                  <div>&#125;;</div>
                </div>

                {/* Lighthouse Performance Score Bar */}
                <div className="p-4 bg-slate-900 border-t border-slate-800">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-200">
                      <Gauge className="w-4 h-4 text-emerald-400" />
                      <span>Google Lighthouse Audit</span>
                    </div>
                    <span className="text-[11px] text-emerald-400 font-mono font-medium">Verificado 100%</span>
                  </div>

                  <div className="grid grid-cols-4 gap-2 text-center">
                    <div className="p-2 rounded-xl bg-slate-950 border border-emerald-500/30">
                      <div className="text-base sm:text-lg font-bold text-emerald-400">100</div>
                      <div className="text-[10px] text-slate-400 truncate">Performance</div>
                    </div>
                    <div className="p-2 rounded-xl bg-slate-950 border border-emerald-500/30">
                      <div className="text-base sm:text-lg font-bold text-emerald-400">100</div>
                      <div className="text-[10px] text-slate-400 truncate">Accesibilidad</div>
                    </div>
                    <div className="p-2 rounded-xl bg-slate-950 border border-emerald-500/30">
                      <div className="text-base sm:text-lg font-bold text-emerald-400">100</div>
                      <div className="text-[10px] text-slate-400 truncate">Prácticas</div>
                    </div>
                    <div className="p-2 rounded-xl bg-slate-950 border border-emerald-500/30">
                      <div className="text-base sm:text-lg font-bold text-emerald-400">100</div>
                      <div className="text-[10px] text-slate-400 truncate">SEO</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Tech Badge (Bottom Right) */}
              <div className="hidden sm:flex absolute -bottom-5 -right-5 items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white border border-slate-200 shadow-xl shadow-slate-300/40">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-xs font-semibold text-slate-800">
                  Tecnología de última generación
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="mt-16 sm:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 p-4 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-xs">
          <div className="text-center p-3">
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              {personalInfo.yearsExperience}
            </div>
            <div className="text-xs sm:text-sm text-slate-600 mt-1 font-medium">
              Años de experiencia profesional
            </div>
          </div>
          <div className="text-center p-3 border-l border-slate-200">
            <div className="text-2xl sm:text-3xl font-extrabold text-indigo-600">
              {personalInfo.projectsCompleted}
            </div>
            <div className="text-xs sm:text-sm text-slate-600 mt-1 font-medium">
              Proyectos web entregados
            </div>
          </div>
          <div className="text-center p-3 border-t sm:border-t-0 sm:border-l border-slate-200">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600">
              {personalInfo.averageLoadTime}
            </div>
            <div className="text-xs sm:text-sm text-slate-600 mt-1 font-medium">
              Tiempo de carga promedio
            </div>
          </div>
          <div className="text-center p-3 border-t lg:border-t-0 border-l border-slate-200">
            <div className="text-2xl sm:text-3xl font-extrabold text-blue-600">
              {personalInfo.satisfiedClients}
            </div>
            <div className="text-xs sm:text-sm text-slate-600 mt-1 font-medium">
              Clientes 100% satisfechos
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
