import type { ButtonHTMLAttributes, FC } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';
import { buttonVariants } from './buttonVariants';

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

/**
 * Botón reutilizable alineado al sistema de diseño de JesusDev.
 */
export const Button: FC<ButtonProps> = ({
  className,
  variant,
  size,
  fullWidth,
  type = 'button',
  ...props
}) => {
  return (
    <button
      type={type}
      className={cn(buttonVariants({ variant, size, fullWidth }), className)}
      {...props}
    />
  );
};
