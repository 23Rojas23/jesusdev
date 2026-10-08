import type { FC } from 'react';
import { useEffect } from 'react';
import type { Project } from '../types';
import { X, ExternalLink, CheckCircle2, TrendingUp, Sparkles, Code2 } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onQuoteSimilar: (projectTitle: string) => void;
}

export const ProjectModal: FC<ProjectModalProps> = ({
  project,
  onClose,
  onQuoteSimilar,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white border border-slate-200 shadow-2xl shadow-slate-900/25 text-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer shadow-xs"
          aria-label="Cerrar ventana"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Project Header Image */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-100">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
          
          {/* Badge over image */}
          <div className="absolute bottom-4 left-6 flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-600 text-white shadow-md">
              {project.categoryLabel}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500 text-white flex items-center gap-1 shadow-md">
              <TrendingUp className="w-3.5 h-3.5" />
              {project.metrics}
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              {project.title}
            </h3>
            <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Highlights checklist */}
          <div className="rounded-xl bg-slate-50 p-5 border border-slate-200 space-y-2.5">
            <h4 className="text-xs uppercase font-bold tracking-wider text-slate-500">
              Logros & Características Clave
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Puntuación Lighthouse 98-100</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Diseño 100% responsivo adaptable</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>SEO semántico optimizado</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Carga ultra rápida sin dependencias pesadas</span>
              </div>
            </div>
          </div>

          {/* Tech stack used */}
          <div>
            <h4 className="text-xs uppercase font-bold tracking-wider text-slate-500 mb-2">
              Tecnologías Utilizadas
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techs.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-100 text-indigo-700 border border-slate-200 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action buttons */}
          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-3 w-full sm:w-auto">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-indigo-600 hover:bg-indigo-700 text-white transition-all shadow-md shadow-indigo-600/20"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Ver Demo en Vivo</span>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 transition-all"
                >
                  <Code2 className="w-4 h-4 text-indigo-600" />
                  <span>Código Fuente</span>
                </a>
              )}
            </div>

            <button
              onClick={() => {
                onClose();
                onQuoteSimilar(project.title);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white transition-all shadow-md shadow-emerald-600/20 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Quiero una web similar</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
