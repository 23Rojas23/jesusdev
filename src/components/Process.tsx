import type { FC } from 'react';
import { processSteps } from '../data/content';
import { GitBranch, Compass, Code, CheckCircle, Rocket, Palette, Clock } from 'lucide-react';

export const Process: FC = () => {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-5 h-5 text-cyan-400" />;
      case 'Figma':
        return <Palette className="w-5 h-5 text-purple-400" />;
      case 'Code':
        return <Code className="w-5 h-5 text-indigo-400" />;
      case 'CheckCircle':
        return <CheckCircle className="w-5 h-5 text-emerald-400" />;
      case 'Rocket':
        return <Rocket className="w-5 h-5 text-amber-400" />;
      default:
        return <Code className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="proceso" className="py-24 bg-slate-900/30 border-y border-slate-800/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <GitBranch className="w-3.5 h-3.5 text-cyan-400" />
            Metodología de Trabajo
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Un proceso claro, ágil y{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              sin sorpresas
            </span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Sabrás exactamente en qué etapa se encuentra tu desarrollo en todo momento, con comunicación constante y entregas a tiempo.
          </p>
        </div>

        {/* Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
          {processSteps.map((step) => (
            <div
              key={step.step}
              className="relative rounded-2xl p-6 bg-slate-900/90 border border-slate-800 hover:border-slate-700 flex flex-col justify-between group transition-all hover:-translate-y-1"
            >
              <div>
                {/* Step number and icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getStepIcon(step.icon)}
                  </div>
                  <span className="text-2xl font-black font-mono text-slate-700 group-hover:text-indigo-400/50 transition-colors">
                    {step.step}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              {/* Duration badge */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                <Clock className="w-3.5 h-3.5 text-cyan-400" />
                <span>{step.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
