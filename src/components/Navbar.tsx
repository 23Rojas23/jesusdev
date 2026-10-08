import { useState, useEffect } from 'react';
import type { FC } from 'react';
import { personalInfo } from '../data/content';
import { Menu, X, Code2, ArrowRight, MessageSquare } from 'lucide-react';

interface NavbarProps {
  onOpenContact: (planOrService?: string) => void;
}

export const Navbar: FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Tecnologías', href: '#tecnologias' },
    { label: 'Proceso', href: '#proceso' },
    { label: 'Calculadora', href: '#calculadora' },
    { label: 'Planes', href: '#precios' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-sm shadow-slate-900/5 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 group cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-500 p-0.5 shadow-md shadow-indigo-500/15 group-hover:shadow-indigo-500/30 transition-shadow">
              <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
                <Code2 className="w-5 h-5 text-indigo-600 group-hover:text-cyan-600 transition-colors" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors">
                &lt;{personalInfo.brandName} /&gt;
              </span>
              <span className="text-[10px] tracking-wider uppercase text-slate-500 font-medium -mt-1">
                Web Development
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 bg-slate-100/90 border border-slate-200/90 rounded-full px-4 py-1.5 backdrop-blur-sm">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-xs xl:text-sm font-medium text-slate-600 hover:text-slate-900 px-3 py-1.5 rounded-full hover:bg-white hover:shadow-xs transition-all cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-3">
            <div className="hidden xl:flex items-center gap-2 text-xs text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-full font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
              </span>
              Disponible para proyectos
            </div>

            <button
              onClick={() => onOpenContact()}
              className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-700 hover:to-cyan-700 px-5 py-2.5 rounded-xl shadow-md shadow-indigo-600/20 hover:shadow-indigo-600/30 transition-all cursor-pointer transform hover:-translate-y-0.5"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Cotizar Proyecto</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 focus:outline-none"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 border-b border-slate-200 px-4 pt-3 pb-6 animate-fadeIn shadow-xl backdrop-blur-xl">
          <div className="flex flex-col gap-1 mb-4">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-left py-2.5 px-3 rounded-lg text-slate-700 hover:bg-slate-50 hover:text-indigo-600 transition-colors font-medium text-base"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-3">
            <div className="flex items-center gap-2 text-xs text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-2 rounded-lg font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
              </span>
              Disponible para nuevos clientes
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-700 hover:to-cyan-700 shadow-md shadow-indigo-600/20 text-sm"
            >
              <span>Solicitar Cotización</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
