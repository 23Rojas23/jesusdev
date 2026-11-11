import type { FC } from 'react';
import { processSteps } from '../data/content';
import { Compass, Code, CheckCircle, Rocket, Palette, Clock } from 'lucide-react';
import { SectionHeader } from './ui/SectionHeader';
import { Reveal } from './ui/Reveal';

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
    <section
      id="proceso"
      className="py-20 md:py-24 bg-slate-50/80 border-b border-slate-200/80 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Un proceso transparente paso a paso"
          description="Sabrás con exactitud cómo evoluciona tu sitio web en todo momento, con comunicación directa y revisiones continuas."
        />

        {/* Steps Timeline Grid */}
        <div className="relative">
          {/* Desktop horizontal connector rail */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-11 left-[10%] right-[10%] h-px bg-gradient-to-r from-slate-200 via-indigo-200 to-slate-200 pointer-events-none"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 relative">
            {processSteps.map((step, idx) => (
              <Reveal key={step.step} delay={idx * 0.05} className="h-full">
                <div className="relative h-full rounded-2xl p-6 bg-white border border-slate-200 hover:border-slate-300 flex flex-col justify-between transition-all duration-200 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-0.5 group">
                  <div>
                    {/* Step number and icon */}
                    <div className="flex items-center justify-between mb-5 relative z-10">
                      <div className="w-10 h-10 rounded-xl bg-indigo-50/80 border border-indigo-100 flex items-center justify-center group-hover:scale-105 group-hover:bg-indigo-100/80 transition-all">
                        {getStepIcon(step.icon)}
                      </div>
                      <span className="text-xs font-mono font-bold text-indigo-700 bg-indigo-50 border border-indigo-100 px-2.5 py-0.5 rounded-full">
                        Paso {step.step}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                      {step.description}
                    </p>
                  </div>

                  {/* Duration badge */}
                  <div className="pt-3.5 border-t border-slate-100 flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                    <Clock className="w-3.5 h-3.5 text-indigo-500" />
                    <span>{step.duration}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
