import { useState } from 'react';
import type { FC } from 'react';
import { projectsData } from '../data/content';
import type { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { Briefcase, ExternalLink, Eye, TrendingUp, Sparkles, ArrowRight } from 'lucide-react';

interface PortfolioProps {
  onQuoteProject: (projectTitle?: string) => void;
}

export const Portfolio: FC<PortfolioProps> = ({ onQuoteProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = [
    { id: 'all', label: 'Todos los Proyectos' },
    { id: 'landing', label: 'Landing Pages' },
    { id: 'webapp', label: 'Aplicaciones Web' },
    { id: 'ecommerce', label: 'E-Commerce' },
    { id: 'corporate', label: 'Corporativas' },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="proyectos" className="py-24 relative scroll-mt-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-4 shadow-xs">
            <Briefcase className="w-3.5 h-3.5 text-indigo-600" />
            Portafolio & Casos de Éxito
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Proyectos reales que entregan{' '}
            <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
              resultados medibles
            </span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Explora algunos de los trabajos desarrollados con código optimizado, interfaces modernas y enfoque de conversión.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-md shadow-indigo-600/20'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-white border border-slate-200 hover:border-slate-300 overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-xl"
            >
              <div>
                {/* Image Container with Overlay */}
                <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  {/* Top Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-white/95 backdrop-blur-md text-indigo-700 border border-slate-200 shadow-xs">
                      {project.categoryLabel}
                    </span>
                  </div>

                  {/* Metric Pill */}
                  <div className="absolute bottom-3 left-3">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-semibold bg-emerald-500 text-white shadow-md">
                      <TrendingUp className="w-3 h-3" />
                      {project.metrics}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm line-clamp-2 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.techs.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="p-6 pt-0 border-t border-slate-100 mt-auto flex items-center justify-between gap-2">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5 text-slate-600" />
                  <span>Ver Detalles</span>
                </button>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center p-2 rounded-xl text-xs font-semibold bg-indigo-50 hover:bg-indigo-600 text-indigo-600 hover:text-white transition-colors border border-indigo-200 hover:border-indigo-600"
                    title="Visitar Demo"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="rounded-2xl p-8 sm:p-10 bg-gradient-to-r from-indigo-50 via-slate-50 to-cyan-50 border border-indigo-200 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left shadow-xs">
          <div>
            <div className="inline-flex items-center gap-1.5 text-indigo-600 text-xs font-semibold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              ¿Quieres un resultado como estos?
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Diseñemos la web perfecta para tu empresa
            </h3>
            <p className="text-slate-600 text-sm mt-1 max-w-xl">
              Cuéntame sobre tu proyecto y te entregaré una propuesta clara, sin compromiso y con tiempos de entrega definidos.
            </p>
          </div>

          <button
            onClick={() => onQuoteProject()}
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-700 hover:to-cyan-700 shadow-md shadow-indigo-600/20 transition-all cursor-pointer transform hover:-translate-y-0.5"
          >
            <span>Cotizar mi Proyecto</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Modal View */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
        onQuoteSimilar={(title) => {
          onQuoteProject(`Proyecto similar a: ${title}`);
        }}
      />
    </section>
  );
};
