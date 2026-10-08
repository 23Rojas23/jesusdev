import { useState } from 'react';
import { projectsData } from '../data/content';
import type { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { Briefcase, ExternalLink, Eye, TrendingUp, Sparkles, ArrowRight } from 'lucide-react';

interface PortfolioProps {
  onQuoteProject: (projectTitle?: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onQuoteProject }) => {
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
    <section id="proyectos" className="py-24 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Briefcase className="w-3.5 h-3.5 text-indigo-400" />
            Portafolio & Casos de Éxito
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Proyectos reales que entregan{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              resultados medibles
            </span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
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
                  ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-md shadow-indigo-600/30'
                  : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
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
              className="rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1.5 shadow-lg shadow-black/40"
            >
              <div>
                {/* Image Container with Overlay */}
                <div className="relative h-52 w-full overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-black/20" />

                  {/* Top Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-slate-950/80 backdrop-blur-md text-cyan-300 border border-cyan-500/20">
                      {project.categoryLabel}
                    </span>
                  </div>

                  {/* Metric Pill */}
                  <div className="absolute bottom-3 left-3">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-medium bg-emerald-950/80 backdrop-blur-md text-emerald-300 border border-emerald-500/30">
                      <TrendingUp className="w-3 h-3 text-emerald-400" />
                      {project.metrics}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm line-clamp-2 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.techs.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="p-6 pt-0 border-t border-slate-800/80 mt-auto flex items-center justify-between gap-2">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Ver Detalles</span>
                </button>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center p-2 rounded-xl text-xs font-semibold bg-indigo-600/20 hover:bg-indigo-600 text-indigo-300 hover:text-white transition-colors border border-indigo-500/30"
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
        <div className="rounded-2xl p-8 sm:p-10 bg-gradient-to-r from-indigo-950/60 via-slate-900 to-cyan-950/60 border border-indigo-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <div className="inline-flex items-center gap-1.5 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              ¿Quieres un resultado como estos?
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Diseñemos la web perfecta para tu empresa
            </h3>
            <p className="text-slate-300 text-sm mt-1 max-w-xl">
              Cuéntame sobre tu proyecto y te entregaré una propuesta clara, sin compromiso y con tiempos de entrega definidos.
            </p>
          </div>

          <button
            onClick={() => onQuoteProject()}
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 shadow-lg shadow-indigo-600/30 transition-all cursor-pointer transform hover:-translate-y-0.5"
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
