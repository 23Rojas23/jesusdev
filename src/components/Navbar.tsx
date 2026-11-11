import { useState, useEffect } from 'react';
import type { FC } from 'react';
import { AnimatePresence, m } from 'motion/react';
import { personalInfo } from '../data/content';
import { Menu, X, Code2, ArrowRight, MessageSquare } from 'lucide-react';
import { cn } from '../lib/utils';
import { Button } from './ui/Button';

interface NavbarProps {
  onOpenContact: (planOrService?: string) => void;
}

const NAV_LINKS = [
  { id: 'servicios', label: 'Servicios', href: '#servicios' },
  { id: 'ventajas', label: 'Ventajas', href: '#ventajas' },
  { id: 'proceso', label: 'Proceso', href: '#proceso' },
  { id: 'calculadora', label: 'Calculadora', href: '#calculadora' },
  { id: 'precios', label: 'Planes', href: '#precios' },
  { id: 'faq', label: 'FAQ', href: '#faq' },
];

export const Navbar: FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);
      if (scrollY < 160) {
        setActiveSection('');
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((link) => document.getElementById(link.id)).filter(
      (el): el is HTMLElement => Boolean(el)
    );

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0 && window.scrollY >= 160) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: '-25% 0px -55% 0px',
        threshold: [0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string, id: string) => {
    setMobileMenuOpen(false);
    setActiveSection(id);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 group cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              setActiveSection('');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="w-9 h-9 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-xs group-hover:bg-indigo-600 transition-colors">
              <Code2 className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-base tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors">
                {personalInfo.brandName}
              </span>
              <span className="text-[10px] tracking-wider uppercase text-slate-500 font-medium -mt-0.5">
                Frontend Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links con Scrollspy animado */}
          <nav
            aria-label="Navegación principal"
            className="hidden lg:flex items-center gap-1 bg-slate-100/85 border border-slate-200/80 rounded-full p-1 backdrop-blur-sm"
          >
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => handleNavClick(link.href, link.id)}
                  className={cn(
                    'relative text-xs font-medium px-3.5 py-1.5 rounded-full transition-colors cursor-pointer',
                    isActive ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'
                  )}
                >
                  {isActive && (
                    <m.span
                      layoutId="activeNavPill"
                      transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                      className="absolute inset-0 bg-white rounded-full shadow-xs border border-slate-200/60"
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-3">
            <div className="hidden xl:flex items-center gap-2 text-xs text-slate-700 bg-white border border-slate-200 px-3 py-1.5 rounded-full font-medium shadow-2xs">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Disponible para nuevos proyectos</span>
            </div>

            <Button variant="primary" size="sm" onClick={() => onOpenContact()} className="py-2.5">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Cotizar Proyecto</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 transition-colors cursor-pointer"
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <m.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-lg"
          >
            <div className="px-4 pt-3 pb-6">
              <div className="flex flex-col gap-1 mb-4">
                {NAV_LINKS.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <button
                      key={link.id}
                      type="button"
                      onClick={() => handleNavClick(link.href, link.id)}
                      className={cn(
                        'text-left py-2.5 px-3.5 rounded-xl transition-colors font-medium text-sm cursor-pointer',
                        isActive
                          ? 'bg-indigo-50 text-indigo-700 font-semibold'
                          : 'text-slate-700 hover:bg-slate-50 hover:text-indigo-600'
                      )}
                    >
                      {link.label}
                    </button>
                  );
                })}
              </div>

              <div className="pt-3 border-t border-slate-100 flex flex-col gap-3">
                <div className="flex items-center gap-2 text-xs text-slate-700 bg-slate-50 border border-slate-200 px-3 py-2 rounded-xl font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                  <span>Disponible para proyectos</span>
                </div>

                <Button
                  variant="primary"
                  size="md"
                  fullWidth
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenContact();
                  }}
                >
                  <span>Solicitar Cotización</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
};
