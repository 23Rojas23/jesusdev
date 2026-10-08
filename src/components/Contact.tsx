import { useState, useEffect } from 'react';
import type { FC, ChangeEvent, FormEvent } from 'react';
import { personalInfo } from '../data/content';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  CheckCircle2,
  Copy,
  Calendar,
  Sparkles,
  ExternalLink,
} from 'lucide-react';

interface ContactProps {
  initialServiceOrPlan?: string;
  initialEstimate?: string;
}

export const Contact: FC<ContactProps> = ({
  initialServiceOrPlan,
  initialEstimate,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Landing Page de Alta Conversión',
    budget: '$300 - $600 USD',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialServiceOrPlan) {
      setFormData((prev) => ({
        ...prev,
        projectType: initialServiceOrPlan,
        message: prev.message || `Hola, me interesa solicitar información sobre el paquete/servicio: ${initialServiceOrPlan}.`,
      }));
    }
  }, [initialServiceOrPlan]);

  useEffect(() => {
    if (initialEstimate) {
      setFormData((prev) => ({
        ...prev,
        message: `Hola, coticé en tu calculadora web la siguiente configuración:\n${initialEstimate}\n\nMe gustaría revisar detalles.`,
      }));
    }
  }, [initialEstimate]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const generateWhatsAppLink = () => {
    const text = `¡Hola ${personalInfo.name}!\n\nMi nombre es *${formData.name || 'un cliente'}*.\nCorreo: ${formData.email || 'N/A'}\nTeléfono: ${formData.phone || 'N/A'}\nTipo de Proyecto: *${formData.projectType}*\nPresupuesto Estimado: *${formData.budget}*\n\n*Detalles:* ${formData.message || 'Me interesa cotizar un desarrollo web.'}`;
    return `https://wa.me/${personalInfo.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contacto" className="py-24 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/70 border border-indigo-800/60 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
            Hablemos de tu Proyecto
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            ¿Listo para llevar tu negocio al{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              siguiente nivel?
            </span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Completa el formulario o escríbeme directamente. Responderé en menos de 24 horas con una propuesta a tu medida.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct channels and social proof */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact Card */}
            <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 space-y-6 shadow-xl">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span>Información de Contacto</span>
              </h3>

              <div className="space-y-4">
                {/* Email with copy */}
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-10 h-10 rounded-xl bg-indigo-950 border border-indigo-800/50 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-indigo-400" />
                    </div>
                    <div className="truncate">
                      <div className="text-xs text-slate-400">Correo Electrónico</div>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors truncate block"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer shrink-0"
                    title="Copiar correo"
                  >
                    {copiedEmail ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* WhatsApp Direct */}
                <a
                  href={`https://wa.me/${personalInfo.whatsappNumber}?text=${encodeURIComponent(personalInfo.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-slate-950 border border-slate-800 hover:border-emerald-500/50 flex items-center justify-between gap-3 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-800/50 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">WhatsApp Inmediato</div>
                      <div className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors">
                        {personalInfo.phone}
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-colors" />
                </a>

                {/* Location */}
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-800/50 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Ubicación & Modalidad</div>
                    <div className="text-sm font-medium text-slate-200">
                      {personalInfo.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Calendly Booking banner */}
              <div className="pt-2">
                <a
                  href={personalInfo.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl font-semibold text-sm bg-gradient-to-r from-slate-800 to-slate-850 hover:from-slate-700 hover:to-slate-800 text-white border border-slate-700 transition-all shadow-md group"
                >
                  <Calendar className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                  <span>Agendar videollamada de 15 min</span>
                </a>
              </div>
            </div>

            {/* Response Time Guarantee */}
            <div className="p-5 rounded-2xl bg-indigo-950/30 border border-indigo-900/40 text-xs sm:text-sm text-slate-300 flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <strong>Respuesta garantizada en 24 horas:</strong> Recibirás un desglose preliminar de cómo estructurar tu proyecto y un presupuesto personalizado sin compromiso.
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-10 shadow-2xl relative">
              {isSubmitted ? (
                <div className="text-center py-12 space-y-5 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-950 border border-emerald-500/50 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">¡Mensaje Enviado con Éxito!</h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                    Gracias por ponerte en contacto, <strong className="text-white">{formData.name}</strong>. Ya he recibido los detalles de tu proyecto y me comunicaré contigo a <strong className="text-white">{formData.email}</strong> a la brevedad.
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={generateWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all shadow-lg shadow-emerald-600/30"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Enviar también por WhatsApp</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium text-sm transition-colors cursor-pointer"
                    >
                      <span>Enviar otro mensaje</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                        Tu Nombre o Empresa *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Ej. Juan Pérez"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                        Correo Electrónico *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="juan@empresa.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Phone / WhatsApp */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                        Teléfono / WhatsApp
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+34 600 000 000"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                      />
                    </div>

                    {/* Project Type */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                        Tipo de Servicio
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors cursor-pointer"
                      >
                        <option value="Landing Page de Alta Conversión">Landing Page de Alta Conversión</option>
                        <option value="Sitio Web Corporativo Pro">Sitio Web Corporativo Pro</option>
                        <option value="Tienda Online / E-Commerce">Tienda Online / E-Commerce</option>
                        <option value="Aplicación Web / Panel SaaS">Aplicación Web / Panel SaaS</option>
                        <option value="Optimización de Velocidad & SEO">Optimización de Velocidad & SEO</option>
                        <option value="Mantenimiento o Consulta General">Mantenimiento o Consulta General</option>
                      </select>
                    </div>
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Presupuesto Estimado
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors cursor-pointer"
                    >
                      <option value="Menos de $300 USD">Menos de $300 USD</option>
                      <option value="$300 - $600 USD">$300 - $600 USD (Landing Express / Web Inicial)</option>
                      <option value="$600 - $1,200 USD">$600 - $1,200 USD (Web Corporativa Pro)</option>
                      <option value="Más de $1,200 USD">Más de $1,200 USD (E-commerce o App a medida)</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Detalles del Proyecto *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Cuéntame sobre tu empresa, qué objetivos tienes y qué funciones te gustaría tener..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors resize-none"
                    />
                  </div>

                  {/* Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 shadow-lg shadow-indigo-600/30 transition-all cursor-pointer transform hover:-translate-y-0.5 text-sm"
                    >
                      <Send className="w-4 h-4" />
                      <span>Enviar Solicitud de Cotización</span>
                    </button>

                    <a
                      href={generateWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl font-semibold text-emerald-400 bg-emerald-950/50 hover:bg-emerald-900/50 border border-emerald-800/50 text-sm transition-all"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Escribir por WhatsApp</span>
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
