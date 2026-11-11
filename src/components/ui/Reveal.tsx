import type { FC, ReactNode } from 'react';
import { m } from 'motion/react';
import { cn } from '../../lib/utils';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  yOffset?: number;
}

/**
 * Contenedor ligero para animar la aparición de bloques al entrar en el viewport.
 */
export const Reveal: FC<RevealProps> = ({
  children,
  className,
  delay = 0,
  yOffset = 16,
}) => {
  return (
    <m.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: 0.42,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn(className)}
    >
      {children}
    </m.div>
  );
};
