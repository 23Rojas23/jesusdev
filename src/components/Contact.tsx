import { useState, useEffect } from 'react';
import type { FC, ChangeEvent, FormEvent } from 'react';
import { personalInfo } from '../data/content';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Copy,
  Calendar,
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
    projectType: 'Landing Express ($120)',
    budget: '$120 - $200 USD',
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
    <section id="contacto" className="py-20 md:py-24 relative scroll-mt-20 bg-slate-50/70 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-2">
            Contacto Directo
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Hablemos de tu próximo sitio web
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Completa el formulario o escríbeme directamente. Responderé en menos de 24 horas con una propuesta a tu medida.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct channels and social proof */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact Card */}
            <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 space-y-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">
                Información de Contacto
              </h3>

              <div className="space-y-4">
                {/* Email with copy */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div className="truncate">
                      <div className="text-xs text-slate-500 font-medium">Correo Electrónico</div>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-sm font-bold text-slate-900 hover:text-indigo-600 transition-colors truncate block"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer shrink-0 shadow-2xs"
                    title="Copiar correo"
                  >
                    {copiedEmail ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
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
                  className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-400 flex items-center justify-between gap-3 transition-all group shadow-2xs"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-medium">WhatsApp Inmediato</div>
                      <div className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                        {personalInfo.phone}
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 transition-colors" />
                </a>

                {/* Location */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-cyan-600" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium">Ubicación & Modalidad</div>
                    <div className="text-sm font-semibold text-slate-800">
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
                  className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl font-semibold text-sm bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 transition-all shadow-xs group"
                >
                  <Calendar className="w-4 h-4 text-indigo-600 group-hover:scale-110 transition-transform" />
                  <span>Agendar videollamada de 15 min</span>
                </a>
              </div>
            </div>

            {/* Response Time Note */}
            <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-600 flex items-start gap-3 shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 font-semibold">Respuesta en menos de 24 horas:</strong> Recibirás orientación clara sobre la mejor estructura para tu web y una propuesta personalizada.
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-10 shadow-xl shadow-slate-200/50 relative">
              {isSubmitted ? (
                <div className="text-center py-12 space-y-5 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-300 flex items-center justify-center mx-auto shadow-xs">
                    <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">¡Mensaje Enviado con Éxito!</h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                    Gracias por ponerte en contacto, <strong className="text-slate-900">{formData.name}</strong>. Ya he recibido los detalles de tu proyecto y me comunicaré contigo a <strong className="text-slate-900">{formData.email}</strong> a la brevedad.
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={generateWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-all shadow-md shadow-emerald-600/20"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Enviar también por WhatsApp</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-sm transition-colors cursor-pointer"
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
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                        Tu Nombre o Empresa *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Ej. Juan Pérez"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:bg-white focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                        Correo Electrónico *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="juan@empresa.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:bg-white focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Phone / WhatsApp */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                        Teléfono / WhatsApp
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+58 412 000 0000"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:bg-white focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition-colors"
                      />
                    </div>

                    {/* Project Type */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                        Tipo de Servicio
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:bg-white focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition-colors cursor-pointer"
                      >
                        <option value="Landing Express ($120)">Landing Express ($120)</option>
                        <option value="Sitio Web Corporativo Pro ($200)">Sitio Web Corporativo Pro ($200)</option>
                        <option value="Web Administrable con CMS ($350)">Web Administrable con CMS ($350)</option>
                        <option value="Catálogo con Pedidos a WhatsApp ($280)">Catálogo con Pedidos a WhatsApp ($280)</option>
                        <option value="Optimización de Velocidad & SEO">Optimización de Velocidad & SEO</option>
                        <option value="Mantenimiento o Consulta General">Mantenimiento o Consulta General</option>
                        {!['Landing Express ($120)', 'Sitio Web Corporativo Pro ($200)', 'Web Administrable con CMS ($350)', 'Catálogo con Pedidos a WhatsApp ($280)', 'Optimización de Velocidad & SEO', 'Mantenimiento o Consulta General'].includes(formData.projectType) && formData.projectType && (
                          <option value={formData.projectType}>{formData.projectType}</option>
                        )}
                      </select>
                    </div>
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                      Presupuesto Estimado
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:bg-white focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition-colors cursor-pointer"
                    >
                      <option value="Menos de $150 USD">Menos de $150 USD (Landing Express)</option>
                      <option value="$150 - $250 USD">$150 - $250 USD (Web Corporativa Pro)</option>
                      <option value="$250 - $400 USD">$250 - $400 USD (Web Administrable / Catálogo)</option>
                      <option value="Más de $400 USD">Más de $400 USD (Proyecto personalizado o con extras)</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                      Detalles del Proyecto *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Cuéntame sobre tu empresa, qué objetivos tienes y qué funciones te gustaría tener..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:bg-white focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition-colors resize-none"
                    />
                  </div>

                  {/* Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-white bg-indigo-600 hover:bg-indigo-700 shadow-xs hover:shadow transition-all cursor-pointer text-sm"
                    >
                      <Send className="w-4 h-4" />
                      <span>Enviar Solicitud de Cotización</span>
                    </button>

                    <a
                      href={generateWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100/70 border border-emerald-300 text-sm transition-all shadow-2xs"
                    >
                      <Phone className="w-4 h-4 text-emerald-600" />
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
