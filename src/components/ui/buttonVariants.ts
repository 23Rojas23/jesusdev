import { cva } from 'class-variance-authority';

/**
 * Variantes compartidas de estilos para botones y enlaces de acción.
 */
export const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 cursor-pointer active:scale-[0.98] disabled:opacity-65 disabled:cursor-not-allowed disabled:active:scale-100',
  {
    variants: {
      variant: {
        primary:
          'bg-indigo-600 text-white hover:bg-indigo-700 shadow-xs hover:shadow-md hover:shadow-indigo-600/15',
        secondary:
          'bg-white text-slate-700 hover:text-slate-900 hover:bg-slate-50 border border-slate-300 hover:border-slate-400 shadow-2xs',
        subtle:
          'bg-slate-100 text-slate-800 hover:bg-indigo-600 hover:text-white border border-slate-200 hover:border-indigo-600',
        dark:
          'bg-slate-900 text-white hover:bg-indigo-600 shadow-xs hover:shadow-md',
        whatsapp:
          'bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200 shadow-2xs',
        whatsappSolid:
          'bg-emerald-600 text-white hover:bg-emerald-700 shadow-md shadow-emerald-600/20',
      },
      size: {
        sm: 'px-4 py-2 text-xs rounded-lg',
        md: 'px-5 py-3 text-xs sm:text-sm rounded-xl',
        lg: 'px-6 py-3.5 text-sm sm:text-base rounded-xl',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      fullWidth: false,
    },
  }
);
