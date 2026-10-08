import { useState } from 'react';
import type { FC } from 'react';
import { faqData } from '../data/content';
import { HelpCircle, ChevronDown } from 'lucide-react';

export const Faq: FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-4 shadow-xs">
            <HelpCircle className="w-3.5 h-3.5 text-indigo-600" />
            Preguntas Frecuentes
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Resolvemos tus dudas antes de empezar
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            ¿Tienes alguna otra consulta? Puedes escribirme directamente por WhatsApp o correo.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3.5">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-indigo-50/40 border-indigo-300 shadow-sm'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer transition-colors"
                >
                  <span className="font-bold text-base sm:text-lg text-slate-900 pr-4">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-indigo-600 text-white rotate-180 shadow-xs'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-200/60 pt-4 animate-fadeIn">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
