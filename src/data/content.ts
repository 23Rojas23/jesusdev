import type { Service, Project, TechItem, Testimonial, PricingPlan, FaqItem } from '../types';

export const personalInfo = {
  name: "Jesus Rojas",
  brandName: "JesusDev",
  title: "Desarrollador Web Frontend | React & Tailwind CSS",
  tagline: "Desarrollo sitios web modernos, rápidos y optimizados con React y Tailwind CSS.",
  bio: "Desarrollador web enfocado en la creación de landing pages y sitios web modernos. Comprometido con el código limpio, las mejores prácticas y el aprendizaje continuo.",
  email: "jesusenrique230701@gmail.com",
  phone: "+58 412 969 3441",
  whatsappNumber: "584129693441",
  whatsappMessage: "¡Hola Jesus! Me gustaría consultar sobre un desarrollo web.",
  location: "Valencia, Venezuela",
  availableForHire: true,
  averageLoadTime: "< 0.8s",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
  calendly: "https://calendly.com",
};

export const servicesData: Service[] = [
  {
    id: "landing-pages",
    title: "Landing Pages de Alta Conversión",
    description: "Páginas de aterrizaje diseñadas estratégicamente para captar clientes potenciales, presentar productos y maximizar ventas.",
    iconName: "Zap",
    features: [
      "Diseño persuasivo centrado en conversión (CRO)",
      "Tiempos de carga ultrarrápidos (< 1 segundo)",
      "100% adaptable a teléfonos, tablets y computadoras",
      "Integración directa con WhatsApp, CRM y correos",
      "Optimización SEO básica y píxeles de seguimiento"
    ],
    techs: ["React", "Tailwind CSS", "Vite", "TypeScript"],
    highlight: true,
  },
  {
    id: "custom-web",
    title: "Sitios Web Corporativos a Medida",
    description: "Sitios web profesionales multi-sección que transmiten credibilidad, autoridad y posicionan tu marca en lo más alto.",
    iconName: "Layout",
    features: [
      "Arquitectura de información profesional",
      "Diseño UI/UX exclusivo (sin plantillas genéricas)",
      "Animaciones sutiles y experiencia fluida",
      "Estructura optimizada para posicionar en Google (SEO)",
      "Panel para gestionar contenidos o blog opcional"
    ],
    techs: ["React", "Next.js", "Tailwind CSS", "SEO"]
  },
  {
    id: "web-apps",
    title: "Aplicaciones Web & Paneles SaaS",
    description: "Sistemas web interactivos con lógica de negocio, autenticación, roles de usuario y paneles de administración.",
    iconName: "Layers",
    features: [
      "Autenticación segura (Login, roles, JWT)",
      "Dashboards con métricas y gráficos interactivos",
      "Bases de datos optimizadas en tiempo real",
      "Conexión con APIs externas y pasarelas de pago",
      "Arquitectura escalable y mantenible"
    ],
    techs: ["React", "Node.js", "Express", "PostgreSQL", "Supabase"],
    highlight: true,
  },
  {
    id: "ecommerce",
    title: "E-Commerce & Catálogos Digitales",
    description: "Tiendas online diseñadas para brindar una experiencia de compra rápida y sin fricción a tus clientes.",
    iconName: "ShoppingCart",
    features: [
      "Catálogo dinámico con filtros y buscador",
      "Carrito de compras persistente e intuitivo",
      "Integración de pasarelas (Stripe, Mercado Pago, PayPal)",
      "Panel para control de inventario y pedidos",
      "Checkout optimizado para reducir abandono de carrito"
    ],
    techs: ["React", "Stripe API", "Node.js", "Tailwind CSS"]
  },
  {
    id: "seo-performance",
    title: "Optimización de Rendimiento & SEO",
    description: "¿Tu web es lenta o no aparece en Google? La optimizo a fondo para alcanzar puntuaciones perfectas en Google Lighthouse.",
    iconName: "TrendingUp",
    features: [
      "Auditoría técnica profunda de Core Web Vitals",
      "Compresión de assets, carga diferida y caching",
      "Indexación SEO On-Page (meta tags, sitemap, Schema.org)",
      "Puntuación 95-100 en Google PageSpeed",
      "Mejora radical de la retención de usuarios"
    ],
    techs: ["Lighthouse", "Core Web Vitals", "Next.js", "Clean Code"]
  },
  {
    id: "maintenance",
    title: "Mantenimiento, Soporte & APIs",
    description: "Acompañamiento continuo para mantener tu infraestructura web actualizada, segura y libre de errores.",
    iconName: "ShieldCheck",
    features: [
      "Actualizaciones periódicas de dependencias y seguridad",
      "Monitoreo de caídas y copias de seguridad",
      "Solución prioritaria de bugs o mejoras visuales",
      "Integración de webhooks y automatizaciones",
      "Asesoría técnica y soporte directo por WhatsApp"
    ],
    techs: ["Git", "Docker", "REST APIs", "Cloud Hosting"]
  }
];

