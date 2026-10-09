import { useState } from 'react';
import type { FC } from 'react';
import { techStackData } from '../data/content';
import { ShieldCheck, Zap, Rocket, Terminal, Layers } from 'lucide-react';

export const TechStack: FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'frontend' | 'backend' | 'tools' | 'database'>('all');

  const filteredTechs = activeTab === 'all'
    ? techStackData
    : techStackData.filter((t) => t.category === activeTab);

  const advantages = [
    {
      icon: <Zap className="w-5 h-5 text-indigo-600" />,
      title: "Velocidad Extrema (< 1s)",
      description: "El stack React + Vite + Tailwind elimina código innecesario, logrando tiempos de carga instantáneos."
    },
    {
      icon: <Rocket className="w-5 h-5 text-indigo-600" />,
      title: "Estructura Limpia y SEO",
      description: "Marcado semántico que los buscadores leen sin problemas, facilitando el posicionamiento orgánico."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-indigo-600" />,
      title: "Estabilidad y Seguridad",
      description: "Sin plugins vulnerables ni constructores pesados. Código modular, tipado y componentes reutilizables."
    },
    {
      icon: <Layers className="w-5 h-5 text-indigo-600" />,
      title: "Escalabilidad a Futuro",
      description: "Tu web podrá crecer con tu proyecto: desde una landing page sencilla hasta integrar nuevas secciones."
    }
  ];

  return (
    <section id="tecnologias" className="py-20 bg-white border-b border-slate-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-2">
            Herramientas y Tecnologías
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Tecnologías modernas para sitios eficientes
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Trabajo con las herramientas más eficientes del ecosistema web para asegurar que tu sitio sea rápido, seguro y fácil de mantener.
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
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-50 text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200/80'
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
              className="p-3.5 rounded-xl bg-slate-50/60 border border-slate-200 hover:border-slate-300 flex items-center justify-between group transition-all"
            >
              <div className="flex items-center gap-2.5">
                <Terminal className="w-4 h-4 text-slate-700" />
                <span className="font-semibold text-sm text-slate-800">
                  {tech.name}
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white text-slate-600 border border-slate-200">
                {tech.level}
              </span>
            </div>
          ))}
        </div>

        {/* Why this stack matters to the client */}
        <div className="rounded-2xl p-6 sm:p-8 bg-slate-50/70 border border-slate-200/90 shadow-2xs">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">
              ¿Por qué este enfoque beneficia a tu proyecto?
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              Más allá del código, estas ventajas impactan directamente en la experiencia de tus clientes:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((adv, index) => (
              <div key={index} className="space-y-2">
                <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center mb-3 shadow-2xs">
                  {adv.icon}
                </div>
                <h4 className="font-bold text-sm text-slate-900">{adv.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{adv.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
