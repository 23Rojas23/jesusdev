import { useState } from 'react';
import type { FC } from 'react';
import { m } from 'motion/react';
import { Check, Clock, Send } from 'lucide-react';
import { cn } from '../lib/utils';
import { Button } from './ui/Button';
import { SectionHeader } from './ui/SectionHeader';
import { Reveal } from './ui/Reveal';

interface BudgetEstimatorProps {
  onApplyEstimate: (estimateSummary: string, serviceName?: string, budgetTier?: string) => void;
}

interface ProjectTypeOption {
  id: string;
  name: string;
  basePrice: number;
  baseDays: number;
  description: string;
}

interface AddonOption {
  id: string;
  name: string;
  price: number;
  days: number;
  description: string;
}

const PROJECT_TYPES: ProjectTypeOption[] = [
  {
    id: 'landing',
    name: 'Landing Express',
    basePrice: 120,
    baseDays: 5,
    description: 'Ideal para productos, marcas personales o captación directa a WhatsApp.',
  },
  {
    id: 'corporate',
    name: 'Sitio Web Corporativo Pro',
    basePrice: 200,
    baseDays: 10,
    description: 'Presencia formal multi-página (Inicio, Nosotros, Servicios, Contacto, etc.).',
  },
  {
    id: 'ecommerce',
    name: 'Catálogo Digital con Pedidos a WhatsApp',
    basePrice: 280,
    baseDays: 14,
    description: 'Catálogo dinámico con carrito y botón de pedido directo a WhatsApp o Pago Móvil.',
  },
  {
    id: 'webapp',
    name: 'Web Administrable (CMS) / Sistema a Medida',
    basePrice: 350,
    baseDays: 18,
    description: 'Panel intuitivo para actualizar catálogo, fotos, precios y contenidos sin tocar código.',
  },
];

const ADDONS_LIST: AddonOption[] = [
  {
    id: 'multilang',
    name: 'Multi-idioma (ej. ES + EN)',
    price: 35,
    days: 2,
    description: 'Traducción estructurada y conmutador de idiomas.',
  },
  {
    id: 'blog',
    name: 'Sección Blog / Noticias',
    price: 45,
    days: 2,
    description: 'Publicación de artículos para posicionamiento orgánico en Google.',
  },
  {
    id: 'payments',
    name: 'Botón de Pago / WhatsApp Checkout',
    price: 40,
    days: 2,
    description: 'Integración para pedidos automáticos a WhatsApp, Pago Móvil o Binance.',
  },
  {
    id: 'seo_pack',
    name: 'Pack SEO Local & Google Maps',
    price: 30,
    days: 1,
    description: 'Indexación en Google Search Console, ficha de Google Maps y meta-tags.',
  },
  {
    id: 'auth_users',
    name: 'Módulo de Clientes / Login',
    price: 60,
    days: 3,
    description: 'Registro seguro, perfiles de usuario y accesos protegidos.',
  },
  {
    id: 'analytics_meta',
    name: 'Píxeles de Meta Ads + Google Analytics',
    price: 25,
    days: 1,
    description: 'Medición de conversiones, clics en WhatsApp y analítica web.',
  },
];