export const techStackData: TechItem[] = [
  // Frontend
  { name: "React", category: "frontend", level: "Frontend", iconColor: "text-cyan-400" },
  { name: "TypeScript", category: "frontend", level: "Tipado", iconColor: "text-blue-400" },
  { name: "Tailwind CSS", category: "frontend", level: "Estilos & UI", iconColor: "text-teal-400" },
  { name: "Next.js", category: "frontend", level: "Framework", iconColor: "text-slate-100" },
  { name: "Vite", category: "frontend", level: "Build Tool", iconColor: "text-purple-400" },
  { name: "HTML5 / CSS3 Moderno", category: "frontend", level: "Semántica Web", iconColor: "text-orange-400" },
  // Backend
  { name: "Node.js", category: "backend", level: "Backend", iconColor: "text-emerald-400" },
  { name: "Express.js", category: "backend", level: "Servidor", iconColor: "text-gray-300" },
  { name: "RESTful APIs", category: "backend", level: "Integración", iconColor: "text-yellow-400" },
  { name: "Supabase / Firebase", category: "backend", level: "BaaS & Auth", iconColor: "text-emerald-500" },
  { name: "PostgreSQL / MySQL", category: "database", level: "Base de Datos", iconColor: "text-indigo-400" },
  { name: "MongoDB", category: "database", level: "NoSQL", iconColor: "text-green-500" },
  // Tools
  { name: "Git & GitHub", category: "tools", level: "Control de Versiones", iconColor: "text-orange-500" },
  { name: "Vercel / Netlify", category: "tools", level: "Hosting & Deploy", iconColor: "text-slate-200" },
  { name: "Docker", category: "tools", level: "Contenedores", iconColor: "text-sky-400" },
  { name: "Figma (UI/UX)", category: "tools", level: "Diseño & UI", iconColor: "text-pink-400" },
];

// Los proyectos se añadirán conforme se desarrollen prácticas o proyectos personales
export const projectsData: Project[] = [];

export const processSteps = [
  {
    step: "01",
    title: "Descubrimiento & Estrategia",
    description: "Analizamos tu negocio, competencia y objetivos. Definimos la estructura ideal y el camino más rápido para conseguir resultados.",
    duration: "Días 1 - 2",
    icon: "Compass",
  },
  {
    step: "02",
    title: "Diseño UI/UX & Prototipo",
    description: "Diseño visual moderno adaptado a la identidad de tu marca. Validamos la experiencia de usuario antes de escribir una sola línea de código.",
    duration: "Días 3 - 5",
    icon: "Figma",
  },
  {
    step: "03",
    title: "Desarrollo Ágil & Código Limpio",
    description: "Programación con tecnologías punteras (React, Vite, Tailwind). Código semántico, limpio, modular y con pruebas continuas.",
    duration: "Días 6 - 12",
    icon: "Code",
  },
  {
    step: "04",
    title: "Pruebas, Optimización & SEO",
    description: "Verificamos compatibilidad en todos los navegadores y pantallas. Maximizamos velocidad en Google PageSpeed y configuramos SEO.",
    duration: "Día 13",
    icon: "CheckCircle",
  },
  {
    step: "05",
    title: "Lanzamiento & Capacitación",
    description: "Publicación oficial en tu dominio, entrega de accesos y una sesión de video personalizada para enseñarte a gestionar tu nueva web.",
    duration: "Día 14",
    icon: "Rocket",
  }
];

