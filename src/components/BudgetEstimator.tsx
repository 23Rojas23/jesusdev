import { useState } from 'react';
import type { FC } from 'react';
import { Check, Clock, Send } from 'lucide-react';

interface BudgetEstimatorProps {
  onApplyEstimate: (estimateSummary: string, priceEstimate: number) => void;
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

export const BudgetEstimator: FC<BudgetEstimatorProps> = ({ onApplyEstimate }) => {
  const projectTypes: ProjectTypeOption[] = [
    {
      id: 'landing',
      name: 'Landing Express',
      basePrice: 120,
      baseDays: 5,
      description: 'Ideal para productos, marcas personales o captación directa a WhatsApp.'
    },
    {
      id: 'corporate',
      name: 'Sitio Web Corporativo Pro',
      basePrice: 200,
      baseDays: 10,
      description: 'Presencia formal multi-página (Inicio, Nosotros, Servicios, Contacto, etc.).'
    },
    {
      id: 'ecommerce',
      name: 'Catálogo Digital con Pedidos a WhatsApp',
      basePrice: 280,
      baseDays: 14,
      description: 'Catálogo dinámico con carrito y botón de pedido directo a WhatsApp o Pago Móvil.'
    },
    {
      id: 'webapp',
      name: 'Web Administrable (CMS) / Sistema a Medida',
      basePrice: 350,
      baseDays: 18,
      description: 'Panel intuitivo para actualizar catálogo, fotos, precios y contenidos sin tocar código.'
    }
  ];

  const addonsList: AddonOption[] = [
    {
      id: 'multilang',
      name: 'Multi-idioma (ej. ES + EN)',
      price: 35,
      days: 2,
      description: 'Traducción estructurada y conmutador de idiomas.'
    },
    {
      id: 'blog',
      name: 'Sección Blog / Noticias',
      price: 45,
      days: 2,
      description: 'Publicación de artículos para posicionamiento orgánico en Google.'
    },
    {
      id: 'payments',
      name: 'Botón de Pago / WhatsApp Checkout',
      price: 40,
      days: 2,
      description: 'Integración para pedidos automáticos a WhatsApp, Pago Móvil o Binance.'
    },
    {
      id: 'seo_pack',
      name: 'Pack SEO Local & Google Maps',
      price: 30,
      days: 1,
      description: 'Indexación en Google Search Console, ficha de Google Maps y meta-tags.'
    },
    {
      id: 'auth_users',
      name: 'Módulo de Clientes / Login',
      price: 60,
      days: 3,
      description: 'Registro seguro, perfiles de usuario y accesos protegidos.'
    },
    {
      id: 'analytics_meta',
      name: 'Píxeles de Meta Ads + Google Analytics',
      price: 25,
      days: 1,
      description: 'Medición de conversiones, clics en WhatsApp y analítica web.'
    }
  ];

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

  const currentType = projectTypes.find((t) => t.id === selectedType) || projectTypes[0];

  const addonsTotal = selectedAddons.reduce((sum, addonId) => {
    const addon = addonsList.find((a) => a.id === addonId);
    return sum + (addon ? addon.price : 0);
  }, 0);

  const addonsDays = selectedAddons.reduce((sum, addonId) => {
    const addon = addonsList.find((a) => a.id === addonId);
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
      .map((id) => addonsList.find((a) => a.id === id)?.name)
      .filter(Boolean)
      .join(', ');

    const summary = `Tipo: ${currentType.name} | Opciones extra: ${
      chosenAddonsNames || 'Ninguna'
    } | Modalidad: ${isExpress ? 'Entrega Express Prioritaria' : 'Entrega Estándar'} | Estimado: ~$${rawTotal} USD`;

    onApplyEstimate(summary, rawTotal);
  };

  return (
    <section id="calculadora" className="py-20 md:py-24 relative scroll-mt-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-2">
            Estimador de Presupuesto
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Calcula la estimación de tu proyecto
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Selecciona el tipo de web y los complementos que necesitas para obtener un cálculo transparente de referencia.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="rounded-2xl bg-slate-50/70 border border-slate-200/90 p-6 sm:p-10 shadow-2xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Options selection (Left col) */}
            <div className="lg:col-span-7 space-y-8">
              {/* Step 1: Project Type */}
              <div>
                <label className="block text-sm font-bold uppercase tracking-wider text-slate-900 mb-3">
                  1. ¿Qué tipo de proyecto necesitas?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {projectTypes.map((type) => {
                    const isSelected = selectedType === type.id;
                    return (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setSelectedType(type.id)}
                        className={`text-left p-4 rounded-xl border transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-indigo-50/60 border-indigo-500 text-slate-900 shadow-sm ring-1 ring-indigo-500'
                            : 'bg-slate-50/60 border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-100/60'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="font-bold text-sm sm:text-base text-slate-900">{type.name}</span>
                          <span className="text-xs font-mono font-bold text-indigo-600">
                            desde ${type.basePrice}
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
                <label className="block text-sm font-bold uppercase tracking-wider text-slate-900 mb-3">
                  2. Agrega complementos opcionales:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {addonsList.map((addon) => {
                    const isChecked = selectedAddons.includes(addon.id);
                    return (
                      <div
                        key={addon.id}
                        onClick={() => toggleAddon(addon.id)}
                        className={`p-3 rounded-xl border flex items-center justify-between gap-3 cursor-pointer transition-all ${
                          isChecked
                            ? 'bg-indigo-50/50 border-indigo-400 text-slate-900 shadow-2xs'
                            : 'bg-slate-50/50 border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-100/60'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-5 h-5 rounded-md flex items-center justify-center border transition-colors ${
                              isChecked
                                ? 'bg-indigo-600 border-indigo-600 text-white'
                                : 'border-slate-300 bg-white'
                            }`}
                          >
                            {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                          </div>
                          <div>
                            <div className="text-xs sm:text-sm font-semibold text-slate-900">
                              {addon.name}
                            </div>
                            <div className="text-[11px] text-slate-500">{addon.description}</div>
                          </div>
                        </div>
                        <span className="text-xs font-mono font-bold text-emerald-600 shrink-0">
                          +${addon.price}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Urgency toggle */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-4">
                <div>
                  <span className="text-sm font-bold text-slate-900 block">
                    Modalidad Express / Entrega Prioritaria
                  </span>
                  <span className="text-xs text-slate-600">
                    Reduce el plazo de entrega ~35% dedicando horas exclusivas. (+25%)
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsExpress(!isExpress)}
                  className={`w-12 h-6 rounded-full transition-colors relative cursor-pointer ${
                    isExpress ? 'bg-indigo-600' : 'bg-slate-300'
                  }`}
                >
                  <span
                    className={`block w-4 h-4 rounded-full bg-white shadow-xs transition-transform ${
                      isExpress ? 'translate-x-7' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Live Summary Card (Right col) */}
            <div className="lg:col-span-5 sticky top-28">
              <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-7 shadow-sm">
                <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
                    Resumen Estimado
                  </span>
                  <span className="text-xs font-mono text-slate-700 bg-slate-100 border border-slate-200 px-2.5 py-0.5 rounded-full font-semibold">
                    Referencial
                  </span>
                </div>

                {/* Selected item breakdown */}
                <div className="py-4 space-y-3 text-xs sm:text-sm text-slate-700 border-b border-slate-200">
                  <div className="flex justify-between">
                    <span className="text-slate-600">{currentType.name}</span>
                    <span className="font-mono font-bold text-slate-900">${currentType.basePrice}</span>
                  </div>

                  {selectedAddons.length > 0 && (
                    <div className="flex justify-between">
                      <span className="text-slate-600">
                        {selectedAddons.length} complementos seleccionados
                      </span>
                      <span className="font-mono font-bold text-slate-900">+${addonsTotal}</span>
                    </div>
                  )}

                  {isExpress && (
                    <div className="flex justify-between text-indigo-700 font-medium">
                      <span>Recargo entrega Express (+25%)</span>
                      <span className="font-mono font-bold">Incluido</span>
                    </div>
                  )}
                </div>

                {/* Total Price Display */}
                <div className="py-6 text-center">
                  <div className="text-xs text-slate-500 uppercase font-semibold tracking-wider">
                    Inversión Estimada
                  </div>
                  <div className="text-4xl sm:text-5xl font-black text-slate-900 mt-1">
                    <span className="text-indigo-600 text-3xl font-extrabold">$</span>
                    {rawTotal}
                    <span className="text-xs text-slate-500 font-normal ml-1">USD</span>
                  </div>

                  {/* Delivery timeframe */}
                  <div className="inline-flex items-center gap-1.5 text-xs text-slate-700 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-full mt-3">
                    <Clock className="w-3.5 h-3.5 text-slate-500" />
                    <span>
                      Tiempo estimado: <strong>~{totalDays} días hábiles</strong>
                    </span>
                  </div>
                </div>

                {/* Apply button */}
                <button
                  type="button"
                  onClick={handleSendToContact}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-bold text-white bg-indigo-600 hover:bg-indigo-700 shadow-xs hover:shadow transition-all cursor-pointer text-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Cotizar con esta Configuración</span>
                </button>

                <p className="text-[11px] text-slate-500 text-center mt-3">
                  * El valor final se confirmará tras revisar los requerimientos específicos de tu proyecto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