export const BudgetEstimator: FC<BudgetEstimatorProps> = ({ onApplyEstimate }) => {
  const [selectedType, setSelectedType] = useState<string>('corporate');
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['seo_pack']);
  const [isExpress, setIsExpress] = useState<boolean>(false);

  const toggleAddon = (addonId: string) => {
    setSelectedAddons((prev) =>
      prev.includes(addonId)
        ? prev.filter((id) => id !== addonId)
        : [...prev, addonId]
    );
  };

  const currentType = PROJECT_TYPES.find((t) => t.id === selectedType) || PROJECT_TYPES[0];

  const addonsTotal = selectedAddons.reduce((sum, addonId) => {
    const addon = ADDONS_LIST.find((a) => a.id === addonId);
    return sum + (addon ? addon.price : 0);
  }, 0);

  const addonsDays = selectedAddons.reduce((sum, addonId) => {
    const addon = ADDONS_LIST.find((a) => a.id === addonId);
    return sum + (addon ? addon.days : 0);
  }, 0);

  let rawTotal = currentType.basePrice + addonsTotal;
  let totalDays = currentType.baseDays + addonsDays;

  if (isExpress) {
    rawTotal = Math.round(rawTotal * 1.20);
    totalDays = Math.max(3, Math.round(totalDays * 0.65));
  }

  const handleSendToContact = () => {
    const chosenAddonsNames = selectedAddons
      .map((id) => ADDONS_LIST.find((a) => a.id === id)?.name)
      .filter(Boolean)
      .join(', ');

    const summary = `Tipo: ${currentType.name} | Opciones extra: ${
      chosenAddonsNames || 'Ninguna'
    } | Modalidad: ${isExpress ? 'Entrega Express Prioritaria' : 'Entrega Estándar'} | Estimado: ~$${rawTotal} USD`;

    let serviceName = 'Landing Express ($120)';
    if (currentType.id === 'landing') serviceName = 'Landing Express ($120)';
    else if (currentType.id === 'corporate') serviceName = 'Sitio Web Corporativo Pro ($200)';
    else if (currentType.id === 'ecommerce') serviceName = 'Catálogo con Pedidos a WhatsApp ($280)';
    else if (currentType.id === 'webapp') serviceName = 'Web Administrable con CMS ($350)';

    let budgetTier = 'Menos de $150 USD';
    if (rawTotal <= 150) budgetTier = 'Menos de $150 USD';
    else if (rawTotal <= 250) budgetTier = '$150 - $250 USD';
    else if (rawTotal <= 400) budgetTier = '$250 - $400 USD';
    else budgetTier = 'Más de $400 USD';

    onApplyEstimate(summary, serviceName, budgetTier);
  };

  return (
    <section
      id="calculadora"
      className="py-20 md:py-24 relative scroll-mt-20 bg-white border-b border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Calcula la estimación de tu proyecto"
          description="Selecciona el tipo de web y los complementos que necesitas para obtener un cálculo transparente de referencia."
        />

        {/* Calculator Main Box */}
        <Reveal>
          <div className="rounded-3xl bg-slate-50/90 border border-slate-200/90 p-5 sm:p-8 lg:p-10 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Options selection (Left col) */}
              <div className="lg:col-span-7 space-y-8">
                {/* Step 1: Project Type */}
                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-3">
                    1. ¿Qué tipo de proyecto necesitas?
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {PROJECT_TYPES.map((type) => {
                      const isSelected = selectedType === type.id;
                      return (
                        <button
                          key={type.id}
                          type="button"
                          aria-pressed={isSelected}
                          onClick={() => setSelectedType(type.id)}
                          className={cn(
                            'text-left p-4 rounded-xl border transition-all duration-150 cursor-pointer',
                            isSelected
                              ? 'bg-indigo-50/75 border-indigo-600 text-slate-900 shadow-sm ring-2 ring-indigo-600/15'
                              : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300 shadow-2xs'
                          )}
                        >
                          <div className="flex items-start justify-between gap-2 mb-1.5">
                            <span className="font-bold text-sm sm:text-base text-slate-900 leading-snug">
                              {type.name}
                            </span>
                            <span className="text-xs font-mono font-semibold text-indigo-600 shrink-0 tabular-nums">
                              ${type.basePrice}
                            </span>
                          </div>
                          <p className="text-xs text-slate-600 leading-relaxed">
                            {type.description}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Step 2: Addons */}
                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-3">
                    2. Agrega complementos opcionales
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {ADDONS_LIST.map((addon) => {
                      const isChecked = selectedAddons.includes(addon.id);
                      return (
                        <button
                          key={addon.id}
                          type="button"
                          aria-pressed={isChecked}
                          onClick={() => toggleAddon(addon.id)}
                          className={cn(
                            'p-3.5 rounded-xl border flex items-center justify-between gap-3 text-left cursor-pointer transition-all duration-150',
                            isChecked
                              ? 'bg-indigo-50/75 border-indigo-500 text-slate-900 shadow-xs'
                              : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300 shadow-2xs'
                          )}
                        >
                          <div className="flex items-start gap-3">
                            <div
                              className={cn(
                                'w-5 h-5 rounded-md flex items-center justify-center border shrink-0 mt-0.5 transition-colors',
                                isChecked
                                  ? 'bg-indigo-600 border-indigo-600 text-white'
                                  : 'border-slate-300 bg-slate-50'
                              )}
                            >
                              {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                            </div>
                            <div>
                              <div className="text-xs sm:text-sm font-semibold text-slate-900">
                                {addon.name}
                              </div>
                              <div className="text-[11px] text-slate-500 leading-snug mt-0.5">
                                {addon.description}
                              </div>
                            </div>
                          </div>
                          <span className="text-xs font-mono font-semibold text-emerald-700 shrink-0 tabular-nums">
                            +${addon.price}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Step 3: Urgency toggle */}
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center justify-between gap-4">
                  <div>
                    <span className="text-sm font-bold text-slate-900 block">
                      Modalidad Express / Entrega Prioritaria
                    </span>
                    <span className="text-xs text-slate-600">
                      Reduce el plazo de entrega ~35% dedicando horas exclusivas. (+20%)
                    </span>
                  </div>
                  <button
                    type="button"
                    role="switch"
                    aria-checked={isExpress}
                    aria-label="Activar modalidad Express con entrega prioritaria"
                    onClick={() => setIsExpress(!isExpress)}
                    className={cn(
                      'w-12 h-6 rounded-full transition-colors relative cursor-pointer shrink-0',
                      isExpress ? 'bg-indigo-600' : 'bg-slate-300'
                    )}
                  >
                    <span
                      className={cn(
                        'block w-4 h-4 rounded-full bg-white shadow-xs transition-transform',
                        isExpress ? 'translate-x-7' : 'translate-x-1'
                      )}
                    />
                  </button>
                </div>
              </div>

              {/* Live Summary Card (Right col) */}
              <div className="lg:col-span-5 lg:sticky lg:top-28">
                <div className="rounded-2xl bg-white border border-slate-200/90 p-6 sm:p-7 shadow-[var(--shadow-card-hover)]">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
                      Resumen Estimado
                    </span>
                    <span className="text-xs font-mono text-indigo-700 bg-indigo-50 border border-indigo-200/70 px-2.5 py-0.5 rounded-full font-semibold">
                      Referencial
                    </span>
                  </div>

                  {/* Selected item breakdown */}
                  <div className="py-4 space-y-3 text-xs sm:text-sm text-slate-700 border-b border-slate-200">
                    <div className="flex justify-between gap-3">
                      <span className="text-slate-600">{currentType.name}</span>
                      <span className="font-mono font-bold text-slate-900 tabular-nums shrink-0">
                        ${currentType.basePrice}
                      </span>
                    </div>

                    {selectedAddons.length > 0 && (
                      <div className="flex justify-between gap-3">
                        <span className="text-slate-600">
                          {selectedAddons.length} {selectedAddons.length === 1 ? 'complemento seleccionado' : 'complementos seleccionados'}
                        </span>
                        <span className="font-mono font-bold text-emerald-700 tabular-nums shrink-0">
                          +${addonsTotal}
                        </span>
                      </div>
                    )}

                    {isExpress && (
                      <div className="flex justify-between gap-3 text-indigo-700 font-medium">
                        <span>Recargo entrega Express (+20%)</span>
                        <span className="font-mono font-bold shrink-0">Incluido</span>
                      </div>
                    )}
                  </div>

                  {/* Total Price Display */}
                  <div className="py-6 text-center">
                    <div className="text-xs text-slate-500 uppercase font-semibold tracking-wider">
                      Inversión Estimada
                    </div>
                    <m.div
                      key={rawTotal}
                      initial={{ opacity: 0.6, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.18 }}
                      className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 mt-1 tabular-nums"
                    >
                      <span className="text-indigo-600 text-3xl font-extrabold mr-0.5">$</span>
                      {rawTotal}
                      <span className="text-xs font-sans text-slate-500 font-semibold ml-1.5">
                        USD
                      </span>
                    </m.div>

                    {/* Delivery timeframe */}
                    <div className="inline-flex items-center gap-1.5 text-xs text-slate-700 bg-slate-50 border border-slate-200 px-3.5 py-1.5 rounded-full mt-3 tabular-nums">
                      <Clock className="w-3.5 h-3.5 text-indigo-600" />
                      <span>
                        Tiempo estimado: <strong>~{totalDays} días hábiles</strong>
                      </span>
                    </div>
                  </div>

                  {/* Apply button */}
                  <Button
                    variant="primary"
                    size="lg"
                    fullWidth
                    onClick={handleSendToContact}
                  >
                    <Send className="w-4 h-4" />
                    <span>Cotizar con esta Configuración</span>
                  </Button>

                  <p className="text-[11px] text-slate-500 text-center mt-3 leading-relaxed">
                    * El valor final se confirmará tras revisar los requerimientos específicos de tu proyecto.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
