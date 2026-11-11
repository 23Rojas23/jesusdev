import { useState } from 'react';
import type { FC, ChangeEvent, FormEvent } from 'react';
import { AnimatePresence, m } from 'motion/react';
import { toast } from 'sonner';
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
  Loader2,
  AlertCircle,
  ChevronDown,
} from 'lucide-react';
import { cn } from '../lib/utils';
import { Button } from './ui/Button';
import { buttonVariants } from './ui/buttonVariants';
import { SectionHeader } from './ui/SectionHeader';
import { Reveal } from './ui/Reveal';

export interface ProjectInquiry {
  projectType: string;
  budget: string;
  message: string;
}

interface ContactProps {
  projectInquiry: ProjectInquiry;
  onProjectInquiryChange: (updates: Partial<ProjectInquiry>) => void;
  isSubmitted: boolean;
  onSubmittedChange: (submitted: boolean) => void;
}

const INPUT_CLASS =
  'w-full px-4 py-3 rounded-xl bg-slate-50/80 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:bg-white focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/15 transition-all';

export const Contact: FC<ContactProps> = ({
  projectInquiry,
  onProjectInquiryChange,
  isSubmitted,
  onSubmittedChange,
}) => {
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [honeypot, setHoneypot] = useState('');
  const [lastSubmitTime, setLastSubmitTime] = useState(0);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleContactChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContactInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleProjectChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    onProjectInquiryChange({ [name]: value });
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopiedEmail(true);
      toast.success('Correo copiado al portapapeles');
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      toast.error('No se pudo copiar automáticamente. Usa el enlace de correo.');
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Anti-spam honeypot detection
    if (honeypot) {
      onSubmittedChange(true);
      return;
    }

    // Rate-limiting / debounce (at least 6 seconds between submissions)
    const now = Date.now();
    if (now - lastSubmitTime < 6000) {
      setErrorMessage('Por favor espera unos segundos antes de enviar otra solicitud.');
      return;
    }

    setIsLoading(true);
    setErrorMessage(null);

    try {
      const formTarget = personalInfo.formSubmitToken || personalInfo.email;
      const response = await fetch(`https://formsubmit.co/ajax/${formTarget}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: `Nueva Solicitud de Cotización: ${contactInfo.name || 'Cliente'} - JesusDev`,
          _captcha: 'false',
          _honey: '',
          Nombre: contactInfo.name.trim(),
          Email: contactInfo.email.trim(),
          'Teléfono / WhatsApp': contactInfo.phone.trim() || 'No especificado',
          'Tipo de Servicio': projectInquiry.projectType,
          'Presupuesto Estimado': projectInquiry.budget,
          Mensaje: projectInquiry.message.trim(),
          _template: 'table',
        }),
      });

      const data = await response.json();

      if (response.ok || data.success === 'true' || data.success === true) {
        setLastSubmitTime(Date.now());
        onSubmittedChange(true);
        toast.success('Solicitud enviada correctamente');
      } else {
        throw new Error(data.message || 'Error al procesar el mensaje.');
      }
    } catch (error) {
      console.error('Error enviando formulario:', error);
      setErrorMessage(
        'Hubo un problema temporal al enviar el correo. Puedes intentar de nuevo o contactarme directamente por WhatsApp.'
      );
      toast.error('No se pudo enviar el correo. Puedes escribir por WhatsApp.');
    } finally {
      setIsLoading(false);
    }
  };

  const generateWhatsAppLink = () => {
    const text = `¡Hola ${personalInfo.name}!\n\nMi nombre es *${contactInfo.name || 'un cliente'}*.\nCorreo: ${contactInfo.email || 'N/A'}\nTeléfono: ${contactInfo.phone || 'N/A'}\nTipo de Proyecto: *${projectInquiry.projectType}*\nPresupuesto Estimado: *${projectInquiry.budget}*\n\n*Detalles:* ${projectInquiry.message || 'Me interesa cotizar un desarrollo web.'}`;
    return `https://wa.me/${personalInfo.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section
      id="contacto"
      className="py-20 md:py-24 relative scroll-mt-20 bg-slate-50/80 border-b border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Hablemos de tu próximo sitio web"
          description="Completa el formulario o escríbeme directamente. Responderé en menos de 24 horas con una propuesta a tu medida."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct channels and social proof */}
          <Reveal className="lg:col-span-5 space-y-6">
            {/* Quick Contact Card */}
            <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 space-y-6 shadow-[var(--shadow-card)]">
              <h3 className="text-xl font-bold text-slate-900">
                Información de Contacto
              </h3>

              <div className="space-y-4">
                {/* Email with copy */}
                <div className="p-4 rounded-2xl bg-slate-50/90 border border-slate-200 flex items-center justify-between gap-3">
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
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer shrink-0 shadow-2xs"
                    title="Copiar correo"
                    aria-label="Copiar correo electrónico"
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
                  className="p-4 rounded-2xl bg-slate-50/90 border border-slate-200 hover:border-emerald-400 flex items-center justify-between gap-3 transition-all group shadow-2xs"
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
                <div className="p-4 rounded-2xl bg-slate-50/90 border border-slate-200 flex items-center gap-3">
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
                  className={cn(
                    buttonVariants({ variant: 'secondary', size: 'md', fullWidth: true }),
                    'bg-slate-50 hover:bg-slate-100 border-slate-200 group'
                  )}
                >
                  <Calendar className="w-4 h-4 text-indigo-600 group-hover:scale-105 transition-transform" />
                  <span>Agendar videollamada de 15 min</span>
                </a>
              </div>
            </div>

            {/* Response Time Note */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-600 flex items-start gap-3 shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 font-semibold">Respuesta en menos de 24 horas:</strong> Recibirás orientación clara sobre la mejor estructura para tu web y una propuesta personalizada.
              </div>
            </div>
          </Reveal>

          {/* Right Column: Contact Form */}
          <Reveal delay={0.08} className="lg:col-span-7">
            <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-10 shadow-[var(--shadow-card-hover)] relative">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <m.div
                    key="submitted-state"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.25 }}
                    className="text-center py-12 space-y-5"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-300 flex items-center justify-center mx-auto shadow-xs">
                      <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">¡Mensaje Enviado con Éxito!</h3>
                    <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                      Gracias por ponerte en contacto, <strong className="text-slate-900">{contactInfo.name}</strong>. Ya he recibido los detalles de tu proyecto y me comunicaré contigo a <strong className="text-slate-900">{contactInfo.email}</strong> a la brevedad.
                    </p>

                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <a
                        href={generateWhatsAppLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={buttonVariants({ variant: 'whatsappSolid', size: 'md' })}
                      >
                        <Phone className="w-4 h-4" />
                        <span>Enviar también por WhatsApp</span>
                      </a>
                      <Button
                        variant="subtle"
                        size="md"
                        onClick={() => {
                          onSubmittedChange(false);
                          setErrorMessage(null);
                        }}
                      >
                        <span>Enviar otro mensaje</span>
                      </Button>
                    </div>
                  </m.div>
                ) : (
                  <m.form
                    key="form-state"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    action={`https://formsubmit.co/${personalInfo.formSubmitToken || personalInfo.email}`}
                    method="POST"
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    {/* Honeypot field (hidden from real users, trap for spam bots) */}
                    <div className="hidden" aria-hidden="true">
                      <input
                        type="text"
                        name="_honey"
                        value={honeypot}
                        onChange={(e) => setHoneypot(e.target.value)}
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name */}
                      <div>
                        <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                          Tu Nombre o Empresa *
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          name="name"
                          required
                          maxLength={100}
                          autoComplete="name"
                          value={contactInfo.name}
                          onChange={handleContactChange}
                          placeholder="Ej. Juan Pérez"
                          className={INPUT_CLASS}
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="contact-email" className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                          Correo Electrónico *
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          name="email"
                          required
                          maxLength={120}
                          autoComplete="email"
                          value={contactInfo.email}
                          onChange={handleContactChange}
                          placeholder="juan@empresa.com"
                          className={INPUT_CLASS}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Phone / WhatsApp */}
                      <div>
                        <label htmlFor="contact-phone" className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                          Teléfono / WhatsApp
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          name="phone"
                          maxLength={30}
                          autoComplete="tel"
                          value={contactInfo.phone}
                          onChange={handleContactChange}
                          placeholder="+58 412 000 0000"
                          className={INPUT_CLASS}
                        />
                        <p className="mt-1.5 text-[11px] text-slate-500">
                          Formato local (0412 123 4567) o internacional (+58...)
                        </p>
                      </div>

                      {/* Project Type */}
                      <div>
                        <label htmlFor="contact-service" className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                          Tipo de Servicio
                        </label>
                        <div className="relative">
                          <select
                            id="contact-service"
                            name="projectType"
                            value={projectInquiry.projectType}
                            onChange={handleProjectChange}
                            className={cn(INPUT_CLASS, 'appearance-none pr-10 cursor-pointer')}
                          >
                            <option value="Landing Express ($120)">Landing Express ($120)</option>
                            <option value="Sitio Web Corporativo Pro ($200)">Sitio Web Corporativo Pro ($200)</option>
                            <option value="Web Administrable con CMS ($350)">Web Administrable con CMS ($350)</option>
                            <option value="Catálogo con Pedidos a WhatsApp ($280)">Catálogo con Pedidos a WhatsApp ($280)</option>
                            <option value="Optimización de Velocidad & SEO">Optimización de Velocidad & SEO</option>
                            <option value="Mantenimiento o Consulta General">Mantenimiento o Consulta General</option>
                            {!['Landing Express ($120)', 'Sitio Web Corporativo Pro ($200)', 'Web Administrable con CMS ($350)', 'Catálogo con Pedidos a WhatsApp ($280)', 'Optimización de Velocidad & SEO', 'Mantenimiento o Consulta General'].includes(projectInquiry.projectType) && projectInquiry.projectType && (
                              <option value={projectInquiry.projectType}>{projectInquiry.projectType}</option>
                            )}
                          </select>
                          <ChevronDown
                            aria-hidden="true"
                            className="w-4 h-4 text-slate-500 pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Budget */}
                    <div>
                      <label htmlFor="contact-budget" className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                        Presupuesto Estimado
                      </label>
                      <div className="relative">
                        <select
                          id="contact-budget"
                          name="budget"
                          value={projectInquiry.budget}
                          onChange={handleProjectChange}
                          className={cn(INPUT_CLASS, 'appearance-none pr-10 cursor-pointer')}
                        >
                          <option value="Menos de $150 USD">Menos de $150 USD (Landing Express)</option>
                          <option value="$150 - $250 USD">$150 - $250 USD (Web Corporativa Pro)</option>
                          <option value="$250 - $400 USD">$250 - $400 USD (Web Administrable / Catálogo)</option>
                          <option value="Más de $400 USD">Más de $400 USD (Proyecto personalizado o con extras)</option>
                        </select>
                        <ChevronDown
                          aria-hidden="true"
                          className="w-4 h-4 text-slate-500 pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-wider text-slate-800">
                          Detalles del Proyecto *
                        </label>
                        <span className="text-[11px] font-mono text-slate-400 tabular-nums">
                          {projectInquiry.message.length}/2000
                        </span>
                      </div>
                      <textarea
                        id="contact-message"
                        name="message"
                        required
                        maxLength={2000}
                        rows={4}
                        value={projectInquiry.message}
                        onChange={handleProjectChange}
                        placeholder="Cuéntame sobre tu empresa, qué objetivos tienes y qué funciones te gustaría tener..."
                        className={cn(INPUT_CLASS, 'resize-none')}
                      />
                    </div>

                    {/* Error Notification */}
                    {errorMessage && (
                      <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs sm:text-sm flex items-start gap-2.5 animate-fadeIn">
                        <AlertCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                        <div className="flex-1 leading-relaxed">{errorMessage}</div>
                      </div>
                    )}

                    {/* Buttons */}
                    <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        disabled={isLoading}
                        className="w-full sm:flex-1"
                      >
                        {isLoading ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>Enviando mensaje...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>Enviar Solicitud de Cotización</span>
                          </>
                        )}
                      </Button>

                      <a
                        href={generateWhatsAppLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          buttonVariants({ variant: 'whatsapp', size: 'lg' }),
                          'w-full sm:w-auto'
                        )}
                      >
                        <Phone className="w-4 h-4 text-emerald-600" />
                        <span>Escribir por WhatsApp</span>
                      </a>
                    </div>
                  </m.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