export const pricingPlans: PricingPlan[] = [
  {
    id: "landing-express",
    name: "Landing Express",
    description: "Ideal para profesionales, marcas personales o lanzamientos que necesitan captar clientes por WhatsApp rápidamente.",
    price: "$120",
    period: "pago único",
    deliveryTime: "Entrega en 4 a 6 días hábiles",
    features: [
      "Diseño exclusivo de 1 página (One-Page)",
      "Hasta 5 secciones estratégicas de alto impacto",
      "100% Responsive (Móvil, Tablet, PC)",
      "Botón directo de WhatsApp & Formulario funcional",
      "Carga ultrarrápida (desplegada en Vercel)",
      "Hosting en la nube sin costo mensual de servidor",
      "15 días de soporte y ajustes incluidos"
    ],
    nonFeatures: [
      "Panel de autogestión de contenidos",
      "Múltiples páginas internas"
    ],
    ctaText: "Elegir Landing Express",
  },
  {
    id: "web-corporativa",
    name: "Web Corporativa Pro",
    description: "La solución completa para empresas y negocios que buscan credibilidad, presencia sólida en Google y más clientes.",
    price: "$200",
    period: "pago único",
    popular: true,
    deliveryTime: "Entrega en 8 a 12 días hábiles",
    features: [
      "Sitio web multi-página (hasta 5 páginas internas)",
      "Diseño UI/UX formal y personalizado a tu marca",
      "Optimización SEO para destacar en Google",
      "Formularios de contacto conectados a correo y WhatsApp",
      "Integración de Google Analytics & Search Console",
      "Alojamiento en la nube sin costo mensual de servidor",
      "30 días de garantía y soporte técnico"
    ],
    nonFeatures: [
      "Panel de autogestión de base de datos"
    ],
    ctaText: "Elegir Web Corporativa",
  },
  {
    id: "web-administrable",
    name: "Web Administrable (CMS)",
    description: "Para negocios que necesitan actualizar su propio catálogo, precios, artículos o contenidos sin depender de un programador.",
    price: "$350",
    period: "pago único",
    deliveryTime: "Entrega en 2 a 3 semanas",
    features: [
      "Estructura web multi-página completa y personalizada",
      "Panel administrativo intuitivo para editar textos, fotos y productos",
      "Catálogo dinámico de productos/servicios con pedido a WhatsApp",
      "Base de datos y backend ligero optimizado",
      "SEO avanzado y carga instantánea",
      "Capacitación en video para enseñarte a usar tu panel",
      "45 días de soporte técnico y acompañamiento"
    ],
    ctaText: "Elegir Web Administrable",
  }
];

// Las opiniones y testimonios se agregarán con clientes y colaboraciones reales
export const testimonialsData: Testimonial[] = [];

export const faqData: FaqItem[] = [
  {
    question: "¿Cuánto tiempo toma tener mi web lista?",
    answer: "Una Landing Express suele estar lista en 4 a 6 días hábiles. Un sitio web corporativo de varias secciones toma entre 8 y 12 días hábiles, mientras que un sitio administrable o catálogo interactivo toma de 2 a 3 semanas según la cantidad de contenidos."
  },
  {
    question: "¿Por qué utilizar React + Vite + Tailwind en vez de WordPress?",
    answer: "A diferencia de WordPress con constructores lentos y plugins pesados que son vulnerables a hackeos y requieren servidores costosos, una web desarrollada con React + Vite + Tailwind ofrece velocidades de carga instantáneas (< 1s), puntuaciones perfectas en Google (100% SEO), seguridad absoluta y $0 en costos mensuales de hosting para tu negocio."
  },
  {
    question: "¿El sitio web se verá bien en teléfonos móviles?",
    answer: "¡Totalmente! Todos mis desarrollos siguen la filosofía Mobile-First. Tu sitio web se adaptará con total fluidez a smartphones de cualquier tamaño, tablets, laptops y pantallas gigantes."
  },
  {
    question: "¿Cómo se gestiona el hosting y el dominio? ¿Hay mensualidades?",
    answer: "Me encargo de toda la configuración técnica. Alojo tu proyecto en Vercel, una plataforma en la nube de nivel mundial con plan gratuito sin costo mensual de servidor ($0/mes en infraestructura). El único gasto que realiza el cliente es la compra anual de su dominio (.com), en el cual te asesoro paso a paso."
  },
  {
    question: "¿Cómo es el proceso de pago y qué métodos aceptas en Venezuela?",
    answer: "Trabajamos con un anticipo del 50% para reservar agenda e iniciar el desarrollo, y el 50% restante una vez que revises y apruebes la web antes de la entrega final. Para adaptarnos a Venezuela, aceptamos: Pago Móvil / Transferencia en Bolívares (a tasa acordada), Binance USDT, Zinli, Zelle y efectivo en divisas."
  },
  {
    question: "¿Tendré soporte después de que se entregue la web?",
    answer: "Sí. Todos los paquetes incluyen un periodo de garantía y soporte técnico gratuito (de 15 a 45 días según el plan) para resolver cualquier duda, corregir ajustes o brindar asesoría técnica."
  },
  {
    question: "¿Hay costos de mantenimiento obligatorios?",
    answer: "No hay mensualidades obligatorias. Tu web es 100% tuya una vez entregada y funciona de manera autónoma sin costos ocultos. Si en el futuro deseas que yo agregue nuevas secciones, actualice contenidos o brinde soporte continuo, ofrezco planes opcionales de mantenimiento mensual muy accesibles."
  }
];
