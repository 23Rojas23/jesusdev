import type { FC } from 'react';
import { processSteps } from '../data/content';
import { Compass, Code, CheckCircle, Rocket, Palette, Clock } from 'lucide-react';

export const Process: FC = () => {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-5 h-5 text-indigo-600" />;
      case 'Figma':
        return <Palette className="w-5 h-5 text-indigo-600" />;
      case 'Code':
        return <Code className="w-5 h-5 text-indigo-600" />;
      case 'CheckCircle':
        return <CheckCircle className="w-5 h-5 text-indigo-600" />;
      case 'Rocket':
        return <Rocket className="w-5 h-5 text-indigo-600" />;
      default:
        return <Code className="w-5 h-5 text-indigo-600" />;
    }
  };

  return (
    <section id="proceso" className="py-20 md:py-24 bg-slate-50/70 border-b border-slate-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-2">
            Metodología de Trabajo
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Un proceso transparente paso a paso
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Sabrás con exactitud cómo evoluciona tu sitio web en todo momento, con comunicación directa y revisiones continuas.
          </p>
        </div>

        {/* Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 relative">
          {processSteps.map((step) => (
            <div
              key={step.step}
              className="relative rounded-2xl p-6 bg-white border border-slate-200 hover:border-slate-300 flex flex-col justify-between transition-all duration-200 shadow-2xs hover:shadow-md"
            >
              <div>
                {/* Step number and icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-9 h-9 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center">
                    {getStepIcon(step.icon)}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                    Paso {step.step}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              {/* Duration badge */}
              <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>{step.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
