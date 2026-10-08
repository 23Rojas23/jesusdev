import { useState } from 'react';
import type { FC } from 'react';
import { techStackData } from '../data/content';
import { Cpu, ShieldCheck, Zap, Rocket, Terminal, Layers } from 'lucide-react';

export const TechStack: FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'frontend' | 'backend' | 'tools' | 'database'>('all');

  const filteredTechs = activeTab === 'all'
    ? techStackData
    : techStackData.filter((t) => t.category === activeTab);

  const advantages = [
    {
      icon: <Zap className="w-5 h-5 text-amber-400" />,
      title: "Velocidad Extrema (< 1s)",
      description: "El stack React + Vite + Tailwind elimina código innecesario, logrando tiempos de carga instantáneos que retienen a los visitantes."
    },
    {
      icon: <Rocket className="w-5 h-5 text-cyan-400" />,
      title: "Posicionamiento SEO Superior",
      description: "Estructura semántica limpia que los rastreadores de Google aman, mejorando las posiciones orgánicas sin trucos."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
      title: "Seguridad y Estabilidad",
      description: "Sin bases de datos vulnerables de plugins obsoletos. Código moderno con TypeScript que previene errores y caídas del servidor."
    },
    {
      icon: <Layers className="w-5 h-5 text-indigo-400" />,
      title: "Escalabilidad Garantizada",
      description: "Tu web podrá crecer con tu empresa: desde una landing page sencilla hasta una plataforma SaaS con miles de usuarios concurrentes."
    }
  ];

  return (
    <section id="tecnologias" className="py-20 bg-slate-900/40 border-y border-slate-800/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            Stack Tecnológico
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tecnologías modernas para{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              resultados de clase mundial
            </span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            No utilizo tecnologías obsoletas. Trabajo con las herramientas más potentes del ecosistema web para asegurar que tu inversión rinda por años.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: 'all', label: 'Todo el Stack' },
            { id: 'frontend', label: 'Frontend & UI' },
            { id: 'backend', label: 'Backend & APIs' },
            { id: 'database', label: 'Bases de Datos' },
            { id: 'tools', label: 'Herramientas & Cloud' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-md shadow-indigo-600/30'
                  : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tech Badges Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 mb-16">
          {filteredTechs.map((tech) => (
            <div
              key={tech.name}
              className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 flex items-center justify-between group hover:bg-slate-850 transition-all"
            >
              <div className="flex items-center gap-3">
                <Terminal className={`w-4 h-4 ${tech.iconColor}`} />
                <span className="font-semibold text-sm text-slate-200 group-hover:text-white transition-colors">
                  {tech.name}
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700/50">
                {tech.level}
              </span>
            </div>
          ))}
        </div>

        {/* Why this stack matters to the client */}
        <div className="rounded-2xl p-6 sm:p-8 bg-gradient-to-b from-slate-900/90 to-slate-950 border border-slate-800">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              ¿Por qué este stack beneficia a tu empresa?
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              Más allá del código, estas ventajas impactan directamente en tus ventas y conversión:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((adv, index) => (
              <div key={index} className="space-y-2">
                <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center mb-3">
                  {adv.icon}
                </div>
                <h4 className="font-bold text-sm sm:text-base text-white">{adv.title}</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{adv.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
