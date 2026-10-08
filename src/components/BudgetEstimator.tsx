import { useState } from 'react';
import { Calculator, Check, Clock, Send } from 'lucide-react';

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

export const BudgetEstimator: React.FC<BudgetEstimatorProps> = ({ onApplyEstimate }) => {
  const projectTypes: ProjectTypeOption[] = [
    {
      id: 'landing',
      name: 'Landing Page de Alta Conversión',
      basePrice: 299,
      baseDays: 6,
      description: 'Ideal para productos, servicios o captación rápida de leads.'
    },
    {
      id: 'corporate',
      name: 'Sitio Web Corporativo Multi-página',
      basePrice: 599,
      baseDays: 12,
      description: 'Presencia formal completa (Inicio, Nosotros, Servicios, Contacto, etc.).'
    },
    {
      id: 'ecommerce',
      name: 'Tienda Online / E-Commerce',
      basePrice: 799,
      baseDays: 18,
      description: 'Catálogo de productos, carrito de compras y pasarela de pago.'
    },
    {
      id: 'webapp',
      name: 'Aplicación Web / Panel SaaS',
      basePrice: 1190,
      baseDays: 25,
      description: 'Lógica a medida, base de datos, dashboard y gestión de usuarios.'
    }
  ];

  const addonsList: AddonOption[] = [
    {
      id: 'multilang',
      name: 'Multi-idioma (ej. ES + EN)',
      price: 80,
      days: 2,
      description: 'Traducción y conmutador de idiomas.'
    },
    {
      id: 'blog',
      name: 'Blog / Gestor de Contenidos',
      price: 120,
      days: 3,
      description: 'Publicación de artículos para posicionamiento orgánico.'
    },
    {
      id: 'payments',
      name: 'Pasarela de Pagos (Stripe / PayPal)',
      price: 150,
      days: 3,
      description: 'Cobros automáticos con tarjetas de crédito/débito.'
    },
    {
      id: 'seo_pack',
      name: 'Pack SEO Avanzado & Schema',
      price: 90,
      days: 2,
      description: 'Meta-tags estructurados, Google Search Console y sitemap.'
    },
    {
      id: 'auth_users',
      name: 'Módulo de Usuarios y Login',
      price: 190,
      days: 4,
      description: 'Registro seguro, recuperación de contraseña y perfiles.'
    },
    {
      id: 'analytics_meta',
      name: 'Píxeles de Anuncios & Conversión',
      price: 60,
      days: 1,
      description: 'Configuración de Meta Pixel, Google Tag Manager y eventos.'
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
    rawTotal = Math.round(rawTotal * 1.25);
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
    <section id="calculadora" className="py-24 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Calculator className="w-3.5 h-3.5 text-cyan-400" />
            Cotizador Interactivo
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Calcula el presupuesto de tu web{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              en 1 minuto
            </span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Selecciona el tipo de proyecto y los complementos que necesitas para obtener una estimación transparente e instantánea.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-10 shadow-2xl shadow-black/50">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Options selection (Left col) */}
            <div className="lg:col-span-7 space-y-8">
              {/* Step 1: Project Type */}
              <div>
                <label className="block text-sm font-bold uppercase tracking-wider text-slate-300 mb-3">
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
                            ? 'bg-indigo-950/60 border-indigo-500 text-white shadow-md shadow-indigo-900/30 ring-1 ring-indigo-500'
                            : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="font-bold text-sm sm:text-base">{type.name}</span>
                          <span className="text-xs font-mono font-semibold text-cyan-400">
                            desde ${type.basePrice}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          {type.description}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Addons */}
              <div>
                <label className="block text-sm font-bold uppercase tracking-wider text-slate-300 mb-3">
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
                            ? 'bg-slate-800/80 border-cyan-500/60 text-white'
                            : 'bg-slate-950/40 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-5 h-5 rounded-md flex items-center justify-center border transition-colors ${
                              isChecked
                                ? 'bg-cyan-500 border-cyan-400 text-slate-950'
                                : 'border-slate-700 bg-slate-900'
                            }`}
                          >
                            {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                          </div>
                          <div>
                            <div className="text-xs sm:text-sm font-medium text-slate-200">
                              {addon.name}
                            </div>
                            <div className="text-[11px] text-slate-400">{addon.description}</div>
                          </div>
                        </div>
                        <span className="text-xs font-mono font-semibold text-emerald-400 shrink-0">
                          +${addon.price}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Urgency toggle */}
              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center justify-between gap-4">
                <div>
                  <span className="text-sm font-bold text-white block">
                    Modalidad Express / Entrega Prioritaria
                  </span>
                  <span className="text-xs text-slate-400">
                    Reduce el plazo de entrega ~35% dedicando horas exclusivas. (+25%)
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsExpress(!isExpress)}
                  className={`w-12 h-6 rounded-full transition-colors relative cursor-pointer ${
                    isExpress ? 'bg-cyan-500' : 'bg-slate-800'
                  }`}
                >
                  <span
                    className={`block w-4 h-4 rounded-full bg-white transition-transform ${
                      isExpress ? 'translate-x-7' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Live Summary Card (Right col) */}
            <div className="lg:col-span-5 sticky top-28">
              <div className="rounded-2xl bg-gradient-to-b from-slate-950 to-slate-900 border border-indigo-500/40 p-6 sm:p-7 shadow-xl shadow-indigo-950/30">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                    Resumen Estimado
                  </span>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2.5 py-0.5 rounded-full">
                    Aproximado
                  </span>
                </div>

                {/* Selected item breakdown */}
                <div className="py-4 space-y-3 text-xs sm:text-sm text-slate-300 border-b border-slate-800">
                  <div className="flex justify-between">
                    <span className="text-slate-400">{currentType.name}</span>
                    <span className="font-mono font-semibold">${currentType.basePrice}</span>
                  </div>

                  {selectedAddons.length > 0 && (
                    <div className="flex justify-between">
                      <span className="text-slate-400">
                        {selectedAddons.length} complementos seleccionados
                      </span>
                      <span className="font-mono font-semibold">+${addonsTotal}</span>
                    </div>
                  )}

                  {isExpress && (
                    <div className="flex justify-between text-cyan-300">
                      <span>Recargo entrega Express (+25%)</span>
                      <span className="font-mono font-semibold">Incluido</span>
                    </div>
                  )}
                </div>

                {/* Total Price Display */}
                <div className="py-6 text-center">
                  <div className="text-xs text-slate-400 uppercase font-semibold tracking-wider">
                    Inversión Estimada
                  </div>
                  <div className="text-4xl sm:text-5xl font-black text-white mt-1">
                    <span className="text-cyan-400 text-3xl font-extrabold">$</span>
                    {rawTotal}
                    <span className="text-xs text-slate-400 font-normal ml-1">USD</span>
                  </div>

                  {/* Delivery timeframe */}
                  <div className="inline-flex items-center gap-1.5 text-xs text-slate-300 bg-slate-800/80 px-3 py-1.5 rounded-full mt-3">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    <span>
                      Tiempo estimado: <strong>~{totalDays} días hábiles</strong>
                    </span>
                  </div>
                </div>

                {/* Apply button */}
                <button
                  type="button"
                  onClick={handleSendToContact}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-bold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 shadow-lg shadow-indigo-600/30 transition-all cursor-pointer transform hover:-translate-y-0.5 text-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Cotizar con esta Configuración</span>
                </button>

                <p className="text-[11px] text-slate-400 text-center mt-3">
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
