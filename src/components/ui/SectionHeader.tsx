import type { FC } from 'react';
import { cn } from '../../lib/utils';
import { Reveal } from './Reveal';

interface SectionHeaderProps {
  title: string;
  description: string;
  className?: string;
}

/**
 * Encabezado estandarizado para las secciones principales de la landing page.
 */
export const SectionHeader: FC<SectionHeaderProps> = ({
  title,
  description,
  className,
}) => {
  return (
    <Reveal className={cn('text-center max-w-3xl mx-auto mb-14', className)}>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight text-balance">
        {title}
      </h2>
      <p className="mt-3.5 text-slate-600 text-base sm:text-lg leading-relaxed text-pretty">
        {description}
      </p>
    </Reveal>
  );
};
